// https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmQemuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Value in second to wait after some operations, useful if system is not fast or during I/O intensive parallel terraform tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#additional_wait VmQemu#additional_wait}
  */
  readonly additionalWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#agent VmQemu#agent}
  */
  readonly agent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#args VmQemu#args}
  */
  readonly args?: string;
  /**
  * Automatically reboot the VM if any of the modified parameters requires a reboot to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#automatic_reboot VmQemu#automatic_reboot}
  */
  readonly automaticReboot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#balloon VmQemu#balloon}
  */
  readonly balloon?: number;
  /**
  * The VM bios, it can be seabios or ovmf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#bios VmQemu#bios}
  */
  readonly bios?: string;
  /**
  * Boot order of the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#boot VmQemu#boot}
  */
  readonly boot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#bootdisk VmQemu#bootdisk}
  */
  readonly bootdisk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#bridge VmQemu#bridge}
  */
  readonly bridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ci_wait VmQemu#ci_wait}
  */
  readonly ciWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#cicustom VmQemu#cicustom}
  */
  readonly cicustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#cipassword VmQemu#cipassword}
  */
  readonly cipassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ciuser VmQemu#ciuser}
  */
  readonly ciuser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#clone VmQemu#clone}
  */
  readonly clone?: string;
  /**
  * Value in second to wait after a VM has been cloned, useful if system is not fast or during I/O intensive parallel terraform tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#clone_wait VmQemu#clone_wait}
  */
  readonly cloneWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#cloudinit_cdrom_storage VmQemu#cloudinit_cdrom_storage}
  */
  readonly cloudinitCdromStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#cores VmQemu#cores}
  */
  readonly cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#cpu VmQemu#cpu}
  */
  readonly cpu?: string;
  /**
  * By default define SSH for provisioner info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#define_connection_info VmQemu#define_connection_info}
  */
  readonly defineConnectionInfo?: boolean | cdktf.IResolvable;
  /**
  * The VM description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#desc VmQemu#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#disk_gb VmQemu#disk_gb}
  */
  readonly diskGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#force_create VmQemu#force_create}
  */
  readonly forceCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#force_recreate_on_change_of VmQemu#force_recreate_on_change_of}
  */
  readonly forceRecreateOnChangeOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#full_clone VmQemu#full_clone}
  */
  readonly fullClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#guest_agent_ready_timeout VmQemu#guest_agent_ready_timeout}
  */
  readonly guestAgentReadyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#hagroup VmQemu#hagroup}
  */
  readonly hagroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#hastate VmQemu#hastate}
  */
  readonly hastate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#hotplug VmQemu#hotplug}
  */
  readonly hotplug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#id VmQemu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig0 VmQemu#ipconfig0}
  */
  readonly ipconfig0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig1 VmQemu#ipconfig1}
  */
  readonly ipconfig1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig10 VmQemu#ipconfig10}
  */
  readonly ipconfig10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig11 VmQemu#ipconfig11}
  */
  readonly ipconfig11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig12 VmQemu#ipconfig12}
  */
  readonly ipconfig12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig13 VmQemu#ipconfig13}
  */
  readonly ipconfig13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig14 VmQemu#ipconfig14}
  */
  readonly ipconfig14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig15 VmQemu#ipconfig15}
  */
  readonly ipconfig15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig2 VmQemu#ipconfig2}
  */
  readonly ipconfig2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig3 VmQemu#ipconfig3}
  */
  readonly ipconfig3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig4 VmQemu#ipconfig4}
  */
  readonly ipconfig4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig5 VmQemu#ipconfig5}
  */
  readonly ipconfig5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig6 VmQemu#ipconfig6}
  */
  readonly ipconfig6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig7 VmQemu#ipconfig7}
  */
  readonly ipconfig7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig8 VmQemu#ipconfig8}
  */
  readonly ipconfig8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ipconfig9 VmQemu#ipconfig9}
  */
  readonly ipconfig9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iso VmQemu#iso}
  */
  readonly iso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#kvm VmQemu#kvm}
  */
  readonly kvm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#mac VmQemu#mac}
  */
  readonly mac?: string;
  /**
  * Specifies the Qemu machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#machine VmQemu#machine}
  */
  readonly machine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#memory VmQemu#memory}
  */
  readonly memory?: number;
  /**
  * The VM name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#name VmQemu#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#nameserver VmQemu#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#nic VmQemu#nic}
  */
  readonly nic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#numa VmQemu#numa}
  */
  readonly numa?: boolean | cdktf.IResolvable;
  /**
  * VM autostart on boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#onboot VmQemu#onboot}
  */
  readonly onboot?: boolean | cdktf.IResolvable;
  /**
  * VM autostart on create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#oncreate VmQemu#oncreate}
  */
  readonly oncreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#os_network_config VmQemu#os_network_config}
  */
  readonly osNetworkConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#os_type VmQemu#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#pool VmQemu#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#preprovision VmQemu#preprovision}
  */
  readonly preprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#pxe VmQemu#pxe}
  */
  readonly pxe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#qemu_os VmQemu#qemu_os}
  */
  readonly qemuOs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#scsihw VmQemu#scsihw}
  */
  readonly scsihw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#searchdomain VmQemu#searchdomain}
  */
  readonly searchdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#sockets VmQemu#sockets}
  */
  readonly sockets?: number;
  /**
  * Use to pass instance ip address, redundant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ssh_forward_ip VmQemu#ssh_forward_ip}
  */
  readonly sshForwardIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ssh_private_key VmQemu#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ssh_user VmQemu#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#sshkeys VmQemu#sshkeys}
  */
  readonly sshkeys?: string;
  /**
  * Startup order of the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#startup VmQemu#startup}
  */
  readonly startup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#storage VmQemu#storage}
  */
  readonly storage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#storage_type VmQemu#storage_type}
  */
  readonly storageType?: string;
  /**
  * Enable tablet mode in the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#tablet VmQemu#tablet}
  */
  readonly tablet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#tags VmQemu#tags}
  */
  readonly tags?: string;
  /**
  * The node where VM goes to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#target_node VmQemu#target_node}
  */
  readonly targetNode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#vcpus VmQemu#vcpus}
  */
  readonly vcpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#vlan VmQemu#vlan}
  */
  readonly vlan?: number;
  /**
  * The VM identifier in proxmox (100-999999999)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#vmid VmQemu#vmid}
  */
  readonly vmid?: number;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#disk VmQemu#disk}
  */
  readonly disk?: VmQemuDisk[] | cdktf.IResolvable;
  /**
  * hostpci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#hostpci VmQemu#hostpci}
  */
  readonly hostpci?: VmQemuHostpci[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#network VmQemu#network}
  */
  readonly network?: VmQemuNetwork[] | cdktf.IResolvable;
  /**
  * serial block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#serial VmQemu#serial}
  */
  readonly serial?: VmQemuSerial[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#timeouts VmQemu#timeouts}
  */
  readonly timeouts?: VmQemuTimeouts;
  /**
  * usb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#usb VmQemu#usb}
  */
  readonly usb?: VmQemuUsb[] | cdktf.IResolvable;
  /**
  * vga block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#vga VmQemu#vga}
  */
  readonly vga?: VmQemuVga[] | cdktf.IResolvable;
}
export interface VmQemuUnusedDisk {
}

export function vmQemuUnusedDiskToTerraform(struct?: VmQemuUnusedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmQemuUnusedDiskToHclTerraform(struct?: VmQemuUnusedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmQemuUnusedDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuUnusedDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuUnusedDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  public get file() {
    return this.getStringAttribute('file');
  }

  // slot - computed: true, optional: false, required: false
  public get slot() {
    return this.getNumberAttribute('slot');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getStringAttribute('storage');
  }
}

export class VmQemuUnusedDiskList extends cdktf.ComplexList {

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
  public get(index: number): VmQemuUnusedDiskOutputReference {
    return new VmQemuUnusedDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#aio VmQemu#aio}
  */
  readonly aio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#backup VmQemu#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#cache VmQemu#cache}
  */
  readonly cache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#discard VmQemu#discard}
  */
  readonly discard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#file VmQemu#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#format VmQemu#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops VmQemu#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_max VmQemu#iops_max}
  */
  readonly iopsMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_max_length VmQemu#iops_max_length}
  */
  readonly iopsMaxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_rd VmQemu#iops_rd}
  */
  readonly iopsRd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_rd_max VmQemu#iops_rd_max}
  */
  readonly iopsRdMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_rd_max_length VmQemu#iops_rd_max_length}
  */
  readonly iopsRdMaxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_wr VmQemu#iops_wr}
  */
  readonly iopsWr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_wr_max VmQemu#iops_wr_max}
  */
  readonly iopsWrMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iops_wr_max_length VmQemu#iops_wr_max_length}
  */
  readonly iopsWrMaxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#iothread VmQemu#iothread}
  */
  readonly iothread?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#mbps VmQemu#mbps}
  */
  readonly mbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#mbps_rd VmQemu#mbps_rd}
  */
  readonly mbpsRd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#mbps_rd_max VmQemu#mbps_rd_max}
  */
  readonly mbpsRdMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#mbps_wr VmQemu#mbps_wr}
  */
  readonly mbpsWr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#mbps_wr_max VmQemu#mbps_wr_max}
  */
  readonly mbpsWrMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#media VmQemu#media}
  */
  readonly media?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#replicate VmQemu#replicate}
  */
  readonly replicate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#size VmQemu#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#slot VmQemu#slot}
  */
  readonly slot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#ssd VmQemu#ssd}
  */
  readonly ssd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#storage VmQemu#storage}
  */
  readonly storage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#type VmQemu#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#volume VmQemu#volume}
  */
  readonly volume?: string;
}

export function vmQemuDiskToTerraform(struct?: VmQemuDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aio: cdktf.stringToTerraform(struct!.aio),
    backup: cdktf.booleanToTerraform(struct!.backup),
    cache: cdktf.stringToTerraform(struct!.cache),
    discard: cdktf.stringToTerraform(struct!.discard),
    file: cdktf.stringToTerraform(struct!.file),
    format: cdktf.stringToTerraform(struct!.format),
    iops: cdktf.numberToTerraform(struct!.iops),
    iops_max: cdktf.numberToTerraform(struct!.iopsMax),
    iops_max_length: cdktf.numberToTerraform(struct!.iopsMaxLength),
    iops_rd: cdktf.numberToTerraform(struct!.iopsRd),
    iops_rd_max: cdktf.numberToTerraform(struct!.iopsRdMax),
    iops_rd_max_length: cdktf.numberToTerraform(struct!.iopsRdMaxLength),
    iops_wr: cdktf.numberToTerraform(struct!.iopsWr),
    iops_wr_max: cdktf.numberToTerraform(struct!.iopsWrMax),
    iops_wr_max_length: cdktf.numberToTerraform(struct!.iopsWrMaxLength),
    iothread: cdktf.numberToTerraform(struct!.iothread),
    mbps: cdktf.numberToTerraform(struct!.mbps),
    mbps_rd: cdktf.numberToTerraform(struct!.mbpsRd),
    mbps_rd_max: cdktf.numberToTerraform(struct!.mbpsRdMax),
    mbps_wr: cdktf.numberToTerraform(struct!.mbpsWr),
    mbps_wr_max: cdktf.numberToTerraform(struct!.mbpsWrMax),
    media: cdktf.stringToTerraform(struct!.media),
    replicate: cdktf.numberToTerraform(struct!.replicate),
    size: cdktf.stringToTerraform(struct!.size),
    slot: cdktf.numberToTerraform(struct!.slot),
    ssd: cdktf.numberToTerraform(struct!.ssd),
    storage: cdktf.stringToTerraform(struct!.storage),
    type: cdktf.stringToTerraform(struct!.type),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function vmQemuDiskToHclTerraform(struct?: VmQemuDisk | cdktf.IResolvable): any {
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
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_max: {
      value: cdktf.numberToHclTerraform(struct!.iopsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_max_length: {
      value: cdktf.numberToHclTerraform(struct!.iopsMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_rd: {
      value: cdktf.numberToHclTerraform(struct!.iopsRd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_rd_max: {
      value: cdktf.numberToHclTerraform(struct!.iopsRdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_rd_max_length: {
      value: cdktf.numberToHclTerraform(struct!.iopsRdMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_wr: {
      value: cdktf.numberToHclTerraform(struct!.iopsWr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_wr_max: {
      value: cdktf.numberToHclTerraform(struct!.iopsWrMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iops_wr_max_length: {
      value: cdktf.numberToHclTerraform(struct!.iopsWrMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iothread: {
      value: cdktf.numberToHclTerraform(struct!.iothread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbps: {
      value: cdktf.numberToHclTerraform(struct!.mbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbps_rd: {
      value: cdktf.numberToHclTerraform(struct!.mbpsRd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbps_rd_max: {
      value: cdktf.numberToHclTerraform(struct!.mbpsRdMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbps_wr: {
      value: cdktf.numberToHclTerraform(struct!.mbpsWr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbps_wr_max: {
      value: cdktf.numberToHclTerraform(struct!.mbpsWrMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    media: {
      value: cdktf.stringToHclTerraform(struct!.media),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicate: {
      value: cdktf.numberToHclTerraform(struct!.replicate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.numberToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssd: {
      value: cdktf.numberToHclTerraform(struct!.ssd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
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
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmQemuDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuDisk | cdktf.IResolvable | undefined {
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
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._iopsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsMax = this._iopsMax;
    }
    if (this._iopsMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsMaxLength = this._iopsMaxLength;
    }
    if (this._iopsRd !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsRd = this._iopsRd;
    }
    if (this._iopsRdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsRdMax = this._iopsRdMax;
    }
    if (this._iopsRdMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsRdMaxLength = this._iopsRdMaxLength;
    }
    if (this._iopsWr !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsWr = this._iopsWr;
    }
    if (this._iopsWrMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsWrMax = this._iopsWrMax;
    }
    if (this._iopsWrMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsWrMaxLength = this._iopsWrMaxLength;
    }
    if (this._iothread !== undefined) {
      hasAnyValues = true;
      internalValueResult.iothread = this._iothread;
    }
    if (this._mbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbps = this._mbps;
    }
    if (this._mbpsRd !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbpsRd = this._mbpsRd;
    }
    if (this._mbpsRdMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbpsRdMax = this._mbpsRdMax;
    }
    if (this._mbpsWr !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbpsWr = this._mbpsWr;
    }
    if (this._mbpsWrMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbpsWrMax = this._mbpsWrMax;
    }
    if (this._media !== undefined) {
      hasAnyValues = true;
      internalValueResult.media = this._media;
    }
    if (this._replicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicate = this._replicate;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    if (this._ssd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssd = this._ssd;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aio = undefined;
      this._backup = undefined;
      this._cache = undefined;
      this._discard = undefined;
      this._file = undefined;
      this._format = undefined;
      this._iops = undefined;
      this._iopsMax = undefined;
      this._iopsMaxLength = undefined;
      this._iopsRd = undefined;
      this._iopsRdMax = undefined;
      this._iopsRdMaxLength = undefined;
      this._iopsWr = undefined;
      this._iopsWrMax = undefined;
      this._iopsWrMaxLength = undefined;
      this._iothread = undefined;
      this._mbps = undefined;
      this._mbpsRd = undefined;
      this._mbpsRdMax = undefined;
      this._mbpsWr = undefined;
      this._mbpsWrMax = undefined;
      this._media = undefined;
      this._replicate = undefined;
      this._size = undefined;
      this._slot = undefined;
      this._ssd = undefined;
      this._storage = undefined;
      this._type = undefined;
      this._volume = undefined;
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
      this._discard = value.discard;
      this._file = value.file;
      this._format = value.format;
      this._iops = value.iops;
      this._iopsMax = value.iopsMax;
      this._iopsMaxLength = value.iopsMaxLength;
      this._iopsRd = value.iopsRd;
      this._iopsRdMax = value.iopsRdMax;
      this._iopsRdMaxLength = value.iopsRdMaxLength;
      this._iopsWr = value.iopsWr;
      this._iopsWrMax = value.iopsWrMax;
      this._iopsWrMaxLength = value.iopsWrMaxLength;
      this._iothread = value.iothread;
      this._mbps = value.mbps;
      this._mbpsRd = value.mbpsRd;
      this._mbpsRdMax = value.mbpsRdMax;
      this._mbpsWr = value.mbpsWr;
      this._mbpsWrMax = value.mbpsWrMax;
      this._media = value.media;
      this._replicate = value.replicate;
      this._size = value.size;
      this._slot = value.slot;
      this._ssd = value.ssd;
      this._storage = value.storage;
      this._type = value.type;
      this._volume = value.volume;
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

  // file - computed: true, optional: true, required: false
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

  // format - computed: true, optional: true, required: false
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

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // iops_max - computed: false, optional: true, required: false
  private _iopsMax?: number; 
  public get iopsMax() {
    return this.getNumberAttribute('iops_max');
  }
  public set iopsMax(value: number) {
    this._iopsMax = value;
  }
  public resetIopsMax() {
    this._iopsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsMaxInput() {
    return this._iopsMax;
  }

  // iops_max_length - computed: false, optional: true, required: false
  private _iopsMaxLength?: number; 
  public get iopsMaxLength() {
    return this.getNumberAttribute('iops_max_length');
  }
  public set iopsMaxLength(value: number) {
    this._iopsMaxLength = value;
  }
  public resetIopsMaxLength() {
    this._iopsMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsMaxLengthInput() {
    return this._iopsMaxLength;
  }

  // iops_rd - computed: false, optional: true, required: false
  private _iopsRd?: number; 
  public get iopsRd() {
    return this.getNumberAttribute('iops_rd');
  }
  public set iopsRd(value: number) {
    this._iopsRd = value;
  }
  public resetIopsRd() {
    this._iopsRd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsRdInput() {
    return this._iopsRd;
  }

  // iops_rd_max - computed: false, optional: true, required: false
  private _iopsRdMax?: number; 
  public get iopsRdMax() {
    return this.getNumberAttribute('iops_rd_max');
  }
  public set iopsRdMax(value: number) {
    this._iopsRdMax = value;
  }
  public resetIopsRdMax() {
    this._iopsRdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsRdMaxInput() {
    return this._iopsRdMax;
  }

  // iops_rd_max_length - computed: false, optional: true, required: false
  private _iopsRdMaxLength?: number; 
  public get iopsRdMaxLength() {
    return this.getNumberAttribute('iops_rd_max_length');
  }
  public set iopsRdMaxLength(value: number) {
    this._iopsRdMaxLength = value;
  }
  public resetIopsRdMaxLength() {
    this._iopsRdMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsRdMaxLengthInput() {
    return this._iopsRdMaxLength;
  }

  // iops_wr - computed: false, optional: true, required: false
  private _iopsWr?: number; 
  public get iopsWr() {
    return this.getNumberAttribute('iops_wr');
  }
  public set iopsWr(value: number) {
    this._iopsWr = value;
  }
  public resetIopsWr() {
    this._iopsWr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsWrInput() {
    return this._iopsWr;
  }

  // iops_wr_max - computed: false, optional: true, required: false
  private _iopsWrMax?: number; 
  public get iopsWrMax() {
    return this.getNumberAttribute('iops_wr_max');
  }
  public set iopsWrMax(value: number) {
    this._iopsWrMax = value;
  }
  public resetIopsWrMax() {
    this._iopsWrMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsWrMaxInput() {
    return this._iopsWrMax;
  }

  // iops_wr_max_length - computed: false, optional: true, required: false
  private _iopsWrMaxLength?: number; 
  public get iopsWrMaxLength() {
    return this.getNumberAttribute('iops_wr_max_length');
  }
  public set iopsWrMaxLength(value: number) {
    this._iopsWrMaxLength = value;
  }
  public resetIopsWrMaxLength() {
    this._iopsWrMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsWrMaxLengthInput() {
    return this._iopsWrMaxLength;
  }

  // iothread - computed: false, optional: true, required: false
  private _iothread?: number; 
  public get iothread() {
    return this.getNumberAttribute('iothread');
  }
  public set iothread(value: number) {
    this._iothread = value;
  }
  public resetIothread() {
    this._iothread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iothreadInput() {
    return this._iothread;
  }

  // mbps - computed: false, optional: true, required: false
  private _mbps?: number; 
  public get mbps() {
    return this.getNumberAttribute('mbps');
  }
  public set mbps(value: number) {
    this._mbps = value;
  }
  public resetMbps() {
    this._mbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpsInput() {
    return this._mbps;
  }

  // mbps_rd - computed: false, optional: true, required: false
  private _mbpsRd?: number; 
  public get mbpsRd() {
    return this.getNumberAttribute('mbps_rd');
  }
  public set mbpsRd(value: number) {
    this._mbpsRd = value;
  }
  public resetMbpsRd() {
    this._mbpsRd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpsRdInput() {
    return this._mbpsRd;
  }

  // mbps_rd_max - computed: false, optional: true, required: false
  private _mbpsRdMax?: number; 
  public get mbpsRdMax() {
    return this.getNumberAttribute('mbps_rd_max');
  }
  public set mbpsRdMax(value: number) {
    this._mbpsRdMax = value;
  }
  public resetMbpsRdMax() {
    this._mbpsRdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpsRdMaxInput() {
    return this._mbpsRdMax;
  }

  // mbps_wr - computed: false, optional: true, required: false
  private _mbpsWr?: number; 
  public get mbpsWr() {
    return this.getNumberAttribute('mbps_wr');
  }
  public set mbpsWr(value: number) {
    this._mbpsWr = value;
  }
  public resetMbpsWr() {
    this._mbpsWr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpsWrInput() {
    return this._mbpsWr;
  }

  // mbps_wr_max - computed: false, optional: true, required: false
  private _mbpsWrMax?: number; 
  public get mbpsWrMax() {
    return this.getNumberAttribute('mbps_wr_max');
  }
  public set mbpsWrMax(value: number) {
    this._mbpsWrMax = value;
  }
  public resetMbpsWrMax() {
    this._mbpsWrMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpsWrMaxInput() {
    return this._mbpsWrMax;
  }

  // media - computed: true, optional: true, required: false
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
  private _replicate?: number; 
  public get replicate() {
    return this.getNumberAttribute('replicate');
  }
  public set replicate(value: number) {
    this._replicate = value;
  }
  public resetReplicate() {
    this._replicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateInput() {
    return this._replicate;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // slot - computed: true, optional: true, required: false
  private _slot?: number; 
  public get slot() {
    return this.getNumberAttribute('slot');
  }
  public set slot(value: number) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // ssd - computed: false, optional: true, required: false
  private _ssd?: number; 
  public get ssd() {
    return this.getNumberAttribute('ssd');
  }
  public set ssd(value: number) {
    this._ssd = value;
  }
  public resetSsd() {
    this._ssd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdInput() {
    return this._ssd;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
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

  // volume - computed: true, optional: true, required: false
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class VmQemuDiskList extends cdktf.ComplexList {
  public internalValue? : VmQemuDisk[] | cdktf.IResolvable

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
  public get(index: number): VmQemuDiskOutputReference {
    return new VmQemuDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuHostpci {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#host VmQemu#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#pcie VmQemu#pcie}
  */
  readonly pcie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#rombar VmQemu#rombar}
  */
  readonly rombar?: number;
}

export function vmQemuHostpciToTerraform(struct?: VmQemuHostpci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    pcie: cdktf.numberToTerraform(struct!.pcie),
    rombar: cdktf.numberToTerraform(struct!.rombar),
  }
}


export function vmQemuHostpciToHclTerraform(struct?: VmQemuHostpci | cdktf.IResolvable): any {
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
    pcie: {
      value: cdktf.numberToHclTerraform(struct!.pcie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rombar: {
      value: cdktf.numberToHclTerraform(struct!.rombar),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmQemuHostpciOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuHostpci | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._pcie !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcie = this._pcie;
    }
    if (this._rombar !== undefined) {
      hasAnyValues = true;
      internalValueResult.rombar = this._rombar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuHostpci | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._pcie = undefined;
      this._rombar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._pcie = value.pcie;
      this._rombar = value.rombar;
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

  // pcie - computed: false, optional: true, required: false
  private _pcie?: number; 
  public get pcie() {
    return this.getNumberAttribute('pcie');
  }
  public set pcie(value: number) {
    this._pcie = value;
  }
  public resetPcie() {
    this._pcie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieInput() {
    return this._pcie;
  }

  // rombar - computed: false, optional: true, required: false
  private _rombar?: number; 
  public get rombar() {
    return this.getNumberAttribute('rombar');
  }
  public set rombar(value: number) {
    this._rombar = value;
  }
  public resetRombar() {
    this._rombar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rombarInput() {
    return this._rombar;
  }
}

export class VmQemuHostpciList extends cdktf.ComplexList {
  public internalValue? : VmQemuHostpci[] | cdktf.IResolvable

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
  public get(index: number): VmQemuHostpciOutputReference {
    return new VmQemuHostpciOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#bridge VmQemu#bridge}
  */
  readonly bridge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#firewall VmQemu#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#link_down VmQemu#link_down}
  */
  readonly linkDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#macaddr VmQemu#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#model VmQemu#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#mtu VmQemu#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#queues VmQemu#queues}
  */
  readonly queues?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#rate VmQemu#rate}
  */
  readonly rate?: number;
  /**
  * VLAN tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#tag VmQemu#tag}
  */
  readonly tag?: number;
}

export function vmQemuNetworkToTerraform(struct?: VmQemuNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    firewall: cdktf.booleanToTerraform(struct!.firewall),
    link_down: cdktf.booleanToTerraform(struct!.linkDown),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    model: cdktf.stringToTerraform(struct!.model),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    queues: cdktf.numberToTerraform(struct!.queues),
    rate: cdktf.numberToTerraform(struct!.rate),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function vmQemuNetworkToHclTerraform(struct?: VmQemuNetwork | cdktf.IResolvable): any {
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
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
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
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmQemuNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuNetwork | cdktf.IResolvable | undefined {
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
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
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
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._firewall = undefined;
      this._linkDown = undefined;
      this._macaddr = undefined;
      this._model = undefined;
      this._mtu = undefined;
      this._queues = undefined;
      this._rate = undefined;
      this._tag = undefined;
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
      this._macaddr = value.macaddr;
      this._model = value.model;
      this._mtu = value.mtu;
      this._queues = value.queues;
      this._rate = value.rate;
      this._tag = value.tag;
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

  // macaddr - computed: true, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
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

  // queues - computed: true, optional: true, required: false
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

  // rate - computed: true, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
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
}

export class VmQemuNetworkList extends cdktf.ComplexList {
  public internalValue? : VmQemuNetwork[] | cdktf.IResolvable

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
  public get(index: number): VmQemuNetworkOutputReference {
    return new VmQemuNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuSerial {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#id VmQemu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#type VmQemu#type}
  */
  readonly type: string;
}

export function vmQemuSerialToTerraform(struct?: VmQemuSerial | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vmQemuSerialToHclTerraform(struct?: VmQemuSerial | cdktf.IResolvable): any {
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

export class VmQemuSerialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuSerial | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuSerial | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
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
}

export class VmQemuSerialList extends cdktf.ComplexList {
  public internalValue? : VmQemuSerial[] | cdktf.IResolvable

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
  public get(index: number): VmQemuSerialOutputReference {
    return new VmQemuSerialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#create VmQemu#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#default VmQemu#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#delete VmQemu#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#read VmQemu#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#update VmQemu#update}
  */
  readonly update?: string;
}

export function vmQemuTimeoutsToTerraform(struct?: VmQemuTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vmQemuTimeoutsToHclTerraform(struct?: VmQemuTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class VmQemuTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmQemuTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: VmQemuTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface VmQemuUsb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#host VmQemu#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#usb3 VmQemu#usb3}
  */
  readonly usb3?: boolean | cdktf.IResolvable;
}

export function vmQemuUsbToTerraform(struct?: VmQemuUsb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    usb3: cdktf.booleanToTerraform(struct!.usb3),
  }
}


export function vmQemuUsbToHclTerraform(struct?: VmQemuUsb | cdktf.IResolvable): any {
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

export class VmQemuUsbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuUsb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._usb3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.usb3 = this._usb3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuUsb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
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
      this._usb3 = value.usb3;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

export class VmQemuUsbList extends cdktf.ComplexList {
  public internalValue? : VmQemuUsb[] | cdktf.IResolvable

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
  public get(index: number): VmQemuUsbOutputReference {
    return new VmQemuUsbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuVga {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#memory VmQemu#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#type VmQemu#type}
  */
  readonly type?: string;
}

export function vmQemuVgaToTerraform(struct?: VmQemuVga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory: cdktf.numberToTerraform(struct!.memory),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vmQemuVgaToHclTerraform(struct?: VmQemuVga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VmQemuVgaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuVga | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: VmQemuVga | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._memory = value.memory;
      this._type = value.type;
    }
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

export class VmQemuVgaList extends cdktf.ComplexList {
  public internalValue? : VmQemuVga[] | cdktf.IResolvable

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
  public get(index: number): VmQemuVgaOutputReference {
    return new VmQemuVgaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu proxmox_vm_qemu}
*/
export class VmQemu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_vm_qemu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmQemu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmQemu to import
  * @param importFromId The id of the existing VmQemu that should be imported. Refer to the {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmQemu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_vm_qemu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/telmate/proxmox/2.9.14/docs/resources/vm_qemu proxmox_vm_qemu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmQemuConfig
  */
  public constructor(scope: Construct, id: string, config: VmQemuConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_vm_qemu',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '2.9.14',
        providerVersionConstraint: '2.9.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalWait = config.additionalWait;
    this._agent = config.agent;
    this._args = config.args;
    this._automaticReboot = config.automaticReboot;
    this._balloon = config.balloon;
    this._bios = config.bios;
    this._boot = config.boot;
    this._bootdisk = config.bootdisk;
    this._bridge = config.bridge;
    this._ciWait = config.ciWait;
    this._cicustom = config.cicustom;
    this._cipassword = config.cipassword;
    this._ciuser = config.ciuser;
    this._clone = config.clone;
    this._cloneWait = config.cloneWait;
    this._cloudinitCdromStorage = config.cloudinitCdromStorage;
    this._cores = config.cores;
    this._cpu = config.cpu;
    this._defineConnectionInfo = config.defineConnectionInfo;
    this._desc = config.desc;
    this._diskGb = config.diskGb;
    this._forceCreate = config.forceCreate;
    this._forceRecreateOnChangeOf = config.forceRecreateOnChangeOf;
    this._fullClone = config.fullClone;
    this._guestAgentReadyTimeout = config.guestAgentReadyTimeout;
    this._hagroup = config.hagroup;
    this._hastate = config.hastate;
    this._hotplug = config.hotplug;
    this._id = config.id;
    this._ipconfig0 = config.ipconfig0;
    this._ipconfig1 = config.ipconfig1;
    this._ipconfig10 = config.ipconfig10;
    this._ipconfig11 = config.ipconfig11;
    this._ipconfig12 = config.ipconfig12;
    this._ipconfig13 = config.ipconfig13;
    this._ipconfig14 = config.ipconfig14;
    this._ipconfig15 = config.ipconfig15;
    this._ipconfig2 = config.ipconfig2;
    this._ipconfig3 = config.ipconfig3;
    this._ipconfig4 = config.ipconfig4;
    this._ipconfig5 = config.ipconfig5;
    this._ipconfig6 = config.ipconfig6;
    this._ipconfig7 = config.ipconfig7;
    this._ipconfig8 = config.ipconfig8;
    this._ipconfig9 = config.ipconfig9;
    this._iso = config.iso;
    this._kvm = config.kvm;
    this._mac = config.mac;
    this._machine = config.machine;
    this._memory = config.memory;
    this._name = config.name;
    this._nameserver = config.nameserver;
    this._nic = config.nic;
    this._numa = config.numa;
    this._onboot = config.onboot;
    this._oncreate = config.oncreate;
    this._osNetworkConfig = config.osNetworkConfig;
    this._osType = config.osType;
    this._pool = config.pool;
    this._preprovision = config.preprovision;
    this._pxe = config.pxe;
    this._qemuOs = config.qemuOs;
    this._scsihw = config.scsihw;
    this._searchdomain = config.searchdomain;
    this._sockets = config.sockets;
    this._sshForwardIp = config.sshForwardIp;
    this._sshPrivateKey = config.sshPrivateKey;
    this._sshUser = config.sshUser;
    this._sshkeys = config.sshkeys;
    this._startup = config.startup;
    this._storage = config.storage;
    this._storageType = config.storageType;
    this._tablet = config.tablet;
    this._tags = config.tags;
    this._targetNode = config.targetNode;
    this._vcpus = config.vcpus;
    this._vlan = config.vlan;
    this._vmid = config.vmid;
    this._disk.internalValue = config.disk;
    this._hostpci.internalValue = config.hostpci;
    this._network.internalValue = config.network;
    this._serial.internalValue = config.serial;
    this._timeouts.internalValue = config.timeouts;
    this._usb.internalValue = config.usb;
    this._vga.internalValue = config.vga;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_wait - computed: false, optional: true, required: false
  private _additionalWait?: number; 
  public get additionalWait() {
    return this.getNumberAttribute('additional_wait');
  }
  public set additionalWait(value: number) {
    this._additionalWait = value;
  }
  public resetAdditionalWait() {
    this._additionalWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalWaitInput() {
    return this._additionalWait;
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: number; 
  public get agent() {
    return this.getNumberAttribute('agent');
  }
  public set agent(value: number) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // automatic_reboot - computed: false, optional: true, required: false
  private _automaticReboot?: boolean | cdktf.IResolvable; 
  public get automaticReboot() {
    return this.getBooleanAttribute('automatic_reboot');
  }
  public set automaticReboot(value: boolean | cdktf.IResolvable) {
    this._automaticReboot = value;
  }
  public resetAutomaticReboot() {
    this._automaticReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRebootInput() {
    return this._automaticReboot;
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

  // boot - computed: true, optional: true, required: false
  private _boot?: string; 
  public get boot() {
    return this.getStringAttribute('boot');
  }
  public set boot(value: string) {
    this._boot = value;
  }
  public resetBoot() {
    this._boot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootInput() {
    return this._boot;
  }

  // bootdisk - computed: true, optional: true, required: false
  private _bootdisk?: string; 
  public get bootdisk() {
    return this.getStringAttribute('bootdisk');
  }
  public set bootdisk(value: string) {
    this._bootdisk = value;
  }
  public resetBootdisk() {
    this._bootdisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootdiskInput() {
    return this._bootdisk;
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

  // ci_wait - computed: false, optional: true, required: false
  private _ciWait?: number; 
  public get ciWait() {
    return this.getNumberAttribute('ci_wait');
  }
  public set ciWait(value: number) {
    this._ciWait = value;
  }
  public resetCiWait() {
    this._ciWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciWaitInput() {
    return this._ciWait;
  }

  // cicustom - computed: false, optional: true, required: false
  private _cicustom?: string; 
  public get cicustom() {
    return this.getStringAttribute('cicustom');
  }
  public set cicustom(value: string) {
    this._cicustom = value;
  }
  public resetCicustom() {
    this._cicustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cicustomInput() {
    return this._cicustom;
  }

  // cipassword - computed: false, optional: true, required: false
  private _cipassword?: string; 
  public get cipassword() {
    return this.getStringAttribute('cipassword');
  }
  public set cipassword(value: string) {
    this._cipassword = value;
  }
  public resetCipassword() {
    this._cipassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipasswordInput() {
    return this._cipassword;
  }

  // ciuser - computed: false, optional: true, required: false
  private _ciuser?: string; 
  public get ciuser() {
    return this.getStringAttribute('ciuser');
  }
  public set ciuser(value: string) {
    this._ciuser = value;
  }
  public resetCiuser() {
    this._ciuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciuserInput() {
    return this._ciuser;
  }

  // clone - computed: false, optional: true, required: false
  private _clone?: string; 
  public get clone() {
    return this.getStringAttribute('clone');
  }
  public set clone(value: string) {
    this._clone = value;
  }
  public resetClone() {
    this._clone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone;
  }

  // clone_wait - computed: false, optional: true, required: false
  private _cloneWait?: number; 
  public get cloneWait() {
    return this.getNumberAttribute('clone_wait');
  }
  public set cloneWait(value: number) {
    this._cloneWait = value;
  }
  public resetCloneWait() {
    this._cloneWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneWaitInput() {
    return this._cloneWait;
  }

  // cloudinit_cdrom_storage - computed: false, optional: true, required: false
  private _cloudinitCdromStorage?: string; 
  public get cloudinitCdromStorage() {
    return this.getStringAttribute('cloudinit_cdrom_storage');
  }
  public set cloudinitCdromStorage(value: string) {
    this._cloudinitCdromStorage = value;
  }
  public resetCloudinitCdromStorage() {
    this._cloudinitCdromStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudinitCdromStorageInput() {
    return this._cloudinitCdromStorage;
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

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // default_ipv4_address - computed: true, optional: false, required: false
  public get defaultIpv4Address() {
    return this.getStringAttribute('default_ipv4_address');
  }

  // define_connection_info - computed: false, optional: true, required: false
  private _defineConnectionInfo?: boolean | cdktf.IResolvable; 
  public get defineConnectionInfo() {
    return this.getBooleanAttribute('define_connection_info');
  }
  public set defineConnectionInfo(value: boolean | cdktf.IResolvable) {
    this._defineConnectionInfo = value;
  }
  public resetDefineConnectionInfo() {
    this._defineConnectionInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defineConnectionInfoInput() {
    return this._defineConnectionInfo;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // disk_gb - computed: false, optional: true, required: false
  private _diskGb?: number; 
  public get diskGb() {
    return this.getNumberAttribute('disk_gb');
  }
  public set diskGb(value: number) {
    this._diskGb = value;
  }
  public resetDiskGb() {
    this._diskGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbInput() {
    return this._diskGb;
  }

  // force_create - computed: false, optional: true, required: false
  private _forceCreate?: boolean | cdktf.IResolvable; 
  public get forceCreate() {
    return this.getBooleanAttribute('force_create');
  }
  public set forceCreate(value: boolean | cdktf.IResolvable) {
    this._forceCreate = value;
  }
  public resetForceCreate() {
    this._forceCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCreateInput() {
    return this._forceCreate;
  }

  // force_recreate_on_change_of - computed: false, optional: true, required: false
  private _forceRecreateOnChangeOf?: string; 
  public get forceRecreateOnChangeOf() {
    return this.getStringAttribute('force_recreate_on_change_of');
  }
  public set forceRecreateOnChangeOf(value: string) {
    this._forceRecreateOnChangeOf = value;
  }
  public resetForceRecreateOnChangeOf() {
    this._forceRecreateOnChangeOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateOnChangeOfInput() {
    return this._forceRecreateOnChangeOf;
  }

  // full_clone - computed: false, optional: true, required: false
  private _fullClone?: boolean | cdktf.IResolvable; 
  public get fullClone() {
    return this.getBooleanAttribute('full_clone');
  }
  public set fullClone(value: boolean | cdktf.IResolvable) {
    this._fullClone = value;
  }
  public resetFullClone() {
    this._fullClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullCloneInput() {
    return this._fullClone;
  }

  // guest_agent_ready_timeout - computed: false, optional: true, required: false
  private _guestAgentReadyTimeout?: number; 
  public get guestAgentReadyTimeout() {
    return this.getNumberAttribute('guest_agent_ready_timeout');
  }
  public set guestAgentReadyTimeout(value: number) {
    this._guestAgentReadyTimeout = value;
  }
  public resetGuestAgentReadyTimeout() {
    this._guestAgentReadyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAgentReadyTimeoutInput() {
    return this._guestAgentReadyTimeout;
  }

  // hagroup - computed: false, optional: true, required: false
  private _hagroup?: string; 
  public get hagroup() {
    return this.getStringAttribute('hagroup');
  }
  public set hagroup(value: string) {
    this._hagroup = value;
  }
  public resetHagroup() {
    this._hagroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hagroupInput() {
    return this._hagroup;
  }

  // hastate - computed: false, optional: true, required: false
  private _hastate?: string; 
  public get hastate() {
    return this.getStringAttribute('hastate');
  }
  public set hastate(value: string) {
    this._hastate = value;
  }
  public resetHastate() {
    this._hastate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hastateInput() {
    return this._hastate;
  }

  // hotplug - computed: false, optional: true, required: false
  private _hotplug?: string; 
  public get hotplug() {
    return this.getStringAttribute('hotplug');
  }
  public set hotplug(value: string) {
    this._hotplug = value;
  }
  public resetHotplug() {
    this._hotplug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotplugInput() {
    return this._hotplug;
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

  // ipconfig0 - computed: false, optional: true, required: false
  private _ipconfig0?: string; 
  public get ipconfig0() {
    return this.getStringAttribute('ipconfig0');
  }
  public set ipconfig0(value: string) {
    this._ipconfig0 = value;
  }
  public resetIpconfig0() {
    this._ipconfig0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig0Input() {
    return this._ipconfig0;
  }

  // ipconfig1 - computed: false, optional: true, required: false
  private _ipconfig1?: string; 
  public get ipconfig1() {
    return this.getStringAttribute('ipconfig1');
  }
  public set ipconfig1(value: string) {
    this._ipconfig1 = value;
  }
  public resetIpconfig1() {
    this._ipconfig1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig1Input() {
    return this._ipconfig1;
  }

  // ipconfig10 - computed: false, optional: true, required: false
  private _ipconfig10?: string; 
  public get ipconfig10() {
    return this.getStringAttribute('ipconfig10');
  }
  public set ipconfig10(value: string) {
    this._ipconfig10 = value;
  }
  public resetIpconfig10() {
    this._ipconfig10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig10Input() {
    return this._ipconfig10;
  }

  // ipconfig11 - computed: false, optional: true, required: false
  private _ipconfig11?: string; 
  public get ipconfig11() {
    return this.getStringAttribute('ipconfig11');
  }
  public set ipconfig11(value: string) {
    this._ipconfig11 = value;
  }
  public resetIpconfig11() {
    this._ipconfig11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig11Input() {
    return this._ipconfig11;
  }

  // ipconfig12 - computed: false, optional: true, required: false
  private _ipconfig12?: string; 
  public get ipconfig12() {
    return this.getStringAttribute('ipconfig12');
  }
  public set ipconfig12(value: string) {
    this._ipconfig12 = value;
  }
  public resetIpconfig12() {
    this._ipconfig12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig12Input() {
    return this._ipconfig12;
  }

  // ipconfig13 - computed: false, optional: true, required: false
  private _ipconfig13?: string; 
  public get ipconfig13() {
    return this.getStringAttribute('ipconfig13');
  }
  public set ipconfig13(value: string) {
    this._ipconfig13 = value;
  }
  public resetIpconfig13() {
    this._ipconfig13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig13Input() {
    return this._ipconfig13;
  }

  // ipconfig14 - computed: false, optional: true, required: false
  private _ipconfig14?: string; 
  public get ipconfig14() {
    return this.getStringAttribute('ipconfig14');
  }
  public set ipconfig14(value: string) {
    this._ipconfig14 = value;
  }
  public resetIpconfig14() {
    this._ipconfig14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig14Input() {
    return this._ipconfig14;
  }

  // ipconfig15 - computed: false, optional: true, required: false
  private _ipconfig15?: string; 
  public get ipconfig15() {
    return this.getStringAttribute('ipconfig15');
  }
  public set ipconfig15(value: string) {
    this._ipconfig15 = value;
  }
  public resetIpconfig15() {
    this._ipconfig15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig15Input() {
    return this._ipconfig15;
  }

  // ipconfig2 - computed: false, optional: true, required: false
  private _ipconfig2?: string; 
  public get ipconfig2() {
    return this.getStringAttribute('ipconfig2');
  }
  public set ipconfig2(value: string) {
    this._ipconfig2 = value;
  }
  public resetIpconfig2() {
    this._ipconfig2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig2Input() {
    return this._ipconfig2;
  }

  // ipconfig3 - computed: false, optional: true, required: false
  private _ipconfig3?: string; 
  public get ipconfig3() {
    return this.getStringAttribute('ipconfig3');
  }
  public set ipconfig3(value: string) {
    this._ipconfig3 = value;
  }
  public resetIpconfig3() {
    this._ipconfig3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig3Input() {
    return this._ipconfig3;
  }

  // ipconfig4 - computed: false, optional: true, required: false
  private _ipconfig4?: string; 
  public get ipconfig4() {
    return this.getStringAttribute('ipconfig4');
  }
  public set ipconfig4(value: string) {
    this._ipconfig4 = value;
  }
  public resetIpconfig4() {
    this._ipconfig4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig4Input() {
    return this._ipconfig4;
  }

  // ipconfig5 - computed: false, optional: true, required: false
  private _ipconfig5?: string; 
  public get ipconfig5() {
    return this.getStringAttribute('ipconfig5');
  }
  public set ipconfig5(value: string) {
    this._ipconfig5 = value;
  }
  public resetIpconfig5() {
    this._ipconfig5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig5Input() {
    return this._ipconfig5;
  }

  // ipconfig6 - computed: false, optional: true, required: false
  private _ipconfig6?: string; 
  public get ipconfig6() {
    return this.getStringAttribute('ipconfig6');
  }
  public set ipconfig6(value: string) {
    this._ipconfig6 = value;
  }
  public resetIpconfig6() {
    this._ipconfig6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig6Input() {
    return this._ipconfig6;
  }

  // ipconfig7 - computed: false, optional: true, required: false
  private _ipconfig7?: string; 
  public get ipconfig7() {
    return this.getStringAttribute('ipconfig7');
  }
  public set ipconfig7(value: string) {
    this._ipconfig7 = value;
  }
  public resetIpconfig7() {
    this._ipconfig7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig7Input() {
    return this._ipconfig7;
  }

  // ipconfig8 - computed: false, optional: true, required: false
  private _ipconfig8?: string; 
  public get ipconfig8() {
    return this.getStringAttribute('ipconfig8');
  }
  public set ipconfig8(value: string) {
    this._ipconfig8 = value;
  }
  public resetIpconfig8() {
    this._ipconfig8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig8Input() {
    return this._ipconfig8;
  }

  // ipconfig9 - computed: false, optional: true, required: false
  private _ipconfig9?: string; 
  public get ipconfig9() {
    return this.getStringAttribute('ipconfig9');
  }
  public set ipconfig9(value: string) {
    this._ipconfig9 = value;
  }
  public resetIpconfig9() {
    this._ipconfig9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipconfig9Input() {
    return this._ipconfig9;
  }

  // iso - computed: false, optional: true, required: false
  private _iso?: string; 
  public get iso() {
    return this.getStringAttribute('iso');
  }
  public set iso(value: string) {
    this._iso = value;
  }
  public resetIso() {
    this._iso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoInput() {
    return this._iso;
  }

  // kvm - computed: false, optional: true, required: false
  private _kvm?: boolean | cdktf.IResolvable; 
  public get kvm() {
    return this.getBooleanAttribute('kvm');
  }
  public set kvm(value: boolean | cdktf.IResolvable) {
    this._kvm = value;
  }
  public resetKvm() {
    this._kvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmInput() {
    return this._kvm;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // nameserver - computed: true, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // nic - computed: false, optional: true, required: false
  private _nic?: string; 
  public get nic() {
    return this.getStringAttribute('nic');
  }
  public set nic(value: string) {
    this._nic = value;
  }
  public resetNic() {
    this._nic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicInput() {
    return this._nic;
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

  // onboot - computed: false, optional: true, required: false
  private _onboot?: boolean | cdktf.IResolvable; 
  public get onboot() {
    return this.getBooleanAttribute('onboot');
  }
  public set onboot(value: boolean | cdktf.IResolvable) {
    this._onboot = value;
  }
  public resetOnboot() {
    this._onboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onbootInput() {
    return this._onboot;
  }

  // oncreate - computed: false, optional: true, required: false
  private _oncreate?: boolean | cdktf.IResolvable; 
  public get oncreate() {
    return this.getBooleanAttribute('oncreate');
  }
  public set oncreate(value: boolean | cdktf.IResolvable) {
    this._oncreate = value;
  }
  public resetOncreate() {
    this._oncreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oncreateInput() {
    return this._oncreate;
  }

  // os_network_config - computed: false, optional: true, required: false
  private _osNetworkConfig?: string; 
  public get osNetworkConfig() {
    return this.getStringAttribute('os_network_config');
  }
  public set osNetworkConfig(value: string) {
    this._osNetworkConfig = value;
  }
  public resetOsNetworkConfig() {
    this._osNetworkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNetworkConfigInput() {
    return this._osNetworkConfig;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
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

  // preprovision - computed: false, optional: true, required: false
  private _preprovision?: boolean | cdktf.IResolvable; 
  public get preprovision() {
    return this.getBooleanAttribute('preprovision');
  }
  public set preprovision(value: boolean | cdktf.IResolvable) {
    this._preprovision = value;
  }
  public resetPreprovision() {
    this._preprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprovisionInput() {
    return this._preprovision;
  }

  // pxe - computed: false, optional: true, required: false
  private _pxe?: boolean | cdktf.IResolvable; 
  public get pxe() {
    return this.getBooleanAttribute('pxe');
  }
  public set pxe(value: boolean | cdktf.IResolvable) {
    this._pxe = value;
  }
  public resetPxe() {
    this._pxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeInput() {
    return this._pxe;
  }

  // qemu_os - computed: false, optional: true, required: false
  private _qemuOs?: string; 
  public get qemuOs() {
    return this.getStringAttribute('qemu_os');
  }
  public set qemuOs(value: string) {
    this._qemuOs = value;
  }
  public resetQemuOs() {
    this._qemuOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qemuOsInput() {
    return this._qemuOs;
  }

  // reboot_required - computed: true, optional: false, required: false
  public get rebootRequired() {
    return this.getBooleanAttribute('reboot_required');
  }

  // scsihw - computed: false, optional: true, required: false
  private _scsihw?: string; 
  public get scsihw() {
    return this.getStringAttribute('scsihw');
  }
  public set scsihw(value: string) {
    this._scsihw = value;
  }
  public resetScsihw() {
    this._scsihw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsihwInput() {
    return this._scsihw;
  }

  // searchdomain - computed: true, optional: true, required: false
  private _searchdomain?: string; 
  public get searchdomain() {
    return this.getStringAttribute('searchdomain');
  }
  public set searchdomain(value: string) {
    this._searchdomain = value;
  }
  public resetSearchdomain() {
    this._searchdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchdomainInput() {
    return this._searchdomain;
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

  // ssh_forward_ip - computed: false, optional: true, required: false
  private _sshForwardIp?: string; 
  public get sshForwardIp() {
    return this.getStringAttribute('ssh_forward_ip');
  }
  public set sshForwardIp(value: string) {
    this._sshForwardIp = value;
  }
  public resetSshForwardIp() {
    this._sshForwardIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshForwardIpInput() {
    return this._sshForwardIp;
  }

  // ssh_host - computed: true, optional: false, required: false
  public get sshHost() {
    return this.getStringAttribute('ssh_host');
  }

  // ssh_port - computed: true, optional: false, required: false
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }

  // ssh_private_key - computed: false, optional: true, required: false
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  public resetSshPrivateKey() {
    this._sshPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // ssh_user - computed: false, optional: true, required: false
  private _sshUser?: string; 
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }
  public set sshUser(value: string) {
    this._sshUser = value;
  }
  public resetSshUser() {
    this._sshUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserInput() {
    return this._sshUser;
  }

  // sshkeys - computed: false, optional: true, required: false
  private _sshkeys?: string; 
  public get sshkeys() {
    return this.getStringAttribute('sshkeys');
  }
  public set sshkeys(value: string) {
    this._sshkeys = value;
  }
  public resetSshkeys() {
    this._sshkeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeysInput() {
    return this._sshkeys;
  }

  // startup - computed: false, optional: true, required: false
  private _startup?: string; 
  public get startup() {
    return this.getStringAttribute('startup');
  }
  public set startup(value: string) {
    this._startup = value;
  }
  public resetStartup() {
    this._startup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupInput() {
    return this._startup;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // tablet - computed: false, optional: true, required: false
  private _tablet?: boolean | cdktf.IResolvable; 
  public get tablet() {
    return this.getBooleanAttribute('tablet');
  }
  public set tablet(value: boolean | cdktf.IResolvable) {
    this._tablet = value;
  }
  public resetTablet() {
    this._tablet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tabletInput() {
    return this._tablet;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_node - computed: false, optional: false, required: true
  private _targetNode?: string; 
  public get targetNode() {
    return this.getStringAttribute('target_node');
  }
  public set targetNode(value: string) {
    this._targetNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeInput() {
    return this._targetNode;
  }

  // unused_disk - computed: true, optional: false, required: false
  private _unusedDisk = new VmQemuUnusedDiskList(this, "unused_disk", false);
  public get unusedDisk() {
    return this._unusedDisk;
  }

  // vcpus - computed: false, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vmid - computed: true, optional: true, required: false
  private _vmid?: number; 
  public get vmid() {
    return this.getNumberAttribute('vmid');
  }
  public set vmid(value: number) {
    this._vmid = value;
  }
  public resetVmid() {
    this._vmid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmidInput() {
    return this._vmid;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new VmQemuDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VmQemuDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // hostpci - computed: false, optional: true, required: false
  private _hostpci = new VmQemuHostpciList(this, "hostpci", false);
  public get hostpci() {
    return this._hostpci;
  }
  public putHostpci(value: VmQemuHostpci[] | cdktf.IResolvable) {
    this._hostpci.internalValue = value;
  }
  public resetHostpci() {
    this._hostpci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostpciInput() {
    return this._hostpci.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new VmQemuNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: VmQemuNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // serial - computed: false, optional: true, required: false
  private _serial = new VmQemuSerialList(this, "serial", true);
  public get serial() {
    return this._serial;
  }
  public putSerial(value: VmQemuSerial[] | cdktf.IResolvable) {
    this._serial.internalValue = value;
  }
  public resetSerial() {
    this._serial.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmQemuTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmQemuTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // usb - computed: false, optional: true, required: false
  private _usb = new VmQemuUsbList(this, "usb", false);
  public get usb() {
    return this._usb;
  }
  public putUsb(value: VmQemuUsb[] | cdktf.IResolvable) {
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
  private _vga = new VmQemuVgaList(this, "vga", true);
  public get vga() {
    return this._vga;
  }
  public putVga(value: VmQemuVga[] | cdktf.IResolvable) {
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
      additional_wait: cdktf.numberToTerraform(this._additionalWait),
      agent: cdktf.numberToTerraform(this._agent),
      args: cdktf.stringToTerraform(this._args),
      automatic_reboot: cdktf.booleanToTerraform(this._automaticReboot),
      balloon: cdktf.numberToTerraform(this._balloon),
      bios: cdktf.stringToTerraform(this._bios),
      boot: cdktf.stringToTerraform(this._boot),
      bootdisk: cdktf.stringToTerraform(this._bootdisk),
      bridge: cdktf.stringToTerraform(this._bridge),
      ci_wait: cdktf.numberToTerraform(this._ciWait),
      cicustom: cdktf.stringToTerraform(this._cicustom),
      cipassword: cdktf.stringToTerraform(this._cipassword),
      ciuser: cdktf.stringToTerraform(this._ciuser),
      clone: cdktf.stringToTerraform(this._clone),
      clone_wait: cdktf.numberToTerraform(this._cloneWait),
      cloudinit_cdrom_storage: cdktf.stringToTerraform(this._cloudinitCdromStorage),
      cores: cdktf.numberToTerraform(this._cores),
      cpu: cdktf.stringToTerraform(this._cpu),
      define_connection_info: cdktf.booleanToTerraform(this._defineConnectionInfo),
      desc: cdktf.stringToTerraform(this._desc),
      disk_gb: cdktf.numberToTerraform(this._diskGb),
      force_create: cdktf.booleanToTerraform(this._forceCreate),
      force_recreate_on_change_of: cdktf.stringToTerraform(this._forceRecreateOnChangeOf),
      full_clone: cdktf.booleanToTerraform(this._fullClone),
      guest_agent_ready_timeout: cdktf.numberToTerraform(this._guestAgentReadyTimeout),
      hagroup: cdktf.stringToTerraform(this._hagroup),
      hastate: cdktf.stringToTerraform(this._hastate),
      hotplug: cdktf.stringToTerraform(this._hotplug),
      id: cdktf.stringToTerraform(this._id),
      ipconfig0: cdktf.stringToTerraform(this._ipconfig0),
      ipconfig1: cdktf.stringToTerraform(this._ipconfig1),
      ipconfig10: cdktf.stringToTerraform(this._ipconfig10),
      ipconfig11: cdktf.stringToTerraform(this._ipconfig11),
      ipconfig12: cdktf.stringToTerraform(this._ipconfig12),
      ipconfig13: cdktf.stringToTerraform(this._ipconfig13),
      ipconfig14: cdktf.stringToTerraform(this._ipconfig14),
      ipconfig15: cdktf.stringToTerraform(this._ipconfig15),
      ipconfig2: cdktf.stringToTerraform(this._ipconfig2),
      ipconfig3: cdktf.stringToTerraform(this._ipconfig3),
      ipconfig4: cdktf.stringToTerraform(this._ipconfig4),
      ipconfig5: cdktf.stringToTerraform(this._ipconfig5),
      ipconfig6: cdktf.stringToTerraform(this._ipconfig6),
      ipconfig7: cdktf.stringToTerraform(this._ipconfig7),
      ipconfig8: cdktf.stringToTerraform(this._ipconfig8),
      ipconfig9: cdktf.stringToTerraform(this._ipconfig9),
      iso: cdktf.stringToTerraform(this._iso),
      kvm: cdktf.booleanToTerraform(this._kvm),
      mac: cdktf.stringToTerraform(this._mac),
      machine: cdktf.stringToTerraform(this._machine),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      nameserver: cdktf.stringToTerraform(this._nameserver),
      nic: cdktf.stringToTerraform(this._nic),
      numa: cdktf.booleanToTerraform(this._numa),
      onboot: cdktf.booleanToTerraform(this._onboot),
      oncreate: cdktf.booleanToTerraform(this._oncreate),
      os_network_config: cdktf.stringToTerraform(this._osNetworkConfig),
      os_type: cdktf.stringToTerraform(this._osType),
      pool: cdktf.stringToTerraform(this._pool),
      preprovision: cdktf.booleanToTerraform(this._preprovision),
      pxe: cdktf.booleanToTerraform(this._pxe),
      qemu_os: cdktf.stringToTerraform(this._qemuOs),
      scsihw: cdktf.stringToTerraform(this._scsihw),
      searchdomain: cdktf.stringToTerraform(this._searchdomain),
      sockets: cdktf.numberToTerraform(this._sockets),
      ssh_forward_ip: cdktf.stringToTerraform(this._sshForwardIp),
      ssh_private_key: cdktf.stringToTerraform(this._sshPrivateKey),
      ssh_user: cdktf.stringToTerraform(this._sshUser),
      sshkeys: cdktf.stringToTerraform(this._sshkeys),
      startup: cdktf.stringToTerraform(this._startup),
      storage: cdktf.stringToTerraform(this._storage),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tablet: cdktf.booleanToTerraform(this._tablet),
      tags: cdktf.stringToTerraform(this._tags),
      target_node: cdktf.stringToTerraform(this._targetNode),
      vcpus: cdktf.numberToTerraform(this._vcpus),
      vlan: cdktf.numberToTerraform(this._vlan),
      vmid: cdktf.numberToTerraform(this._vmid),
      disk: cdktf.listMapper(vmQemuDiskToTerraform, true)(this._disk.internalValue),
      hostpci: cdktf.listMapper(vmQemuHostpciToTerraform, true)(this._hostpci.internalValue),
      network: cdktf.listMapper(vmQemuNetworkToTerraform, true)(this._network.internalValue),
      serial: cdktf.listMapper(vmQemuSerialToTerraform, true)(this._serial.internalValue),
      timeouts: vmQemuTimeoutsToTerraform(this._timeouts.internalValue),
      usb: cdktf.listMapper(vmQemuUsbToTerraform, true)(this._usb.internalValue),
      vga: cdktf.listMapper(vmQemuVgaToTerraform, true)(this._vga.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_wait: {
        value: cdktf.numberToHclTerraform(this._additionalWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      agent: {
        value: cdktf.numberToHclTerraform(this._agent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      args: {
        value: cdktf.stringToHclTerraform(this._args),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_reboot: {
        value: cdktf.booleanToHclTerraform(this._automaticReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      balloon: {
        value: cdktf.numberToHclTerraform(this._balloon),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bios: {
        value: cdktf.stringToHclTerraform(this._bios),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot: {
        value: cdktf.stringToHclTerraform(this._boot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootdisk: {
        value: cdktf.stringToHclTerraform(this._bootdisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ci_wait: {
        value: cdktf.numberToHclTerraform(this._ciWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cicustom: {
        value: cdktf.stringToHclTerraform(this._cicustom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipassword: {
        value: cdktf.stringToHclTerraform(this._cipassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciuser: {
        value: cdktf.stringToHclTerraform(this._ciuser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone: {
        value: cdktf.stringToHclTerraform(this._clone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_wait: {
        value: cdktf.numberToHclTerraform(this._cloneWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloudinit_cdrom_storage: {
        value: cdktf.stringToHclTerraform(this._cloudinitCdromStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu: {
        value: cdktf.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      define_connection_info: {
        value: cdktf.booleanToHclTerraform(this._defineConnectionInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_gb: {
        value: cdktf.numberToHclTerraform(this._diskGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_create: {
        value: cdktf.booleanToHclTerraform(this._forceCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_recreate_on_change_of: {
        value: cdktf.stringToHclTerraform(this._forceRecreateOnChangeOf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_clone: {
        value: cdktf.booleanToHclTerraform(this._fullClone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_agent_ready_timeout: {
        value: cdktf.numberToHclTerraform(this._guestAgentReadyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hagroup: {
        value: cdktf.stringToHclTerraform(this._hagroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hastate: {
        value: cdktf.stringToHclTerraform(this._hastate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hotplug: {
        value: cdktf.stringToHclTerraform(this._hotplug),
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
      ipconfig0: {
        value: cdktf.stringToHclTerraform(this._ipconfig0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig1: {
        value: cdktf.stringToHclTerraform(this._ipconfig1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig10: {
        value: cdktf.stringToHclTerraform(this._ipconfig10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig11: {
        value: cdktf.stringToHclTerraform(this._ipconfig11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig12: {
        value: cdktf.stringToHclTerraform(this._ipconfig12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig13: {
        value: cdktf.stringToHclTerraform(this._ipconfig13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig14: {
        value: cdktf.stringToHclTerraform(this._ipconfig14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig15: {
        value: cdktf.stringToHclTerraform(this._ipconfig15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig2: {
        value: cdktf.stringToHclTerraform(this._ipconfig2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig3: {
        value: cdktf.stringToHclTerraform(this._ipconfig3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig4: {
        value: cdktf.stringToHclTerraform(this._ipconfig4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig5: {
        value: cdktf.stringToHclTerraform(this._ipconfig5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig6: {
        value: cdktf.stringToHclTerraform(this._ipconfig6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig7: {
        value: cdktf.stringToHclTerraform(this._ipconfig7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig8: {
        value: cdktf.stringToHclTerraform(this._ipconfig8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipconfig9: {
        value: cdktf.stringToHclTerraform(this._ipconfig9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iso: {
        value: cdktf.stringToHclTerraform(this._iso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kvm: {
        value: cdktf.booleanToHclTerraform(this._kvm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver: {
        value: cdktf.stringToHclTerraform(this._nameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic: {
        value: cdktf.stringToHclTerraform(this._nic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numa: {
        value: cdktf.booleanToHclTerraform(this._numa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      onboot: {
        value: cdktf.booleanToHclTerraform(this._onboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oncreate: {
        value: cdktf.booleanToHclTerraform(this._oncreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_network_config: {
        value: cdktf.stringToHclTerraform(this._osNetworkConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preprovision: {
        value: cdktf.booleanToHclTerraform(this._preprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pxe: {
        value: cdktf.booleanToHclTerraform(this._pxe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qemu_os: {
        value: cdktf.stringToHclTerraform(this._qemuOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scsihw: {
        value: cdktf.stringToHclTerraform(this._scsihw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      searchdomain: {
        value: cdktf.stringToHclTerraform(this._searchdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sockets: {
        value: cdktf.numberToHclTerraform(this._sockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_forward_ip: {
        value: cdktf.stringToHclTerraform(this._sshForwardIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_private_key: {
        value: cdktf.stringToHclTerraform(this._sshPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_user: {
        value: cdktf.stringToHclTerraform(this._sshUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sshkeys: {
        value: cdktf.stringToHclTerraform(this._sshkeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup: {
        value: cdktf.stringToHclTerraform(this._startup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tablet: {
        value: cdktf.booleanToHclTerraform(this._tablet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_node: {
        value: cdktf.stringToHclTerraform(this._targetNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpus: {
        value: cdktf.numberToHclTerraform(this._vcpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmid: {
        value: cdktf.numberToHclTerraform(this._vmid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk: {
        value: cdktf.listMapperHcl(vmQemuDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmQemuDiskList",
      },
      hostpci: {
        value: cdktf.listMapperHcl(vmQemuHostpciToHclTerraform, true)(this._hostpci.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmQemuHostpciList",
      },
      network: {
        value: cdktf.listMapperHcl(vmQemuNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmQemuNetworkList",
      },
      serial: {
        value: cdktf.listMapperHcl(vmQemuSerialToHclTerraform, true)(this._serial.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmQemuSerialList",
      },
      timeouts: {
        value: vmQemuTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmQemuTimeouts",
      },
      usb: {
        value: cdktf.listMapperHcl(vmQemuUsbToHclTerraform, true)(this._usb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmQemuUsbList",
      },
      vga: {
        value: cdktf.listMapperHcl(vmQemuVgaToHclTerraform, true)(this._vga.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmQemuVgaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
