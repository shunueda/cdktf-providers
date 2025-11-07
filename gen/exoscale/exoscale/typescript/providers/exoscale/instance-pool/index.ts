// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstancePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of [exoscale_anti_affinity_group](./anti_affinity_group.md) (IDs; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#affinity_group_ids InstancePool#affinity_group_ids}
  */
  readonly affinityGroupIds?: string[];
  /**
  * A list of [exoscale_anti_affinity_group](./anti_affinity_group.md) (IDs; may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#anti_affinity_group_ids InstancePool#anti_affinity_group_ids}
  */
  readonly antiAffinityGroupIds?: string[];
  /**
  * A deploy target ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#deploy_target_id InstancePool#deploy_target_id}
  */
  readonly deployTargetId?: string;
  /**
  * A free-form text describing the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#description InstancePool#description}
  */
  readonly description?: string;
  /**
  * The managed instances disk size (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#disk_size InstancePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * A list of [exoscale_elastic_ip](./elastic_ip.md) (IDs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#elastic_ip_ids InstancePool#elastic_ip_ids}
  */
  readonly elasticIpIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#id InstancePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The string used to prefix managed instances name (default: `pool`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#instance_prefix InstancePool#instance_prefix}
  */
  readonly instancePrefix?: string;
  /**
  * The managed compute instances type (`<family>.<size>`, e.g. `standard.medium`; use the [Exoscale CLI](https://github.com/exoscale/cli/) - `exo compute instance-type list` - for the list of available types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#instance_type InstancePool#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Enable IPv6 on managed instances (boolean; default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#ipv6 InstancePool#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The [exoscale_ssh_key](./ssh_key.md) (name) to authorize in the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#key_pair InstancePool#key_pair}
  */
  readonly keyPair?: string;
  /**
  * A map of key/value labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#labels InstancePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Minimum number of running Instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#min_available InstancePool#min_available}
  */
  readonly minAvailable?: number;
  /**
  * The instance pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#name InstancePool#name}
  */
  readonly name: string;
  /**
  * A list of [exoscale_private_network](./private_network.md) (IDs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#network_ids InstancePool#network_ids}
  */
  readonly networkIds?: string[];
  /**
  * A list of [exoscale_security_group](./security_group.md) (IDs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#security_group_ids InstancePool#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The managed instances type. Please use the `instance_type` argument instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#service_offering InstancePool#service_offering}
  */
  readonly serviceOffering?: string;
  /**
  * The number of managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#size InstancePool#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#state InstancePool#state}
  */
  readonly state?: string;
  /**
  * The [exoscale_template](../data-sources/template.md) (ID) to use when creating the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#template_id InstancePool#template_id}
  */
  readonly templateId: string;
  /**
  * [cloud-init](http://cloudinit.readthedocs.io/) configuration to apply to the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#user_data InstancePool#user_data}
  */
  readonly userData?: string;
  /**
  * The list of managed instances (IDs). Please use the `instances.*.id` attribute instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#virtual_machines InstancePool#virtual_machines}
  */
  readonly virtualMachines?: string[];
  /**
  * ❗ The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#zone InstancePool#zone}
  */
  readonly zone: string;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#instances InstancePool#instances}
  */
  readonly instances?: InstancePoolInstances[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#timeouts InstancePool#timeouts}
  */
  readonly timeouts?: InstancePoolTimeouts;
}
export interface InstancePoolInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#id InstancePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#name InstancePool#name}
  */
  readonly name?: string;
}

export function instancePoolInstancesToTerraform(struct?: InstancePoolInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function instancePoolInstancesToHclTerraform(struct?: InstancePoolInstances | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePoolInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstancePoolInstances | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePoolInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
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

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
}

export class InstancePoolInstancesList extends cdktf.ComplexList {
  public internalValue? : InstancePoolInstances[] | cdktf.IResolvable

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
  public get(index: number): InstancePoolInstancesOutputReference {
    return new InstancePoolInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstancePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#create InstancePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#delete InstancePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#read InstancePool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#update InstancePool#update}
  */
  readonly update?: string;
}

export function instancePoolTimeoutsToTerraform(struct?: InstancePoolTimeouts | cdktf.IResolvable): any {
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


export function instancePoolTimeoutsToHclTerraform(struct?: InstancePoolTimeouts | cdktf.IResolvable): any {
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

export class InstancePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstancePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InstancePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool exoscale_instance_pool}
*/
export class InstancePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_instance_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstancePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstancePool to import
  * @param importFromId The id of the existing InstancePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstancePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_instance_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/instance_pool exoscale_instance_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstancePoolConfig
  */
  public constructor(scope: Construct, id: string, config: InstancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_instance_pool',
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
    this._affinityGroupIds = config.affinityGroupIds;
    this._antiAffinityGroupIds = config.antiAffinityGroupIds;
    this._deployTargetId = config.deployTargetId;
    this._description = config.description;
    this._diskSize = config.diskSize;
    this._elasticIpIds = config.elasticIpIds;
    this._id = config.id;
    this._instancePrefix = config.instancePrefix;
    this._instanceType = config.instanceType;
    this._ipv6 = config.ipv6;
    this._keyPair = config.keyPair;
    this._labels = config.labels;
    this._minAvailable = config.minAvailable;
    this._name = config.name;
    this._networkIds = config.networkIds;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceOffering = config.serviceOffering;
    this._size = config.size;
    this._state = config.state;
    this._templateId = config.templateId;
    this._userData = config.userData;
    this._virtualMachines = config.virtualMachines;
    this._zone = config.zone;
    this._instances.internalValue = config.instances;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_group_ids - computed: false, optional: true, required: false
  private _affinityGroupIds?: string[]; 
  public get affinityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('affinity_group_ids'));
  }
  public set affinityGroupIds(value: string[]) {
    this._affinityGroupIds = value;
  }
  public resetAffinityGroupIds() {
    this._affinityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupIdsInput() {
    return this._affinityGroupIds;
  }

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

  // disk_size - computed: true, optional: true, required: false
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

  // elastic_ip_ids - computed: false, optional: true, required: false
  private _elasticIpIds?: string[]; 
  public get elasticIpIds() {
    return cdktf.Fn.tolist(this.getListAttribute('elastic_ip_ids'));
  }
  public set elasticIpIds(value: string[]) {
    this._elasticIpIds = value;
  }
  public resetElasticIpIds() {
    this._elasticIpIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpIdsInput() {
    return this._elasticIpIds;
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

  // instance_type - computed: true, optional: true, required: false
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

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
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

  // min_available - computed: true, optional: true, required: false
  private _minAvailable?: number; 
  public get minAvailable() {
    return this.getNumberAttribute('min_available');
  }
  public set minAvailable(value: number) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
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

  // network_ids - computed: false, optional: true, required: false
  private _networkIds?: string[]; 
  public get networkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_ids'));
  }
  public set networkIds(value: string[]) {
    this._networkIds = value;
  }
  public resetNetworkIds() {
    this._networkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdsInput() {
    return this._networkIds;
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

  // service_offering - computed: true, optional: true, required: false
  private _serviceOffering?: string; 
  public get serviceOffering() {
    return this.getStringAttribute('service_offering');
  }
  public set serviceOffering(value: string) {
    this._serviceOffering = value;
  }
  public resetServiceOffering() {
    this._serviceOffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOfferingInput() {
    return this._serviceOffering;
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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
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

  // virtual_machines - computed: true, optional: true, required: false
  private _virtualMachines?: string[]; 
  public get virtualMachines() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_machines'));
  }
  public set virtualMachines(value: string[]) {
    this._virtualMachines = value;
  }
  public resetVirtualMachines() {
    this._virtualMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachinesInput() {
    return this._virtualMachines;
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

  // instances - computed: false, optional: true, required: false
  private _instances = new InstancePoolInstancesList(this, "instances", true);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: InstancePoolInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  public resetInstances() {
    this._instances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstancePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstancePoolTimeouts) {
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
      affinity_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._affinityGroupIds),
      anti_affinity_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._antiAffinityGroupIds),
      deploy_target_id: cdktf.stringToTerraform(this._deployTargetId),
      description: cdktf.stringToTerraform(this._description),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      elastic_ip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._elasticIpIds),
      id: cdktf.stringToTerraform(this._id),
      instance_prefix: cdktf.stringToTerraform(this._instancePrefix),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      min_available: cdktf.numberToTerraform(this._minAvailable),
      name: cdktf.stringToTerraform(this._name),
      network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkIds),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      service_offering: cdktf.stringToTerraform(this._serviceOffering),
      size: cdktf.numberToTerraform(this._size),
      state: cdktf.stringToTerraform(this._state),
      template_id: cdktf.stringToTerraform(this._templateId),
      user_data: cdktf.stringToTerraform(this._userData),
      virtual_machines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualMachines),
      zone: cdktf.stringToTerraform(this._zone),
      instances: cdktf.listMapper(instancePoolInstancesToTerraform, true)(this._instances.internalValue),
      timeouts: instancePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._affinityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      anti_affinity_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._antiAffinityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      elastic_ip_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._elasticIpIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      key_pair: {
        value: cdktf.stringToHclTerraform(this._keyPair),
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
      min_available: {
        value: cdktf.numberToHclTerraform(this._minAvailable),
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
      network_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkIds),
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
      service_offering: {
        value: cdktf.stringToHclTerraform(this._serviceOffering),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
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
      virtual_machines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualMachines),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instances: {
        value: cdktf.listMapperHcl(instancePoolInstancesToHclTerraform, true)(this._instances.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstancePoolInstancesList",
      },
      timeouts: {
        value: instancePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstancePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
