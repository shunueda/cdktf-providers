// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmConfig extends cdktf.TerraformMetaArguments {
  /**
  * The preferred host you would like the VM to run on. If changed on an existing VM it will require a reboot for the VM to be rescheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#affinity_host Vm#affinity_host}
  */
  readonly affinityHost?: string;
  /**
  * If the VM will automatically turn on. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#auto_poweron Vm#auto_poweron}
  */
  readonly autoPoweron?: boolean | cdktf.IResolvable;
  /**
  * List of operations on a VM that are not permitted. Examples include: clean_reboot, clean_shutdown, hard_reboot, hard_shutdown, pause, shutdown, suspend, destroy. This can be used to prevent a VM from being destroyed. The entire list can be found here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#blocked_operations Vm#blocked_operations}
  */
  readonly blockedOperations?: string[];
  /**
  * The content of the cloud-init config to use. See the cloud init docs for more [information](https://cloudinit.readthedocs.io/en/latest/topics/examples.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#cloud_config Vm#cloud_config}
  */
  readonly cloudConfig?: string;
  /**
  * The content of the cloud-init network configuration for the VM (uses [version 1](https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v1.html))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#cloud_network_config Vm#cloud_network_config}
  */
  readonly cloudNetworkConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#core_os Vm#core_os}
  */
  readonly coreOs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#cpu_cap Vm#cpu_cap}
  */
  readonly cpuCap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#cpu_weight Vm#cpu_weight}
  */
  readonly cpuWeight?: number;
  /**
  * The number of CPUs the VM will have. Updates to this field will cause a stop and start of the VM if the new CPU value is greater than the max CPU value. This can be determined with the following command:
  * ```
  * 
  * $ xo-cli xo.getAllObjects filter='json:{"id": "cf7b5d7d-3cd5-6b7c-5025-5c935c8cd0b8"}' | jq '.[].CPUs'
  * {
  *   "max": 4,
  *   "number": 2
  * }
  * 		    
  * # Updating the VM to use 3 CPUs would happen without stopping/starting the VM
  * # Updating the VM to use 5 CPUs would stop/start the VM
  * ```
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#cpus Vm#cpus}
  */
  readonly cpus: number;
  /**
  * Determines whether the cloud config VDI should be deleted once the VM has booted. Defaults to `false`. If set to `true`, power_state must be set to `Running`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#destroy_cloud_config_vdi_after_boot Vm#destroy_cloud_config_vdi_after_boot}
  */
  readonly destroyCloudConfigVdiAfterBoot?: boolean | cdktf.IResolvable;
  /**
  * Boolean parameter that allows a VM to use nested virtualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#exp_nested_hvm Vm#exp_nested_hvm}
  */
  readonly expNestedHvm?: boolean | cdktf.IResolvable;
  /**
  * The restart priority for the VM. Possible values are `best-effort`, `restart` and empty string (no restarts on failure. Defaults to empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#high_availability Vm#high_availability}
  */
  readonly highAvailability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#host Vm#host}
  */
  readonly host?: string;
  /**
  * The firmware to use for the VM. Possible values are `bios` and `uefi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#hvm_boot_firmware Vm#hvm_boot_firmware}
  */
  readonly hvmBootFirmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#id Vm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This cannot be used with `cdrom`. Possible values are `network` which allows a VM to boot via PXE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#installation_method Vm#installation_method}
  */
  readonly installationMethod?: string;
  /**
  * The amount of memory in bytes the VM will have. Updates to this field will case a stop and start of the VM if the new value is greater than the dynamic memory max. This can be determined with the following command:
  * ```
  * 
  * 
  * $ xo-cli xo.getAllObjects filter='json:{"id": "cf7b5d7d-3cd5-6b7c-5025-5c935c8cd0b8"}' | jq '.[].memory.dynamic'
  * [
  *   2147483648, # memory dynamic min
  *   4294967296  # memory dynamic max (4GB)
  * ]
  * # Updating the VM to use 3GB of memory would happen without stopping/starting the VM
  * # Updating the VM to use 5GB of memory would stop/start the VM
  * ```
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#memory_max Vm#memory_max}
  */
  readonly memoryMax: number;
  /**
  * The description of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#name_description Vm#name_description}
  */
  readonly nameDescription?: string;
  /**
  * The name of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#name_label Vm#name_label}
  */
  readonly nameLabel: string;
  /**
  * The power state of the VM. This can be Running, Halted, Paused or Suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#power_state Vm#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#resource_set Vm#resource_set}
  */
  readonly resourceSet?: string;
  /**
  * Number of seconds the VM should be delayed from starting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#start_delay Vm#start_delay}
  */
  readonly startDelay?: number;
  /**
  * The tags (labels) applied to the given entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#tags Vm#tags}
  */
  readonly tags?: string[];
  /**
  * The ID of the VM template to create the new VM from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#template Vm#template}
  */
  readonly template: string;
  /**
  * The video adapter the VM should use. Possible values include std and cirrus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#vga Vm#vga}
  */
  readonly vga?: string;
  /**
  * The videoram option the VM should use. Possible values include 1, 2, 4, 8, 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#videoram Vm#videoram}
  */
  readonly videoram?: number;
  /**
  * Whether terraform should wait until IP addresses are present on the VM's network interfaces before considering it created. This only works if guest-tools are installed in the VM. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#wait_for_ip Vm#wait_for_ip}
  */
  readonly waitForIp?: boolean | cdktf.IResolvable;
  /**
  * cdrom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#cdrom Vm#cdrom}
  */
  readonly cdrom?: VmCdrom;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#disk Vm#disk}
  */
  readonly disk: VmDisk[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#network Vm#network}
  */
  readonly network: VmNetwork[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#timeouts Vm#timeouts}
  */
  readonly timeouts?: VmTimeouts;
}
export interface VmCdrom {
  /**
  * The ID of the ISO (VDI) to attach to the VM. This can be easily provided by using the `vdi` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#id Vm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function vmCdromToTerraform(struct?: VmCdromOutputReference | VmCdrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function vmCdromToHclTerraform(struct?: VmCdromOutputReference | VmCdrom): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmCdromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmCdrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCdrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface VmDisk {
  /**
  * Whether the device should be attached to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#attached Vm#attached}
  */
  readonly attached?: boolean | cdktf.IResolvable;
  /**
  * The description for the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#name_description Vm#name_description}
  */
  readonly nameDescription?: string;
  /**
  * The name for the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#name_label Vm#name_label}
  */
  readonly nameLabel: string;
  /**
  * The size in bytes for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#size Vm#size}
  */
  readonly size: number;
  /**
  * The storage repository ID to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#sr_id Vm#sr_id}
  */
  readonly srId: string;
}

export function vmDiskToTerraform(struct?: VmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attached: cdktf.booleanToTerraform(struct!.attached),
    name_description: cdktf.stringToTerraform(struct!.nameDescription),
    name_label: cdktf.stringToTerraform(struct!.nameLabel),
    size: cdktf.numberToTerraform(struct!.size),
    sr_id: cdktf.stringToTerraform(struct!.srId),
  }
}


export function vmDiskToHclTerraform(struct?: VmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attached: {
      value: cdktf.booleanToHclTerraform(struct!.attached),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_description: {
      value: cdktf.stringToHclTerraform(struct!.nameDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_label: {
      value: cdktf.stringToHclTerraform(struct!.nameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sr_id: {
      value: cdktf.stringToHclTerraform(struct!.srId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attached !== undefined) {
      hasAnyValues = true;
      internalValueResult.attached = this._attached;
    }
    if (this._nameDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameDescription = this._nameDescription;
    }
    if (this._nameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameLabel = this._nameLabel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._srId !== undefined) {
      hasAnyValues = true;
      internalValueResult.srId = this._srId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attached = undefined;
      this._nameDescription = undefined;
      this._nameLabel = undefined;
      this._size = undefined;
      this._srId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attached = value.attached;
      this._nameDescription = value.nameDescription;
      this._nameLabel = value.nameLabel;
      this._size = value.size;
      this._srId = value.srId;
    }
  }

  // attached - computed: false, optional: true, required: false
  private _attached?: boolean | cdktf.IResolvable; 
  public get attached() {
    return this.getBooleanAttribute('attached');
  }
  public set attached(value: boolean | cdktf.IResolvable) {
    this._attached = value;
  }
  public resetAttached() {
    this._attached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedInput() {
    return this._attached;
  }

  // name_description - computed: false, optional: true, required: false
  private _nameDescription?: string; 
  public get nameDescription() {
    return this.getStringAttribute('name_description');
  }
  public set nameDescription(value: string) {
    this._nameDescription = value;
  }
  public resetNameDescription() {
    this._nameDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDescriptionInput() {
    return this._nameDescription;
  }

  // name_label - computed: false, optional: false, required: true
  private _nameLabel?: string; 
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }
  public set nameLabel(value: string) {
    this._nameLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameLabelInput() {
    return this._nameLabel;
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
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

  // sr_id - computed: false, optional: false, required: true
  private _srId?: string; 
  public get srId() {
    return this.getStringAttribute('sr_id');
  }
  public set srId(value: string) {
    this._srId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srIdInput() {
    return this._srId;
  }

  // vbd_id - computed: true, optional: false, required: false
  public get vbdId() {
    return this.getStringAttribute('vbd_id');
  }

  // vdi_id - computed: true, optional: false, required: false
  public get vdiId() {
    return this.getStringAttribute('vdi_id');
  }
}

export class VmDiskList extends cdktf.ComplexList {
  public internalValue? : VmDisk[] | cdktf.IResolvable

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
  public get(index: number): VmDiskOutputReference {
    return new VmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmNetwork {
  /**
  * Whether the device should be attached to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#attached Vm#attached}
  */
  readonly attached?: boolean | cdktf.IResolvable;
  /**
  * The mac address of the network interface. This must be parsable by go's [net.ParseMAC function](https://golang.org/pkg/net/#ParseMAC). All mac addresses are stored in Terraform's state with [HardwareAddr's string representation](https://golang.org/pkg/net/#HardwareAddr.String) i.e. 00:00:5e:00:53:01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#mac_address Vm#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The ID of the network the VM will be on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#network_id Vm#network_id}
  */
  readonly networkId: string;
}

export function vmNetworkToTerraform(struct?: VmNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attached: cdktf.booleanToTerraform(struct!.attached),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function vmNetworkToHclTerraform(struct?: VmNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attached: {
      value: cdktf.booleanToHclTerraform(struct!.attached),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
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

export class VmNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attached !== undefined) {
      hasAnyValues = true;
      internalValueResult.attached = this._attached;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attached = undefined;
      this._macAddress = undefined;
      this._networkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attached = value.attached;
      this._macAddress = value.macAddress;
      this._networkId = value.networkId;
    }
  }

  // attached - computed: false, optional: true, required: false
  private _attached?: boolean | cdktf.IResolvable; 
  public get attached() {
    return this.getBooleanAttribute('attached');
  }
  public set attached(value: boolean | cdktf.IResolvable) {
    this._attached = value;
  }
  public resetAttached() {
    this._attached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedInput() {
    return this._attached;
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv4_addresses');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
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

export class VmNetworkList extends cdktf.ComplexList {
  public internalValue? : VmNetwork[] | cdktf.IResolvable

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
  public get(index: number): VmNetworkOutputReference {
    return new VmNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#create Vm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#delete Vm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#update Vm#update}
  */
  readonly update?: string;
}

export function vmTimeoutsToTerraform(struct?: VmTimeouts | cdktf.IResolvable): any {
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


export function vmTimeoutsToHclTerraform(struct?: VmTimeouts | cdktf.IResolvable): any {
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

export class VmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm xenorchestra_vm}
*/
export class Vm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vm to import
  * @param importFromId The id of the existing Vm that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/resources/vm xenorchestra_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmConfig
  */
  public constructor(scope: Construct, id: string, config: VmConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_vm',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityHost = config.affinityHost;
    this._autoPoweron = config.autoPoweron;
    this._blockedOperations = config.blockedOperations;
    this._cloudConfig = config.cloudConfig;
    this._cloudNetworkConfig = config.cloudNetworkConfig;
    this._coreOs = config.coreOs;
    this._cpuCap = config.cpuCap;
    this._cpuWeight = config.cpuWeight;
    this._cpus = config.cpus;
    this._destroyCloudConfigVdiAfterBoot = config.destroyCloudConfigVdiAfterBoot;
    this._expNestedHvm = config.expNestedHvm;
    this._highAvailability = config.highAvailability;
    this._host = config.host;
    this._hvmBootFirmware = config.hvmBootFirmware;
    this._id = config.id;
    this._installationMethod = config.installationMethod;
    this._memoryMax = config.memoryMax;
    this._nameDescription = config.nameDescription;
    this._nameLabel = config.nameLabel;
    this._powerState = config.powerState;
    this._resourceSet = config.resourceSet;
    this._startDelay = config.startDelay;
    this._tags = config.tags;
    this._template = config.template;
    this._vga = config.vga;
    this._videoram = config.videoram;
    this._waitForIp = config.waitForIp;
    this._cdrom.internalValue = config.cdrom;
    this._disk.internalValue = config.disk;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_host - computed: false, optional: true, required: false
  private _affinityHost?: string; 
  public get affinityHost() {
    return this.getStringAttribute('affinity_host');
  }
  public set affinityHost(value: string) {
    this._affinityHost = value;
  }
  public resetAffinityHost() {
    this._affinityHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityHostInput() {
    return this._affinityHost;
  }

  // auto_poweron - computed: false, optional: true, required: false
  private _autoPoweron?: boolean | cdktf.IResolvable; 
  public get autoPoweron() {
    return this.getBooleanAttribute('auto_poweron');
  }
  public set autoPoweron(value: boolean | cdktf.IResolvable) {
    this._autoPoweron = value;
  }
  public resetAutoPoweron() {
    this._autoPoweron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPoweronInput() {
    return this._autoPoweron;
  }

  // blocked_operations - computed: false, optional: true, required: false
  private _blockedOperations?: string[]; 
  public get blockedOperations() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_operations'));
  }
  public set blockedOperations(value: string[]) {
    this._blockedOperations = value;
  }
  public resetBlockedOperations() {
    this._blockedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedOperationsInput() {
    return this._blockedOperations;
  }

  // cloud_config - computed: false, optional: true, required: false
  private _cloudConfig?: string; 
  public get cloudConfig() {
    return this.getStringAttribute('cloud_config');
  }
  public set cloudConfig(value: string) {
    this._cloudConfig = value;
  }
  public resetCloudConfig() {
    this._cloudConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig;
  }

  // cloud_network_config - computed: false, optional: true, required: false
  private _cloudNetworkConfig?: string; 
  public get cloudNetworkConfig() {
    return this.getStringAttribute('cloud_network_config');
  }
  public set cloudNetworkConfig(value: string) {
    this._cloudNetworkConfig = value;
  }
  public resetCloudNetworkConfig() {
    this._cloudNetworkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNetworkConfigInput() {
    return this._cloudNetworkConfig;
  }

  // core_os - computed: false, optional: true, required: false
  private _coreOs?: boolean | cdktf.IResolvable; 
  public get coreOs() {
    return this.getBooleanAttribute('core_os');
  }
  public set coreOs(value: boolean | cdktf.IResolvable) {
    this._coreOs = value;
  }
  public resetCoreOs() {
    this._coreOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreOsInput() {
    return this._coreOs;
  }

  // cpu_cap - computed: false, optional: true, required: false
  private _cpuCap?: number; 
  public get cpuCap() {
    return this.getNumberAttribute('cpu_cap');
  }
  public set cpuCap(value: number) {
    this._cpuCap = value;
  }
  public resetCpuCap() {
    this._cpuCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCapInput() {
    return this._cpuCap;
  }

  // cpu_weight - computed: false, optional: true, required: false
  private _cpuWeight?: number; 
  public get cpuWeight() {
    return this.getNumberAttribute('cpu_weight');
  }
  public set cpuWeight(value: number) {
    this._cpuWeight = value;
  }
  public resetCpuWeight() {
    this._cpuWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuWeightInput() {
    return this._cpuWeight;
  }

  // cpus - computed: false, optional: false, required: true
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // destroy_cloud_config_vdi_after_boot - computed: false, optional: true, required: false
  private _destroyCloudConfigVdiAfterBoot?: boolean | cdktf.IResolvable; 
  public get destroyCloudConfigVdiAfterBoot() {
    return this.getBooleanAttribute('destroy_cloud_config_vdi_after_boot');
  }
  public set destroyCloudConfigVdiAfterBoot(value: boolean | cdktf.IResolvable) {
    this._destroyCloudConfigVdiAfterBoot = value;
  }
  public resetDestroyCloudConfigVdiAfterBoot() {
    this._destroyCloudConfigVdiAfterBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyCloudConfigVdiAfterBootInput() {
    return this._destroyCloudConfigVdiAfterBoot;
  }

  // exp_nested_hvm - computed: false, optional: true, required: false
  private _expNestedHvm?: boolean | cdktf.IResolvable; 
  public get expNestedHvm() {
    return this.getBooleanAttribute('exp_nested_hvm');
  }
  public set expNestedHvm(value: boolean | cdktf.IResolvable) {
    this._expNestedHvm = value;
  }
  public resetExpNestedHvm() {
    this._expNestedHvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expNestedHvmInput() {
    return this._expNestedHvm;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: string; 
  public get highAvailability() {
    return this.getStringAttribute('high_availability');
  }
  public set highAvailability(value: string) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hvm_boot_firmware - computed: false, optional: true, required: false
  private _hvmBootFirmware?: string; 
  public get hvmBootFirmware() {
    return this.getStringAttribute('hvm_boot_firmware');
  }
  public set hvmBootFirmware(value: string) {
    this._hvmBootFirmware = value;
  }
  public resetHvmBootFirmware() {
    this._hvmBootFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hvmBootFirmwareInput() {
    return this._hvmBootFirmware;
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

  // installation_method - computed: false, optional: true, required: false
  private _installationMethod?: string; 
  public get installationMethod() {
    return this.getStringAttribute('installation_method');
  }
  public set installationMethod(value: string) {
    this._installationMethod = value;
  }
  public resetInstallationMethod() {
    this._installationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationMethodInput() {
    return this._installationMethod;
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv4_addresses');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }

  // memory_max - computed: false, optional: false, required: true
  private _memoryMax?: number; 
  public get memoryMax() {
    return this.getNumberAttribute('memory_max');
  }
  public set memoryMax(value: number) {
    this._memoryMax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMaxInput() {
    return this._memoryMax;
  }

  // name_description - computed: false, optional: true, required: false
  private _nameDescription?: string; 
  public get nameDescription() {
    return this.getStringAttribute('name_description');
  }
  public set nameDescription(value: string) {
    this._nameDescription = value;
  }
  public resetNameDescription() {
    this._nameDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDescriptionInput() {
    return this._nameDescription;
  }

  // name_label - computed: false, optional: false, required: true
  private _nameLabel?: string; 
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }
  public set nameLabel(value: string) {
    this._nameLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameLabelInput() {
    return this._nameLabel;
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
  }

  // resource_set - computed: false, optional: true, required: false
  private _resourceSet?: string; 
  public get resourceSet() {
    return this.getStringAttribute('resource_set');
  }
  public set resourceSet(value: string) {
    this._resourceSet = value;
  }
  public resetResourceSet() {
    this._resourceSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetInput() {
    return this._resourceSet;
  }

  // start_delay - computed: false, optional: true, required: false
  private _startDelay?: number; 
  public get startDelay() {
    return this.getNumberAttribute('start_delay');
  }
  public set startDelay(value: number) {
    this._startDelay = value;
  }
  public resetStartDelay() {
    this._startDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInput() {
    return this._startDelay;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vga - computed: false, optional: true, required: false
  private _vga?: string; 
  public get vga() {
    return this.getStringAttribute('vga');
  }
  public set vga(value: string) {
    this._vga = value;
  }
  public resetVga() {
    this._vga = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgaInput() {
    return this._vga;
  }

  // videoram - computed: false, optional: true, required: false
  private _videoram?: number; 
  public get videoram() {
    return this.getNumberAttribute('videoram');
  }
  public set videoram(value: number) {
    this._videoram = value;
  }
  public resetVideoram() {
    this._videoram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoramInput() {
    return this._videoram;
  }

  // wait_for_ip - computed: false, optional: true, required: false
  private _waitForIp?: boolean | cdktf.IResolvable; 
  public get waitForIp() {
    return this.getBooleanAttribute('wait_for_ip');
  }
  public set waitForIp(value: boolean | cdktf.IResolvable) {
    this._waitForIp = value;
  }
  public resetWaitForIp() {
    this._waitForIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForIpInput() {
    return this._waitForIp;
  }

  // cdrom - computed: false, optional: true, required: false
  private _cdrom = new VmCdromOutputReference(this, "cdrom");
  public get cdrom() {
    return this._cdrom;
  }
  public putCdrom(value: VmCdrom) {
    this._cdrom.internalValue = value;
  }
  public resetCdrom() {
    this._cdrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdromInput() {
    return this._cdrom.internalValue;
  }

  // disk - computed: false, optional: false, required: true
  private _disk = new VmDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VmDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new VmNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: VmNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmTimeouts) {
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
      affinity_host: cdktf.stringToTerraform(this._affinityHost),
      auto_poweron: cdktf.booleanToTerraform(this._autoPoweron),
      blocked_operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedOperations),
      cloud_config: cdktf.stringToTerraform(this._cloudConfig),
      cloud_network_config: cdktf.stringToTerraform(this._cloudNetworkConfig),
      core_os: cdktf.booleanToTerraform(this._coreOs),
      cpu_cap: cdktf.numberToTerraform(this._cpuCap),
      cpu_weight: cdktf.numberToTerraform(this._cpuWeight),
      cpus: cdktf.numberToTerraform(this._cpus),
      destroy_cloud_config_vdi_after_boot: cdktf.booleanToTerraform(this._destroyCloudConfigVdiAfterBoot),
      exp_nested_hvm: cdktf.booleanToTerraform(this._expNestedHvm),
      high_availability: cdktf.stringToTerraform(this._highAvailability),
      host: cdktf.stringToTerraform(this._host),
      hvm_boot_firmware: cdktf.stringToTerraform(this._hvmBootFirmware),
      id: cdktf.stringToTerraform(this._id),
      installation_method: cdktf.stringToTerraform(this._installationMethod),
      memory_max: cdktf.numberToTerraform(this._memoryMax),
      name_description: cdktf.stringToTerraform(this._nameDescription),
      name_label: cdktf.stringToTerraform(this._nameLabel),
      power_state: cdktf.stringToTerraform(this._powerState),
      resource_set: cdktf.stringToTerraform(this._resourceSet),
      start_delay: cdktf.numberToTerraform(this._startDelay),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.stringToTerraform(this._template),
      vga: cdktf.stringToTerraform(this._vga),
      videoram: cdktf.numberToTerraform(this._videoram),
      wait_for_ip: cdktf.booleanToTerraform(this._waitForIp),
      cdrom: vmCdromToTerraform(this._cdrom.internalValue),
      disk: cdktf.listMapper(vmDiskToTerraform, true)(this._disk.internalValue),
      network: cdktf.listMapper(vmNetworkToTerraform, true)(this._network.internalValue),
      timeouts: vmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_host: {
        value: cdktf.stringToHclTerraform(this._affinityHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_poweron: {
        value: cdktf.booleanToHclTerraform(this._autoPoweron),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked_operations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedOperations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cloud_config: {
        value: cdktf.stringToHclTerraform(this._cloudConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_network_config: {
        value: cdktf.stringToHclTerraform(this._cloudNetworkConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_os: {
        value: cdktf.booleanToHclTerraform(this._coreOs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_cap: {
        value: cdktf.numberToHclTerraform(this._cpuCap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_weight: {
        value: cdktf.numberToHclTerraform(this._cpuWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpus: {
        value: cdktf.numberToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destroy_cloud_config_vdi_after_boot: {
        value: cdktf.booleanToHclTerraform(this._destroyCloudConfigVdiAfterBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exp_nested_hvm: {
        value: cdktf.booleanToHclTerraform(this._expNestedHvm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      high_availability: {
        value: cdktf.stringToHclTerraform(this._highAvailability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hvm_boot_firmware: {
        value: cdktf.stringToHclTerraform(this._hvmBootFirmware),
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
      installation_method: {
        value: cdktf.stringToHclTerraform(this._installationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_max: {
        value: cdktf.numberToHclTerraform(this._memoryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name_description: {
        value: cdktf.stringToHclTerraform(this._nameDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_label: {
        value: cdktf.stringToHclTerraform(this._nameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_state: {
        value: cdktf.stringToHclTerraform(this._powerState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_set: {
        value: cdktf.stringToHclTerraform(this._resourceSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_delay: {
        value: cdktf.numberToHclTerraform(this._startDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vga: {
        value: cdktf.stringToHclTerraform(this._vga),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      videoram: {
        value: cdktf.numberToHclTerraform(this._videoram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_ip: {
        value: cdktf.booleanToHclTerraform(this._waitForIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdrom: {
        value: vmCdromToHclTerraform(this._cdrom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmCdromList",
      },
      disk: {
        value: cdktf.listMapperHcl(vmDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmDiskList",
      },
      network: {
        value: cdktf.listMapperHcl(vmNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmNetworkList",
      },
      timeouts: {
        value: vmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
