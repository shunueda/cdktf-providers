// https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentVm2Config extends cdktf.TerraformMetaArguments {
  /**
  * The CD-ROM configuration. The key is the interface of the CD-ROM, could be one of `ideN`, `sataN`, `scsiN`, where N is the index of the interface. Note that `q35` machine type only supports `ide0` and `ide2` of IDE interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#cdrom VirtualEnvironmentVm2#cdrom}
  */
  readonly cdrom?: { [key: string]: VirtualEnvironmentVm2Cdrom } | cdktf.IResolvable;
  /**
  * The cloning configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#clone VirtualEnvironmentVm2#clone}
  */
  readonly clone?: VirtualEnvironmentVm2Clone;
  /**
  * The CPU configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#cpu VirtualEnvironmentVm2#cpu}
  */
  readonly cpu?: VirtualEnvironmentVm2Cpu;
  /**
  * Set to true to delete unreferenced disks on destroy (defaults to `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#delete_unreferenced_disks_on_destroy VirtualEnvironmentVm2#delete_unreferenced_disks_on_destroy}
  */
  readonly deleteUnreferencedDisksOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The description of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#description VirtualEnvironmentVm2#description}
  */
  readonly description?: string;
  /**
  * The unique identifier of the VM in the Proxmox cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#id VirtualEnvironmentVm2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The name of the VM. Doesn't have to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#name VirtualEnvironmentVm2#name}
  */
  readonly name?: string;
  /**
  * The name of the node where the VM is provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#node_name VirtualEnvironmentVm2#node_name}
  */
  readonly nodeName: string;
  /**
  * Set to true to purge the VM from backup configurations on destroy (defaults to `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#purge_on_destroy VirtualEnvironmentVm2#purge_on_destroy}
  */
  readonly purgeOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Configure the RNG (Random Number Generator) device. The RNG device provides entropy to guests to ensure good quality random numbers for guest applications that require them. Can only be set by `root@pam.`See the [Proxmox documentation](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#qm_virtual_machines_settings) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#rng VirtualEnvironmentVm2#rng}
  */
  readonly rng?: VirtualEnvironmentVm2Rng;
  /**
  * Set to true to stop (rather than shutdown) the VM on destroy (defaults to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#stop_on_destroy VirtualEnvironmentVm2#stop_on_destroy}
  */
  readonly stopOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The tags assigned to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#tags VirtualEnvironmentVm2#tags}
  */
  readonly tags?: string[];
  /**
  * Set to true to create a VM template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#template VirtualEnvironmentVm2#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#timeouts VirtualEnvironmentVm2#timeouts}
  */
  readonly timeouts?: VirtualEnvironmentVm2Timeouts;
  /**
  * Configure the VGA Hardware. If you want to use high resolution modes (>= 1280x1024x16) you may need to increase the vga memory option. Since QEMU 2.9 the default VGA display type is `std` for all OS types besides some Windows versions (XP and older) which use `cirrus`. The `qxl` option enables the SPICE display server. For win* OS you can select how many independent displays you want, Linux guests can add displays themself. You can also run without any graphic card, using a serial device as terminal. See the [Proxmox documentation](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#qm_virtual_machines_settings) section 10.2.8 for more information and available configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#vga VirtualEnvironmentVm2#vga}
  */
  readonly vga?: VirtualEnvironmentVm2Vga;
}
export interface VirtualEnvironmentVm2Cdrom {
  /**
  * The file ID of the CD-ROM, or `cdrom|none`. Defaults to `none` to leave the CD-ROM empty. Use `cdrom` to connect to the physical drive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#file_id VirtualEnvironmentVm2#file_id}
  */
  readonly fileId?: string;
}

export function virtualEnvironmentVm2CdromToTerraform(struct?: VirtualEnvironmentVm2Cdrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_id: cdktf.stringToTerraform(struct!.fileId),
  }
}


export function virtualEnvironmentVm2CdromToHclTerraform(struct?: VirtualEnvironmentVm2Cdrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVm2CdromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): VirtualEnvironmentVm2Cdrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVm2Cdrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileId = value.fileId;
    }
  }

  // file_id - computed: true, optional: true, required: false
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  public resetFileId() {
    this._fileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
  }
}

export class VirtualEnvironmentVm2CdromMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: VirtualEnvironmentVm2Cdrom } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): VirtualEnvironmentVm2CdromOutputReference {
    return new VirtualEnvironmentVm2CdromOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface VirtualEnvironmentVm2Clone {
  /**
  * The ID of the VM to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#id VirtualEnvironmentVm2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The number of retries to perform when cloning the VM (default: 3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#retries VirtualEnvironmentVm2#retries}
  */
  readonly retries?: number;
}

export function virtualEnvironmentVm2CloneToTerraform(struct?: VirtualEnvironmentVm2Clone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function virtualEnvironmentVm2CloneToHclTerraform(struct?: VirtualEnvironmentVm2Clone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVm2CloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentVm2Clone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVm2Clone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._retries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._retries = value.retries;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }
}
export interface VirtualEnvironmentVm2Cpu {
  /**
  * The CPU cores that are used to run the VM’s vCPU. The value is a list of CPU IDs, separated by commas. The CPU IDs are zero-based.  For example, `0,1,2,3` (which also can be shortened to `0-3`) means that the VM’s vCPUs are run on the first four CPU cores. Setting `affinity` is only allowed for `root@pam` authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#affinity VirtualEnvironmentVm2#affinity}
  */
  readonly affinity?: string;
  /**
  * The CPU architecture `<aarch64 | x86_64>` (defaults to the host). Setting `affinity` is only allowed for `root@pam` authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#architecture VirtualEnvironmentVm2#architecture}
  */
  readonly architecture?: string;
  /**
  * The number of CPU cores per socket (defaults to `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#cores VirtualEnvironmentVm2#cores}
  */
  readonly cores?: number;
  /**
  * Set of additional CPU flags. Use `+FLAG` to enable, `-FLAG` to disable a flag. Custom CPU models can specify any flag supported by QEMU/KVM, VM-specific flags must be from the following set for security reasons: `pcid`, `spec-ctrl`, `ibpb`, `ssbd`, `virt-ssbd`, `amd-ssbd`, `amd-no-ssb`, `pdpe1gb`, `md-clear`, `hv-tlbflush`, `hv-evmcs`, `aes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#flags VirtualEnvironmentVm2#flags}
  */
  readonly flags?: string[];
  /**
  * The number of hotplugged vCPUs (defaults to `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#hotplugged VirtualEnvironmentVm2#hotplugged}
  */
  readonly hotplugged?: number;
  /**
  * Limit of CPU usage (defaults to `0` which means no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#limit VirtualEnvironmentVm2#limit}
  */
  readonly limit?: number;
  /**
  * Enable NUMA (defaults to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#numa VirtualEnvironmentVm2#numa}
  */
  readonly numa?: boolean | cdktf.IResolvable;
  /**
  * The number of CPU sockets (defaults to `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#sockets VirtualEnvironmentVm2#sockets}
  */
  readonly sockets?: number;
  /**
  * Emulated CPU type, it's recommended to use `x86-64-v2-AES` or higher (defaults to `kvm64`). See https://pve.proxmox.com/pve-docs/pve-admin-guide.html#qm_virtual_machines_settings for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#type VirtualEnvironmentVm2#type}
  */
  readonly type?: string;
  /**
  * CPU weight for a VM. Argument is used in the kernel fair scheduler. The larger the number is, the more CPU time this VM gets. Number is relative to weights of all the other running VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#units VirtualEnvironmentVm2#units}
  */
  readonly units?: number;
}

export function virtualEnvironmentVm2CpuToTerraform(struct?: VirtualEnvironmentVm2Cpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    architecture: cdktf.stringToTerraform(struct!.architecture),
    cores: cdktf.numberToTerraform(struct!.cores),
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    hotplugged: cdktf.numberToTerraform(struct!.hotplugged),
    limit: cdktf.numberToTerraform(struct!.limit),
    numa: cdktf.booleanToTerraform(struct!.numa),
    sockets: cdktf.numberToTerraform(struct!.sockets),
    type: cdktf.stringToTerraform(struct!.type),
    units: cdktf.numberToTerraform(struct!.units),
  }
}


export function virtualEnvironmentVm2CpuToHclTerraform(struct?: VirtualEnvironmentVm2Cpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hotplugged: {
      value: cdktf.numberToHclTerraform(struct!.hotplugged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    numa: {
      value: cdktf.booleanToHclTerraform(struct!.numa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sockets: {
      value: cdktf.numberToHclTerraform(struct!.sockets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    units: {
      value: cdktf.numberToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVm2CpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentVm2Cpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._hotplugged !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotplugged = this._hotplugged;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._numa !== undefined) {
      hasAnyValues = true;
      internalValueResult.numa = this._numa;
    }
    if (this._sockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockets = this._sockets;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVm2Cpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._architecture = undefined;
      this._cores = undefined;
      this._flags = undefined;
      this._hotplugged = undefined;
      this._limit = undefined;
      this._numa = undefined;
      this._sockets = undefined;
      this._type = undefined;
      this._units = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._architecture = value.architecture;
      this._cores = value.cores;
      this._flags = value.flags;
      this._hotplugged = value.hotplugged;
      this._limit = value.limit;
      this._numa = value.numa;
      this._sockets = value.sockets;
      this._type = value.type;
      this._units = value.units;
    }
  }

  // affinity - computed: true, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // cores - computed: true, optional: true, required: false
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

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // hotplugged - computed: true, optional: true, required: false
  private _hotplugged?: number; 
  public get hotplugged() {
    return this.getNumberAttribute('hotplugged');
  }
  public set hotplugged(value: number) {
    this._hotplugged = value;
  }
  public resetHotplugged() {
    this._hotplugged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotpluggedInput() {
    return this._hotplugged;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // numa - computed: true, optional: true, required: false
  private _numa?: boolean | cdktf.IResolvable; 
  public get numa() {
    return this.getBooleanAttribute('numa');
  }
  public set numa(value: boolean | cdktf.IResolvable) {
    this._numa = value;
  }
  public resetNuma() {
    this._numa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaInput() {
    return this._numa;
  }

  // sockets - computed: true, optional: true, required: false
  private _sockets?: number; 
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
  public set sockets(value: number) {
    this._sockets = value;
  }
  public resetSockets() {
    this._sockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // units - computed: true, optional: true, required: false
  private _units?: number; 
  public get units() {
    return this.getNumberAttribute('units');
  }
  public set units(value: number) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}
export interface VirtualEnvironmentVm2Rng {
  /**
  * Maximum bytes of entropy allowed to get injected into the guest every period. Use 0 to disable limiting (potentially dangerous).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#max_bytes VirtualEnvironmentVm2#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Period in milliseconds to limit entropy injection to the guest. Use 0 to disable limiting (potentially dangerous).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#period VirtualEnvironmentVm2#period}
  */
  readonly period?: number;
  /**
  * The file on the host to gather entropy from. In most cases, `/dev/urandom` should be preferred over `/dev/random` to avoid entropy-starvation issues on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#source VirtualEnvironmentVm2#source}
  */
  readonly source?: string;
}

export function virtualEnvironmentVm2RngToTerraform(struct?: VirtualEnvironmentVm2Rng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    period: cdktf.numberToTerraform(struct!.period),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function virtualEnvironmentVm2RngToHclTerraform(struct?: VirtualEnvironmentVm2Rng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVm2RngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentVm2Rng | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVm2Rng | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytes = undefined;
      this._period = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytes = value.maxBytes;
      this._period = value.period;
      this._source = value.source;
    }
  }

  // max_bytes - computed: true, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface VirtualEnvironmentVm2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#create VirtualEnvironmentVm2#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#delete VirtualEnvironmentVm2#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#read VirtualEnvironmentVm2#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#update VirtualEnvironmentVm2#update}
  */
  readonly update?: string;
}

export function virtualEnvironmentVm2TimeoutsToTerraform(struct?: VirtualEnvironmentVm2Timeouts | cdktf.IResolvable): any {
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


export function virtualEnvironmentVm2TimeoutsToHclTerraform(struct?: VirtualEnvironmentVm2Timeouts | cdktf.IResolvable): any {
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

export class VirtualEnvironmentVm2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentVm2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualEnvironmentVm2Timeouts | cdktf.IResolvable | undefined) {
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
export interface VirtualEnvironmentVm2Vga {
  /**
  * Enable a specific clipboard. If not set, depending on the display type the SPICE one will be added. Currently only `vnc` is available. Migration with VNC clipboard is not supported by Proxmox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#clipboard VirtualEnvironmentVm2#clipboard}
  */
  readonly clipboard?: string;
  /**
  * The VGA memory in megabytes (4-512 MB). Has no effect with serial display. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#memory VirtualEnvironmentVm2#memory}
  */
  readonly memory?: number;
  /**
  * The VGA type (defaults to `std`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#type VirtualEnvironmentVm2#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentVm2VgaToTerraform(struct?: VirtualEnvironmentVm2Vga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clipboard: cdktf.stringToTerraform(struct!.clipboard),
    memory: cdktf.numberToTerraform(struct!.memory),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualEnvironmentVm2VgaToHclTerraform(struct?: VirtualEnvironmentVm2Vga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clipboard: {
      value: cdktf.stringToHclTerraform(struct!.clipboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVm2VgaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentVm2Vga | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clipboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipboard = this._clipboard;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVm2Vga | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clipboard = undefined;
      this._memory = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clipboard = value.clipboard;
      this._memory = value.memory;
      this._type = value.type;
    }
  }

  // clipboard - computed: true, optional: true, required: false
  private _clipboard?: string; 
  public get clipboard() {
    return this.getStringAttribute('clipboard');
  }
  public set clipboard(value: string) {
    this._clipboard = value;
  }
  public resetClipboard() {
    this._clipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardInput() {
    return this._clipboard;
  }

  // memory - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2 proxmox_virtual_environment_vm2}
*/
export class VirtualEnvironmentVm2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_vm2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentVm2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentVm2 to import
  * @param importFromId The id of the existing VirtualEnvironmentVm2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentVm2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_vm2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.0/docs/resources/virtual_environment_vm2 proxmox_virtual_environment_vm2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentVm2Config
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentVm2Config) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_vm2',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.0',
        providerVersionConstraint: '0.89.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdrom.internalValue = config.cdrom;
    this._clone.internalValue = config.clone;
    this._cpu.internalValue = config.cpu;
    this._deleteUnreferencedDisksOnDestroy = config.deleteUnreferencedDisksOnDestroy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._purgeOnDestroy = config.purgeOnDestroy;
    this._rng.internalValue = config.rng;
    this._stopOnDestroy = config.stopOnDestroy;
    this._tags = config.tags;
    this._template = config.template;
    this._timeouts.internalValue = config.timeouts;
    this._vga.internalValue = config.vga;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdrom - computed: true, optional: true, required: false
  private _cdrom = new VirtualEnvironmentVm2CdromMap(this, "cdrom");
  public get cdrom() {
    return this._cdrom;
  }
  public putCdrom(value: { [key: string]: VirtualEnvironmentVm2Cdrom } | cdktf.IResolvable) {
    this._cdrom.internalValue = value;
  }
  public resetCdrom() {
    this._cdrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdromInput() {
    return this._cdrom.internalValue;
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new VirtualEnvironmentVm2CloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: VirtualEnvironmentVm2Clone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu = new VirtualEnvironmentVm2CpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: VirtualEnvironmentVm2Cpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // delete_unreferenced_disks_on_destroy - computed: true, optional: true, required: false
  private _deleteUnreferencedDisksOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteUnreferencedDisksOnDestroy() {
    return this.getBooleanAttribute('delete_unreferenced_disks_on_destroy');
  }
  public set deleteUnreferencedDisksOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteUnreferencedDisksOnDestroy = value;
  }
  public resetDeleteUnreferencedDisksOnDestroy() {
    this._deleteUnreferencedDisksOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUnreferencedDisksOnDestroyInput() {
    return this._deleteUnreferencedDisksOnDestroy;
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

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // purge_on_destroy - computed: true, optional: true, required: false
  private _purgeOnDestroy?: boolean | cdktf.IResolvable; 
  public get purgeOnDestroy() {
    return this.getBooleanAttribute('purge_on_destroy');
  }
  public set purgeOnDestroy(value: boolean | cdktf.IResolvable) {
    this._purgeOnDestroy = value;
  }
  public resetPurgeOnDestroy() {
    this._purgeOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeOnDestroyInput() {
    return this._purgeOnDestroy;
  }

  // rng - computed: true, optional: true, required: false
  private _rng = new VirtualEnvironmentVm2RngOutputReference(this, "rng");
  public get rng() {
    return this._rng;
  }
  public putRng(value: VirtualEnvironmentVm2Rng) {
    this._rng.internalValue = value;
  }
  public resetRng() {
    this._rng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rngInput() {
    return this._rng.internalValue;
  }

  // stop_on_destroy - computed: true, optional: true, required: false
  private _stopOnDestroy?: boolean | cdktf.IResolvable; 
  public get stopOnDestroy() {
    return this.getBooleanAttribute('stop_on_destroy');
  }
  public set stopOnDestroy(value: boolean | cdktf.IResolvable) {
    this._stopOnDestroy = value;
  }
  public resetStopOnDestroy() {
    this._stopOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnDestroyInput() {
    return this._stopOnDestroy;
  }

  // tags - computed: true, optional: true, required: false
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

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualEnvironmentVm2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualEnvironmentVm2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vga - computed: true, optional: true, required: false
  private _vga = new VirtualEnvironmentVm2VgaOutputReference(this, "vga");
  public get vga() {
    return this._vga;
  }
  public putVga(value: VirtualEnvironmentVm2Vga) {
    this._vga.internalValue = value;
  }
  public resetVga() {
    this._vga.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgaInput() {
    return this._vga.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdrom: cdktf.hashMapper(virtualEnvironmentVm2CdromToTerraform)(this._cdrom.internalValue),
      clone: virtualEnvironmentVm2CloneToTerraform(this._clone.internalValue),
      cpu: virtualEnvironmentVm2CpuToTerraform(this._cpu.internalValue),
      delete_unreferenced_disks_on_destroy: cdktf.booleanToTerraform(this._deleteUnreferencedDisksOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      purge_on_destroy: cdktf.booleanToTerraform(this._purgeOnDestroy),
      rng: virtualEnvironmentVm2RngToTerraform(this._rng.internalValue),
      stop_on_destroy: cdktf.booleanToTerraform(this._stopOnDestroy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.booleanToTerraform(this._template),
      timeouts: virtualEnvironmentVm2TimeoutsToTerraform(this._timeouts.internalValue),
      vga: virtualEnvironmentVm2VgaToTerraform(this._vga.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdrom: {
        value: cdktf.hashMapperHcl(virtualEnvironmentVm2CdromToHclTerraform)(this._cdrom.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "VirtualEnvironmentVm2CdromMap",
      },
      clone: {
        value: virtualEnvironmentVm2CloneToHclTerraform(this._clone.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentVm2Clone",
      },
      cpu: {
        value: virtualEnvironmentVm2CpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentVm2Cpu",
      },
      delete_unreferenced_disks_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteUnreferencedDisksOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
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
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purge_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._purgeOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rng: {
        value: virtualEnvironmentVm2RngToHclTerraform(this._rng.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentVm2Rng",
      },
      stop_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._stopOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.booleanToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: virtualEnvironmentVm2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentVm2Timeouts",
      },
      vga: {
        value: virtualEnvironmentVm2VgaToHclTerraform(this._vga.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentVm2Vga",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
