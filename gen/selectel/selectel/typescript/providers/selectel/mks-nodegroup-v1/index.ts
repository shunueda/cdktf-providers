// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MksNodegroupV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#affinity_policy MksNodegroupV1#affinity_policy}
  */
  readonly affinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#autoscale_max_nodes MksNodegroupV1#autoscale_max_nodes}
  */
  readonly autoscaleMaxNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#autoscale_min_nodes MksNodegroupV1#autoscale_min_nodes}
  */
  readonly autoscaleMinNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#availability_zone MksNodegroupV1#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#cluster_id MksNodegroupV1#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#cpus MksNodegroupV1#cpus}
  */
  readonly cpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#enable_autoscale MksNodegroupV1#enable_autoscale}
  */
  readonly enableAutoscale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#flavor_id MksNodegroupV1#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#id MksNodegroupV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#install_nvidia_device_plugin MksNodegroupV1#install_nvidia_device_plugin}
  */
  readonly installNvidiaDevicePlugin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#keypair_name MksNodegroupV1#keypair_name}
  */
  readonly keypairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#labels MksNodegroupV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#local_volume MksNodegroupV1#local_volume}
  */
  readonly localVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#nodes_count MksNodegroupV1#nodes_count}
  */
  readonly nodesCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#preemptible MksNodegroupV1#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#project_id MksNodegroupV1#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#ram_mb MksNodegroupV1#ram_mb}
  */
  readonly ramMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#region MksNodegroupV1#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#user_data MksNodegroupV1#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#volume_gb MksNodegroupV1#volume_gb}
  */
  readonly volumeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#volume_type MksNodegroupV1#volume_type}
  */
  readonly volumeType?: string;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#taints MksNodegroupV1#taints}
  */
  readonly taints?: MksNodegroupV1Taints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#timeouts MksNodegroupV1#timeouts}
  */
  readonly timeouts?: MksNodegroupV1Timeouts;
}
export interface MksNodegroupV1Nodes {
}

export function mksNodegroupV1NodesToTerraform(struct?: MksNodegroupV1Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mksNodegroupV1NodesToHclTerraform(struct?: MksNodegroupV1Nodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MksNodegroupV1NodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MksNodegroupV1Nodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksNodegroupV1Nodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class MksNodegroupV1NodesList extends cdktf.ComplexList {

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
  public get(index: number): MksNodegroupV1NodesOutputReference {
    return new MksNodegroupV1NodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MksNodegroupV1Taints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#effect MksNodegroupV1#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#key MksNodegroupV1#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#value MksNodegroupV1#value}
  */
  readonly value: string;
}

export function mksNodegroupV1TaintsToTerraform(struct?: MksNodegroupV1Taints | cdktf.IResolvable): any {
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


export function mksNodegroupV1TaintsToHclTerraform(struct?: MksNodegroupV1Taints | cdktf.IResolvable): any {
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

export class MksNodegroupV1TaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MksNodegroupV1Taints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MksNodegroupV1Taints | cdktf.IResolvable | undefined) {
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

export class MksNodegroupV1TaintsList extends cdktf.ComplexList {
  public internalValue? : MksNodegroupV1Taints[] | cdktf.IResolvable

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
  public get(index: number): MksNodegroupV1TaintsOutputReference {
    return new MksNodegroupV1TaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MksNodegroupV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#create MksNodegroupV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#delete MksNodegroupV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#update MksNodegroupV1#update}
  */
  readonly update?: string;
}

export function mksNodegroupV1TimeoutsToTerraform(struct?: MksNodegroupV1Timeouts | cdktf.IResolvable): any {
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


export function mksNodegroupV1TimeoutsToHclTerraform(struct?: MksNodegroupV1Timeouts | cdktf.IResolvable): any {
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

export class MksNodegroupV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksNodegroupV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MksNodegroupV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1 selectel_mks_nodegroup_v1}
*/
export class MksNodegroupV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_mks_nodegroup_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MksNodegroupV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MksNodegroupV1 to import
  * @param importFromId The id of the existing MksNodegroupV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MksNodegroupV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_mks_nodegroup_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_nodegroup_v1 selectel_mks_nodegroup_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MksNodegroupV1Config
  */
  public constructor(scope: Construct, id: string, config: MksNodegroupV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_mks_nodegroup_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityPolicy = config.affinityPolicy;
    this._autoscaleMaxNodes = config.autoscaleMaxNodes;
    this._autoscaleMinNodes = config.autoscaleMinNodes;
    this._availabilityZone = config.availabilityZone;
    this._clusterId = config.clusterId;
    this._cpus = config.cpus;
    this._enableAutoscale = config.enableAutoscale;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._installNvidiaDevicePlugin = config.installNvidiaDevicePlugin;
    this._keypairName = config.keypairName;
    this._labels = config.labels;
    this._localVolume = config.localVolume;
    this._nodesCount = config.nodesCount;
    this._preemptible = config.preemptible;
    this._projectId = config.projectId;
    this._ramMb = config.ramMb;
    this._region = config.region;
    this._userData = config.userData;
    this._volumeGb = config.volumeGb;
    this._volumeType = config.volumeType;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_policy - computed: false, optional: true, required: false
  private _affinityPolicy?: string; 
  public get affinityPolicy() {
    return this.getStringAttribute('affinity_policy');
  }
  public set affinityPolicy(value: string) {
    this._affinityPolicy = value;
  }
  public resetAffinityPolicy() {
    this._affinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityPolicyInput() {
    return this._affinityPolicy;
  }

  // autoscale_max_nodes - computed: true, optional: true, required: false
  private _autoscaleMaxNodes?: number; 
  public get autoscaleMaxNodes() {
    return this.getNumberAttribute('autoscale_max_nodes');
  }
  public set autoscaleMaxNodes(value: number) {
    this._autoscaleMaxNodes = value;
  }
  public resetAutoscaleMaxNodes() {
    this._autoscaleMaxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleMaxNodesInput() {
    return this._autoscaleMaxNodes;
  }

  // autoscale_min_nodes - computed: true, optional: true, required: false
  private _autoscaleMinNodes?: number; 
  public get autoscaleMinNodes() {
    return this.getNumberAttribute('autoscale_min_nodes');
  }
  public set autoscaleMinNodes(value: number) {
    this._autoscaleMinNodes = value;
  }
  public resetAutoscaleMinNodes() {
    this._autoscaleMinNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleMinNodesInput() {
    return this._autoscaleMinNodes;
  }

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

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // enable_autoscale - computed: true, optional: true, required: false
  private _enableAutoscale?: boolean | cdktf.IResolvable; 
  public get enableAutoscale() {
    return this.getBooleanAttribute('enable_autoscale');
  }
  public set enableAutoscale(value: boolean | cdktf.IResolvable) {
    this._enableAutoscale = value;
  }
  public resetEnableAutoscale() {
    this._enableAutoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoscaleInput() {
    return this._enableAutoscale;
  }

  // flavor_id - computed: true, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
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

  // install_nvidia_device_plugin - computed: false, optional: false, required: true
  private _installNvidiaDevicePlugin?: boolean | cdktf.IResolvable; 
  public get installNvidiaDevicePlugin() {
    return this.getBooleanAttribute('install_nvidia_device_plugin');
  }
  public set installNvidiaDevicePlugin(value: boolean | cdktf.IResolvable) {
    this._installNvidiaDevicePlugin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installNvidiaDevicePluginInput() {
    return this._installNvidiaDevicePlugin;
  }

  // keypair_name - computed: false, optional: true, required: false
  private _keypairName?: string; 
  public get keypairName() {
    return this.getStringAttribute('keypair_name');
  }
  public set keypairName(value: string) {
    this._keypairName = value;
  }
  public resetKeypairName() {
    this._keypairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairNameInput() {
    return this._keypairName;
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

  // local_volume - computed: true, optional: true, required: false
  private _localVolume?: boolean | cdktf.IResolvable; 
  public get localVolume() {
    return this.getBooleanAttribute('local_volume');
  }
  public set localVolume(value: boolean | cdktf.IResolvable) {
    this._localVolume = value;
  }
  public resetLocalVolume() {
    this._localVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVolumeInput() {
    return this._localVolume;
  }

  // nodegroup_type - computed: true, optional: false, required: false
  public get nodegroupType() {
    return this.getStringAttribute('nodegroup_type');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new MksNodegroupV1NodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // nodes_count - computed: false, optional: false, required: true
  private _nodesCount?: number; 
  public get nodesCount() {
    return this.getNumberAttribute('nodes_count');
  }
  public set nodesCount(value: number) {
    this._nodesCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesCountInput() {
    return this._nodesCount;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // ram_mb - computed: false, optional: true, required: false
  private _ramMb?: number; 
  public get ramMb() {
    return this.getNumberAttribute('ram_mb');
  }
  public set ramMb(value: number) {
    this._ramMb = value;
  }
  public resetRamMb() {
    this._ramMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramMbInput() {
    return this._ramMb;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // volume_gb - computed: true, optional: true, required: false
  private _volumeGb?: number; 
  public get volumeGb() {
    return this.getNumberAttribute('volume_gb');
  }
  public set volumeGb(value: number) {
    this._volumeGb = value;
  }
  public resetVolumeGb() {
    this._volumeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGbInput() {
    return this._volumeGb;
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

  // taints - computed: false, optional: true, required: false
  private _taints = new MksNodegroupV1TaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: MksNodegroupV1Taints[] | cdktf.IResolvable) {
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
  private _timeouts = new MksNodegroupV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MksNodegroupV1Timeouts) {
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
      affinity_policy: cdktf.stringToTerraform(this._affinityPolicy),
      autoscale_max_nodes: cdktf.numberToTerraform(this._autoscaleMaxNodes),
      autoscale_min_nodes: cdktf.numberToTerraform(this._autoscaleMinNodes),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cpus: cdktf.numberToTerraform(this._cpus),
      enable_autoscale: cdktf.booleanToTerraform(this._enableAutoscale),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      install_nvidia_device_plugin: cdktf.booleanToTerraform(this._installNvidiaDevicePlugin),
      keypair_name: cdktf.stringToTerraform(this._keypairName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      local_volume: cdktf.booleanToTerraform(this._localVolume),
      nodes_count: cdktf.numberToTerraform(this._nodesCount),
      preemptible: cdktf.booleanToTerraform(this._preemptible),
      project_id: cdktf.stringToTerraform(this._projectId),
      ram_mb: cdktf.numberToTerraform(this._ramMb),
      region: cdktf.stringToTerraform(this._region),
      user_data: cdktf.stringToTerraform(this._userData),
      volume_gb: cdktf.numberToTerraform(this._volumeGb),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      taints: cdktf.listMapper(mksNodegroupV1TaintsToTerraform, true)(this._taints.internalValue),
      timeouts: mksNodegroupV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_policy: {
        value: cdktf.stringToHclTerraform(this._affinityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscale_max_nodes: {
        value: cdktf.numberToHclTerraform(this._autoscaleMaxNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscale_min_nodes: {
        value: cdktf.numberToHclTerraform(this._autoscaleMinNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
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
      cpus: {
        value: cdktf.numberToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_autoscale: {
        value: cdktf.booleanToHclTerraform(this._enableAutoscale),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      install_nvidia_device_plugin: {
        value: cdktf.booleanToHclTerraform(this._installNvidiaDevicePlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keypair_name: {
        value: cdktf.stringToHclTerraform(this._keypairName),
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
      local_volume: {
        value: cdktf.booleanToHclTerraform(this._localVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodes_count: {
        value: cdktf.numberToHclTerraform(this._nodesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preemptible: {
        value: cdktf.booleanToHclTerraform(this._preemptible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_mb: {
        value: cdktf.numberToHclTerraform(this._ramMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_gb: {
        value: cdktf.numberToHclTerraform(this._volumeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      taints: {
        value: cdktf.listMapperHcl(mksNodegroupV1TaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MksNodegroupV1TaintsList",
      },
      timeouts: {
        value: mksNodegroupV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MksNodegroupV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
