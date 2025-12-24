// https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentClonedVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CD-ROM configuration. The key is the interface of the CD-ROM, could be one of `ideN`, `sataN`, `scsiN`, where N is the index of the interface. Note that `q35` machine type only supports `ide0` and `ide2` of IDE interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#cdrom VirtualEnvironmentClonedVm#cdrom}
  */
  readonly cdrom?: { [key: string]: VirtualEnvironmentClonedVmCdrom } | cdktf.IResolvable;
  /**
  * Clone settings. Changes require recreation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#clone VirtualEnvironmentClonedVm#clone}
  */
  readonly clone: VirtualEnvironmentClonedVmClone;
  /**
  * The CPU configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#cpu VirtualEnvironmentClonedVm#cpu}
  */
  readonly cpu?: VirtualEnvironmentClonedVmCpu;
  /**
  * Explicit deletions to perform after cloning/updating. Entries persist across applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#delete VirtualEnvironmentClonedVm#delete}
  */
  readonly delete?: VirtualEnvironmentClonedVmDelete;
  /**
  * Delete unreferenced disks on destroy. WARNING: When set to true, any disks not explicitly managed by Terraform will be deleted on destroy, potentially causing data loss. Defaults to false for safety.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#delete_unreferenced_disks_on_destroy VirtualEnvironmentClonedVm#delete_unreferenced_disks_on_destroy}
  */
  readonly deleteUnreferencedDisksOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Optional VM description applied after cloning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#description VirtualEnvironmentClonedVm#description}
  */
  readonly description?: string;
  /**
  * Disks keyed by slot (scsi0, virtio0, sata0, ide0, ...). Only listed keys are managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#disk VirtualEnvironmentClonedVm#disk}
  */
  readonly disk?: { [key: string]: VirtualEnvironmentClonedVmDisk } | cdktf.IResolvable;
  /**
  * The VM identifier in the Proxmox cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#id VirtualEnvironmentClonedVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Memory configuration for the VM. Uses Proxmox memory ballooning to allow dynamic memory allocation. The `size` sets the total available RAM, while `balloon` sets the guaranteed floor. The host can reclaim memory between these values when needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#memory VirtualEnvironmentClonedVm#memory}
  */
  readonly memory?: VirtualEnvironmentClonedVmMemory;
  /**
  * Optional VM name override applied after cloning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#name VirtualEnvironmentClonedVm#name}
  */
  readonly name?: string;
  /**
  * Network devices keyed by slot (net0, net1, ...). Only listed keys are managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#network VirtualEnvironmentClonedVm#network}
  */
  readonly network?: { [key: string]: VirtualEnvironmentClonedVmNetwork } | cdktf.IResolvable;
  /**
  * Target node for the cloned VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#node_name VirtualEnvironmentClonedVm#node_name}
  */
  readonly nodeName: string;
  /**
  * Purge backup configuration on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#purge_on_destroy VirtualEnvironmentClonedVm#purge_on_destroy}
  */
  readonly purgeOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Configure the RNG (Random Number Generator) device. The RNG device provides entropy to guests to ensure good quality random numbers for guest applications that require them. Can only be set by `root@pam.` See the [Proxmox documentation](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#qm_virtual_machines_settings) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#rng VirtualEnvironmentClonedVm#rng}
  */
  readonly rng?: VirtualEnvironmentClonedVmRng;
  /**
  * Stop the VM on destroy (instead of shutdown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#stop_on_destroy VirtualEnvironmentClonedVm#stop_on_destroy}
  */
  readonly stopOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Tags applied after cloning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#tags VirtualEnvironmentClonedVm#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#timeouts VirtualEnvironmentClonedVm#timeouts}
  */
  readonly timeouts?: VirtualEnvironmentClonedVmTimeouts;
  /**
  * Configure the VGA Hardware. If you want to use high resolution modes (>= 1280x1024x16) you may need to increase the vga memory option. Since QEMU 2.9 the default VGA display type is `std` for all OS types besides some Windows versions (XP and older) which use `cirrus`. The `qxl` option enables the SPICE display server. For win* OS you can select how many independent displays you want, Linux guests can add displays themself. You can also run without any graphic card, using a serial device as terminal. See the [Proxmox documentation](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#qm_virtual_machines_settings) section 10.2.8 for more information and available configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#vga VirtualEnvironmentClonedVm#vga}
  */
  readonly vga?: VirtualEnvironmentClonedVmVga;
}
export interface VirtualEnvironmentClonedVmCdrom {
  /**
  * The file ID of the CD-ROM, or `cdrom|none`. Defaults to `none` to leave the CD-ROM empty. Use `cdrom` to connect to the physical drive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#file_id VirtualEnvironmentClonedVm#file_id}
  */
  readonly fileId?: string;
}

export function virtualEnvironmentClonedVmCdromToTerraform(struct?: VirtualEnvironmentClonedVmCdrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_id: cdktf.stringToTerraform(struct!.fileId),
  }
}


export function virtualEnvironmentClonedVmCdromToHclTerraform(struct?: VirtualEnvironmentClonedVmCdrom | cdktf.IResolvable): any {
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

export class VirtualEnvironmentClonedVmCdromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentClonedVmCdrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualEnvironmentClonedVmCdrom | cdktf.IResolvable | undefined) {
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

  // file_id - computed: false, optional: true, required: false
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

export class VirtualEnvironmentClonedVmCdromMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: VirtualEnvironmentClonedVmCdrom } | cdktf.IResolvable

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
  public get(key: string): VirtualEnvironmentClonedVmCdromOutputReference {
    return new VirtualEnvironmentClonedVmCdromOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface VirtualEnvironmentClonedVmClone {
  /**
  * Clone bandwidth limit in MB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#bandwidth_limit VirtualEnvironmentClonedVm#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * Perform a full clone (true) or linked clone (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#full VirtualEnvironmentClonedVm#full}
  */
  readonly full?: boolean | cdktf.IResolvable;
  /**
  * Pool to assign the cloned VM to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#pool_id VirtualEnvironmentClonedVm#pool_id}
  */
  readonly poolId?: string;
  /**
  * Number of retries for clone operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#retries VirtualEnvironmentClonedVm#retries}
  */
  readonly retries?: number;
  /**
  * Snapshot name to clone from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#snapshot_name VirtualEnvironmentClonedVm#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * Source node of the VM/template. Defaults to target node if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#source_node_name VirtualEnvironmentClonedVm#source_node_name}
  */
  readonly sourceNodeName?: string;
  /**
  * Source VM/template ID to clone from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#source_vm_id VirtualEnvironmentClonedVm#source_vm_id}
  */
  readonly sourceVmId: number;
  /**
  * Target datastore for cloned disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#target_datastore VirtualEnvironmentClonedVm#target_datastore}
  */
  readonly targetDatastore?: string;
  /**
  * Target disk format for clone (e.g., raw, qcow2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#target_format VirtualEnvironmentClonedVm#target_format}
  */
  readonly targetFormat?: string;
}

export function virtualEnvironmentClonedVmCloneToTerraform(struct?: VirtualEnvironmentClonedVmClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_limit: cdktf.numberToTerraform(struct!.bandwidthLimit),
    full: cdktf.booleanToTerraform(struct!.full),
    pool_id: cdktf.stringToTerraform(struct!.poolId),
    retries: cdktf.numberToTerraform(struct!.retries),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    source_node_name: cdktf.stringToTerraform(struct!.sourceNodeName),
    source_vm_id: cdktf.numberToTerraform(struct!.sourceVmId),
    target_datastore: cdktf.stringToTerraform(struct!.targetDatastore),
    target_format: cdktf.stringToTerraform(struct!.targetFormat),
  }
}


export function virtualEnvironmentClonedVmCloneToHclTerraform(struct?: VirtualEnvironmentClonedVmClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_limit: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full: {
      value: cdktf.booleanToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_id: {
      value: cdktf.stringToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_node_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceNodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vm_id: {
      value: cdktf.numberToHclTerraform(struct!.sourceVmId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_datastore: {
      value: cdktf.stringToHclTerraform(struct!.targetDatastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_format: {
      value: cdktf.stringToHclTerraform(struct!.targetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClonedVmCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClonedVmClone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    if (this._sourceNodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNodeName = this._sourceNodeName;
    }
    if (this._sourceVmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVmId = this._sourceVmId;
    }
    if (this._targetDatastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDatastore = this._targetDatastore;
    }
    if (this._targetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFormat = this._targetFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClonedVmClone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthLimit = undefined;
      this._full = undefined;
      this._poolId = undefined;
      this._retries = undefined;
      this._snapshotName = undefined;
      this._sourceNodeName = undefined;
      this._sourceVmId = undefined;
      this._targetDatastore = undefined;
      this._targetFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthLimit = value.bandwidthLimit;
      this._full = value.full;
      this._poolId = value.poolId;
      this._retries = value.retries;
      this._snapshotName = value.snapshotName;
      this._sourceNodeName = value.sourceNodeName;
      this._sourceVmId = value.sourceVmId;
      this._targetDatastore = value.targetDatastore;
      this._targetFormat = value.targetFormat;
    }
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // full - computed: true, optional: true, required: false
  private _full?: boolean | cdktf.IResolvable; 
  public get full() {
    return this.getBooleanAttribute('full');
  }
  public set full(value: boolean | cdktf.IResolvable) {
    this._full = value;
  }
  public resetFull() {
    this._full = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
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

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // source_node_name - computed: false, optional: true, required: false
  private _sourceNodeName?: string; 
  public get sourceNodeName() {
    return this.getStringAttribute('source_node_name');
  }
  public set sourceNodeName(value: string) {
    this._sourceNodeName = value;
  }
  public resetSourceNodeName() {
    this._sourceNodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNodeNameInput() {
    return this._sourceNodeName;
  }

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId?: number; 
  public get sourceVmId() {
    return this.getNumberAttribute('source_vm_id');
  }
  public set sourceVmId(value: number) {
    this._sourceVmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId;
  }

  // target_datastore - computed: false, optional: true, required: false
  private _targetDatastore?: string; 
  public get targetDatastore() {
    return this.getStringAttribute('target_datastore');
  }
  public set targetDatastore(value: string) {
    this._targetDatastore = value;
  }
  public resetTargetDatastore() {
    this._targetDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatastoreInput() {
    return this._targetDatastore;
  }

  // target_format - computed: false, optional: true, required: false
  private _targetFormat?: string; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat;
  }
}
export interface VirtualEnvironmentClonedVmCpu {
  /**
  * The CPU cores that are used to run the VM’s vCPU. The value is a list of CPU IDs, separated by commas. The CPU IDs are zero-based.  For example, `0,1,2,3` (which also can be shortened to `0-3`) means that the VM’s vCPUs are run on the first four CPU cores. Setting `affinity` is only allowed for `root@pam` authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#affinity VirtualEnvironmentClonedVm#affinity}
  */
  readonly affinity?: string;
  /**
  * The CPU architecture `<aarch64 | x86_64>` (defaults to the host). Setting `architecture` is only allowed for `root@pam` authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#architecture VirtualEnvironmentClonedVm#architecture}
  */
  readonly architecture?: string;
  /**
  * The number of CPU cores per socket (defaults to `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#cores VirtualEnvironmentClonedVm#cores}
  */
  readonly cores?: number;
  /**
  * Set of additional CPU flags. Use `+FLAG` to enable, `-FLAG` to disable a flag. Custom CPU models can specify any flag supported by QEMU/KVM, VM-specific flags must be from the following set for security reasons: `pcid`, `spec-ctrl`, `ibpb`, `ssbd`, `virt-ssbd`, `amd-ssbd`, `amd-no-ssb`, `pdpe1gb`, `md-clear`, `hv-tlbflush`, `hv-evmcs`, `aes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#flags VirtualEnvironmentClonedVm#flags}
  */
  readonly flags?: string[];
  /**
  * The number of hotplugged vCPUs (defaults to `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#hotplugged VirtualEnvironmentClonedVm#hotplugged}
  */
  readonly hotplugged?: number;
  /**
  * Limit of CPU usage (defaults to `0` which means no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#limit VirtualEnvironmentClonedVm#limit}
  */
  readonly limit?: number;
  /**
  * Enable NUMA (defaults to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#numa VirtualEnvironmentClonedVm#numa}
  */
  readonly numa?: boolean | cdktf.IResolvable;
  /**
  * The number of CPU sockets (defaults to `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#sockets VirtualEnvironmentClonedVm#sockets}
  */
  readonly sockets?: number;
  /**
  * Emulated CPU type, it's recommended to use `x86-64-v2-AES` or higher (defaults to `kvm64`). See https://pve.proxmox.com/pve-docs/pve-admin-guide.html#qm_virtual_machines_settings for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#type VirtualEnvironmentClonedVm#type}
  */
  readonly type?: string;
  /**
  * CPU weight for a VM. Argument is used in the kernel fair scheduler. The larger the number is, the more CPU time this VM gets. Number is relative to weights of all the other running VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#units VirtualEnvironmentClonedVm#units}
  */
  readonly units?: number;
}

export function virtualEnvironmentClonedVmCpuToTerraform(struct?: VirtualEnvironmentClonedVmCpu | cdktf.IResolvable): any {
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


export function virtualEnvironmentClonedVmCpuToHclTerraform(struct?: VirtualEnvironmentClonedVmCpu | cdktf.IResolvable): any {
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

export class VirtualEnvironmentClonedVmCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClonedVmCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualEnvironmentClonedVmCpu | cdktf.IResolvable | undefined) {
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

  // affinity - computed: false, optional: true, required: false
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

  // architecture - computed: false, optional: true, required: false
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

  // flags - computed: false, optional: true, required: false
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

  // hotplugged - computed: false, optional: true, required: false
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

  // limit - computed: false, optional: true, required: false
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

  // numa - computed: false, optional: true, required: false
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

  // sockets - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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

  // units - computed: false, optional: true, required: false
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
export interface VirtualEnvironmentClonedVmDelete {
  /**
  * Disk slots to delete (e.g., scsi2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#disk VirtualEnvironmentClonedVm#disk}
  */
  readonly disk?: string[];
  /**
  * Network slots to delete (e.g., net1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#network VirtualEnvironmentClonedVm#network}
  */
  readonly network?: string[];
}

export function virtualEnvironmentClonedVmDeleteToTerraform(struct?: VirtualEnvironmentClonedVmDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disk),
    network: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.network),
  }
}


export function virtualEnvironmentClonedVmDeleteToHclTerraform(struct?: VirtualEnvironmentClonedVmDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disk),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.network),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClonedVmDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClonedVmDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClonedVmDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk = value.disk;
      this._network = value.network;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: string[]; 
  public get disk() {
    return this.getListAttribute('disk');
  }
  public set disk(value: string[]) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string[]; 
  public get network() {
    return this.getListAttribute('network');
  }
  public set network(value: string[]) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface VirtualEnvironmentClonedVmDisk {
  /**
  * AIO mode (io_uring, native, threads).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#aio VirtualEnvironmentClonedVm#aio}
  */
  readonly aio?: string;
  /**
  * Include disk in backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#backup VirtualEnvironmentClonedVm#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Cache mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#cache VirtualEnvironmentClonedVm#cache}
  */
  readonly cache?: string;
  /**
  * Target datastore for new disks when file is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#datastore_id VirtualEnvironmentClonedVm#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * Discard/trim behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#discard VirtualEnvironmentClonedVm#discard}
  */
  readonly discard?: string;
  /**
  * Existing volume reference (e.g., local-lvm:vm-100-disk-0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#file VirtualEnvironmentClonedVm#file}
  */
  readonly file?: string;
  /**
  * Disk format (raw, qcow2, vmdk).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#format VirtualEnvironmentClonedVm#format}
  */
  readonly format?: string;
  /**
  * Import source volume/file id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#import_from VirtualEnvironmentClonedVm#import_from}
  */
  readonly importFromAttribute?: string;
  /**
  * Use IO thread.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#iothread VirtualEnvironmentClonedVm#iothread}
  */
  readonly iothread?: boolean | cdktf.IResolvable;
  /**
  * Disk media (e.g., disk, cdrom).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#media VirtualEnvironmentClonedVm#media}
  */
  readonly media?: string;
  /**
  * Consider disk for replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#replicate VirtualEnvironmentClonedVm#replicate}
  */
  readonly replicate?: boolean | cdktf.IResolvable;
  /**
  * Disk serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#serial VirtualEnvironmentClonedVm#serial}
  */
  readonly serial?: string;
  /**
  * Disk size (GiB) when creating new disks. **Note:** Disk shrinking is not supported. Attempting to set `size_gb` to a value smaller than the current disk size will result in an error. Only disk expansion is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#size_gb VirtualEnvironmentClonedVm#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * Mark disk as SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#ssd VirtualEnvironmentClonedVm#ssd}
  */
  readonly ssd?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentClonedVmDiskToTerraform(struct?: VirtualEnvironmentClonedVmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aio: cdktf.stringToTerraform(struct!.aio),
    backup: cdktf.booleanToTerraform(struct!.backup),
    cache: cdktf.stringToTerraform(struct!.cache),
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    discard: cdktf.stringToTerraform(struct!.discard),
    file: cdktf.stringToTerraform(struct!.file),
    format: cdktf.stringToTerraform(struct!.format),
    import_from: cdktf.stringToTerraform(struct!.importFromAttribute),
    iothread: cdktf.booleanToTerraform(struct!.iothread),
    media: cdktf.stringToTerraform(struct!.media),
    replicate: cdktf.booleanToTerraform(struct!.replicate),
    serial: cdktf.stringToTerraform(struct!.serial),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    ssd: cdktf.booleanToTerraform(struct!.ssd),
  }
}


export function virtualEnvironmentClonedVmDiskToHclTerraform(struct?: VirtualEnvironmentClonedVmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aio: {
      value: cdktf.stringToHclTerraform(struct!.aio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discard: {
      value: cdktf.stringToHclTerraform(struct!.discard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_from: {
      value: cdktf.stringToHclTerraform(struct!.importFromAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iothread: {
      value: cdktf.booleanToHclTerraform(struct!.iothread),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    media: {
      value: cdktf.stringToHclTerraform(struct!.media),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicate: {
      value: cdktf.booleanToHclTerraform(struct!.replicate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssd: {
      value: cdktf.booleanToHclTerraform(struct!.ssd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClonedVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentClonedVmDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aio !== undefined) {
      hasAnyValues = true;
      internalValueResult.aio = this._aio;
    }
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._importFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.importFromAttribute = this._importFrom;
    }
    if (this._iothread !== undefined) {
      hasAnyValues = true;
      internalValueResult.iothread = this._iothread;
    }
    if (this._media !== undefined) {
      hasAnyValues = true;
      internalValueResult.media = this._media;
    }
    if (this._replicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicate = this._replicate;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._ssd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssd = this._ssd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClonedVmDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aio = undefined;
      this._backup = undefined;
      this._cache = undefined;
      this._datastoreId = undefined;
      this._discard = undefined;
      this._file = undefined;
      this._format = undefined;
      this._importFrom = undefined;
      this._iothread = undefined;
      this._media = undefined;
      this._replicate = undefined;
      this._serial = undefined;
      this._sizeGb = undefined;
      this._ssd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aio = value.aio;
      this._backup = value.backup;
      this._cache = value.cache;
      this._datastoreId = value.datastoreId;
      this._discard = value.discard;
      this._file = value.file;
      this._format = value.format;
      this._importFrom = value.importFromAttribute;
      this._iothread = value.iothread;
      this._media = value.media;
      this._replicate = value.replicate;
      this._serial = value.serial;
      this._sizeGb = value.sizeGb;
      this._ssd = value.ssd;
    }
  }

  // aio - computed: false, optional: true, required: false
  private _aio?: string; 
  public get aio() {
    return this.getStringAttribute('aio');
  }
  public set aio(value: string) {
    this._aio = value;
  }
  public resetAio() {
    this._aio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aioInput() {
    return this._aio;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // datastore_id - computed: false, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: string; 
  public get discard() {
    return this.getStringAttribute('discard');
  }
  public set discard(value: string) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // import_from - computed: false, optional: true, required: false
  private _importFrom?: string; 
  public get importFromAttribute() {
    return this.getStringAttribute('import_from');
  }
  public set importFromAttribute(value: string) {
    this._importFrom = value;
  }
  public resetImportFromAttribute() {
    this._importFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFromAttributeInput() {
    return this._importFrom;
  }

  // iothread - computed: false, optional: true, required: false
  private _iothread?: boolean | cdktf.IResolvable; 
  public get iothread() {
    return this.getBooleanAttribute('iothread');
  }
  public set iothread(value: boolean | cdktf.IResolvable) {
    this._iothread = value;
  }
  public resetIothread() {
    this._iothread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iothreadInput() {
    return this._iothread;
  }

  // media - computed: false, optional: true, required: false
  private _media?: string; 
  public get media() {
    return this.getStringAttribute('media');
  }
  public set media(value: string) {
    this._media = value;
  }
  public resetMedia() {
    this._media = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaInput() {
    return this._media;
  }

  // replicate - computed: false, optional: true, required: false
  private _replicate?: boolean | cdktf.IResolvable; 
  public get replicate() {
    return this.getBooleanAttribute('replicate');
  }
  public set replicate(value: boolean | cdktf.IResolvable) {
    this._replicate = value;
  }
  public resetReplicate() {
    this._replicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateInput() {
    return this._replicate;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // size_gb - computed: false, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // ssd - computed: false, optional: true, required: false
  private _ssd?: boolean | cdktf.IResolvable; 
  public get ssd() {
    return this.getBooleanAttribute('ssd');
  }
  public set ssd(value: boolean | cdktf.IResolvable) {
    this._ssd = value;
  }
  public resetSsd() {
    this._ssd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdInput() {
    return this._ssd;
  }
}

export class VirtualEnvironmentClonedVmDiskMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: VirtualEnvironmentClonedVmDisk } | cdktf.IResolvable

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
  public get(key: string): VirtualEnvironmentClonedVmDiskOutputReference {
    return new VirtualEnvironmentClonedVmDiskOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface VirtualEnvironmentClonedVmMemory {
  /**
  * Minimum guaranteed memory in MiB via balloon device. This is the floor amount of RAM that is always guaranteed to the VM. Setting to `0` disables the balloon driver entirely (defaults to `0`). 
  * 
  * **How it works:** The host can reclaim memory between `balloon` and `size` when under memory pressure. The VM is guaranteed to always have at least `balloon` MiB available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#balloon VirtualEnvironmentClonedVm#balloon}
  */
  readonly balloon?: number;
  /**
  * Enable hugepages for VM memory allocation. Hugepages can improve performance for memory-intensive workloads by reducing TLB misses. 
  * 
  * **Options:**
  * - `2` - Use 2 MiB hugepages
  * - `1024` - Use 1 GiB hugepages
  * - `any` - Use any available hugepage size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#hugepages VirtualEnvironmentClonedVm#hugepages}
  */
  readonly hugepages?: string;
  /**
  * Don't release hugepages when the VM shuts down. By default, hugepages are released back to the host when the VM stops. Setting this to `true` keeps them allocated for faster VM startup (defaults to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#keep_hugepages VirtualEnvironmentClonedVm#keep_hugepages}
  */
  readonly keepHugepages?: boolean | cdktf.IResolvable;
  /**
  * CPU scheduler priority for memory ballooning. This is used by the kernel fair scheduler. Higher values mean this VM gets more CPU time during memory ballooning operations. The value is relative to other running VMs (defaults to `1000`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#shares VirtualEnvironmentClonedVm#shares}
  */
  readonly shares?: number;
  /**
  * Total memory available to the VM in MiB. This is the total RAM the VM can use. When ballooning is enabled (balloon > 0), memory between `balloon` and `size` can be reclaimed by the host. When ballooning is disabled (balloon = 0), this is the fixed amount of RAM allocated to the VM (defaults to `512` MiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#size VirtualEnvironmentClonedVm#size}
  */
  readonly size?: number;
}

export function virtualEnvironmentClonedVmMemoryToTerraform(struct?: VirtualEnvironmentClonedVmMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balloon: cdktf.numberToTerraform(struct!.balloon),
    hugepages: cdktf.stringToTerraform(struct!.hugepages),
    keep_hugepages: cdktf.booleanToTerraform(struct!.keepHugepages),
    shares: cdktf.numberToTerraform(struct!.shares),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function virtualEnvironmentClonedVmMemoryToHclTerraform(struct?: VirtualEnvironmentClonedVmMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balloon: {
      value: cdktf.numberToHclTerraform(struct!.balloon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hugepages: {
      value: cdktf.stringToHclTerraform(struct!.hugepages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_hugepages: {
      value: cdktf.booleanToHclTerraform(struct!.keepHugepages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shares: {
      value: cdktf.numberToHclTerraform(struct!.shares),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClonedVmMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClonedVmMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balloon !== undefined) {
      hasAnyValues = true;
      internalValueResult.balloon = this._balloon;
    }
    if (this._hugepages !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepages = this._hugepages;
    }
    if (this._keepHugepages !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepHugepages = this._keepHugepages;
    }
    if (this._shares !== undefined) {
      hasAnyValues = true;
      internalValueResult.shares = this._shares;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClonedVmMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balloon = undefined;
      this._hugepages = undefined;
      this._keepHugepages = undefined;
      this._shares = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balloon = value.balloon;
      this._hugepages = value.hugepages;
      this._keepHugepages = value.keepHugepages;
      this._shares = value.shares;
      this._size = value.size;
    }
  }

  // balloon - computed: false, optional: true, required: false
  private _balloon?: number; 
  public get balloon() {
    return this.getNumberAttribute('balloon');
  }
  public set balloon(value: number) {
    this._balloon = value;
  }
  public resetBalloon() {
    this._balloon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balloonInput() {
    return this._balloon;
  }

  // hugepages - computed: false, optional: true, required: false
  private _hugepages?: string; 
  public get hugepages() {
    return this.getStringAttribute('hugepages');
  }
  public set hugepages(value: string) {
    this._hugepages = value;
  }
  public resetHugepages() {
    this._hugepages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepagesInput() {
    return this._hugepages;
  }

  // keep_hugepages - computed: false, optional: true, required: false
  private _keepHugepages?: boolean | cdktf.IResolvable; 
  public get keepHugepages() {
    return this.getBooleanAttribute('keep_hugepages');
  }
  public set keepHugepages(value: boolean | cdktf.IResolvable) {
    this._keepHugepages = value;
  }
  public resetKeepHugepages() {
    this._keepHugepages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepHugepagesInput() {
    return this._keepHugepages;
  }

  // shares - computed: false, optional: true, required: false
  private _shares?: number; 
  public get shares() {
    return this.getNumberAttribute('shares');
  }
  public set shares(value: number) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares;
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
}
export interface VirtualEnvironmentClonedVmNetwork {
  /**
  * Bridge name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#bridge VirtualEnvironmentClonedVm#bridge}
  */
  readonly bridge?: string;
  /**
  * Enable firewall on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#firewall VirtualEnvironmentClonedVm#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Keep link down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#link_down VirtualEnvironmentClonedVm#link_down}
  */
  readonly linkDown?: boolean | cdktf.IResolvable;
  /**
  * MAC address (computed if omitted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#mac_address VirtualEnvironmentClonedVm#mac_address}
  */
  readonly macAddress?: string;
  /**
  * NIC model (e.g., virtio, e1000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#model VirtualEnvironmentClonedVm#model}
  */
  readonly model?: string;
  /**
  * Interface MTU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#mtu VirtualEnvironmentClonedVm#mtu}
  */
  readonly mtu?: number;
  /**
  * Number of multiqueue NIC queues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#queues VirtualEnvironmentClonedVm#queues}
  */
  readonly queues?: number;
  /**
  * Rate limit (MB/s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#rate_limit VirtualEnvironmentClonedVm#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * VLAN tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#tag VirtualEnvironmentClonedVm#tag}
  */
  readonly tag?: number;
  /**
  * Trunk VLAN IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#trunks VirtualEnvironmentClonedVm#trunks}
  */
  readonly trunks?: number[];
}

export function virtualEnvironmentClonedVmNetworkToTerraform(struct?: VirtualEnvironmentClonedVmNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    firewall: cdktf.booleanToTerraform(struct!.firewall),
    link_down: cdktf.booleanToTerraform(struct!.linkDown),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    queues: cdktf.numberToTerraform(struct!.queues),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    tag: cdktf.numberToTerraform(struct!.tag),
    trunks: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.trunks),
  }
}


export function virtualEnvironmentClonedVmNetworkToHclTerraform(struct?: VirtualEnvironmentClonedVmNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall: {
      value: cdktf.booleanToHclTerraform(struct!.firewall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_down: {
      value: cdktf.booleanToHclTerraform(struct!.linkDown),
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
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queues: {
      value: cdktf.numberToHclTerraform(struct!.queues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunks: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.trunks),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClonedVmNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentClonedVmNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._firewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall;
    }
    if (this._linkDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDown = this._linkDown;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._queues !== undefined) {
      hasAnyValues = true;
      internalValueResult.queues = this._queues;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._trunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunks = this._trunks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClonedVmNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._firewall = undefined;
      this._linkDown = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._mtu = undefined;
      this._queues = undefined;
      this._rateLimit = undefined;
      this._tag = undefined;
      this._trunks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._firewall = value.firewall;
      this._linkDown = value.linkDown;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._mtu = value.mtu;
      this._queues = value.queues;
      this._rateLimit = value.rateLimit;
      this._tag = value.tag;
      this._trunks = value.trunks;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: boolean | cdktf.IResolvable; 
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }
  public set firewall(value: boolean | cdktf.IResolvable) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
  }

  // link_down - computed: false, optional: true, required: false
  private _linkDown?: boolean | cdktf.IResolvable; 
  public get linkDown() {
    return this.getBooleanAttribute('link_down');
  }
  public set linkDown(value: boolean | cdktf.IResolvable) {
    this._linkDown = value;
  }
  public resetLinkDown() {
    this._linkDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownInput() {
    return this._linkDown;
  }

  // mac_address - computed: false, optional: true, required: false
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

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // queues - computed: false, optional: true, required: false
  private _queues?: number; 
  public get queues() {
    return this.getNumberAttribute('queues');
  }
  public set queues(value: number) {
    this._queues = value;
  }
  public resetQueues() {
    this._queues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuesInput() {
    return this._queues;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // trunks - computed: false, optional: true, required: false
  private _trunks?: number[]; 
  public get trunks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('trunks')));
  }
  public set trunks(value: number[]) {
    this._trunks = value;
  }
  public resetTrunks() {
    this._trunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunksInput() {
    return this._trunks;
  }
}

export class VirtualEnvironmentClonedVmNetworkMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: VirtualEnvironmentClonedVmNetwork } | cdktf.IResolvable

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
  public get(key: string): VirtualEnvironmentClonedVmNetworkOutputReference {
    return new VirtualEnvironmentClonedVmNetworkOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface VirtualEnvironmentClonedVmRng {
  /**
  * Maximum bytes of entropy allowed to get injected into the guest every period. Use 0 to disable limiting (potentially dangerous).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#max_bytes VirtualEnvironmentClonedVm#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Period in milliseconds to limit entropy injection to the guest. Use 0 to disable limiting (potentially dangerous).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#period VirtualEnvironmentClonedVm#period}
  */
  readonly period?: number;
  /**
  * The file on the host to gather entropy from. In most cases, `/dev/urandom` should be preferred over `/dev/random` to avoid entropy-starvation issues on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#source VirtualEnvironmentClonedVm#source}
  */
  readonly source?: string;
}

export function virtualEnvironmentClonedVmRngToTerraform(struct?: VirtualEnvironmentClonedVmRng | cdktf.IResolvable): any {
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


export function virtualEnvironmentClonedVmRngToHclTerraform(struct?: VirtualEnvironmentClonedVmRng | cdktf.IResolvable): any {
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

export class VirtualEnvironmentClonedVmRngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClonedVmRng | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualEnvironmentClonedVmRng | cdktf.IResolvable | undefined) {
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

  // max_bytes - computed: false, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
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
export interface VirtualEnvironmentClonedVmTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#create VirtualEnvironmentClonedVm#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#delete VirtualEnvironmentClonedVm#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#read VirtualEnvironmentClonedVm#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#update VirtualEnvironmentClonedVm#update}
  */
  readonly update?: string;
}

export function virtualEnvironmentClonedVmTimeoutsToTerraform(struct?: VirtualEnvironmentClonedVmTimeouts | cdktf.IResolvable): any {
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


export function virtualEnvironmentClonedVmTimeoutsToHclTerraform(struct?: VirtualEnvironmentClonedVmTimeouts | cdktf.IResolvable): any {
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

export class VirtualEnvironmentClonedVmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClonedVmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualEnvironmentClonedVmTimeouts | cdktf.IResolvable | undefined) {
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
export interface VirtualEnvironmentClonedVmVga {
  /**
  * Enable a specific clipboard. If not set, depending on the display type the SPICE one will be added. Currently only `vnc` is available. Migration with VNC clipboard is not supported by Proxmox.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#clipboard VirtualEnvironmentClonedVm#clipboard}
  */
  readonly clipboard?: string;
  /**
  * The VGA memory in megabytes (4-512 MB). Has no effect with serial display. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#memory VirtualEnvironmentClonedVm#memory}
  */
  readonly memory?: number;
  /**
  * The VGA type (defaults to `std`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#type VirtualEnvironmentClonedVm#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentClonedVmVgaToTerraform(struct?: VirtualEnvironmentClonedVmVga | cdktf.IResolvable): any {
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


export function virtualEnvironmentClonedVmVgaToHclTerraform(struct?: VirtualEnvironmentClonedVmVga | cdktf.IResolvable): any {
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

export class VirtualEnvironmentClonedVmVgaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClonedVmVga | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualEnvironmentClonedVmVga | cdktf.IResolvable | undefined) {
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

  // clipboard - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm proxmox_virtual_environment_cloned_vm}
*/
export class VirtualEnvironmentClonedVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_cloned_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentClonedVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentClonedVm to import
  * @param importFromId The id of the existing VirtualEnvironmentClonedVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentClonedVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_cloned_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cloned_vm proxmox_virtual_environment_cloned_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentClonedVmConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentClonedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_cloned_vm',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.90.0',
        providerVersionConstraint: '0.90.0'
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
    this._delete.internalValue = config.delete;
    this._deleteUnreferencedDisksOnDestroy = config.deleteUnreferencedDisksOnDestroy;
    this._description = config.description;
    this._disk.internalValue = config.disk;
    this._id = config.id;
    this._memory.internalValue = config.memory;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._nodeName = config.nodeName;
    this._purgeOnDestroy = config.purgeOnDestroy;
    this._rng.internalValue = config.rng;
    this._stopOnDestroy = config.stopOnDestroy;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._vga.internalValue = config.vga;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdrom - computed: false, optional: true, required: false
  private _cdrom = new VirtualEnvironmentClonedVmCdromMap(this, "cdrom");
  public get cdrom() {
    return this._cdrom;
  }
  public putCdrom(value: { [key: string]: VirtualEnvironmentClonedVmCdrom } | cdktf.IResolvable) {
    this._cdrom.internalValue = value;
  }
  public resetCdrom() {
    this._cdrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdromInput() {
    return this._cdrom.internalValue;
  }

  // clone - computed: false, optional: false, required: true
  private _clone = new VirtualEnvironmentClonedVmCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: VirtualEnvironmentClonedVmClone) {
    this._clone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new VirtualEnvironmentClonedVmCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: VirtualEnvironmentClonedVmCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new VirtualEnvironmentClonedVmDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: VirtualEnvironmentClonedVmDelete) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
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

  // disk - computed: false, optional: true, required: false
  private _disk = new VirtualEnvironmentClonedVmDiskMap(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: { [key: string]: VirtualEnvironmentClonedVmDisk } | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
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

  // memory - computed: false, optional: true, required: false
  private _memory = new VirtualEnvironmentClonedVmMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: VirtualEnvironmentClonedVmMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
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

  // network - computed: false, optional: true, required: false
  private _network = new VirtualEnvironmentClonedVmNetworkMap(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: { [key: string]: VirtualEnvironmentClonedVmNetwork } | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
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

  // rng - computed: false, optional: true, required: false
  private _rng = new VirtualEnvironmentClonedVmRngOutputReference(this, "rng");
  public get rng() {
    return this._rng;
  }
  public putRng(value: VirtualEnvironmentClonedVmRng) {
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualEnvironmentClonedVmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualEnvironmentClonedVmTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vga - computed: false, optional: true, required: false
  private _vga = new VirtualEnvironmentClonedVmVgaOutputReference(this, "vga");
  public get vga() {
    return this._vga;
  }
  public putVga(value: VirtualEnvironmentClonedVmVga) {
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
      cdrom: cdktf.hashMapper(virtualEnvironmentClonedVmCdromToTerraform)(this._cdrom.internalValue),
      clone: virtualEnvironmentClonedVmCloneToTerraform(this._clone.internalValue),
      cpu: virtualEnvironmentClonedVmCpuToTerraform(this._cpu.internalValue),
      delete: virtualEnvironmentClonedVmDeleteToTerraform(this._delete.internalValue),
      delete_unreferenced_disks_on_destroy: cdktf.booleanToTerraform(this._deleteUnreferencedDisksOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      disk: cdktf.hashMapper(virtualEnvironmentClonedVmDiskToTerraform)(this._disk.internalValue),
      id: cdktf.numberToTerraform(this._id),
      memory: virtualEnvironmentClonedVmMemoryToTerraform(this._memory.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.hashMapper(virtualEnvironmentClonedVmNetworkToTerraform)(this._network.internalValue),
      node_name: cdktf.stringToTerraform(this._nodeName),
      purge_on_destroy: cdktf.booleanToTerraform(this._purgeOnDestroy),
      rng: virtualEnvironmentClonedVmRngToTerraform(this._rng.internalValue),
      stop_on_destroy: cdktf.booleanToTerraform(this._stopOnDestroy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeouts: virtualEnvironmentClonedVmTimeoutsToTerraform(this._timeouts.internalValue),
      vga: virtualEnvironmentClonedVmVgaToTerraform(this._vga.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdrom: {
        value: cdktf.hashMapperHcl(virtualEnvironmentClonedVmCdromToHclTerraform)(this._cdrom.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "VirtualEnvironmentClonedVmCdromMap",
      },
      clone: {
        value: virtualEnvironmentClonedVmCloneToHclTerraform(this._clone.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClonedVmClone",
      },
      cpu: {
        value: virtualEnvironmentClonedVmCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClonedVmCpu",
      },
      delete: {
        value: virtualEnvironmentClonedVmDeleteToHclTerraform(this._delete.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClonedVmDelete",
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
      disk: {
        value: cdktf.hashMapperHcl(virtualEnvironmentClonedVmDiskToHclTerraform)(this._disk.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "VirtualEnvironmentClonedVmDiskMap",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: virtualEnvironmentClonedVmMemoryToHclTerraform(this._memory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClonedVmMemory",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.hashMapperHcl(virtualEnvironmentClonedVmNetworkToHclTerraform)(this._network.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "VirtualEnvironmentClonedVmNetworkMap",
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
        value: virtualEnvironmentClonedVmRngToHclTerraform(this._rng.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClonedVmRng",
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
      timeouts: {
        value: virtualEnvironmentClonedVmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClonedVmTimeouts",
      },
      vga: {
        value: virtualEnvironmentClonedVmVgaToHclTerraform(this._vga.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClonedVmVga",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
