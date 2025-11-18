// https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExoscaleSksNodepoolListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#cluster_id DataExoscaleSksNodepoolList#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#created_at DataExoscaleSksNodepoolList#created_at}
  */
  readonly createdAt?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#deploy_target_id DataExoscaleSksNodepoolList#deploy_target_id}
  */
  readonly deployTargetId?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#description DataExoscaleSksNodepoolList#description}
  */
  readonly description?: string;
  /**
  * Match against this int
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#disk_size DataExoscaleSksNodepoolList#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#id DataExoscaleSksNodepoolList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#instance_pool_id DataExoscaleSksNodepoolList#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#instance_prefix DataExoscaleSksNodepoolList#instance_prefix}
  */
  readonly instancePrefix?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#instance_type DataExoscaleSksNodepoolList#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#ipv6 DataExoscaleSksNodepoolList#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Match against key/values. Keys are matched exactly, while values may be matched as a regex if you supply a string that begins and ends with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#labels DataExoscaleSksNodepoolList#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#name DataExoscaleSksNodepoolList#name}
  */
  readonly name?: string;
  /**
  * Match against this int
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#size DataExoscaleSksNodepoolList#size}
  */
  readonly size?: number;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#state DataExoscaleSksNodepoolList#state}
  */
  readonly state?: string;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#storage_lvm DataExoscaleSksNodepoolList#storage_lvm}
  */
  readonly storageLvm?: boolean | cdktf.IResolvable;
  /**
  * Match against key/values. Keys are matched exactly, while values may be matched as a regex if you supply a string that begins and ends with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#taints DataExoscaleSksNodepoolList#taints}
  */
  readonly taints?: { [key: string]: string };
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#template_id DataExoscaleSksNodepoolList#template_id}
  */
  readonly templateId?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#version DataExoscaleSksNodepoolList#version}
  */
  readonly version?: string;
  /**
  * The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#zone DataExoscaleSksNodepoolList#zone}
  */
  readonly zone: string;
}
export interface DataExoscaleSksNodepoolListNodepoolsKubeletImageGc {
}

export function dataExoscaleSksNodepoolListNodepoolsKubeletImageGcToTerraform(struct?: DataExoscaleSksNodepoolListNodepoolsKubeletImageGc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataExoscaleSksNodepoolListNodepoolsKubeletImageGcToHclTerraform(struct?: DataExoscaleSksNodepoolListNodepoolsKubeletImageGc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataExoscaleSksNodepoolListNodepoolsKubeletImageGcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataExoscaleSksNodepoolListNodepoolsKubeletImageGc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleSksNodepoolListNodepoolsKubeletImageGc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high_threshold - computed: true, optional: false, required: false
  public get highThreshold() {
    return this.getNumberAttribute('high_threshold');
  }

  // low_threshold - computed: true, optional: false, required: false
  public get lowThreshold() {
    return this.getNumberAttribute('low_threshold');
  }

  // min_age - computed: true, optional: false, required: false
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
}

export class DataExoscaleSksNodepoolListNodepoolsKubeletImageGcList extends cdktf.ComplexList {

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
  public get(index: number): DataExoscaleSksNodepoolListNodepoolsKubeletImageGcOutputReference {
    return new DataExoscaleSksNodepoolListNodepoolsKubeletImageGcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataExoscaleSksNodepoolListNodepools {
}

export function dataExoscaleSksNodepoolListNodepoolsToTerraform(struct?: DataExoscaleSksNodepoolListNodepools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataExoscaleSksNodepoolListNodepoolsToHclTerraform(struct?: DataExoscaleSksNodepoolListNodepools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataExoscaleSksNodepoolListNodepoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataExoscaleSksNodepoolListNodepools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleSksNodepoolListNodepools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_affinity_group_ids - computed: true, optional: false, required: false
  public get antiAffinityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('anti_affinity_group_ids'));
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deploy_target_id - computed: true, optional: false, required: false
  public get deployTargetId() {
    return this.getStringAttribute('deploy_target_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pool_id - computed: true, optional: false, required: false
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }

  // instance_prefix - computed: true, optional: false, required: false
  public get instancePrefix() {
    return this.getStringAttribute('instance_prefix');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // kubelet_image_gc - computed: true, optional: false, required: false
  private _kubeletImageGc = new DataExoscaleSksNodepoolListNodepoolsKubeletImageGcList(this, "kubelet_image_gc", true);
  public get kubeletImageGc() {
    return this._kubeletImageGc;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_network_ids - computed: true, optional: false, required: false
  public get privateNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('private_network_ids'));
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_lvm - computed: true, optional: false, required: false
  public get storageLvm() {
    return this.getBooleanAttribute('storage_lvm');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new cdktf.StringMap(this, "taints");
  public get taints() {
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

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataExoscaleSksNodepoolListNodepoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataExoscaleSksNodepoolListNodepoolsOutputReference {
    return new DataExoscaleSksNodepoolListNodepoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list exoscale_sks_nodepool_list}
*/
export class DataExoscaleSksNodepoolList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_sks_nodepool_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataExoscaleSksNodepoolList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataExoscaleSksNodepoolList to import
  * @param importFromId The id of the existing DataExoscaleSksNodepoolList that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataExoscaleSksNodepoolList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_sks_nodepool_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/data-sources/sks_nodepool_list exoscale_sks_nodepool_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExoscaleSksNodepoolListConfig
  */
  public constructor(scope: Construct, id: string, config: DataExoscaleSksNodepoolListConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_sks_nodepool_list',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.67.1',
        providerVersionConstraint: '0.67.1'
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
    this._size = config.size;
    this._state = config.state;
    this._storageLvm = config.storageLvm;
    this._taints = config.taints;
    this._templateId = config.templateId;
    this._version = config.version;
    this._zone = config.zone;
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

  // created_at - computed: false, optional: true, required: false
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

  // instance_pool_id - computed: false, optional: true, required: false
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

  // nodepools - computed: true, optional: false, required: false
  private _nodepools = new DataExoscaleSksNodepoolListNodepoolsList(this, "nodepools", false);
  public get nodepools() {
    return this._nodepools;
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

  // state - computed: false, optional: true, required: false
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

  // template_id - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
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
      size: cdktf.numberToTerraform(this._size),
      state: cdktf.stringToTerraform(this._state),
      storage_lvm: cdktf.booleanToTerraform(this._storageLvm),
      taints: cdktf.hashMapper(cdktf.stringToTerraform)(this._taints),
      template_id: cdktf.stringToTerraform(this._templateId),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
