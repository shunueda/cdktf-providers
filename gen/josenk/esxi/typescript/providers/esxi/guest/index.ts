// https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Guest boot disk size. Will expand boot disk to this size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#boot_disk_size Guest#boot_disk_size}
  */
  readonly bootDiskSize?: string;
  /**
  * Guest boot disk type. thin, zeroedthick, eagerzeroedthick
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#boot_disk_type Guest#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * Boot type('efi' is boot uefi mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#boot_firmware Guest#boot_firmware}
  */
  readonly bootFirmware?: string;
  /**
  * Source vm path on esxi host to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#clone_from_vm Guest#clone_from_vm}
  */
  readonly cloneFromVm?: string;
  /**
  * esxi diskstore for boot disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#disk_store Guest#disk_store}
  */
  readonly diskStore: string;
  /**
  * esxi guest name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#guest_name Guest#guest_name}
  */
  readonly guestName: string;
  /**
  * The amount of time, in seconds, to wait for a graceful shutdown before doing a forced power off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#guest_shutdown_timeout Guest#guest_shutdown_timeout}
  */
  readonly guestShutdownTimeout?: number;
  /**
  * The amount of guest uptime, in seconds, to wait for an available IP address on this virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#guest_startup_timeout Guest#guest_startup_timeout}
  */
  readonly guestStartupTimeout?: number;
  /**
  * pass data to VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#guestinfo Guest#guestinfo}
  */
  readonly guestinfo?: { [key: string]: string };
  /**
  * Guest OS type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#guestos Guest#guestos}
  */
  readonly guestos?: string;
  /**
  * Path on esxi host of ovf files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#host_ovf Guest#host_ovf}
  */
  readonly hostOvf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#id Guest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Guest guest memory size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#memsize Guest#memsize}
  */
  readonly memsize?: string;
  /**
  * Guest notes (annotation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#notes Guest#notes}
  */
  readonly notes?: string;
  /**
  * Guest guest number of virtual cpus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#numvcpus Guest#numvcpus}
  */
  readonly numvcpus?: string;
  /**
  * The amount of time, in seconds, to wait for the guest to boot and run ovf_properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#ovf_properties_timer Guest#ovf_properties_timer}
  */
  readonly ovfPropertiesTimer?: number;
  /**
  * Local path to source ovf files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#ovf_source Guest#ovf_source}
  */
  readonly ovfSource?: string;
  /**
  * Guest power state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#power Guest#power}
  */
  readonly power?: string;
  /**
  * Resource pool name to place guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#resource_pool_name Guest#resource_pool_name}
  */
  readonly resourcePoolName?: string;
  /**
  * Guest Virtual HW version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#virthwver Guest#virthwver}
  */
  readonly virthwver?: string;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#network_interfaces Guest#network_interfaces}
  */
  readonly networkInterfaces?: GuestNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * ovf_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#ovf_properties Guest#ovf_properties}
  */
  readonly ovfProperties?: GuestOvfProperties[] | cdktf.IResolvable;
  /**
  * virtual_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#virtual_disks Guest#virtual_disks}
  */
  readonly virtualDisks?: GuestVirtualDisks[] | cdktf.IResolvable;
}
export interface GuestNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#mac_address Guest#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#nic_type Guest#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#virtual_network Guest#virtual_network}
  */
  readonly virtualNetwork?: string;
}

export function guestNetworkInterfacesToTerraform(struct?: GuestNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    virtual_network: cdktf.stringToTerraform(struct!.virtualNetwork),
  }
}


export function guestNetworkInterfacesToHclTerraform(struct?: GuestNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuestNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuestNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._virtualNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuestNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
      this._nicType = undefined;
      this._virtualNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
      this._nicType = value.nicType;
      this._virtualNetwork = value.virtualNetwork;
    }
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // nic_type - computed: true, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // virtual_network - computed: true, optional: true, required: false
  private _virtualNetwork?: string; 
  public get virtualNetwork() {
    return this.getStringAttribute('virtual_network');
  }
  public set virtualNetwork(value: string) {
    this._virtualNetwork = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork;
  }
}

export class GuestNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : GuestNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): GuestNetworkInterfacesOutputReference {
    return new GuestNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuestOvfProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#key Guest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#value Guest#value}
  */
  readonly value: string;
}

export function guestOvfPropertiesToTerraform(struct?: GuestOvfProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function guestOvfPropertiesToHclTerraform(struct?: GuestOvfProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GuestOvfPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuestOvfProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GuestOvfProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class GuestOvfPropertiesList extends cdktf.ComplexList {
  public internalValue? : GuestOvfProperties[] | cdktf.IResolvable

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
  public get(index: number): GuestOvfPropertiesOutputReference {
    return new GuestOvfPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuestVirtualDisks {
  /**
  * SCSI_Ctrl:SCSI_id.    Range  '0:1' to '0:15'.   SCSI_id 7 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#slot Guest#slot}
  */
  readonly slot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#virtual_disk_id Guest#virtual_disk_id}
  */
  readonly virtualDiskId: string;
}

export function guestVirtualDisksToTerraform(struct?: GuestVirtualDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot: cdktf.stringToTerraform(struct!.slot),
    virtual_disk_id: cdktf.stringToTerraform(struct!.virtualDiskId),
  }
}


export function guestVirtualDisksToHclTerraform(struct?: GuestVirtualDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slot: {
      value: cdktf.stringToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_disk_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualDiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuestVirtualDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuestVirtualDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    if (this._virtualDiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDiskId = this._virtualDiskId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuestVirtualDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slot = undefined;
      this._virtualDiskId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slot = value.slot;
      this._virtualDiskId = value.virtualDiskId;
    }
  }

  // slot - computed: true, optional: true, required: false
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // virtual_disk_id - computed: false, optional: false, required: true
  private _virtualDiskId?: string; 
  public get virtualDiskId() {
    return this.getStringAttribute('virtual_disk_id');
  }
  public set virtualDiskId(value: string) {
    this._virtualDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDiskIdInput() {
    return this._virtualDiskId;
  }
}

export class GuestVirtualDisksList extends cdktf.ComplexList {
  public internalValue? : GuestVirtualDisks[] | cdktf.IResolvable

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
  public get(index: number): GuestVirtualDisksOutputReference {
    return new GuestVirtualDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest esxi_guest}
*/
export class Guest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "esxi_guest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Guest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Guest to import
  * @param importFromId The id of the existing Guest that should be imported. Refer to the {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Guest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "esxi_guest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs/resources/guest esxi_guest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuestConfig
  */
  public constructor(scope: Construct, id: string, config: GuestConfig) {
    super(scope, id, {
      terraformResourceType: 'esxi_guest',
      terraformGeneratorMetadata: {
        providerName: 'esxi',
        providerVersion: '1.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootDiskSize = config.bootDiskSize;
    this._bootDiskType = config.bootDiskType;
    this._bootFirmware = config.bootFirmware;
    this._cloneFromVm = config.cloneFromVm;
    this._diskStore = config.diskStore;
    this._guestName = config.guestName;
    this._guestShutdownTimeout = config.guestShutdownTimeout;
    this._guestStartupTimeout = config.guestStartupTimeout;
    this._guestinfo = config.guestinfo;
    this._guestos = config.guestos;
    this._hostOvf = config.hostOvf;
    this._id = config.id;
    this._memsize = config.memsize;
    this._notes = config.notes;
    this._numvcpus = config.numvcpus;
    this._ovfPropertiesTimer = config.ovfPropertiesTimer;
    this._ovfSource = config.ovfSource;
    this._power = config.power;
    this._resourcePoolName = config.resourcePoolName;
    this._virthwver = config.virthwver;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._ovfProperties.internalValue = config.ovfProperties;
    this._virtualDisks.internalValue = config.virtualDisks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_disk_size - computed: true, optional: true, required: false
  private _bootDiskSize?: string; 
  public get bootDiskSize() {
    return this.getStringAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: string) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // boot_firmware - computed: false, optional: true, required: false
  private _bootFirmware?: string; 
  public get bootFirmware() {
    return this.getStringAttribute('boot_firmware');
  }
  public set bootFirmware(value: string) {
    this._bootFirmware = value;
  }
  public resetBootFirmware() {
    this._bootFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootFirmwareInput() {
    return this._bootFirmware;
  }

  // clone_from_vm - computed: false, optional: true, required: false
  private _cloneFromVm?: string; 
  public get cloneFromVm() {
    return this.getStringAttribute('clone_from_vm');
  }
  public set cloneFromVm(value: string) {
    this._cloneFromVm = value;
  }
  public resetCloneFromVm() {
    this._cloneFromVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneFromVmInput() {
    return this._cloneFromVm;
  }

  // disk_store - computed: false, optional: false, required: true
  private _diskStore?: string; 
  public get diskStore() {
    return this.getStringAttribute('disk_store');
  }
  public set diskStore(value: string) {
    this._diskStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskStoreInput() {
    return this._diskStore;
  }

  // guest_name - computed: false, optional: false, required: true
  private _guestName?: string; 
  public get guestName() {
    return this.getStringAttribute('guest_name');
  }
  public set guestName(value: string) {
    this._guestName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestNameInput() {
    return this._guestName;
  }

  // guest_shutdown_timeout - computed: true, optional: true, required: false
  private _guestShutdownTimeout?: number; 
  public get guestShutdownTimeout() {
    return this.getNumberAttribute('guest_shutdown_timeout');
  }
  public set guestShutdownTimeout(value: number) {
    this._guestShutdownTimeout = value;
  }
  public resetGuestShutdownTimeout() {
    this._guestShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestShutdownTimeoutInput() {
    return this._guestShutdownTimeout;
  }

  // guest_startup_timeout - computed: true, optional: true, required: false
  private _guestStartupTimeout?: number; 
  public get guestStartupTimeout() {
    return this.getNumberAttribute('guest_startup_timeout');
  }
  public set guestStartupTimeout(value: number) {
    this._guestStartupTimeout = value;
  }
  public resetGuestStartupTimeout() {
    this._guestStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestStartupTimeoutInput() {
    return this._guestStartupTimeout;
  }

  // guestinfo - computed: false, optional: true, required: false
  private _guestinfo?: { [key: string]: string }; 
  public get guestinfo() {
    return this.getStringMapAttribute('guestinfo');
  }
  public set guestinfo(value: { [key: string]: string }) {
    this._guestinfo = value;
  }
  public resetGuestinfo() {
    this._guestinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestinfoInput() {
    return this._guestinfo;
  }

  // guestos - computed: true, optional: true, required: false
  private _guestos?: string; 
  public get guestos() {
    return this.getStringAttribute('guestos');
  }
  public set guestos(value: string) {
    this._guestos = value;
  }
  public resetGuestos() {
    this._guestos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestosInput() {
    return this._guestos;
  }

  // host_ovf - computed: false, optional: true, required: false
  private _hostOvf?: string; 
  public get hostOvf() {
    return this.getStringAttribute('host_ovf');
  }
  public set hostOvf(value: string) {
    this._hostOvf = value;
  }
  public resetHostOvf() {
    this._hostOvf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOvfInput() {
    return this._hostOvf;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // memsize - computed: true, optional: true, required: false
  private _memsize?: string; 
  public get memsize() {
    return this.getStringAttribute('memsize');
  }
  public set memsize(value: string) {
    this._memsize = value;
  }
  public resetMemsize() {
    this._memsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memsizeInput() {
    return this._memsize;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // numvcpus - computed: true, optional: true, required: false
  private _numvcpus?: string; 
  public get numvcpus() {
    return this.getStringAttribute('numvcpus');
  }
  public set numvcpus(value: string) {
    this._numvcpus = value;
  }
  public resetNumvcpus() {
    this._numvcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numvcpusInput() {
    return this._numvcpus;
  }

  // ovf_properties_timer - computed: true, optional: true, required: false
  private _ovfPropertiesTimer?: number; 
  public get ovfPropertiesTimer() {
    return this.getNumberAttribute('ovf_properties_timer');
  }
  public set ovfPropertiesTimer(value: number) {
    this._ovfPropertiesTimer = value;
  }
  public resetOvfPropertiesTimer() {
    this._ovfPropertiesTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfPropertiesTimerInput() {
    return this._ovfPropertiesTimer;
  }

  // ovf_source - computed: false, optional: true, required: false
  private _ovfSource?: string; 
  public get ovfSource() {
    return this.getStringAttribute('ovf_source');
  }
  public set ovfSource(value: string) {
    this._ovfSource = value;
  }
  public resetOvfSource() {
    this._ovfSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfSourceInput() {
    return this._ovfSource;
  }

  // power - computed: true, optional: true, required: false
  private _power?: string; 
  public get power() {
    return this.getStringAttribute('power');
  }
  public set power(value: string) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // resource_pool_name - computed: false, optional: true, required: false
  private _resourcePoolName?: string; 
  public get resourcePoolName() {
    return this.getStringAttribute('resource_pool_name');
  }
  public set resourcePoolName(value: string) {
    this._resourcePoolName = value;
  }
  public resetResourcePoolName() {
    this._resourcePoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolNameInput() {
    return this._resourcePoolName;
  }

  // virthwver - computed: true, optional: true, required: false
  private _virthwver?: string; 
  public get virthwver() {
    return this.getStringAttribute('virthwver');
  }
  public set virthwver(value: string) {
    this._virthwver = value;
  }
  public resetVirthwver() {
    this._virthwver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virthwverInput() {
    return this._virthwver;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new GuestNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: GuestNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // ovf_properties - computed: false, optional: true, required: false
  private _ovfProperties = new GuestOvfPropertiesList(this, "ovf_properties", false);
  public get ovfProperties() {
    return this._ovfProperties;
  }
  public putOvfProperties(value: GuestOvfProperties[] | cdktf.IResolvable) {
    this._ovfProperties.internalValue = value;
  }
  public resetOvfProperties() {
    this._ovfProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovfPropertiesInput() {
    return this._ovfProperties.internalValue;
  }

  // virtual_disks - computed: false, optional: true, required: false
  private _virtualDisks = new GuestVirtualDisksList(this, "virtual_disks", false);
  public get virtualDisks() {
    return this._virtualDisks;
  }
  public putVirtualDisks(value: GuestVirtualDisks[] | cdktf.IResolvable) {
    this._virtualDisks.internalValue = value;
  }
  public resetVirtualDisks() {
    this._virtualDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDisksInput() {
    return this._virtualDisks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_disk_size: cdktf.stringToTerraform(this._bootDiskSize),
      boot_disk_type: cdktf.stringToTerraform(this._bootDiskType),
      boot_firmware: cdktf.stringToTerraform(this._bootFirmware),
      clone_from_vm: cdktf.stringToTerraform(this._cloneFromVm),
      disk_store: cdktf.stringToTerraform(this._diskStore),
      guest_name: cdktf.stringToTerraform(this._guestName),
      guest_shutdown_timeout: cdktf.numberToTerraform(this._guestShutdownTimeout),
      guest_startup_timeout: cdktf.numberToTerraform(this._guestStartupTimeout),
      guestinfo: cdktf.hashMapper(cdktf.stringToTerraform)(this._guestinfo),
      guestos: cdktf.stringToTerraform(this._guestos),
      host_ovf: cdktf.stringToTerraform(this._hostOvf),
      id: cdktf.stringToTerraform(this._id),
      memsize: cdktf.stringToTerraform(this._memsize),
      notes: cdktf.stringToTerraform(this._notes),
      numvcpus: cdktf.stringToTerraform(this._numvcpus),
      ovf_properties_timer: cdktf.numberToTerraform(this._ovfPropertiesTimer),
      ovf_source: cdktf.stringToTerraform(this._ovfSource),
      power: cdktf.stringToTerraform(this._power),
      resource_pool_name: cdktf.stringToTerraform(this._resourcePoolName),
      virthwver: cdktf.stringToTerraform(this._virthwver),
      network_interfaces: cdktf.listMapper(guestNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      ovf_properties: cdktf.listMapper(guestOvfPropertiesToTerraform, true)(this._ovfProperties.internalValue),
      virtual_disks: cdktf.listMapper(guestVirtualDisksToTerraform, true)(this._virtualDisks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_disk_size: {
        value: cdktf.stringToHclTerraform(this._bootDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_disk_type: {
        value: cdktf.stringToHclTerraform(this._bootDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_firmware: {
        value: cdktf.stringToHclTerraform(this._bootFirmware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_from_vm: {
        value: cdktf.stringToHclTerraform(this._cloneFromVm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_store: {
        value: cdktf.stringToHclTerraform(this._diskStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_name: {
        value: cdktf.stringToHclTerraform(this._guestName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_shutdown_timeout: {
        value: cdktf.numberToHclTerraform(this._guestShutdownTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guest_startup_timeout: {
        value: cdktf.numberToHclTerraform(this._guestStartupTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guestinfo: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._guestinfo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      guestos: {
        value: cdktf.stringToHclTerraform(this._guestos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ovf: {
        value: cdktf.stringToHclTerraform(this._hostOvf),
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
      memsize: {
        value: cdktf.stringToHclTerraform(this._memsize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numvcpus: {
        value: cdktf.stringToHclTerraform(this._numvcpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovf_properties_timer: {
        value: cdktf.numberToHclTerraform(this._ovfPropertiesTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ovf_source: {
        value: cdktf.stringToHclTerraform(this._ovfSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power: {
        value: cdktf.stringToHclTerraform(this._power),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool_name: {
        value: cdktf.stringToHclTerraform(this._resourcePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virthwver: {
        value: cdktf.stringToHclTerraform(this._virthwver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(guestNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuestNetworkInterfacesList",
      },
      ovf_properties: {
        value: cdktf.listMapperHcl(guestOvfPropertiesToHclTerraform, true)(this._ovfProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuestOvfPropertiesList",
      },
      virtual_disks: {
        value: cdktf.listMapperHcl(guestVirtualDisksToHclTerraform, true)(this._virtualDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuestVirtualDisksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
