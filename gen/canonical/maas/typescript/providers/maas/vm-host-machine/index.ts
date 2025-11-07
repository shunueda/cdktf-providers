// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmHostMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of CPU cores (defaults to 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#cores VmHostMachine#cores}
  */
  readonly cores?: number;
  /**
  * The VM host machine domain. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#domain VmHostMachine#domain}
  */
  readonly domain?: string;
  /**
  * The VM host machine hostname. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#hostname VmHostMachine#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#id VmHostMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The VM host machine RAM memory, specified in MB (defaults to 2048).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#memory VmHostMachine#memory}
  */
  readonly memory?: number;
  /**
  * List of host CPU cores to pin the VM host machine to. If this is passed, the `cores` parameter is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#pinned_cores VmHostMachine#pinned_cores}
  */
  readonly pinnedCores?: number;
  /**
  * The VM host machine pool. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#pool VmHostMachine#pool}
  */
  readonly pool?: string;
  /**
  * ID or name of the VM host used to compose the new machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#vm_host VmHostMachine#vm_host}
  */
  readonly vmHost: string;
  /**
  * The VM host machine zone. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#zone VmHostMachine#zone}
  */
  readonly zone?: string;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#network_interfaces VmHostMachine#network_interfaces}
  */
  readonly networkInterfaces?: VmHostMachineNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * storage_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#storage_disks VmHostMachine#storage_disks}
  */
  readonly storageDisks?: VmHostMachineStorageDisks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#timeouts VmHostMachine#timeouts}
  */
  readonly timeouts?: VmHostMachineTimeouts;
}
export interface VmHostMachineNetworkInterfaces {
  /**
  * The fabric for the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#fabric VmHostMachine#fabric}
  */
  readonly fabric?: string;
  /**
  * Static IP configured on the new network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#ip_address VmHostMachine#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The network interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#name VmHostMachine#name}
  */
  readonly name: string;
  /**
  * The subnet CIDR for the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#subnet_cidr VmHostMachine#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * The VLAN for the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#vlan VmHostMachine#vlan}
  */
  readonly vlan?: string;
}

export function vmHostMachineNetworkInterfacesToTerraform(struct?: VmHostMachineNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fabric: cdktf.stringToTerraform(struct!.fabric),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    vlan: cdktf.stringToTerraform(struct!.vlan),
  }
}


export function vmHostMachineNetworkInterfacesToHclTerraform(struct?: VmHostMachineNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fabric: {
      value: cdktf.stringToHclTerraform(struct!.fabric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmHostMachineNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmHostMachineNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabric !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabric = this._fabric;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmHostMachineNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabric = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._subnetCidr = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabric = value.fabric;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._subnetCidr = value.subnetCidr;
      this._vlan = value.vlan;
    }
  }

  // fabric - computed: false, optional: true, required: false
  private _fabric?: string; 
  public get fabric() {
    return this.getStringAttribute('fabric');
  }
  public set fabric(value: string) {
    this._fabric = value;
  }
  public resetFabric() {
    this._fabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric;
  }

  // ip_address - computed: false, optional: true, required: false
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

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VmHostMachineNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : VmHostMachineNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VmHostMachineNetworkInterfacesOutputReference {
    return new VmHostMachineNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmHostMachineStorageDisks {
  /**
  * The VM host storage pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#pool VmHostMachine#pool}
  */
  readonly pool?: string;
  /**
  * The storage disk size, specified in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#size_gigabytes VmHostMachine#size_gigabytes}
  */
  readonly sizeGigabytes: number;
}

export function vmHostMachineStorageDisksToTerraform(struct?: VmHostMachineStorageDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool: cdktf.stringToTerraform(struct!.pool),
    size_gigabytes: cdktf.numberToTerraform(struct!.sizeGigabytes),
  }
}


export function vmHostMachineStorageDisksToHclTerraform(struct?: VmHostMachineStorageDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_gigabytes: {
      value: cdktf.numberToHclTerraform(struct!.sizeGigabytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmHostMachineStorageDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmHostMachineStorageDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._sizeGigabytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGigabytes = this._sizeGigabytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmHostMachineStorageDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pool = undefined;
      this._sizeGigabytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pool = value.pool;
      this._sizeGigabytes = value.sizeGigabytes;
    }
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // size_gigabytes - computed: false, optional: false, required: true
  private _sizeGigabytes?: number; 
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }
  public set sizeGigabytes(value: number) {
    this._sizeGigabytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGigabytesInput() {
    return this._sizeGigabytes;
  }
}

export class VmHostMachineStorageDisksList extends cdktf.ComplexList {
  public internalValue? : VmHostMachineStorageDisks[] | cdktf.IResolvable

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
  public get(index: number): VmHostMachineStorageDisksOutputReference {
    return new VmHostMachineStorageDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmHostMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#create VmHostMachine#create}
  */
  readonly create?: string;
}

export function vmHostMachineTimeoutsToTerraform(struct?: VmHostMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function vmHostMachineTimeoutsToHclTerraform(struct?: VmHostMachineTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmHostMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmHostMachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmHostMachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine maas_vm_host_machine}
*/
export class VmHostMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_vm_host_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmHostMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmHostMachine to import
  * @param importFromId The id of the existing VmHostMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmHostMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_vm_host_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vm_host_machine maas_vm_host_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmHostMachineConfig
  */
  public constructor(scope: Construct, id: string, config: VmHostMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_vm_host_machine',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cores = config.cores;
    this._domain = config.domain;
    this._hostname = config.hostname;
    this._id = config.id;
    this._memory = config.memory;
    this._pinnedCores = config.pinnedCores;
    this._pool = config.pool;
    this._vmHost = config.vmHost;
    this._zone = config.zone;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._storageDisks.internalValue = config.storageDisks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // pinned_cores - computed: false, optional: true, required: false
  private _pinnedCores?: number; 
  public get pinnedCores() {
    return this.getNumberAttribute('pinned_cores');
  }
  public set pinnedCores(value: number) {
    this._pinnedCores = value;
  }
  public resetPinnedCores() {
    this._pinnedCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedCoresInput() {
    return this._pinnedCores;
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // vm_host - computed: false, optional: false, required: true
  private _vmHost?: string; 
  public get vmHost() {
    return this.getStringAttribute('vm_host');
  }
  public set vmHost(value: string) {
    this._vmHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmHostInput() {
    return this._vmHost;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new VmHostMachineNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: VmHostMachineNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // storage_disks - computed: false, optional: true, required: false
  private _storageDisks = new VmHostMachineStorageDisksList(this, "storage_disks", false);
  public get storageDisks() {
    return this._storageDisks;
  }
  public putStorageDisks(value: VmHostMachineStorageDisks[] | cdktf.IResolvable) {
    this._storageDisks.internalValue = value;
  }
  public resetStorageDisks() {
    this._storageDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDisksInput() {
    return this._storageDisks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmHostMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmHostMachineTimeouts) {
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
      cores: cdktf.numberToTerraform(this._cores),
      domain: cdktf.stringToTerraform(this._domain),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      pinned_cores: cdktf.numberToTerraform(this._pinnedCores),
      pool: cdktf.stringToTerraform(this._pool),
      vm_host: cdktf.stringToTerraform(this._vmHost),
      zone: cdktf.stringToTerraform(this._zone),
      network_interfaces: cdktf.listMapper(vmHostMachineNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      storage_disks: cdktf.listMapper(vmHostMachineStorageDisksToTerraform, true)(this._storageDisks.internalValue),
      timeouts: vmHostMachineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pinned_cores: {
        value: cdktf.numberToHclTerraform(this._pinnedCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_host: {
        value: cdktf.stringToHclTerraform(this._vmHost),
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
      network_interfaces: {
        value: cdktf.listMapperHcl(vmHostMachineNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmHostMachineNetworkInterfacesList",
      },
      storage_disks: {
        value: cdktf.listMapperHcl(vmHostMachineStorageDisksToHclTerraform, true)(this._storageDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmHostMachineStorageDisksList",
      },
      timeouts: {
        value: vmHostMachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmHostMachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
