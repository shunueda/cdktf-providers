// https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ❗ A list of [exoscale_anti_affinity_group](./anti_affinity_group.md) (IDs) to attach to the instance (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#anti_affinity_group_ids ComputeInstance#anti_affinity_group_ids}
  */
  readonly antiAffinityGroupIds?: string[];
  /**
  * A list of [exoscale_block_storage_volume](./block_storage_volume.md) (ID) to attach to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#block_storage_volume_ids ComputeInstance#block_storage_volume_ids}
  */
  readonly blockStorageVolumeIds?: string[];
  /**
  * ❗ A deploy target ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#deploy_target_id ComputeInstance#deploy_target_id}
  */
  readonly deployTargetId?: string;
  /**
  * Mark the instance as protected, the Exoscale API will refuse to delete the instance until the protection is removed (boolean; default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#destroy_protected ComputeInstance#destroy_protected}
  */
  readonly destroyProtected?: boolean | cdktf.IResolvable;
  /**
  * The instance disk size (GiB; at least `10`). Can not be decreased after creation. **WARNING**: updating this attribute stops/restarts the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#disk_size ComputeInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * A list of [exoscale_elastic_ip](./elastic_ip.md) (IDs) to attach to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#elastic_ip_ids ComputeInstance#elastic_ip_ids}
  */
  readonly elasticIpIds?: string[];
  /**
  * ❗ Enable secure boot on the instance (boolean; default: `false`). Can not be changed after the creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#enable_secure_boot ComputeInstance#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Enable TPM on the instance (boolean; default: `false`). Can not be disabled after the creation. **WARNING**: enabling this attribute stops/restarts the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#enable_tpm ComputeInstance#enable_tpm}
  */
  readonly enableTpm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#id ComputeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable IPv6 on the instance (boolean; default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#ipv6 ComputeInstance#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * A map of key/value labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#labels ComputeInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The compute instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#name ComputeInstance#name}
  */
  readonly name: string;
  /**
  * Whether the instance is private (no public IP addresses; default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#private ComputeInstance#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Domain name for reverse DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}
  */
  readonly reverseDns?: string;
  /**
  * A list of [exoscale_security_group](./security_group.md) (IDs) to attach to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#security_group_ids ComputeInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * ❗ The [exoscale_ssh_key](./ssh_key.md) (name) to authorize in the instance (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#ssh_key ComputeInstance#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * ❗ The list of [exoscale_ssh_key](./ssh_key.md) (name) to authorize in the instance (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * The instance state (`running` or `stopped`; default: `running`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#state ComputeInstance#state}
  */
  readonly state?: string;
  /**
  * ❗ The [exoscale_template](../data-sources/template.md) (ID) to use when creating the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#template_id ComputeInstance#template_id}
  */
  readonly templateId: string;
  /**
  * The instance type (`<family>.<size>`, e.g. `standard.medium`; use the [Exoscale CLI](https://github.com/exoscale/cli/) - `exo compute instance-type list` - for the list of available types). **WARNING**: updating this attribute stops/restarts the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#type ComputeInstance#type}
  */
  readonly type: string;
  /**
  * [cloud-init](https://cloudinit.readthedocs.io/) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#user_data ComputeInstance#user_data}
  */
  readonly userData?: string;
  /**
  * ❗ The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#zone ComputeInstance#zone}
  */
  readonly zone: string;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#network_interface ComputeInstance#network_interface}
  */
  readonly networkInterface?: ComputeInstanceNetworkInterface[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}
  */
  readonly timeouts?: ComputeInstanceTimeouts;
}
export interface ComputeInstanceNetworkInterface {
  /**
  * The IPv4 address to request as static DHCP lease if the network interface is attached to a *managed* private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The [exoscale_private_network](./private_network.md) (ID) to attach to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#network_id ComputeInstance#network_id}
  */
  readonly networkId: string;
}

export function computeInstanceNetworkInterfaceToTerraform(struct?: ComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function computeInstanceNetworkInterfaceToHclTerraform(struct?: ComputeInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._networkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._networkId = value.networkId;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
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
}

export class ComputeInstanceNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkInterfaceOutputReference {
    return new ComputeInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#create ComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#delete ComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#read ComputeInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#update ComputeInstance#update}
  */
  readonly update?: string;
}

export function computeInstanceTimeoutsToTerraform(struct?: ComputeInstanceTimeouts | cdktf.IResolvable): any {
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


export function computeInstanceTimeoutsToHclTerraform(struct?: ComputeInstanceTimeouts | cdktf.IResolvable): any {
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

export class ComputeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance exoscale_compute_instance}
*/
export class ComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_compute_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInstance to import
  * @param importFromId The id of the existing ComputeInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_compute_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.67.1/docs/resources/compute_instance exoscale_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_compute_instance',
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
    this._antiAffinityGroupIds = config.antiAffinityGroupIds;
    this._blockStorageVolumeIds = config.blockStorageVolumeIds;
    this._deployTargetId = config.deployTargetId;
    this._destroyProtected = config.destroyProtected;
    this._diskSize = config.diskSize;
    this._elasticIpIds = config.elasticIpIds;
    this._enableSecureBoot = config.enableSecureBoot;
    this._enableTpm = config.enableTpm;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._labels = config.labels;
    this._name = config.name;
    this._private = config.private;
    this._reverseDns = config.reverseDns;
    this._securityGroupIds = config.securityGroupIds;
    this._sshKey = config.sshKey;
    this._sshKeys = config.sshKeys;
    this._state = config.state;
    this._templateId = config.templateId;
    this._type = config.type;
    this._userData = config.userData;
    this._zone = config.zone;
    this._networkInterface.internalValue = config.networkInterface;
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

  // block_storage_volume_ids - computed: false, optional: true, required: false
  private _blockStorageVolumeIds?: string[]; 
  public get blockStorageVolumeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('block_storage_volume_ids'));
  }
  public set blockStorageVolumeIds(value: string[]) {
    this._blockStorageVolumeIds = value;
  }
  public resetBlockStorageVolumeIds() {
    this._blockStorageVolumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageVolumeIdsInput() {
    return this._blockStorageVolumeIds;
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

  // destroy_protected - computed: false, optional: true, required: false
  private _destroyProtected?: boolean | cdktf.IResolvable; 
  public get destroyProtected() {
    return this.getBooleanAttribute('destroy_protected');
  }
  public set destroyProtected(value: boolean | cdktf.IResolvable) {
    this._destroyProtected = value;
  }
  public resetDestroyProtected() {
    this._destroyProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyProtectedInput() {
    return this._destroyProtected;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
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

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_tpm - computed: false, optional: true, required: false
  private _enableTpm?: boolean | cdktf.IResolvable; 
  public get enableTpm() {
    return this.getBooleanAttribute('enable_tpm');
  }
  public set enableTpm(value: boolean | cdktf.IResolvable) {
    this._enableTpm = value;
  }
  public resetEnableTpm() {
    this._enableTpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTpmInput() {
    return this._enableTpm;
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

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
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

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
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

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // private_network_ids - computed: true, optional: false, required: false
  public get privateNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('private_network_ids'));
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // reverse_dns - computed: false, optional: true, required: false
  private _reverseDns?: string; 
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }
  public set reverseDns(value: string) {
    this._reverseDns = value;
  }
  public resetReverseDns() {
    this._reverseDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDnsInput() {
    return this._reverseDns;
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

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new ComputeInstanceNetworkInterfaceList(this, "network_interface", true);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ComputeInstanceNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceTimeouts) {
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
      block_storage_volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockStorageVolumeIds),
      deploy_target_id: cdktf.stringToTerraform(this._deployTargetId),
      destroy_protected: cdktf.booleanToTerraform(this._destroyProtected),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      elastic_ip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._elasticIpIds),
      enable_secure_boot: cdktf.booleanToTerraform(this._enableSecureBoot),
      enable_tpm: cdktf.booleanToTerraform(this._enableTpm),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      private: cdktf.booleanToTerraform(this._private),
      reverse_dns: cdktf.stringToTerraform(this._reverseDns),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      state: cdktf.stringToTerraform(this._state),
      template_id: cdktf.stringToTerraform(this._templateId),
      type: cdktf.stringToTerraform(this._type),
      user_data: cdktf.stringToTerraform(this._userData),
      zone: cdktf.stringToTerraform(this._zone),
      network_interface: cdktf.listMapper(computeInstanceNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      timeouts: computeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      block_storage_volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockStorageVolumeIds),
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
      destroy_protected: {
        value: cdktf.booleanToHclTerraform(this._destroyProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      enable_secure_boot: {
        value: cdktf.booleanToHclTerraform(this._enableSecureBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tpm: {
        value: cdktf.booleanToHclTerraform(this._enableTpm),
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
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reverse_dns: {
        value: cdktf.stringToHclTerraform(this._reverseDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface: {
        value: cdktf.listMapperHcl(computeInstanceNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceNetworkInterfaceList",
      },
      timeouts: {
        value: computeInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
