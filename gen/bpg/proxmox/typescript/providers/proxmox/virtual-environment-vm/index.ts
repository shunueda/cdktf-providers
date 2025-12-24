// https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable ACPI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#acpi VirtualEnvironmentVm#acpi}
  */
  readonly acpi?: boolean | cdktf.IResolvable;
  /**
  * The BIOS implementation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#bios VirtualEnvironmentVm#bios}
  */
  readonly bios?: string;
  /**
  * The guest will attempt to boot from devices in the order they appear here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#boot_order VirtualEnvironmentVm#boot_order}
  */
  readonly bootOrder?: string[];
  /**
  * Whether to delete unreferenced disks on destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#delete_unreferenced_disks_on_destroy VirtualEnvironmentVm#delete_unreferenced_disks_on_destroy}
  */
  readonly deleteUnreferencedDisksOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#description VirtualEnvironmentVm#description}
  */
  readonly description?: string;
  /**
  * A hook script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#hook_script_file_id VirtualEnvironmentVm#hook_script_file_id}
  */
  readonly hookScriptFileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#id VirtualEnvironmentVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The keyboard layout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#keyboard_layout VirtualEnvironmentVm#keyboard_layout}
  */
  readonly keyboardLayout?: string;
  /**
  * The args implementation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#kvm_arguments VirtualEnvironmentVm#kvm_arguments}
  */
  readonly kvmArguments?: string;
  /**
  * The MAC addresses for the network interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#mac_addresses VirtualEnvironmentVm#mac_addresses}
  */
  readonly macAddresses?: string[];
  /**
  * The VM machine type, either default `pc` or `q35`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#machine VirtualEnvironmentVm#machine}
  */
  readonly machine?: string;
  /**
  * Whether to migrate the VM on node change instead of re-creating it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#migrate VirtualEnvironmentVm#migrate}
  */
  readonly migrate?: boolean | cdktf.IResolvable;
  /**
  * The name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#name VirtualEnvironmentVm#name}
  */
  readonly name?: string;
  /**
  * The node name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#node_name VirtualEnvironmentVm#node_name}
  */
  readonly nodeName: string;
  /**
  * Start VM on Node boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#on_boot VirtualEnvironmentVm#on_boot}
  */
  readonly onBoot?: boolean | cdktf.IResolvable;
  /**
  * The ID of the pool to assign the virtual machine to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#pool_id VirtualEnvironmentVm#pool_id}
  */
  readonly poolId?: string;
  /**
  * Sets the protection flag of the VM. This will disable the remove VM and remove disk operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#protection VirtualEnvironmentVm#protection}
  */
  readonly protection?: boolean | cdktf.IResolvable;
  /**
  * Whether to purge the VM from backup configurations on destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#purge_on_destroy VirtualEnvironmentVm#purge_on_destroy}
  */
  readonly purgeOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Whether to reboot VM after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#reboot VirtualEnvironmentVm#reboot}
  */
  readonly reboot?: boolean | cdktf.IResolvable;
  /**
  * Whether to reboot VM after update if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#reboot_after_update VirtualEnvironmentVm#reboot_after_update}
  */
  readonly rebootAfterUpdate?: boolean | cdktf.IResolvable;
  /**
  * The SCSI hardware type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#scsi_hardware VirtualEnvironmentVm#scsi_hardware}
  */
  readonly scsiHardware?: string;
  /**
  * Whether to start the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#started VirtualEnvironmentVm#started}
  */
  readonly started?: boolean | cdktf.IResolvable;
  /**
  * Whether to stop rather than shutdown on VM destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#stop_on_destroy VirtualEnvironmentVm#stop_on_destroy}
  */
  readonly stopOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the USB tablet device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#tablet_device VirtualEnvironmentVm#tablet_device}
  */
  readonly tabletDevice?: boolean | cdktf.IResolvable;
  /**
  * Tags of the virtual machine. This is only meta information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#tags VirtualEnvironmentVm#tags}
  */
  readonly tags?: string[];
  /**
  * Whether to create a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#template VirtualEnvironmentVm#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Clone VM timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_clone VirtualEnvironmentVm#timeout_clone}
  */
  readonly timeoutClone?: number;
  /**
  * Create VM timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_create VirtualEnvironmentVm#timeout_create}
  */
  readonly timeoutCreate?: number;
  /**
  * Migrate VM timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_migrate VirtualEnvironmentVm#timeout_migrate}
  */
  readonly timeoutMigrate?: number;
  /**
  * Disk move timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_move_disk VirtualEnvironmentVm#timeout_move_disk}
  */
  readonly timeoutMoveDisk?: number;
  /**
  * Reboot timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_reboot VirtualEnvironmentVm#timeout_reboot}
  */
  readonly timeoutReboot?: number;
  /**
  * Shutdown timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_shutdown_vm VirtualEnvironmentVm#timeout_shutdown_vm}
  */
  readonly timeoutShutdownVm?: number;
  /**
  * Start VM timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_start_vm VirtualEnvironmentVm#timeout_start_vm}
  */
  readonly timeoutStartVm?: number;
  /**
  * Stop VM timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout_stop_vm VirtualEnvironmentVm#timeout_stop_vm}
  */
  readonly timeoutStopVm?: number;
  /**
  * The VM identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#vm_id VirtualEnvironmentVm#vm_id}
  */
  readonly vmId?: number;
  /**
  * agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#agent VirtualEnvironmentVm#agent}
  */
  readonly agent?: VirtualEnvironmentVmAgent;
  /**
  * amd_sev block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#amd_sev VirtualEnvironmentVm#amd_sev}
  */
  readonly amdSev?: VirtualEnvironmentVmAmdSev;
  /**
  * audio_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#audio_device VirtualEnvironmentVm#audio_device}
  */
  readonly audioDevice?: VirtualEnvironmentVmAudioDevice;
  /**
  * cdrom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#cdrom VirtualEnvironmentVm#cdrom}
  */
  readonly cdrom?: VirtualEnvironmentVmCdrom;
  /**
  * clone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#clone VirtualEnvironmentVm#clone}
  */
  readonly clone?: VirtualEnvironmentVmClone;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#cpu VirtualEnvironmentVm#cpu}
  */
  readonly cpu?: VirtualEnvironmentVmCpu;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#disk VirtualEnvironmentVm#disk}
  */
  readonly disk?: VirtualEnvironmentVmDisk[] | cdktf.IResolvable;
  /**
  * efi_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#efi_disk VirtualEnvironmentVm#efi_disk}
  */
  readonly efiDisk?: VirtualEnvironmentVmEfiDisk;
  /**
  * hostpci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#hostpci VirtualEnvironmentVm#hostpci}
  */
  readonly hostpci?: VirtualEnvironmentVmHostpci[] | cdktf.IResolvable;
  /**
  * initialization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#initialization VirtualEnvironmentVm#initialization}
  */
  readonly initialization?: VirtualEnvironmentVmInitialization;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#memory VirtualEnvironmentVm#memory}
  */
  readonly memory?: VirtualEnvironmentVmMemory;
  /**
  * network_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#network_device VirtualEnvironmentVm#network_device}
  */
  readonly networkDevice?: VirtualEnvironmentVmNetworkDevice[] | cdktf.IResolvable;
  /**
  * numa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#numa VirtualEnvironmentVm#numa}
  */
  readonly numa?: VirtualEnvironmentVmNuma[] | cdktf.IResolvable;
  /**
  * operating_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#operating_system VirtualEnvironmentVm#operating_system}
  */
  readonly operatingSystem?: VirtualEnvironmentVmOperatingSystem;
  /**
  * rng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#rng VirtualEnvironmentVm#rng}
  */
  readonly rng?: VirtualEnvironmentVmRng[] | cdktf.IResolvable;
  /**
  * serial_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#serial_device VirtualEnvironmentVm#serial_device}
  */
  readonly serialDevice?: VirtualEnvironmentVmSerialDevice[] | cdktf.IResolvable;
  /**
  * smbios block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#smbios VirtualEnvironmentVm#smbios}
  */
  readonly smbios?: VirtualEnvironmentVmSmbios;
  /**
  * startup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#startup VirtualEnvironmentVm#startup}
  */
  readonly startup?: VirtualEnvironmentVmStartup;
  /**
  * tpm_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#tpm_state VirtualEnvironmentVm#tpm_state}
  */
  readonly tpmState?: VirtualEnvironmentVmTpmState;
  /**
  * usb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#usb VirtualEnvironmentVm#usb}
  */
  readonly usb?: VirtualEnvironmentVmUsb[] | cdktf.IResolvable;
  /**
  * vga block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#vga VirtualEnvironmentVm#vga}
  */
  readonly vga?: VirtualEnvironmentVmVga;
  /**
  * virtiofs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#virtiofs VirtualEnvironmentVm#virtiofs}
  */
  readonly virtiofs?: VirtualEnvironmentVmVirtiofs[] | cdktf.IResolvable;
  /**
  * watchdog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#watchdog VirtualEnvironmentVm#watchdog}
  */
  readonly watchdog?: VirtualEnvironmentVmWatchdog;
}
export interface VirtualEnvironmentVmAgentWaitForIp {
  /**
  * Wait for at least one IPv4 address (non-loopback, non-link-local)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#ipv4 VirtualEnvironmentVm#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * Wait for at least one IPv6 address (non-loopback, non-link-local)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#ipv6 VirtualEnvironmentVm#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentVmAgentWaitForIpToTerraform(struct?: VirtualEnvironmentVmAgentWaitForIpOutputReference | VirtualEnvironmentVmAgentWaitForIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
  }
}


export function virtualEnvironmentVmAgentWaitForIpToHclTerraform(struct?: VirtualEnvironmentVmAgentWaitForIpOutputReference | VirtualEnvironmentVmAgentWaitForIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmAgentWaitForIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmAgentWaitForIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmAgentWaitForIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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
}
export interface VirtualEnvironmentVmAgent {
  /**
  * Whether to enable the QEMU agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#enabled VirtualEnvironmentVm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of time to wait for data from the QEMU agent to become available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#timeout VirtualEnvironmentVm#timeout}
  */
  readonly timeout?: string;
  /**
  * Whether to enable the FSTRIM feature in the QEMU agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#trim VirtualEnvironmentVm#trim}
  */
  readonly trim?: boolean | cdktf.IResolvable;
  /**
  * The QEMU agent interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#type VirtualEnvironmentVm#type}
  */
  readonly type?: string;
  /**
  * wait_for_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#wait_for_ip VirtualEnvironmentVm#wait_for_ip}
  */
  readonly waitForIp?: VirtualEnvironmentVmAgentWaitForIp;
}

export function virtualEnvironmentVmAgentToTerraform(struct?: VirtualEnvironmentVmAgentOutputReference | VirtualEnvironmentVmAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    trim: cdktf.booleanToTerraform(struct!.trim),
    type: cdktf.stringToTerraform(struct!.type),
    wait_for_ip: virtualEnvironmentVmAgentWaitForIpToTerraform(struct!.waitForIp),
  }
}


export function virtualEnvironmentVmAgentToHclTerraform(struct?: VirtualEnvironmentVmAgentOutputReference | VirtualEnvironmentVmAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim: {
      value: cdktf.booleanToHclTerraform(struct!.trim),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for_ip: {
      value: virtualEnvironmentVmAgentWaitForIpToHclTerraform(struct!.waitForIp),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentVmAgentWaitForIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._trim !== undefined) {
      hasAnyValues = true;
      internalValueResult.trim = this._trim;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._waitForIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForIp = this._waitForIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timeout = undefined;
      this._trim = undefined;
      this._type = undefined;
      this._waitForIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timeout = value.timeout;
      this._trim = value.trim;
      this._type = value.type;
      this._waitForIp.internalValue = value.waitForIp;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // trim - computed: false, optional: true, required: false
  private _trim?: boolean | cdktf.IResolvable; 
  public get trim() {
    return this.getBooleanAttribute('trim');
  }
  public set trim(value: boolean | cdktf.IResolvable) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
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

  // wait_for_ip - computed: false, optional: true, required: false
  private _waitForIp = new VirtualEnvironmentVmAgentWaitForIpOutputReference(this, "wait_for_ip");
  public get waitForIp() {
    return this._waitForIp;
  }
  public putWaitForIp(value: VirtualEnvironmentVmAgentWaitForIp) {
    this._waitForIp.internalValue = value;
  }
  public resetWaitForIp() {
    this._waitForIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForIpInput() {
    return this._waitForIp.internalValue;
  }
}
export interface VirtualEnvironmentVmAmdSev {
  /**
  * Sets policy bit to allow Simultaneous Multi Threading (SMT) (Ignored unless for SEV-SNP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#allow_smt VirtualEnvironmentVm#allow_smt}
  */
  readonly allowSmt?: boolean | cdktf.IResolvable;
  /**
  * Add kernel hashes to guest firmware for measured linux kernel launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#kernel_hashes VirtualEnvironmentVm#kernel_hashes}
  */
  readonly kernelHashes?: boolean | cdktf.IResolvable;
  /**
  * Sets policy bit to disallow debugging of guest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#no_debug VirtualEnvironmentVm#no_debug}
  */
  readonly noDebug?: boolean | cdktf.IResolvable;
  /**
  * Sets policy bit to disallow key sharing with other guests (Ignored for SEV-SNP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#no_key_sharing VirtualEnvironmentVm#no_key_sharing}
  */
  readonly noKeySharing?: boolean | cdktf.IResolvable;
  /**
  * Enable standard SEV with type=std or enable experimental SEV-ES with the es optionor enable experimental SEV-SNP with the snp option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#type VirtualEnvironmentVm#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentVmAmdSevToTerraform(struct?: VirtualEnvironmentVmAmdSevOutputReference | VirtualEnvironmentVmAmdSev): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_smt: cdktf.booleanToTerraform(struct!.allowSmt),
    kernel_hashes: cdktf.booleanToTerraform(struct!.kernelHashes),
    no_debug: cdktf.booleanToTerraform(struct!.noDebug),
    no_key_sharing: cdktf.booleanToTerraform(struct!.noKeySharing),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualEnvironmentVmAmdSevToHclTerraform(struct?: VirtualEnvironmentVmAmdSevOutputReference | VirtualEnvironmentVmAmdSev): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_smt: {
      value: cdktf.booleanToHclTerraform(struct!.allowSmt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kernel_hashes: {
      value: cdktf.booleanToHclTerraform(struct!.kernelHashes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_debug: {
      value: cdktf.booleanToHclTerraform(struct!.noDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_key_sharing: {
      value: cdktf.booleanToHclTerraform(struct!.noKeySharing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class VirtualEnvironmentVmAmdSevOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmAmdSev | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSmt = this._allowSmt;
    }
    if (this._kernelHashes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelHashes = this._kernelHashes;
    }
    if (this._noDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDebug = this._noDebug;
    }
    if (this._noKeySharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.noKeySharing = this._noKeySharing;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmAmdSev | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSmt = undefined;
      this._kernelHashes = undefined;
      this._noDebug = undefined;
      this._noKeySharing = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSmt = value.allowSmt;
      this._kernelHashes = value.kernelHashes;
      this._noDebug = value.noDebug;
      this._noKeySharing = value.noKeySharing;
      this._type = value.type;
    }
  }

  // allow_smt - computed: false, optional: true, required: false
  private _allowSmt?: boolean | cdktf.IResolvable; 
  public get allowSmt() {
    return this.getBooleanAttribute('allow_smt');
  }
  public set allowSmt(value: boolean | cdktf.IResolvable) {
    this._allowSmt = value;
  }
  public resetAllowSmt() {
    this._allowSmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSmtInput() {
    return this._allowSmt;
  }

  // kernel_hashes - computed: false, optional: true, required: false
  private _kernelHashes?: boolean | cdktf.IResolvable; 
  public get kernelHashes() {
    return this.getBooleanAttribute('kernel_hashes');
  }
  public set kernelHashes(value: boolean | cdktf.IResolvable) {
    this._kernelHashes = value;
  }
  public resetKernelHashes() {
    this._kernelHashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelHashesInput() {
    return this._kernelHashes;
  }

  // no_debug - computed: false, optional: true, required: false
  private _noDebug?: boolean | cdktf.IResolvable; 
  public get noDebug() {
    return this.getBooleanAttribute('no_debug');
  }
  public set noDebug(value: boolean | cdktf.IResolvable) {
    this._noDebug = value;
  }
  public resetNoDebug() {
    this._noDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDebugInput() {
    return this._noDebug;
  }

  // no_key_sharing - computed: false, optional: true, required: false
  private _noKeySharing?: boolean | cdktf.IResolvable; 
  public get noKeySharing() {
    return this.getBooleanAttribute('no_key_sharing');
  }
  public set noKeySharing(value: boolean | cdktf.IResolvable) {
    this._noKeySharing = value;
  }
  public resetNoKeySharing() {
    this._noKeySharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noKeySharingInput() {
    return this._noKeySharing;
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
export interface VirtualEnvironmentVmAudioDevice {
  /**
  * The device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#device VirtualEnvironmentVm#device}
  */
  readonly device?: string;
  /**
  * The driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#driver VirtualEnvironmentVm#driver}
  */
  readonly driver?: string;
  /**
  * Whether to enable the audio device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#enabled VirtualEnvironmentVm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentVmAudioDeviceToTerraform(struct?: VirtualEnvironmentVmAudioDeviceOutputReference | VirtualEnvironmentVmAudioDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    driver: cdktf.stringToTerraform(struct!.driver),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function virtualEnvironmentVmAudioDeviceToHclTerraform(struct?: VirtualEnvironmentVmAudioDeviceOutputReference | VirtualEnvironmentVmAudioDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmAudioDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmAudioDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmAudioDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._driver = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._driver = value.driver;
      this._enabled = value.enabled;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface VirtualEnvironmentVmCdrom {
  /**
  * Whether to enable the CDROM drive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#enabled VirtualEnvironmentVm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The file id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#file_id VirtualEnvironmentVm#file_id}
  */
  readonly fileId?: string;
  /**
  * The CDROM interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#interface VirtualEnvironmentVm#interface}
  */
  readonly interface?: string;
}

export function virtualEnvironmentVmCdromToTerraform(struct?: VirtualEnvironmentVmCdromOutputReference | VirtualEnvironmentVmCdrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    file_id: cdktf.stringToTerraform(struct!.fileId),
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function virtualEnvironmentVmCdromToHclTerraform(struct?: VirtualEnvironmentVmCdromOutputReference | VirtualEnvironmentVmCdrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmCdromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmCdrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmCdrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fileId = undefined;
      this._interface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fileId = value.fileId;
      this._interface = value.interface;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }
}
export interface VirtualEnvironmentVmClone {
  /**
  * The ID of the target datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#datastore_id VirtualEnvironmentVm#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * The Clone Type, create a Full Clone (true) or a linked Clone (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#full VirtualEnvironmentVm#full}
  */
  readonly full?: boolean | cdktf.IResolvable;
  /**
  * The name of the source node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#node_name VirtualEnvironmentVm#node_name}
  */
  readonly nodeName?: string;
  /**
  * The number of Retries to create a clone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#retries VirtualEnvironmentVm#retries}
  */
  readonly retries?: number;
  /**
  * The ID of the source VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#vm_id VirtualEnvironmentVm#vm_id}
  */
  readonly vmId: number;
}

export function virtualEnvironmentVmCloneToTerraform(struct?: VirtualEnvironmentVmCloneOutputReference | VirtualEnvironmentVmClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    full: cdktf.booleanToTerraform(struct!.full),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    retries: cdktf.numberToTerraform(struct!.retries),
    vm_id: cdktf.numberToTerraform(struct!.vmId),
  }
}


export function virtualEnvironmentVmCloneToHclTerraform(struct?: VirtualEnvironmentVmCloneOutputReference | VirtualEnvironmentVmClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full: {
      value: cdktf.booleanToHclTerraform(struct!.full),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
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
    vm_id: {
      value: cdktf.numberToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmClone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._full !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmClone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreId = undefined;
      this._full = undefined;
      this._nodeName = undefined;
      this._retries = undefined;
      this._vmId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreId = value.datastoreId;
      this._full = value.full;
      this._nodeName = value.nodeName;
      this._retries = value.retries;
      this._vmId = value.vmId;
    }
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

  // full - computed: false, optional: true, required: false
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

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // retries - computed: false, optional: true, required: false
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

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }
}
export interface VirtualEnvironmentVmCpu {
  /**
  * The CPU affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#affinity VirtualEnvironmentVm#affinity}
  */
  readonly affinity?: string;
  /**
  * The CPU architecture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#architecture VirtualEnvironmentVm#architecture}
  */
  readonly architecture?: string;
  /**
  * The number of CPU cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#cores VirtualEnvironmentVm#cores}
  */
  readonly cores?: number;
  /**
  * The CPU flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#flags VirtualEnvironmentVm#flags}
  */
  readonly flags?: string[];
  /**
  * The number of hotplugged vCPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#hotplugged VirtualEnvironmentVm#hotplugged}
  */
  readonly hotplugged?: number;
  /**
  * Limit of CPU usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#limit VirtualEnvironmentVm#limit}
  */
  readonly limit?: number;
  /**
  * Enable/disable NUMA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#numa VirtualEnvironmentVm#numa}
  */
  readonly numa?: boolean | cdktf.IResolvable;
  /**
  * The number of CPU sockets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#sockets VirtualEnvironmentVm#sockets}
  */
  readonly sockets?: number;
  /**
  * The emulated CPU type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#type VirtualEnvironmentVm#type}
  */
  readonly type?: string;
  /**
  * The CPU units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#units VirtualEnvironmentVm#units}
  */
  readonly units?: number;
}

export function virtualEnvironmentVmCpuToTerraform(struct?: VirtualEnvironmentVmCpuOutputReference | VirtualEnvironmentVmCpu): any {
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


export function virtualEnvironmentVmCpuToHclTerraform(struct?: VirtualEnvironmentVmCpuOutputReference | VirtualEnvironmentVmCpu): any {
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
      type: "list",
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

export class VirtualEnvironmentVmCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmCpu | undefined {
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

  public set internalValue(value: VirtualEnvironmentVmCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return this.getListAttribute('flags');
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
export interface VirtualEnvironmentVmDiskSpeed {
  /**
  * The maximum read I/O in operations per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#iops_read VirtualEnvironmentVm#iops_read}
  */
  readonly iopsRead?: number;
  /**
  * The maximum unthrottled read I/O pool in operations per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#iops_read_burstable VirtualEnvironmentVm#iops_read_burstable}
  */
  readonly iopsReadBurstable?: number;
  /**
  * The maximum write I/O in operations per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#iops_write VirtualEnvironmentVm#iops_write}
  */
  readonly iopsWrite?: number;
  /**
  * The maximum unthrottled write I/O pool in operations per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#iops_write_burstable VirtualEnvironmentVm#iops_write_burstable}
  */
  readonly iopsWriteBurstable?: number;
  /**
  * The maximum read speed in megabytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#read VirtualEnvironmentVm#read}
  */
  readonly read?: number;
  /**
  * The maximum burstable read speed in megabytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#read_burstable VirtualEnvironmentVm#read_burstable}
  */
  readonly readBurstable?: number;
  /**
  * The maximum write speed in megabytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#write VirtualEnvironmentVm#write}
  */
  readonly write?: number;
  /**
  * The maximum burstable write speed in megabytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#write_burstable VirtualEnvironmentVm#write_burstable}
  */
  readonly writeBurstable?: number;
}

export function virtualEnvironmentVmDiskSpeedToTerraform(struct?: VirtualEnvironmentVmDiskSpeedOutputReference | VirtualEnvironmentVmDiskSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops_read: cdktf.numberToTerraform(struct!.iopsRead),
    iops_read_burstable: cdktf.numberToTerraform(struct!.iopsReadBurstable),
    iops_write: cdktf.numberToTerraform(struct!.iopsWrite),
    iops_write_burstable: cdktf.numberToTerraform(struct!.iopsWriteBurstable),
    read: cdktf.numberToTerraform(struct!.read),
    read_burstable: cdktf.numberToTerraform(struct!.readBurstable),
    write: cdktf.numberToTerraform(struct!.write),
    write_burstable: cdktf.numberToTerraform(struct!.writeBurstable),
  }
}


export function virtualEnvironmentVmDiskSpeedToHclTerraform(struct?: VirtualEnvironmentVmDiskSpeedOutputReference | VirtualEnvironmentVmDiskSpeed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops_read: {
      value: cdktf.numberToHclTerraform(struct!.iopsRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_read_burstable: {
      value: cdktf.numberToHclTerraform(struct!.iopsReadBurstable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_write: {
      value: cdktf.numberToHclTerraform(struct!.iopsWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_write_burstable: {
      value: cdktf.numberToHclTerraform(struct!.iopsWriteBurstable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read: {
      value: cdktf.numberToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_burstable: {
      value: cdktf.numberToHclTerraform(struct!.readBurstable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write: {
      value: cdktf.numberToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_burstable: {
      value: cdktf.numberToHclTerraform(struct!.writeBurstable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmDiskSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmDiskSpeed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iopsRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsRead = this._iopsRead;
    }
    if (this._iopsReadBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsReadBurstable = this._iopsReadBurstable;
    }
    if (this._iopsWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsWrite = this._iopsWrite;
    }
    if (this._iopsWriteBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsWriteBurstable = this._iopsWriteBurstable;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._readBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBurstable = this._readBurstable;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    if (this._writeBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBurstable = this._writeBurstable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmDiskSpeed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iopsRead = undefined;
      this._iopsReadBurstable = undefined;
      this._iopsWrite = undefined;
      this._iopsWriteBurstable = undefined;
      this._read = undefined;
      this._readBurstable = undefined;
      this._write = undefined;
      this._writeBurstable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iopsRead = value.iopsRead;
      this._iopsReadBurstable = value.iopsReadBurstable;
      this._iopsWrite = value.iopsWrite;
      this._iopsWriteBurstable = value.iopsWriteBurstable;
      this._read = value.read;
      this._readBurstable = value.readBurstable;
      this._write = value.write;
      this._writeBurstable = value.writeBurstable;
    }
  }

  // iops_read - computed: false, optional: true, required: false
  private _iopsRead?: number; 
  public get iopsRead() {
    return this.getNumberAttribute('iops_read');
  }
  public set iopsRead(value: number) {
    this._iopsRead = value;
  }
  public resetIopsRead() {
    this._iopsRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsReadInput() {
    return this._iopsRead;
  }

  // iops_read_burstable - computed: false, optional: true, required: false
  private _iopsReadBurstable?: number; 
  public get iopsReadBurstable() {
    return this.getNumberAttribute('iops_read_burstable');
  }
  public set iopsReadBurstable(value: number) {
    this._iopsReadBurstable = value;
  }
  public resetIopsReadBurstable() {
    this._iopsReadBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsReadBurstableInput() {
    return this._iopsReadBurstable;
  }

  // iops_write - computed: false, optional: true, required: false
  private _iopsWrite?: number; 
  public get iopsWrite() {
    return this.getNumberAttribute('iops_write');
  }
  public set iopsWrite(value: number) {
    this._iopsWrite = value;
  }
  public resetIopsWrite() {
    this._iopsWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsWriteInput() {
    return this._iopsWrite;
  }

  // iops_write_burstable - computed: false, optional: true, required: false
  private _iopsWriteBurstable?: number; 
  public get iopsWriteBurstable() {
    return this.getNumberAttribute('iops_write_burstable');
  }
  public set iopsWriteBurstable(value: number) {
    this._iopsWriteBurstable = value;
  }
  public resetIopsWriteBurstable() {
    this._iopsWriteBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsWriteBurstableInput() {
    return this._iopsWriteBurstable;
  }

  // read - computed: false, optional: true, required: false
  private _read?: number; 
  public get read() {
    return this.getNumberAttribute('read');
  }
  public set read(value: number) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // read_burstable - computed: false, optional: true, required: false
  private _readBurstable?: number; 
  public get readBurstable() {
    return this.getNumberAttribute('read_burstable');
  }
  public set readBurstable(value: number) {
    this._readBurstable = value;
  }
  public resetReadBurstable() {
    this._readBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBurstableInput() {
    return this._readBurstable;
  }

  // write - computed: false, optional: true, required: false
  private _write?: number; 
  public get write() {
    return this.getNumberAttribute('write');
  }
  public set write(value: number) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }

  // write_burstable - computed: false, optional: true, required: false
  private _writeBurstable?: number; 
  public get writeBurstable() {
    return this.getNumberAttribute('write_burstable');
  }
  public set writeBurstable(value: number) {
    this._writeBurstable = value;
  }
  public resetWriteBurstable() {
    this._writeBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBurstableInput() {
    return this._writeBurstable;
  }
}
export interface VirtualEnvironmentVmDisk {
  /**
  * The disk AIO mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#aio VirtualEnvironmentVm#aio}
  */
  readonly aio?: string;
  /**
  * Whether the drive should be included when making backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#backup VirtualEnvironmentVm#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * The drive’s cache mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#cache VirtualEnvironmentVm#cache}
  */
  readonly cache?: string;
  /**
  * The datastore id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#datastore_id VirtualEnvironmentVm#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * Whether to pass discard/trim requests to the underlying storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#discard VirtualEnvironmentVm#discard}
  */
  readonly discard?: string;
  /**
  * The file format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#file_format VirtualEnvironmentVm#file_format}
  */
  readonly fileFormat?: string;
  /**
  * The file id for a disk image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#file_id VirtualEnvironmentVm#file_id}
  */
  readonly fileId?: string;
  /**
  * The file id of a disk image to import from storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#import_from VirtualEnvironmentVm#import_from}
  */
  readonly importFromAttribute?: string;
  /**
  * The datastore name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#interface VirtualEnvironmentVm#interface}
  */
  readonly interface: string;
  /**
  * Whether to use iothreads for this disk drive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#iothread VirtualEnvironmentVm#iothread}
  */
  readonly iothread?: boolean | cdktf.IResolvable;
  /**
  * The in-datastore path to disk image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#path_in_datastore VirtualEnvironmentVm#path_in_datastore}
  */
  readonly pathInDatastore?: string;
  /**
  * Whether the drive should be considered for replication jobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#replicate VirtualEnvironmentVm#replicate}
  */
  readonly replicate?: boolean | cdktf.IResolvable;
  /**
  * The drive’s reported serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#serial VirtualEnvironmentVm#serial}
  */
  readonly serial?: string;
  /**
  * The disk size in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#size VirtualEnvironmentVm#size}
  */
  readonly size?: number;
  /**
  * Whether to use ssd for this disk drive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#ssd VirtualEnvironmentVm#ssd}
  */
  readonly ssd?: boolean | cdktf.IResolvable;
  /**
  * speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#speed VirtualEnvironmentVm#speed}
  */
  readonly speed?: VirtualEnvironmentVmDiskSpeed;
}

export function virtualEnvironmentVmDiskToTerraform(struct?: VirtualEnvironmentVmDisk | cdktf.IResolvable): any {
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
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    file_id: cdktf.stringToTerraform(struct!.fileId),
    import_from: cdktf.stringToTerraform(struct!.importFromAttribute),
    interface: cdktf.stringToTerraform(struct!.interface),
    iothread: cdktf.booleanToTerraform(struct!.iothread),
    path_in_datastore: cdktf.stringToTerraform(struct!.pathInDatastore),
    replicate: cdktf.booleanToTerraform(struct!.replicate),
    serial: cdktf.stringToTerraform(struct!.serial),
    size: cdktf.numberToTerraform(struct!.size),
    ssd: cdktf.booleanToTerraform(struct!.ssd),
    speed: virtualEnvironmentVmDiskSpeedToTerraform(struct!.speed),
  }
}


export function virtualEnvironmentVmDiskToHclTerraform(struct?: VirtualEnvironmentVmDisk | cdktf.IResolvable): any {
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
    file_format: {
      value: cdktf.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
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
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
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
    path_in_datastore: {
      value: cdktf.stringToHclTerraform(struct!.pathInDatastore),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
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
    speed: {
      value: virtualEnvironmentVmDiskSpeedToHclTerraform(struct!.speed),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentVmDiskSpeedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmDisk | cdktf.IResolvable | undefined {
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
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._importFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.importFromAttribute = this._importFrom;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._iothread !== undefined) {
      hasAnyValues = true;
      internalValueResult.iothread = this._iothread;
    }
    if (this._pathInDatastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathInDatastore = this._pathInDatastore;
    }
    if (this._replicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicate = this._replicate;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._ssd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssd = this._ssd;
    }
    if (this._speed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aio = undefined;
      this._backup = undefined;
      this._cache = undefined;
      this._datastoreId = undefined;
      this._discard = undefined;
      this._fileFormat = undefined;
      this._fileId = undefined;
      this._importFrom = undefined;
      this._interface = undefined;
      this._iothread = undefined;
      this._pathInDatastore = undefined;
      this._replicate = undefined;
      this._serial = undefined;
      this._size = undefined;
      this._ssd = undefined;
      this._speed.internalValue = undefined;
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
      this._fileFormat = value.fileFormat;
      this._fileId = value.fileId;
      this._importFrom = value.importFromAttribute;
      this._interface = value.interface;
      this._iothread = value.iothread;
      this._pathInDatastore = value.pathInDatastore;
      this._replicate = value.replicate;
      this._serial = value.serial;
      this._size = value.size;
      this._ssd = value.ssd;
      this._speed.internalValue = value.speed;
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

  // file_format - computed: true, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // path_in_datastore - computed: true, optional: true, required: false
  private _pathInDatastore?: string; 
  public get pathInDatastore() {
    return this.getStringAttribute('path_in_datastore');
  }
  public set pathInDatastore(value: string) {
    this._pathInDatastore = value;
  }
  public resetPathInDatastore() {
    this._pathInDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInDatastoreInput() {
    return this._pathInDatastore;
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

  // speed - computed: false, optional: true, required: false
  private _speed = new VirtualEnvironmentVmDiskSpeedOutputReference(this, "speed");
  public get speed() {
    return this._speed;
  }
  public putSpeed(value: VirtualEnvironmentVmDiskSpeed) {
    this._speed.internalValue = value;
  }
  public resetSpeed() {
    this._speed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed.internalValue;
  }
}

export class VirtualEnvironmentVmDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmDiskOutputReference {
    return new VirtualEnvironmentVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmEfiDisk {
  /**
  * The datastore id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#datastore_id VirtualEnvironmentVm#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * The file format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#file_format VirtualEnvironmentVm#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Use an EFI vars template with distribution-specific and Microsoft Standard keys enrolled, if used with efi type=`4m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#pre_enrolled_keys VirtualEnvironmentVm#pre_enrolled_keys}
  */
  readonly preEnrolledKeys?: boolean | cdktf.IResolvable;
  /**
  * Size and type of the OVMF EFI disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#type VirtualEnvironmentVm#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentVmEfiDiskToTerraform(struct?: VirtualEnvironmentVmEfiDiskOutputReference | VirtualEnvironmentVmEfiDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    pre_enrolled_keys: cdktf.booleanToTerraform(struct!.preEnrolledKeys),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualEnvironmentVmEfiDiskToHclTerraform(struct?: VirtualEnvironmentVmEfiDiskOutputReference | VirtualEnvironmentVmEfiDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_format: {
      value: cdktf.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_enrolled_keys: {
      value: cdktf.booleanToHclTerraform(struct!.preEnrolledKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class VirtualEnvironmentVmEfiDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmEfiDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._preEnrolledKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.preEnrolledKeys = this._preEnrolledKeys;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmEfiDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreId = undefined;
      this._fileFormat = undefined;
      this._preEnrolledKeys = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreId = value.datastoreId;
      this._fileFormat = value.fileFormat;
      this._preEnrolledKeys = value.preEnrolledKeys;
      this._type = value.type;
    }
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

  // file_format - computed: true, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // pre_enrolled_keys - computed: false, optional: true, required: false
  private _preEnrolledKeys?: boolean | cdktf.IResolvable; 
  public get preEnrolledKeys() {
    return this.getBooleanAttribute('pre_enrolled_keys');
  }
  public set preEnrolledKeys(value: boolean | cdktf.IResolvable) {
    this._preEnrolledKeys = value;
  }
  public resetPreEnrolledKeys() {
    this._preEnrolledKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preEnrolledKeysInput() {
    return this._preEnrolledKeys;
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
export interface VirtualEnvironmentVmHostpci {
  /**
  * The PCI device name for Proxmox, in form of 'hostpciX' where X is a sequential number from 0 to 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#device VirtualEnvironmentVm#device}
  */
  readonly device: string;
  /**
  * The PCI ID of the device, for example 0000:00:1f.0 (or 0000:00:1f.0;0000:00:1f.1 for multiple device functions, or 0000:00:1f for all functions). Use either this or mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#id VirtualEnvironmentVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource mapping name of the device, for example gpu. Use either this or id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#mapping VirtualEnvironmentVm#mapping}
  */
  readonly mapping?: string;
  /**
  * The the mediated device to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#mdev VirtualEnvironmentVm#mdev}
  */
  readonly mdev?: string;
  /**
  * Tells Proxmox VE to use a PCIe or PCI port. Some guests/device combination require PCIe rather than PCI. PCIe is only available for q35 machine types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#pcie VirtualEnvironmentVm#pcie}
  */
  readonly pcie?: boolean | cdktf.IResolvable;
  /**
  * A path to a ROM file for the device to use. This is a relative path under /usr/share/kvm/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#rom_file VirtualEnvironmentVm#rom_file}
  */
  readonly romFile?: string;
  /**
  * Makes the firmware ROM visible for the guest. Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#rombar VirtualEnvironmentVm#rombar}
  */
  readonly rombar?: boolean | cdktf.IResolvable;
  /**
  * Marks the PCI(e) device as the primary GPU of the VM. With this enabled, the vga configuration argument will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#xvga VirtualEnvironmentVm#xvga}
  */
  readonly xvga?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentVmHostpciToTerraform(struct?: VirtualEnvironmentVmHostpci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    id: cdktf.stringToTerraform(struct!.id),
    mapping: cdktf.stringToTerraform(struct!.mapping),
    mdev: cdktf.stringToTerraform(struct!.mdev),
    pcie: cdktf.booleanToTerraform(struct!.pcie),
    rom_file: cdktf.stringToTerraform(struct!.romFile),
    rombar: cdktf.booleanToTerraform(struct!.rombar),
    xvga: cdktf.booleanToTerraform(struct!.xvga),
  }
}


export function virtualEnvironmentVmHostpciToHclTerraform(struct?: VirtualEnvironmentVmHostpci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.stringToHclTerraform(struct!.mapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdev: {
      value: cdktf.stringToHclTerraform(struct!.mdev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcie: {
      value: cdktf.booleanToHclTerraform(struct!.pcie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rom_file: {
      value: cdktf.stringToHclTerraform(struct!.romFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rombar: {
      value: cdktf.booleanToHclTerraform(struct!.rombar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xvga: {
      value: cdktf.booleanToHclTerraform(struct!.xvga),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmHostpciOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmHostpci | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._mdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdev = this._mdev;
    }
    if (this._pcie !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcie = this._pcie;
    }
    if (this._romFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.romFile = this._romFile;
    }
    if (this._rombar !== undefined) {
      hasAnyValues = true;
      internalValueResult.rombar = this._rombar;
    }
    if (this._xvga !== undefined) {
      hasAnyValues = true;
      internalValueResult.xvga = this._xvga;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmHostpci | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._id = undefined;
      this._mapping = undefined;
      this._mdev = undefined;
      this._pcie = undefined;
      this._romFile = undefined;
      this._rombar = undefined;
      this._xvga = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._id = value.id;
      this._mapping = value.mapping;
      this._mdev = value.mdev;
      this._pcie = value.pcie;
      this._romFile = value.romFile;
      this._rombar = value.rombar;
      this._xvga = value.xvga;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }

  // mdev - computed: false, optional: true, required: false
  private _mdev?: string; 
  public get mdev() {
    return this.getStringAttribute('mdev');
  }
  public set mdev(value: string) {
    this._mdev = value;
  }
  public resetMdev() {
    this._mdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdevInput() {
    return this._mdev;
  }

  // pcie - computed: false, optional: true, required: false
  private _pcie?: boolean | cdktf.IResolvable; 
  public get pcie() {
    return this.getBooleanAttribute('pcie');
  }
  public set pcie(value: boolean | cdktf.IResolvable) {
    this._pcie = value;
  }
  public resetPcie() {
    this._pcie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieInput() {
    return this._pcie;
  }

  // rom_file - computed: false, optional: true, required: false
  private _romFile?: string; 
  public get romFile() {
    return this.getStringAttribute('rom_file');
  }
  public set romFile(value: string) {
    this._romFile = value;
  }
  public resetRomFile() {
    this._romFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get romFileInput() {
    return this._romFile;
  }

  // rombar - computed: false, optional: true, required: false
  private _rombar?: boolean | cdktf.IResolvable; 
  public get rombar() {
    return this.getBooleanAttribute('rombar');
  }
  public set rombar(value: boolean | cdktf.IResolvable) {
    this._rombar = value;
  }
  public resetRombar() {
    this._rombar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rombarInput() {
    return this._rombar;
  }

  // xvga - computed: false, optional: true, required: false
  private _xvga?: boolean | cdktf.IResolvable; 
  public get xvga() {
    return this.getBooleanAttribute('xvga');
  }
  public set xvga(value: boolean | cdktf.IResolvable) {
    this._xvga = value;
  }
  public resetXvga() {
    this._xvga = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xvgaInput() {
    return this._xvga;
  }
}

export class VirtualEnvironmentVmHostpciList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmHostpci[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmHostpciOutputReference {
    return new VirtualEnvironmentVmHostpciOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmInitializationDns {
  /**
  * The DNS search domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#domain VirtualEnvironmentVm#domain}
  */
  readonly domain?: string;
  /**
  * The list of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#servers VirtualEnvironmentVm#servers}
  */
  readonly servers?: string[];
}

export function virtualEnvironmentVmInitializationDnsToTerraform(struct?: VirtualEnvironmentVmInitializationDnsOutputReference | VirtualEnvironmentVmInitializationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function virtualEnvironmentVmInitializationDnsToHclTerraform(struct?: VirtualEnvironmentVmInitializationDnsOutputReference | VirtualEnvironmentVmInitializationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmInitializationDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmInitializationDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmInitializationDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._servers = value.servers;
    }
  }

  // domain - computed: false, optional: true, required: false
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

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface VirtualEnvironmentVmInitializationIpConfigIpv4 {
  /**
  * The IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#address VirtualEnvironmentVm#address}
  */
  readonly address?: string;
  /**
  * The IPv4 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#gateway VirtualEnvironmentVm#gateway}
  */
  readonly gateway?: string;
}

export function virtualEnvironmentVmInitializationIpConfigIpv4ToTerraform(struct?: VirtualEnvironmentVmInitializationIpConfigIpv4OutputReference | VirtualEnvironmentVmInitializationIpConfigIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}


export function virtualEnvironmentVmInitializationIpConfigIpv4ToHclTerraform(struct?: VirtualEnvironmentVmInitializationIpConfigIpv4OutputReference | VirtualEnvironmentVmInitializationIpConfigIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmInitializationIpConfigIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmInitializationIpConfigIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmInitializationIpConfigIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._gateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._gateway = value.gateway;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}
export interface VirtualEnvironmentVmInitializationIpConfigIpv6 {
  /**
  * The IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#address VirtualEnvironmentVm#address}
  */
  readonly address?: string;
  /**
  * The IPv6 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#gateway VirtualEnvironmentVm#gateway}
  */
  readonly gateway?: string;
}

export function virtualEnvironmentVmInitializationIpConfigIpv6ToTerraform(struct?: VirtualEnvironmentVmInitializationIpConfigIpv6OutputReference | VirtualEnvironmentVmInitializationIpConfigIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}


export function virtualEnvironmentVmInitializationIpConfigIpv6ToHclTerraform(struct?: VirtualEnvironmentVmInitializationIpConfigIpv6OutputReference | VirtualEnvironmentVmInitializationIpConfigIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmInitializationIpConfigIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmInitializationIpConfigIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmInitializationIpConfigIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._gateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._gateway = value.gateway;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}
export interface VirtualEnvironmentVmInitializationIpConfig {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#ipv4 VirtualEnvironmentVm#ipv4}
  */
  readonly ipv4?: VirtualEnvironmentVmInitializationIpConfigIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#ipv6 VirtualEnvironmentVm#ipv6}
  */
  readonly ipv6?: VirtualEnvironmentVmInitializationIpConfigIpv6;
}

export function virtualEnvironmentVmInitializationIpConfigToTerraform(struct?: VirtualEnvironmentVmInitializationIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: virtualEnvironmentVmInitializationIpConfigIpv4ToTerraform(struct!.ipv4),
    ipv6: virtualEnvironmentVmInitializationIpConfigIpv6ToTerraform(struct!.ipv6),
  }
}


export function virtualEnvironmentVmInitializationIpConfigToHclTerraform(struct?: VirtualEnvironmentVmInitializationIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: virtualEnvironmentVmInitializationIpConfigIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentVmInitializationIpConfigIpv4List",
    },
    ipv6: {
      value: virtualEnvironmentVmInitializationIpConfigIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentVmInitializationIpConfigIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmInitializationIpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmInitializationIpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmInitializationIpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new VirtualEnvironmentVmInitializationIpConfigIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: VirtualEnvironmentVmInitializationIpConfigIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new VirtualEnvironmentVmInitializationIpConfigIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: VirtualEnvironmentVmInitializationIpConfigIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class VirtualEnvironmentVmInitializationIpConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmInitializationIpConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmInitializationIpConfigOutputReference {
    return new VirtualEnvironmentVmInitializationIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmInitializationUserAccount {
  /**
  * The SSH keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#keys VirtualEnvironmentVm#keys}
  */
  readonly keys?: string[];
  /**
  * The SSH password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#password VirtualEnvironmentVm#password}
  */
  readonly password?: string;
  /**
  * The SSH username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#username VirtualEnvironmentVm#username}
  */
  readonly username?: string;
}

export function virtualEnvironmentVmInitializationUserAccountToTerraform(struct?: VirtualEnvironmentVmInitializationUserAccountOutputReference | VirtualEnvironmentVmInitializationUserAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function virtualEnvironmentVmInitializationUserAccountToHclTerraform(struct?: VirtualEnvironmentVmInitializationUserAccountOutputReference | VirtualEnvironmentVmInitializationUserAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmInitializationUserAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmInitializationUserAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmInitializationUserAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface VirtualEnvironmentVmInitialization {
  /**
  * The datastore id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#datastore_id VirtualEnvironmentVm#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * The file format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#file_format VirtualEnvironmentVm#file_format}
  */
  readonly fileFormat?: string;
  /**
  * The IDE interface on which the CloudInit drive will be added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#interface VirtualEnvironmentVm#interface}
  */
  readonly interface?: string;
  /**
  * The ID of a file containing meta data config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#meta_data_file_id VirtualEnvironmentVm#meta_data_file_id}
  */
  readonly metaDataFileId?: string;
  /**
  * The ID of a file containing network config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#network_data_file_id VirtualEnvironmentVm#network_data_file_id}
  */
  readonly networkDataFileId?: string;
  /**
  * The cloud-init configuration format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#type VirtualEnvironmentVm#type}
  */
  readonly type?: string;
  /**
  * The ID of a file containing custom user data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#user_data_file_id VirtualEnvironmentVm#user_data_file_id}
  */
  readonly userDataFileId?: string;
  /**
  * The ID of a file containing vendor data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#vendor_data_file_id VirtualEnvironmentVm#vendor_data_file_id}
  */
  readonly vendorDataFileId?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#dns VirtualEnvironmentVm#dns}
  */
  readonly dns?: VirtualEnvironmentVmInitializationDns;
  /**
  * ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#ip_config VirtualEnvironmentVm#ip_config}
  */
  readonly ipConfig?: VirtualEnvironmentVmInitializationIpConfig[] | cdktf.IResolvable;
  /**
  * user_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#user_account VirtualEnvironmentVm#user_account}
  */
  readonly userAccount?: VirtualEnvironmentVmInitializationUserAccount;
}

export function virtualEnvironmentVmInitializationToTerraform(struct?: VirtualEnvironmentVmInitializationOutputReference | VirtualEnvironmentVmInitialization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    interface: cdktf.stringToTerraform(struct!.interface),
    meta_data_file_id: cdktf.stringToTerraform(struct!.metaDataFileId),
    network_data_file_id: cdktf.stringToTerraform(struct!.networkDataFileId),
    type: cdktf.stringToTerraform(struct!.type),
    user_data_file_id: cdktf.stringToTerraform(struct!.userDataFileId),
    vendor_data_file_id: cdktf.stringToTerraform(struct!.vendorDataFileId),
    dns: virtualEnvironmentVmInitializationDnsToTerraform(struct!.dns),
    ip_config: cdktf.listMapper(virtualEnvironmentVmInitializationIpConfigToTerraform, true)(struct!.ipConfig),
    user_account: virtualEnvironmentVmInitializationUserAccountToTerraform(struct!.userAccount),
  }
}


export function virtualEnvironmentVmInitializationToHclTerraform(struct?: VirtualEnvironmentVmInitializationOutputReference | VirtualEnvironmentVmInitialization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_format: {
      value: cdktf.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta_data_file_id: {
      value: cdktf.stringToHclTerraform(struct!.metaDataFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_data_file_id: {
      value: cdktf.stringToHclTerraform(struct!.networkDataFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data_file_id: {
      value: cdktf.stringToHclTerraform(struct!.userDataFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_data_file_id: {
      value: cdktf.stringToHclTerraform(struct!.vendorDataFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: virtualEnvironmentVmInitializationDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentVmInitializationDnsList",
    },
    ip_config: {
      value: cdktf.listMapperHcl(virtualEnvironmentVmInitializationIpConfigToHclTerraform, true)(struct!.ipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentVmInitializationIpConfigList",
    },
    user_account: {
      value: virtualEnvironmentVmInitializationUserAccountToHclTerraform(struct!.userAccount),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentVmInitializationUserAccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmInitializationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmInitialization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metaDataFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaDataFileId = this._metaDataFileId;
    }
    if (this._networkDataFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDataFileId = this._networkDataFileId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userDataFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDataFileId = this._userDataFileId;
    }
    if (this._vendorDataFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorDataFileId = this._vendorDataFileId;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._ipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfig = this._ipConfig?.internalValue;
    }
    if (this._userAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccount = this._userAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmInitialization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreId = undefined;
      this._fileFormat = undefined;
      this._interface = undefined;
      this._metaDataFileId = undefined;
      this._networkDataFileId = undefined;
      this._type = undefined;
      this._userDataFileId = undefined;
      this._vendorDataFileId = undefined;
      this._dns.internalValue = undefined;
      this._ipConfig.internalValue = undefined;
      this._userAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreId = value.datastoreId;
      this._fileFormat = value.fileFormat;
      this._interface = value.interface;
      this._metaDataFileId = value.metaDataFileId;
      this._networkDataFileId = value.networkDataFileId;
      this._type = value.type;
      this._userDataFileId = value.userDataFileId;
      this._vendorDataFileId = value.vendorDataFileId;
      this._dns.internalValue = value.dns;
      this._ipConfig.internalValue = value.ipConfig;
      this._userAccount.internalValue = value.userAccount;
    }
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

  // file_format - computed: true, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // meta_data_file_id - computed: true, optional: true, required: false
  private _metaDataFileId?: string; 
  public get metaDataFileId() {
    return this.getStringAttribute('meta_data_file_id');
  }
  public set metaDataFileId(value: string) {
    this._metaDataFileId = value;
  }
  public resetMetaDataFileId() {
    this._metaDataFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataFileIdInput() {
    return this._metaDataFileId;
  }

  // network_data_file_id - computed: true, optional: true, required: false
  private _networkDataFileId?: string; 
  public get networkDataFileId() {
    return this.getStringAttribute('network_data_file_id');
  }
  public set networkDataFileId(value: string) {
    this._networkDataFileId = value;
  }
  public resetNetworkDataFileId() {
    this._networkDataFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataFileIdInput() {
    return this._networkDataFileId;
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

  // user_data_file_id - computed: true, optional: true, required: false
  private _userDataFileId?: string; 
  public get userDataFileId() {
    return this.getStringAttribute('user_data_file_id');
  }
  public set userDataFileId(value: string) {
    this._userDataFileId = value;
  }
  public resetUserDataFileId() {
    this._userDataFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataFileIdInput() {
    return this._userDataFileId;
  }

  // vendor_data_file_id - computed: true, optional: true, required: false
  private _vendorDataFileId?: string; 
  public get vendorDataFileId() {
    return this.getStringAttribute('vendor_data_file_id');
  }
  public set vendorDataFileId(value: string) {
    this._vendorDataFileId = value;
  }
  public resetVendorDataFileId() {
    this._vendorDataFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorDataFileIdInput() {
    return this._vendorDataFileId;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new VirtualEnvironmentVmInitializationDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: VirtualEnvironmentVmInitializationDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ip_config - computed: false, optional: true, required: false
  private _ipConfig = new VirtualEnvironmentVmInitializationIpConfigList(this, "ip_config", false);
  public get ipConfig() {
    return this._ipConfig;
  }
  public putIpConfig(value: VirtualEnvironmentVmInitializationIpConfig[] | cdktf.IResolvable) {
    this._ipConfig.internalValue = value;
  }
  public resetIpConfig() {
    this._ipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigInput() {
    return this._ipConfig.internalValue;
  }

  // user_account - computed: false, optional: true, required: false
  private _userAccount = new VirtualEnvironmentVmInitializationUserAccountOutputReference(this, "user_account");
  public get userAccount() {
    return this._userAccount;
  }
  public putUserAccount(value: VirtualEnvironmentVmInitializationUserAccount) {
    this._userAccount.internalValue = value;
  }
  public resetUserAccount() {
    this._userAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountInput() {
    return this._userAccount.internalValue;
  }
}
export interface VirtualEnvironmentVmMemory {
  /**
  * The dedicated memory in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#dedicated VirtualEnvironmentVm#dedicated}
  */
  readonly dedicated?: number;
  /**
  * The floating memory in megabytes (balloon)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#floating VirtualEnvironmentVm#floating}
  */
  readonly floating?: number;
  /**
  * Enable/disable hugepages memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#hugepages VirtualEnvironmentVm#hugepages}
  */
  readonly hugepages?: string;
  /**
  * Hugepages will not be deleted after VM shutdown and can be used for subsequent starts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#keep_hugepages VirtualEnvironmentVm#keep_hugepages}
  */
  readonly keepHugepages?: boolean | cdktf.IResolvable;
  /**
  * The shared memory in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#shared VirtualEnvironmentVm#shared}
  */
  readonly shared?: number;
}

export function virtualEnvironmentVmMemoryToTerraform(struct?: VirtualEnvironmentVmMemoryOutputReference | VirtualEnvironmentVmMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated: cdktf.numberToTerraform(struct!.dedicated),
    floating: cdktf.numberToTerraform(struct!.floating),
    hugepages: cdktf.stringToTerraform(struct!.hugepages),
    keep_hugepages: cdktf.booleanToTerraform(struct!.keepHugepages),
    shared: cdktf.numberToTerraform(struct!.shared),
  }
}


export function virtualEnvironmentVmMemoryToHclTerraform(struct?: VirtualEnvironmentVmMemoryOutputReference | VirtualEnvironmentVmMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated: {
      value: cdktf.numberToHclTerraform(struct!.dedicated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floating: {
      value: cdktf.numberToHclTerraform(struct!.floating),
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
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicated = this._dedicated;
    }
    if (this._floating !== undefined) {
      hasAnyValues = true;
      internalValueResult.floating = this._floating;
    }
    if (this._hugepages !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepages = this._hugepages;
    }
    if (this._keepHugepages !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepHugepages = this._keepHugepages;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicated = undefined;
      this._floating = undefined;
      this._hugepages = undefined;
      this._keepHugepages = undefined;
      this._shared = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicated = value.dedicated;
      this._floating = value.floating;
      this._hugepages = value.hugepages;
      this._keepHugepages = value.keepHugepages;
      this._shared = value.shared;
    }
  }

  // dedicated - computed: false, optional: true, required: false
  private _dedicated?: number; 
  public get dedicated() {
    return this.getNumberAttribute('dedicated');
  }
  public set dedicated(value: number) {
    this._dedicated = value;
  }
  public resetDedicated() {
    this._dedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated;
  }

  // floating - computed: false, optional: true, required: false
  private _floating?: number; 
  public get floating() {
    return this.getNumberAttribute('floating');
  }
  public set floating(value: number) {
    this._floating = value;
  }
  public resetFloating() {
    this._floating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingInput() {
    return this._floating;
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

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }
}
export interface VirtualEnvironmentVmNetworkDevice {
  /**
  * The bridge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#bridge VirtualEnvironmentVm#bridge}
  */
  readonly bridge?: string;
  /**
  * Whether the network device should be disconnected from the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#disconnected VirtualEnvironmentVm#disconnected}
  */
  readonly disconnected?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the network device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#enabled VirtualEnvironmentVm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether this interface's firewall rules should be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#firewall VirtualEnvironmentVm#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * The MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#mac_address VirtualEnvironmentVm#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#model VirtualEnvironmentVm#model}
  */
  readonly model?: string;
  /**
  * Maximum transmission unit (MTU)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#mtu VirtualEnvironmentVm#mtu}
  */
  readonly mtu?: number;
  /**
  * Number of packet queues to be used on the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#queues VirtualEnvironmentVm#queues}
  */
  readonly queues?: number;
  /**
  * The rate limit in megabytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#rate_limit VirtualEnvironmentVm#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * List of VLAN trunks for the network interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#trunks VirtualEnvironmentVm#trunks}
  */
  readonly trunks?: string;
  /**
  * The VLAN identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#vlan_id VirtualEnvironmentVm#vlan_id}
  */
  readonly vlanId?: number;
}

export function virtualEnvironmentVmNetworkDeviceToTerraform(struct?: VirtualEnvironmentVmNetworkDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    disconnected: cdktf.booleanToTerraform(struct!.disconnected),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    firewall: cdktf.booleanToTerraform(struct!.firewall),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    queues: cdktf.numberToTerraform(struct!.queues),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    trunks: cdktf.stringToTerraform(struct!.trunks),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function virtualEnvironmentVmNetworkDeviceToHclTerraform(struct?: VirtualEnvironmentVmNetworkDevice | cdktf.IResolvable): any {
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
    disconnected: {
      value: cdktf.booleanToHclTerraform(struct!.disconnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall: {
      value: cdktf.booleanToHclTerraform(struct!.firewall),
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
    trunks: {
      value: cdktf.stringToHclTerraform(struct!.trunks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmNetworkDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmNetworkDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._disconnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnected = this._disconnected;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._firewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall;
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
    if (this._trunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunks = this._trunks;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmNetworkDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._disconnected = undefined;
      this._enabled = undefined;
      this._firewall = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._mtu = undefined;
      this._queues = undefined;
      this._rateLimit = undefined;
      this._trunks = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._disconnected = value.disconnected;
      this._enabled = value.enabled;
      this._firewall = value.firewall;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._mtu = value.mtu;
      this._queues = value.queues;
      this._rateLimit = value.rateLimit;
      this._trunks = value.trunks;
      this._vlanId = value.vlanId;
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

  // disconnected - computed: false, optional: true, required: false
  private _disconnected?: boolean | cdktf.IResolvable; 
  public get disconnected() {
    return this.getBooleanAttribute('disconnected');
  }
  public set disconnected(value: boolean | cdktf.IResolvable) {
    this._disconnected = value;
  }
  public resetDisconnected() {
    this._disconnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectedInput() {
    return this._disconnected;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // trunks - computed: false, optional: true, required: false
  private _trunks?: string; 
  public get trunks() {
    return this.getStringAttribute('trunks');
  }
  public set trunks(value: string) {
    this._trunks = value;
  }
  public resetTrunks() {
    this._trunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunksInput() {
    return this._trunks;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class VirtualEnvironmentVmNetworkDeviceList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmNetworkDevice[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmNetworkDeviceOutputReference {
    return new VirtualEnvironmentVmNetworkDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmNuma {
  /**
  * CPUs accessing this NUMA node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#cpus VirtualEnvironmentVm#cpus}
  */
  readonly cpus: string;
  /**
  * Numa node device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#device VirtualEnvironmentVm#device}
  */
  readonly device: string;
  /**
  * Host NUMA nodes to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#hostnodes VirtualEnvironmentVm#hostnodes}
  */
  readonly hostnodes?: string;
  /**
  * Amount of memory this NUMA node provides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#memory VirtualEnvironmentVm#memory}
  */
  readonly memory: number;
  /**
  * NUMA policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#policy VirtualEnvironmentVm#policy}
  */
  readonly policy?: string;
}

export function virtualEnvironmentVmNumaToTerraform(struct?: VirtualEnvironmentVmNuma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpus: cdktf.stringToTerraform(struct!.cpus),
    device: cdktf.stringToTerraform(struct!.device),
    hostnodes: cdktf.stringToTerraform(struct!.hostnodes),
    memory: cdktf.numberToTerraform(struct!.memory),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function virtualEnvironmentVmNumaToHclTerraform(struct?: VirtualEnvironmentVmNuma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpus: {
      value: cdktf.stringToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostnodes: {
      value: cdktf.stringToHclTerraform(struct!.hostnodes),
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
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmNumaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmNuma | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._hostnodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnodes = this._hostnodes;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmNuma | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpus = undefined;
      this._device = undefined;
      this._hostnodes = undefined;
      this._memory = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpus = value.cpus;
      this._device = value.device;
      this._hostnodes = value.hostnodes;
      this._memory = value.memory;
      this._policy = value.policy;
    }
  }

  // cpus - computed: false, optional: false, required: true
  private _cpus?: string; 
  public get cpus() {
    return this.getStringAttribute('cpus');
  }
  public set cpus(value: string) {
    this._cpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // hostnodes - computed: false, optional: true, required: false
  private _hostnodes?: string; 
  public get hostnodes() {
    return this.getStringAttribute('hostnodes');
  }
  public set hostnodes(value: string) {
    this._hostnodes = value;
  }
  public resetHostnodes() {
    this._hostnodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnodesInput() {
    return this._hostnodes;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}

export class VirtualEnvironmentVmNumaList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmNuma[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmNumaOutputReference {
    return new VirtualEnvironmentVmNumaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmOperatingSystem {
  /**
  * The type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#type VirtualEnvironmentVm#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentVmOperatingSystemToTerraform(struct?: VirtualEnvironmentVmOperatingSystemOutputReference | VirtualEnvironmentVmOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualEnvironmentVmOperatingSystemToHclTerraform(struct?: VirtualEnvironmentVmOperatingSystemOutputReference | VirtualEnvironmentVmOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VirtualEnvironmentVmOperatingSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface VirtualEnvironmentVmRng {
  /**
  * Maximum bytes of entropy allowed to get injected into the guest every `period` milliseconds. Prefer a lower value when using `/dev/random` as source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#max_bytes VirtualEnvironmentVm#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Every `period` milliseconds the entropy-injection quota is reset, allowing the guest to retrieve another `max_bytes` of entropy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#period VirtualEnvironmentVm#period}
  */
  readonly period?: number;
  /**
  * The file on the host to gather entropy from. In most cases, `/dev/urandom` should be preferred over `/dev/random` to avoid entropy-starvation issues on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#source VirtualEnvironmentVm#source}
  */
  readonly source: string;
}

export function virtualEnvironmentVmRngToTerraform(struct?: VirtualEnvironmentVmRng | cdktf.IResolvable): any {
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


export function virtualEnvironmentVmRngToHclTerraform(struct?: VirtualEnvironmentVmRng | cdktf.IResolvable): any {
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

export class VirtualEnvironmentVmRngOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmRng | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualEnvironmentVmRng | cdktf.IResolvable | undefined) {
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class VirtualEnvironmentVmRngList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmRng[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmRngOutputReference {
    return new VirtualEnvironmentVmRngOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmSerialDevice {
  /**
  * The device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#device VirtualEnvironmentVm#device}
  */
  readonly device?: string;
}

export function virtualEnvironmentVmSerialDeviceToTerraform(struct?: VirtualEnvironmentVmSerialDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
  }
}


export function virtualEnvironmentVmSerialDeviceToHclTerraform(struct?: VirtualEnvironmentVmSerialDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmSerialDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmSerialDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmSerialDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }
}

export class VirtualEnvironmentVmSerialDeviceList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmSerialDevice[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmSerialDeviceOutputReference {
    return new VirtualEnvironmentVmSerialDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmSmbios {
  /**
  * Sets SMBIOS family string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#family VirtualEnvironmentVm#family}
  */
  readonly family?: string;
  /**
  * Sets SMBIOS manufacturer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#manufacturer VirtualEnvironmentVm#manufacturer}
  */
  readonly manufacturer?: string;
  /**
  * Sets SMBIOS product ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#product VirtualEnvironmentVm#product}
  */
  readonly product?: string;
  /**
  * Sets SMBIOS serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#serial VirtualEnvironmentVm#serial}
  */
  readonly serial?: string;
  /**
  * Sets SMBIOS SKU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#sku VirtualEnvironmentVm#sku}
  */
  readonly sku?: string;
  /**
  * Sets SMBIOS UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#uuid VirtualEnvironmentVm#uuid}
  */
  readonly uuid?: string;
  /**
  * Sets SMBIOS version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#version VirtualEnvironmentVm#version}
  */
  readonly version?: string;
}

export function virtualEnvironmentVmSmbiosToTerraform(struct?: VirtualEnvironmentVmSmbiosOutputReference | VirtualEnvironmentVmSmbios): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    manufacturer: cdktf.stringToTerraform(struct!.manufacturer),
    product: cdktf.stringToTerraform(struct!.product),
    serial: cdktf.stringToTerraform(struct!.serial),
    sku: cdktf.stringToTerraform(struct!.sku),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function virtualEnvironmentVmSmbiosToHclTerraform(struct?: VirtualEnvironmentVmSmbiosOutputReference | VirtualEnvironmentVmSmbios): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manufacturer: {
      value: cdktf.stringToHclTerraform(struct!.manufacturer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmSmbiosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmSmbios | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._manufacturer !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturer = this._manufacturer;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmSmbios | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._family = undefined;
      this._manufacturer = undefined;
      this._product = undefined;
      this._serial = undefined;
      this._sku = undefined;
      this._uuid = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._family = value.family;
      this._manufacturer = value.manufacturer;
      this._product = value.product;
      this._serial = value.serial;
      this._sku = value.sku;
      this._uuid = value.uuid;
      this._version = value.version;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // manufacturer - computed: false, optional: true, required: false
  private _manufacturer?: string; 
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }
  public set manufacturer(value: string) {
    this._manufacturer = value;
  }
  public resetManufacturer() {
    this._manufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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
}
export interface VirtualEnvironmentVmStartup {
  /**
  * A non-negative number defining the delay in seconds before the next VM is shut down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#down_delay VirtualEnvironmentVm#down_delay}
  */
  readonly downDelay?: number;
  /**
  * A non-negative number defining the general startup order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#order VirtualEnvironmentVm#order}
  */
  readonly order?: number;
  /**
  * A non-negative number defining the delay in seconds before the next VM is started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#up_delay VirtualEnvironmentVm#up_delay}
  */
  readonly upDelay?: number;
}

export function virtualEnvironmentVmStartupToTerraform(struct?: VirtualEnvironmentVmStartupOutputReference | VirtualEnvironmentVmStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_delay: cdktf.numberToTerraform(struct!.downDelay),
    order: cdktf.numberToTerraform(struct!.order),
    up_delay: cdktf.numberToTerraform(struct!.upDelay),
  }
}


export function virtualEnvironmentVmStartupToHclTerraform(struct?: VirtualEnvironmentVmStartupOutputReference | VirtualEnvironmentVmStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_delay: {
      value: cdktf.numberToHclTerraform(struct!.downDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_delay: {
      value: cdktf.numberToHclTerraform(struct!.upDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmStartupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmStartup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.downDelay = this._downDelay;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._upDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.upDelay = this._upDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmStartup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downDelay = undefined;
      this._order = undefined;
      this._upDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downDelay = value.downDelay;
      this._order = value.order;
      this._upDelay = value.upDelay;
    }
  }

  // down_delay - computed: false, optional: true, required: false
  private _downDelay?: number; 
  public get downDelay() {
    return this.getNumberAttribute('down_delay');
  }
  public set downDelay(value: number) {
    this._downDelay = value;
  }
  public resetDownDelay() {
    this._downDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downDelayInput() {
    return this._downDelay;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // up_delay - computed: false, optional: true, required: false
  private _upDelay?: number; 
  public get upDelay() {
    return this.getNumberAttribute('up_delay');
  }
  public set upDelay(value: number) {
    this._upDelay = value;
  }
  public resetUpDelay() {
    this._upDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upDelayInput() {
    return this._upDelay;
  }
}
export interface VirtualEnvironmentVmTpmState {
  /**
  * Datastore ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#datastore_id VirtualEnvironmentVm#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * TPM version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#version VirtualEnvironmentVm#version}
  */
  readonly version?: string;
}

export function virtualEnvironmentVmTpmStateToTerraform(struct?: VirtualEnvironmentVmTpmStateOutputReference | VirtualEnvironmentVmTpmState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function virtualEnvironmentVmTpmStateToHclTerraform(struct?: VirtualEnvironmentVmTpmStateOutputReference | VirtualEnvironmentVmTpmState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmTpmStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmTpmState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmTpmState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreId = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreId = value.datastoreId;
      this._version = value.version;
    }
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
}
export interface VirtualEnvironmentVmUsb {
  /**
  * The USB device ID for Proxmox, in form of '<MANUFACTURER>:<ID>'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#host VirtualEnvironmentVm#host}
  */
  readonly host?: string;
  /**
  * The resource mapping name of the device, for example usbdisk. Use either this or id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#mapping VirtualEnvironmentVm#mapping}
  */
  readonly mapping?: string;
  /**
  * Makes the USB device a USB3 device for the machine. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#usb3 VirtualEnvironmentVm#usb3}
  */
  readonly usb3?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentVmUsbToTerraform(struct?: VirtualEnvironmentVmUsb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    mapping: cdktf.stringToTerraform(struct!.mapping),
    usb3: cdktf.booleanToTerraform(struct!.usb3),
  }
}


export function virtualEnvironmentVmUsbToHclTerraform(struct?: VirtualEnvironmentVmUsb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.stringToHclTerraform(struct!.mapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usb3: {
      value: cdktf.booleanToHclTerraform(struct!.usb3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmUsbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmUsb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._usb3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.usb3 = this._usb3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmUsb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._mapping = undefined;
      this._usb3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._mapping = value.mapping;
      this._usb3 = value.usb3;
    }
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

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }

  // usb3 - computed: false, optional: true, required: false
  private _usb3?: boolean | cdktf.IResolvable; 
  public get usb3() {
    return this.getBooleanAttribute('usb3');
  }
  public set usb3(value: boolean | cdktf.IResolvable) {
    this._usb3 = value;
  }
  public resetUsb3() {
    this._usb3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usb3Input() {
    return this._usb3;
  }
}

export class VirtualEnvironmentVmUsbList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmUsb[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmUsbOutputReference {
    return new VirtualEnvironmentVmUsbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmVga {
  /**
  * Enable clipboard support. Set to `vnc` to enable clipboard support for VNC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#clipboard VirtualEnvironmentVm#clipboard}
  */
  readonly clipboard?: string;
  /**
  * The VGA memory in megabytes (4-512 MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#memory VirtualEnvironmentVm#memory}
  */
  readonly memory?: number;
  /**
  * The VGA type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#type VirtualEnvironmentVm#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentVmVgaToTerraform(struct?: VirtualEnvironmentVmVgaOutputReference | VirtualEnvironmentVmVga): any {
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


export function virtualEnvironmentVmVgaToHclTerraform(struct?: VirtualEnvironmentVmVgaOutputReference | VirtualEnvironmentVmVga): any {
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

export class VirtualEnvironmentVmVgaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmVga | undefined {
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

  public set internalValue(value: VirtualEnvironmentVmVga | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clipboard = undefined;
      this._memory = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface VirtualEnvironmentVmVirtiofs {
  /**
  * The caching mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#cache VirtualEnvironmentVm#cache}
  */
  readonly cache?: string;
  /**
  * Whether to allow direct io
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#direct_io VirtualEnvironmentVm#direct_io}
  */
  readonly directIo?: boolean | cdktf.IResolvable;
  /**
  * Enable POSIX ACLs, implies xattr support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#expose_acl VirtualEnvironmentVm#expose_acl}
  */
  readonly exposeAcl?: boolean | cdktf.IResolvable;
  /**
  * Enable support for extended attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#expose_xattr VirtualEnvironmentVm#expose_xattr}
  */
  readonly exposeXattr?: boolean | cdktf.IResolvable;
  /**
  * Directory mapping identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#mapping VirtualEnvironmentVm#mapping}
  */
  readonly mapping: string;
}

export function virtualEnvironmentVmVirtiofsToTerraform(struct?: VirtualEnvironmentVmVirtiofs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: cdktf.stringToTerraform(struct!.cache),
    direct_io: cdktf.booleanToTerraform(struct!.directIo),
    expose_acl: cdktf.booleanToTerraform(struct!.exposeAcl),
    expose_xattr: cdktf.booleanToTerraform(struct!.exposeXattr),
    mapping: cdktf.stringToTerraform(struct!.mapping),
  }
}


export function virtualEnvironmentVmVirtiofsToHclTerraform(struct?: VirtualEnvironmentVmVirtiofs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_io: {
      value: cdktf.booleanToHclTerraform(struct!.directIo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_acl: {
      value: cdktf.booleanToHclTerraform(struct!.exposeAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_xattr: {
      value: cdktf.booleanToHclTerraform(struct!.exposeXattr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapping: {
      value: cdktf.stringToHclTerraform(struct!.mapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmVirtiofsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentVmVirtiofs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._directIo !== undefined) {
      hasAnyValues = true;
      internalValueResult.directIo = this._directIo;
    }
    if (this._exposeAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeAcl = this._exposeAcl;
    }
    if (this._exposeXattr !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeXattr = this._exposeXattr;
    }
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmVirtiofs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cache = undefined;
      this._directIo = undefined;
      this._exposeAcl = undefined;
      this._exposeXattr = undefined;
      this._mapping = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cache = value.cache;
      this._directIo = value.directIo;
      this._exposeAcl = value.exposeAcl;
      this._exposeXattr = value.exposeXattr;
      this._mapping = value.mapping;
    }
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

  // direct_io - computed: false, optional: true, required: false
  private _directIo?: boolean | cdktf.IResolvable; 
  public get directIo() {
    return this.getBooleanAttribute('direct_io');
  }
  public set directIo(value: boolean | cdktf.IResolvable) {
    this._directIo = value;
  }
  public resetDirectIo() {
    this._directIo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directIoInput() {
    return this._directIo;
  }

  // expose_acl - computed: false, optional: true, required: false
  private _exposeAcl?: boolean | cdktf.IResolvable; 
  public get exposeAcl() {
    return this.getBooleanAttribute('expose_acl');
  }
  public set exposeAcl(value: boolean | cdktf.IResolvable) {
    this._exposeAcl = value;
  }
  public resetExposeAcl() {
    this._exposeAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeAclInput() {
    return this._exposeAcl;
  }

  // expose_xattr - computed: false, optional: true, required: false
  private _exposeXattr?: boolean | cdktf.IResolvable; 
  public get exposeXattr() {
    return this.getBooleanAttribute('expose_xattr');
  }
  public set exposeXattr(value: boolean | cdktf.IResolvable) {
    this._exposeXattr = value;
  }
  public resetExposeXattr() {
    this._exposeXattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeXattrInput() {
    return this._exposeXattr;
  }

  // mapping - computed: false, optional: false, required: true
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }
}

export class VirtualEnvironmentVmVirtiofsList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentVmVirtiofs[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentVmVirtiofsOutputReference {
    return new VirtualEnvironmentVmVirtiofsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentVmWatchdog {
  /**
  * The watchdog action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#action VirtualEnvironmentVm#action}
  */
  readonly action?: string;
  /**
  * Whether the watchdog is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#enabled VirtualEnvironmentVm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The watchdog model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#model VirtualEnvironmentVm#model}
  */
  readonly model?: string;
}

export function virtualEnvironmentVmWatchdogToTerraform(struct?: VirtualEnvironmentVmWatchdogOutputReference | VirtualEnvironmentVmWatchdog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function virtualEnvironmentVmWatchdogToHclTerraform(struct?: VirtualEnvironmentVmWatchdogOutputReference | VirtualEnvironmentVmWatchdog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentVmWatchdogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentVmWatchdog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentVmWatchdog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
      this._model = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
      this._model = value.model;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm proxmox_virtual_environment_vm}
*/
export class VirtualEnvironmentVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentVm to import
  * @param importFromId The id of the existing VirtualEnvironmentVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_vm proxmox_virtual_environment_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentVmConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentVmConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_vm',
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
    this._acpi = config.acpi;
    this._bios = config.bios;
    this._bootOrder = config.bootOrder;
    this._deleteUnreferencedDisksOnDestroy = config.deleteUnreferencedDisksOnDestroy;
    this._description = config.description;
    this._hookScriptFileId = config.hookScriptFileId;
    this._id = config.id;
    this._keyboardLayout = config.keyboardLayout;
    this._kvmArguments = config.kvmArguments;
    this._macAddresses = config.macAddresses;
    this._machine = config.machine;
    this._migrate = config.migrate;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._onBoot = config.onBoot;
    this._poolId = config.poolId;
    this._protection = config.protection;
    this._purgeOnDestroy = config.purgeOnDestroy;
    this._reboot = config.reboot;
    this._rebootAfterUpdate = config.rebootAfterUpdate;
    this._scsiHardware = config.scsiHardware;
    this._started = config.started;
    this._stopOnDestroy = config.stopOnDestroy;
    this._tabletDevice = config.tabletDevice;
    this._tags = config.tags;
    this._template = config.template;
    this._timeoutClone = config.timeoutClone;
    this._timeoutCreate = config.timeoutCreate;
    this._timeoutMigrate = config.timeoutMigrate;
    this._timeoutMoveDisk = config.timeoutMoveDisk;
    this._timeoutReboot = config.timeoutReboot;
    this._timeoutShutdownVm = config.timeoutShutdownVm;
    this._timeoutStartVm = config.timeoutStartVm;
    this._timeoutStopVm = config.timeoutStopVm;
    this._vmId = config.vmId;
    this._agent.internalValue = config.agent;
    this._amdSev.internalValue = config.amdSev;
    this._audioDevice.internalValue = config.audioDevice;
    this._cdrom.internalValue = config.cdrom;
    this._clone.internalValue = config.clone;
    this._cpu.internalValue = config.cpu;
    this._disk.internalValue = config.disk;
    this._efiDisk.internalValue = config.efiDisk;
    this._hostpci.internalValue = config.hostpci;
    this._initialization.internalValue = config.initialization;
    this._memory.internalValue = config.memory;
    this._networkDevice.internalValue = config.networkDevice;
    this._numa.internalValue = config.numa;
    this._operatingSystem.internalValue = config.operatingSystem;
    this._rng.internalValue = config.rng;
    this._serialDevice.internalValue = config.serialDevice;
    this._smbios.internalValue = config.smbios;
    this._startup.internalValue = config.startup;
    this._tpmState.internalValue = config.tpmState;
    this._usb.internalValue = config.usb;
    this._vga.internalValue = config.vga;
    this._virtiofs.internalValue = config.virtiofs;
    this._watchdog.internalValue = config.watchdog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acpi - computed: false, optional: true, required: false
  private _acpi?: boolean | cdktf.IResolvable; 
  public get acpi() {
    return this.getBooleanAttribute('acpi');
  }
  public set acpi(value: boolean | cdktf.IResolvable) {
    this._acpi = value;
  }
  public resetAcpi() {
    this._acpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acpiInput() {
    return this._acpi;
  }

  // bios - computed: false, optional: true, required: false
  private _bios?: string; 
  public get bios() {
    return this.getStringAttribute('bios');
  }
  public set bios(value: string) {
    this._bios = value;
  }
  public resetBios() {
    this._bios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosInput() {
    return this._bios;
  }

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: string[]; 
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }
  public set bootOrder(value: string[]) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // delete_unreferenced_disks_on_destroy - computed: false, optional: true, required: false
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

  // hook_script_file_id - computed: false, optional: true, required: false
  private _hookScriptFileId?: string; 
  public get hookScriptFileId() {
    return this.getStringAttribute('hook_script_file_id');
  }
  public set hookScriptFileId(value: string) {
    this._hookScriptFileId = value;
  }
  public resetHookScriptFileId() {
    this._hookScriptFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookScriptFileIdInput() {
    return this._hookScriptFileId;
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

  // ipv4_addresses - computed: true, optional: false, required: false
  private _ipv4Addresses = new cdktf.StringListList(this, "ipv4_addresses", false);
  public get ipv4Addresses() {
    return this._ipv4Addresses;
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new cdktf.StringListList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // keyboard_layout - computed: false, optional: true, required: false
  private _keyboardLayout?: string; 
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }
  public set keyboardLayout(value: string) {
    this._keyboardLayout = value;
  }
  public resetKeyboardLayout() {
    this._keyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardLayoutInput() {
    return this._keyboardLayout;
  }

  // kvm_arguments - computed: false, optional: true, required: false
  private _kvmArguments?: string; 
  public get kvmArguments() {
    return this.getStringAttribute('kvm_arguments');
  }
  public set kvmArguments(value: string) {
    this._kvmArguments = value;
  }
  public resetKvmArguments() {
    this._kvmArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmArgumentsInput() {
    return this._kvmArguments;
  }

  // mac_addresses - computed: true, optional: true, required: false
  private _macAddresses?: string[]; 
  public get macAddresses() {
    return this.getListAttribute('mac_addresses');
  }
  public set macAddresses(value: string[]) {
    this._macAddresses = value;
  }
  public resetMacAddresses() {
    this._macAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressesInput() {
    return this._macAddresses;
  }

  // machine - computed: false, optional: true, required: false
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // migrate - computed: false, optional: true, required: false
  private _migrate?: boolean | cdktf.IResolvable; 
  public get migrate() {
    return this.getBooleanAttribute('migrate');
  }
  public set migrate(value: boolean | cdktf.IResolvable) {
    this._migrate = value;
  }
  public resetMigrate() {
    this._migrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateInput() {
    return this._migrate;
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

  // network_interface_names - computed: true, optional: false, required: false
  public get networkInterfaceNames() {
    return this.getListAttribute('network_interface_names');
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

  // on_boot - computed: false, optional: true, required: false
  private _onBoot?: boolean | cdktf.IResolvable; 
  public get onBoot() {
    return this.getBooleanAttribute('on_boot');
  }
  public set onBoot(value: boolean | cdktf.IResolvable) {
    this._onBoot = value;
  }
  public resetOnBoot() {
    this._onBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onBootInput() {
    return this._onBoot;
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

  // protection - computed: false, optional: true, required: false
  private _protection?: boolean | cdktf.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection');
  }
  public set protection(value: boolean | cdktf.IResolvable) {
    this._protection = value;
  }
  public resetProtection() {
    this._protection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // purge_on_destroy - computed: false, optional: true, required: false
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

  // reboot - computed: false, optional: true, required: false
  private _reboot?: boolean | cdktf.IResolvable; 
  public get reboot() {
    return this.getBooleanAttribute('reboot');
  }
  public set reboot(value: boolean | cdktf.IResolvable) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // reboot_after_update - computed: false, optional: true, required: false
  private _rebootAfterUpdate?: boolean | cdktf.IResolvable; 
  public get rebootAfterUpdate() {
    return this.getBooleanAttribute('reboot_after_update');
  }
  public set rebootAfterUpdate(value: boolean | cdktf.IResolvable) {
    this._rebootAfterUpdate = value;
  }
  public resetRebootAfterUpdate() {
    this._rebootAfterUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootAfterUpdateInput() {
    return this._rebootAfterUpdate;
  }

  // scsi_hardware - computed: false, optional: true, required: false
  private _scsiHardware?: string; 
  public get scsiHardware() {
    return this.getStringAttribute('scsi_hardware');
  }
  public set scsiHardware(value: string) {
    this._scsiHardware = value;
  }
  public resetScsiHardware() {
    this._scsiHardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiHardwareInput() {
    return this._scsiHardware;
  }

  // started - computed: false, optional: true, required: false
  private _started?: boolean | cdktf.IResolvable; 
  public get started() {
    return this.getBooleanAttribute('started');
  }
  public set started(value: boolean | cdktf.IResolvable) {
    this._started = value;
  }
  public resetStarted() {
    this._started = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }

  // stop_on_destroy - computed: false, optional: true, required: false
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

  // tablet_device - computed: false, optional: true, required: false
  private _tabletDevice?: boolean | cdktf.IResolvable; 
  public get tabletDevice() {
    return this.getBooleanAttribute('tablet_device');
  }
  public set tabletDevice(value: boolean | cdktf.IResolvable) {
    this._tabletDevice = value;
  }
  public resetTabletDevice() {
    this._tabletDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tabletDeviceInput() {
    return this._tabletDevice;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // timeout_clone - computed: false, optional: true, required: false
  private _timeoutClone?: number; 
  public get timeoutClone() {
    return this.getNumberAttribute('timeout_clone');
  }
  public set timeoutClone(value: number) {
    this._timeoutClone = value;
  }
  public resetTimeoutClone() {
    this._timeoutClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutCloneInput() {
    return this._timeoutClone;
  }

  // timeout_create - computed: false, optional: true, required: false
  private _timeoutCreate?: number; 
  public get timeoutCreate() {
    return this.getNumberAttribute('timeout_create');
  }
  public set timeoutCreate(value: number) {
    this._timeoutCreate = value;
  }
  public resetTimeoutCreate() {
    this._timeoutCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutCreateInput() {
    return this._timeoutCreate;
  }

  // timeout_migrate - computed: false, optional: true, required: false
  private _timeoutMigrate?: number; 
  public get timeoutMigrate() {
    return this.getNumberAttribute('timeout_migrate');
  }
  public set timeoutMigrate(value: number) {
    this._timeoutMigrate = value;
  }
  public resetTimeoutMigrate() {
    this._timeoutMigrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMigrateInput() {
    return this._timeoutMigrate;
  }

  // timeout_move_disk - computed: false, optional: true, required: false
  private _timeoutMoveDisk?: number; 
  public get timeoutMoveDisk() {
    return this.getNumberAttribute('timeout_move_disk');
  }
  public set timeoutMoveDisk(value: number) {
    this._timeoutMoveDisk = value;
  }
  public resetTimeoutMoveDisk() {
    this._timeoutMoveDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMoveDiskInput() {
    return this._timeoutMoveDisk;
  }

  // timeout_reboot - computed: false, optional: true, required: false
  private _timeoutReboot?: number; 
  public get timeoutReboot() {
    return this.getNumberAttribute('timeout_reboot');
  }
  public set timeoutReboot(value: number) {
    this._timeoutReboot = value;
  }
  public resetTimeoutReboot() {
    this._timeoutReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutRebootInput() {
    return this._timeoutReboot;
  }

  // timeout_shutdown_vm - computed: false, optional: true, required: false
  private _timeoutShutdownVm?: number; 
  public get timeoutShutdownVm() {
    return this.getNumberAttribute('timeout_shutdown_vm');
  }
  public set timeoutShutdownVm(value: number) {
    this._timeoutShutdownVm = value;
  }
  public resetTimeoutShutdownVm() {
    this._timeoutShutdownVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutShutdownVmInput() {
    return this._timeoutShutdownVm;
  }

  // timeout_start_vm - computed: false, optional: true, required: false
  private _timeoutStartVm?: number; 
  public get timeoutStartVm() {
    return this.getNumberAttribute('timeout_start_vm');
  }
  public set timeoutStartVm(value: number) {
    this._timeoutStartVm = value;
  }
  public resetTimeoutStartVm() {
    this._timeoutStartVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutStartVmInput() {
    return this._timeoutStartVm;
  }

  // timeout_stop_vm - computed: false, optional: true, required: false
  private _timeoutStopVm?: number; 
  public get timeoutStopVm() {
    return this.getNumberAttribute('timeout_stop_vm');
  }
  public set timeoutStopVm(value: number) {
    this._timeoutStopVm = value;
  }
  public resetTimeoutStopVm() {
    this._timeoutStopVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutStopVmInput() {
    return this._timeoutStopVm;
  }

  // vm_id - computed: true, optional: true, required: false
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new VirtualEnvironmentVmAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: VirtualEnvironmentVmAgent) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // amd_sev - computed: false, optional: true, required: false
  private _amdSev = new VirtualEnvironmentVmAmdSevOutputReference(this, "amd_sev");
  public get amdSev() {
    return this._amdSev;
  }
  public putAmdSev(value: VirtualEnvironmentVmAmdSev) {
    this._amdSev.internalValue = value;
  }
  public resetAmdSev() {
    this._amdSev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amdSevInput() {
    return this._amdSev.internalValue;
  }

  // audio_device - computed: false, optional: true, required: false
  private _audioDevice = new VirtualEnvironmentVmAudioDeviceOutputReference(this, "audio_device");
  public get audioDevice() {
    return this._audioDevice;
  }
  public putAudioDevice(value: VirtualEnvironmentVmAudioDevice) {
    this._audioDevice.internalValue = value;
  }
  public resetAudioDevice() {
    this._audioDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioDeviceInput() {
    return this._audioDevice.internalValue;
  }

  // cdrom - computed: false, optional: true, required: false
  private _cdrom = new VirtualEnvironmentVmCdromOutputReference(this, "cdrom");
  public get cdrom() {
    return this._cdrom;
  }
  public putCdrom(value: VirtualEnvironmentVmCdrom) {
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
  private _clone = new VirtualEnvironmentVmCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: VirtualEnvironmentVmClone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new VirtualEnvironmentVmCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: VirtualEnvironmentVmCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new VirtualEnvironmentVmDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VirtualEnvironmentVmDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // efi_disk - computed: false, optional: true, required: false
  private _efiDisk = new VirtualEnvironmentVmEfiDiskOutputReference(this, "efi_disk");
  public get efiDisk() {
    return this._efiDisk;
  }
  public putEfiDisk(value: VirtualEnvironmentVmEfiDisk) {
    this._efiDisk.internalValue = value;
  }
  public resetEfiDisk() {
    this._efiDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiDiskInput() {
    return this._efiDisk.internalValue;
  }

  // hostpci - computed: false, optional: true, required: false
  private _hostpci = new VirtualEnvironmentVmHostpciList(this, "hostpci", false);
  public get hostpci() {
    return this._hostpci;
  }
  public putHostpci(value: VirtualEnvironmentVmHostpci[] | cdktf.IResolvable) {
    this._hostpci.internalValue = value;
  }
  public resetHostpci() {
    this._hostpci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostpciInput() {
    return this._hostpci.internalValue;
  }

  // initialization - computed: false, optional: true, required: false
  private _initialization = new VirtualEnvironmentVmInitializationOutputReference(this, "initialization");
  public get initialization() {
    return this._initialization;
  }
  public putInitialization(value: VirtualEnvironmentVmInitialization) {
    this._initialization.internalValue = value;
  }
  public resetInitialization() {
    this._initialization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationInput() {
    return this._initialization.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new VirtualEnvironmentVmMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: VirtualEnvironmentVmMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // network_device - computed: false, optional: true, required: false
  private _networkDevice = new VirtualEnvironmentVmNetworkDeviceList(this, "network_device", false);
  public get networkDevice() {
    return this._networkDevice;
  }
  public putNetworkDevice(value: VirtualEnvironmentVmNetworkDevice[] | cdktf.IResolvable) {
    this._networkDevice.internalValue = value;
  }
  public resetNetworkDevice() {
    this._networkDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceInput() {
    return this._networkDevice.internalValue;
  }

  // numa - computed: false, optional: true, required: false
  private _numa = new VirtualEnvironmentVmNumaList(this, "numa", false);
  public get numa() {
    return this._numa;
  }
  public putNuma(value: VirtualEnvironmentVmNuma[] | cdktf.IResolvable) {
    this._numa.internalValue = value;
  }
  public resetNuma() {
    this._numa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaInput() {
    return this._numa.internalValue;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem = new VirtualEnvironmentVmOperatingSystemOutputReference(this, "operating_system");
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public putOperatingSystem(value: VirtualEnvironmentVmOperatingSystem) {
    this._operatingSystem.internalValue = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem.internalValue;
  }

  // rng - computed: false, optional: true, required: false
  private _rng = new VirtualEnvironmentVmRngList(this, "rng", false);
  public get rng() {
    return this._rng;
  }
  public putRng(value: VirtualEnvironmentVmRng[] | cdktf.IResolvable) {
    this._rng.internalValue = value;
  }
  public resetRng() {
    this._rng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rngInput() {
    return this._rng.internalValue;
  }

  // serial_device - computed: false, optional: true, required: false
  private _serialDevice = new VirtualEnvironmentVmSerialDeviceList(this, "serial_device", false);
  public get serialDevice() {
    return this._serialDevice;
  }
  public putSerialDevice(value: VirtualEnvironmentVmSerialDevice[] | cdktf.IResolvable) {
    this._serialDevice.internalValue = value;
  }
  public resetSerialDevice() {
    this._serialDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialDeviceInput() {
    return this._serialDevice.internalValue;
  }

  // smbios - computed: false, optional: true, required: false
  private _smbios = new VirtualEnvironmentVmSmbiosOutputReference(this, "smbios");
  public get smbios() {
    return this._smbios;
  }
  public putSmbios(value: VirtualEnvironmentVmSmbios) {
    this._smbios.internalValue = value;
  }
  public resetSmbios() {
    this._smbios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbiosInput() {
    return this._smbios.internalValue;
  }

  // startup - computed: false, optional: true, required: false
  private _startup = new VirtualEnvironmentVmStartupOutputReference(this, "startup");
  public get startup() {
    return this._startup;
  }
  public putStartup(value: VirtualEnvironmentVmStartup) {
    this._startup.internalValue = value;
  }
  public resetStartup() {
    this._startup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupInput() {
    return this._startup.internalValue;
  }

  // tpm_state - computed: false, optional: true, required: false
  private _tpmState = new VirtualEnvironmentVmTpmStateOutputReference(this, "tpm_state");
  public get tpmState() {
    return this._tpmState;
  }
  public putTpmState(value: VirtualEnvironmentVmTpmState) {
    this._tpmState.internalValue = value;
  }
  public resetTpmState() {
    this._tpmState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmStateInput() {
    return this._tpmState.internalValue;
  }

  // usb - computed: false, optional: true, required: false
  private _usb = new VirtualEnvironmentVmUsbList(this, "usb", false);
  public get usb() {
    return this._usb;
  }
  public putUsb(value: VirtualEnvironmentVmUsb[] | cdktf.IResolvable) {
    this._usb.internalValue = value;
  }
  public resetUsb() {
    this._usb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbInput() {
    return this._usb.internalValue;
  }

  // vga - computed: false, optional: true, required: false
  private _vga = new VirtualEnvironmentVmVgaOutputReference(this, "vga");
  public get vga() {
    return this._vga;
  }
  public putVga(value: VirtualEnvironmentVmVga) {
    this._vga.internalValue = value;
  }
  public resetVga() {
    this._vga.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgaInput() {
    return this._vga.internalValue;
  }

  // virtiofs - computed: false, optional: true, required: false
  private _virtiofs = new VirtualEnvironmentVmVirtiofsList(this, "virtiofs", false);
  public get virtiofs() {
    return this._virtiofs;
  }
  public putVirtiofs(value: VirtualEnvironmentVmVirtiofs[] | cdktf.IResolvable) {
    this._virtiofs.internalValue = value;
  }
  public resetVirtiofs() {
    this._virtiofs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtiofsInput() {
    return this._virtiofs.internalValue;
  }

  // watchdog - computed: false, optional: true, required: false
  private _watchdog = new VirtualEnvironmentVmWatchdogOutputReference(this, "watchdog");
  public get watchdog() {
    return this._watchdog;
  }
  public putWatchdog(value: VirtualEnvironmentVmWatchdog) {
    this._watchdog.internalValue = value;
  }
  public resetWatchdog() {
    this._watchdog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogInput() {
    return this._watchdog.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acpi: cdktf.booleanToTerraform(this._acpi),
      bios: cdktf.stringToTerraform(this._bios),
      boot_order: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bootOrder),
      delete_unreferenced_disks_on_destroy: cdktf.booleanToTerraform(this._deleteUnreferencedDisksOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      hook_script_file_id: cdktf.stringToTerraform(this._hookScriptFileId),
      id: cdktf.stringToTerraform(this._id),
      keyboard_layout: cdktf.stringToTerraform(this._keyboardLayout),
      kvm_arguments: cdktf.stringToTerraform(this._kvmArguments),
      mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macAddresses),
      machine: cdktf.stringToTerraform(this._machine),
      migrate: cdktf.booleanToTerraform(this._migrate),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      on_boot: cdktf.booleanToTerraform(this._onBoot),
      pool_id: cdktf.stringToTerraform(this._poolId),
      protection: cdktf.booleanToTerraform(this._protection),
      purge_on_destroy: cdktf.booleanToTerraform(this._purgeOnDestroy),
      reboot: cdktf.booleanToTerraform(this._reboot),
      reboot_after_update: cdktf.booleanToTerraform(this._rebootAfterUpdate),
      scsi_hardware: cdktf.stringToTerraform(this._scsiHardware),
      started: cdktf.booleanToTerraform(this._started),
      stop_on_destroy: cdktf.booleanToTerraform(this._stopOnDestroy),
      tablet_device: cdktf.booleanToTerraform(this._tabletDevice),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.booleanToTerraform(this._template),
      timeout_clone: cdktf.numberToTerraform(this._timeoutClone),
      timeout_create: cdktf.numberToTerraform(this._timeoutCreate),
      timeout_migrate: cdktf.numberToTerraform(this._timeoutMigrate),
      timeout_move_disk: cdktf.numberToTerraform(this._timeoutMoveDisk),
      timeout_reboot: cdktf.numberToTerraform(this._timeoutReboot),
      timeout_shutdown_vm: cdktf.numberToTerraform(this._timeoutShutdownVm),
      timeout_start_vm: cdktf.numberToTerraform(this._timeoutStartVm),
      timeout_stop_vm: cdktf.numberToTerraform(this._timeoutStopVm),
      vm_id: cdktf.numberToTerraform(this._vmId),
      agent: virtualEnvironmentVmAgentToTerraform(this._agent.internalValue),
      amd_sev: virtualEnvironmentVmAmdSevToTerraform(this._amdSev.internalValue),
      audio_device: virtualEnvironmentVmAudioDeviceToTerraform(this._audioDevice.internalValue),
      cdrom: virtualEnvironmentVmCdromToTerraform(this._cdrom.internalValue),
      clone: virtualEnvironmentVmCloneToTerraform(this._clone.internalValue),
      cpu: virtualEnvironmentVmCpuToTerraform(this._cpu.internalValue),
      disk: cdktf.listMapper(virtualEnvironmentVmDiskToTerraform, true)(this._disk.internalValue),
      efi_disk: virtualEnvironmentVmEfiDiskToTerraform(this._efiDisk.internalValue),
      hostpci: cdktf.listMapper(virtualEnvironmentVmHostpciToTerraform, true)(this._hostpci.internalValue),
      initialization: virtualEnvironmentVmInitializationToTerraform(this._initialization.internalValue),
      memory: virtualEnvironmentVmMemoryToTerraform(this._memory.internalValue),
      network_device: cdktf.listMapper(virtualEnvironmentVmNetworkDeviceToTerraform, true)(this._networkDevice.internalValue),
      numa: cdktf.listMapper(virtualEnvironmentVmNumaToTerraform, true)(this._numa.internalValue),
      operating_system: virtualEnvironmentVmOperatingSystemToTerraform(this._operatingSystem.internalValue),
      rng: cdktf.listMapper(virtualEnvironmentVmRngToTerraform, true)(this._rng.internalValue),
      serial_device: cdktf.listMapper(virtualEnvironmentVmSerialDeviceToTerraform, true)(this._serialDevice.internalValue),
      smbios: virtualEnvironmentVmSmbiosToTerraform(this._smbios.internalValue),
      startup: virtualEnvironmentVmStartupToTerraform(this._startup.internalValue),
      tpm_state: virtualEnvironmentVmTpmStateToTerraform(this._tpmState.internalValue),
      usb: cdktf.listMapper(virtualEnvironmentVmUsbToTerraform, true)(this._usb.internalValue),
      vga: virtualEnvironmentVmVgaToTerraform(this._vga.internalValue),
      virtiofs: cdktf.listMapper(virtualEnvironmentVmVirtiofsToTerraform, true)(this._virtiofs.internalValue),
      watchdog: virtualEnvironmentVmWatchdogToTerraform(this._watchdog.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acpi: {
        value: cdktf.booleanToHclTerraform(this._acpi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bios: {
        value: cdktf.stringToHclTerraform(this._bios),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_order: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bootOrder),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      hook_script_file_id: {
        value: cdktf.stringToHclTerraform(this._hookScriptFileId),
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
      keyboard_layout: {
        value: cdktf.stringToHclTerraform(this._keyboardLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kvm_arguments: {
        value: cdktf.stringToHclTerraform(this._kvmArguments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrate: {
        value: cdktf.booleanToHclTerraform(this._migrate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      on_boot: {
        value: cdktf.booleanToHclTerraform(this._onBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection: {
        value: cdktf.booleanToHclTerraform(this._protection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      purge_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._purgeOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reboot: {
        value: cdktf.booleanToHclTerraform(this._reboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reboot_after_update: {
        value: cdktf.booleanToHclTerraform(this._rebootAfterUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scsi_hardware: {
        value: cdktf.stringToHclTerraform(this._scsiHardware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      started: {
        value: cdktf.booleanToHclTerraform(this._started),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stop_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._stopOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tablet_device: {
        value: cdktf.booleanToHclTerraform(this._tabletDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.booleanToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout_clone: {
        value: cdktf.numberToHclTerraform(this._timeoutClone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_create: {
        value: cdktf.numberToHclTerraform(this._timeoutCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_migrate: {
        value: cdktf.numberToHclTerraform(this._timeoutMigrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_move_disk: {
        value: cdktf.numberToHclTerraform(this._timeoutMoveDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_reboot: {
        value: cdktf.numberToHclTerraform(this._timeoutReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_shutdown_vm: {
        value: cdktf.numberToHclTerraform(this._timeoutShutdownVm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_start_vm: {
        value: cdktf.numberToHclTerraform(this._timeoutStartVm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_stop_vm: {
        value: cdktf.numberToHclTerraform(this._timeoutStopVm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vm_id: {
        value: cdktf.numberToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      agent: {
        value: virtualEnvironmentVmAgentToHclTerraform(this._agent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmAgentList",
      },
      amd_sev: {
        value: virtualEnvironmentVmAmdSevToHclTerraform(this._amdSev.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmAmdSevList",
      },
      audio_device: {
        value: virtualEnvironmentVmAudioDeviceToHclTerraform(this._audioDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmAudioDeviceList",
      },
      cdrom: {
        value: virtualEnvironmentVmCdromToHclTerraform(this._cdrom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmCdromList",
      },
      clone: {
        value: virtualEnvironmentVmCloneToHclTerraform(this._clone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmCloneList",
      },
      cpu: {
        value: virtualEnvironmentVmCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmCpuList",
      },
      disk: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmDiskList",
      },
      efi_disk: {
        value: virtualEnvironmentVmEfiDiskToHclTerraform(this._efiDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmEfiDiskList",
      },
      hostpci: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmHostpciToHclTerraform, true)(this._hostpci.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmHostpciList",
      },
      initialization: {
        value: virtualEnvironmentVmInitializationToHclTerraform(this._initialization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmInitializationList",
      },
      memory: {
        value: virtualEnvironmentVmMemoryToHclTerraform(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmMemoryList",
      },
      network_device: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmNetworkDeviceToHclTerraform, true)(this._networkDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmNetworkDeviceList",
      },
      numa: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmNumaToHclTerraform, true)(this._numa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmNumaList",
      },
      operating_system: {
        value: virtualEnvironmentVmOperatingSystemToHclTerraform(this._operatingSystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmOperatingSystemList",
      },
      rng: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmRngToHclTerraform, true)(this._rng.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmRngList",
      },
      serial_device: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmSerialDeviceToHclTerraform, true)(this._serialDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmSerialDeviceList",
      },
      smbios: {
        value: virtualEnvironmentVmSmbiosToHclTerraform(this._smbios.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmSmbiosList",
      },
      startup: {
        value: virtualEnvironmentVmStartupToHclTerraform(this._startup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmStartupList",
      },
      tpm_state: {
        value: virtualEnvironmentVmTpmStateToHclTerraform(this._tpmState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmTpmStateList",
      },
      usb: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmUsbToHclTerraform, true)(this._usb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmUsbList",
      },
      vga: {
        value: virtualEnvironmentVmVgaToHclTerraform(this._vga.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmVgaList",
      },
      virtiofs: {
        value: cdktf.listMapperHcl(virtualEnvironmentVmVirtiofsToHclTerraform, true)(this._virtiofs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmVirtiofsList",
      },
      watchdog: {
        value: virtualEnvironmentVmWatchdogToHclTerraform(this._watchdog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentVmWatchdogList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
