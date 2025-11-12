// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VappVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically accept EULA if OVA has it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#accept_all_eulas VappVm#accept_all_eulas}
  */
  readonly acceptAllEulas?: boolean | cdktf.IResolvable;
  /**
  * Media name to add as boot image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#boot_image VappVm#boot_image}
  */
  readonly bootImage?: string;
  /**
  * The URN of the media to use as boot image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#boot_image_id VappVm#boot_image_id}
  */
  readonly bootImageId?: string;
  /**
  * The catalog name in which to find the given vApp Template or media for boot_image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#catalog_name VappVm#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Computer name to assign to this virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#computer_name VappVm#computer_name}
  */
  readonly computerName?: string;
  /**
  * Consolidates disks during creation and allows to change disk size using 'override_template_disk' in fast provisioned VDCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#consolidate_disks_on_create VappVm#consolidate_disks_on_create}
  */
  readonly consolidateDisksOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Source VM that should be copied from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#copy_from_vm_id VappVm#copy_from_vm_id}
  */
  readonly copyFromVmId?: string;
  /**
  * The number of cores per socket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#cpu_cores VappVm#cpu_cores}
  */
  readonly cpuCores?: number;
  /**
  * True if the virtual machine supports addition of virtual CPUs while powered on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#cpu_hot_add_enabled VappVm#cpu_hot_add_enabled}
  */
  readonly cpuHotAddEnabled?: boolean | cdktf.IResolvable;
  /**
  * The limit for how much of CPU can be consumed on the underlying virtualization infrastructure. This is only valid when the resource allocation is not unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#cpu_limit VappVm#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Pre-determined relative priorities according to which the non-reserved portion of this resource is made available to the virtualized workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#cpu_priority VappVm#cpu_priority}
  */
  readonly cpuPriority?: string;
  /**
  * The amount of MHz reservation on the underlying virtualization infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#cpu_reservation VappVm#cpu_reservation}
  */
  readonly cpuReservation?: number;
  /**
  * Custom priority for the resource. This is a read-only, unless the `cpu_priority` is CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#cpu_shares VappVm#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * The number of virtual CPUs to allocate to the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#cpus VappVm#cpus}
  */
  readonly cpus?: number;
  /**
  * The VM description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#description VappVm#description}
  */
  readonly description?: string;
  /**
  * Expose hardware-assisted CPU virtualization to guest OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#expose_hardware_virtualization VappVm#expose_hardware_virtualization}
  */
  readonly exposeHardwareVirtualization?: boolean | cdktf.IResolvable;
  /**
  * Firmware of the VM. Can be either EFI or BIOS, availabilitydepending on the os_type argument. If unset, is set to 'bios' by default. Changing the value when `power_on` is set to true, will cause a reboot of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#firmware VappVm#firmware}
  */
  readonly firmware?: string;
  /**
  * Key/value settings for guest properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#guest_properties VappVm#guest_properties}
  */
  readonly guestProperties?: { [key: string]: string };
  /**
  * Virtual Hardware Version (e.g.`vmx-14`, `vmx-13`, `vmx-12`, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#hardware_version VappVm#hardware_version}
  */
  readonly hardwareVersion?: string;
  /**
  * VM Hyper Reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#href VappVm#href}
  */
  readonly href?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#id VappVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The amount of RAM (in MB) to allocate to the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#memory VappVm#memory}
  */
  readonly memory?: number;
  /**
  * True if the virtual machine supports addition of memory while powered on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#memory_hot_add_enabled VappVm#memory_hot_add_enabled}
  */
  readonly memoryHotAddEnabled?: boolean | cdktf.IResolvable;
  /**
  * The limit for how much of memory can be consumed on the underlying virtualization infrastructure. This is only valid when the resource allocation is not unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#memory_limit VappVm#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Pre-determined relative priorities according to which the non-reserved portion of this resource is made available to the virtualized workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#memory_priority VappVm#memory_priority}
  */
  readonly memoryPriority?: string;
  /**
  * The amount of RAM (in MB) reservation on the underlying virtualization infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#memory_reservation VappVm#memory_reservation}
  */
  readonly memoryReservation?: number;
  /**
  * Custom priority for the resource. This is a read-only, unless the `memory_priority` is CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#memory_shares VappVm#memory_shares}
  */
  readonly memoryShares?: number;
  /**
  * Key value map of metadata to assign to this VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#metadata VappVm#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * A name for the VM, unique within the vApp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#name VappVm#name}
  */
  readonly name: string;
  /**
  * Optional number of seconds to try and wait for DHCP IP (valid for 'network' block only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#network_dhcp_wait_seconds VappVm#network_dhcp_wait_seconds}
  */
  readonly networkDhcpWaitSeconds?: number;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#org VappVm#org}
  */
  readonly org?: string;
  /**
  * Operating System type. Possible values can be found in documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#os_type VappVm#os_type}
  */
  readonly osType?: string;
  /**
  * VM placement policy ID. Has to be assigned to Org VDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#placement_policy_id VappVm#placement_policy_id}
  */
  readonly placementPolicyId?: string;
  /**
  * A boolean value stating if this VM should be powered on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#power_on VappVm#power_on}
  */
  readonly powerOn?: boolean | cdktf.IResolvable;
  /**
  * True if the update of resource should fail when virtual machine power off needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#prevent_update_power_off VappVm#prevent_update_power_off}
  */
  readonly preventUpdatePowerOff?: boolean | cdktf.IResolvable;
  /**
  * Security tags to assign to this VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#security_tags VappVm#security_tags}
  */
  readonly securityTags?: string[];
  /**
  * VM sizing policy ID. Has to be assigned to Org VDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#sizing_policy_id VappVm#sizing_policy_id}
  */
  readonly sizingPolicyId?: string;
  /**
  * Storage profile to override the default one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#storage_profile VappVm#storage_profile}
  */
  readonly storageProfile?: string;
  /**
  * The name of the vApp Template to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#template_name VappVm#template_name}
  */
  readonly templateName?: string;
  /**
  * The vApp this VM belongs to - Required, unless it is a standalone VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#vapp_name VappVm#vapp_name}
  */
  readonly vappName: string;
  /**
  * The URN of the vApp Template to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#vapp_template_id VappVm#vapp_template_id}
  */
  readonly vappTemplateId?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#vdc VappVm#vdc}
  */
  readonly vdc?: string;
  /**
  * The name of the VM in vApp Template to use. In cases when vApp template has more than one VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#vm_name_in_template VappVm#vm_name_in_template}
  */
  readonly vmNameInTemplate?: string;
  /**
  * boot_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#boot_options VappVm#boot_options}
  */
  readonly bootOptions?: VappVmBootOptions;
  /**
  * customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#customization VappVm#customization}
  */
  readonly customization?: VappVmCustomization;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#disk VappVm#disk}
  */
  readonly disk?: VappVmDisk[] | cdktf.IResolvable;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#metadata_entry VappVm#metadata_entry}
  */
  readonly metadataEntry?: VappVmMetadataEntry[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#network VappVm#network}
  */
  readonly network?: VappVmNetwork[] | cdktf.IResolvable;
  /**
  * override_template_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#override_template_disk VappVm#override_template_disk}
  */
  readonly overrideTemplateDisk?: VappVmOverrideTemplateDisk[] | cdktf.IResolvable;
  /**
  * set_extra_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#set_extra_config VappVm#set_extra_config}
  */
  readonly setExtraConfig?: VappVmSetExtraConfig[] | cdktf.IResolvable;
}
export interface VappVmExtraConfig {
}

export function vappVmExtraConfigToTerraform(struct?: VappVmExtraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vappVmExtraConfigToHclTerraform(struct?: VappVmExtraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VappVmExtraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappVmExtraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmExtraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class VappVmExtraConfigList extends cdktf.ComplexList {

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
  public get(index: number): VappVmExtraConfigOutputReference {
    return new VappVmExtraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VappVmInternalDisk {
}

export function vappVmInternalDiskToTerraform(struct?: VappVmInternalDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vappVmInternalDiskToHclTerraform(struct?: VappVmInternalDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VappVmInternalDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappVmInternalDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmInternalDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_number - computed: true, optional: false, required: false
  public get busNumber() {
    return this.getNumberAttribute('bus_number');
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // size_in_mb - computed: true, optional: false, required: false
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }

  // storage_profile - computed: true, optional: false, required: false
  public get storageProfile() {
    return this.getStringAttribute('storage_profile');
  }

  // thin_provisioned - computed: true, optional: false, required: false
  public get thinProvisioned() {
    return this.getBooleanAttribute('thin_provisioned');
  }

  // unit_number - computed: true, optional: false, required: false
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
}

export class VappVmInternalDiskList extends cdktf.ComplexList {

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
  public get(index: number): VappVmInternalDiskOutputReference {
    return new VappVmInternalDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VappVmBootOptions {
  /**
  * Number of milliseconds to wait between powering-on and booting the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#boot_delay VappVm#boot_delay}
  */
  readonly bootDelay?: number;
  /**
  * Delay in milliseconds before a boot retry. Only works if 'boot_retry_enabled' is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#boot_retry_delay VappVm#boot_retry_delay}
  */
  readonly bootRetryDelay?: number;
  /**
  * If set to true, a VM that fails to boot will try again after the 'boot_retry_delay' time period has expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#boot_retry_enabled VappVm#boot_retry_enabled}
  */
  readonly bootRetryEnabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, enables EFI Secure Boot for the VM. Can only be changed when the VM is powered off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#efi_secure_boot VappVm#efi_secure_boot}
  */
  readonly efiSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the VM will enter BIOS setup on next boot. If a VM is powered on, the field will be set to `false` by VCD and Terraform will return a non-empty plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#enter_bios_setup_on_next_boot VappVm#enter_bios_setup_on_next_boot}
  */
  readonly enterBiosSetupOnNextBoot?: boolean | cdktf.IResolvable;
}

export function vappVmBootOptionsToTerraform(struct?: VappVmBootOptionsOutputReference | VappVmBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_delay: cdktf.numberToTerraform(struct!.bootDelay),
    boot_retry_delay: cdktf.numberToTerraform(struct!.bootRetryDelay),
    boot_retry_enabled: cdktf.booleanToTerraform(struct!.bootRetryEnabled),
    efi_secure_boot: cdktf.booleanToTerraform(struct!.efiSecureBoot),
    enter_bios_setup_on_next_boot: cdktf.booleanToTerraform(struct!.enterBiosSetupOnNextBoot),
  }
}


export function vappVmBootOptionsToHclTerraform(struct?: VappVmBootOptionsOutputReference | VappVmBootOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_delay: {
      value: cdktf.numberToHclTerraform(struct!.bootDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_retry_delay: {
      value: cdktf.numberToHclTerraform(struct!.bootRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boot_retry_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bootRetryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efi_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.efiSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enter_bios_setup_on_next_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enterBiosSetupOnNextBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappVmBootOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VappVmBootOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDelay = this._bootDelay;
    }
    if (this._bootRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootRetryDelay = this._bootRetryDelay;
    }
    if (this._bootRetryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootRetryEnabled = this._bootRetryEnabled;
    }
    if (this._efiSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.efiSecureBoot = this._efiSecureBoot;
    }
    if (this._enterBiosSetupOnNextBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterBiosSetupOnNextBoot = this._enterBiosSetupOnNextBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmBootOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDelay = undefined;
      this._bootRetryDelay = undefined;
      this._bootRetryEnabled = undefined;
      this._efiSecureBoot = undefined;
      this._enterBiosSetupOnNextBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDelay = value.bootDelay;
      this._bootRetryDelay = value.bootRetryDelay;
      this._bootRetryEnabled = value.bootRetryEnabled;
      this._efiSecureBoot = value.efiSecureBoot;
      this._enterBiosSetupOnNextBoot = value.enterBiosSetupOnNextBoot;
    }
  }

  // boot_delay - computed: true, optional: true, required: false
  private _bootDelay?: number; 
  public get bootDelay() {
    return this.getNumberAttribute('boot_delay');
  }
  public set bootDelay(value: number) {
    this._bootDelay = value;
  }
  public resetBootDelay() {
    this._bootDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDelayInput() {
    return this._bootDelay;
  }

  // boot_retry_delay - computed: true, optional: true, required: false
  private _bootRetryDelay?: number; 
  public get bootRetryDelay() {
    return this.getNumberAttribute('boot_retry_delay');
  }
  public set bootRetryDelay(value: number) {
    this._bootRetryDelay = value;
  }
  public resetBootRetryDelay() {
    this._bootRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootRetryDelayInput() {
    return this._bootRetryDelay;
  }

  // boot_retry_enabled - computed: true, optional: true, required: false
  private _bootRetryEnabled?: boolean | cdktf.IResolvable; 
  public get bootRetryEnabled() {
    return this.getBooleanAttribute('boot_retry_enabled');
  }
  public set bootRetryEnabled(value: boolean | cdktf.IResolvable) {
    this._bootRetryEnabled = value;
  }
  public resetBootRetryEnabled() {
    this._bootRetryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootRetryEnabledInput() {
    return this._bootRetryEnabled;
  }

  // efi_secure_boot - computed: true, optional: true, required: false
  private _efiSecureBoot?: boolean | cdktf.IResolvable; 
  public get efiSecureBoot() {
    return this.getBooleanAttribute('efi_secure_boot');
  }
  public set efiSecureBoot(value: boolean | cdktf.IResolvable) {
    this._efiSecureBoot = value;
  }
  public resetEfiSecureBoot() {
    this._efiSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiSecureBootInput() {
    return this._efiSecureBoot;
  }

  // enter_bios_setup_on_next_boot - computed: false, optional: true, required: false
  private _enterBiosSetupOnNextBoot?: boolean | cdktf.IResolvable; 
  public get enterBiosSetupOnNextBoot() {
    return this.getBooleanAttribute('enter_bios_setup_on_next_boot');
  }
  public set enterBiosSetupOnNextBoot(value: boolean | cdktf.IResolvable) {
    this._enterBiosSetupOnNextBoot = value;
  }
  public resetEnterBiosSetupOnNextBoot() {
    this._enterBiosSetupOnNextBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterBiosSetupOnNextBootInput() {
    return this._enterBiosSetupOnNextBoot;
  }
}
export interface VappVmCustomization {
  /**
  * Manually specify admin password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#admin_password VappVm#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Allow local administrator password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#allow_local_admin_password VappVm#allow_local_admin_password}
  */
  readonly allowLocalAdminPassword?: boolean | cdktf.IResolvable;
  /**
  * Auto generate password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#auto_generate_password VappVm#auto_generate_password}
  */
  readonly autoGeneratePassword?: boolean | cdktf.IResolvable;
  /**
  * 'true' value will change SID. Applicable only for Windows VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#change_sid VappVm#change_sid}
  */
  readonly changeSid?: boolean | cdktf.IResolvable;
  /**
  * 'true' value will enable guest customization. It may occur on first boot or when 'force' is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#enabled VappVm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * 'true' value will cause the VM to reboot on every 'apply' operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#force VappVm#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Script to run on initial boot or with customization.force=true set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#initscript VappVm#initscript}
  */
  readonly initscript?: string;
  /**
  * Enable this VM to join a domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#join_domain VappVm#join_domain}
  */
  readonly joinDomain?: boolean | cdktf.IResolvable;
  /**
  * Account organizational unit for domain name join
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#join_domain_account_ou VappVm#join_domain_account_ou}
  */
  readonly joinDomainAccountOu?: string;
  /**
  * Custom domain name for join
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#join_domain_name VappVm#join_domain_name}
  */
  readonly joinDomainName?: string;
  /**
  * Password for custom domain name join
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#join_domain_password VappVm#join_domain_password}
  */
  readonly joinDomainPassword?: string;
  /**
  * Username for custom domain name join
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#join_domain_user VappVm#join_domain_user}
  */
  readonly joinDomainUser?: string;
  /**
  * Use organization's domain for joining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#join_org_domain VappVm#join_org_domain}
  */
  readonly joinOrgDomain?: boolean | cdktf.IResolvable;
  /**
  * Require Administrator to change password on first login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#must_change_password_on_first_login VappVm#must_change_password_on_first_login}
  */
  readonly mustChangePasswordOnFirstLogin?: boolean | cdktf.IResolvable;
  /**
  * Number of times to log on automatically. '0' - disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#number_of_auto_logons VappVm#number_of_auto_logons}
  */
  readonly numberOfAutoLogons?: number;
}

export function vappVmCustomizationToTerraform(struct?: VappVmCustomizationOutputReference | VappVmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    allow_local_admin_password: cdktf.booleanToTerraform(struct!.allowLocalAdminPassword),
    auto_generate_password: cdktf.booleanToTerraform(struct!.autoGeneratePassword),
    change_sid: cdktf.booleanToTerraform(struct!.changeSid),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    force: cdktf.booleanToTerraform(struct!.force),
    initscript: cdktf.stringToTerraform(struct!.initscript),
    join_domain: cdktf.booleanToTerraform(struct!.joinDomain),
    join_domain_account_ou: cdktf.stringToTerraform(struct!.joinDomainAccountOu),
    join_domain_name: cdktf.stringToTerraform(struct!.joinDomainName),
    join_domain_password: cdktf.stringToTerraform(struct!.joinDomainPassword),
    join_domain_user: cdktf.stringToTerraform(struct!.joinDomainUser),
    join_org_domain: cdktf.booleanToTerraform(struct!.joinOrgDomain),
    must_change_password_on_first_login: cdktf.booleanToTerraform(struct!.mustChangePasswordOnFirstLogin),
    number_of_auto_logons: cdktf.numberToTerraform(struct!.numberOfAutoLogons),
  }
}


export function vappVmCustomizationToHclTerraform(struct?: VappVmCustomizationOutputReference | VappVmCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_local_admin_password: {
      value: cdktf.booleanToHclTerraform(struct!.allowLocalAdminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_generate_password: {
      value: cdktf.booleanToHclTerraform(struct!.autoGeneratePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    change_sid: {
      value: cdktf.booleanToHclTerraform(struct!.changeSid),
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
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initscript: {
      value: cdktf.stringToHclTerraform(struct!.initscript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_domain: {
      value: cdktf.booleanToHclTerraform(struct!.joinDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    join_domain_account_ou: {
      value: cdktf.stringToHclTerraform(struct!.joinDomainAccountOu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.joinDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_domain_password: {
      value: cdktf.stringToHclTerraform(struct!.joinDomainPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_domain_user: {
      value: cdktf.stringToHclTerraform(struct!.joinDomainUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_org_domain: {
      value: cdktf.booleanToHclTerraform(struct!.joinOrgDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    must_change_password_on_first_login: {
      value: cdktf.booleanToHclTerraform(struct!.mustChangePasswordOnFirstLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_auto_logons: {
      value: cdktf.numberToHclTerraform(struct!.numberOfAutoLogons),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappVmCustomizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VappVmCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._allowLocalAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLocalAdminPassword = this._allowLocalAdminPassword;
    }
    if (this._autoGeneratePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGeneratePassword = this._autoGeneratePassword;
    }
    if (this._changeSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeSid = this._changeSid;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._initscript !== undefined) {
      hasAnyValues = true;
      internalValueResult.initscript = this._initscript;
    }
    if (this._joinDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDomain = this._joinDomain;
    }
    if (this._joinDomainAccountOu !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDomainAccountOu = this._joinDomainAccountOu;
    }
    if (this._joinDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDomainName = this._joinDomainName;
    }
    if (this._joinDomainPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDomainPassword = this._joinDomainPassword;
    }
    if (this._joinDomainUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinDomainUser = this._joinDomainUser;
    }
    if (this._joinOrgDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinOrgDomain = this._joinOrgDomain;
    }
    if (this._mustChangePasswordOnFirstLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.mustChangePasswordOnFirstLogin = this._mustChangePasswordOnFirstLogin;
    }
    if (this._numberOfAutoLogons !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAutoLogons = this._numberOfAutoLogons;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._allowLocalAdminPassword = undefined;
      this._autoGeneratePassword = undefined;
      this._changeSid = undefined;
      this._enabled = undefined;
      this._force = undefined;
      this._initscript = undefined;
      this._joinDomain = undefined;
      this._joinDomainAccountOu = undefined;
      this._joinDomainName = undefined;
      this._joinDomainPassword = undefined;
      this._joinDomainUser = undefined;
      this._joinOrgDomain = undefined;
      this._mustChangePasswordOnFirstLogin = undefined;
      this._numberOfAutoLogons = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._allowLocalAdminPassword = value.allowLocalAdminPassword;
      this._autoGeneratePassword = value.autoGeneratePassword;
      this._changeSid = value.changeSid;
      this._enabled = value.enabled;
      this._force = value.force;
      this._initscript = value.initscript;
      this._joinDomain = value.joinDomain;
      this._joinDomainAccountOu = value.joinDomainAccountOu;
      this._joinDomainName = value.joinDomainName;
      this._joinDomainPassword = value.joinDomainPassword;
      this._joinDomainUser = value.joinDomainUser;
      this._joinOrgDomain = value.joinOrgDomain;
      this._mustChangePasswordOnFirstLogin = value.mustChangePasswordOnFirstLogin;
      this._numberOfAutoLogons = value.numberOfAutoLogons;
    }
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // allow_local_admin_password - computed: true, optional: true, required: false
  private _allowLocalAdminPassword?: boolean | cdktf.IResolvable; 
  public get allowLocalAdminPassword() {
    return this.getBooleanAttribute('allow_local_admin_password');
  }
  public set allowLocalAdminPassword(value: boolean | cdktf.IResolvable) {
    this._allowLocalAdminPassword = value;
  }
  public resetAllowLocalAdminPassword() {
    this._allowLocalAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalAdminPasswordInput() {
    return this._allowLocalAdminPassword;
  }

  // auto_generate_password - computed: true, optional: true, required: false
  private _autoGeneratePassword?: boolean | cdktf.IResolvable; 
  public get autoGeneratePassword() {
    return this.getBooleanAttribute('auto_generate_password');
  }
  public set autoGeneratePassword(value: boolean | cdktf.IResolvable) {
    this._autoGeneratePassword = value;
  }
  public resetAutoGeneratePassword() {
    this._autoGeneratePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGeneratePasswordInput() {
    return this._autoGeneratePassword;
  }

  // change_sid - computed: true, optional: true, required: false
  private _changeSid?: boolean | cdktf.IResolvable; 
  public get changeSid() {
    return this.getBooleanAttribute('change_sid');
  }
  public set changeSid(value: boolean | cdktf.IResolvable) {
    this._changeSid = value;
  }
  public resetChangeSid() {
    this._changeSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSidInput() {
    return this._changeSid;
  }

  // enabled - computed: true, optional: true, required: false
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

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // initscript - computed: true, optional: true, required: false
  private _initscript?: string; 
  public get initscript() {
    return this.getStringAttribute('initscript');
  }
  public set initscript(value: string) {
    this._initscript = value;
  }
  public resetInitscript() {
    this._initscript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initscriptInput() {
    return this._initscript;
  }

  // join_domain - computed: true, optional: true, required: false
  private _joinDomain?: boolean | cdktf.IResolvable; 
  public get joinDomain() {
    return this.getBooleanAttribute('join_domain');
  }
  public set joinDomain(value: boolean | cdktf.IResolvable) {
    this._joinDomain = value;
  }
  public resetJoinDomain() {
    this._joinDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainInput() {
    return this._joinDomain;
  }

  // join_domain_account_ou - computed: true, optional: true, required: false
  private _joinDomainAccountOu?: string; 
  public get joinDomainAccountOu() {
    return this.getStringAttribute('join_domain_account_ou');
  }
  public set joinDomainAccountOu(value: string) {
    this._joinDomainAccountOu = value;
  }
  public resetJoinDomainAccountOu() {
    this._joinDomainAccountOu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainAccountOuInput() {
    return this._joinDomainAccountOu;
  }

  // join_domain_name - computed: true, optional: true, required: false
  private _joinDomainName?: string; 
  public get joinDomainName() {
    return this.getStringAttribute('join_domain_name');
  }
  public set joinDomainName(value: string) {
    this._joinDomainName = value;
  }
  public resetJoinDomainName() {
    this._joinDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainNameInput() {
    return this._joinDomainName;
  }

  // join_domain_password - computed: true, optional: true, required: false
  private _joinDomainPassword?: string; 
  public get joinDomainPassword() {
    return this.getStringAttribute('join_domain_password');
  }
  public set joinDomainPassword(value: string) {
    this._joinDomainPassword = value;
  }
  public resetJoinDomainPassword() {
    this._joinDomainPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainPasswordInput() {
    return this._joinDomainPassword;
  }

  // join_domain_user - computed: true, optional: true, required: false
  private _joinDomainUser?: string; 
  public get joinDomainUser() {
    return this.getStringAttribute('join_domain_user');
  }
  public set joinDomainUser(value: string) {
    this._joinDomainUser = value;
  }
  public resetJoinDomainUser() {
    this._joinDomainUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinDomainUserInput() {
    return this._joinDomainUser;
  }

  // join_org_domain - computed: true, optional: true, required: false
  private _joinOrgDomain?: boolean | cdktf.IResolvable; 
  public get joinOrgDomain() {
    return this.getBooleanAttribute('join_org_domain');
  }
  public set joinOrgDomain(value: boolean | cdktf.IResolvable) {
    this._joinOrgDomain = value;
  }
  public resetJoinOrgDomain() {
    this._joinOrgDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinOrgDomainInput() {
    return this._joinOrgDomain;
  }

  // must_change_password_on_first_login - computed: true, optional: true, required: false
  private _mustChangePasswordOnFirstLogin?: boolean | cdktf.IResolvable; 
  public get mustChangePasswordOnFirstLogin() {
    return this.getBooleanAttribute('must_change_password_on_first_login');
  }
  public set mustChangePasswordOnFirstLogin(value: boolean | cdktf.IResolvable) {
    this._mustChangePasswordOnFirstLogin = value;
  }
  public resetMustChangePasswordOnFirstLogin() {
    this._mustChangePasswordOnFirstLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordOnFirstLoginInput() {
    return this._mustChangePasswordOnFirstLogin;
  }

  // number_of_auto_logons - computed: true, optional: true, required: false
  private _numberOfAutoLogons?: number; 
  public get numberOfAutoLogons() {
    return this.getNumberAttribute('number_of_auto_logons');
  }
  public set numberOfAutoLogons(value: number) {
    this._numberOfAutoLogons = value;
  }
  public resetNumberOfAutoLogons() {
    this._numberOfAutoLogons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAutoLogonsInput() {
    return this._numberOfAutoLogons;
  }
}
export interface VappVmDisk {
  /**
  * Bus number on which to place the disk controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#bus_number VappVm#bus_number}
  */
  readonly busNumber: string;
  /**
  * Independent disk name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#name VappVm#name}
  */
  readonly name: string;
  /**
  * Unit number (slot) on the bus specified by BusNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#unit_number VappVm#unit_number}
  */
  readonly unitNumber: string;
}

export function vappVmDiskToTerraform(struct?: VappVmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_number: cdktf.stringToTerraform(struct!.busNumber),
    name: cdktf.stringToTerraform(struct!.name),
    unit_number: cdktf.stringToTerraform(struct!.unitNumber),
  }
}


export function vappVmDiskToHclTerraform(struct?: VappVmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_number: {
      value: cdktf.stringToHclTerraform(struct!.busNumber),
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
    unit_number: {
      value: cdktf.stringToHclTerraform(struct!.unitNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappVmDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.busNumber = this._busNumber;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unitNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitNumber = this._unitNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busNumber = undefined;
      this._name = undefined;
      this._unitNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busNumber = value.busNumber;
      this._name = value.name;
      this._unitNumber = value.unitNumber;
    }
  }

  // bus_number - computed: false, optional: false, required: true
  private _busNumber?: string; 
  public get busNumber() {
    return this.getStringAttribute('bus_number');
  }
  public set busNumber(value: string) {
    this._busNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get busNumberInput() {
    return this._busNumber;
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

  // size_in_mb - computed: true, optional: false, required: false
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }

  // unit_number - computed: false, optional: false, required: true
  private _unitNumber?: string; 
  public get unitNumber() {
    return this.getStringAttribute('unit_number');
  }
  public set unitNumber(value: string) {
    this._unitNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNumberInput() {
    return this._unitNumber;
  }
}

export class VappVmDiskList extends cdktf.ComplexList {
  public internalValue? : VappVmDisk[] | cdktf.IResolvable

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
  public get(index: number): VappVmDiskOutputReference {
    return new VappVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VappVmMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#is_system VappVm#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#key VappVm#key}
  */
  readonly key?: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#type VappVm#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#user_access VappVm#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#value VappVm#value}
  */
  readonly value?: string;
}

export function vappVmMetadataEntryToTerraform(struct?: VappVmMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vappVmMetadataEntryToHclTerraform(struct?: VappVmMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
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

export class VappVmMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappVmMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VappVmMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : VappVmMetadataEntry[] | cdktf.IResolvable

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
  public get(index: number): VappVmMetadataEntryOutputReference {
    return new VappVmMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VappVmNetwork {
  /**
  * Network card adapter type. (e.g. 'E1000', 'E1000E', 'SRIOVETHERNETCARD', 'VMXNET3', 'PCNet32')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#adapter_type VappVm#adapter_type}
  */
  readonly adapterType?: string;
  /**
  * It defines if NIC is connected or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#connected VappVm#connected}
  */
  readonly connected?: boolean | cdktf.IResolvable;
  /**
  * IP of the VM. Settings depend on `ip_allocation_mode`. Omitted or empty for DHCP, POOL, NONE. Required for MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#ip VappVm#ip}
  */
  readonly ip?: string;
  /**
  * IP address allocation mode. One of POOL, DHCP, MANUAL, NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#ip_allocation_mode VappVm#ip_allocation_mode}
  */
  readonly ipAllocationMode: string;
  /**
  * Set to true if network interface should be primary. First network card in the list will be primary by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#is_primary VappVm#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Mac address of network interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#mac VappVm#mac}
  */
  readonly mac?: string;
  /**
  * Name of the network this VM should connect to. Always required except for `type` `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#name VappVm#name}
  */
  readonly name?: string;
  /**
  * Secondary (IPv6) IP of the VM. Settings depend on `secondary_ip_allocation_mode`. Omitted or empty for DHCP, POOL, NONE. Required for MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#secondary_ip VappVm#secondary_ip}
  */
  readonly secondaryIp?: string;
  /**
  * Secondary (IPv6) IP address allocation mode. One of POOL, DHCP, MANUAL, NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#secondary_ip_allocation_mode VappVm#secondary_ip_allocation_mode}
  */
  readonly secondaryIpAllocationMode?: string;
  /**
  * Network type to use: 'vapp', 'org' or 'none'. Use 'vapp' for vApp network, 'org' to attach Org VDC network. 'none' for empty NIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#type VappVm#type}
  */
  readonly type: string;
}

export function vappVmNetworkToTerraform(struct?: VappVmNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter_type: cdktf.stringToTerraform(struct!.adapterType),
    connected: cdktf.booleanToTerraform(struct!.connected),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_allocation_mode: cdktf.stringToTerraform(struct!.ipAllocationMode),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    secondary_ip: cdktf.stringToTerraform(struct!.secondaryIp),
    secondary_ip_allocation_mode: cdktf.stringToTerraform(struct!.secondaryIpAllocationMode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vappVmNetworkToHclTerraform(struct?: VappVmNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter_type: {
      value: cdktf.stringToHclTerraform(struct!.adapterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected: {
      value: cdktf.booleanToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_allocation_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipAllocationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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
    secondary_ip: {
      value: cdktf.stringToHclTerraform(struct!.secondaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ip_allocation_mode: {
      value: cdktf.stringToHclTerraform(struct!.secondaryIpAllocationMode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappVmNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappVmNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterType = this._adapterType;
    }
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipAllocationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocationMode = this._ipAllocationMode;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secondaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIp = this._secondaryIp;
    }
    if (this._secondaryIpAllocationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpAllocationMode = this._secondaryIpAllocationMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapterType = undefined;
      this._connected = undefined;
      this._ip = undefined;
      this._ipAllocationMode = undefined;
      this._isPrimary = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._secondaryIp = undefined;
      this._secondaryIpAllocationMode = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapterType = value.adapterType;
      this._connected = value.connected;
      this._ip = value.ip;
      this._ipAllocationMode = value.ipAllocationMode;
      this._isPrimary = value.isPrimary;
      this._mac = value.mac;
      this._name = value.name;
      this._secondaryIp = value.secondaryIp;
      this._secondaryIpAllocationMode = value.secondaryIpAllocationMode;
      this._type = value.type;
    }
  }

  // adapter_type - computed: true, optional: true, required: false
  private _adapterType?: string; 
  public get adapterType() {
    return this.getStringAttribute('adapter_type');
  }
  public set adapterType(value: string) {
    this._adapterType = value;
  }
  public resetAdapterType() {
    this._adapterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterTypeInput() {
    return this._adapterType;
  }

  // connected - computed: false, optional: true, required: false
  private _connected?: boolean | cdktf.IResolvable; 
  public get connected() {
    return this.getBooleanAttribute('connected');
  }
  public set connected(value: boolean | cdktf.IResolvable) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_allocation_mode - computed: false, optional: false, required: true
  private _ipAllocationMode?: string; 
  public get ipAllocationMode() {
    return this.getStringAttribute('ip_allocation_mode');
  }
  public set ipAllocationMode(value: string) {
    this._ipAllocationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationModeInput() {
    return this._ipAllocationMode;
  }

  // is_primary - computed: true, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // mac - computed: true, optional: true, required: false
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

  // secondary_ip - computed: true, optional: true, required: false
  private _secondaryIp?: string; 
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }
  public set secondaryIp(value: string) {
    this._secondaryIp = value;
  }
  public resetSecondaryIp() {
    this._secondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpInput() {
    return this._secondaryIp;
  }

  // secondary_ip_allocation_mode - computed: true, optional: true, required: false
  private _secondaryIpAllocationMode?: string; 
  public get secondaryIpAllocationMode() {
    return this.getStringAttribute('secondary_ip_allocation_mode');
  }
  public set secondaryIpAllocationMode(value: string) {
    this._secondaryIpAllocationMode = value;
  }
  public resetSecondaryIpAllocationMode() {
    this._secondaryIpAllocationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpAllocationModeInput() {
    return this._secondaryIpAllocationMode;
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

export class VappVmNetworkList extends cdktf.ComplexList {
  public internalValue? : VappVmNetwork[] | cdktf.IResolvable

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
  public get(index: number): VappVmNetworkOutputReference {
    return new VappVmNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VappVmOverrideTemplateDisk {
  /**
  * The number of the SCSI or IDE controller itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#bus_number VappVm#bus_number}
  */
  readonly busNumber: number;
  /**
  * The type of disk controller. Possible values: ide, parallel( LSI Logic Parallel SCSI), sas(LSI Logic SAS (SCSI)), paravirtual(Paravirtual (SCSI)), sata, nvme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#bus_type VappVm#bus_type}
  */
  readonly busType: string;
  /**
  * Specifies the IOPS for the disk. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#iops VappVm#iops}
  */
  readonly iops?: number;
  /**
  * The size of the disk in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#size_in_mb VappVm#size_in_mb}
  */
  readonly sizeInMb: number;
  /**
  * Storage profile to override the VM default one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#storage_profile VappVm#storage_profile}
  */
  readonly storageProfile?: string;
  /**
  * The device number on the SCSI or IDE controller of the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#unit_number VappVm#unit_number}
  */
  readonly unitNumber: number;
}

export function vappVmOverrideTemplateDiskToTerraform(struct?: VappVmOverrideTemplateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_number: cdktf.numberToTerraform(struct!.busNumber),
    bus_type: cdktf.stringToTerraform(struct!.busType),
    iops: cdktf.numberToTerraform(struct!.iops),
    size_in_mb: cdktf.numberToTerraform(struct!.sizeInMb),
    storage_profile: cdktf.stringToTerraform(struct!.storageProfile),
    unit_number: cdktf.numberToTerraform(struct!.unitNumber),
  }
}


export function vappVmOverrideTemplateDiskToHclTerraform(struct?: VappVmOverrideTemplateDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_number: {
      value: cdktf.numberToHclTerraform(struct!.busNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
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
    size_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_profile: {
      value: cdktf.stringToHclTerraform(struct!.storageProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_number: {
      value: cdktf.numberToHclTerraform(struct!.unitNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappVmOverrideTemplateDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappVmOverrideTemplateDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.busNumber = this._busNumber;
    }
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._sizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInMb = this._sizeInMb;
    }
    if (this._storageProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProfile = this._storageProfile;
    }
    if (this._unitNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitNumber = this._unitNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappVmOverrideTemplateDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busNumber = undefined;
      this._busType = undefined;
      this._iops = undefined;
      this._sizeInMb = undefined;
      this._storageProfile = undefined;
      this._unitNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busNumber = value.busNumber;
      this._busType = value.busType;
      this._iops = value.iops;
      this._sizeInMb = value.sizeInMb;
      this._storageProfile = value.storageProfile;
      this._unitNumber = value.unitNumber;
    }
  }

  // bus_number - computed: false, optional: false, required: true
  private _busNumber?: number; 
  public get busNumber() {
    return this.getNumberAttribute('bus_number');
  }
  public set busNumber(value: number) {
    this._busNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get busNumberInput() {
    return this._busNumber;
  }

  // bus_type - computed: false, optional: false, required: true
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
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

  // size_in_mb - computed: false, optional: false, required: true
  private _sizeInMb?: number; 
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }
  public set sizeInMb(value: number) {
    this._sizeInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMbInput() {
    return this._sizeInMb;
  }

  // storage_profile - computed: false, optional: true, required: false
  private _storageProfile?: string; 
  public get storageProfile() {
    return this.getStringAttribute('storage_profile');
  }
  public set storageProfile(value: string) {
    this._storageProfile = value;
  }
  public resetStorageProfile() {
    this._storageProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile;
  }

  // unit_number - computed: false, optional: false, required: true
  private _unitNumber?: number; 
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
  public set unitNumber(value: number) {
    this._unitNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNumberInput() {
    return this._unitNumber;
  }
}

export class VappVmOverrideTemplateDiskList extends cdktf.ComplexList {
  public internalValue? : VappVmOverrideTemplateDisk[] | cdktf.IResolvable

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
  public get(index: number): VappVmOverrideTemplateDiskOutputReference {
    return new VappVmOverrideTemplateDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VappVmSetExtraConfig {
  /**
  * The key of the extra configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#key VappVm#key}
  */
  readonly key: string;
  /**
  * The value of the extra configuration item. Leaving the `value` field empty will result in the item deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#value VappVm#value}
  */
  readonly value: string;
}

export function vappVmSetExtraConfigToTerraform(struct?: VappVmSetExtraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vappVmSetExtraConfigToHclTerraform(struct?: VappVmSetExtraConfig | cdktf.IResolvable): any {
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

export class VappVmSetExtraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappVmSetExtraConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VappVmSetExtraConfig | cdktf.IResolvable | undefined) {
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

export class VappVmSetExtraConfigList extends cdktf.ComplexList {
  public internalValue? : VappVmSetExtraConfig[] | cdktf.IResolvable

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
  public get(index: number): VappVmSetExtraConfigOutputReference {
    return new VappVmSetExtraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm vcd_vapp_vm}
*/
export class VappVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vapp_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VappVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VappVm to import
  * @param importFromId The id of the existing VappVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VappVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vapp_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_vm vcd_vapp_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VappVmConfig
  */
  public constructor(scope: Construct, id: string, config: VappVmConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vapp_vm',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptAllEulas = config.acceptAllEulas;
    this._bootImage = config.bootImage;
    this._bootImageId = config.bootImageId;
    this._catalogName = config.catalogName;
    this._computerName = config.computerName;
    this._consolidateDisksOnCreate = config.consolidateDisksOnCreate;
    this._copyFromVmId = config.copyFromVmId;
    this._cpuCores = config.cpuCores;
    this._cpuHotAddEnabled = config.cpuHotAddEnabled;
    this._cpuLimit = config.cpuLimit;
    this._cpuPriority = config.cpuPriority;
    this._cpuReservation = config.cpuReservation;
    this._cpuShares = config.cpuShares;
    this._cpus = config.cpus;
    this._description = config.description;
    this._exposeHardwareVirtualization = config.exposeHardwareVirtualization;
    this._firmware = config.firmware;
    this._guestProperties = config.guestProperties;
    this._hardwareVersion = config.hardwareVersion;
    this._href = config.href;
    this._id = config.id;
    this._memory = config.memory;
    this._memoryHotAddEnabled = config.memoryHotAddEnabled;
    this._memoryLimit = config.memoryLimit;
    this._memoryPriority = config.memoryPriority;
    this._memoryReservation = config.memoryReservation;
    this._memoryShares = config.memoryShares;
    this._metadata = config.metadata;
    this._name = config.name;
    this._networkDhcpWaitSeconds = config.networkDhcpWaitSeconds;
    this._org = config.org;
    this._osType = config.osType;
    this._placementPolicyId = config.placementPolicyId;
    this._powerOn = config.powerOn;
    this._preventUpdatePowerOff = config.preventUpdatePowerOff;
    this._securityTags = config.securityTags;
    this._sizingPolicyId = config.sizingPolicyId;
    this._storageProfile = config.storageProfile;
    this._templateName = config.templateName;
    this._vappName = config.vappName;
    this._vappTemplateId = config.vappTemplateId;
    this._vdc = config.vdc;
    this._vmNameInTemplate = config.vmNameInTemplate;
    this._bootOptions.internalValue = config.bootOptions;
    this._customization.internalValue = config.customization;
    this._disk.internalValue = config.disk;
    this._metadataEntry.internalValue = config.metadataEntry;
    this._network.internalValue = config.network;
    this._overrideTemplateDisk.internalValue = config.overrideTemplateDisk;
    this._setExtraConfig.internalValue = config.setExtraConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_all_eulas - computed: false, optional: true, required: false
  private _acceptAllEulas?: boolean | cdktf.IResolvable; 
  public get acceptAllEulas() {
    return this.getBooleanAttribute('accept_all_eulas');
  }
  public set acceptAllEulas(value: boolean | cdktf.IResolvable) {
    this._acceptAllEulas = value;
  }
  public resetAcceptAllEulas() {
    this._acceptAllEulas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAllEulasInput() {
    return this._acceptAllEulas;
  }

  // boot_image - computed: false, optional: true, required: false
  private _bootImage?: string; 
  public get bootImage() {
    return this.getStringAttribute('boot_image');
  }
  public set bootImage(value: string) {
    this._bootImage = value;
  }
  public resetBootImage() {
    this._bootImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootImageInput() {
    return this._bootImage;
  }

  // boot_image_id - computed: false, optional: true, required: false
  private _bootImageId?: string; 
  public get bootImageId() {
    return this.getStringAttribute('boot_image_id');
  }
  public set bootImageId(value: string) {
    this._bootImageId = value;
  }
  public resetBootImageId() {
    this._bootImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootImageIdInput() {
    return this._bootImageId;
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // computer_name - computed: true, optional: true, required: false
  private _computerName?: string; 
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  public resetComputerName() {
    this._computerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName;
  }

  // consolidate_disks_on_create - computed: false, optional: true, required: false
  private _consolidateDisksOnCreate?: boolean | cdktf.IResolvable; 
  public get consolidateDisksOnCreate() {
    return this.getBooleanAttribute('consolidate_disks_on_create');
  }
  public set consolidateDisksOnCreate(value: boolean | cdktf.IResolvable) {
    this._consolidateDisksOnCreate = value;
  }
  public resetConsolidateDisksOnCreate() {
    this._consolidateDisksOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidateDisksOnCreateInput() {
    return this._consolidateDisksOnCreate;
  }

  // copy_from_vm_id - computed: false, optional: true, required: false
  private _copyFromVmId?: string; 
  public get copyFromVmId() {
    return this.getStringAttribute('copy_from_vm_id');
  }
  public set copyFromVmId(value: string) {
    this._copyFromVmId = value;
  }
  public resetCopyFromVmId() {
    this._copyFromVmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromVmIdInput() {
    return this._copyFromVmId;
  }

  // cpu_cores - computed: true, optional: true, required: false
  private _cpuCores?: number; 
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }
  public set cpuCores(value: number) {
    this._cpuCores = value;
  }
  public resetCpuCores() {
    this._cpuCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoresInput() {
    return this._cpuCores;
  }

  // cpu_hot_add_enabled - computed: false, optional: true, required: false
  private _cpuHotAddEnabled?: boolean | cdktf.IResolvable; 
  public get cpuHotAddEnabled() {
    return this.getBooleanAttribute('cpu_hot_add_enabled');
  }
  public set cpuHotAddEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuHotAddEnabled = value;
  }
  public resetCpuHotAddEnabled() {
    this._cpuHotAddEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuHotAddEnabledInput() {
    return this._cpuHotAddEnabled;
  }

  // cpu_limit - computed: true, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_priority - computed: true, optional: true, required: false
  private _cpuPriority?: string; 
  public get cpuPriority() {
    return this.getStringAttribute('cpu_priority');
  }
  public set cpuPriority(value: string) {
    this._cpuPriority = value;
  }
  public resetCpuPriority() {
    this._cpuPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPriorityInput() {
    return this._cpuPriority;
  }

  // cpu_reservation - computed: true, optional: true, required: false
  private _cpuReservation?: number; 
  public get cpuReservation() {
    return this.getNumberAttribute('cpu_reservation');
  }
  public set cpuReservation(value: number) {
    this._cpuReservation = value;
  }
  public resetCpuReservation() {
    this._cpuReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInput() {
    return this._cpuReservation;
  }

  // cpu_shares - computed: true, optional: true, required: false
  private _cpuShares?: number; 
  public get cpuShares() {
    return this.getNumberAttribute('cpu_shares');
  }
  public set cpuShares(value: number) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares;
  }

  // cpus - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // expose_hardware_virtualization - computed: false, optional: true, required: false
  private _exposeHardwareVirtualization?: boolean | cdktf.IResolvable; 
  public get exposeHardwareVirtualization() {
    return this.getBooleanAttribute('expose_hardware_virtualization');
  }
  public set exposeHardwareVirtualization(value: boolean | cdktf.IResolvable) {
    this._exposeHardwareVirtualization = value;
  }
  public resetExposeHardwareVirtualization() {
    this._exposeHardwareVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHardwareVirtualizationInput() {
    return this._exposeHardwareVirtualization;
  }

  // extra_config - computed: true, optional: false, required: false
  private _extraConfig = new VappVmExtraConfigList(this, "extra_config", false);
  public get extraConfig() {
    return this._extraConfig;
  }

  // firmware - computed: true, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // guest_properties - computed: false, optional: true, required: false
  private _guestProperties?: { [key: string]: string }; 
  public get guestProperties() {
    return this.getStringMapAttribute('guest_properties');
  }
  public set guestProperties(value: { [key: string]: string }) {
    this._guestProperties = value;
  }
  public resetGuestProperties() {
    this._guestProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPropertiesInput() {
    return this._guestProperties;
  }

  // hardware_version - computed: true, optional: true, required: false
  private _hardwareVersion?: string; 
  public get hardwareVersion() {
    return this.getStringAttribute('hardware_version');
  }
  public set hardwareVersion(value: string) {
    this._hardwareVersion = value;
  }
  public resetHardwareVersion() {
    this._hardwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareVersionInput() {
    return this._hardwareVersion;
  }

  // href - computed: true, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
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

  // imported - computed: true, optional: false, required: false
  public get imported() {
    return this.getBooleanAttribute('imported');
  }

  // inherited_metadata - computed: true, optional: false, required: false
  private _inheritedMetadata = new cdktf.StringMap(this, "inherited_metadata");
  public get inheritedMetadata() {
    return this._inheritedMetadata;
  }

  // internal_disk - computed: true, optional: false, required: false
  private _internalDisk = new VappVmInternalDiskList(this, "internal_disk", false);
  public get internalDisk() {
    return this._internalDisk;
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

  // memory_hot_add_enabled - computed: false, optional: true, required: false
  private _memoryHotAddEnabled?: boolean | cdktf.IResolvable; 
  public get memoryHotAddEnabled() {
    return this.getBooleanAttribute('memory_hot_add_enabled');
  }
  public set memoryHotAddEnabled(value: boolean | cdktf.IResolvable) {
    this._memoryHotAddEnabled = value;
  }
  public resetMemoryHotAddEnabled() {
    this._memoryHotAddEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryHotAddEnabledInput() {
    return this._memoryHotAddEnabled;
  }

  // memory_limit - computed: true, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_priority - computed: true, optional: true, required: false
  private _memoryPriority?: string; 
  public get memoryPriority() {
    return this.getStringAttribute('memory_priority');
  }
  public set memoryPriority(value: string) {
    this._memoryPriority = value;
  }
  public resetMemoryPriority() {
    this._memoryPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPriorityInput() {
    return this._memoryPriority;
  }

  // memory_reservation - computed: true, optional: true, required: false
  private _memoryReservation?: number; 
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }
  public set memoryReservation(value: number) {
    this._memoryReservation = value;
  }
  public resetMemoryReservation() {
    this._memoryReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
  }

  // memory_shares - computed: true, optional: true, required: false
  private _memoryShares?: number; 
  public get memoryShares() {
    return this.getNumberAttribute('memory_shares');
  }
  public set memoryShares(value: number) {
    this._memoryShares = value;
  }
  public resetMemoryShares() {
    this._memoryShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySharesInput() {
    return this._memoryShares;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // network_dhcp_wait_seconds - computed: false, optional: true, required: false
  private _networkDhcpWaitSeconds?: number; 
  public get networkDhcpWaitSeconds() {
    return this.getNumberAttribute('network_dhcp_wait_seconds');
  }
  public set networkDhcpWaitSeconds(value: number) {
    this._networkDhcpWaitSeconds = value;
  }
  public resetNetworkDhcpWaitSeconds() {
    this._networkDhcpWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDhcpWaitSecondsInput() {
    return this._networkDhcpWaitSeconds;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // os_type - computed: true, optional: true, required: false
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

  // placement_policy_id - computed: true, optional: true, required: false
  private _placementPolicyId?: string; 
  public get placementPolicyId() {
    return this.getStringAttribute('placement_policy_id');
  }
  public set placementPolicyId(value: string) {
    this._placementPolicyId = value;
  }
  public resetPlacementPolicyId() {
    this._placementPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyIdInput() {
    return this._placementPolicyId;
  }

  // power_on - computed: false, optional: true, required: false
  private _powerOn?: boolean | cdktf.IResolvable; 
  public get powerOn() {
    return this.getBooleanAttribute('power_on');
  }
  public set powerOn(value: boolean | cdktf.IResolvable) {
    this._powerOn = value;
  }
  public resetPowerOn() {
    this._powerOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOnInput() {
    return this._powerOn;
  }

  // prevent_update_power_off - computed: false, optional: true, required: false
  private _preventUpdatePowerOff?: boolean | cdktf.IResolvable; 
  public get preventUpdatePowerOff() {
    return this.getBooleanAttribute('prevent_update_power_off');
  }
  public set preventUpdatePowerOff(value: boolean | cdktf.IResolvable) {
    this._preventUpdatePowerOff = value;
  }
  public resetPreventUpdatePowerOff() {
    this._preventUpdatePowerOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUpdatePowerOffInput() {
    return this._preventUpdatePowerOff;
  }

  // security_tags - computed: true, optional: true, required: false
  private _securityTags?: string[]; 
  public get securityTags() {
    return cdktf.Fn.tolist(this.getListAttribute('security_tags'));
  }
  public set securityTags(value: string[]) {
    this._securityTags = value;
  }
  public resetSecurityTags() {
    this._securityTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTagsInput() {
    return this._securityTags;
  }

  // sizing_policy_id - computed: true, optional: true, required: false
  private _sizingPolicyId?: string; 
  public get sizingPolicyId() {
    return this.getStringAttribute('sizing_policy_id');
  }
  public set sizingPolicyId(value: string) {
    this._sizingPolicyId = value;
  }
  public resetSizingPolicyId() {
    this._sizingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingPolicyIdInput() {
    return this._sizingPolicyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_text - computed: true, optional: false, required: false
  public get statusText() {
    return this.getStringAttribute('status_text');
  }

  // storage_profile - computed: true, optional: true, required: false
  private _storageProfile?: string; 
  public get storageProfile() {
    return this.getStringAttribute('storage_profile');
  }
  public set storageProfile(value: string) {
    this._storageProfile = value;
  }
  public resetStorageProfile() {
    this._storageProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vapp_id - computed: true, optional: false, required: false
  public get vappId() {
    return this.getStringAttribute('vapp_id');
  }

  // vapp_name - computed: false, optional: false, required: true
  private _vappName?: string; 
  public get vappName() {
    return this.getStringAttribute('vapp_name');
  }
  public set vappName(value: string) {
    this._vappName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vappNameInput() {
    return this._vappName;
  }

  // vapp_template_id - computed: false, optional: true, required: false
  private _vappTemplateId?: string; 
  public get vappTemplateId() {
    return this.getStringAttribute('vapp_template_id');
  }
  public set vappTemplateId(value: string) {
    this._vappTemplateId = value;
  }
  public resetVappTemplateId() {
    this._vappTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappTemplateIdInput() {
    return this._vappTemplateId;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // vm_name_in_template - computed: false, optional: true, required: false
  private _vmNameInTemplate?: string; 
  public get vmNameInTemplate() {
    return this.getStringAttribute('vm_name_in_template');
  }
  public set vmNameInTemplate(value: string) {
    this._vmNameInTemplate = value;
  }
  public resetVmNameInTemplate() {
    this._vmNameInTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInTemplateInput() {
    return this._vmNameInTemplate;
  }

  // vm_type - computed: true, optional: false, required: false
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }

  // boot_options - computed: false, optional: true, required: false
  private _bootOptions = new VappVmBootOptionsOutputReference(this, "boot_options");
  public get bootOptions() {
    return this._bootOptions;
  }
  public putBootOptions(value: VappVmBootOptions) {
    this._bootOptions.internalValue = value;
  }
  public resetBootOptions() {
    this._bootOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOptionsInput() {
    return this._bootOptions.internalValue;
  }

  // customization - computed: false, optional: true, required: false
  private _customization = new VappVmCustomizationOutputReference(this, "customization");
  public get customization() {
    return this._customization;
  }
  public putCustomization(value: VappVmCustomization) {
    this._customization.internalValue = value;
  }
  public resetCustomization() {
    this._customization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationInput() {
    return this._customization.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new VappVmDiskList(this, "disk", true);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VappVmDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new VappVmMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: VappVmMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new VappVmNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: VappVmNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // override_template_disk - computed: false, optional: true, required: false
  private _overrideTemplateDisk = new VappVmOverrideTemplateDiskList(this, "override_template_disk", true);
  public get overrideTemplateDisk() {
    return this._overrideTemplateDisk;
  }
  public putOverrideTemplateDisk(value: VappVmOverrideTemplateDisk[] | cdktf.IResolvable) {
    this._overrideTemplateDisk.internalValue = value;
  }
  public resetOverrideTemplateDisk() {
    this._overrideTemplateDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTemplateDiskInput() {
    return this._overrideTemplateDisk.internalValue;
  }

  // set_extra_config - computed: false, optional: true, required: false
  private _setExtraConfig = new VappVmSetExtraConfigList(this, "set_extra_config", true);
  public get setExtraConfig() {
    return this._setExtraConfig;
  }
  public putSetExtraConfig(value: VappVmSetExtraConfig[] | cdktf.IResolvable) {
    this._setExtraConfig.internalValue = value;
  }
  public resetSetExtraConfig() {
    this._setExtraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtraConfigInput() {
    return this._setExtraConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_all_eulas: cdktf.booleanToTerraform(this._acceptAllEulas),
      boot_image: cdktf.stringToTerraform(this._bootImage),
      boot_image_id: cdktf.stringToTerraform(this._bootImageId),
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      computer_name: cdktf.stringToTerraform(this._computerName),
      consolidate_disks_on_create: cdktf.booleanToTerraform(this._consolidateDisksOnCreate),
      copy_from_vm_id: cdktf.stringToTerraform(this._copyFromVmId),
      cpu_cores: cdktf.numberToTerraform(this._cpuCores),
      cpu_hot_add_enabled: cdktf.booleanToTerraform(this._cpuHotAddEnabled),
      cpu_limit: cdktf.numberToTerraform(this._cpuLimit),
      cpu_priority: cdktf.stringToTerraform(this._cpuPriority),
      cpu_reservation: cdktf.numberToTerraform(this._cpuReservation),
      cpu_shares: cdktf.numberToTerraform(this._cpuShares),
      cpus: cdktf.numberToTerraform(this._cpus),
      description: cdktf.stringToTerraform(this._description),
      expose_hardware_virtualization: cdktf.booleanToTerraform(this._exposeHardwareVirtualization),
      firmware: cdktf.stringToTerraform(this._firmware),
      guest_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._guestProperties),
      hardware_version: cdktf.stringToTerraform(this._hardwareVersion),
      href: cdktf.stringToTerraform(this._href),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      memory_hot_add_enabled: cdktf.booleanToTerraform(this._memoryHotAddEnabled),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      memory_priority: cdktf.stringToTerraform(this._memoryPriority),
      memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
      memory_shares: cdktf.numberToTerraform(this._memoryShares),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      network_dhcp_wait_seconds: cdktf.numberToTerraform(this._networkDhcpWaitSeconds),
      org: cdktf.stringToTerraform(this._org),
      os_type: cdktf.stringToTerraform(this._osType),
      placement_policy_id: cdktf.stringToTerraform(this._placementPolicyId),
      power_on: cdktf.booleanToTerraform(this._powerOn),
      prevent_update_power_off: cdktf.booleanToTerraform(this._preventUpdatePowerOff),
      security_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityTags),
      sizing_policy_id: cdktf.stringToTerraform(this._sizingPolicyId),
      storage_profile: cdktf.stringToTerraform(this._storageProfile),
      template_name: cdktf.stringToTerraform(this._templateName),
      vapp_name: cdktf.stringToTerraform(this._vappName),
      vapp_template_id: cdktf.stringToTerraform(this._vappTemplateId),
      vdc: cdktf.stringToTerraform(this._vdc),
      vm_name_in_template: cdktf.stringToTerraform(this._vmNameInTemplate),
      boot_options: vappVmBootOptionsToTerraform(this._bootOptions.internalValue),
      customization: vappVmCustomizationToTerraform(this._customization.internalValue),
      disk: cdktf.listMapper(vappVmDiskToTerraform, true)(this._disk.internalValue),
      metadata_entry: cdktf.listMapper(vappVmMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
      network: cdktf.listMapper(vappVmNetworkToTerraform, true)(this._network.internalValue),
      override_template_disk: cdktf.listMapper(vappVmOverrideTemplateDiskToTerraform, true)(this._overrideTemplateDisk.internalValue),
      set_extra_config: cdktf.listMapper(vappVmSetExtraConfigToTerraform, true)(this._setExtraConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_all_eulas: {
        value: cdktf.booleanToHclTerraform(this._acceptAllEulas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_image: {
        value: cdktf.stringToHclTerraform(this._bootImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_image_id: {
        value: cdktf.stringToHclTerraform(this._bootImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_name: {
        value: cdktf.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      computer_name: {
        value: cdktf.stringToHclTerraform(this._computerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consolidate_disks_on_create: {
        value: cdktf.booleanToHclTerraform(this._consolidateDisksOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_from_vm_id: {
        value: cdktf.stringToHclTerraform(this._copyFromVmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_cores: {
        value: cdktf.numberToHclTerraform(this._cpuCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_hot_add_enabled: {
        value: cdktf.booleanToHclTerraform(this._cpuHotAddEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_limit: {
        value: cdktf.numberToHclTerraform(this._cpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_priority: {
        value: cdktf.stringToHclTerraform(this._cpuPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_reservation: {
        value: cdktf.numberToHclTerraform(this._cpuReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_shares: {
        value: cdktf.numberToHclTerraform(this._cpuShares),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expose_hardware_virtualization: {
        value: cdktf.booleanToHclTerraform(this._exposeHardwareVirtualization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firmware: {
        value: cdktf.stringToHclTerraform(this._firmware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._guestProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hardware_version: {
        value: cdktf.stringToHclTerraform(this._hardwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      href: {
        value: cdktf.stringToHclTerraform(this._href),
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
      memory_hot_add_enabled: {
        value: cdktf.booleanToHclTerraform(this._memoryHotAddEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_limit: {
        value: cdktf.numberToHclTerraform(this._memoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_priority: {
        value: cdktf.stringToHclTerraform(this._memoryPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_reservation: {
        value: cdktf.numberToHclTerraform(this._memoryReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_shares: {
        value: cdktf.numberToHclTerraform(this._memoryShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
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
      network_dhcp_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._networkDhcpWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
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
      placement_policy_id: {
        value: cdktf.stringToHclTerraform(this._placementPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_on: {
        value: cdktf.booleanToHclTerraform(this._powerOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_update_power_off: {
        value: cdktf.booleanToHclTerraform(this._preventUpdatePowerOff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sizing_policy_id: {
        value: cdktf.stringToHclTerraform(this._sizingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_profile: {
        value: cdktf.stringToHclTerraform(this._storageProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vapp_name: {
        value: cdktf.stringToHclTerraform(this._vappName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vapp_template_id: {
        value: cdktf.stringToHclTerraform(this._vappTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_name_in_template: {
        value: cdktf.stringToHclTerraform(this._vmNameInTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_options: {
        value: vappVmBootOptionsToHclTerraform(this._bootOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VappVmBootOptionsList",
      },
      customization: {
        value: vappVmCustomizationToHclTerraform(this._customization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VappVmCustomizationList",
      },
      disk: {
        value: cdktf.listMapperHcl(vappVmDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VappVmDiskList",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(vappVmMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VappVmMetadataEntryList",
      },
      network: {
        value: cdktf.listMapperHcl(vappVmNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VappVmNetworkList",
      },
      override_template_disk: {
        value: cdktf.listMapperHcl(vappVmOverrideTemplateDiskToHclTerraform, true)(this._overrideTemplateDisk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VappVmOverrideTemplateDiskList",
      },
      set_extra_config: {
        value: cdktf.listMapperHcl(vappVmSetExtraConfigToHclTerraform, true)(this._setExtraConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VappVmSetExtraConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
