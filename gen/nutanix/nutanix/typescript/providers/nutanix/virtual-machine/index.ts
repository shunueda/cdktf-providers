// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#availability_zone_reference VirtualMachine#availability_zone_reference}
  */
  readonly availabilityZoneReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#boot_device_disk_address VirtualMachine#boot_device_disk_address}
  */
  readonly bootDeviceDiskAddress?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#boot_device_mac_address VirtualMachine#boot_device_mac_address}
  */
  readonly bootDeviceMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#boot_device_order_list VirtualMachine#boot_device_order_list}
  */
  readonly bootDeviceOrderList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#boot_type VirtualMachine#boot_type}
  */
  readonly bootType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#cloud_init_cdrom_uuid VirtualMachine#cloud_init_cdrom_uuid}
  */
  readonly cloudInitCdromUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#cluster_uuid VirtualMachine#cluster_uuid}
  */
  readonly clusterUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#description VirtualMachine#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#enable_cpu_passthrough VirtualMachine#enable_cpu_passthrough}
  */
  readonly enableCpuPassthrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#enable_script_exec VirtualMachine#enable_script_exec}
  */
  readonly enableScriptExec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#guest_customization_cloud_init_custom_key_values VirtualMachine#guest_customization_cloud_init_custom_key_values}
  */
  readonly guestCustomizationCloudInitCustomKeyValues?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#guest_customization_cloud_init_meta_data VirtualMachine#guest_customization_cloud_init_meta_data}
  */
  readonly guestCustomizationCloudInitMetaData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#guest_customization_cloud_init_user_data VirtualMachine#guest_customization_cloud_init_user_data}
  */
  readonly guestCustomizationCloudInitUserData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#guest_customization_is_overridable VirtualMachine#guest_customization_is_overridable}
  */
  readonly guestCustomizationIsOverridable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#guest_customization_sysprep VirtualMachine#guest_customization_sysprep}
  */
  readonly guestCustomizationSysprep?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#guest_customization_sysprep_custom_key_values VirtualMachine#guest_customization_sysprep_custom_key_values}
  */
  readonly guestCustomizationSysprepCustomKeyValues?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#guest_os_id VirtualMachine#guest_os_id}
  */
  readonly guestOsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#hardware_clock_timezone VirtualMachine#hardware_clock_timezone}
  */
  readonly hardwareClockTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#is_vcpu_hard_pinned VirtualMachine#is_vcpu_hard_pinned}
  */
  readonly isVcpuHardPinned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#machine_type VirtualMachine#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#memory_size_mib VirtualMachine#memory_size_mib}
  */
  readonly memorySizeMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#ngt_credentials VirtualMachine#ngt_credentials}
  */
  readonly ngtCredentials?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#ngt_enabled_capability_list VirtualMachine#ngt_enabled_capability_list}
  */
  readonly ngtEnabledCapabilityList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#num_sockets VirtualMachine#num_sockets}
  */
  readonly numSockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#num_vcpus_per_socket VirtualMachine#num_vcpus_per_socket}
  */
  readonly numVcpusPerSocket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#num_vnuma_nodes VirtualMachine#num_vnuma_nodes}
  */
  readonly numVnumaNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#nutanix_guest_tools VirtualMachine#nutanix_guest_tools}
  */
  readonly nutanixGuestTools?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#owner_reference VirtualMachine#owner_reference}
  */
  readonly ownerReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#parent_reference VirtualMachine#parent_reference}
  */
  readonly parentReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#power_state VirtualMachine#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#power_state_mechanism VirtualMachine#power_state_mechanism}
  */
  readonly powerStateMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#project_reference VirtualMachine#project_reference}
  */
  readonly projectReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#should_fail_on_script_failure VirtualMachine#should_fail_on_script_failure}
  */
  readonly shouldFailOnScriptFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#use_hot_add VirtualMachine#use_hot_add}
  */
  readonly useHotAdd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#vga_console_enabled VirtualMachine#vga_console_enabled}
  */
  readonly vgaConsoleEnabled?: boolean | cdktf.IResolvable;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#categories VirtualMachine#categories}
  */
  readonly categories?: VirtualMachineCategories[] | cdktf.IResolvable;
  /**
  * disk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#disk_list VirtualMachine#disk_list}
  */
  readonly diskList?: VirtualMachineDiskListStruct[] | cdktf.IResolvable;
  /**
  * gpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#gpu_list VirtualMachine#gpu_list}
  */
  readonly gpuList?: VirtualMachineGpuListStruct[] | cdktf.IResolvable;
  /**
  * nic_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#nic_list VirtualMachine#nic_list}
  */
  readonly nicList?: VirtualMachineNicListStruct[] | cdktf.IResolvable;
  /**
  * serial_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#serial_port_list VirtualMachine#serial_port_list}
  */
  readonly serialPortList?: VirtualMachineSerialPortListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#timeouts VirtualMachine#timeouts}
  */
  readonly timeouts?: VirtualMachineTimeouts;
}
export interface VirtualMachineNicListStatusIpEndpointListStruct {
}

export function virtualMachineNicListStatusIpEndpointListStructToTerraform(struct?: VirtualMachineNicListStatusIpEndpointListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualMachineNicListStatusIpEndpointListStructToHclTerraform(struct?: VirtualMachineNicListStatusIpEndpointListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualMachineNicListStatusIpEndpointListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineNicListStatusIpEndpointListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineNicListStatusIpEndpointListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class VirtualMachineNicListStatusIpEndpointListStructList extends cdktf.ComplexList {

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
  public get(index: number): VirtualMachineNicListStatusIpEndpointListStructOutputReference {
    return new VirtualMachineNicListStatusIpEndpointListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineNicListStatus {
}

export function virtualMachineNicListStatusToTerraform(struct?: VirtualMachineNicListStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualMachineNicListStatusToHclTerraform(struct?: VirtualMachineNicListStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualMachineNicListStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineNicListStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineNicListStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // floating_ip - computed: true, optional: false, required: false
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }

  // ip_endpoint_list - computed: true, optional: false, required: false
  private _ipEndpointList = new VirtualMachineNicListStatusIpEndpointListStructList(this, "ip_endpoint_list", false);
  public get ipEndpointList() {
    return this._ipEndpointList;
  }

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getStringAttribute('is_connected');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  private _networkFunctionChainReference = new cdktf.StringMap(this, "network_function_chain_reference");
  public get networkFunctionChainReference() {
    return this._networkFunctionChainReference;
  }

  // network_function_nic_type - computed: true, optional: false, required: false
  public get networkFunctionNicType() {
    return this.getStringAttribute('network_function_nic_type');
  }

  // nic_type - computed: true, optional: false, required: false
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }

  // num_queues - computed: true, optional: false, required: false
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // subnet_uuid - computed: true, optional: false, required: false
  public get subnetUuid() {
    return this.getStringAttribute('subnet_uuid');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class VirtualMachineNicListStatusList extends cdktf.ComplexList {

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
  public get(index: number): VirtualMachineNicListStatusOutputReference {
    return new VirtualMachineNicListStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#value VirtualMachine#value}
  */
  readonly value?: string;
}

export function virtualMachineCategoriesToTerraform(struct?: VirtualMachineCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function virtualMachineCategoriesToHclTerraform(struct?: VirtualMachineCategories | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class VirtualMachineCategoriesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineCategories[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineCategoriesOutputReference {
    return new VirtualMachineCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineDiskListDeviceProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#device_type VirtualMachine#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#disk_address VirtualMachine#disk_address}
  */
  readonly diskAddress?: { [key: string]: string };
}

export function virtualMachineDiskListDevicePropertiesToTerraform(struct?: VirtualMachineDiskListDevicePropertiesOutputReference | VirtualMachineDiskListDeviceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    disk_address: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.diskAddress),
  }
}


export function virtualMachineDiskListDevicePropertiesToHclTerraform(struct?: VirtualMachineDiskListDevicePropertiesOutputReference | VirtualMachineDiskListDeviceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_address: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.diskAddress),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineDiskListDevicePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineDiskListDeviceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._diskAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineDiskListDeviceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceType = undefined;
      this._diskAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceType = value.deviceType;
      this._diskAddress = value.diskAddress;
    }
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // disk_address - computed: true, optional: true, required: false
  private _diskAddress?: { [key: string]: string }; 
  public get diskAddress() {
    return this.getStringMapAttribute('disk_address');
  }
  public set diskAddress(value: { [key: string]: string }) {
    this._diskAddress = value;
  }
  public resetDiskAddress() {
    this._diskAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress;
  }
}
export interface VirtualMachineDiskListStorageConfigStorageContainerReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#kind VirtualMachine#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#url VirtualMachine#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#uuid VirtualMachine#uuid}
  */
  readonly uuid?: string;
}

export function virtualMachineDiskListStorageConfigStorageContainerReferenceToTerraform(struct?: VirtualMachineDiskListStorageConfigStorageContainerReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function virtualMachineDiskListStorageConfigStorageContainerReferenceToHclTerraform(struct?: VirtualMachineDiskListStorageConfigStorageContainerReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineDiskListStorageConfigStorageContainerReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineDiskListStorageConfigStorageContainerReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineDiskListStorageConfigStorageContainerReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._url = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._url = value.url;
      this._uuid = value.uuid;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
}

export class VirtualMachineDiskListStorageConfigStorageContainerReferenceList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineDiskListStorageConfigStorageContainerReference[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineDiskListStorageConfigStorageContainerReferenceOutputReference {
    return new VirtualMachineDiskListStorageConfigStorageContainerReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineDiskListStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#flash_mode VirtualMachine#flash_mode}
  */
  readonly flashMode?: string;
  /**
  * storage_container_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#storage_container_reference VirtualMachine#storage_container_reference}
  */
  readonly storageContainerReference?: VirtualMachineDiskListStorageConfigStorageContainerReference[] | cdktf.IResolvable;
}

export function virtualMachineDiskListStorageConfigToTerraform(struct?: VirtualMachineDiskListStorageConfigOutputReference | VirtualMachineDiskListStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flash_mode: cdktf.stringToTerraform(struct!.flashMode),
    storage_container_reference: cdktf.listMapper(virtualMachineDiskListStorageConfigStorageContainerReferenceToTerraform, true)(struct!.storageContainerReference),
  }
}


export function virtualMachineDiskListStorageConfigToHclTerraform(struct?: VirtualMachineDiskListStorageConfigOutputReference | VirtualMachineDiskListStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flash_mode: {
      value: cdktf.stringToHclTerraform(struct!.flashMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container_reference: {
      value: cdktf.listMapperHcl(virtualMachineDiskListStorageConfigStorageContainerReferenceToHclTerraform, true)(struct!.storageContainerReference),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineDiskListStorageConfigStorageContainerReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineDiskListStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineDiskListStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flashMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashMode = this._flashMode;
    }
    if (this._storageContainerReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainerReference = this._storageContainerReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineDiskListStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flashMode = undefined;
      this._storageContainerReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flashMode = value.flashMode;
      this._storageContainerReference.internalValue = value.storageContainerReference;
    }
  }

  // flash_mode - computed: false, optional: true, required: false
  private _flashMode?: string; 
  public get flashMode() {
    return this.getStringAttribute('flash_mode');
  }
  public set flashMode(value: string) {
    this._flashMode = value;
  }
  public resetFlashMode() {
    this._flashMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashModeInput() {
    return this._flashMode;
  }

  // storage_container_reference - computed: false, optional: true, required: false
  private _storageContainerReference = new VirtualMachineDiskListStorageConfigStorageContainerReferenceList(this, "storage_container_reference", false);
  public get storageContainerReference() {
    return this._storageContainerReference;
  }
  public putStorageContainerReference(value: VirtualMachineDiskListStorageConfigStorageContainerReference[] | cdktf.IResolvable) {
    this._storageContainerReference.internalValue = value;
  }
  public resetStorageContainerReference() {
    this._storageContainerReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerReferenceInput() {
    return this._storageContainerReference.internalValue;
  }
}
export interface VirtualMachineDiskListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#data_source_reference VirtualMachine#data_source_reference}
  */
  readonly dataSourceReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#disk_size_bytes VirtualMachine#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#disk_size_mib VirtualMachine#disk_size_mib}
  */
  readonly diskSizeMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#uuid VirtualMachine#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#volume_group_reference VirtualMachine#volume_group_reference}
  */
  readonly volumeGroupReference?: { [key: string]: string };
  /**
  * device_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#device_properties VirtualMachine#device_properties}
  */
  readonly deviceProperties?: VirtualMachineDiskListDeviceProperties;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#storage_config VirtualMachine#storage_config}
  */
  readonly storageConfig?: VirtualMachineDiskListStorageConfig;
}

export function virtualMachineDiskListStructToTerraform(struct?: VirtualMachineDiskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_reference: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dataSourceReference),
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    disk_size_mib: cdktf.numberToTerraform(struct!.diskSizeMib),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    volume_group_reference: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeGroupReference),
    device_properties: virtualMachineDiskListDevicePropertiesToTerraform(struct!.deviceProperties),
    storage_config: virtualMachineDiskListStorageConfigToTerraform(struct!.storageConfig),
  }
}


export function virtualMachineDiskListStructToHclTerraform(struct?: VirtualMachineDiskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_reference: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dataSourceReference),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size_mib: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group_reference: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.volumeGroupReference),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    device_properties: {
      value: virtualMachineDiskListDevicePropertiesToHclTerraform(struct!.deviceProperties),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineDiskListDevicePropertiesList",
    },
    storage_config: {
      value: virtualMachineDiskListStorageConfigToHclTerraform(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineDiskListStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineDiskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineDiskListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceReference = this._dataSourceReference;
    }
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._diskSizeMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeMib = this._diskSizeMib;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._volumeGroupReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupReference = this._volumeGroupReference;
    }
    if (this._deviceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceProperties = this._deviceProperties?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineDiskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceReference = undefined;
      this._diskSizeBytes = undefined;
      this._diskSizeMib = undefined;
      this._uuid = undefined;
      this._volumeGroupReference = undefined;
      this._deviceProperties.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceReference = value.dataSourceReference;
      this._diskSizeBytes = value.diskSizeBytes;
      this._diskSizeMib = value.diskSizeMib;
      this._uuid = value.uuid;
      this._volumeGroupReference = value.volumeGroupReference;
      this._deviceProperties.internalValue = value.deviceProperties;
      this._storageConfig.internalValue = value.storageConfig;
    }
  }

  // data_source_reference - computed: true, optional: true, required: false
  private _dataSourceReference?: { [key: string]: string }; 
  public get dataSourceReference() {
    return this.getStringMapAttribute('data_source_reference');
  }
  public set dataSourceReference(value: { [key: string]: string }) {
    this._dataSourceReference = value;
  }
  public resetDataSourceReference() {
    this._dataSourceReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceReferenceInput() {
    return this._dataSourceReference;
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

  // disk_size_mib - computed: true, optional: true, required: false
  private _diskSizeMib?: number; 
  public get diskSizeMib() {
    return this.getNumberAttribute('disk_size_mib');
  }
  public set diskSizeMib(value: number) {
    this._diskSizeMib = value;
  }
  public resetDiskSizeMib() {
    this._diskSizeMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeMibInput() {
    return this._diskSizeMib;
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

  // volume_group_reference - computed: true, optional: true, required: false
  private _volumeGroupReference?: { [key: string]: string }; 
  public get volumeGroupReference() {
    return this.getStringMapAttribute('volume_group_reference');
  }
  public set volumeGroupReference(value: { [key: string]: string }) {
    this._volumeGroupReference = value;
  }
  public resetVolumeGroupReference() {
    this._volumeGroupReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupReferenceInput() {
    return this._volumeGroupReference;
  }

  // device_properties - computed: false, optional: true, required: false
  private _deviceProperties = new VirtualMachineDiskListDevicePropertiesOutputReference(this, "device_properties");
  public get deviceProperties() {
    return this._deviceProperties;
  }
  public putDeviceProperties(value: VirtualMachineDiskListDeviceProperties) {
    this._deviceProperties.internalValue = value;
  }
  public resetDeviceProperties() {
    this._deviceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePropertiesInput() {
    return this._deviceProperties.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new VirtualMachineDiskListStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: VirtualMachineDiskListStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }
}

export class VirtualMachineDiskListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineDiskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineDiskListStructOutputReference {
    return new VirtualMachineDiskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineGpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#device_id VirtualMachine#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#mode VirtualMachine#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#vendor VirtualMachine#vendor}
  */
  readonly vendor?: string;
}

export function virtualMachineGpuListStructToTerraform(struct?: VirtualMachineGpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.numberToTerraform(struct!.deviceId),
    mode: cdktf.stringToTerraform(struct!.mode),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function virtualMachineGpuListStructToHclTerraform(struct?: VirtualMachineGpuListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineGpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineGpuListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineGpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._mode = undefined;
      this._vendor = undefined;
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

  // fraction - computed: true, optional: false, required: false
  public get fraction() {
    return this.getNumberAttribute('fraction');
  }

  // frame_buffer_size_mib - computed: true, optional: false, required: false
  public get frameBufferSizeMib() {
    return this.getNumberAttribute('frame_buffer_size_mib');
  }

  // guest_driver_version - computed: true, optional: false, required: false
  public get guestDriverVersion() {
    return this.getStringAttribute('guest_driver_version');
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

  // pci_address - computed: true, optional: false, required: false
  public get pciAddress() {
    return this.getStringAttribute('pci_address');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
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
}

export class VirtualMachineGpuListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineGpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineGpuListStructOutputReference {
    return new VirtualMachineGpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineNicListIpEndpointListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#ip VirtualMachine#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#type VirtualMachine#type}
  */
  readonly type?: string;
}

export function virtualMachineNicListIpEndpointListStructToTerraform(struct?: VirtualMachineNicListIpEndpointListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualMachineNicListIpEndpointListStructToHclTerraform(struct?: VirtualMachineNicListIpEndpointListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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

export class VirtualMachineNicListIpEndpointListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineNicListIpEndpointListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineNicListIpEndpointListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._type = value.type;
    }
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

export class VirtualMachineNicListIpEndpointListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineNicListIpEndpointListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineNicListIpEndpointListStructOutputReference {
    return new VirtualMachineNicListIpEndpointListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineNicListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#is_connected VirtualMachine#is_connected}
  */
  readonly isConnected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#mac_address VirtualMachine#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#model VirtualMachine#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#network_function_chain_reference VirtualMachine#network_function_chain_reference}
  */
  readonly networkFunctionChainReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#network_function_nic_type VirtualMachine#network_function_nic_type}
  */
  readonly networkFunctionNicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#nic_type VirtualMachine#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#num_queues VirtualMachine#num_queues}
  */
  readonly numQueues?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#subnet_name VirtualMachine#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#subnet_uuid VirtualMachine#subnet_uuid}
  */
  readonly subnetUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#uuid VirtualMachine#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_endpoint_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#ip_endpoint_list VirtualMachine#ip_endpoint_list}
  */
  readonly ipEndpointList?: VirtualMachineNicListIpEndpointListStruct[] | cdktf.IResolvable;
}

export function virtualMachineNicListStructToTerraform(struct?: VirtualMachineNicListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_connected: cdktf.stringToTerraform(struct!.isConnected),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    network_function_chain_reference: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.networkFunctionChainReference),
    network_function_nic_type: cdktf.stringToTerraform(struct!.networkFunctionNicType),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    num_queues: cdktf.numberToTerraform(struct!.numQueues),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subnet_uuid: cdktf.stringToTerraform(struct!.subnetUuid),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip_endpoint_list: cdktf.listMapper(virtualMachineNicListIpEndpointListStructToTerraform, true)(struct!.ipEndpointList),
  }
}


export function virtualMachineNicListStructToHclTerraform(struct?: VirtualMachineNicListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_connected: {
      value: cdktf.stringToHclTerraform(struct!.isConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    network_function_chain_reference: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.networkFunctionChainReference),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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
    num_queues: {
      value: cdktf.numberToHclTerraform(struct!.numQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_uuid: {
      value: cdktf.stringToHclTerraform(struct!.subnetUuid),
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
    ip_endpoint_list: {
      value: cdktf.listMapperHcl(virtualMachineNicListIpEndpointListStructToHclTerraform, true)(struct!.ipEndpointList),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineNicListIpEndpointListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineNicListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineNicListStruct | cdktf.IResolvable | undefined {
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
    if (this._networkFunctionChainReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChainReference = this._networkFunctionChainReference;
    }
    if (this._networkFunctionNicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionNicType = this._networkFunctionNicType;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._numQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueues = this._numQueues;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subnetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetUuid = this._subnetUuid;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipEndpointList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEndpointList = this._ipEndpointList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineNicListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isConnected = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._networkFunctionChainReference = undefined;
      this._networkFunctionNicType = undefined;
      this._nicType = undefined;
      this._numQueues = undefined;
      this._subnetName = undefined;
      this._subnetUuid = undefined;
      this._uuid = undefined;
      this._ipEndpointList.internalValue = undefined;
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
      this._networkFunctionChainReference = value.networkFunctionChainReference;
      this._networkFunctionNicType = value.networkFunctionNicType;
      this._nicType = value.nicType;
      this._numQueues = value.numQueues;
      this._subnetName = value.subnetName;
      this._subnetUuid = value.subnetUuid;
      this._uuid = value.uuid;
      this._ipEndpointList.internalValue = value.ipEndpointList;
    }
  }

  // is_connected - computed: false, optional: true, required: false
  private _isConnected?: string; 
  public get isConnected() {
    return this.getStringAttribute('is_connected');
  }
  public set isConnected(value: string) {
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

  // network_function_chain_reference - computed: true, optional: true, required: false
  private _networkFunctionChainReference?: { [key: string]: string }; 
  public get networkFunctionChainReference() {
    return this.getStringMapAttribute('network_function_chain_reference');
  }
  public set networkFunctionChainReference(value: { [key: string]: string }) {
    this._networkFunctionChainReference = value;
  }
  public resetNetworkFunctionChainReference() {
    this._networkFunctionChainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainReferenceInput() {
    return this._networkFunctionChainReference;
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

  // num_queues - computed: true, optional: true, required: false
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

  // subnet_name - computed: true, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subnet_uuid - computed: false, optional: true, required: false
  private _subnetUuid?: string; 
  public get subnetUuid() {
    return this.getStringAttribute('subnet_uuid');
  }
  public set subnetUuid(value: string) {
    this._subnetUuid = value;
  }
  public resetSubnetUuid() {
    this._subnetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetUuidInput() {
    return this._subnetUuid;
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

  // ip_endpoint_list - computed: false, optional: true, required: false
  private _ipEndpointList = new VirtualMachineNicListIpEndpointListStructList(this, "ip_endpoint_list", false);
  public get ipEndpointList() {
    return this._ipEndpointList;
  }
  public putIpEndpointList(value: VirtualMachineNicListIpEndpointListStruct[] | cdktf.IResolvable) {
    this._ipEndpointList.internalValue = value;
  }
  public resetIpEndpointList() {
    this._ipEndpointList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndpointListInput() {
    return this._ipEndpointList.internalValue;
  }
}

export class VirtualMachineNicListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineNicListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineNicListStructOutputReference {
    return new VirtualMachineNicListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineSerialPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#index VirtualMachine#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#is_connected VirtualMachine#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
}

export function virtualMachineSerialPortListStructToTerraform(struct?: VirtualMachineSerialPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    is_connected: cdktf.booleanToTerraform(struct!.isConnected),
  }
}


export function virtualMachineSerialPortListStructToHclTerraform(struct?: VirtualMachineSerialPortListStruct | cdktf.IResolvable): any {
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

export class VirtualMachineSerialPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineSerialPortListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineSerialPortListStruct | cdktf.IResolvable | undefined) {
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

export class VirtualMachineSerialPortListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineSerialPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineSerialPortListStructOutputReference {
    return new VirtualMachineSerialPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#create VirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#delete VirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#update VirtualMachine#update}
  */
  readonly update?: string;
}

export function virtualMachineTimeoutsToTerraform(struct?: VirtualMachineTimeouts | cdktf.IResolvable): any {
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


export function virtualMachineTimeoutsToHclTerraform(struct?: VirtualMachineTimeouts | cdktf.IResolvable): any {
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

export class VirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine nutanix_virtual_machine}
*/
export class VirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachine to import
  * @param importFromId The id of the existing VirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/virtual_machine nutanix_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_virtual_machine',
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
    this._availabilityZoneReference = config.availabilityZoneReference;
    this._bootDeviceDiskAddress = config.bootDeviceDiskAddress;
    this._bootDeviceMacAddress = config.bootDeviceMacAddress;
    this._bootDeviceOrderList = config.bootDeviceOrderList;
    this._bootType = config.bootType;
    this._cloudInitCdromUuid = config.cloudInitCdromUuid;
    this._clusterUuid = config.clusterUuid;
    this._description = config.description;
    this._enableCpuPassthrough = config.enableCpuPassthrough;
    this._enableScriptExec = config.enableScriptExec;
    this._guestCustomizationCloudInitCustomKeyValues = config.guestCustomizationCloudInitCustomKeyValues;
    this._guestCustomizationCloudInitMetaData = config.guestCustomizationCloudInitMetaData;
    this._guestCustomizationCloudInitUserData = config.guestCustomizationCloudInitUserData;
    this._guestCustomizationIsOverridable = config.guestCustomizationIsOverridable;
    this._guestCustomizationSysprep = config.guestCustomizationSysprep;
    this._guestCustomizationSysprepCustomKeyValues = config.guestCustomizationSysprepCustomKeyValues;
    this._guestOsId = config.guestOsId;
    this._hardwareClockTimezone = config.hardwareClockTimezone;
    this._id = config.id;
    this._isVcpuHardPinned = config.isVcpuHardPinned;
    this._machineType = config.machineType;
    this._memorySizeMib = config.memorySizeMib;
    this._name = config.name;
    this._ngtCredentials = config.ngtCredentials;
    this._ngtEnabledCapabilityList = config.ngtEnabledCapabilityList;
    this._numSockets = config.numSockets;
    this._numVcpusPerSocket = config.numVcpusPerSocket;
    this._numVnumaNodes = config.numVnumaNodes;
    this._nutanixGuestTools = config.nutanixGuestTools;
    this._ownerReference = config.ownerReference;
    this._parentReference = config.parentReference;
    this._powerState = config.powerState;
    this._powerStateMechanism = config.powerStateMechanism;
    this._projectReference = config.projectReference;
    this._shouldFailOnScriptFailure = config.shouldFailOnScriptFailure;
    this._useHotAdd = config.useHotAdd;
    this._vgaConsoleEnabled = config.vgaConsoleEnabled;
    this._categories.internalValue = config.categories;
    this._diskList.internalValue = config.diskList;
    this._gpuList.internalValue = config.gpuList;
    this._nicList.internalValue = config.nicList;
    this._serialPortList.internalValue = config.serialPortList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // availability_zone_reference - computed: true, optional: true, required: false
  private _availabilityZoneReference?: { [key: string]: string }; 
  public get availabilityZoneReference() {
    return this.getStringMapAttribute('availability_zone_reference');
  }
  public set availabilityZoneReference(value: { [key: string]: string }) {
    this._availabilityZoneReference = value;
  }
  public resetAvailabilityZoneReference() {
    this._availabilityZoneReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneReferenceInput() {
    return this._availabilityZoneReference;
  }

  // boot_device_disk_address - computed: true, optional: true, required: false
  private _bootDeviceDiskAddress?: { [key: string]: string }; 
  public get bootDeviceDiskAddress() {
    return this.getStringMapAttribute('boot_device_disk_address');
  }
  public set bootDeviceDiskAddress(value: { [key: string]: string }) {
    this._bootDeviceDiskAddress = value;
  }
  public resetBootDeviceDiskAddress() {
    this._bootDeviceDiskAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskAddressInput() {
    return this._bootDeviceDiskAddress;
  }

  // boot_device_mac_address - computed: true, optional: true, required: false
  private _bootDeviceMacAddress?: string; 
  public get bootDeviceMacAddress() {
    return this.getStringAttribute('boot_device_mac_address');
  }
  public set bootDeviceMacAddress(value: string) {
    this._bootDeviceMacAddress = value;
  }
  public resetBootDeviceMacAddress() {
    this._bootDeviceMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceMacAddressInput() {
    return this._bootDeviceMacAddress;
  }

  // boot_device_order_list - computed: true, optional: true, required: false
  private _bootDeviceOrderList?: string[]; 
  public get bootDeviceOrderList() {
    return this.getListAttribute('boot_device_order_list');
  }
  public set bootDeviceOrderList(value: string[]) {
    this._bootDeviceOrderList = value;
  }
  public resetBootDeviceOrderList() {
    this._bootDeviceOrderList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceOrderListInput() {
    return this._bootDeviceOrderList;
  }

  // boot_type - computed: true, optional: true, required: false
  private _bootType?: string; 
  public get bootType() {
    return this.getStringAttribute('boot_type');
  }
  public set bootType(value: string) {
    this._bootType = value;
  }
  public resetBootType() {
    this._bootType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootTypeInput() {
    return this._bootType;
  }

  // cloud_init_cdrom_uuid - computed: true, optional: true, required: false
  private _cloudInitCdromUuid?: string; 
  public get cloudInitCdromUuid() {
    return this.getStringAttribute('cloud_init_cdrom_uuid');
  }
  public set cloudInitCdromUuid(value: string) {
    this._cloudInitCdromUuid = value;
  }
  public resetCloudInitCdromUuid() {
    this._cloudInitCdromUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitCdromUuidInput() {
    return this._cloudInitCdromUuid;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_uuid - computed: false, optional: false, required: true
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
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

  // enable_cpu_passthrough - computed: false, optional: true, required: false
  private _enableCpuPassthrough?: boolean | cdktf.IResolvable; 
  public get enableCpuPassthrough() {
    return this.getBooleanAttribute('enable_cpu_passthrough');
  }
  public set enableCpuPassthrough(value: boolean | cdktf.IResolvable) {
    this._enableCpuPassthrough = value;
  }
  public resetEnableCpuPassthrough() {
    this._enableCpuPassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCpuPassthroughInput() {
    return this._enableCpuPassthrough;
  }

  // enable_script_exec - computed: true, optional: true, required: false
  private _enableScriptExec?: boolean | cdktf.IResolvable; 
  public get enableScriptExec() {
    return this.getBooleanAttribute('enable_script_exec');
  }
  public set enableScriptExec(value: boolean | cdktf.IResolvable) {
    this._enableScriptExec = value;
  }
  public resetEnableScriptExec() {
    this._enableScriptExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScriptExecInput() {
    return this._enableScriptExec;
  }

  // guest_customization_cloud_init_custom_key_values - computed: true, optional: true, required: false
  private _guestCustomizationCloudInitCustomKeyValues?: { [key: string]: string }; 
  public get guestCustomizationCloudInitCustomKeyValues() {
    return this.getStringMapAttribute('guest_customization_cloud_init_custom_key_values');
  }
  public set guestCustomizationCloudInitCustomKeyValues(value: { [key: string]: string }) {
    this._guestCustomizationCloudInitCustomKeyValues = value;
  }
  public resetGuestCustomizationCloudInitCustomKeyValues() {
    this._guestCustomizationCloudInitCustomKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationCloudInitCustomKeyValuesInput() {
    return this._guestCustomizationCloudInitCustomKeyValues;
  }

  // guest_customization_cloud_init_meta_data - computed: true, optional: true, required: false
  private _guestCustomizationCloudInitMetaData?: string; 
  public get guestCustomizationCloudInitMetaData() {
    return this.getStringAttribute('guest_customization_cloud_init_meta_data');
  }
  public set guestCustomizationCloudInitMetaData(value: string) {
    this._guestCustomizationCloudInitMetaData = value;
  }
  public resetGuestCustomizationCloudInitMetaData() {
    this._guestCustomizationCloudInitMetaData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationCloudInitMetaDataInput() {
    return this._guestCustomizationCloudInitMetaData;
  }

  // guest_customization_cloud_init_user_data - computed: true, optional: true, required: false
  private _guestCustomizationCloudInitUserData?: string; 
  public get guestCustomizationCloudInitUserData() {
    return this.getStringAttribute('guest_customization_cloud_init_user_data');
  }
  public set guestCustomizationCloudInitUserData(value: string) {
    this._guestCustomizationCloudInitUserData = value;
  }
  public resetGuestCustomizationCloudInitUserData() {
    this._guestCustomizationCloudInitUserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationCloudInitUserDataInput() {
    return this._guestCustomizationCloudInitUserData;
  }

  // guest_customization_is_overridable - computed: true, optional: true, required: false
  private _guestCustomizationIsOverridable?: boolean | cdktf.IResolvable; 
  public get guestCustomizationIsOverridable() {
    return this.getBooleanAttribute('guest_customization_is_overridable');
  }
  public set guestCustomizationIsOverridable(value: boolean | cdktf.IResolvable) {
    this._guestCustomizationIsOverridable = value;
  }
  public resetGuestCustomizationIsOverridable() {
    this._guestCustomizationIsOverridable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationIsOverridableInput() {
    return this._guestCustomizationIsOverridable;
  }

  // guest_customization_sysprep - computed: true, optional: true, required: false
  private _guestCustomizationSysprep?: { [key: string]: string }; 
  public get guestCustomizationSysprep() {
    return this.getStringMapAttribute('guest_customization_sysprep');
  }
  public set guestCustomizationSysprep(value: { [key: string]: string }) {
    this._guestCustomizationSysprep = value;
  }
  public resetGuestCustomizationSysprep() {
    this._guestCustomizationSysprep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationSysprepInput() {
    return this._guestCustomizationSysprep;
  }

  // guest_customization_sysprep_custom_key_values - computed: true, optional: true, required: false
  private _guestCustomizationSysprepCustomKeyValues?: { [key: string]: string }; 
  public get guestCustomizationSysprepCustomKeyValues() {
    return this.getStringMapAttribute('guest_customization_sysprep_custom_key_values');
  }
  public set guestCustomizationSysprepCustomKeyValues(value: { [key: string]: string }) {
    this._guestCustomizationSysprepCustomKeyValues = value;
  }
  public resetGuestCustomizationSysprepCustomKeyValues() {
    this._guestCustomizationSysprepCustomKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationSysprepCustomKeyValuesInput() {
    return this._guestCustomizationSysprepCustomKeyValues;
  }

  // guest_os_id - computed: true, optional: true, required: false
  private _guestOsId?: string; 
  public get guestOsId() {
    return this.getStringAttribute('guest_os_id');
  }
  public set guestOsId(value: string) {
    this._guestOsId = value;
  }
  public resetGuestOsId() {
    this._guestOsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsIdInput() {
    return this._guestOsId;
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

  // host_reference - computed: true, optional: false, required: false
  private _hostReference = new cdktf.StringMap(this, "host_reference");
  public get hostReference() {
    return this._hostReference;
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
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

  // is_vcpu_hard_pinned - computed: false, optional: true, required: false
  private _isVcpuHardPinned?: boolean | cdktf.IResolvable; 
  public get isVcpuHardPinned() {
    return this.getBooleanAttribute('is_vcpu_hard_pinned');
  }
  public set isVcpuHardPinned(value: boolean | cdktf.IResolvable) {
    this._isVcpuHardPinned = value;
  }
  public resetIsVcpuHardPinned() {
    this._isVcpuHardPinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVcpuHardPinnedInput() {
    return this._isVcpuHardPinned;
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

  // memory_size_mib - computed: true, optional: true, required: false
  private _memorySizeMib?: number; 
  public get memorySizeMib() {
    return this.getNumberAttribute('memory_size_mib');
  }
  public set memorySizeMib(value: number) {
    this._memorySizeMib = value;
  }
  public resetMemorySizeMib() {
    this._memorySizeMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeMibInput() {
    return this._memorySizeMib;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
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

  // ngt_credentials - computed: true, optional: true, required: false
  private _ngtCredentials?: { [key: string]: string }; 
  public get ngtCredentials() {
    return this.getStringMapAttribute('ngt_credentials');
  }
  public set ngtCredentials(value: { [key: string]: string }) {
    this._ngtCredentials = value;
  }
  public resetNgtCredentials() {
    this._ngtCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngtCredentialsInput() {
    return this._ngtCredentials;
  }

  // ngt_enabled_capability_list - computed: true, optional: true, required: false
  private _ngtEnabledCapabilityList?: string[]; 
  public get ngtEnabledCapabilityList() {
    return this.getListAttribute('ngt_enabled_capability_list');
  }
  public set ngtEnabledCapabilityList(value: string[]) {
    this._ngtEnabledCapabilityList = value;
  }
  public resetNgtEnabledCapabilityList() {
    this._ngtEnabledCapabilityList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngtEnabledCapabilityListInput() {
    return this._ngtEnabledCapabilityList;
  }

  // nic_list_status - computed: true, optional: false, required: false
  private _nicListStatus = new VirtualMachineNicListStatusList(this, "nic_list_status", false);
  public get nicListStatus() {
    return this._nicListStatus;
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

  // num_vcpus_per_socket - computed: true, optional: true, required: false
  private _numVcpusPerSocket?: number; 
  public get numVcpusPerSocket() {
    return this.getNumberAttribute('num_vcpus_per_socket');
  }
  public set numVcpusPerSocket(value: number) {
    this._numVcpusPerSocket = value;
  }
  public resetNumVcpusPerSocket() {
    this._numVcpusPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVcpusPerSocketInput() {
    return this._numVcpusPerSocket;
  }

  // num_vnuma_nodes - computed: true, optional: true, required: false
  private _numVnumaNodes?: number; 
  public get numVnumaNodes() {
    return this.getNumberAttribute('num_vnuma_nodes');
  }
  public set numVnumaNodes(value: number) {
    this._numVnumaNodes = value;
  }
  public resetNumVnumaNodes() {
    this._numVnumaNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVnumaNodesInput() {
    return this._numVnumaNodes;
  }

  // nutanix_guest_tools - computed: true, optional: true, required: false
  private _nutanixGuestTools?: { [key: string]: string }; 
  public get nutanixGuestTools() {
    return this.getStringMapAttribute('nutanix_guest_tools');
  }
  public set nutanixGuestTools(value: { [key: string]: string }) {
    this._nutanixGuestTools = value;
  }
  public resetNutanixGuestTools() {
    this._nutanixGuestTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nutanixGuestToolsInput() {
    return this._nutanixGuestTools;
  }

  // owner_reference - computed: true, optional: true, required: false
  private _ownerReference?: { [key: string]: string }; 
  public get ownerReference() {
    return this.getStringMapAttribute('owner_reference');
  }
  public set ownerReference(value: { [key: string]: string }) {
    this._ownerReference = value;
  }
  public resetOwnerReference() {
    this._ownerReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceInput() {
    return this._ownerReference;
  }

  // parent_reference - computed: true, optional: true, required: false
  private _parentReference?: { [key: string]: string }; 
  public get parentReference() {
    return this.getStringMapAttribute('parent_reference');
  }
  public set parentReference(value: { [key: string]: string }) {
    this._parentReference = value;
  }
  public resetParentReference() {
    this._parentReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentReferenceInput() {
    return this._parentReference;
  }

  // power_state - computed: true, optional: true, required: false
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

  // power_state_mechanism - computed: true, optional: true, required: false
  private _powerStateMechanism?: string; 
  public get powerStateMechanism() {
    return this.getStringAttribute('power_state_mechanism');
  }
  public set powerStateMechanism(value: string) {
    this._powerStateMechanism = value;
  }
  public resetPowerStateMechanism() {
    this._powerStateMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateMechanismInput() {
    return this._powerStateMechanism;
  }

  // project_reference - computed: true, optional: true, required: false
  private _projectReference?: { [key: string]: string }; 
  public get projectReference() {
    return this.getStringMapAttribute('project_reference');
  }
  public set projectReference(value: { [key: string]: string }) {
    this._projectReference = value;
  }
  public resetProjectReference() {
    this._projectReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceInput() {
    return this._projectReference;
  }

  // should_fail_on_script_failure - computed: true, optional: true, required: false
  private _shouldFailOnScriptFailure?: boolean | cdktf.IResolvable; 
  public get shouldFailOnScriptFailure() {
    return this.getBooleanAttribute('should_fail_on_script_failure');
  }
  public set shouldFailOnScriptFailure(value: boolean | cdktf.IResolvable) {
    this._shouldFailOnScriptFailure = value;
  }
  public resetShouldFailOnScriptFailure() {
    this._shouldFailOnScriptFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldFailOnScriptFailureInput() {
    return this._shouldFailOnScriptFailure;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // use_hot_add - computed: false, optional: true, required: false
  private _useHotAdd?: boolean | cdktf.IResolvable; 
  public get useHotAdd() {
    return this.getBooleanAttribute('use_hot_add');
  }
  public set useHotAdd(value: boolean | cdktf.IResolvable) {
    this._useHotAdd = value;
  }
  public resetUseHotAdd() {
    this._useHotAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHotAddInput() {
    return this._useHotAdd;
  }

  // vga_console_enabled - computed: true, optional: true, required: false
  private _vgaConsoleEnabled?: boolean | cdktf.IResolvable; 
  public get vgaConsoleEnabled() {
    return this.getBooleanAttribute('vga_console_enabled');
  }
  public set vgaConsoleEnabled(value: boolean | cdktf.IResolvable) {
    this._vgaConsoleEnabled = value;
  }
  public resetVgaConsoleEnabled() {
    this._vgaConsoleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgaConsoleEnabledInput() {
    return this._vgaConsoleEnabled;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new VirtualMachineCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: VirtualMachineCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // disk_list - computed: false, optional: true, required: false
  private _diskList = new VirtualMachineDiskListStructList(this, "disk_list", false);
  public get diskList() {
    return this._diskList;
  }
  public putDiskList(value: VirtualMachineDiskListStruct[] | cdktf.IResolvable) {
    this._diskList.internalValue = value;
  }
  public resetDiskList() {
    this._diskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskListInput() {
    return this._diskList.internalValue;
  }

  // gpu_list - computed: false, optional: true, required: false
  private _gpuList = new VirtualMachineGpuListStructList(this, "gpu_list", false);
  public get gpuList() {
    return this._gpuList;
  }
  public putGpuList(value: VirtualMachineGpuListStruct[] | cdktf.IResolvable) {
    this._gpuList.internalValue = value;
  }
  public resetGpuList() {
    this._gpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuListInput() {
    return this._gpuList.internalValue;
  }

  // nic_list - computed: false, optional: true, required: false
  private _nicList = new VirtualMachineNicListStructList(this, "nic_list", false);
  public get nicList() {
    return this._nicList;
  }
  public putNicList(value: VirtualMachineNicListStruct[] | cdktf.IResolvable) {
    this._nicList.internalValue = value;
  }
  public resetNicList() {
    this._nicList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicListInput() {
    return this._nicList.internalValue;
  }

  // serial_port_list - computed: false, optional: true, required: false
  private _serialPortList = new VirtualMachineSerialPortListStructList(this, "serial_port_list", false);
  public get serialPortList() {
    return this._serialPortList;
  }
  public putSerialPortList(value: VirtualMachineSerialPortListStruct[] | cdktf.IResolvable) {
    this._serialPortList.internalValue = value;
  }
  public resetSerialPortList() {
    this._serialPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPortListInput() {
    return this._serialPortList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineTimeouts) {
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
      availability_zone_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._availabilityZoneReference),
      boot_device_disk_address: cdktf.hashMapper(cdktf.stringToTerraform)(this._bootDeviceDiskAddress),
      boot_device_mac_address: cdktf.stringToTerraform(this._bootDeviceMacAddress),
      boot_device_order_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bootDeviceOrderList),
      boot_type: cdktf.stringToTerraform(this._bootType),
      cloud_init_cdrom_uuid: cdktf.stringToTerraform(this._cloudInitCdromUuid),
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      description: cdktf.stringToTerraform(this._description),
      enable_cpu_passthrough: cdktf.booleanToTerraform(this._enableCpuPassthrough),
      enable_script_exec: cdktf.booleanToTerraform(this._enableScriptExec),
      guest_customization_cloud_init_custom_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._guestCustomizationCloudInitCustomKeyValues),
      guest_customization_cloud_init_meta_data: cdktf.stringToTerraform(this._guestCustomizationCloudInitMetaData),
      guest_customization_cloud_init_user_data: cdktf.stringToTerraform(this._guestCustomizationCloudInitUserData),
      guest_customization_is_overridable: cdktf.booleanToTerraform(this._guestCustomizationIsOverridable),
      guest_customization_sysprep: cdktf.hashMapper(cdktf.stringToTerraform)(this._guestCustomizationSysprep),
      guest_customization_sysprep_custom_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._guestCustomizationSysprepCustomKeyValues),
      guest_os_id: cdktf.stringToTerraform(this._guestOsId),
      hardware_clock_timezone: cdktf.stringToTerraform(this._hardwareClockTimezone),
      id: cdktf.stringToTerraform(this._id),
      is_vcpu_hard_pinned: cdktf.booleanToTerraform(this._isVcpuHardPinned),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory_size_mib: cdktf.numberToTerraform(this._memorySizeMib),
      name: cdktf.stringToTerraform(this._name),
      ngt_credentials: cdktf.hashMapper(cdktf.stringToTerraform)(this._ngtCredentials),
      ngt_enabled_capability_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ngtEnabledCapabilityList),
      num_sockets: cdktf.numberToTerraform(this._numSockets),
      num_vcpus_per_socket: cdktf.numberToTerraform(this._numVcpusPerSocket),
      num_vnuma_nodes: cdktf.numberToTerraform(this._numVnumaNodes),
      nutanix_guest_tools: cdktf.hashMapper(cdktf.stringToTerraform)(this._nutanixGuestTools),
      owner_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._ownerReference),
      parent_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._parentReference),
      power_state: cdktf.stringToTerraform(this._powerState),
      power_state_mechanism: cdktf.stringToTerraform(this._powerStateMechanism),
      project_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._projectReference),
      should_fail_on_script_failure: cdktf.booleanToTerraform(this._shouldFailOnScriptFailure),
      use_hot_add: cdktf.booleanToTerraform(this._useHotAdd),
      vga_console_enabled: cdktf.booleanToTerraform(this._vgaConsoleEnabled),
      categories: cdktf.listMapper(virtualMachineCategoriesToTerraform, true)(this._categories.internalValue),
      disk_list: cdktf.listMapper(virtualMachineDiskListStructToTerraform, true)(this._diskList.internalValue),
      gpu_list: cdktf.listMapper(virtualMachineGpuListStructToTerraform, true)(this._gpuList.internalValue),
      nic_list: cdktf.listMapper(virtualMachineNicListStructToTerraform, true)(this._nicList.internalValue),
      serial_port_list: cdktf.listMapper(virtualMachineSerialPortListStructToTerraform, true)(this._serialPortList.internalValue),
      timeouts: virtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._availabilityZoneReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      boot_device_disk_address: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bootDeviceDiskAddress),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      boot_device_mac_address: {
        value: cdktf.stringToHclTerraform(this._bootDeviceMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_device_order_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bootDeviceOrderList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      boot_type: {
        value: cdktf.stringToHclTerraform(this._bootType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_init_cdrom_uuid: {
        value: cdktf.stringToHclTerraform(this._cloudInitCdromUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
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
      enable_cpu_passthrough: {
        value: cdktf.booleanToHclTerraform(this._enableCpuPassthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_script_exec: {
        value: cdktf.booleanToHclTerraform(this._enableScriptExec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_customization_cloud_init_custom_key_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._guestCustomizationCloudInitCustomKeyValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      guest_customization_cloud_init_meta_data: {
        value: cdktf.stringToHclTerraform(this._guestCustomizationCloudInitMetaData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_customization_cloud_init_user_data: {
        value: cdktf.stringToHclTerraform(this._guestCustomizationCloudInitUserData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_customization_is_overridable: {
        value: cdktf.booleanToHclTerraform(this._guestCustomizationIsOverridable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_customization_sysprep: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._guestCustomizationSysprep),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      guest_customization_sysprep_custom_key_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._guestCustomizationSysprepCustomKeyValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      guest_os_id: {
        value: cdktf.stringToHclTerraform(this._guestOsId),
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
      is_vcpu_hard_pinned: {
        value: cdktf.booleanToHclTerraform(this._isVcpuHardPinned),
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
      memory_size_mib: {
        value: cdktf.numberToHclTerraform(this._memorySizeMib),
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
      ngt_credentials: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ngtCredentials),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ngt_enabled_capability_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ngtEnabledCapabilityList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      num_sockets: {
        value: cdktf.numberToHclTerraform(this._numSockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_vcpus_per_socket: {
        value: cdktf.numberToHclTerraform(this._numVcpusPerSocket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_vnuma_nodes: {
        value: cdktf.numberToHclTerraform(this._numVnumaNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nutanix_guest_tools: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nutanixGuestTools),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      owner_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ownerReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      parent_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parentReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      power_state: {
        value: cdktf.stringToHclTerraform(this._powerState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_state_mechanism: {
        value: cdktf.stringToHclTerraform(this._powerStateMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._projectReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      should_fail_on_script_failure: {
        value: cdktf.booleanToHclTerraform(this._shouldFailOnScriptFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_hot_add: {
        value: cdktf.booleanToHclTerraform(this._useHotAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vga_console_enabled: {
        value: cdktf.booleanToHclTerraform(this._vgaConsoleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      categories: {
        value: cdktf.listMapperHcl(virtualMachineCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineCategoriesList",
      },
      disk_list: {
        value: cdktf.listMapperHcl(virtualMachineDiskListStructToHclTerraform, true)(this._diskList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineDiskListStructList",
      },
      gpu_list: {
        value: cdktf.listMapperHcl(virtualMachineGpuListStructToHclTerraform, true)(this._gpuList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineGpuListStructList",
      },
      nic_list: {
        value: cdktf.listMapperHcl(virtualMachineNicListStructToHclTerraform, true)(this._nicList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineNicListStructList",
      },
      serial_port_list: {
        value: cdktf.listMapperHcl(virtualMachineSerialPortListStructToHclTerraform, true)(this._serialPortList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineSerialPortListStructList",
      },
      timeouts: {
        value: virtualMachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
