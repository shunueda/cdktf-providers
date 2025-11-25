// https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Propery and value separated by '
  * ', e.g. 'tag1=val1
  * tag2=val2'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#advanced Vm#advanced}
  */
  readonly advanced?: string;
  /**
  * Allow hotplug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#allow_hotplug Vm#allow_hotplug}
  */
  readonly allowHotplug?: boolean | cdktf.IResolvable;
  /**
  * Boot delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#boot_delay Vm#boot_delay}
  */
  readonly bootDelay?: number;
  /**
  * Boot order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#boot_order Vm#boot_order}
  */
  readonly bootOrder?: string;
  /**
  * Cloudinit datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#cloudinit_datasource Vm#cloudinit_datasource}
  */
  readonly cloudinitDatasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#cloudinit_files Vm#cloudinit_files}
  */
  readonly cloudinitFiles?: VmCloudinitFiles[] | cdktf.IResolvable;
  /**
  * Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#cluster Vm#cluster}
  */
  readonly cluster?: string;
  /**
  * Console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#console Vm#console}
  */
  readonly console?: string;
  /**
  * Console pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#console_pass Vm#console_pass}
  */
  readonly consolePass?: string;
  /**
  * Console pass enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#console_pass_enabled Vm#console_pass_enabled}
  */
  readonly consolePassEnabled?: boolean | cdktf.IResolvable;
  /**
  * CPU cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#cpu_cores Vm#cpu_cores}
  */
  readonly cpuCores?: number;
  /**
  * CPU type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#cpu_type Vm#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#description Vm#description}
  */
  readonly description?: string;
  /**
  * Disable hypervisor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#disable_hypervisor Vm#disable_hypervisor}
  */
  readonly disableHypervisor?: boolean | cdktf.IResolvable;
  /**
  * Disable powercycle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#disable_powercycle Vm#disable_powercycle}
  */
  readonly disablePowercycle?: boolean | cdktf.IResolvable;
  /**
  * Display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#display Vm#display}
  */
  readonly display?: string;
  /**
  * VM state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#enabled Vm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Guest agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#guest_agent Vm#guest_agent}
  */
  readonly guestAgent?: boolean | cdktf.IResolvable;
  /**
  * Guest agent Ips
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#guest_agent_ips Vm#guest_agent_ips}
  */
  readonly guestAgentIps?: string[];
  /**
  * HA group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#ha_group Vm#ha_group}
  */
  readonly haGroup?: string;
  /**
  * Ignored guest ips (CIDR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#ignored_guest_ips Vm#ignored_guest_ips}
  */
  readonly ignoredGuestIps?: string;
  /**
  * Machine type (validated dynamically against VergeOS API)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#machine_type Vm#machine_type}
  */
  readonly machineType?: string;
  /**
  * Unique vm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
  /**
  * Nested virtualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#nested_virtualization Vm#nested_virtualization}
  */
  readonly nestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * OS description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#os_description Vm#os_description}
  */
  readonly osDescription?: string;
  /**
  * USB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#os_family Vm#os_family}
  */
  readonly osFamily?: string;
  /**
  * Power state of the vm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#powerstate Vm#powerstate}
  */
  readonly powerstate?: boolean | cdktf.IResolvable;
  /**
  * Preferred node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#preferred_node Vm#preferred_node}
  */
  readonly preferredNode?: string;
  /**
  * RAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#ram Vm#ram}
  */
  readonly ram?: number;
  /**
  * RTC base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#rtc_base Vm#rtc_base}
  */
  readonly rtcBase?: string;
  /**
  * Secure boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#secure_boot Vm#secure_boot}
  */
  readonly secureBoot?: boolean | cdktf.IResolvable;
  /**
  * Serial port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#serial_port Vm#serial_port}
  */
  readonly serialPort?: boolean | cdktf.IResolvable;
  /**
  * Snapshot profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#snapshot_profile Vm#snapshot_profile}
  */
  readonly snapshotProfile?: string;
  /**
  * Sound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#sound Vm#sound}
  */
  readonly sound?: string;
  /**
  * UEFI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#uefi Vm#uefi}
  */
  readonly uefi?: boolean | cdktf.IResolvable;
  /**
  * USB tablet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#usb_tablet Vm#usb_tablet}
  */
  readonly usbTablet?: boolean | cdktf.IResolvable;
  /**
  * Video
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#video Vm#video}
  */
  readonly video?: string;
  /**
  * Wait time in seconds for guest agent to be ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#wait_for_guest_agent_info Vm#wait_for_guest_agent_info}
  */
  readonly waitForGuestAgentInfo?: number;
  /**
  * Wait time in seconds for guest ip to be ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#wait_for_guest_ip_timeout Vm#wait_for_guest_ip_timeout}
  */
  readonly waitForGuestIpTimeout?: number;
  /**
  * vergeio_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#vergeio_device Vm#vergeio_device}
  */
  readonly vergeioDevice?: VmVergeioDevice[] | cdktf.IResolvable;
  /**
  * vergeio_drive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#vergeio_drive Vm#vergeio_drive}
  */
  readonly vergeioDrive?: VmVergeioDrive[] | cdktf.IResolvable;
  /**
  * vergeio_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#vergeio_nic Vm#vergeio_nic}
  */
  readonly vergeioNic?: VmVergeioNic[] | cdktf.IResolvable;
}
export interface VmCloudinitFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#contents Vm#contents}
  */
  readonly contents: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
}

export function vmCloudinitFilesToTerraform(struct?: VmCloudinitFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmCloudinitFilesToHclTerraform(struct?: VmCloudinitFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.stringToHclTerraform(struct!.contents),
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

export class VmCloudinitFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmCloudinitFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmCloudinitFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._name = value.name;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
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
}

export class VmCloudinitFilesList extends cdktf.ComplexList {
  public internalValue? : VmCloudinitFiles[] | cdktf.IResolvable

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
  public get(index: number): VmCloudinitFilesOutputReference {
    return new VmCloudinitFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmVergeioDeviceNvidiaVgpuSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#disable_vnc Vm#disable_vnc}
  */
  readonly disableVnc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#enable_debugging Vm#enable_debugging}
  */
  readonly enableDebugging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#enable_profiling Vm#enable_profiling}
  */
  readonly enableProfiling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#enable_uvm Vm#enable_uvm}
  */
  readonly enableUvm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#frame_rate_limiter Vm#frame_rate_limiter}
  */
  readonly frameRateLimiter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#key Vm#key}
  */
  readonly key?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#machine_device Vm#machine_device}
  */
  readonly machineDevice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#profile_type Vm#profile_type}
  */
  readonly profileType?: string;
}

export function vmVergeioDeviceNvidiaVgpuSettingsToTerraform(struct?: VmVergeioDeviceNvidiaVgpuSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_vnc: cdktf.booleanToTerraform(struct!.disableVnc),
    enable_debugging: cdktf.booleanToTerraform(struct!.enableDebugging),
    enable_profiling: cdktf.booleanToTerraform(struct!.enableProfiling),
    enable_uvm: cdktf.booleanToTerraform(struct!.enableUvm),
    frame_rate_limiter: cdktf.numberToTerraform(struct!.frameRateLimiter),
    key: cdktf.numberToTerraform(struct!.key),
    machine_device: cdktf.numberToTerraform(struct!.machineDevice),
    profile_type: cdktf.stringToTerraform(struct!.profileType),
  }
}


export function vmVergeioDeviceNvidiaVgpuSettingsToHclTerraform(struct?: VmVergeioDeviceNvidiaVgpuSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_vnc: {
      value: cdktf.booleanToHclTerraform(struct!.disableVnc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_debugging: {
      value: cdktf.booleanToHclTerraform(struct!.enableDebugging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_profiling: {
      value: cdktf.booleanToHclTerraform(struct!.enableProfiling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_uvm: {
      value: cdktf.booleanToHclTerraform(struct!.enableUvm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frame_rate_limiter: {
      value: cdktf.numberToHclTerraform(struct!.frameRateLimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_device: {
      value: cdktf.numberToHclTerraform(struct!.machineDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_type: {
      value: cdktf.stringToHclTerraform(struct!.profileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVergeioDeviceNvidiaVgpuSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmVergeioDeviceNvidiaVgpuSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVnc = this._disableVnc;
    }
    if (this._enableDebugging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDebugging = this._enableDebugging;
    }
    if (this._enableProfiling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableProfiling = this._enableProfiling;
    }
    if (this._enableUvm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUvm = this._enableUvm;
    }
    if (this._frameRateLimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameRateLimiter = this._frameRateLimiter;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._machineDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDevice = this._machineDevice;
    }
    if (this._profileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileType = this._profileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVergeioDeviceNvidiaVgpuSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableVnc = undefined;
      this._enableDebugging = undefined;
      this._enableProfiling = undefined;
      this._enableUvm = undefined;
      this._frameRateLimiter = undefined;
      this._key = undefined;
      this._machineDevice = undefined;
      this._profileType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableVnc = value.disableVnc;
      this._enableDebugging = value.enableDebugging;
      this._enableProfiling = value.enableProfiling;
      this._enableUvm = value.enableUvm;
      this._frameRateLimiter = value.frameRateLimiter;
      this._key = value.key;
      this._machineDevice = value.machineDevice;
      this._profileType = value.profileType;
    }
  }

  // disable_vnc - computed: true, optional: true, required: false
  private _disableVnc?: boolean | cdktf.IResolvable; 
  public get disableVnc() {
    return this.getBooleanAttribute('disable_vnc');
  }
  public set disableVnc(value: boolean | cdktf.IResolvable) {
    this._disableVnc = value;
  }
  public resetDisableVnc() {
    this._disableVnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVncInput() {
    return this._disableVnc;
  }

  // enable_debugging - computed: true, optional: true, required: false
  private _enableDebugging?: boolean | cdktf.IResolvable; 
  public get enableDebugging() {
    return this.getBooleanAttribute('enable_debugging');
  }
  public set enableDebugging(value: boolean | cdktf.IResolvable) {
    this._enableDebugging = value;
  }
  public resetEnableDebugging() {
    this._enableDebugging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDebuggingInput() {
    return this._enableDebugging;
  }

  // enable_profiling - computed: true, optional: true, required: false
  private _enableProfiling?: boolean | cdktf.IResolvable; 
  public get enableProfiling() {
    return this.getBooleanAttribute('enable_profiling');
  }
  public set enableProfiling(value: boolean | cdktf.IResolvable) {
    this._enableProfiling = value;
  }
  public resetEnableProfiling() {
    this._enableProfiling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProfilingInput() {
    return this._enableProfiling;
  }

  // enable_uvm - computed: true, optional: true, required: false
  private _enableUvm?: boolean | cdktf.IResolvable; 
  public get enableUvm() {
    return this.getBooleanAttribute('enable_uvm');
  }
  public set enableUvm(value: boolean | cdktf.IResolvable) {
    this._enableUvm = value;
  }
  public resetEnableUvm() {
    this._enableUvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUvmInput() {
    return this._enableUvm;
  }

  // frame_rate_limiter - computed: true, optional: true, required: false
  private _frameRateLimiter?: number; 
  public get frameRateLimiter() {
    return this.getNumberAttribute('frame_rate_limiter');
  }
  public set frameRateLimiter(value: number) {
    this._frameRateLimiter = value;
  }
  public resetFrameRateLimiter() {
    this._frameRateLimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameRateLimiterInput() {
    return this._frameRateLimiter;
  }

  // key - computed: true, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // machine_device - computed: true, optional: true, required: false
  private _machineDevice?: number; 
  public get machineDevice() {
    return this.getNumberAttribute('machine_device');
  }
  public set machineDevice(value: number) {
    this._machineDevice = value;
  }
  public resetMachineDevice() {
    this._machineDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeviceInput() {
    return this._machineDevice;
  }

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }
}
export interface VmVergeioDeviceTpmSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#key Vm#key}
  */
  readonly key?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#machine_device Vm#machine_device}
  */
  readonly machineDevice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#model Vm#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#version Vm#version}
  */
  readonly version?: string;
}

export function vmVergeioDeviceTpmSettingsToTerraform(struct?: VmVergeioDeviceTpmSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.numberToTerraform(struct!.key),
    machine_device: cdktf.numberToTerraform(struct!.machineDevice),
    model: cdktf.stringToTerraform(struct!.model),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function vmVergeioDeviceTpmSettingsToHclTerraform(struct?: VmVergeioDeviceTpmSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_device: {
      value: cdktf.numberToHclTerraform(struct!.machineDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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

export class VmVergeioDeviceTpmSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmVergeioDeviceTpmSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._machineDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDevice = this._machineDevice;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVergeioDeviceTpmSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._machineDevice = undefined;
      this._model = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._machineDevice = value.machineDevice;
      this._model = value.model;
      this._version = value.version;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // machine_device - computed: true, optional: true, required: false
  private _machineDevice?: number; 
  public get machineDevice() {
    return this.getNumberAttribute('machine_device');
  }
  public set machineDevice(value: number) {
    this._machineDevice = value;
  }
  public resetMachineDevice() {
    this._machineDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeviceInput() {
    return this._machineDevice;
  }

  // model - computed: true, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
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
export interface VmVergeioDeviceUsbSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#guest_reset Vm#guest_reset}
  */
  readonly guestReset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#guest_resets_all Vm#guest_resets_all}
  */
  readonly guestResetsAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#key Vm#key}
  */
  readonly key?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#machine_device Vm#machine_device}
  */
  readonly machineDevice?: number;
}

export function vmVergeioDeviceUsbSettingsToTerraform(struct?: VmVergeioDeviceUsbSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guest_reset: cdktf.booleanToTerraform(struct!.guestReset),
    guest_resets_all: cdktf.booleanToTerraform(struct!.guestResetsAll),
    key: cdktf.numberToTerraform(struct!.key),
    machine_device: cdktf.numberToTerraform(struct!.machineDevice),
  }
}


export function vmVergeioDeviceUsbSettingsToHclTerraform(struct?: VmVergeioDeviceUsbSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guest_reset: {
      value: cdktf.booleanToHclTerraform(struct!.guestReset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    guest_resets_all: {
      value: cdktf.booleanToHclTerraform(struct!.guestResetsAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_device: {
      value: cdktf.numberToHclTerraform(struct!.machineDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVergeioDeviceUsbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmVergeioDeviceUsbSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guestReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestReset = this._guestReset;
    }
    if (this._guestResetsAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestResetsAll = this._guestResetsAll;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._machineDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDevice = this._machineDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVergeioDeviceUsbSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guestReset = undefined;
      this._guestResetsAll = undefined;
      this._key = undefined;
      this._machineDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guestReset = value.guestReset;
      this._guestResetsAll = value.guestResetsAll;
      this._key = value.key;
      this._machineDevice = value.machineDevice;
    }
  }

  // guest_reset - computed: true, optional: true, required: false
  private _guestReset?: boolean | cdktf.IResolvable; 
  public get guestReset() {
    return this.getBooleanAttribute('guest_reset');
  }
  public set guestReset(value: boolean | cdktf.IResolvable) {
    this._guestReset = value;
  }
  public resetGuestReset() {
    this._guestReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestResetInput() {
    return this._guestReset;
  }

  // guest_resets_all - computed: true, optional: true, required: false
  private _guestResetsAll?: boolean | cdktf.IResolvable; 
  public get guestResetsAll() {
    return this.getBooleanAttribute('guest_resets_all');
  }
  public set guestResetsAll(value: boolean | cdktf.IResolvable) {
    this._guestResetsAll = value;
  }
  public resetGuestResetsAll() {
    this._guestResetsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestResetsAllInput() {
    return this._guestResetsAll;
  }

  // key - computed: true, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // machine_device - computed: true, optional: true, required: false
  private _machineDevice?: number; 
  public get machineDevice() {
    return this.getNumberAttribute('machine_device');
  }
  public set machineDevice(value: number) {
    this._machineDevice = value;
  }
  public resetMachineDevice() {
    this._machineDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeviceInput() {
    return this._machineDevice;
  }
}
export interface VmVergeioDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#description Vm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#enabled Vm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#key Vm#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#machine Vm#machine}
  */
  readonly machine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#nvidia_vgpu_settings Vm#nvidia_vgpu_settings}
  */
  readonly nvidiaVgpuSettings?: VmVergeioDeviceNvidiaVgpuSettings;
  /**
  * Resource group of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#resource_group Vm#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Status of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#status Vm#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#tpm_settings Vm#tpm_settings}
  */
  readonly tpmSettings?: VmVergeioDeviceTpmSettings;
  /**
  * Type of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#type Vm#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#usb_settings Vm#usb_settings}
  */
  readonly usbSettings?: VmVergeioDeviceUsbSettings;
}

export function vmVergeioDeviceToTerraform(struct?: VmVergeioDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key: cdktf.stringToTerraform(struct!.key),
    machine: cdktf.numberToTerraform(struct!.machine),
    name: cdktf.stringToTerraform(struct!.name),
    nvidia_vgpu_settings: vmVergeioDeviceNvidiaVgpuSettingsToTerraform(struct!.nvidiaVgpuSettings),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    status: cdktf.numberToTerraform(struct!.status),
    tpm_settings: vmVergeioDeviceTpmSettingsToTerraform(struct!.tpmSettings),
    type: cdktf.stringToTerraform(struct!.type),
    usb_settings: vmVergeioDeviceUsbSettingsToTerraform(struct!.usbSettings),
  }
}


export function vmVergeioDeviceToHclTerraform(struct?: VmVergeioDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine: {
      value: cdktf.numberToHclTerraform(struct!.machine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nvidia_vgpu_settings: {
      value: vmVergeioDeviceNvidiaVgpuSettingsToHclTerraform(struct!.nvidiaVgpuSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "VmVergeioDeviceNvidiaVgpuSettings",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tpm_settings: {
      value: vmVergeioDeviceTpmSettingsToHclTerraform(struct!.tpmSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "VmVergeioDeviceTpmSettings",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usb_settings: {
      value: vmVergeioDeviceUsbSettingsToHclTerraform(struct!.usbSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "VmVergeioDeviceUsbSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVergeioDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmVergeioDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._machine !== undefined) {
      hasAnyValues = true;
      internalValueResult.machine = this._machine;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nvidiaVgpuSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvidiaVgpuSettings = this._nvidiaVgpuSettings?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tpmSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpmSettings = this._tpmSettings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usbSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usbSettings = this._usbSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVergeioDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._key = undefined;
      this._machine = undefined;
      this._name = undefined;
      this._nvidiaVgpuSettings.internalValue = undefined;
      this._resourceGroup = undefined;
      this._status = undefined;
      this._tpmSettings.internalValue = undefined;
      this._type = undefined;
      this._usbSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._key = value.key;
      this._machine = value.machine;
      this._name = value.name;
      this._nvidiaVgpuSettings.internalValue = value.nvidiaVgpuSettings;
      this._resourceGroup = value.resourceGroup;
      this._status = value.status;
      this._tpmSettings.internalValue = value.tpmSettings;
      this._type = value.type;
      this._usbSettings.internalValue = value.usbSettings;
    }
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

  // key - computed: true, optional: true, required: false
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

  // machine - computed: true, optional: true, required: false
  private _machine?: number; 
  public get machine() {
    return this.getNumberAttribute('machine');
  }
  public set machine(value: number) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
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

  // nvidia_vgpu_settings - computed: false, optional: true, required: false
  private _nvidiaVgpuSettings = new VmVergeioDeviceNvidiaVgpuSettingsOutputReference(this, "nvidia_vgpu_settings");
  public get nvidiaVgpuSettings() {
    return this._nvidiaVgpuSettings;
  }
  public putNvidiaVgpuSettings(value: VmVergeioDeviceNvidiaVgpuSettings) {
    this._nvidiaVgpuSettings.internalValue = value;
  }
  public resetNvidiaVgpuSettings() {
    this._nvidiaVgpuSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvidiaVgpuSettingsInput() {
    return this._nvidiaVgpuSettings.internalValue;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tpm_settings - computed: false, optional: true, required: false
  private _tpmSettings = new VmVergeioDeviceTpmSettingsOutputReference(this, "tpm_settings");
  public get tpmSettings() {
    return this._tpmSettings;
  }
  public putTpmSettings(value: VmVergeioDeviceTpmSettings) {
    this._tpmSettings.internalValue = value;
  }
  public resetTpmSettings() {
    this._tpmSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmSettingsInput() {
    return this._tpmSettings.internalValue;
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

  // usb_settings - computed: false, optional: true, required: false
  private _usbSettings = new VmVergeioDeviceUsbSettingsOutputReference(this, "usb_settings");
  public get usbSettings() {
    return this._usbSettings;
  }
  public putUsbSettings(value: VmVergeioDeviceUsbSettings) {
    this._usbSettings.internalValue = value;
  }
  public resetUsbSettings() {
    this._usbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbSettingsInput() {
    return this._usbSettings.internalValue;
  }
}

export class VmVergeioDeviceList extends cdktf.ComplexList {
  public internalValue? : VmVergeioDevice[] | cdktf.IResolvable

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
  public get(index: number): VmVergeioDeviceOutputReference {
    return new VmVergeioDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmVergeioDrive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#asset Vm#asset}
  */
  readonly asset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#description Vm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#disksize Vm#disksize}
  */
  readonly disksize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#enabled Vm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#interface Vm#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#key Vm#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#machine Vm#machine}
  */
  readonly machine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#media Vm#media}
  */
  readonly media?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#media_source Vm#media_source}
  */
  readonly mediaSource?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#name Vm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#orderid Vm#orderid}
  */
  readonly orderid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#preferred_tier Vm#preferred_tier}
  */
  readonly preferredTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#preserve_drive_format Vm#preserve_drive_format}
  */
  readonly preserveDriveFormat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#readonly Vm#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#serial Vm#serial}
  */
  readonly serial?: string;
}

export function vmVergeioDriveToTerraform(struct?: VmVergeioDrive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset: cdktf.stringToTerraform(struct!.asset),
    description: cdktf.stringToTerraform(struct!.description),
    disksize: cdktf.numberToTerraform(struct!.disksize),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interface: cdktf.stringToTerraform(struct!.interface),
    key: cdktf.stringToTerraform(struct!.key),
    machine: cdktf.numberToTerraform(struct!.machine),
    media: cdktf.stringToTerraform(struct!.media),
    media_source: cdktf.numberToTerraform(struct!.mediaSource),
    name: cdktf.stringToTerraform(struct!.name),
    orderid: cdktf.numberToTerraform(struct!.orderid),
    preferred_tier: cdktf.stringToTerraform(struct!.preferredTier),
    preserve_drive_format: cdktf.booleanToTerraform(struct!.preserveDriveFormat),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function vmVergeioDriveToHclTerraform(struct?: VmVergeioDrive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset: {
      value: cdktf.stringToHclTerraform(struct!.asset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disksize: {
      value: cdktf.numberToHclTerraform(struct!.disksize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine: {
      value: cdktf.numberToHclTerraform(struct!.machine),
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
    media_source: {
      value: cdktf.numberToHclTerraform(struct!.mediaSource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orderid: {
      value: cdktf.numberToHclTerraform(struct!.orderid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_tier: {
      value: cdktf.stringToHclTerraform(struct!.preferredTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_drive_format: {
      value: cdktf.booleanToHclTerraform(struct!.preserveDriveFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVergeioDriveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmVergeioDrive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asset !== undefined) {
      hasAnyValues = true;
      internalValueResult.asset = this._asset;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disksize !== undefined) {
      hasAnyValues = true;
      internalValueResult.disksize = this._disksize;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._machine !== undefined) {
      hasAnyValues = true;
      internalValueResult.machine = this._machine;
    }
    if (this._media !== undefined) {
      hasAnyValues = true;
      internalValueResult.media = this._media;
    }
    if (this._mediaSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaSource = this._mediaSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orderid !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderid = this._orderid;
    }
    if (this._preferredTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredTier = this._preferredTier;
    }
    if (this._preserveDriveFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDriveFormat = this._preserveDriveFormat;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVergeioDrive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asset = undefined;
      this._description = undefined;
      this._disksize = undefined;
      this._enabled = undefined;
      this._interface = undefined;
      this._key = undefined;
      this._machine = undefined;
      this._media = undefined;
      this._mediaSource = undefined;
      this._name = undefined;
      this._orderid = undefined;
      this._preferredTier = undefined;
      this._preserveDriveFormat = undefined;
      this._readonly = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asset = value.asset;
      this._description = value.description;
      this._disksize = value.disksize;
      this._enabled = value.enabled;
      this._interface = value.interface;
      this._key = value.key;
      this._machine = value.machine;
      this._media = value.media;
      this._mediaSource = value.mediaSource;
      this._name = value.name;
      this._orderid = value.orderid;
      this._preferredTier = value.preferredTier;
      this._preserveDriveFormat = value.preserveDriveFormat;
      this._readonly = value.readonly;
      this._serial = value.serial;
    }
  }

  // asset - computed: true, optional: true, required: false
  private _asset?: string; 
  public get asset() {
    return this.getStringAttribute('asset');
  }
  public set asset(value: string) {
    this._asset = value;
  }
  public resetAsset() {
    this._asset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset;
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

  // disksize - computed: true, optional: true, required: false
  private _disksize?: number; 
  public get disksize() {
    return this.getNumberAttribute('disksize');
  }
  public set disksize(value: number) {
    this._disksize = value;
  }
  public resetDisksize() {
    this._disksize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksizeInput() {
    return this._disksize;
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

  // interface - computed: true, optional: true, required: false
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

  // key - computed: true, optional: true, required: false
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

  // machine - computed: true, optional: true, required: false
  private _machine?: number; 
  public get machine() {
    return this.getNumberAttribute('machine');
  }
  public set machine(value: number) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
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

  // media_source - computed: false, optional: true, required: false
  private _mediaSource?: number; 
  public get mediaSource() {
    return this.getNumberAttribute('media_source');
  }
  public set mediaSource(value: number) {
    this._mediaSource = value;
  }
  public resetMediaSource() {
    this._mediaSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSourceInput() {
    return this._mediaSource;
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

  // orderid - computed: true, optional: true, required: false
  private _orderid?: number; 
  public get orderid() {
    return this.getNumberAttribute('orderid');
  }
  public set orderid(value: number) {
    this._orderid = value;
  }
  public resetOrderid() {
    this._orderid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderidInput() {
    return this._orderid;
  }

  // preferred_tier - computed: true, optional: true, required: false
  private _preferredTier?: string; 
  public get preferredTier() {
    return this.getStringAttribute('preferred_tier');
  }
  public set preferredTier(value: string) {
    this._preferredTier = value;
  }
  public resetPreferredTier() {
    this._preferredTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTierInput() {
    return this._preferredTier;
  }

  // preserve_drive_format - computed: true, optional: true, required: false
  private _preserveDriveFormat?: boolean | cdktf.IResolvable; 
  public get preserveDriveFormat() {
    return this.getBooleanAttribute('preserve_drive_format');
  }
  public set preserveDriveFormat(value: boolean | cdktf.IResolvable) {
    this._preserveDriveFormat = value;
  }
  public resetPreserveDriveFormat() {
    this._preserveDriveFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDriveFormatInput() {
    return this._preserveDriveFormat;
  }

  // readonly - computed: true, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // serial - computed: true, optional: true, required: false
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
}

export class VmVergeioDriveList extends cdktf.ComplexList {
  public internalValue? : VmVergeioDrive[] | cdktf.IResolvable

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
  public get(index: number): VmVergeioDriveOutputReference {
    return new VmVergeioDriveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmVergeioNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#asset Vm#asset}
  */
  readonly asset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#assign_ipaddress Vm#assign_ipaddress}
  */
  readonly assignIpaddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#description Vm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#driver Vm#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#enabled Vm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#id Vm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#interface Vm#interface}
  */
  readonly interface?: string;
  /**
  * IP address assigned to nic. For this attribute to be set, `assign_ip_address` must be set to `true` and vent id should be set to an Internal Vnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#ipaddress Vm#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#macaddress Vm#macaddress}
  */
  readonly macaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#machine Vm#machine}
  */
  readonly machine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#model Vm#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#name Vm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#port Vm#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#vendor Vm#vendor}
  */
  readonly vendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#vnet Vm#vnet}
  */
  readonly vnet?: number;
}

export function vmVergeioNicToTerraform(struct?: VmVergeioNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset: cdktf.stringToTerraform(struct!.asset),
    assign_ipaddress: cdktf.booleanToTerraform(struct!.assignIpaddress),
    description: cdktf.stringToTerraform(struct!.description),
    driver: cdktf.stringToTerraform(struct!.driver),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipaddress: cdktf.stringToTerraform(struct!.ipaddress),
    macaddress: cdktf.stringToTerraform(struct!.macaddress),
    machine: cdktf.numberToTerraform(struct!.machine),
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    vnet: cdktf.numberToTerraform(struct!.vnet),
  }
}


export function vmVergeioNicToHclTerraform(struct?: VmVergeioNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset: {
      value: cdktf.stringToHclTerraform(struct!.asset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assign_ipaddress: {
      value: cdktf.booleanToHclTerraform(struct!.assignIpaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.ipaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddress: {
      value: cdktf.stringToHclTerraform(struct!.macaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine: {
      value: cdktf.numberToHclTerraform(struct!.machine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet: {
      value: cdktf.numberToHclTerraform(struct!.vnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVergeioNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmVergeioNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asset !== undefined) {
      hasAnyValues = true;
      internalValueResult.asset = this._asset;
    }
    if (this._assignIpaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpaddress = this._assignIpaddress;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress;
    }
    if (this._macaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddress = this._macaddress;
    }
    if (this._machine !== undefined) {
      hasAnyValues = true;
      internalValueResult.machine = this._machine;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._vnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnet = this._vnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVergeioNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asset = undefined;
      this._assignIpaddress = undefined;
      this._description = undefined;
      this._driver = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._ipaddress = undefined;
      this._macaddress = undefined;
      this._machine = undefined;
      this._model = undefined;
      this._name = undefined;
      this._port = undefined;
      this._vendor = undefined;
      this._vnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asset = value.asset;
      this._assignIpaddress = value.assignIpaddress;
      this._description = value.description;
      this._driver = value.driver;
      this._enabled = value.enabled;
      this._id = value.id;
      this._interface = value.interface;
      this._ipaddress = value.ipaddress;
      this._macaddress = value.macaddress;
      this._machine = value.machine;
      this._model = value.model;
      this._name = value.name;
      this._port = value.port;
      this._vendor = value.vendor;
      this._vnet = value.vnet;
    }
  }

  // asset - computed: true, optional: true, required: false
  private _asset?: string; 
  public get asset() {
    return this.getStringAttribute('asset');
  }
  public set asset(value: string) {
    this._asset = value;
  }
  public resetAsset() {
    this._asset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset;
  }

  // assign_ipaddress - computed: false, optional: true, required: false
  private _assignIpaddress?: boolean | cdktf.IResolvable; 
  public get assignIpaddress() {
    return this.getBooleanAttribute('assign_ipaddress');
  }
  public set assignIpaddress(value: boolean | cdktf.IResolvable) {
    this._assignIpaddress = value;
  }
  public resetAssignIpaddress() {
    this._assignIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpaddressInput() {
    return this._assignIpaddress;
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

  // driver - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // macaddress - computed: true, optional: true, required: false
  private _macaddress?: string; 
  public get macaddress() {
    return this.getStringAttribute('macaddress');
  }
  public set macaddress(value: string) {
    this._macaddress = value;
  }
  public resetMacaddress() {
    this._macaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddressInput() {
    return this._macaddress;
  }

  // machine - computed: true, optional: true, required: false
  private _machine?: number; 
  public get machine() {
    return this.getNumberAttribute('machine');
  }
  public set machine(value: number) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // model - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // vnet - computed: true, optional: true, required: false
  private _vnet?: number; 
  public get vnet() {
    return this.getNumberAttribute('vnet');
  }
  public set vnet(value: number) {
    this._vnet = value;
  }
  public resetVnet() {
    this._vnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet;
  }
}

export class VmVergeioNicList extends cdktf.ComplexList {
  public internalValue? : VmVergeioNic[] | cdktf.IResolvable

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
  public get(index: number): VmVergeioNicOutputReference {
    return new VmVergeioNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm vergeio_vm}
*/
export class Vm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vm to import
  * @param importFromId The id of the existing Vm that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/resources/vm vergeio_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmConfig
  */
  public constructor(scope: Construct, id: string, config: VmConfig) {
    super(scope, id, {
      terraformResourceType: 'vergeio_vm',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advanced = config.advanced;
    this._allowHotplug = config.allowHotplug;
    this._bootDelay = config.bootDelay;
    this._bootOrder = config.bootOrder;
    this._cloudinitDatasource = config.cloudinitDatasource;
    this._cloudinitFiles.internalValue = config.cloudinitFiles;
    this._cluster = config.cluster;
    this._console = config.console;
    this._consolePass = config.consolePass;
    this._consolePassEnabled = config.consolePassEnabled;
    this._cpuCores = config.cpuCores;
    this._cpuType = config.cpuType;
    this._description = config.description;
    this._disableHypervisor = config.disableHypervisor;
    this._disablePowercycle = config.disablePowercycle;
    this._display = config.display;
    this._enabled = config.enabled;
    this._guestAgent = config.guestAgent;
    this._guestAgentIps = config.guestAgentIps;
    this._haGroup = config.haGroup;
    this._ignoredGuestIps = config.ignoredGuestIps;
    this._machineType = config.machineType;
    this._name = config.name;
    this._nestedVirtualization = config.nestedVirtualization;
    this._osDescription = config.osDescription;
    this._osFamily = config.osFamily;
    this._powerstate = config.powerstate;
    this._preferredNode = config.preferredNode;
    this._ram = config.ram;
    this._rtcBase = config.rtcBase;
    this._secureBoot = config.secureBoot;
    this._serialPort = config.serialPort;
    this._snapshotProfile = config.snapshotProfile;
    this._sound = config.sound;
    this._uefi = config.uefi;
    this._usbTablet = config.usbTablet;
    this._video = config.video;
    this._waitForGuestAgentInfo = config.waitForGuestAgentInfo;
    this._waitForGuestIpTimeout = config.waitForGuestIpTimeout;
    this._vergeioDevice.internalValue = config.vergeioDevice;
    this._vergeioDrive.internalValue = config.vergeioDrive;
    this._vergeioNic.internalValue = config.vergeioNic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced - computed: true, optional: true, required: false
  private _advanced?: string; 
  public get advanced() {
    return this.getStringAttribute('advanced');
  }
  public set advanced(value: string) {
    this._advanced = value;
  }
  public resetAdvanced() {
    this._advanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced;
  }

  // allow_hotplug - computed: true, optional: true, required: false
  private _allowHotplug?: boolean | cdktf.IResolvable; 
  public get allowHotplug() {
    return this.getBooleanAttribute('allow_hotplug');
  }
  public set allowHotplug(value: boolean | cdktf.IResolvable) {
    this._allowHotplug = value;
  }
  public resetAllowHotplug() {
    this._allowHotplug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHotplugInput() {
    return this._allowHotplug;
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

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: string; 
  public get bootOrder() {
    return this.getStringAttribute('boot_order');
  }
  public set bootOrder(value: string) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // cloudinit_datasource - computed: true, optional: true, required: false
  private _cloudinitDatasource?: string; 
  public get cloudinitDatasource() {
    return this.getStringAttribute('cloudinit_datasource');
  }
  public set cloudinitDatasource(value: string) {
    this._cloudinitDatasource = value;
  }
  public resetCloudinitDatasource() {
    this._cloudinitDatasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudinitDatasourceInput() {
    return this._cloudinitDatasource;
  }

  // cloudinit_files - computed: false, optional: true, required: false
  private _cloudinitFiles = new VmCloudinitFilesList(this, "cloudinit_files", false);
  public get cloudinitFiles() {
    return this._cloudinitFiles;
  }
  public putCloudinitFiles(value: VmCloudinitFiles[] | cdktf.IResolvable) {
    this._cloudinitFiles.internalValue = value;
  }
  public resetCloudinitFiles() {
    this._cloudinitFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudinitFilesInput() {
    return this._cloudinitFiles.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // console - computed: true, optional: true, required: false
  private _console?: string; 
  public get console() {
    return this.getStringAttribute('console');
  }
  public set console(value: string) {
    this._console = value;
  }
  public resetConsole() {
    this._console = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console;
  }

  // console_pass - computed: true, optional: true, required: false
  private _consolePass?: string; 
  public get consolePass() {
    return this.getStringAttribute('console_pass');
  }
  public set consolePass(value: string) {
    this._consolePass = value;
  }
  public resetConsolePass() {
    this._consolePass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolePassInput() {
    return this._consolePass;
  }

  // console_pass_enabled - computed: true, optional: true, required: false
  private _consolePassEnabled?: boolean | cdktf.IResolvable; 
  public get consolePassEnabled() {
    return this.getBooleanAttribute('console_pass_enabled');
  }
  public set consolePassEnabled(value: boolean | cdktf.IResolvable) {
    this._consolePassEnabled = value;
  }
  public resetConsolePassEnabled() {
    this._consolePassEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolePassEnabledInput() {
    return this._consolePassEnabled;
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

  // cpu_type - computed: true, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
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

  // disable_hypervisor - computed: true, optional: true, required: false
  private _disableHypervisor?: boolean | cdktf.IResolvable; 
  public get disableHypervisor() {
    return this.getBooleanAttribute('disable_hypervisor');
  }
  public set disableHypervisor(value: boolean | cdktf.IResolvable) {
    this._disableHypervisor = value;
  }
  public resetDisableHypervisor() {
    this._disableHypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHypervisorInput() {
    return this._disableHypervisor;
  }

  // disable_powercycle - computed: true, optional: true, required: false
  private _disablePowercycle?: boolean | cdktf.IResolvable; 
  public get disablePowercycle() {
    return this.getBooleanAttribute('disable_powercycle');
  }
  public set disablePowercycle(value: boolean | cdktf.IResolvable) {
    this._disablePowercycle = value;
  }
  public resetDisablePowercycle() {
    this._disablePowercycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePowercycleInput() {
    return this._disablePowercycle;
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
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

  // guest_agent - computed: true, optional: true, required: false
  private _guestAgent?: boolean | cdktf.IResolvable; 
  public get guestAgent() {
    return this.getBooleanAttribute('guest_agent');
  }
  public set guestAgent(value: boolean | cdktf.IResolvable) {
    this._guestAgent = value;
  }
  public resetGuestAgent() {
    this._guestAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAgentInput() {
    return this._guestAgent;
  }

  // guest_agent_ips - computed: true, optional: true, required: false
  private _guestAgentIps?: string[]; 
  public get guestAgentIps() {
    return this.getListAttribute('guest_agent_ips');
  }
  public set guestAgentIps(value: string[]) {
    this._guestAgentIps = value;
  }
  public resetGuestAgentIps() {
    this._guestAgentIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAgentIpsInput() {
    return this._guestAgentIps;
  }

  // ha_group - computed: true, optional: true, required: false
  private _haGroup?: string; 
  public get haGroup() {
    return this.getStringAttribute('ha_group');
  }
  public set haGroup(value: string) {
    this._haGroup = value;
  }
  public resetHaGroup() {
    this._haGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupInput() {
    return this._haGroup;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_guest_ips - computed: false, optional: true, required: false
  private _ignoredGuestIps?: string; 
  public get ignoredGuestIps() {
    return this.getStringAttribute('ignored_guest_ips');
  }
  public set ignoredGuestIps(value: string) {
    this._ignoredGuestIps = value;
  }
  public resetIgnoredGuestIps() {
    this._ignoredGuestIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredGuestIpsInput() {
    return this._ignoredGuestIps;
  }

  // machine - computed: true, optional: false, required: false
  public get machine() {
    return this.getNumberAttribute('machine');
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // nested_virtualization - computed: true, optional: true, required: false
  private _nestedVirtualization?: boolean | cdktf.IResolvable; 
  public get nestedVirtualization() {
    return this.getBooleanAttribute('nested_virtualization');
  }
  public set nestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._nestedVirtualization = value;
  }
  public resetNestedVirtualization() {
    this._nestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedVirtualizationInput() {
    return this._nestedVirtualization;
  }

  // os_description - computed: true, optional: true, required: false
  private _osDescription?: string; 
  public get osDescription() {
    return this.getStringAttribute('os_description');
  }
  public set osDescription(value: string) {
    this._osDescription = value;
  }
  public resetOsDescription() {
    this._osDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDescriptionInput() {
    return this._osDescription;
  }

  // os_family - computed: true, optional: true, required: false
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // powerstate - computed: true, optional: true, required: false
  private _powerstate?: boolean | cdktf.IResolvable; 
  public get powerstate() {
    return this.getBooleanAttribute('powerstate');
  }
  public set powerstate(value: boolean | cdktf.IResolvable) {
    this._powerstate = value;
  }
  public resetPowerstate() {
    this._powerstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerstateInput() {
    return this._powerstate;
  }

  // preferred_node - computed: true, optional: true, required: false
  private _preferredNode?: string; 
  public get preferredNode() {
    return this.getStringAttribute('preferred_node');
  }
  public set preferredNode(value: string) {
    this._preferredNode = value;
  }
  public resetPreferredNode() {
    this._preferredNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredNodeInput() {
    return this._preferredNode;
  }

  // ram - computed: true, optional: true, required: false
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  public resetRam() {
    this._ram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // rtc_base - computed: true, optional: true, required: false
  private _rtcBase?: string; 
  public get rtcBase() {
    return this.getStringAttribute('rtc_base');
  }
  public set rtcBase(value: string) {
    this._rtcBase = value;
  }
  public resetRtcBase() {
    this._rtcBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtcBaseInput() {
    return this._rtcBase;
  }

  // secure_boot - computed: true, optional: true, required: false
  private _secureBoot?: boolean | cdktf.IResolvable; 
  public get secureBoot() {
    return this.getBooleanAttribute('secure_boot');
  }
  public set secureBoot(value: boolean | cdktf.IResolvable) {
    this._secureBoot = value;
  }
  public resetSecureBoot() {
    this._secureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootInput() {
    return this._secureBoot;
  }

  // serial_port - computed: true, optional: true, required: false
  private _serialPort?: boolean | cdktf.IResolvable; 
  public get serialPort() {
    return this.getBooleanAttribute('serial_port');
  }
  public set serialPort(value: boolean | cdktf.IResolvable) {
    this._serialPort = value;
  }
  public resetSerialPort() {
    this._serialPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPortInput() {
    return this._serialPort;
  }

  // snapshot_profile - computed: true, optional: true, required: false
  private _snapshotProfile?: string; 
  public get snapshotProfile() {
    return this.getStringAttribute('snapshot_profile');
  }
  public set snapshotProfile(value: string) {
    this._snapshotProfile = value;
  }
  public resetSnapshotProfile() {
    this._snapshotProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotProfileInput() {
    return this._snapshotProfile;
  }

  // sound - computed: true, optional: true, required: false
  private _sound?: string; 
  public get sound() {
    return this.getStringAttribute('sound');
  }
  public set sound(value: string) {
    this._sound = value;
  }
  public resetSound() {
    this._sound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soundInput() {
    return this._sound;
  }

  // uefi - computed: true, optional: true, required: false
  private _uefi?: boolean | cdktf.IResolvable; 
  public get uefi() {
    return this.getBooleanAttribute('uefi');
  }
  public set uefi(value: boolean | cdktf.IResolvable) {
    this._uefi = value;
  }
  public resetUefi() {
    this._uefi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiInput() {
    return this._uefi;
  }

  // usb_tablet - computed: true, optional: true, required: false
  private _usbTablet?: boolean | cdktf.IResolvable; 
  public get usbTablet() {
    return this.getBooleanAttribute('usb_tablet');
  }
  public set usbTablet(value: boolean | cdktf.IResolvable) {
    this._usbTablet = value;
  }
  public resetUsbTablet() {
    this._usbTablet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbTabletInput() {
    return this._usbTablet;
  }

  // video - computed: true, optional: true, required: false
  private _video?: string; 
  public get video() {
    return this.getStringAttribute('video');
  }
  public set video(value: string) {
    this._video = value;
  }
  public resetVideo() {
    this._video = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video;
  }

  // wait_for_guest_agent_info - computed: false, optional: true, required: false
  private _waitForGuestAgentInfo?: number; 
  public get waitForGuestAgentInfo() {
    return this.getNumberAttribute('wait_for_guest_agent_info');
  }
  public set waitForGuestAgentInfo(value: number) {
    this._waitForGuestAgentInfo = value;
  }
  public resetWaitForGuestAgentInfo() {
    this._waitForGuestAgentInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForGuestAgentInfoInput() {
    return this._waitForGuestAgentInfo;
  }

  // wait_for_guest_ip_timeout - computed: false, optional: true, required: false
  private _waitForGuestIpTimeout?: number; 
  public get waitForGuestIpTimeout() {
    return this.getNumberAttribute('wait_for_guest_ip_timeout');
  }
  public set waitForGuestIpTimeout(value: number) {
    this._waitForGuestIpTimeout = value;
  }
  public resetWaitForGuestIpTimeout() {
    this._waitForGuestIpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForGuestIpTimeoutInput() {
    return this._waitForGuestIpTimeout;
  }

  // vergeio_device - computed: false, optional: true, required: false
  private _vergeioDevice = new VmVergeioDeviceList(this, "vergeio_device", false);
  public get vergeioDevice() {
    return this._vergeioDevice;
  }
  public putVergeioDevice(value: VmVergeioDevice[] | cdktf.IResolvable) {
    this._vergeioDevice.internalValue = value;
  }
  public resetVergeioDevice() {
    this._vergeioDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vergeioDeviceInput() {
    return this._vergeioDevice.internalValue;
  }

  // vergeio_drive - computed: false, optional: true, required: false
  private _vergeioDrive = new VmVergeioDriveList(this, "vergeio_drive", false);
  public get vergeioDrive() {
    return this._vergeioDrive;
  }
  public putVergeioDrive(value: VmVergeioDrive[] | cdktf.IResolvable) {
    this._vergeioDrive.internalValue = value;
  }
  public resetVergeioDrive() {
    this._vergeioDrive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vergeioDriveInput() {
    return this._vergeioDrive.internalValue;
  }

  // vergeio_nic - computed: false, optional: true, required: false
  private _vergeioNic = new VmVergeioNicList(this, "vergeio_nic", false);
  public get vergeioNic() {
    return this._vergeioNic;
  }
  public putVergeioNic(value: VmVergeioNic[] | cdktf.IResolvable) {
    this._vergeioNic.internalValue = value;
  }
  public resetVergeioNic() {
    this._vergeioNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vergeioNicInput() {
    return this._vergeioNic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced: cdktf.stringToTerraform(this._advanced),
      allow_hotplug: cdktf.booleanToTerraform(this._allowHotplug),
      boot_delay: cdktf.numberToTerraform(this._bootDelay),
      boot_order: cdktf.stringToTerraform(this._bootOrder),
      cloudinit_datasource: cdktf.stringToTerraform(this._cloudinitDatasource),
      cloudinit_files: cdktf.listMapper(vmCloudinitFilesToTerraform, false)(this._cloudinitFiles.internalValue),
      cluster: cdktf.stringToTerraform(this._cluster),
      console: cdktf.stringToTerraform(this._console),
      console_pass: cdktf.stringToTerraform(this._consolePass),
      console_pass_enabled: cdktf.booleanToTerraform(this._consolePassEnabled),
      cpu_cores: cdktf.numberToTerraform(this._cpuCores),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      description: cdktf.stringToTerraform(this._description),
      disable_hypervisor: cdktf.booleanToTerraform(this._disableHypervisor),
      disable_powercycle: cdktf.booleanToTerraform(this._disablePowercycle),
      display: cdktf.stringToTerraform(this._display),
      enabled: cdktf.booleanToTerraform(this._enabled),
      guest_agent: cdktf.booleanToTerraform(this._guestAgent),
      guest_agent_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guestAgentIps),
      ha_group: cdktf.stringToTerraform(this._haGroup),
      ignored_guest_ips: cdktf.stringToTerraform(this._ignoredGuestIps),
      machine_type: cdktf.stringToTerraform(this._machineType),
      name: cdktf.stringToTerraform(this._name),
      nested_virtualization: cdktf.booleanToTerraform(this._nestedVirtualization),
      os_description: cdktf.stringToTerraform(this._osDescription),
      os_family: cdktf.stringToTerraform(this._osFamily),
      powerstate: cdktf.booleanToTerraform(this._powerstate),
      preferred_node: cdktf.stringToTerraform(this._preferredNode),
      ram: cdktf.numberToTerraform(this._ram),
      rtc_base: cdktf.stringToTerraform(this._rtcBase),
      secure_boot: cdktf.booleanToTerraform(this._secureBoot),
      serial_port: cdktf.booleanToTerraform(this._serialPort),
      snapshot_profile: cdktf.stringToTerraform(this._snapshotProfile),
      sound: cdktf.stringToTerraform(this._sound),
      uefi: cdktf.booleanToTerraform(this._uefi),
      usb_tablet: cdktf.booleanToTerraform(this._usbTablet),
      video: cdktf.stringToTerraform(this._video),
      wait_for_guest_agent_info: cdktf.numberToTerraform(this._waitForGuestAgentInfo),
      wait_for_guest_ip_timeout: cdktf.numberToTerraform(this._waitForGuestIpTimeout),
      vergeio_device: cdktf.listMapper(vmVergeioDeviceToTerraform, true)(this._vergeioDevice.internalValue),
      vergeio_drive: cdktf.listMapper(vmVergeioDriveToTerraform, true)(this._vergeioDrive.internalValue),
      vergeio_nic: cdktf.listMapper(vmVergeioNicToTerraform, true)(this._vergeioNic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced: {
        value: cdktf.stringToHclTerraform(this._advanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_hotplug: {
        value: cdktf.booleanToHclTerraform(this._allowHotplug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_delay: {
        value: cdktf.numberToHclTerraform(this._bootDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_order: {
        value: cdktf.stringToHclTerraform(this._bootOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudinit_datasource: {
        value: cdktf.stringToHclTerraform(this._cloudinitDatasource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudinit_files: {
        value: cdktf.listMapperHcl(vmCloudinitFilesToHclTerraform, false)(this._cloudinitFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmCloudinitFilesList",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console: {
        value: cdktf.stringToHclTerraform(this._console),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_pass: {
        value: cdktf.stringToHclTerraform(this._consolePass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_pass_enabled: {
        value: cdktf.booleanToHclTerraform(this._consolePassEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_cores: {
        value: cdktf.numberToHclTerraform(this._cpuCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
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
      disable_hypervisor: {
        value: cdktf.booleanToHclTerraform(this._disableHypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_powercycle: {
        value: cdktf.booleanToHclTerraform(this._disablePowercycle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display: {
        value: cdktf.stringToHclTerraform(this._display),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_agent: {
        value: cdktf.booleanToHclTerraform(this._guestAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_agent_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guestAgentIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ha_group: {
        value: cdktf.stringToHclTerraform(this._haGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignored_guest_ips: {
        value: cdktf.stringToHclTerraform(this._ignoredGuestIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nested_virtualization: {
        value: cdktf.booleanToHclTerraform(this._nestedVirtualization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_description: {
        value: cdktf.stringToHclTerraform(this._osDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_family: {
        value: cdktf.stringToHclTerraform(this._osFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      powerstate: {
        value: cdktf.booleanToHclTerraform(this._powerstate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preferred_node: {
        value: cdktf.stringToHclTerraform(this._preferredNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtc_base: {
        value: cdktf.stringToHclTerraform(this._rtcBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_boot: {
        value: cdktf.booleanToHclTerraform(this._secureBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_port: {
        value: cdktf.booleanToHclTerraform(this._serialPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_profile: {
        value: cdktf.stringToHclTerraform(this._snapshotProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sound: {
        value: cdktf.stringToHclTerraform(this._sound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uefi: {
        value: cdktf.booleanToHclTerraform(this._uefi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usb_tablet: {
        value: cdktf.booleanToHclTerraform(this._usbTablet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      video: {
        value: cdktf.stringToHclTerraform(this._video),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_guest_agent_info: {
        value: cdktf.numberToHclTerraform(this._waitForGuestAgentInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_guest_ip_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForGuestIpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vergeio_device: {
        value: cdktf.listMapperHcl(vmVergeioDeviceToHclTerraform, true)(this._vergeioDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmVergeioDeviceList",
      },
      vergeio_drive: {
        value: cdktf.listMapperHcl(vmVergeioDriveToHclTerraform, true)(this._vergeioDrive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmVergeioDriveList",
      },
      vergeio_nic: {
        value: cdktf.listMapperHcl(vmVergeioNicToHclTerraform, true)(this._vergeioNic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmVergeioNicList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
