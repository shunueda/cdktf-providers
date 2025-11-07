// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bios_uuid VirtualMachineV2#bios_uuid}
  */
  readonly biosUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#description VirtualMachineV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#enabled_cpu_features VirtualMachineV2#enabled_cpu_features}
  */
  readonly enabledCpuFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#generation_uuid VirtualMachineV2#generation_uuid}
  */
  readonly generationUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#hardware_clock_timezone VirtualMachineV2#hardware_clock_timezone}
  */
  readonly hardwareClockTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#id VirtualMachineV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_agent_vm VirtualMachineV2#is_agent_vm}
  */
  readonly isAgentVm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_branding_enabled VirtualMachineV2#is_branding_enabled}
  */
  readonly isBrandingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_cpu_hotplug_enabled VirtualMachineV2#is_cpu_hotplug_enabled}
  */
  readonly isCpuHotplugEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_cpu_passthrough_enabled VirtualMachineV2#is_cpu_passthrough_enabled}
  */
  readonly isCpuPassthroughEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_gpu_console_enabled VirtualMachineV2#is_gpu_console_enabled}
  */
  readonly isGpuConsoleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_memory_overcommit_enabled VirtualMachineV2#is_memory_overcommit_enabled}
  */
  readonly isMemoryOvercommitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_scsi_controller_enabled VirtualMachineV2#is_scsi_controller_enabled}
  */
  readonly isScsiControllerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_vcpu_hard_pinning_enabled VirtualMachineV2#is_vcpu_hard_pinning_enabled}
  */
  readonly isVcpuHardPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_vga_console_enabled VirtualMachineV2#is_vga_console_enabled}
  */
  readonly isVgaConsoleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#machine_type VirtualMachineV2#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#memory_size_bytes VirtualMachineV2#memory_size_bytes}
  */
  readonly memorySizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#name VirtualMachineV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#num_cores_per_socket VirtualMachineV2#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#num_numa_nodes VirtualMachineV2#num_numa_nodes}
  */
  readonly numNumaNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#num_sockets VirtualMachineV2#num_sockets}
  */
  readonly numSockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#num_threads_per_core VirtualMachineV2#num_threads_per_core}
  */
  readonly numThreadsPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#power_state VirtualMachineV2#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#protection_type VirtualMachineV2#protection_type}
  */
  readonly protectionType?: string;
  /**
  * apc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#apc_config VirtualMachineV2#apc_config}
  */
  readonly apcConfig?: VirtualMachineV2ApcConfig[] | cdktf.IResolvable;
  /**
  * availability_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#availability_zone VirtualMachineV2#availability_zone}
  */
  readonly availabilityZone?: VirtualMachineV2AvailabilityZone[] | cdktf.IResolvable;
  /**
  * boot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_config VirtualMachineV2#boot_config}
  */
  readonly bootConfig?: VirtualMachineV2BootConfig[] | cdktf.IResolvable;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#categories VirtualMachineV2#categories}
  */
  readonly categories?: VirtualMachineV2Categories[] | cdktf.IResolvable;
  /**
  * cd_roms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#cd_roms VirtualMachineV2#cd_roms}
  */
  readonly cdRoms?: VirtualMachineV2CdRoms[] | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#cluster VirtualMachineV2#cluster}
  */
  readonly cluster?: VirtualMachineV2Cluster[] | cdktf.IResolvable;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disks VirtualMachineV2#disks}
  */
  readonly disks?: VirtualMachineV2Disks[] | cdktf.IResolvable;
  /**
  * gpus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#gpus VirtualMachineV2#gpus}
  */
  readonly gpus?: VirtualMachineV2Gpus[] | cdktf.IResolvable;
  /**
  * guest_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#guest_customization VirtualMachineV2#guest_customization}
  */
  readonly guestCustomization?: VirtualMachineV2GuestCustomization[] | cdktf.IResolvable;
  /**
  * guest_tools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#guest_tools VirtualMachineV2#guest_tools}
  */
  readonly guestTools?: VirtualMachineV2GuestTools[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#host VirtualMachineV2#host}
  */
  readonly host?: VirtualMachineV2Host[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#nics VirtualMachineV2#nics}
  */
  readonly nics?: VirtualMachineV2Nics[] | cdktf.IResolvable;
  /**
  * ownership_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ownership_info VirtualMachineV2#ownership_info}
  */
  readonly ownershipInfo?: VirtualMachineV2OwnershipInfo[] | cdktf.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#project VirtualMachineV2#project}
  */
  readonly project?: VirtualMachineV2Project[] | cdktf.IResolvable;
  /**
  * protection_policy_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#protection_policy_state VirtualMachineV2#protection_policy_state}
  */
  readonly protectionPolicyState?: VirtualMachineV2ProtectionPolicyState[] | cdktf.IResolvable;
  /**
  * serial_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#serial_ports VirtualMachineV2#serial_ports}
  */
  readonly serialPorts?: VirtualMachineV2SerialPorts[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#source VirtualMachineV2#source}
  */
  readonly source?: VirtualMachineV2Source[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#storage_config VirtualMachineV2#storage_config}
  */
  readonly storageConfig?: VirtualMachineV2StorageConfig[] | cdktf.IResolvable;
  /**
  * vtpm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vtpm_config VirtualMachineV2#vtpm_config}
  */
  readonly vtpmConfig?: VirtualMachineV2VtpmConfig[] | cdktf.IResolvable;
}
export interface VirtualMachineV2ApcConfigCpuModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#name VirtualMachineV2#name}
  */
  readonly name?: string;
}

export function virtualMachineV2ApcConfigCpuModelToTerraform(struct?: VirtualMachineV2ApcConfigCpuModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualMachineV2ApcConfigCpuModelToHclTerraform(struct?: VirtualMachineV2ApcConfigCpuModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
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

export class VirtualMachineV2ApcConfigCpuModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2ApcConfigCpuModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2ApcConfigCpuModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
      this._name = value.name;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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
}

export class VirtualMachineV2ApcConfigCpuModelList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2ApcConfigCpuModel[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2ApcConfigCpuModelOutputReference {
    return new VirtualMachineV2ApcConfigCpuModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2ApcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_apc_enabled VirtualMachineV2#is_apc_enabled}
  */
  readonly isApcEnabled?: boolean | cdktf.IResolvable;
  /**
  * cpu_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#cpu_model VirtualMachineV2#cpu_model}
  */
  readonly cpuModel?: VirtualMachineV2ApcConfigCpuModel[] | cdktf.IResolvable;
}

export function virtualMachineV2ApcConfigToTerraform(struct?: VirtualMachineV2ApcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_apc_enabled: cdktf.booleanToTerraform(struct!.isApcEnabled),
    cpu_model: cdktf.listMapper(virtualMachineV2ApcConfigCpuModelToTerraform, true)(struct!.cpuModel),
  }
}


export function virtualMachineV2ApcConfigToHclTerraform(struct?: VirtualMachineV2ApcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_apc_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isApcEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_model: {
      value: cdktf.listMapperHcl(virtualMachineV2ApcConfigCpuModelToHclTerraform, true)(struct!.cpuModel),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2ApcConfigCpuModelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2ApcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2ApcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isApcEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isApcEnabled = this._isApcEnabled;
    }
    if (this._cpuModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuModel = this._cpuModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2ApcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isApcEnabled = undefined;
      this._cpuModel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isApcEnabled = value.isApcEnabled;
      this._cpuModel.internalValue = value.cpuModel;
    }
  }

  // is_apc_enabled - computed: true, optional: true, required: false
  private _isApcEnabled?: boolean | cdktf.IResolvable; 
  public get isApcEnabled() {
    return this.getBooleanAttribute('is_apc_enabled');
  }
  public set isApcEnabled(value: boolean | cdktf.IResolvable) {
    this._isApcEnabled = value;
  }
  public resetIsApcEnabled() {
    this._isApcEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApcEnabledInput() {
    return this._isApcEnabled;
  }

  // cpu_model - computed: false, optional: true, required: false
  private _cpuModel = new VirtualMachineV2ApcConfigCpuModelList(this, "cpu_model", false);
  public get cpuModel() {
    return this._cpuModel;
  }
  public putCpuModel(value: VirtualMachineV2ApcConfigCpuModel[] | cdktf.IResolvable) {
    this._cpuModel.internalValue = value;
  }
  public resetCpuModel() {
    this._cpuModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuModelInput() {
    return this._cpuModel.internalValue;
  }
}

export class VirtualMachineV2ApcConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2ApcConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2ApcConfigOutputReference {
    return new VirtualMachineV2ApcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2AvailabilityZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2AvailabilityZoneToTerraform(struct?: VirtualMachineV2AvailabilityZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2AvailabilityZoneToHclTerraform(struct?: VirtualMachineV2AvailabilityZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2AvailabilityZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2AvailabilityZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2AvailabilityZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2AvailabilityZoneList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2AvailabilityZone[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2AvailabilityZoneOutputReference {
    return new VirtualMachineV2AvailabilityZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus_type VirtualMachineV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
}

export function virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk {
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_address VirtualMachineV2#disk_address}
  */
  readonly diskAddress?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_address: cdktf.listMapper(virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_address: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference {
    return new VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#mac_address VirtualMachineV2#mac_address}
  */
  readonly macAddress?: string;
}

export function virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicToTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
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
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicOutputReference {
    return new VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigLegacyBootBootDevice {
  /**
  * boot_device_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_device_disk VirtualMachineV2#boot_device_disk}
  */
  readonly bootDeviceDisk?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable;
  /**
  * boot_device_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_device_nic VirtualMachineV2#boot_device_nic}
  */
  readonly bootDeviceNic?: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigLegacyBootBootDeviceToTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_device_disk: cdktf.listMapper(virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform, true)(struct!.bootDeviceDisk),
    boot_device_nic: cdktf.listMapper(virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicToTerraform, true)(struct!.bootDeviceNic),
  }
}


export function virtualMachineV2BootConfigLegacyBootBootDeviceToHclTerraform(struct?: VirtualMachineV2BootConfigLegacyBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_device_disk: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform, true)(struct!.bootDeviceDisk),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskList",
    },
    boot_device_nic: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform, true)(struct!.bootDeviceNic),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigLegacyBootBootDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDeviceDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceDisk = this._bootDeviceDisk?.internalValue;
    }
    if (this._bootDeviceNic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceNic = this._bootDeviceNic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigLegacyBootBootDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = undefined;
      this._bootDeviceNic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = value.bootDeviceDisk;
      this._bootDeviceNic.internalValue = value.bootDeviceNic;
    }
  }

  // boot_device_disk - computed: false, optional: true, required: false
  private _bootDeviceDisk = new VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }
  public putBootDeviceDisk(value: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable) {
    this._bootDeviceDisk.internalValue = value;
  }
  public resetBootDeviceDisk() {
    this._bootDeviceDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskInput() {
    return this._bootDeviceDisk.internalValue;
  }

  // boot_device_nic - computed: false, optional: true, required: false
  private _bootDeviceNic = new VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
  public putBootDeviceNic(value: VirtualMachineV2BootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable) {
    this._bootDeviceNic.internalValue = value;
  }
  public resetBootDeviceNic() {
    this._bootDeviceNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceNicInput() {
    return this._bootDeviceNic.internalValue;
  }
}

export class VirtualMachineV2BootConfigLegacyBootBootDeviceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigLegacyBootBootDevice[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigLegacyBootBootDeviceOutputReference {
    return new VirtualMachineV2BootConfigLegacyBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigLegacyBoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_order VirtualMachineV2#boot_order}
  */
  readonly bootOrder?: string[];
  /**
  * boot_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_device VirtualMachineV2#boot_device}
  */
  readonly bootDevice?: VirtualMachineV2BootConfigLegacyBootBootDevice[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigLegacyBootToTerraform(struct?: VirtualMachineV2BootConfigLegacyBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootOrder),
    boot_device: cdktf.listMapper(virtualMachineV2BootConfigLegacyBootBootDeviceToTerraform, true)(struct!.bootDevice),
  }
}


export function virtualMachineV2BootConfigLegacyBootToHclTerraform(struct?: VirtualMachineV2BootConfigLegacyBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    boot_device: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigLegacyBootBootDeviceToHclTerraform, true)(struct!.bootDevice),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigLegacyBootBootDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigLegacyBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigLegacyBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._bootDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDevice = this._bootDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigLegacyBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._bootDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._bootDevice.internalValue = value.bootDevice;
    }
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

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice = new VirtualMachineV2BootConfigLegacyBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }
  public putBootDevice(value: VirtualMachineV2BootConfigLegacyBootBootDevice[] | cdktf.IResolvable) {
    this._bootDevice.internalValue = value;
  }
  public resetBootDevice() {
    this._bootDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice.internalValue;
  }
}

export class VirtualMachineV2BootConfigLegacyBootList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigLegacyBoot[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigLegacyBootOutputReference {
    return new VirtualMachineV2BootConfigLegacyBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus_type VirtualMachineV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
}

export function virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk {
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_address VirtualMachineV2#disk_address}
  */
  readonly diskAddress?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskToTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_address: cdktf.listMapper(virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_address: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskOutputReference {
    return new VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#mac_address VirtualMachineV2#mac_address}
  */
  readonly macAddress?: string;
}

export function virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicToTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
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
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicOutputReference {
    return new VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootBootDevice {
  /**
  * boot_device_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_device_disk VirtualMachineV2#boot_device_disk}
  */
  readonly bootDeviceDisk?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable;
  /**
  * boot_device_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_device_nic VirtualMachineV2#boot_device_nic}
  */
  readonly bootDeviceNic?: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootBootDeviceToTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_device_disk: cdktf.listMapper(virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskToTerraform, true)(struct!.bootDeviceDisk),
    boot_device_nic: cdktf.listMapper(virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicToTerraform, true)(struct!.bootDeviceNic),
  }
}


export function virtualMachineV2BootConfigUefiBootBootDeviceToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_device_disk: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform, true)(struct!.bootDeviceDisk),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskList",
    },
    boot_device_nic: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform, true)(struct!.bootDeviceNic),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootBootDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDeviceDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceDisk = this._bootDeviceDisk?.internalValue;
    }
    if (this._bootDeviceNic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceNic = this._bootDeviceNic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootBootDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = undefined;
      this._bootDeviceNic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = value.bootDeviceDisk;
      this._bootDeviceNic.internalValue = value.bootDeviceNic;
    }
  }

  // boot_device_disk - computed: false, optional: true, required: false
  private _bootDeviceDisk = new VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }
  public putBootDeviceDisk(value: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable) {
    this._bootDeviceDisk.internalValue = value;
  }
  public resetBootDeviceDisk() {
    this._bootDeviceDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskInput() {
    return this._bootDeviceDisk.internalValue;
  }

  // boot_device_nic - computed: false, optional: true, required: false
  private _bootDeviceNic = new VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
  public putBootDeviceNic(value: VirtualMachineV2BootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable) {
    this._bootDeviceNic.internalValue = value;
  }
  public resetBootDeviceNic() {
    this._bootDeviceNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceNicInput() {
    return this._bootDeviceNic.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootBootDeviceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootBootDevice[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootBootDeviceOutputReference {
    return new VirtualMachineV2BootConfigUefiBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#image_ext_id VirtualMachineV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.imageExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtId = this._imageExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtId = value.imageExtId;
    }
  }

  // image_ext_id - computed: true, optional: true, required: false
  private _imageExtId?: string; 
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
  public set imageExtId(value: string) {
    this._imageExtId = value;
  }
  public resetImageExtId() {
    this._imageExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtIdInput() {
    return this._imageExtId;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus_type VirtualMachineV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_ext_id VirtualMachineV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_address VirtualMachineV2#disk_address}
  */
  readonly diskAddress?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vm_reference VirtualMachineV2#vm_reference}
  */
  readonly vmReference?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.diskExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_address: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskExtId = this._diskExtId;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskExtId = undefined;
      this._diskAddress.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskExtId = value.diskExtId;
      this._diskAddress.internalValue = value.diskAddress;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // disk_ext_id - computed: true, optional: true, required: false
  private _diskExtId?: string; 
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }
  public set diskExtId(value: string) {
    this._diskExtId = value;
  }
  public resetDiskExtId() {
    this._diskExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskExtIdInput() {
    return this._diskExtId;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }

  // vm_reference - computed: false, optional: true, required: false
  private _vmReference = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
    this._vmReference.internalValue = value;
  }
  public resetVmReference() {
    this._vmReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#image_reference VirtualMachineV2#image_reference}
  */
  readonly imageReference?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vm_disk_reference VirtualMachineV2#vm_disk_reference}
  */
  readonly vmDiskReference?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReference = this._imageReference?.internalValue;
    }
    if (this._vmDiskReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDiskReference = this._vmDiskReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = undefined;
      this._vmDiskReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = value.imageReference;
      this._vmDiskReference.internalValue = value.vmDiskReference;
    }
  }

  // image_reference - computed: false, optional: true, required: false
  private _imageReference = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable) {
    this._imageReference.internalValue = value;
  }
  public resetImageReference() {
    this._imageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // vm_disk_reference - computed: false, optional: true, required: false
  private _vmDiskReference = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
    this._vmDiskReference.internalValue = value;
  }
  public resetVmDiskReference() {
    this._vmDiskReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskReferenceInput() {
    return this._vmDiskReference.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#reference VirtualMachineV2#reference}
  */
  readonly reference?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
    }
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_flash_mode_enabled VirtualMachineV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_flash_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFlashModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: true, required: false
  private _isFlashModeEnabled?: boolean | cdktf.IResolvable; 
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
  public set isFlashModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isFlashModeEnabled = value;
  }
  public resetIsFlashModeEnabled() {
    this._isFlashModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlashModeEnabledInput() {
    return this._isFlashModeEnabled;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_size_bytes VirtualMachineV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#data_source VirtualMachineV2#data_source}
  */
  readonly dataSource?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#storage_config VirtualMachineV2#storage_config}
  */
  readonly storageConfig?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#storage_container VirtualMachineV2#storage_container}
  */
  readonly storageContainer?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    data_source: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._storageContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeBytes = undefined;
      this._dataSource.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
      this._storageContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeBytes = value.diskSizeBytes;
      this._dataSource.internalValue = value.dataSource;
      this._storageConfig.internalValue = value.storageConfig;
      this._storageContainer.internalValue = value.storageContainer;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: true, required: false
  private _diskSizeBytes?: number; 
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }
  public set diskSizeBytes(value: number) {
    this._diskSizeBytes = value;
  }
  public resetDiskSizeBytes() {
    this._diskSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeBytesInput() {
    return this._diskSizeBytes;
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // storage_container - computed: false, optional: true, required: false
  private _storageContainer = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable) {
    this._storageContainer.internalValue = value;
  }
  public resetStorageContainer() {
    this._storageContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBootNvramDevice {
  /**
  * backing_storage_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#backing_storage_info VirtualMachineV2#backing_storage_info}
  */
  readonly backingStorageInfo?: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootNvramDeviceToTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_storage_info: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform, true)(struct!.backingStorageInfo),
  }
}


export function virtualMachineV2BootConfigUefiBootNvramDeviceToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBootNvramDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_storage_info: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform, true)(struct!.backingStorageInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBootNvramDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingStorageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingStorageInfo = this._backingStorageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBootNvramDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingStorageInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingStorageInfo.internalValue = value.backingStorageInfo;
    }
  }

  // backing_storage_info - computed: false, optional: true, required: false
  private _backingStorageInfo = new VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfoList(this, "backing_storage_info", false);
  public get backingStorageInfo() {
    return this._backingStorageInfo;
  }
  public putBackingStorageInfo(value: VirtualMachineV2BootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable) {
    this._backingStorageInfo.internalValue = value;
  }
  public resetBackingStorageInfo() {
    this._backingStorageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingStorageInfoInput() {
    return this._backingStorageInfo.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootNvramDeviceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBootNvramDevice[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootNvramDeviceOutputReference {
    return new VirtualMachineV2BootConfigUefiBootNvramDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfigUefiBoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_order VirtualMachineV2#boot_order}
  */
  readonly bootOrder?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_secure_boot_enabled VirtualMachineV2#is_secure_boot_enabled}
  */
  readonly isSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * boot_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boot_device VirtualMachineV2#boot_device}
  */
  readonly bootDevice?: VirtualMachineV2BootConfigUefiBootBootDevice[] | cdktf.IResolvable;
  /**
  * nvram_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#nvram_device VirtualMachineV2#nvram_device}
  */
  readonly nvramDevice?: VirtualMachineV2BootConfigUefiBootNvramDevice[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigUefiBootToTerraform(struct?: VirtualMachineV2BootConfigUefiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootOrder),
    is_secure_boot_enabled: cdktf.booleanToTerraform(struct!.isSecureBootEnabled),
    boot_device: cdktf.listMapper(virtualMachineV2BootConfigUefiBootBootDeviceToTerraform, true)(struct!.bootDevice),
    nvram_device: cdktf.listMapper(virtualMachineV2BootConfigUefiBootNvramDeviceToTerraform, true)(struct!.nvramDevice),
  }
}


export function virtualMachineV2BootConfigUefiBootToHclTerraform(struct?: VirtualMachineV2BootConfigUefiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSecureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_device: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootBootDeviceToHclTerraform, true)(struct!.bootDevice),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootBootDeviceList",
    },
    nvram_device: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootNvramDeviceToHclTerraform, true)(struct!.nvramDevice),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootNvramDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigUefiBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfigUefiBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._isSecureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecureBootEnabled = this._isSecureBootEnabled;
    }
    if (this._bootDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDevice = this._bootDevice?.internalValue;
    }
    if (this._nvramDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvramDevice = this._nvramDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfigUefiBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._isSecureBootEnabled = undefined;
      this._bootDevice.internalValue = undefined;
      this._nvramDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._isSecureBootEnabled = value.isSecureBootEnabled;
      this._bootDevice.internalValue = value.bootDevice;
      this._nvramDevice.internalValue = value.nvramDevice;
    }
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

  // is_secure_boot_enabled - computed: true, optional: true, required: false
  private _isSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }
  public set isSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecureBootEnabled = value;
  }
  public resetIsSecureBootEnabled() {
    this._isSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootEnabledInput() {
    return this._isSecureBootEnabled;
  }

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice = new VirtualMachineV2BootConfigUefiBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }
  public putBootDevice(value: VirtualMachineV2BootConfigUefiBootBootDevice[] | cdktf.IResolvable) {
    this._bootDevice.internalValue = value;
  }
  public resetBootDevice() {
    this._bootDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice.internalValue;
  }

  // nvram_device - computed: false, optional: true, required: false
  private _nvramDevice = new VirtualMachineV2BootConfigUefiBootNvramDeviceList(this, "nvram_device", false);
  public get nvramDevice() {
    return this._nvramDevice;
  }
  public putNvramDevice(value: VirtualMachineV2BootConfigUefiBootNvramDevice[] | cdktf.IResolvable) {
    this._nvramDevice.internalValue = value;
  }
  public resetNvramDevice() {
    this._nvramDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvramDeviceInput() {
    return this._nvramDevice.internalValue;
  }
}

export class VirtualMachineV2BootConfigUefiBootList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfigUefiBoot[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigUefiBootOutputReference {
    return new VirtualMachineV2BootConfigUefiBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2BootConfig {
  /**
  * legacy_boot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#legacy_boot VirtualMachineV2#legacy_boot}
  */
  readonly legacyBoot?: VirtualMachineV2BootConfigLegacyBoot[] | cdktf.IResolvable;
  /**
  * uefi_boot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#uefi_boot VirtualMachineV2#uefi_boot}
  */
  readonly uefiBoot?: VirtualMachineV2BootConfigUefiBoot[] | cdktf.IResolvable;
}

export function virtualMachineV2BootConfigToTerraform(struct?: VirtualMachineV2BootConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    legacy_boot: cdktf.listMapper(virtualMachineV2BootConfigLegacyBootToTerraform, true)(struct!.legacyBoot),
    uefi_boot: cdktf.listMapper(virtualMachineV2BootConfigUefiBootToTerraform, true)(struct!.uefiBoot),
  }
}


export function virtualMachineV2BootConfigToHclTerraform(struct?: VirtualMachineV2BootConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    legacy_boot: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigLegacyBootToHclTerraform, true)(struct!.legacyBoot),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigLegacyBootList",
    },
    uefi_boot: {
      value: cdktf.listMapperHcl(virtualMachineV2BootConfigUefiBootToHclTerraform, true)(struct!.uefiBoot),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2BootConfigUefiBootList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2BootConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2BootConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._legacyBoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyBoot = this._legacyBoot?.internalValue;
    }
    if (this._uefiBoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uefiBoot = this._uefiBoot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2BootConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._legacyBoot.internalValue = undefined;
      this._uefiBoot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._legacyBoot.internalValue = value.legacyBoot;
      this._uefiBoot.internalValue = value.uefiBoot;
    }
  }

  // legacy_boot - computed: false, optional: true, required: false
  private _legacyBoot = new VirtualMachineV2BootConfigLegacyBootList(this, "legacy_boot", false);
  public get legacyBoot() {
    return this._legacyBoot;
  }
  public putLegacyBoot(value: VirtualMachineV2BootConfigLegacyBoot[] | cdktf.IResolvable) {
    this._legacyBoot.internalValue = value;
  }
  public resetLegacyBoot() {
    this._legacyBoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyBootInput() {
    return this._legacyBoot.internalValue;
  }

  // uefi_boot - computed: false, optional: true, required: false
  private _uefiBoot = new VirtualMachineV2BootConfigUefiBootList(this, "uefi_boot", false);
  public get uefiBoot() {
    return this._uefiBoot;
  }
  public putUefiBoot(value: VirtualMachineV2BootConfigUefiBoot[] | cdktf.IResolvable) {
    this._uefiBoot.internalValue = value;
  }
  public resetUefiBoot() {
    this._uefiBoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiBootInput() {
    return this._uefiBoot.internalValue;
  }
}

export class VirtualMachineV2BootConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2BootConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2BootConfigOutputReference {
    return new VirtualMachineV2BootConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Categories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2CategoriesToTerraform(struct?: VirtualMachineV2Categories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2CategoriesToHclTerraform(struct?: VirtualMachineV2Categories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Categories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Categories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2CategoriesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Categories[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CategoriesOutputReference {
    return new VirtualMachineV2CategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#image_ext_id VirtualMachineV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.imageExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtId = this._imageExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtId = value.imageExtId;
    }
  }

  // image_ext_id - computed: true, optional: true, required: false
  private _imageExtId?: string; 
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
  public set imageExtId(value: string) {
    this._imageExtId = value;
  }
  public resetImageExtId() {
    this._imageExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtIdInput() {
    return this._imageExtId;
  }
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus_type VirtualMachineV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
}

export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_ext_id VirtualMachineV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_address VirtualMachineV2#disk_address}
  */
  readonly diskAddress?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vm_reference VirtualMachineV2#vm_reference}
  */
  readonly vmReference?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.diskExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_address: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskExtId = this._diskExtId;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskExtId = undefined;
      this._diskAddress.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskExtId = value.diskExtId;
      this._diskAddress.internalValue = value.diskAddress;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // disk_ext_id - computed: true, optional: true, required: false
  private _diskExtId?: string; 
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }
  public set diskExtId(value: string) {
    this._diskExtId = value;
  }
  public resetDiskExtId() {
    this._diskExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskExtIdInput() {
    return this._diskExtId;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }

  // vm_reference - computed: false, optional: true, required: false
  private _vmReference = new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
    this._vmReference.internalValue = value;
  }
  public resetVmReference() {
    this._vmReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#image_reference VirtualMachineV2#image_reference}
  */
  readonly imageReference?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vm_disk_reference VirtualMachineV2#vm_disk_reference}
  */
  readonly vmDiskReference?: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function virtualMachineV2CdRomsBackingInfoDataSourceReferenceToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoDataSourceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReference = this._imageReference?.internalValue;
    }
    if (this._vmDiskReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDiskReference = this._vmDiskReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoDataSourceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = undefined;
      this._vmDiskReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = value.imageReference;
      this._vmDiskReference.internalValue = value.vmDiskReference;
    }
  }

  // image_reference - computed: false, optional: true, required: false
  private _imageReference = new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable) {
    this._imageReference.internalValue = value;
  }
  public resetImageReference() {
    this._imageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // vm_disk_reference - computed: false, optional: true, required: false
  private _vmDiskReference = new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: VirtualMachineV2CdRomsBackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
    this._vmDiskReference.internalValue = value;
  }
  public resetVmDiskReference() {
    this._vmDiskReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskReferenceInput() {
    return this._vmDiskReference.internalValue;
  }
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoDataSourceReferenceOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#reference VirtualMachineV2#reference}
  */
  readonly reference?: VirtualMachineV2CdRomsBackingInfoDataSourceReference[] | cdktf.IResolvable;
}

export function virtualMachineV2CdRomsBackingInfoDataSourceToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function virtualMachineV2CdRomsBackingInfoDataSourceToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
    }
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new VirtualMachineV2CdRomsBackingInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: VirtualMachineV2CdRomsBackingInfoDataSourceReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class VirtualMachineV2CdRomsBackingInfoDataSourceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoDataSource[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoDataSourceOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_flash_mode_enabled VirtualMachineV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function virtualMachineV2CdRomsBackingInfoStorageConfigToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function virtualMachineV2CdRomsBackingInfoStorageConfigToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_flash_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFlashModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: true, required: false
  private _isFlashModeEnabled?: boolean | cdktf.IResolvable; 
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
  public set isFlashModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isFlashModeEnabled = value;
  }
  public resetIsFlashModeEnabled() {
    this._isFlashModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlashModeEnabledInput() {
    return this._isFlashModeEnabled;
  }
}

export class VirtualMachineV2CdRomsBackingInfoStorageConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoStorageConfigOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfoStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2CdRomsBackingInfoStorageContainerToTerraform(struct?: VirtualMachineV2CdRomsBackingInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2CdRomsBackingInfoStorageContainerToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfoStorageContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfoStorageContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2CdRomsBackingInfoStorageContainerList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfoStorageContainer[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoStorageContainerOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsBackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_size_bytes VirtualMachineV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#data_source VirtualMachineV2#data_source}
  */
  readonly dataSource?: VirtualMachineV2CdRomsBackingInfoDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#storage_config VirtualMachineV2#storage_config}
  */
  readonly storageConfig?: VirtualMachineV2CdRomsBackingInfoStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#storage_container VirtualMachineV2#storage_container}
  */
  readonly storageContainer?: VirtualMachineV2CdRomsBackingInfoStorageContainer[] | cdktf.IResolvable;
}

export function virtualMachineV2CdRomsBackingInfoToTerraform(struct?: VirtualMachineV2CdRomsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    data_source: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function virtualMachineV2CdRomsBackingInfoToHclTerraform(struct?: VirtualMachineV2CdRomsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._storageContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeBytes = undefined;
      this._dataSource.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
      this._storageContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeBytes = value.diskSizeBytes;
      this._dataSource.internalValue = value.dataSource;
      this._storageConfig.internalValue = value.storageConfig;
      this._storageContainer.internalValue = value.storageContainer;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: true, required: false
  private _diskSizeBytes?: number; 
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }
  public set diskSizeBytes(value: number) {
    this._diskSizeBytes = value;
  }
  public resetDiskSizeBytes() {
    this._diskSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeBytesInput() {
    return this._diskSizeBytes;
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new VirtualMachineV2CdRomsBackingInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: VirtualMachineV2CdRomsBackingInfoDataSource[] | cdktf.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new VirtualMachineV2CdRomsBackingInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: VirtualMachineV2CdRomsBackingInfoStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // storage_container - computed: false, optional: true, required: false
  private _storageContainer = new VirtualMachineV2CdRomsBackingInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: VirtualMachineV2CdRomsBackingInfoStorageContainer[] | cdktf.IResolvable) {
    this._storageContainer.internalValue = value;
  }
  public resetStorageContainer() {
    this._storageContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer.internalValue;
  }
}

export class VirtualMachineV2CdRomsBackingInfoList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsBackingInfoOutputReference {
    return new VirtualMachineV2CdRomsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRomsDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus_type VirtualMachineV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
}

export function virtualMachineV2CdRomsDiskAddressToTerraform(struct?: VirtualMachineV2CdRomsDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function virtualMachineV2CdRomsDiskAddressToHclTerraform(struct?: VirtualMachineV2CdRomsDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRomsDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRomsDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class VirtualMachineV2CdRomsDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRomsDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsDiskAddressOutputReference {
    return new VirtualMachineV2CdRomsDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2CdRoms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#iso_type VirtualMachineV2#iso_type}
  */
  readonly isoType?: string;
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#backing_info VirtualMachineV2#backing_info}
  */
  readonly backingInfo?: VirtualMachineV2CdRomsBackingInfo[] | cdktf.IResolvable;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_address VirtualMachineV2#disk_address}
  */
  readonly diskAddress?: VirtualMachineV2CdRomsDiskAddress[] | cdktf.IResolvable;
}

export function virtualMachineV2CdRomsToTerraform(struct?: VirtualMachineV2CdRoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
    iso_type: cdktf.stringToTerraform(struct!.isoType),
    backing_info: cdktf.listMapper(virtualMachineV2CdRomsBackingInfoToTerraform, true)(struct!.backingInfo),
    disk_address: cdktf.listMapper(virtualMachineV2CdRomsDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function virtualMachineV2CdRomsToHclTerraform(struct?: VirtualMachineV2CdRoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iso_type: {
      value: cdktf.stringToHclTerraform(struct!.isoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backing_info: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsBackingInfoList",
    },
    disk_address: {
      value: cdktf.listMapperHcl(virtualMachineV2CdRomsDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2CdRomsDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2CdRomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2CdRoms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._isoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.isoType = this._isoType;
    }
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2CdRoms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
      this._isoType = undefined;
      this._backingInfo.internalValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
      this._isoType = value.isoType;
      this._backingInfo.internalValue = value.backingInfo;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // iso_type - computed: true, optional: true, required: false
  private _isoType?: string; 
  public get isoType() {
    return this.getStringAttribute('iso_type');
  }
  public set isoType(value: string) {
    this._isoType = value;
  }
  public resetIsoType() {
    this._isoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoTypeInput() {
    return this._isoType;
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new VirtualMachineV2CdRomsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: VirtualMachineV2CdRomsBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VirtualMachineV2CdRomsDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VirtualMachineV2CdRomsDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class VirtualMachineV2CdRomsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2CdRoms[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2CdRomsOutputReference {
    return new VirtualMachineV2CdRomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Cluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2ClusterToTerraform(struct?: VirtualMachineV2Cluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2ClusterToHclTerraform(struct?: VirtualMachineV2Cluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2ClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Cluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Cluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2ClusterList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Cluster[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2ClusterOutputReference {
    return new VirtualMachineV2ClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#volume_group_ext_id VirtualMachineV2#volume_group_ext_id}
  */
  readonly volumeGroupExtId?: string;
}

export function virtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceToTerraform(struct?: VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_group_ext_id: cdktf.stringToTerraform(struct!.volumeGroupExtId),
  }
}


export function virtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_group_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeGroupExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupExtId = this._volumeGroupExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeGroupExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeGroupExtId = value.volumeGroupExtId;
    }
  }

  // volume_group_ext_id - computed: true, optional: true, required: false
  private _volumeGroupExtId?: string; 
  public get volumeGroupExtId() {
    return this.getStringAttribute('volume_group_ext_id');
  }
  public set volumeGroupExtId(value: string) {
    this._volumeGroupExtId = value;
  }
  public resetVolumeGroupExtId() {
    this._volumeGroupExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupExtIdInput() {
    return this._volumeGroupExtId;
  }
}

export class VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceOutputReference {
    return new VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#image_ext_id VirtualMachineV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.imageExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtId = this._imageExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtId = value.imageExtId;
    }
  }

  // image_ext_id - computed: true, optional: true, required: false
  private _imageExtId?: string; 
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
  public set imageExtId(value: string) {
    this._imageExtId = value;
  }
  public resetImageExtId() {
    this._imageExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtIdInput() {
    return this._imageExtId;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus_type VirtualMachineV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
}

export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_ext_id VirtualMachineV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_address VirtualMachineV2#disk_address}
  */
  readonly diskAddress?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vm_reference VirtualMachineV2#vm_reference}
  */
  readonly vmReference?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.diskExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_address: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskExtId = this._diskExtId;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskExtId = undefined;
      this._diskAddress.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskExtId = value.diskExtId;
      this._diskAddress.internalValue = value.diskAddress;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // disk_ext_id - computed: true, optional: true, required: false
  private _diskExtId?: string; 
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }
  public set diskExtId(value: string) {
    this._diskExtId = value;
  }
  public resetDiskExtId() {
    this._diskExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskExtIdInput() {
    return this._diskExtId;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }

  // vm_reference - computed: false, optional: true, required: false
  private _vmReference = new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
    this._vmReference.internalValue = value;
  }
  public resetVmReference() {
    this._vmReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#image_reference VirtualMachineV2#image_reference}
  */
  readonly imageReference?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vm_disk_reference VirtualMachineV2#vm_disk_reference}
  */
  readonly vmDiskReference?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReference = this._imageReference?.internalValue;
    }
    if (this._vmDiskReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDiskReference = this._vmDiskReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = undefined;
      this._vmDiskReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = value.imageReference;
      this._vmDiskReference.internalValue = value.vmDiskReference;
    }
  }

  // image_reference - computed: false, optional: true, required: false
  private _imageReference = new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceImageReference[] | cdktf.IResolvable) {
    this._imageReference.internalValue = value;
  }
  public resetImageReference() {
    this._imageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // vm_disk_reference - computed: false, optional: true, required: false
  private _vmDiskReference = new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
    this._vmDiskReference.internalValue = value;
  }
  public resetVmDiskReference() {
    this._vmDiskReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskReferenceInput() {
    return this._vmDiskReference.internalValue;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#reference VirtualMachineV2#reference}
  */
  readonly reference?: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference[] | cdktf.IResolvable;
}

export function virtualMachineV2DisksBackingInfoVmDiskDataSourceToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskDataSourceToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
    }
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new VirtualMachineV2DisksBackingInfoVmDiskDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: VirtualMachineV2DisksBackingInfoVmDiskDataSourceReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskDataSourceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskDataSource[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskDataSourceOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_flash_mode_enabled VirtualMachineV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function virtualMachineV2DisksBackingInfoVmDiskStorageConfigToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskStorageConfigToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_flash_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFlashModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: true, required: false
  private _isFlashModeEnabled?: boolean | cdktf.IResolvable; 
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
  public set isFlashModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isFlashModeEnabled = value;
  }
  public resetIsFlashModeEnabled() {
    this._isFlashModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlashModeEnabledInput() {
    return this._isFlashModeEnabled;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskStorageConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskStorageConfigOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDiskStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2DisksBackingInfoVmDiskStorageContainerToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskStorageContainerToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDiskStorageContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskStorageContainerList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDiskStorageContainer[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskStorageContainerOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfoVmDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_size_bytes VirtualMachineV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#data_source VirtualMachineV2#data_source}
  */
  readonly dataSource?: VirtualMachineV2DisksBackingInfoVmDiskDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#storage_config VirtualMachineV2#storage_config}
  */
  readonly storageConfig?: VirtualMachineV2DisksBackingInfoVmDiskStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#storage_container VirtualMachineV2#storage_container}
  */
  readonly storageContainer?: VirtualMachineV2DisksBackingInfoVmDiskStorageContainer[] | cdktf.IResolvable;
}

export function virtualMachineV2DisksBackingInfoVmDiskToTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    data_source: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function virtualMachineV2DisksBackingInfoVmDiskToHclTerraform(struct?: VirtualMachineV2DisksBackingInfoVmDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfoVmDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._storageContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfoVmDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeBytes = undefined;
      this._dataSource.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
      this._storageContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeBytes = value.diskSizeBytes;
      this._dataSource.internalValue = value.dataSource;
      this._storageConfig.internalValue = value.storageConfig;
      this._storageContainer.internalValue = value.storageContainer;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: true, required: false
  private _diskSizeBytes?: number; 
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }
  public set diskSizeBytes(value: number) {
    this._diskSizeBytes = value;
  }
  public resetDiskSizeBytes() {
    this._diskSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeBytesInput() {
    return this._diskSizeBytes;
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new VirtualMachineV2DisksBackingInfoVmDiskDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: VirtualMachineV2DisksBackingInfoVmDiskDataSource[] | cdktf.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new VirtualMachineV2DisksBackingInfoVmDiskStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: VirtualMachineV2DisksBackingInfoVmDiskStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // storage_container - computed: false, optional: true, required: false
  private _storageContainer = new VirtualMachineV2DisksBackingInfoVmDiskStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: VirtualMachineV2DisksBackingInfoVmDiskStorageContainer[] | cdktf.IResolvable) {
    this._storageContainer.internalValue = value;
  }
  public resetStorageContainer() {
    this._storageContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer.internalValue;
  }
}

export class VirtualMachineV2DisksBackingInfoVmDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfoVmDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoVmDiskOutputReference {
    return new VirtualMachineV2DisksBackingInfoVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksBackingInfo {
  /**
  * adfs_volume_group_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#adfs_volume_group_reference VirtualMachineV2#adfs_volume_group_reference}
  */
  readonly adfsVolumeGroupReference?: VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference[] | cdktf.IResolvable;
  /**
  * vm_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vm_disk VirtualMachineV2#vm_disk}
  */
  readonly vmDisk?: VirtualMachineV2DisksBackingInfoVmDisk[] | cdktf.IResolvable;
}

export function virtualMachineV2DisksBackingInfoToTerraform(struct?: VirtualMachineV2DisksBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adfs_volume_group_reference: cdktf.listMapper(virtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceToTerraform, true)(struct!.adfsVolumeGroupReference),
    vm_disk: cdktf.listMapper(virtualMachineV2DisksBackingInfoVmDiskToTerraform, true)(struct!.vmDisk),
  }
}


export function virtualMachineV2DisksBackingInfoToHclTerraform(struct?: VirtualMachineV2DisksBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adfs_volume_group_reference: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform, true)(struct!.adfsVolumeGroupReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceList",
    },
    vm_disk: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoVmDiskToHclTerraform, true)(struct!.vmDisk),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoVmDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adfsVolumeGroupReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adfsVolumeGroupReference = this._adfsVolumeGroupReference?.internalValue;
    }
    if (this._vmDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDisk = this._vmDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adfsVolumeGroupReference.internalValue = undefined;
      this._vmDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adfsVolumeGroupReference.internalValue = value.adfsVolumeGroupReference;
      this._vmDisk.internalValue = value.vmDisk;
    }
  }

  // adfs_volume_group_reference - computed: false, optional: true, required: false
  private _adfsVolumeGroupReference = new VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReferenceList(this, "adfs_volume_group_reference", false);
  public get adfsVolumeGroupReference() {
    return this._adfsVolumeGroupReference;
  }
  public putAdfsVolumeGroupReference(value: VirtualMachineV2DisksBackingInfoAdfsVolumeGroupReference[] | cdktf.IResolvable) {
    this._adfsVolumeGroupReference.internalValue = value;
  }
  public resetAdfsVolumeGroupReference() {
    this._adfsVolumeGroupReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsVolumeGroupReferenceInput() {
    return this._adfsVolumeGroupReference.internalValue;
  }

  // vm_disk - computed: false, optional: true, required: false
  private _vmDisk = new VirtualMachineV2DisksBackingInfoVmDiskList(this, "vm_disk", false);
  public get vmDisk() {
    return this._vmDisk;
  }
  public putVmDisk(value: VirtualMachineV2DisksBackingInfoVmDisk[] | cdktf.IResolvable) {
    this._vmDisk.internalValue = value;
  }
  public resetVmDisk() {
    this._vmDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskInput() {
    return this._vmDisk.internalValue;
  }
}

export class VirtualMachineV2DisksBackingInfoList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksBackingInfoOutputReference {
    return new VirtualMachineV2DisksBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2DisksDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus_type VirtualMachineV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
}

export function virtualMachineV2DisksDiskAddressToTerraform(struct?: VirtualMachineV2DisksDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function virtualMachineV2DisksDiskAddressToHclTerraform(struct?: VirtualMachineV2DisksDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2DisksDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2DisksDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class VirtualMachineV2DisksDiskAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2DisksDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksDiskAddressOutputReference {
    return new VirtualMachineV2DisksDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Disks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#backing_info VirtualMachineV2#backing_info}
  */
  readonly backingInfo?: VirtualMachineV2DisksBackingInfo[] | cdktf.IResolvable;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#disk_address VirtualMachineV2#disk_address}
  */
  readonly diskAddress?: VirtualMachineV2DisksDiskAddress[] | cdktf.IResolvable;
}

export function virtualMachineV2DisksToTerraform(struct?: VirtualMachineV2Disks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
    backing_info: cdktf.listMapper(virtualMachineV2DisksBackingInfoToTerraform, true)(struct!.backingInfo),
    disk_address: cdktf.listMapper(virtualMachineV2DisksDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function virtualMachineV2DisksToHclTerraform(struct?: VirtualMachineV2Disks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backing_info: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksBackingInfoList",
    },
    disk_address: {
      value: cdktf.listMapperHcl(virtualMachineV2DisksDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2DisksDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2DisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Disks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Disks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
      this._backingInfo.internalValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
      this._backingInfo.internalValue = value.backingInfo;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new VirtualMachineV2DisksBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: VirtualMachineV2DisksBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new VirtualMachineV2DisksDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: VirtualMachineV2DisksDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class VirtualMachineV2DisksList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Disks[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2DisksOutputReference {
    return new VirtualMachineV2DisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GpusLinks {
}

export function virtualMachineV2GpusLinksToTerraform(struct?: VirtualMachineV2GpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualMachineV2GpusLinksToHclTerraform(struct?: VirtualMachineV2GpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualMachineV2GpusLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GpusLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GpusLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class VirtualMachineV2GpusLinksList extends cdktf.ComplexList {

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
  public get(index: number): VirtualMachineV2GpusLinksOutputReference {
    return new VirtualMachineV2GpusLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GpusPciAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#bus VirtualMachineV2#bus}
  */
  readonly bus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#device VirtualMachineV2#device}
  */
  readonly device?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#func VirtualMachineV2#func}
  */
  readonly func?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#segment VirtualMachineV2#segment}
  */
  readonly segment?: number;
}

export function virtualMachineV2GpusPciAddressToTerraform(struct?: VirtualMachineV2GpusPciAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus: cdktf.numberToTerraform(struct!.bus),
    device: cdktf.numberToTerraform(struct!.device),
    func: cdktf.numberToTerraform(struct!.func),
    segment: cdktf.numberToTerraform(struct!.segment),
  }
}


export function virtualMachineV2GpusPciAddressToHclTerraform(struct?: VirtualMachineV2GpusPciAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus: {
      value: cdktf.numberToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device: {
      value: cdktf.numberToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    func: {
      value: cdktf.numberToHclTerraform(struct!.func),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment: {
      value: cdktf.numberToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GpusPciAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GpusPciAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._func !== undefined) {
      hasAnyValues = true;
      internalValueResult.func = this._func;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GpusPciAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bus = undefined;
      this._device = undefined;
      this._func = undefined;
      this._segment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bus = value.bus;
      this._device = value.device;
      this._func = value.func;
      this._segment = value.segment;
    }
  }

  // bus - computed: true, optional: true, required: false
  private _bus?: number; 
  public get bus() {
    return this.getNumberAttribute('bus');
  }
  public set bus(value: number) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // device - computed: true, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // func - computed: true, optional: true, required: false
  private _func?: number; 
  public get func() {
    return this.getNumberAttribute('func');
  }
  public set func(value: number) {
    this._func = value;
  }
  public resetFunc() {
    this._func = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcInput() {
    return this._func;
  }

  // segment - computed: true, optional: true, required: false
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }
}

export class VirtualMachineV2GpusPciAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GpusPciAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GpusPciAddressOutputReference {
    return new VirtualMachineV2GpusPciAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Gpus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#device_id VirtualMachineV2#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#mode VirtualMachineV2#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vendor VirtualMachineV2#vendor}
  */
  readonly vendor?: string;
  /**
  * pci_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#pci_address VirtualMachineV2#pci_address}
  */
  readonly pciAddress?: VirtualMachineV2GpusPciAddress[] | cdktf.IResolvable;
}

export function virtualMachineV2GpusToTerraform(struct?: VirtualMachineV2Gpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    mode: cdktf.stringToTerraform(struct!.mode),
    vendor: cdktf.stringToTerraform(struct!.vendor),
    pci_address: cdktf.listMapper(virtualMachineV2GpusPciAddressToTerraform, true)(struct!.pciAddress),
  }
}


export function virtualMachineV2GpusToHclTerraform(struct?: VirtualMachineV2Gpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pci_address: {
      value: cdktf.listMapperHcl(virtualMachineV2GpusPciAddressToHclTerraform, true)(struct!.pciAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GpusPciAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Gpus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._pciAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciAddress = this._pciAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Gpus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._mode = undefined;
      this._vendor = undefined;
      this._pciAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._mode = value.mode;
      this._vendor = value.vendor;
      this._pciAddress.internalValue = value.pciAddress;
    }
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // fraction - computed: true, optional: false, required: false
  public get fraction() {
    return this.getNumberAttribute('fraction');
  }

  // frame_buffer_size_bytes - computed: true, optional: false, required: false
  public get frameBufferSizeBytes() {
    return this.getNumberAttribute('frame_buffer_size_bytes');
  }

  // guest_driver_version - computed: true, optional: false, required: false
  public get guestDriverVersion() {
    return this.getStringAttribute('guest_driver_version');
  }

  // links - computed: true, optional: false, required: false
  private _links = new VirtualMachineV2GpusLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_virtual_display_heads - computed: true, optional: false, required: false
  public get numVirtualDisplayHeads() {
    return this.getNumberAttribute('num_virtual_display_heads');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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

  // pci_address - computed: false, optional: true, required: false
  private _pciAddress = new VirtualMachineV2GpusPciAddressList(this, "pci_address", false);
  public get pciAddress() {
    return this._pciAddress;
  }
  public putPciAddress(value: VirtualMachineV2GpusPciAddress[] | cdktf.IResolvable) {
    this._pciAddress.internalValue = value;
  }
  public resetPciAddress() {
    this._pciAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciAddressInput() {
    return this._pciAddress.internalValue;
  }
}

export class VirtualMachineV2GpusList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Gpus[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GpusOutputReference {
    return new VirtualMachineV2GpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#map VirtualMachineV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boolean VirtualMachineV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#integer VirtualMachineV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#integer_list VirtualMachineV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#object VirtualMachineV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#string VirtualMachineV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#string_list VirtualMachineV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#map_of_strings VirtualMachineV2#map_of_strings}
  */
  readonly mapOfStrings?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#name VirtualMachineV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#value VirtualMachineV2#value}
  */
  readonly value?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#key_value_pairs VirtualMachineV2#key_value_pairs}
  */
  readonly keyValuePairs?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#value VirtualMachineV2#value}
  */
  readonly value?: string;
}

export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
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

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#custom_key_values VirtualMachineV2#custom_key_values}
  */
  readonly customKeyValues?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#user_data VirtualMachineV2#user_data}
  */
  readonly userData?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    user_data: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform, true)(struct!.userData),
  }
}


export function virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList",
    },
    user_data: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform, true)(struct!.userData),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._userData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._userData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._userData.internalValue = value.userData;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData = new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
  public putUserData(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable) {
    this._userData.internalValue = value;
  }
  public resetUserData() {
    this._userData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#datasource_type VirtualMachineV2#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#metadata VirtualMachineV2#metadata}
  */
  readonly metadata?: string;
  /**
  * cloud_init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#cloud_init_script VirtualMachineV2#cloud_init_script}
  */
  readonly cloudInitScript?: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigCloudInitToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    cloud_init_script: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptToTerraform, true)(struct!.cloudInitScript),
  }
}


export function virtualMachineV2GuestCustomizationConfigCloudInitToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.datasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_init_script: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform, true)(struct!.cloudInitScript),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceType = this._datasourceType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._cloudInitScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInitScript = this._cloudInitScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceType = undefined;
      this._metadata = undefined;
      this._cloudInitScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceType = value.datasourceType;
      this._metadata = value.metadata;
      this._cloudInitScript.internalValue = value.cloudInitScript;
    }
  }

  // datasource_type - computed: false, optional: true, required: false
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  public resetDatasourceType() {
    this._datasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // cloud_init_script - computed: false, optional: true, required: false
  private _cloudInitScript = new VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }
  public putCloudInitScript(value: VirtualMachineV2GuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable) {
    this._cloudInitScript.internalValue = value;
  }
  public resetCloudInitScript() {
    this._cloudInitScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitScriptInput() {
    return this._cloudInitScript.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigCloudInitList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigCloudInit[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigCloudInitOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#map VirtualMachineV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#boolean VirtualMachineV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#integer VirtualMachineV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#integer_list VirtualMachineV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#object VirtualMachineV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#string VirtualMachineV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#string_list VirtualMachineV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#map_of_strings VirtualMachineV2#map_of_strings}
  */
  readonly mapOfStrings?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#name VirtualMachineV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#value VirtualMachineV2#value}
  */
  readonly value?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#key_value_pairs VirtualMachineV2#key_value_pairs}
  */
  readonly keyValuePairs?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#value VirtualMachineV2#value}
  */
  readonly value: string;
}

export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#custom_key_values VirtualMachineV2#custom_key_values}
  */
  readonly customKeyValues?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * unattend_xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#unattend_xml VirtualMachineV2#unattend_xml}
  */
  readonly unattendXml?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    unattend_xml: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform, true)(struct!.unattendXml),
  }
}


export function virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList",
    },
    unattend_xml: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform, true)(struct!.unattendXml),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._unattendXml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unattendXml = this._unattendXml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._unattendXml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._unattendXml.internalValue = value.unattendXml;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // unattend_xml - computed: false, optional: true, required: false
  private _unattendXml = new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
  public putUnattendXml(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable) {
    this._unattendXml.internalValue = value;
  }
  public resetUnattendXml() {
    this._unattendXml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unattendXmlInput() {
    return this._unattendXml.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfigSysprep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#install_type VirtualMachineV2#install_type}
  */
  readonly installType?: string;
  /**
  * sysprep_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#sysprep_script VirtualMachineV2#sysprep_script}
  */
  readonly sysprepScript?: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigSysprepToTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_type: cdktf.stringToTerraform(struct!.installType),
    sysprep_script: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptToTerraform, true)(struct!.sysprepScript),
  }
}


export function virtualMachineV2GuestCustomizationConfigSysprepToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install_type: {
      value: cdktf.stringToHclTerraform(struct!.installType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysprep_script: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigSysprepSysprepScriptToHclTerraform, true)(struct!.sysprepScript),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfigSysprep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installType !== undefined) {
      hasAnyValues = true;
      internalValueResult.installType = this._installType;
    }
    if (this._sysprepScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprepScript = this._sysprepScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfigSysprep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._installType = undefined;
      this._sysprepScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._installType = value.installType;
      this._sysprepScript.internalValue = value.sysprepScript;
    }
  }

  // install_type - computed: true, optional: true, required: false
  private _installType?: string; 
  public get installType() {
    return this.getStringAttribute('install_type');
  }
  public set installType(value: string) {
    this._installType = value;
  }
  public resetInstallType() {
    this._installType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installTypeInput() {
    return this._installType;
  }

  // sysprep_script - computed: false, optional: true, required: false
  private _sysprepScript = new VirtualMachineV2GuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
  public putSysprepScript(value: VirtualMachineV2GuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable) {
    this._sysprepScript.internalValue = value;
  }
  public resetSysprepScript() {
    this._sysprepScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepScriptInput() {
    return this._sysprepScript.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigSysprepList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfigSysprep[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigSysprepOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomizationConfig {
  /**
  * cloud_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#cloud_init VirtualMachineV2#cloud_init}
  */
  readonly cloudInit?: VirtualMachineV2GuestCustomizationConfigCloudInit[] | cdktf.IResolvable;
  /**
  * sysprep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#sysprep VirtualMachineV2#sysprep}
  */
  readonly sysprep?: VirtualMachineV2GuestCustomizationConfigSysprep[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationConfigToTerraform(struct?: VirtualMachineV2GuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_init: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigCloudInitToTerraform, true)(struct!.cloudInit),
    sysprep: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigSysprepToTerraform, true)(struct!.sysprep),
  }
}


export function virtualMachineV2GuestCustomizationConfigToHclTerraform(struct?: VirtualMachineV2GuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_init: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigCloudInitToHclTerraform, true)(struct!.cloudInit),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigCloudInitList",
    },
    sysprep: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigSysprepToHclTerraform, true)(struct!.sysprep),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigSysprepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomizationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInit = this._cloudInit?.internalValue;
    }
    if (this._sysprep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprep = this._sysprep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomizationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = undefined;
      this._sysprep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = value.cloudInit;
      this._sysprep.internalValue = value.sysprep;
    }
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit = new VirtualMachineV2GuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: VirtualMachineV2GuestCustomizationConfigCloudInit[] | cdktf.IResolvable) {
    this._cloudInit.internalValue = value;
  }
  public resetCloudInit() {
    this._cloudInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit.internalValue;
  }

  // sysprep - computed: false, optional: true, required: false
  private _sysprep = new VirtualMachineV2GuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
  public putSysprep(value: VirtualMachineV2GuestCustomizationConfigSysprep[] | cdktf.IResolvable) {
    this._sysprep.internalValue = value;
  }
  public resetSysprep() {
    this._sysprep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepInput() {
    return this._sysprep.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomizationConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationConfigOutputReference {
    return new VirtualMachineV2GuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestCustomization {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#config VirtualMachineV2#config}
  */
  readonly config?: VirtualMachineV2GuestCustomizationConfig[] | cdktf.IResolvable;
}

export function virtualMachineV2GuestCustomizationToTerraform(struct?: VirtualMachineV2GuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(virtualMachineV2GuestCustomizationConfigToTerraform, true)(struct!.config),
  }
}


export function virtualMachineV2GuestCustomizationToHclTerraform(struct?: VirtualMachineV2GuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2GuestCustomizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new VirtualMachineV2GuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: VirtualMachineV2GuestCustomizationConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class VirtualMachineV2GuestCustomizationList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestCustomization[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestCustomizationOutputReference {
    return new VirtualMachineV2GuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2GuestTools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#capabilities VirtualMachineV2#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_enabled VirtualMachineV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function virtualMachineV2GuestToolsToTerraform(struct?: VirtualMachineV2GuestTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function virtualMachineV2GuestToolsToHclTerraform(struct?: VirtualMachineV2GuestTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2GuestToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2GuestTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2GuestTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._isEnabled = value.isEnabled;
    }
  }

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // capabilities - computed: true, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // guest_os_version - computed: true, optional: false, required: false
  public get guestOsVersion() {
    return this.getStringAttribute('guest_os_version');
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // is_iso_inserted - computed: true, optional: false, required: false
  public get isIsoInserted() {
    return this.getBooleanAttribute('is_iso_inserted');
  }

  // is_reachable - computed: true, optional: false, required: false
  public get isReachable() {
    return this.getBooleanAttribute('is_reachable');
  }

  // is_vm_mobility_drivers_installed - computed: true, optional: false, required: false
  public get isVmMobilityDriversInstalled() {
    return this.getBooleanAttribute('is_vm_mobility_drivers_installed');
  }

  // is_vss_snapshot_capable - computed: true, optional: false, required: false
  public get isVssSnapshotCapable() {
    return this.getBooleanAttribute('is_vss_snapshot_capable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VirtualMachineV2GuestToolsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2GuestTools[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2GuestToolsOutputReference {
    return new VirtualMachineV2GuestToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Host {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2HostToTerraform(struct?: VirtualMachineV2Host | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2HostToHclTerraform(struct?: VirtualMachineV2Host | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2HostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Host | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Host | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2HostList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Host[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2HostOutputReference {
    return new VirtualMachineV2HostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsBackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_connected VirtualMachineV2#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#mac_address VirtualMachineV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#model VirtualMachineV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#num_queues VirtualMachineV2#num_queues}
  */
  readonly numQueues?: number;
}

export function virtualMachineV2NicsBackingInfoToTerraform(struct?: VirtualMachineV2NicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_connected: cdktf.booleanToTerraform(struct!.isConnected),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    num_queues: cdktf.numberToTerraform(struct!.numQueues),
  }
}


export function virtualMachineV2NicsBackingInfoToHclTerraform(struct?: VirtualMachineV2NicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_connected: {
      value: cdktf.booleanToHclTerraform(struct!.isConnected),
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
    num_queues: {
      value: cdktf.numberToHclTerraform(struct!.numQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2NicsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnected = this._isConnected;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._numQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueues = this._numQueues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isConnected = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._numQueues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isConnected = value.isConnected;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._numQueues = value.numQueues;
    }
  }

  // is_connected - computed: true, optional: true, required: false
  private _isConnected?: boolean | cdktf.IResolvable; 
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }
  public set isConnected(value: boolean | cdktf.IResolvable) {
    this._isConnected = value;
  }
  public resetIsConnected() {
    this._isConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectedInput() {
    return this._isConnected;
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

  // num_queues - computed: false, optional: true, required: false
  private _numQueues?: number; 
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }
  public set numQueues(value: number) {
    this._numQueues = value;
  }
  public resetNumQueues() {
    this._numQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueuesInput() {
    return this._numQueues;
  }
}

export class VirtualMachineV2NicsBackingInfoList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsBackingInfoOutputReference {
    return new VirtualMachineV2NicsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#prefix_length VirtualMachineV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#value VirtualMachineV2#value}
  */
  readonly value?: string;
}

export function virtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressToTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function virtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: true, optional: true, required: false
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

export class VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressOutputReference {
    return new VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#prefix_length VirtualMachineV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#value VirtualMachineV2#value}
  */
  readonly value?: string;
}

export function virtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function virtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: true, optional: true, required: false
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

export class VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference {
    return new VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfoIpv4Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#should_assign_ip VirtualMachineV2#should_assign_ip}
  */
  readonly shouldAssignIp?: boolean | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ip_address VirtualMachineV2#ip_address}
  */
  readonly ipAddress?: VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable;
  /**
  * secondary_ip_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#secondary_ip_address_list VirtualMachineV2#secondary_ip_address_list}
  */
  readonly secondaryIpAddressList?: VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable;
}

export function virtualMachineV2NicsNetworkInfoIpv4ConfigToTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_assign_ip: cdktf.booleanToTerraform(struct!.shouldAssignIp),
    ip_address: cdktf.listMapper(virtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressToTerraform, true)(struct!.ipAddress),
    secondary_ip_address_list: cdktf.listMapper(virtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform, true)(struct!.secondaryIpAddressList),
  }
}


export function virtualMachineV2NicsNetworkInfoIpv4ConfigToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_assign_ip: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAssignIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressList",
    },
    secondary_ip_address_list: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform, true)(struct!.secondaryIpAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2NicsNetworkInfoIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldAssignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAssignIp = this._shouldAssignIp;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    if (this._secondaryIpAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpAddressList = this._secondaryIpAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldAssignIp = undefined;
      this._ipAddress.internalValue = undefined;
      this._secondaryIpAddressList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldAssignIp = value.shouldAssignIp;
      this._ipAddress.internalValue = value.ipAddress;
      this._secondaryIpAddressList.internalValue = value.secondaryIpAddressList;
    }
  }

  // should_assign_ip - computed: true, optional: true, required: false
  private _shouldAssignIp?: boolean | cdktf.IResolvable; 
  public get shouldAssignIp() {
    return this.getBooleanAttribute('should_assign_ip');
  }
  public set shouldAssignIp(value: boolean | cdktf.IResolvable) {
    this._shouldAssignIp = value;
  }
  public resetShouldAssignIp() {
    this._shouldAssignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAssignIpInput() {
    return this._shouldAssignIp;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: VirtualMachineV2NicsNetworkInfoIpv4ConfigIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }

  // secondary_ip_address_list - computed: false, optional: true, required: false
  private _secondaryIpAddressList = new VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList(this, "secondary_ip_address_list", false);
  public get secondaryIpAddressList() {
    return this._secondaryIpAddressList;
  }
  public putSecondaryIpAddressList(value: VirtualMachineV2NicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct[] | cdktf.IResolvable) {
    this._secondaryIpAddressList.internalValue = value;
  }
  public resetSecondaryIpAddressList() {
    this._secondaryIpAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpAddressListInput() {
    return this._secondaryIpAddressList.internalValue;
  }
}

export class VirtualMachineV2NicsNetworkInfoIpv4ConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfoIpv4Config[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoIpv4ConfigOutputReference {
    return new VirtualMachineV2NicsNetworkInfoIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#prefix_length VirtualMachineV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#value VirtualMachineV2#value}
  */
  readonly value: string;
}

export function virtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function virtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

export class VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference {
    return new VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfoIpv4Info {
  /**
  * learned_ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#learned_ip_addresses VirtualMachineV2#learned_ip_addresses}
  */
  readonly learnedIpAddresses?: VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable;
}

export function virtualMachineV2NicsNetworkInfoIpv4InfoToTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    learned_ip_addresses: cdktf.listMapper(virtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform, true)(struct!.learnedIpAddresses),
  }
}


export function virtualMachineV2NicsNetworkInfoIpv4InfoToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    learned_ip_addresses: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform, true)(struct!.learnedIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2NicsNetworkInfoIpv4InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._learnedIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnedIpAddresses = this._learnedIpAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = value.learnedIpAddresses;
    }
  }

  // learned_ip_addresses - computed: false, optional: true, required: false
  private _learnedIpAddresses = new VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddressesList(this, "learned_ip_addresses", false);
  public get learnedIpAddresses() {
    return this._learnedIpAddresses;
  }
  public putLearnedIpAddresses(value: VirtualMachineV2NicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable) {
    this._learnedIpAddresses.internalValue = value;
  }
  public resetLearnedIpAddresses() {
    this._learnedIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnedIpAddressesInput() {
    return this._learnedIpAddresses.internalValue;
  }
}

export class VirtualMachineV2NicsNetworkInfoIpv4InfoList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfoIpv4Info[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoIpv4InfoOutputReference {
    return new VirtualMachineV2NicsNetworkInfoIpv4InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfoNetworkFunctionChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2NicsNetworkInfoNetworkFunctionChainToTerraform(struct?: VirtualMachineV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2NicsNetworkInfoNetworkFunctionChainToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2NicsNetworkInfoNetworkFunctionChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2NicsNetworkInfoNetworkFunctionChainList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoNetworkFunctionChainOutputReference {
    return new VirtualMachineV2NicsNetworkInfoNetworkFunctionChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfoSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2NicsNetworkInfoSubnetToTerraform(struct?: VirtualMachineV2NicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2NicsNetworkInfoSubnetToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2NicsNetworkInfoSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfoSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfoSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2NicsNetworkInfoSubnetList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfoSubnet[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoSubnetOutputReference {
    return new VirtualMachineV2NicsNetworkInfoSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2NicsNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#network_function_nic_type VirtualMachineV2#network_function_nic_type}
  */
  readonly networkFunctionNicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#nic_type VirtualMachineV2#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#should_allow_unknown_macs VirtualMachineV2#should_allow_unknown_macs}
  */
  readonly shouldAllowUnknownMacs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#trunked_vlans VirtualMachineV2#trunked_vlans}
  */
  readonly trunkedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#vlan_mode VirtualMachineV2#vlan_mode}
  */
  readonly vlanMode?: string;
  /**
  * ipv4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ipv4_config VirtualMachineV2#ipv4_config}
  */
  readonly ipv4Config?: VirtualMachineV2NicsNetworkInfoIpv4Config[] | cdktf.IResolvable;
  /**
  * ipv4_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ipv4_info VirtualMachineV2#ipv4_info}
  */
  readonly ipv4Info?: VirtualMachineV2NicsNetworkInfoIpv4Info[] | cdktf.IResolvable;
  /**
  * network_function_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#network_function_chain VirtualMachineV2#network_function_chain}
  */
  readonly networkFunctionChain?: VirtualMachineV2NicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#subnet VirtualMachineV2#subnet}
  */
  readonly subnet?: VirtualMachineV2NicsNetworkInfoSubnet[] | cdktf.IResolvable;
}

export function virtualMachineV2NicsNetworkInfoToTerraform(struct?: VirtualMachineV2NicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_function_nic_type: cdktf.stringToTerraform(struct!.networkFunctionNicType),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    should_allow_unknown_macs: cdktf.booleanToTerraform(struct!.shouldAllowUnknownMacs),
    trunked_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.trunkedVlans),
    vlan_mode: cdktf.stringToTerraform(struct!.vlanMode),
    ipv4_config: cdktf.listMapper(virtualMachineV2NicsNetworkInfoIpv4ConfigToTerraform, true)(struct!.ipv4Config),
    ipv4_info: cdktf.listMapper(virtualMachineV2NicsNetworkInfoIpv4InfoToTerraform, true)(struct!.ipv4Info),
    network_function_chain: cdktf.listMapper(virtualMachineV2NicsNetworkInfoNetworkFunctionChainToTerraform, true)(struct!.networkFunctionChain),
    subnet: cdktf.listMapper(virtualMachineV2NicsNetworkInfoSubnetToTerraform, true)(struct!.subnet),
  }
}


export function virtualMachineV2NicsNetworkInfoToHclTerraform(struct?: VirtualMachineV2NicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_function_nic_type: {
      value: cdktf.stringToHclTerraform(struct!.networkFunctionNicType),
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
    should_allow_unknown_macs: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllowUnknownMacs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trunked_vlans: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.trunkedVlans),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    vlan_mode: {
      value: cdktf.stringToHclTerraform(struct!.vlanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_config: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoIpv4ConfigToHclTerraform, true)(struct!.ipv4Config),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoIpv4ConfigList",
    },
    ipv4_info: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoIpv4InfoToHclTerraform, true)(struct!.ipv4Info),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoIpv4InfoList",
    },
    network_function_chain: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoNetworkFunctionChainToHclTerraform, true)(struct!.networkFunctionChain),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoNetworkFunctionChainList",
    },
    subnet: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2NicsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2NicsNetworkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFunctionNicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionNicType = this._networkFunctionNicType;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._shouldAllowUnknownMacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllowUnknownMacs = this._shouldAllowUnknownMacs;
    }
    if (this._trunkedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkedVlans = this._trunkedVlans;
    }
    if (this._vlanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMode = this._vlanMode;
    }
    if (this._ipv4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Config = this._ipv4Config?.internalValue;
    }
    if (this._ipv4Info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Info = this._ipv4Info?.internalValue;
    }
    if (this._networkFunctionChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChain = this._networkFunctionChain?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2NicsNetworkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = undefined;
      this._nicType = undefined;
      this._shouldAllowUnknownMacs = undefined;
      this._trunkedVlans = undefined;
      this._vlanMode = undefined;
      this._ipv4Config.internalValue = undefined;
      this._ipv4Info.internalValue = undefined;
      this._networkFunctionChain.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = value.networkFunctionNicType;
      this._nicType = value.nicType;
      this._shouldAllowUnknownMacs = value.shouldAllowUnknownMacs;
      this._trunkedVlans = value.trunkedVlans;
      this._vlanMode = value.vlanMode;
      this._ipv4Config.internalValue = value.ipv4Config;
      this._ipv4Info.internalValue = value.ipv4Info;
      this._networkFunctionChain.internalValue = value.networkFunctionChain;
      this._subnet.internalValue = value.subnet;
    }
  }

  // network_function_nic_type - computed: true, optional: true, required: false
  private _networkFunctionNicType?: string; 
  public get networkFunctionNicType() {
    return this.getStringAttribute('network_function_nic_type');
  }
  public set networkFunctionNicType(value: string) {
    this._networkFunctionNicType = value;
  }
  public resetNetworkFunctionNicType() {
    this._networkFunctionNicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionNicTypeInput() {
    return this._networkFunctionNicType;
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

  // should_allow_unknown_macs - computed: true, optional: true, required: false
  private _shouldAllowUnknownMacs?: boolean | cdktf.IResolvable; 
  public get shouldAllowUnknownMacs() {
    return this.getBooleanAttribute('should_allow_unknown_macs');
  }
  public set shouldAllowUnknownMacs(value: boolean | cdktf.IResolvable) {
    this._shouldAllowUnknownMacs = value;
  }
  public resetShouldAllowUnknownMacs() {
    this._shouldAllowUnknownMacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllowUnknownMacsInput() {
    return this._shouldAllowUnknownMacs;
  }

  // trunked_vlans - computed: true, optional: true, required: false
  private _trunkedVlans?: number[]; 
  public get trunkedVlans() {
    return this.getNumberListAttribute('trunked_vlans');
  }
  public set trunkedVlans(value: number[]) {
    this._trunkedVlans = value;
  }
  public resetTrunkedVlans() {
    this._trunkedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkedVlansInput() {
    return this._trunkedVlans;
  }

  // vlan_mode - computed: true, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // ipv4_config - computed: false, optional: true, required: false
  private _ipv4Config = new VirtualMachineV2NicsNetworkInfoIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }
  public putIpv4Config(value: VirtualMachineV2NicsNetworkInfoIpv4Config[] | cdktf.IResolvable) {
    this._ipv4Config.internalValue = value;
  }
  public resetIpv4Config() {
    this._ipv4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigInput() {
    return this._ipv4Config.internalValue;
  }

  // ipv4_info - computed: false, optional: true, required: false
  private _ipv4Info = new VirtualMachineV2NicsNetworkInfoIpv4InfoList(this, "ipv4_info", false);
  public get ipv4Info() {
    return this._ipv4Info;
  }
  public putIpv4Info(value: VirtualMachineV2NicsNetworkInfoIpv4Info[] | cdktf.IResolvable) {
    this._ipv4Info.internalValue = value;
  }
  public resetIpv4Info() {
    this._ipv4Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InfoInput() {
    return this._ipv4Info.internalValue;
  }

  // network_function_chain - computed: false, optional: true, required: false
  private _networkFunctionChain = new VirtualMachineV2NicsNetworkInfoNetworkFunctionChainList(this, "network_function_chain", false);
  public get networkFunctionChain() {
    return this._networkFunctionChain;
  }
  public putNetworkFunctionChain(value: VirtualMachineV2NicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable) {
    this._networkFunctionChain.internalValue = value;
  }
  public resetNetworkFunctionChain() {
    this._networkFunctionChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainInput() {
    return this._networkFunctionChain.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new VirtualMachineV2NicsNetworkInfoSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: VirtualMachineV2NicsNetworkInfoSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class VirtualMachineV2NicsNetworkInfoList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2NicsNetworkInfo[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsNetworkInfoOutputReference {
    return new VirtualMachineV2NicsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Nics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#backing_info VirtualMachineV2#backing_info}
  */
  readonly backingInfo?: VirtualMachineV2NicsBackingInfo[] | cdktf.IResolvable;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#network_info VirtualMachineV2#network_info}
  */
  readonly networkInfo?: VirtualMachineV2NicsNetworkInfo[] | cdktf.IResolvable;
}

export function virtualMachineV2NicsToTerraform(struct?: VirtualMachineV2Nics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
    backing_info: cdktf.listMapper(virtualMachineV2NicsBackingInfoToTerraform, true)(struct!.backingInfo),
    network_info: cdktf.listMapper(virtualMachineV2NicsNetworkInfoToTerraform, true)(struct!.networkInfo),
  }
}


export function virtualMachineV2NicsToHclTerraform(struct?: VirtualMachineV2Nics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backing_info: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsBackingInfoList",
    },
    network_info: {
      value: cdktf.listMapperHcl(virtualMachineV2NicsNetworkInfoToHclTerraform, true)(struct!.networkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2NicsNetworkInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2NicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Nics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._networkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Nics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
      this._backingInfo.internalValue = undefined;
      this._networkInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
      this._backingInfo.internalValue = value.backingInfo;
      this._networkInfo.internalValue = value.networkInfo;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new VirtualMachineV2NicsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: VirtualMachineV2NicsBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // network_info - computed: false, optional: true, required: false
  private _networkInfo = new VirtualMachineV2NicsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: VirtualMachineV2NicsNetworkInfo[] | cdktf.IResolvable) {
    this._networkInfo.internalValue = value;
  }
  public resetNetworkInfo() {
    this._networkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }
}

export class VirtualMachineV2NicsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Nics[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2NicsOutputReference {
    return new VirtualMachineV2NicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2OwnershipInfoOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2OwnershipInfoOwnerToTerraform(struct?: VirtualMachineV2OwnershipInfoOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2OwnershipInfoOwnerToHclTerraform(struct?: VirtualMachineV2OwnershipInfoOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2OwnershipInfoOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2OwnershipInfoOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2OwnershipInfoOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2OwnershipInfoOwnerList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2OwnershipInfoOwner[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2OwnershipInfoOwnerOutputReference {
    return new VirtualMachineV2OwnershipInfoOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2OwnershipInfo {
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#owner VirtualMachineV2#owner}
  */
  readonly owner?: VirtualMachineV2OwnershipInfoOwner[] | cdktf.IResolvable;
}

export function virtualMachineV2OwnershipInfoToTerraform(struct?: VirtualMachineV2OwnershipInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.listMapper(virtualMachineV2OwnershipInfoOwnerToTerraform, true)(struct!.owner),
  }
}


export function virtualMachineV2OwnershipInfoToHclTerraform(struct?: VirtualMachineV2OwnershipInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: cdktf.listMapperHcl(virtualMachineV2OwnershipInfoOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2OwnershipInfoOwnerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2OwnershipInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2OwnershipInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2OwnershipInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner.internalValue = value.owner;
    }
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new VirtualMachineV2OwnershipInfoOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: VirtualMachineV2OwnershipInfoOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }
}

export class VirtualMachineV2OwnershipInfoList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2OwnershipInfo[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2OwnershipInfoOutputReference {
    return new VirtualMachineV2OwnershipInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Project {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2ProjectToTerraform(struct?: VirtualMachineV2Project | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2ProjectToHclTerraform(struct?: VirtualMachineV2Project | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2ProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Project | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Project | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2ProjectList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Project[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2ProjectOutputReference {
    return new VirtualMachineV2ProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2ProtectionPolicyStatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#ext_id VirtualMachineV2#ext_id}
  */
  readonly extId?: string;
}

export function virtualMachineV2ProtectionPolicyStatePolicyToTerraform(struct?: VirtualMachineV2ProtectionPolicyStatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function virtualMachineV2ProtectionPolicyStatePolicyToHclTerraform(struct?: VirtualMachineV2ProtectionPolicyStatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2ProtectionPolicyStatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2ProtectionPolicyStatePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2ProtectionPolicyStatePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class VirtualMachineV2ProtectionPolicyStatePolicyList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2ProtectionPolicyStatePolicy[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2ProtectionPolicyStatePolicyOutputReference {
    return new VirtualMachineV2ProtectionPolicyStatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2ProtectionPolicyState {
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#policy VirtualMachineV2#policy}
  */
  readonly policy?: VirtualMachineV2ProtectionPolicyStatePolicy[] | cdktf.IResolvable;
}

export function virtualMachineV2ProtectionPolicyStateToTerraform(struct?: VirtualMachineV2ProtectionPolicyState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.listMapper(virtualMachineV2ProtectionPolicyStatePolicyToTerraform, true)(struct!.policy),
  }
}


export function virtualMachineV2ProtectionPolicyStateToHclTerraform(struct?: VirtualMachineV2ProtectionPolicyState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.listMapperHcl(virtualMachineV2ProtectionPolicyStatePolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2ProtectionPolicyStatePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2ProtectionPolicyStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2ProtectionPolicyState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2ProtectionPolicyState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy.internalValue = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new VirtualMachineV2ProtectionPolicyStatePolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: VirtualMachineV2ProtectionPolicyStatePolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class VirtualMachineV2ProtectionPolicyStateList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2ProtectionPolicyState[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2ProtectionPolicyStateOutputReference {
    return new VirtualMachineV2ProtectionPolicyStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2SerialPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#index VirtualMachineV2#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_connected VirtualMachineV2#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
}

export function virtualMachineV2SerialPortsToTerraform(struct?: VirtualMachineV2SerialPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    is_connected: cdktf.booleanToTerraform(struct!.isConnected),
  }
}


export function virtualMachineV2SerialPortsToHclTerraform(struct?: VirtualMachineV2SerialPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connected: {
      value: cdktf.booleanToHclTerraform(struct!.isConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2SerialPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2SerialPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnected = this._isConnected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2SerialPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._isConnected = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._isConnected = value.isConnected;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_connected - computed: true, optional: true, required: false
  private _isConnected?: boolean | cdktf.IResolvable; 
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }
  public set isConnected(value: boolean | cdktf.IResolvable) {
    this._isConnected = value;
  }
  public resetIsConnected() {
    this._isConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectedInput() {
    return this._isConnected;
  }
}

export class VirtualMachineV2SerialPortsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2SerialPorts[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2SerialPortsOutputReference {
    return new VirtualMachineV2SerialPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2Source {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#entity_type VirtualMachineV2#entity_type}
  */
  readonly entityType?: string;
}

export function virtualMachineV2SourceToTerraform(struct?: VirtualMachineV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
  }
}


export function virtualMachineV2SourceToHclTerraform(struct?: VirtualMachineV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2SourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2Source | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2Source | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
    }
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class VirtualMachineV2SourceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2Source[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2SourceOutputReference {
    return new VirtualMachineV2SourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2StorageConfigQosConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#throttled_iops VirtualMachineV2#throttled_iops}
  */
  readonly throttledIops?: number;
}

export function virtualMachineV2StorageConfigQosConfigToTerraform(struct?: VirtualMachineV2StorageConfigQosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    throttled_iops: cdktf.numberToTerraform(struct!.throttledIops),
  }
}


export function virtualMachineV2StorageConfigQosConfigToHclTerraform(struct?: VirtualMachineV2StorageConfigQosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    throttled_iops: {
      value: cdktf.numberToHclTerraform(struct!.throttledIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2StorageConfigQosConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2StorageConfigQosConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._throttledIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttledIops = this._throttledIops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2StorageConfigQosConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._throttledIops = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._throttledIops = value.throttledIops;
    }
  }

  // throttled_iops - computed: true, optional: true, required: false
  private _throttledIops?: number; 
  public get throttledIops() {
    return this.getNumberAttribute('throttled_iops');
  }
  public set throttledIops(value: number) {
    this._throttledIops = value;
  }
  public resetThrottledIops() {
    this._throttledIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttledIopsInput() {
    return this._throttledIops;
  }
}

export class VirtualMachineV2StorageConfigQosConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2StorageConfigQosConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2StorageConfigQosConfigOutputReference {
    return new VirtualMachineV2StorageConfigQosConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2StorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_flash_mode_enabled VirtualMachineV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * qos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#qos_config VirtualMachineV2#qos_config}
  */
  readonly qosConfig?: VirtualMachineV2StorageConfigQosConfig[] | cdktf.IResolvable;
}

export function virtualMachineV2StorageConfigToTerraform(struct?: VirtualMachineV2StorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
    qos_config: cdktf.listMapper(virtualMachineV2StorageConfigQosConfigToTerraform, true)(struct!.qosConfig),
  }
}


export function virtualMachineV2StorageConfigToHclTerraform(struct?: VirtualMachineV2StorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_flash_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFlashModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_config: {
      value: cdktf.listMapperHcl(virtualMachineV2StorageConfigQosConfigToHclTerraform, true)(struct!.qosConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineV2StorageConfigQosConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2StorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2StorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    if (this._qosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosConfig = this._qosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2StorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
      this._qosConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
      this._qosConfig.internalValue = value.qosConfig;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: true, required: false
  private _isFlashModeEnabled?: boolean | cdktf.IResolvable; 
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
  public set isFlashModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isFlashModeEnabled = value;
  }
  public resetIsFlashModeEnabled() {
    this._isFlashModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlashModeEnabledInput() {
    return this._isFlashModeEnabled;
  }

  // qos_config - computed: false, optional: true, required: false
  private _qosConfig = new VirtualMachineV2StorageConfigQosConfigList(this, "qos_config", false);
  public get qosConfig() {
    return this._qosConfig;
  }
  public putQosConfig(value: VirtualMachineV2StorageConfigQosConfig[] | cdktf.IResolvable) {
    this._qosConfig.internalValue = value;
  }
  public resetQosConfig() {
    this._qosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosConfigInput() {
    return this._qosConfig.internalValue;
  }
}

export class VirtualMachineV2StorageConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2StorageConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2StorageConfigOutputReference {
    return new VirtualMachineV2StorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineV2VtpmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#is_vtpm_enabled VirtualMachineV2#is_vtpm_enabled}
  */
  readonly isVtpmEnabled?: boolean | cdktf.IResolvable;
}

export function virtualMachineV2VtpmConfigToTerraform(struct?: VirtualMachineV2VtpmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_vtpm_enabled: cdktf.booleanToTerraform(struct!.isVtpmEnabled),
  }
}


export function virtualMachineV2VtpmConfigToHclTerraform(struct?: VirtualMachineV2VtpmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_vtpm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isVtpmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineV2VtpmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineV2VtpmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isVtpmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVtpmEnabled = this._isVtpmEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineV2VtpmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isVtpmEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isVtpmEnabled = value.isVtpmEnabled;
    }
  }

  // is_vtpm_enabled - computed: true, optional: true, required: false
  private _isVtpmEnabled?: boolean | cdktf.IResolvable; 
  public get isVtpmEnabled() {
    return this.getBooleanAttribute('is_vtpm_enabled');
  }
  public set isVtpmEnabled(value: boolean | cdktf.IResolvable) {
    this._isVtpmEnabled = value;
  }
  public resetIsVtpmEnabled() {
    this._isVtpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVtpmEnabledInput() {
    return this._isVtpmEnabled;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VirtualMachineV2VtpmConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineV2VtpmConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineV2VtpmConfigOutputReference {
    return new VirtualMachineV2VtpmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2 nutanix_virtual_machine_v2}
*/
export class VirtualMachineV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_virtual_machine_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachineV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachineV2 to import
  * @param importFromId The id of the existing VirtualMachineV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachineV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_virtual_machine_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine_v2 nutanix_virtual_machine_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_virtual_machine_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._biosUuid = config.biosUuid;
    this._description = config.description;
    this._enabledCpuFeatures = config.enabledCpuFeatures;
    this._generationUuid = config.generationUuid;
    this._hardwareClockTimezone = config.hardwareClockTimezone;
    this._id = config.id;
    this._isAgentVm = config.isAgentVm;
    this._isBrandingEnabled = config.isBrandingEnabled;
    this._isCpuHotplugEnabled = config.isCpuHotplugEnabled;
    this._isCpuPassthroughEnabled = config.isCpuPassthroughEnabled;
    this._isGpuConsoleEnabled = config.isGpuConsoleEnabled;
    this._isMemoryOvercommitEnabled = config.isMemoryOvercommitEnabled;
    this._isScsiControllerEnabled = config.isScsiControllerEnabled;
    this._isVcpuHardPinningEnabled = config.isVcpuHardPinningEnabled;
    this._isVgaConsoleEnabled = config.isVgaConsoleEnabled;
    this._machineType = config.machineType;
    this._memorySizeBytes = config.memorySizeBytes;
    this._name = config.name;
    this._numCoresPerSocket = config.numCoresPerSocket;
    this._numNumaNodes = config.numNumaNodes;
    this._numSockets = config.numSockets;
    this._numThreadsPerCore = config.numThreadsPerCore;
    this._powerState = config.powerState;
    this._protectionType = config.protectionType;
    this._apcConfig.internalValue = config.apcConfig;
    this._availabilityZone.internalValue = config.availabilityZone;
    this._bootConfig.internalValue = config.bootConfig;
    this._categories.internalValue = config.categories;
    this._cdRoms.internalValue = config.cdRoms;
    this._cluster.internalValue = config.cluster;
    this._disks.internalValue = config.disks;
    this._gpus.internalValue = config.gpus;
    this._guestCustomization.internalValue = config.guestCustomization;
    this._guestTools.internalValue = config.guestTools;
    this._host.internalValue = config.host;
    this._nics.internalValue = config.nics;
    this._ownershipInfo.internalValue = config.ownershipInfo;
    this._project.internalValue = config.project;
    this._protectionPolicyState.internalValue = config.protectionPolicyState;
    this._serialPorts.internalValue = config.serialPorts;
    this._source.internalValue = config.source;
    this._storageConfig.internalValue = config.storageConfig;
    this._vtpmConfig.internalValue = config.vtpmConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bios_uuid - computed: true, optional: true, required: false
  private _biosUuid?: string; 
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }
  public set biosUuid(value: string) {
    this._biosUuid = value;
  }
  public resetBiosUuid() {
    this._biosUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosUuidInput() {
    return this._biosUuid;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // enabled_cpu_features - computed: true, optional: true, required: false
  private _enabledCpuFeatures?: string[]; 
  public get enabledCpuFeatures() {
    return this.getListAttribute('enabled_cpu_features');
  }
  public set enabledCpuFeatures(value: string[]) {
    this._enabledCpuFeatures = value;
  }
  public resetEnabledCpuFeatures() {
    this._enabledCpuFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledCpuFeaturesInput() {
    return this._enabledCpuFeatures;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // generation_uuid - computed: true, optional: true, required: false
  private _generationUuid?: string; 
  public get generationUuid() {
    return this.getStringAttribute('generation_uuid');
  }
  public set generationUuid(value: string) {
    this._generationUuid = value;
  }
  public resetGenerationUuid() {
    this._generationUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationUuidInput() {
    return this._generationUuid;
  }

  // hardware_clock_timezone - computed: true, optional: true, required: false
  private _hardwareClockTimezone?: string; 
  public get hardwareClockTimezone() {
    return this.getStringAttribute('hardware_clock_timezone');
  }
  public set hardwareClockTimezone(value: string) {
    this._hardwareClockTimezone = value;
  }
  public resetHardwareClockTimezone() {
    this._hardwareClockTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareClockTimezoneInput() {
    return this._hardwareClockTimezone;
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

  // is_agent_vm - computed: true, optional: true, required: false
  private _isAgentVm?: boolean | cdktf.IResolvable; 
  public get isAgentVm() {
    return this.getBooleanAttribute('is_agent_vm');
  }
  public set isAgentVm(value: boolean | cdktf.IResolvable) {
    this._isAgentVm = value;
  }
  public resetIsAgentVm() {
    this._isAgentVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAgentVmInput() {
    return this._isAgentVm;
  }

  // is_branding_enabled - computed: true, optional: true, required: false
  private _isBrandingEnabled?: boolean | cdktf.IResolvable; 
  public get isBrandingEnabled() {
    return this.getBooleanAttribute('is_branding_enabled');
  }
  public set isBrandingEnabled(value: boolean | cdktf.IResolvable) {
    this._isBrandingEnabled = value;
  }
  public resetIsBrandingEnabled() {
    this._isBrandingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBrandingEnabledInput() {
    return this._isBrandingEnabled;
  }

  // is_cpu_hotplug_enabled - computed: true, optional: true, required: false
  private _isCpuHotplugEnabled?: boolean | cdktf.IResolvable; 
  public get isCpuHotplugEnabled() {
    return this.getBooleanAttribute('is_cpu_hotplug_enabled');
  }
  public set isCpuHotplugEnabled(value: boolean | cdktf.IResolvable) {
    this._isCpuHotplugEnabled = value;
  }
  public resetIsCpuHotplugEnabled() {
    this._isCpuHotplugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCpuHotplugEnabledInput() {
    return this._isCpuHotplugEnabled;
  }

  // is_cpu_passthrough_enabled - computed: true, optional: true, required: false
  private _isCpuPassthroughEnabled?: boolean | cdktf.IResolvable; 
  public get isCpuPassthroughEnabled() {
    return this.getBooleanAttribute('is_cpu_passthrough_enabled');
  }
  public set isCpuPassthroughEnabled(value: boolean | cdktf.IResolvable) {
    this._isCpuPassthroughEnabled = value;
  }
  public resetIsCpuPassthroughEnabled() {
    this._isCpuPassthroughEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCpuPassthroughEnabledInput() {
    return this._isCpuPassthroughEnabled;
  }

  // is_gpu_console_enabled - computed: true, optional: true, required: false
  private _isGpuConsoleEnabled?: boolean | cdktf.IResolvable; 
  public get isGpuConsoleEnabled() {
    return this.getBooleanAttribute('is_gpu_console_enabled');
  }
  public set isGpuConsoleEnabled(value: boolean | cdktf.IResolvable) {
    this._isGpuConsoleEnabled = value;
  }
  public resetIsGpuConsoleEnabled() {
    this._isGpuConsoleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGpuConsoleEnabledInput() {
    return this._isGpuConsoleEnabled;
  }

  // is_memory_overcommit_enabled - computed: true, optional: true, required: false
  private _isMemoryOvercommitEnabled?: boolean | cdktf.IResolvable; 
  public get isMemoryOvercommitEnabled() {
    return this.getBooleanAttribute('is_memory_overcommit_enabled');
  }
  public set isMemoryOvercommitEnabled(value: boolean | cdktf.IResolvable) {
    this._isMemoryOvercommitEnabled = value;
  }
  public resetIsMemoryOvercommitEnabled() {
    this._isMemoryOvercommitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryOvercommitEnabledInput() {
    return this._isMemoryOvercommitEnabled;
  }

  // is_scsi_controller_enabled - computed: true, optional: true, required: false
  private _isScsiControllerEnabled?: boolean | cdktf.IResolvable; 
  public get isScsiControllerEnabled() {
    return this.getBooleanAttribute('is_scsi_controller_enabled');
  }
  public set isScsiControllerEnabled(value: boolean | cdktf.IResolvable) {
    this._isScsiControllerEnabled = value;
  }
  public resetIsScsiControllerEnabled() {
    this._isScsiControllerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScsiControllerEnabledInput() {
    return this._isScsiControllerEnabled;
  }

  // is_vcpu_hard_pinning_enabled - computed: true, optional: true, required: false
  private _isVcpuHardPinningEnabled?: boolean | cdktf.IResolvable; 
  public get isVcpuHardPinningEnabled() {
    return this.getBooleanAttribute('is_vcpu_hard_pinning_enabled');
  }
  public set isVcpuHardPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._isVcpuHardPinningEnabled = value;
  }
  public resetIsVcpuHardPinningEnabled() {
    this._isVcpuHardPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVcpuHardPinningEnabledInput() {
    return this._isVcpuHardPinningEnabled;
  }

  // is_vga_console_enabled - computed: true, optional: true, required: false
  private _isVgaConsoleEnabled?: boolean | cdktf.IResolvable; 
  public get isVgaConsoleEnabled() {
    return this.getBooleanAttribute('is_vga_console_enabled');
  }
  public set isVgaConsoleEnabled(value: boolean | cdktf.IResolvable) {
    this._isVgaConsoleEnabled = value;
  }
  public resetIsVgaConsoleEnabled() {
    this._isVgaConsoleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVgaConsoleEnabledInput() {
    return this._isVgaConsoleEnabled;
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

  // memory_size_bytes - computed: true, optional: true, required: false
  private _memorySizeBytes?: number; 
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }
  public set memorySizeBytes(value: number) {
    this._memorySizeBytes = value;
  }
  public resetMemorySizeBytes() {
    this._memorySizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeBytesInput() {
    return this._memorySizeBytes;
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

  // num_cores_per_socket - computed: true, optional: true, required: false
  private _numCoresPerSocket?: number; 
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }
  public set numCoresPerSocket(value: number) {
    this._numCoresPerSocket = value;
  }
  public resetNumCoresPerSocket() {
    this._numCoresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresPerSocketInput() {
    return this._numCoresPerSocket;
  }

  // num_numa_nodes - computed: true, optional: true, required: false
  private _numNumaNodes?: number; 
  public get numNumaNodes() {
    return this.getNumberAttribute('num_numa_nodes');
  }
  public set numNumaNodes(value: number) {
    this._numNumaNodes = value;
  }
  public resetNumNumaNodes() {
    this._numNumaNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNumaNodesInput() {
    return this._numNumaNodes;
  }

  // num_sockets - computed: true, optional: true, required: false
  private _numSockets?: number; 
  public get numSockets() {
    return this.getNumberAttribute('num_sockets');
  }
  public set numSockets(value: number) {
    this._numSockets = value;
  }
  public resetNumSockets() {
    this._numSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSocketsInput() {
    return this._numSockets;
  }

  // num_threads_per_core - computed: true, optional: true, required: false
  private _numThreadsPerCore?: number; 
  public get numThreadsPerCore() {
    return this.getNumberAttribute('num_threads_per_core');
  }
  public set numThreadsPerCore(value: number) {
    this._numThreadsPerCore = value;
  }
  public resetNumThreadsPerCore() {
    this._numThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsPerCoreInput() {
    return this._numThreadsPerCore;
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

  // protection_type - computed: true, optional: true, required: false
  private _protectionType?: string; 
  public get protectionType() {
    return this.getStringAttribute('protection_type');
  }
  public set protectionType(value: string) {
    this._protectionType = value;
  }
  public resetProtectionType() {
    this._protectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionTypeInput() {
    return this._protectionType;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // apc_config - computed: false, optional: true, required: false
  private _apcConfig = new VirtualMachineV2ApcConfigList(this, "apc_config", false);
  public get apcConfig() {
    return this._apcConfig;
  }
  public putApcConfig(value: VirtualMachineV2ApcConfig[] | cdktf.IResolvable) {
    this._apcConfig.internalValue = value;
  }
  public resetApcConfig() {
    this._apcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apcConfigInput() {
    return this._apcConfig.internalValue;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone = new VirtualMachineV2AvailabilityZoneList(this, "availability_zone", false);
  public get availabilityZone() {
    return this._availabilityZone;
  }
  public putAvailabilityZone(value: VirtualMachineV2AvailabilityZone[] | cdktf.IResolvable) {
    this._availabilityZone.internalValue = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone.internalValue;
  }

  // boot_config - computed: false, optional: true, required: false
  private _bootConfig = new VirtualMachineV2BootConfigList(this, "boot_config", false);
  public get bootConfig() {
    return this._bootConfig;
  }
  public putBootConfig(value: VirtualMachineV2BootConfig[] | cdktf.IResolvable) {
    this._bootConfig.internalValue = value;
  }
  public resetBootConfig() {
    this._bootConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootConfigInput() {
    return this._bootConfig.internalValue;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new VirtualMachineV2CategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: VirtualMachineV2Categories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // cd_roms - computed: false, optional: true, required: false
  private _cdRoms = new VirtualMachineV2CdRomsList(this, "cd_roms", false);
  public get cdRoms() {
    return this._cdRoms;
  }
  public putCdRoms(value: VirtualMachineV2CdRoms[] | cdktf.IResolvable) {
    this._cdRoms.internalValue = value;
  }
  public resetCdRoms() {
    this._cdRoms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdRomsInput() {
    return this._cdRoms.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new VirtualMachineV2ClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: VirtualMachineV2Cluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new VirtualMachineV2DisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: VirtualMachineV2Disks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus = new VirtualMachineV2GpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }
  public putGpus(value: VirtualMachineV2Gpus[] | cdktf.IResolvable) {
    this._gpus.internalValue = value;
  }
  public resetGpus() {
    this._gpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus.internalValue;
  }

  // guest_customization - computed: false, optional: true, required: false
  private _guestCustomization = new VirtualMachineV2GuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }
  public putGuestCustomization(value: VirtualMachineV2GuestCustomization[] | cdktf.IResolvable) {
    this._guestCustomization.internalValue = value;
  }
  public resetGuestCustomization() {
    this._guestCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationInput() {
    return this._guestCustomization.internalValue;
  }

  // guest_tools - computed: false, optional: true, required: false
  private _guestTools = new VirtualMachineV2GuestToolsList(this, "guest_tools", false);
  public get guestTools() {
    return this._guestTools;
  }
  public putGuestTools(value: VirtualMachineV2GuestTools[] | cdktf.IResolvable) {
    this._guestTools.internalValue = value;
  }
  public resetGuestTools() {
    this._guestTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestToolsInput() {
    return this._guestTools.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new VirtualMachineV2HostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: VirtualMachineV2Host[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new VirtualMachineV2NicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: VirtualMachineV2Nics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // ownership_info - computed: false, optional: true, required: false
  private _ownershipInfo = new VirtualMachineV2OwnershipInfoList(this, "ownership_info", false);
  public get ownershipInfo() {
    return this._ownershipInfo;
  }
  public putOwnershipInfo(value: VirtualMachineV2OwnershipInfo[] | cdktf.IResolvable) {
    this._ownershipInfo.internalValue = value;
  }
  public resetOwnershipInfo() {
    this._ownershipInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipInfoInput() {
    return this._ownershipInfo.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project = new VirtualMachineV2ProjectList(this, "project", false);
  public get project() {
    return this._project;
  }
  public putProject(value: VirtualMachineV2Project[] | cdktf.IResolvable) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // protection_policy_state - computed: false, optional: true, required: false
  private _protectionPolicyState = new VirtualMachineV2ProtectionPolicyStateList(this, "protection_policy_state", false);
  public get protectionPolicyState() {
    return this._protectionPolicyState;
  }
  public putProtectionPolicyState(value: VirtualMachineV2ProtectionPolicyState[] | cdktf.IResolvable) {
    this._protectionPolicyState.internalValue = value;
  }
  public resetProtectionPolicyState() {
    this._protectionPolicyState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyStateInput() {
    return this._protectionPolicyState.internalValue;
  }

  // serial_ports - computed: false, optional: true, required: false
  private _serialPorts = new VirtualMachineV2SerialPortsList(this, "serial_ports", false);
  public get serialPorts() {
    return this._serialPorts;
  }
  public putSerialPorts(value: VirtualMachineV2SerialPorts[] | cdktf.IResolvable) {
    this._serialPorts.internalValue = value;
  }
  public resetSerialPorts() {
    this._serialPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPortsInput() {
    return this._serialPorts.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new VirtualMachineV2SourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: VirtualMachineV2Source[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new VirtualMachineV2StorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: VirtualMachineV2StorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // vtpm_config - computed: false, optional: true, required: false
  private _vtpmConfig = new VirtualMachineV2VtpmConfigList(this, "vtpm_config", false);
  public get vtpmConfig() {
    return this._vtpmConfig;
  }
  public putVtpmConfig(value: VirtualMachineV2VtpmConfig[] | cdktf.IResolvable) {
    this._vtpmConfig.internalValue = value;
  }
  public resetVtpmConfig() {
    this._vtpmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpmConfigInput() {
    return this._vtpmConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bios_uuid: cdktf.stringToTerraform(this._biosUuid),
      description: cdktf.stringToTerraform(this._description),
      enabled_cpu_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledCpuFeatures),
      generation_uuid: cdktf.stringToTerraform(this._generationUuid),
      hardware_clock_timezone: cdktf.stringToTerraform(this._hardwareClockTimezone),
      id: cdktf.stringToTerraform(this._id),
      is_agent_vm: cdktf.booleanToTerraform(this._isAgentVm),
      is_branding_enabled: cdktf.booleanToTerraform(this._isBrandingEnabled),
      is_cpu_hotplug_enabled: cdktf.booleanToTerraform(this._isCpuHotplugEnabled),
      is_cpu_passthrough_enabled: cdktf.booleanToTerraform(this._isCpuPassthroughEnabled),
      is_gpu_console_enabled: cdktf.booleanToTerraform(this._isGpuConsoleEnabled),
      is_memory_overcommit_enabled: cdktf.booleanToTerraform(this._isMemoryOvercommitEnabled),
      is_scsi_controller_enabled: cdktf.booleanToTerraform(this._isScsiControllerEnabled),
      is_vcpu_hard_pinning_enabled: cdktf.booleanToTerraform(this._isVcpuHardPinningEnabled),
      is_vga_console_enabled: cdktf.booleanToTerraform(this._isVgaConsoleEnabled),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory_size_bytes: cdktf.numberToTerraform(this._memorySizeBytes),
      name: cdktf.stringToTerraform(this._name),
      num_cores_per_socket: cdktf.numberToTerraform(this._numCoresPerSocket),
      num_numa_nodes: cdktf.numberToTerraform(this._numNumaNodes),
      num_sockets: cdktf.numberToTerraform(this._numSockets),
      num_threads_per_core: cdktf.numberToTerraform(this._numThreadsPerCore),
      power_state: cdktf.stringToTerraform(this._powerState),
      protection_type: cdktf.stringToTerraform(this._protectionType),
      apc_config: cdktf.listMapper(virtualMachineV2ApcConfigToTerraform, true)(this._apcConfig.internalValue),
      availability_zone: cdktf.listMapper(virtualMachineV2AvailabilityZoneToTerraform, true)(this._availabilityZone.internalValue),
      boot_config: cdktf.listMapper(virtualMachineV2BootConfigToTerraform, true)(this._bootConfig.internalValue),
      categories: cdktf.listMapper(virtualMachineV2CategoriesToTerraform, true)(this._categories.internalValue),
      cd_roms: cdktf.listMapper(virtualMachineV2CdRomsToTerraform, true)(this._cdRoms.internalValue),
      cluster: cdktf.listMapper(virtualMachineV2ClusterToTerraform, true)(this._cluster.internalValue),
      disks: cdktf.listMapper(virtualMachineV2DisksToTerraform, true)(this._disks.internalValue),
      gpus: cdktf.listMapper(virtualMachineV2GpusToTerraform, true)(this._gpus.internalValue),
      guest_customization: cdktf.listMapper(virtualMachineV2GuestCustomizationToTerraform, true)(this._guestCustomization.internalValue),
      guest_tools: cdktf.listMapper(virtualMachineV2GuestToolsToTerraform, true)(this._guestTools.internalValue),
      host: cdktf.listMapper(virtualMachineV2HostToTerraform, true)(this._host.internalValue),
      nics: cdktf.listMapper(virtualMachineV2NicsToTerraform, true)(this._nics.internalValue),
      ownership_info: cdktf.listMapper(virtualMachineV2OwnershipInfoToTerraform, true)(this._ownershipInfo.internalValue),
      project: cdktf.listMapper(virtualMachineV2ProjectToTerraform, true)(this._project.internalValue),
      protection_policy_state: cdktf.listMapper(virtualMachineV2ProtectionPolicyStateToTerraform, true)(this._protectionPolicyState.internalValue),
      serial_ports: cdktf.listMapper(virtualMachineV2SerialPortsToTerraform, true)(this._serialPorts.internalValue),
      source: cdktf.listMapper(virtualMachineV2SourceToTerraform, true)(this._source.internalValue),
      storage_config: cdktf.listMapper(virtualMachineV2StorageConfigToTerraform, true)(this._storageConfig.internalValue),
      vtpm_config: cdktf.listMapper(virtualMachineV2VtpmConfigToTerraform, true)(this._vtpmConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bios_uuid: {
        value: cdktf.stringToHclTerraform(this._biosUuid),
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
      enabled_cpu_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledCpuFeatures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      generation_uuid: {
        value: cdktf.stringToHclTerraform(this._generationUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware_clock_timezone: {
        value: cdktf.stringToHclTerraform(this._hardwareClockTimezone),
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
      is_agent_vm: {
        value: cdktf.booleanToHclTerraform(this._isAgentVm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_branding_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBrandingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_cpu_hotplug_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCpuHotplugEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_cpu_passthrough_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCpuPassthroughEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_gpu_console_enabled: {
        value: cdktf.booleanToHclTerraform(this._isGpuConsoleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_memory_overcommit_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMemoryOvercommitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_scsi_controller_enabled: {
        value: cdktf.booleanToHclTerraform(this._isScsiControllerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_vcpu_hard_pinning_enabled: {
        value: cdktf.booleanToHclTerraform(this._isVcpuHardPinningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_vga_console_enabled: {
        value: cdktf.booleanToHclTerraform(this._isVgaConsoleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size_bytes: {
        value: cdktf.numberToHclTerraform(this._memorySizeBytes),
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
      num_cores_per_socket: {
        value: cdktf.numberToHclTerraform(this._numCoresPerSocket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_numa_nodes: {
        value: cdktf.numberToHclTerraform(this._numNumaNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_sockets: {
        value: cdktf.numberToHclTerraform(this._numSockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_threads_per_core: {
        value: cdktf.numberToHclTerraform(this._numThreadsPerCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      power_state: {
        value: cdktf.stringToHclTerraform(this._powerState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_type: {
        value: cdktf.stringToHclTerraform(this._protectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apc_config: {
        value: cdktf.listMapperHcl(virtualMachineV2ApcConfigToHclTerraform, true)(this._apcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2ApcConfigList",
      },
      availability_zone: {
        value: cdktf.listMapperHcl(virtualMachineV2AvailabilityZoneToHclTerraform, true)(this._availabilityZone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2AvailabilityZoneList",
      },
      boot_config: {
        value: cdktf.listMapperHcl(virtualMachineV2BootConfigToHclTerraform, true)(this._bootConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2BootConfigList",
      },
      categories: {
        value: cdktf.listMapperHcl(virtualMachineV2CategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2CategoriesList",
      },
      cd_roms: {
        value: cdktf.listMapperHcl(virtualMachineV2CdRomsToHclTerraform, true)(this._cdRoms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2CdRomsList",
      },
      cluster: {
        value: cdktf.listMapperHcl(virtualMachineV2ClusterToHclTerraform, true)(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2ClusterList",
      },
      disks: {
        value: cdktf.listMapperHcl(virtualMachineV2DisksToHclTerraform, true)(this._disks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2DisksList",
      },
      gpus: {
        value: cdktf.listMapperHcl(virtualMachineV2GpusToHclTerraform, true)(this._gpus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2GpusList",
      },
      guest_customization: {
        value: cdktf.listMapperHcl(virtualMachineV2GuestCustomizationToHclTerraform, true)(this._guestCustomization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2GuestCustomizationList",
      },
      guest_tools: {
        value: cdktf.listMapperHcl(virtualMachineV2GuestToolsToHclTerraform, true)(this._guestTools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2GuestToolsList",
      },
      host: {
        value: cdktf.listMapperHcl(virtualMachineV2HostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2HostList",
      },
      nics: {
        value: cdktf.listMapperHcl(virtualMachineV2NicsToHclTerraform, true)(this._nics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2NicsList",
      },
      ownership_info: {
        value: cdktf.listMapperHcl(virtualMachineV2OwnershipInfoToHclTerraform, true)(this._ownershipInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2OwnershipInfoList",
      },
      project: {
        value: cdktf.listMapperHcl(virtualMachineV2ProjectToHclTerraform, true)(this._project.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2ProjectList",
      },
      protection_policy_state: {
        value: cdktf.listMapperHcl(virtualMachineV2ProtectionPolicyStateToHclTerraform, true)(this._protectionPolicyState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2ProtectionPolicyStateList",
      },
      serial_ports: {
        value: cdktf.listMapperHcl(virtualMachineV2SerialPortsToHclTerraform, true)(this._serialPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2SerialPortsList",
      },
      source: {
        value: cdktf.listMapperHcl(virtualMachineV2SourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2SourceList",
      },
      storage_config: {
        value: cdktf.listMapperHcl(virtualMachineV2StorageConfigToHclTerraform, true)(this._storageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2StorageConfigList",
      },
      vtpm_config: {
        value: cdktf.listMapperHcl(virtualMachineV2VtpmConfigToHclTerraform, true)(this._vtpmConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineV2VtpmConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
