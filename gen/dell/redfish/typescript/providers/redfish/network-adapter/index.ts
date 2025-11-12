// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAdapterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply time of the `network_attributes` and `oem_network_attributes`. (Update Supported)Accepted values: `Immediate`, `OnReset`, `AtMaintenanceWindowStart`, `InMaintenanceWindowOnReset`. Immediate: allows the user to immediately reboot the host and apply the changes. This is only applicable for `oem_network_attributes`.OnReset: allows the user to apply the changes on the next reboot of the host server.AtMaintenanceWindowStart: allows the user to apply at the start of a maintenance window as specified in `maintenance_window`.InMaintenanceWindowOnReset: allows to apply after a manual reset but within the maintenance window as specified in `maintenance_window`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#apply_time NetworkAdapter#apply_time}
  */
  readonly applyTime: string;
  /**
  * `job_timeout` is the time in seconds that the provider waits for the resource update job to becompleted before timing out. (Update Supported) Default value is 1200 seconds.`job_timeout` is applicable only when `apply_time` is `Immediate` or `OnReset`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#job_timeout NetworkAdapter#job_timeout}
  */
  readonly jobTimeout?: number;
  /**
  * This option allows you to schedule the maintenance window. (Update Supported)This is required when `apply_time` is `AtMaintenanceWindowStart` or `InMaintenanceWindowOnReset` .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#maintenance_window NetworkAdapter#maintenance_window}
  */
  readonly maintenanceWindow?: NetworkAdapterMaintenanceWindow;
  /**
  * ID of the network adapter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#network_adapter_id NetworkAdapter#network_adapter_id}
  */
  readonly networkAdapterId: string;
  /**
  * Dictionary of network attributes and value for network device function. (Update Supported)To check allowed attributes please either use the datasource for dell nic attributes: data.redfish_network or query /redfish/v1/Systems/System.Embedded.1/NetworkAdapters/{NetworkAdapterID}/NetworkDeviceFunctions/{NetworkDeviceFunctionID}/Settings. Note: `oem_network_attributes` is mutually exclusive with `network_attributes`. Please update one of network_attributes or oem_network_attributes at a time.NOTE: Updating network_attributes property may result with an error stating the property is Read-only. This may occur if Patch method is performed to change the property to the state that the property is already in or because there is dependency of attribute values. For example, if CHAP is disabled, MutualChap becomes a Read-only attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#network_attributes NetworkAdapter#network_attributes}
  */
  readonly networkAttributes?: NetworkAdapterNetworkAttributes;
  /**
  * ID of the network device function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#network_device_function_id NetworkAdapter#network_device_function_id}
  */
  readonly networkDeviceFunctionId: string;
  /**
  * oem_network_attributes to configure dell network attributes and clear pending action. (Update Supported) Note: `oem_network_attributes` is mutually exclusive with `network_attributes`. Please update one of network_attributes or oem_network_attributes at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#oem_network_attributes NetworkAdapter#oem_network_attributes}
  */
  readonly oemNetworkAttributes?: NetworkAdapterOemNetworkAttributes;
  /**
  * Reset Timeout. Default value is 120 seconds. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#reset_timeout NetworkAdapter#reset_timeout}
  */
  readonly resetTimeout?: number;
  /**
  * Reset Type. (Update Supported) Accepted values: `ForceRestart`, `GracefulRestart`, `PowerCycle`. Default value is `ForceRestart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#reset_type NetworkAdapter#reset_type}
  */
  readonly resetType?: string;
  /**
  * ID of the system resource. If the value for system ID is not provided, the resource picks the first system available from the iDRAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#system_id NetworkAdapter#system_id}
  */
  readonly systemId?: string;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#redfish_server NetworkAdapter#redfish_server}
  */
  readonly redfishServer?: NetworkAdapterRedfishServer[] | cdktf.IResolvable;
}
export interface NetworkAdapterMaintenanceWindow {
  /**
  * The duration in seconds for the maintenance window. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#duration NetworkAdapter#duration}
  */
  readonly duration: number;
  /**
  * The start time for the maintenance window to be scheduled. (Update Supported)The format is YYYY-MM-DDThh:mm:ss<offset>. <offset> is the time offset from UTC that the current timezone set in iDRAC in the format: +05:30 for IST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#start_time NetworkAdapter#start_time}
  */
  readonly startTime: string;
}

export function networkAdapterMaintenanceWindowToTerraform(struct?: NetworkAdapterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function networkAdapterMaintenanceWindowToHclTerraform(struct?: NetworkAdapterMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._startTime = value.startTime;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface NetworkAdapterNetworkAttributesEthernetVlan {
  /**
  * An indication of whether the VLAN is enabled. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#vlan_enabled NetworkAdapter#vlan_enabled}
  */
  readonly vlanEnabled?: boolean | cdktf.IResolvable;
  /**
  * The vlan id of the network device function. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#vlan_id NetworkAdapter#vlan_id}
  */
  readonly vlanId?: number;
}

export function networkAdapterNetworkAttributesEthernetVlanToTerraform(struct?: NetworkAdapterNetworkAttributesEthernetVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_enabled: cdktf.booleanToTerraform(struct!.vlanEnabled),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function networkAdapterNetworkAttributesEthernetVlanToHclTerraform(struct?: NetworkAdapterNetworkAttributesEthernetVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vlanEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class NetworkAdapterNetworkAttributesEthernetVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterNetworkAttributesEthernetVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanEnabled = this._vlanEnabled;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterNetworkAttributesEthernetVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanEnabled = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanEnabled = value.vlanEnabled;
      this._vlanId = value.vlanId;
    }
  }

  // vlan_enabled - computed: true, optional: true, required: false
  private _vlanEnabled?: boolean | cdktf.IResolvable; 
  public get vlanEnabled() {
    return this.getBooleanAttribute('vlan_enabled');
  }
  public set vlanEnabled(value: boolean | cdktf.IResolvable) {
    this._vlanEnabled = value;
  }
  public resetVlanEnabled() {
    this._vlanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEnabledInput() {
    return this._vlanEnabled;
  }

  // vlan_id - computed: true, optional: true, required: false
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
export interface NetworkAdapterNetworkAttributesEthernet {
  /**
  * The currently configured MAC address. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#mac_address NetworkAdapter#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The maximum transmission unit (MTU) configured for this network device function. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#mtu_size NetworkAdapter#mtu_size}
  */
  readonly mtuSize?: number;
  /**
  * The attributes of a VLAN. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#vlan NetworkAdapter#vlan}
  */
  readonly vlan?: NetworkAdapterNetworkAttributesEthernetVlan;
}

export function networkAdapterNetworkAttributesEthernetToTerraform(struct?: NetworkAdapterNetworkAttributesEthernet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mtu_size: cdktf.numberToTerraform(struct!.mtuSize),
    vlan: networkAdapterNetworkAttributesEthernetVlanToTerraform(struct!.vlan),
  }
}


export function networkAdapterNetworkAttributesEthernetToHclTerraform(struct?: NetworkAdapterNetworkAttributesEthernet | cdktf.IResolvable): any {
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
    mtu_size: {
      value: cdktf.numberToHclTerraform(struct!.mtuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: networkAdapterNetworkAttributesEthernetVlanToHclTerraform(struct!.vlan),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkAdapterNetworkAttributesEthernetVlan",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterNetworkAttributesEthernetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterNetworkAttributesEthernet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._mtuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuSize = this._mtuSize;
    }
    if (this._vlan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterNetworkAttributesEthernet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
      this._mtuSize = undefined;
      this._vlan.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
      this._mtuSize = value.mtuSize;
      this._vlan.internalValue = value.vlan;
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

  // mtu_size - computed: true, optional: true, required: false
  private _mtuSize?: number; 
  public get mtuSize() {
    return this.getNumberAttribute('mtu_size');
  }
  public set mtuSize(value: number) {
    this._mtuSize = value;
  }
  public resetMtuSize() {
    this._mtuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuSizeInput() {
    return this._mtuSize;
  }

  // permanent_mac_address - computed: true, optional: false, required: false
  public get permanentMacAddress() {
    return this.getStringAttribute('permanent_mac_address');
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan = new NetworkAdapterNetworkAttributesEthernetVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: NetworkAdapterNetworkAttributesEthernetVlan) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }
}
export interface NetworkAdapterNetworkAttributesFibreChannelBootTargets {
  /**
  * The relative priority for this entry in the boot targets array. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#boot_priority NetworkAdapter#boot_priority}
  */
  readonly bootPriority?: number;
  /**
  * The logical unit number (LUN) ID from which to boot on the device to which the corresponding WWPN refers. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#lun_id NetworkAdapter#lun_id}
  */
  readonly lunId?: string;
  /**
  * The World Wide Port Name (WWPN) from which to boot. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#wwpn NetworkAdapter#wwpn}
  */
  readonly wwpn?: string;
}

export function networkAdapterNetworkAttributesFibreChannelBootTargetsToTerraform(struct?: NetworkAdapterNetworkAttributesFibreChannelBootTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_priority: cdktf.numberToTerraform(struct!.bootPriority),
    lun_id: cdktf.stringToTerraform(struct!.lunId),
    wwpn: cdktf.stringToTerraform(struct!.wwpn),
  }
}


export function networkAdapterNetworkAttributesFibreChannelBootTargetsToHclTerraform(struct?: NetworkAdapterNetworkAttributesFibreChannelBootTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_priority: {
      value: cdktf.numberToHclTerraform(struct!.bootPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lun_id: {
      value: cdktf.stringToHclTerraform(struct!.lunId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwpn: {
      value: cdktf.stringToHclTerraform(struct!.wwpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterNetworkAttributesFibreChannelBootTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAdapterNetworkAttributesFibreChannelBootTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootPriority = this._bootPriority;
    }
    if (this._lunId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lunId = this._lunId;
    }
    if (this._wwpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwpn = this._wwpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterNetworkAttributesFibreChannelBootTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootPriority = undefined;
      this._lunId = undefined;
      this._wwpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootPriority = value.bootPriority;
      this._lunId = value.lunId;
      this._wwpn = value.wwpn;
    }
  }

  // boot_priority - computed: true, optional: true, required: false
  private _bootPriority?: number; 
  public get bootPriority() {
    return this.getNumberAttribute('boot_priority');
  }
  public set bootPriority(value: number) {
    this._bootPriority = value;
  }
  public resetBootPriority() {
    this._bootPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootPriorityInput() {
    return this._bootPriority;
  }

  // lun_id - computed: true, optional: true, required: false
  private _lunId?: string; 
  public get lunId() {
    return this.getStringAttribute('lun_id');
  }
  public set lunId(value: string) {
    this._lunId = value;
  }
  public resetLunId() {
    this._lunId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunIdInput() {
    return this._lunId;
  }

  // wwpn - computed: true, optional: true, required: false
  private _wwpn?: string; 
  public get wwpn() {
    return this.getStringAttribute('wwpn');
  }
  public set wwpn(value: string) {
    this._wwpn = value;
  }
  public resetWwpn() {
    this._wwpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwpnInput() {
    return this._wwpn;
  }
}

export class NetworkAdapterNetworkAttributesFibreChannelBootTargetsList extends cdktf.ComplexList {
  public internalValue? : NetworkAdapterNetworkAttributesFibreChannelBootTargets[] | cdktf.IResolvable

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
  public get(index: number): NetworkAdapterNetworkAttributesFibreChannelBootTargetsOutputReference {
    return new NetworkAdapterNetworkAttributesFibreChannelBootTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAdapterNetworkAttributesFibreChannel {
  /**
  * An indication of whether the FCoE Initialization Protocol (FIP) populates the FCoE VLAN ID. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#allow_fip_vlan_discovery NetworkAdapter#allow_fip_vlan_discovery}
  */
  readonly allowFipVlanDiscovery?: boolean | cdktf.IResolvable;
  /**
  * A Fibre Channel boot target configured for a network device function. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#boot_targets NetworkAdapter#boot_targets}
  */
  readonly bootTargets?: NetworkAdapterNetworkAttributesFibreChannelBootTargets[] | cdktf.IResolvable;
  /**
  * The locally configured FCoE VLAN ID. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#fcoe_local_vlan_id NetworkAdapter#fcoe_local_vlan_id}
  */
  readonly fcoeLocalVlanId?: number;
  /**
  * The configuration source of the World Wide Names (WWN) for this World Wide Node Name (WWNN) and World Wide Port Name (WWPN) connection. (Update Supported). Accepted values: `ConfiguredLocally`, `ProvidedByFabric`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#wwn_source NetworkAdapter#wwn_source}
  */
  readonly wwnSource?: string;
  /**
  * The currently configured World Wide Node Name (WWNN) address of this function. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#wwnn NetworkAdapter#wwnn}
  */
  readonly wwnn?: string;
  /**
  * The currently configured World Wide Port Name (WWPN) address of this function. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#wwpn NetworkAdapter#wwpn}
  */
  readonly wwpn?: string;
}

export function networkAdapterNetworkAttributesFibreChannelToTerraform(struct?: NetworkAdapterNetworkAttributesFibreChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_fip_vlan_discovery: cdktf.booleanToTerraform(struct!.allowFipVlanDiscovery),
    boot_targets: cdktf.listMapper(networkAdapterNetworkAttributesFibreChannelBootTargetsToTerraform, false)(struct!.bootTargets),
    fcoe_local_vlan_id: cdktf.numberToTerraform(struct!.fcoeLocalVlanId),
    wwn_source: cdktf.stringToTerraform(struct!.wwnSource),
    wwnn: cdktf.stringToTerraform(struct!.wwnn),
    wwpn: cdktf.stringToTerraform(struct!.wwpn),
  }
}


export function networkAdapterNetworkAttributesFibreChannelToHclTerraform(struct?: NetworkAdapterNetworkAttributesFibreChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_fip_vlan_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.allowFipVlanDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_targets: {
      value: cdktf.listMapperHcl(networkAdapterNetworkAttributesFibreChannelBootTargetsToHclTerraform, false)(struct!.bootTargets),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAdapterNetworkAttributesFibreChannelBootTargetsList",
    },
    fcoe_local_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.fcoeLocalVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wwn_source: {
      value: cdktf.stringToHclTerraform(struct!.wwnSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwnn: {
      value: cdktf.stringToHclTerraform(struct!.wwnn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wwpn: {
      value: cdktf.stringToHclTerraform(struct!.wwpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterNetworkAttributesFibreChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterNetworkAttributesFibreChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFipVlanDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFipVlanDiscovery = this._allowFipVlanDiscovery;
    }
    if (this._bootTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootTargets = this._bootTargets?.internalValue;
    }
    if (this._fcoeLocalVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fcoeLocalVlanId = this._fcoeLocalVlanId;
    }
    if (this._wwnSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnSource = this._wwnSource;
    }
    if (this._wwnn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwnn = this._wwnn;
    }
    if (this._wwpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwpn = this._wwpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterNetworkAttributesFibreChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFipVlanDiscovery = undefined;
      this._bootTargets.internalValue = undefined;
      this._fcoeLocalVlanId = undefined;
      this._wwnSource = undefined;
      this._wwnn = undefined;
      this._wwpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFipVlanDiscovery = value.allowFipVlanDiscovery;
      this._bootTargets.internalValue = value.bootTargets;
      this._fcoeLocalVlanId = value.fcoeLocalVlanId;
      this._wwnSource = value.wwnSource;
      this._wwnn = value.wwnn;
      this._wwpn = value.wwpn;
    }
  }

  // allow_fip_vlan_discovery - computed: true, optional: true, required: false
  private _allowFipVlanDiscovery?: boolean | cdktf.IResolvable; 
  public get allowFipVlanDiscovery() {
    return this.getBooleanAttribute('allow_fip_vlan_discovery');
  }
  public set allowFipVlanDiscovery(value: boolean | cdktf.IResolvable) {
    this._allowFipVlanDiscovery = value;
  }
  public resetAllowFipVlanDiscovery() {
    this._allowFipVlanDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFipVlanDiscoveryInput() {
    return this._allowFipVlanDiscovery;
  }

  // boot_targets - computed: true, optional: true, required: false
  private _bootTargets = new NetworkAdapterNetworkAttributesFibreChannelBootTargetsList(this, "boot_targets", false);
  public get bootTargets() {
    return this._bootTargets;
  }
  public putBootTargets(value: NetworkAdapterNetworkAttributesFibreChannelBootTargets[] | cdktf.IResolvable) {
    this._bootTargets.internalValue = value;
  }
  public resetBootTargets() {
    this._bootTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootTargetsInput() {
    return this._bootTargets.internalValue;
  }

  // fcoe_active_vlan_id - computed: true, optional: false, required: false
  public get fcoeActiveVlanId() {
    return this.getNumberAttribute('fcoe_active_vlan_id');
  }

  // fcoe_local_vlan_id - computed: true, optional: true, required: false
  private _fcoeLocalVlanId?: number; 
  public get fcoeLocalVlanId() {
    return this.getNumberAttribute('fcoe_local_vlan_id');
  }
  public set fcoeLocalVlanId(value: number) {
    this._fcoeLocalVlanId = value;
  }
  public resetFcoeLocalVlanId() {
    this._fcoeLocalVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcoeLocalVlanIdInput() {
    return this._fcoeLocalVlanId;
  }

  // fibre_channel_id - computed: true, optional: false, required: false
  public get fibreChannelId() {
    return this.getStringAttribute('fibre_channel_id');
  }

  // permanent_wwnn - computed: true, optional: false, required: false
  public get permanentWwnn() {
    return this.getStringAttribute('permanent_wwnn');
  }

  // permanent_wwpn - computed: true, optional: false, required: false
  public get permanentWwpn() {
    return this.getStringAttribute('permanent_wwpn');
  }

  // wwn_source - computed: true, optional: true, required: false
  private _wwnSource?: string; 
  public get wwnSource() {
    return this.getStringAttribute('wwn_source');
  }
  public set wwnSource(value: string) {
    this._wwnSource = value;
  }
  public resetWwnSource() {
    this._wwnSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnSourceInput() {
    return this._wwnSource;
  }

  // wwnn - computed: true, optional: true, required: false
  private _wwnn?: string; 
  public get wwnn() {
    return this.getStringAttribute('wwnn');
  }
  public set wwnn(value: string) {
    this._wwnn = value;
  }
  public resetWwnn() {
    this._wwnn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnnInput() {
    return this._wwnn;
  }

  // wwpn - computed: true, optional: true, required: false
  private _wwpn?: string; 
  public get wwpn() {
    return this.getStringAttribute('wwpn');
  }
  public set wwpn(value: string) {
    this._wwpn = value;
  }
  public resetWwpn() {
    this._wwpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwpnInput() {
    return this._wwpn;
  }
}
export interface NetworkAdapterNetworkAttributesIscsiBoot {
  /**
  * The iSCSI boot authentication method for this network device function. (Update Supported)Accepted values: `None`, `CHAP`, `MutualCHAP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#authentication_method NetworkAdapter#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * The shared secret for CHAP authentication. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#chap_secret NetworkAdapter#chap_secret}
  */
  readonly chapSecret?: string;
  /**
  * The user name for CHAP authentication. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#chap_username NetworkAdapter#chap_username}
  */
  readonly chapUsername?: string;
  /**
  * The IPv6 or IPv4 iSCSI boot default gateway. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#initiator_default_gateway NetworkAdapter#initiator_default_gateway}
  */
  readonly initiatorDefaultGateway?: string;
  /**
  * The IPv6 or IPv4 address of the iSCSI initiator. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#initiator_ip_address NetworkAdapter#initiator_ip_address}
  */
  readonly initiatorIpAddress?: string;
  /**
  * The iSCSI initiator name. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#initiator_name NetworkAdapter#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * The IPv6 or IPv4 netmask of the iSCSI boot initiator. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#initiator_netmask NetworkAdapter#initiator_netmask}
  */
  readonly initiatorNetmask?: string;
  /**
  * The type of IP address being populated in the iSCSIBoot IP address fields. (Update Supported) Accepted values: `IPv4`, `IPv6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#ip_address_type NetworkAdapter#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * An indication of whether the iSCSI boot initiator uses DHCP to obtain the initiator name, IP address, and netmask. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#ip_mask_dns_via_dhcp NetworkAdapter#ip_mask_dns_via_dhcp}
  */
  readonly ipMaskDnsViaDhcp?: boolean | cdktf.IResolvable;
  /**
  * The CHAP secret for two-way CHAP authentication. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#mutual_chap_secret NetworkAdapter#mutual_chap_secret}
  */
  readonly mutualChapSecret?: string;
  /**
  * The CHAP user name for two-way CHAP authentication. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#mutual_chap_username NetworkAdapter#mutual_chap_username}
  */
  readonly mutualChapUsername?: string;
  /**
  * The IPv6 or IPv4 address of the primary DNS server for the iSCSI boot initiator. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#primary_dns NetworkAdapter#primary_dns}
  */
  readonly primaryDns?: string;
  /**
  * The logical unit number (LUN) for the primary iSCSI boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#primary_lun NetworkAdapter#primary_lun}
  */
  readonly primaryLun?: number;
  /**
  * The IPv4 or IPv6 address for the primary iSCSI boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#primary_target_ip_address NetworkAdapter#primary_target_ip_address}
  */
  readonly primaryTargetIpAddress?: string;
  /**
  * The name of the iSCSI primary boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#primary_target_name NetworkAdapter#primary_target_name}
  */
  readonly primaryTargetName?: string;
  /**
  * The TCP port for the primary iSCSI boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#primary_target_tcp_port NetworkAdapter#primary_target_tcp_port}
  */
  readonly primaryTargetTcpPort?: number;
  /**
  * An indication of whether the primary VLAN is enabled. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#primary_vlan_enable NetworkAdapter#primary_vlan_enable}
  */
  readonly primaryVlanEnable?: boolean | cdktf.IResolvable;
  /**
  * The 802.1q VLAN ID to use for iSCSI boot from the primary target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#primary_vlan_id NetworkAdapter#primary_vlan_id}
  */
  readonly primaryVlanId?: number;
  /**
  * An indication of whether IPv6 router advertisement is enabled for the iSCSI boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#router_advertisement_enabled NetworkAdapter#router_advertisement_enabled}
  */
  readonly routerAdvertisementEnabled?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 or IPv4 address of the secondary DNS server for the iSCSI boot initiator. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#secondary_dns NetworkAdapter#secondary_dns}
  */
  readonly secondaryDns?: string;
  /**
  * The logical unit number (LUN) for the secondary iSCSI boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#secondary_lun NetworkAdapter#secondary_lun}
  */
  readonly secondaryLun?: number;
  /**
  * The IPv4 or IPv6 address for the secondary iSCSI boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#secondary_target_ip_address NetworkAdapter#secondary_target_ip_address}
  */
  readonly secondaryTargetIpAddress?: string;
  /**
  * The name of the iSCSI secondary boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#secondary_target_name NetworkAdapter#secondary_target_name}
  */
  readonly secondaryTargetName?: string;
  /**
  * The TCP port for the secondary iSCSI boot target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#secondary_target_tcp_port NetworkAdapter#secondary_target_tcp_port}
  */
  readonly secondaryTargetTcpPort?: number;
  /**
  * An indication of whether the secondary VLAN is enabled. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#secondary_vlan_enable NetworkAdapter#secondary_vlan_enable}
  */
  readonly secondaryVlanEnable?: boolean | cdktf.IResolvable;
  /**
  * The 802.1q VLAN ID to use for iSCSI boot from the secondary target. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#secondary_vlan_id NetworkAdapter#secondary_vlan_id}
  */
  readonly secondaryVlanId?: number;
  /**
  * An indication of whether the iSCSI boot target name, LUN, IP address, and netmask should be obtained from DHCP. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#target_info_via_dhcp NetworkAdapter#target_info_via_dhcp}
  */
  readonly targetInfoViaDhcp?: boolean | cdktf.IResolvable;
}

export function networkAdapterNetworkAttributesIscsiBootToTerraform(struct?: NetworkAdapterNetworkAttributesIscsiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    chap_secret: cdktf.stringToTerraform(struct!.chapSecret),
    chap_username: cdktf.stringToTerraform(struct!.chapUsername),
    initiator_default_gateway: cdktf.stringToTerraform(struct!.initiatorDefaultGateway),
    initiator_ip_address: cdktf.stringToTerraform(struct!.initiatorIpAddress),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    initiator_netmask: cdktf.stringToTerraform(struct!.initiatorNetmask),
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    ip_mask_dns_via_dhcp: cdktf.booleanToTerraform(struct!.ipMaskDnsViaDhcp),
    mutual_chap_secret: cdktf.stringToTerraform(struct!.mutualChapSecret),
    mutual_chap_username: cdktf.stringToTerraform(struct!.mutualChapUsername),
    primary_dns: cdktf.stringToTerraform(struct!.primaryDns),
    primary_lun: cdktf.numberToTerraform(struct!.primaryLun),
    primary_target_ip_address: cdktf.stringToTerraform(struct!.primaryTargetIpAddress),
    primary_target_name: cdktf.stringToTerraform(struct!.primaryTargetName),
    primary_target_tcp_port: cdktf.numberToTerraform(struct!.primaryTargetTcpPort),
    primary_vlan_enable: cdktf.booleanToTerraform(struct!.primaryVlanEnable),
    primary_vlan_id: cdktf.numberToTerraform(struct!.primaryVlanId),
    router_advertisement_enabled: cdktf.booleanToTerraform(struct!.routerAdvertisementEnabled),
    secondary_dns: cdktf.stringToTerraform(struct!.secondaryDns),
    secondary_lun: cdktf.numberToTerraform(struct!.secondaryLun),
    secondary_target_ip_address: cdktf.stringToTerraform(struct!.secondaryTargetIpAddress),
    secondary_target_name: cdktf.stringToTerraform(struct!.secondaryTargetName),
    secondary_target_tcp_port: cdktf.numberToTerraform(struct!.secondaryTargetTcpPort),
    secondary_vlan_enable: cdktf.booleanToTerraform(struct!.secondaryVlanEnable),
    secondary_vlan_id: cdktf.numberToTerraform(struct!.secondaryVlanId),
    target_info_via_dhcp: cdktf.booleanToTerraform(struct!.targetInfoViaDhcp),
  }
}


export function networkAdapterNetworkAttributesIscsiBootToHclTerraform(struct?: NetworkAdapterNetworkAttributesIscsiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chap_secret: {
      value: cdktf.stringToHclTerraform(struct!.chapSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chap_username: {
      value: cdktf.stringToHclTerraform(struct!.chapUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.initiatorDefaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.initiatorIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_netmask: {
      value: cdktf.stringToHclTerraform(struct!.initiatorNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask_dns_via_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.ipMaskDnsViaDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutual_chap_secret: {
      value: cdktf.stringToHclTerraform(struct!.mutualChapSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mutual_chap_username: {
      value: cdktf.stringToHclTerraform(struct!.mutualChapUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_dns: {
      value: cdktf.stringToHclTerraform(struct!.primaryDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_lun: {
      value: cdktf.numberToHclTerraform(struct!.primaryLun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_target_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.primaryTargetIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_target_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryTargetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_target_tcp_port: {
      value: cdktf.numberToHclTerraform(struct!.primaryTargetTcpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_vlan_enable: {
      value: cdktf.booleanToHclTerraform(struct!.primaryVlanEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.primaryVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_advertisement_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.routerAdvertisementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secondary_dns: {
      value: cdktf.stringToHclTerraform(struct!.secondaryDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_lun: {
      value: cdktf.numberToHclTerraform(struct!.secondaryLun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_target_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.secondaryTargetIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_target_name: {
      value: cdktf.stringToHclTerraform(struct!.secondaryTargetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_target_tcp_port: {
      value: cdktf.numberToHclTerraform(struct!.secondaryTargetTcpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_vlan_enable: {
      value: cdktf.booleanToHclTerraform(struct!.secondaryVlanEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secondary_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.secondaryVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_info_via_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.targetInfoViaDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterNetworkAttributesIscsiBootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterNetworkAttributesIscsiBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._chapSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapSecret = this._chapSecret;
    }
    if (this._chapUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapUsername = this._chapUsername;
    }
    if (this._initiatorDefaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorDefaultGateway = this._initiatorDefaultGateway;
    }
    if (this._initiatorIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorIpAddress = this._initiatorIpAddress;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._initiatorNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorNetmask = this._initiatorNetmask;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._ipMaskDnsViaDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMaskDnsViaDhcp = this._ipMaskDnsViaDhcp;
    }
    if (this._mutualChapSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutualChapSecret = this._mutualChapSecret;
    }
    if (this._mutualChapUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutualChapUsername = this._mutualChapUsername;
    }
    if (this._primaryDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDns = this._primaryDns;
    }
    if (this._primaryLun !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryLun = this._primaryLun;
    }
    if (this._primaryTargetIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTargetIpAddress = this._primaryTargetIpAddress;
    }
    if (this._primaryTargetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTargetName = this._primaryTargetName;
    }
    if (this._primaryTargetTcpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTargetTcpPort = this._primaryTargetTcpPort;
    }
    if (this._primaryVlanEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryVlanEnable = this._primaryVlanEnable;
    }
    if (this._primaryVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryVlanId = this._primaryVlanId;
    }
    if (this._routerAdvertisementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAdvertisementEnabled = this._routerAdvertisementEnabled;
    }
    if (this._secondaryDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDns = this._secondaryDns;
    }
    if (this._secondaryLun !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryLun = this._secondaryLun;
    }
    if (this._secondaryTargetIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryTargetIpAddress = this._secondaryTargetIpAddress;
    }
    if (this._secondaryTargetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryTargetName = this._secondaryTargetName;
    }
    if (this._secondaryTargetTcpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryTargetTcpPort = this._secondaryTargetTcpPort;
    }
    if (this._secondaryVlanEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVlanEnable = this._secondaryVlanEnable;
    }
    if (this._secondaryVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVlanId = this._secondaryVlanId;
    }
    if (this._targetInfoViaDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInfoViaDhcp = this._targetInfoViaDhcp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterNetworkAttributesIscsiBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMethod = undefined;
      this._chapSecret = undefined;
      this._chapUsername = undefined;
      this._initiatorDefaultGateway = undefined;
      this._initiatorIpAddress = undefined;
      this._initiatorName = undefined;
      this._initiatorNetmask = undefined;
      this._ipAddressType = undefined;
      this._ipMaskDnsViaDhcp = undefined;
      this._mutualChapSecret = undefined;
      this._mutualChapUsername = undefined;
      this._primaryDns = undefined;
      this._primaryLun = undefined;
      this._primaryTargetIpAddress = undefined;
      this._primaryTargetName = undefined;
      this._primaryTargetTcpPort = undefined;
      this._primaryVlanEnable = undefined;
      this._primaryVlanId = undefined;
      this._routerAdvertisementEnabled = undefined;
      this._secondaryDns = undefined;
      this._secondaryLun = undefined;
      this._secondaryTargetIpAddress = undefined;
      this._secondaryTargetName = undefined;
      this._secondaryTargetTcpPort = undefined;
      this._secondaryVlanEnable = undefined;
      this._secondaryVlanId = undefined;
      this._targetInfoViaDhcp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMethod = value.authenticationMethod;
      this._chapSecret = value.chapSecret;
      this._chapUsername = value.chapUsername;
      this._initiatorDefaultGateway = value.initiatorDefaultGateway;
      this._initiatorIpAddress = value.initiatorIpAddress;
      this._initiatorName = value.initiatorName;
      this._initiatorNetmask = value.initiatorNetmask;
      this._ipAddressType = value.ipAddressType;
      this._ipMaskDnsViaDhcp = value.ipMaskDnsViaDhcp;
      this._mutualChapSecret = value.mutualChapSecret;
      this._mutualChapUsername = value.mutualChapUsername;
      this._primaryDns = value.primaryDns;
      this._primaryLun = value.primaryLun;
      this._primaryTargetIpAddress = value.primaryTargetIpAddress;
      this._primaryTargetName = value.primaryTargetName;
      this._primaryTargetTcpPort = value.primaryTargetTcpPort;
      this._primaryVlanEnable = value.primaryVlanEnable;
      this._primaryVlanId = value.primaryVlanId;
      this._routerAdvertisementEnabled = value.routerAdvertisementEnabled;
      this._secondaryDns = value.secondaryDns;
      this._secondaryLun = value.secondaryLun;
      this._secondaryTargetIpAddress = value.secondaryTargetIpAddress;
      this._secondaryTargetName = value.secondaryTargetName;
      this._secondaryTargetTcpPort = value.secondaryTargetTcpPort;
      this._secondaryVlanEnable = value.secondaryVlanEnable;
      this._secondaryVlanId = value.secondaryVlanId;
      this._targetInfoViaDhcp = value.targetInfoViaDhcp;
    }
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // chap_secret - computed: true, optional: true, required: false
  private _chapSecret?: string; 
  public get chapSecret() {
    return this.getStringAttribute('chap_secret');
  }
  public set chapSecret(value: string) {
    this._chapSecret = value;
  }
  public resetChapSecret() {
    this._chapSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapSecretInput() {
    return this._chapSecret;
  }

  // chap_username - computed: true, optional: true, required: false
  private _chapUsername?: string; 
  public get chapUsername() {
    return this.getStringAttribute('chap_username');
  }
  public set chapUsername(value: string) {
    this._chapUsername = value;
  }
  public resetChapUsername() {
    this._chapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapUsernameInput() {
    return this._chapUsername;
  }

  // initiator_default_gateway - computed: true, optional: true, required: false
  private _initiatorDefaultGateway?: string; 
  public get initiatorDefaultGateway() {
    return this.getStringAttribute('initiator_default_gateway');
  }
  public set initiatorDefaultGateway(value: string) {
    this._initiatorDefaultGateway = value;
  }
  public resetInitiatorDefaultGateway() {
    this._initiatorDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorDefaultGatewayInput() {
    return this._initiatorDefaultGateway;
  }

  // initiator_ip_address - computed: true, optional: true, required: false
  private _initiatorIpAddress?: string; 
  public get initiatorIpAddress() {
    return this.getStringAttribute('initiator_ip_address');
  }
  public set initiatorIpAddress(value: string) {
    this._initiatorIpAddress = value;
  }
  public resetInitiatorIpAddress() {
    this._initiatorIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorIpAddressInput() {
    return this._initiatorIpAddress;
  }

  // initiator_name - computed: true, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // initiator_netmask - computed: true, optional: true, required: false
  private _initiatorNetmask?: string; 
  public get initiatorNetmask() {
    return this.getStringAttribute('initiator_netmask');
  }
  public set initiatorNetmask(value: string) {
    this._initiatorNetmask = value;
  }
  public resetInitiatorNetmask() {
    this._initiatorNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNetmaskInput() {
    return this._initiatorNetmask;
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // ip_mask_dns_via_dhcp - computed: true, optional: true, required: false
  private _ipMaskDnsViaDhcp?: boolean | cdktf.IResolvable; 
  public get ipMaskDnsViaDhcp() {
    return this.getBooleanAttribute('ip_mask_dns_via_dhcp');
  }
  public set ipMaskDnsViaDhcp(value: boolean | cdktf.IResolvable) {
    this._ipMaskDnsViaDhcp = value;
  }
  public resetIpMaskDnsViaDhcp() {
    this._ipMaskDnsViaDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskDnsViaDhcpInput() {
    return this._ipMaskDnsViaDhcp;
  }

  // mutual_chap_secret - computed: true, optional: true, required: false
  private _mutualChapSecret?: string; 
  public get mutualChapSecret() {
    return this.getStringAttribute('mutual_chap_secret');
  }
  public set mutualChapSecret(value: string) {
    this._mutualChapSecret = value;
  }
  public resetMutualChapSecret() {
    this._mutualChapSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualChapSecretInput() {
    return this._mutualChapSecret;
  }

  // mutual_chap_username - computed: true, optional: true, required: false
  private _mutualChapUsername?: string; 
  public get mutualChapUsername() {
    return this.getStringAttribute('mutual_chap_username');
  }
  public set mutualChapUsername(value: string) {
    this._mutualChapUsername = value;
  }
  public resetMutualChapUsername() {
    this._mutualChapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualChapUsernameInput() {
    return this._mutualChapUsername;
  }

  // primary_dns - computed: true, optional: true, required: false
  private _primaryDns?: string; 
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }
  public set primaryDns(value: string) {
    this._primaryDns = value;
  }
  public resetPrimaryDns() {
    this._primaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsInput() {
    return this._primaryDns;
  }

  // primary_lun - computed: true, optional: true, required: false
  private _primaryLun?: number; 
  public get primaryLun() {
    return this.getNumberAttribute('primary_lun');
  }
  public set primaryLun(value: number) {
    this._primaryLun = value;
  }
  public resetPrimaryLun() {
    this._primaryLun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLunInput() {
    return this._primaryLun;
  }

  // primary_target_ip_address - computed: true, optional: true, required: false
  private _primaryTargetIpAddress?: string; 
  public get primaryTargetIpAddress() {
    return this.getStringAttribute('primary_target_ip_address');
  }
  public set primaryTargetIpAddress(value: string) {
    this._primaryTargetIpAddress = value;
  }
  public resetPrimaryTargetIpAddress() {
    this._primaryTargetIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTargetIpAddressInput() {
    return this._primaryTargetIpAddress;
  }

  // primary_target_name - computed: true, optional: true, required: false
  private _primaryTargetName?: string; 
  public get primaryTargetName() {
    return this.getStringAttribute('primary_target_name');
  }
  public set primaryTargetName(value: string) {
    this._primaryTargetName = value;
  }
  public resetPrimaryTargetName() {
    this._primaryTargetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTargetNameInput() {
    return this._primaryTargetName;
  }

  // primary_target_tcp_port - computed: true, optional: true, required: false
  private _primaryTargetTcpPort?: number; 
  public get primaryTargetTcpPort() {
    return this.getNumberAttribute('primary_target_tcp_port');
  }
  public set primaryTargetTcpPort(value: number) {
    this._primaryTargetTcpPort = value;
  }
  public resetPrimaryTargetTcpPort() {
    this._primaryTargetTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTargetTcpPortInput() {
    return this._primaryTargetTcpPort;
  }

  // primary_vlan_enable - computed: true, optional: true, required: false
  private _primaryVlanEnable?: boolean | cdktf.IResolvable; 
  public get primaryVlanEnable() {
    return this.getBooleanAttribute('primary_vlan_enable');
  }
  public set primaryVlanEnable(value: boolean | cdktf.IResolvable) {
    this._primaryVlanEnable = value;
  }
  public resetPrimaryVlanEnable() {
    this._primaryVlanEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVlanEnableInput() {
    return this._primaryVlanEnable;
  }

  // primary_vlan_id - computed: true, optional: true, required: false
  private _primaryVlanId?: number; 
  public get primaryVlanId() {
    return this.getNumberAttribute('primary_vlan_id');
  }
  public set primaryVlanId(value: number) {
    this._primaryVlanId = value;
  }
  public resetPrimaryVlanId() {
    this._primaryVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVlanIdInput() {
    return this._primaryVlanId;
  }

  // router_advertisement_enabled - computed: true, optional: true, required: false
  private _routerAdvertisementEnabled?: boolean | cdktf.IResolvable; 
  public get routerAdvertisementEnabled() {
    return this.getBooleanAttribute('router_advertisement_enabled');
  }
  public set routerAdvertisementEnabled(value: boolean | cdktf.IResolvable) {
    this._routerAdvertisementEnabled = value;
  }
  public resetRouterAdvertisementEnabled() {
    this._routerAdvertisementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdvertisementEnabledInput() {
    return this._routerAdvertisementEnabled;
  }

  // secondary_dns - computed: true, optional: true, required: false
  private _secondaryDns?: string; 
  public get secondaryDns() {
    return this.getStringAttribute('secondary_dns');
  }
  public set secondaryDns(value: string) {
    this._secondaryDns = value;
  }
  public resetSecondaryDns() {
    this._secondaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsInput() {
    return this._secondaryDns;
  }

  // secondary_lun - computed: true, optional: true, required: false
  private _secondaryLun?: number; 
  public get secondaryLun() {
    return this.getNumberAttribute('secondary_lun');
  }
  public set secondaryLun(value: number) {
    this._secondaryLun = value;
  }
  public resetSecondaryLun() {
    this._secondaryLun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryLunInput() {
    return this._secondaryLun;
  }

  // secondary_target_ip_address - computed: true, optional: true, required: false
  private _secondaryTargetIpAddress?: string; 
  public get secondaryTargetIpAddress() {
    return this.getStringAttribute('secondary_target_ip_address');
  }
  public set secondaryTargetIpAddress(value: string) {
    this._secondaryTargetIpAddress = value;
  }
  public resetSecondaryTargetIpAddress() {
    this._secondaryTargetIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryTargetIpAddressInput() {
    return this._secondaryTargetIpAddress;
  }

  // secondary_target_name - computed: true, optional: true, required: false
  private _secondaryTargetName?: string; 
  public get secondaryTargetName() {
    return this.getStringAttribute('secondary_target_name');
  }
  public set secondaryTargetName(value: string) {
    this._secondaryTargetName = value;
  }
  public resetSecondaryTargetName() {
    this._secondaryTargetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryTargetNameInput() {
    return this._secondaryTargetName;
  }

  // secondary_target_tcp_port - computed: true, optional: true, required: false
  private _secondaryTargetTcpPort?: number; 
  public get secondaryTargetTcpPort() {
    return this.getNumberAttribute('secondary_target_tcp_port');
  }
  public set secondaryTargetTcpPort(value: number) {
    this._secondaryTargetTcpPort = value;
  }
  public resetSecondaryTargetTcpPort() {
    this._secondaryTargetTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryTargetTcpPortInput() {
    return this._secondaryTargetTcpPort;
  }

  // secondary_vlan_enable - computed: true, optional: true, required: false
  private _secondaryVlanEnable?: boolean | cdktf.IResolvable; 
  public get secondaryVlanEnable() {
    return this.getBooleanAttribute('secondary_vlan_enable');
  }
  public set secondaryVlanEnable(value: boolean | cdktf.IResolvable) {
    this._secondaryVlanEnable = value;
  }
  public resetSecondaryVlanEnable() {
    this._secondaryVlanEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVlanEnableInput() {
    return this._secondaryVlanEnable;
  }

  // secondary_vlan_id - computed: true, optional: true, required: false
  private _secondaryVlanId?: number; 
  public get secondaryVlanId() {
    return this.getNumberAttribute('secondary_vlan_id');
  }
  public set secondaryVlanId(value: number) {
    this._secondaryVlanId = value;
  }
  public resetSecondaryVlanId() {
    this._secondaryVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVlanIdInput() {
    return this._secondaryVlanId;
  }

  // target_info_via_dhcp - computed: true, optional: true, required: false
  private _targetInfoViaDhcp?: boolean | cdktf.IResolvable; 
  public get targetInfoViaDhcp() {
    return this.getBooleanAttribute('target_info_via_dhcp');
  }
  public set targetInfoViaDhcp(value: boolean | cdktf.IResolvable) {
    this._targetInfoViaDhcp = value;
  }
  public resetTargetInfoViaDhcp() {
    this._targetInfoViaDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInfoViaDhcpInput() {
    return this._targetInfoViaDhcp;
  }
}
export interface NetworkAdapterNetworkAttributesStatus {
}

export function networkAdapterNetworkAttributesStatusToTerraform(struct?: NetworkAdapterNetworkAttributesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkAdapterNetworkAttributesStatusToHclTerraform(struct?: NetworkAdapterNetworkAttributesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkAdapterNetworkAttributesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterNetworkAttributesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterNetworkAttributesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface NetworkAdapterNetworkAttributes {
  /**
  * This type describes Ethernet capabilities, status, and configuration for a network device function.  (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#ethernet NetworkAdapter#ethernet}
  */
  readonly ethernet?: NetworkAdapterNetworkAttributesEthernet;
  /**
  * This type describes Fibre Channel capabilities, status, and configuration for a network device function. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#fibre_channel NetworkAdapter#fibre_channel}
  */
  readonly fibreChannel?: NetworkAdapterNetworkAttributesFibreChannel;
  /**
  * The iSCSI boot capabilities, status, and configuration for a network device function. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#iscsi_boot NetworkAdapter#iscsi_boot}
  */
  readonly iscsiBoot?: NetworkAdapterNetworkAttributesIscsiBoot;
  /**
  * The configured capability of this network device function. (Update Supported)Accepted values: `Disabled`, `Ethernet`, `FibreChannel`, `iSCSI`, `FibreChannelOverEthernet`, `InfiniBand`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#net_dev_func_type NetworkAdapter#net_dev_func_type}
  */
  readonly netDevFuncType?: string;
}

export function networkAdapterNetworkAttributesToTerraform(struct?: NetworkAdapterNetworkAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: networkAdapterNetworkAttributesEthernetToTerraform(struct!.ethernet),
    fibre_channel: networkAdapterNetworkAttributesFibreChannelToTerraform(struct!.fibreChannel),
    iscsi_boot: networkAdapterNetworkAttributesIscsiBootToTerraform(struct!.iscsiBoot),
    net_dev_func_type: cdktf.stringToTerraform(struct!.netDevFuncType),
  }
}


export function networkAdapterNetworkAttributesToHclTerraform(struct?: NetworkAdapterNetworkAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: networkAdapterNetworkAttributesEthernetToHclTerraform(struct!.ethernet),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkAdapterNetworkAttributesEthernet",
    },
    fibre_channel: {
      value: networkAdapterNetworkAttributesFibreChannelToHclTerraform(struct!.fibreChannel),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkAdapterNetworkAttributesFibreChannel",
    },
    iscsi_boot: {
      value: networkAdapterNetworkAttributesIscsiBootToHclTerraform(struct!.iscsiBoot),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkAdapterNetworkAttributesIscsiBoot",
    },
    net_dev_func_type: {
      value: cdktf.stringToHclTerraform(struct!.netDevFuncType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterNetworkAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterNetworkAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet?.internalValue;
    }
    if (this._fibreChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fibreChannel = this._fibreChannel?.internalValue;
    }
    if (this._iscsiBoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiBoot = this._iscsiBoot?.internalValue;
    }
    if (this._netDevFuncType !== undefined) {
      hasAnyValues = true;
      internalValueResult.netDevFuncType = this._netDevFuncType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterNetworkAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet.internalValue = undefined;
      this._fibreChannel.internalValue = undefined;
      this._iscsiBoot.internalValue = undefined;
      this._netDevFuncType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet.internalValue = value.ethernet;
      this._fibreChannel.internalValue = value.fibreChannel;
      this._iscsiBoot.internalValue = value.iscsiBoot;
      this._netDevFuncType = value.netDevFuncType;
    }
  }

  // assignable_physical_network_ports - computed: true, optional: false, required: false
  public get assignablePhysicalNetworkPorts() {
    return this.getListAttribute('assignable_physical_network_ports');
  }

  // assignable_physical_ports - computed: true, optional: false, required: false
  public get assignablePhysicalPorts() {
    return this.getListAttribute('assignable_physical_ports');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ethernet - computed: true, optional: true, required: false
  private _ethernet = new NetworkAdapterNetworkAttributesEthernetOutputReference(this, "ethernet");
  public get ethernet() {
    return this._ethernet;
  }
  public putEthernet(value: NetworkAdapterNetworkAttributesEthernet) {
    this._ethernet.internalValue = value;
  }
  public resetEthernet() {
    this._ethernet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet.internalValue;
  }

  // fibre_channel - computed: true, optional: true, required: false
  private _fibreChannel = new NetworkAdapterNetworkAttributesFibreChannelOutputReference(this, "fibre_channel");
  public get fibreChannel() {
    return this._fibreChannel;
  }
  public putFibreChannel(value: NetworkAdapterNetworkAttributesFibreChannel) {
    this._fibreChannel.internalValue = value;
  }
  public resetFibreChannel() {
    this._fibreChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fibreChannelInput() {
    return this._fibreChannel.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iscsi_boot - computed: true, optional: true, required: false
  private _iscsiBoot = new NetworkAdapterNetworkAttributesIscsiBootOutputReference(this, "iscsi_boot");
  public get iscsiBoot() {
    return this._iscsiBoot;
  }
  public putIscsiBoot(value: NetworkAdapterNetworkAttributesIscsiBoot) {
    this._iscsiBoot.internalValue = value;
  }
  public resetIscsiBoot() {
    this._iscsiBoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiBootInput() {
    return this._iscsiBoot.internalValue;
  }

  // max_virtual_functions - computed: true, optional: false, required: false
  public get maxVirtualFunctions() {
    return this.getNumberAttribute('max_virtual_functions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_dev_func_capabilities - computed: true, optional: false, required: false
  public get netDevFuncCapabilities() {
    return this.getListAttribute('net_dev_func_capabilities');
  }

  // net_dev_func_type - computed: true, optional: true, required: false
  private _netDevFuncType?: string; 
  public get netDevFuncType() {
    return this.getStringAttribute('net_dev_func_type');
  }
  public set netDevFuncType(value: string) {
    this._netDevFuncType = value;
  }
  public resetNetDevFuncType() {
    this._netDevFuncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDevFuncTypeInput() {
    return this._netDevFuncType;
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // physical_port_assignment - computed: true, optional: false, required: false
  public get physicalPortAssignment() {
    return this.getStringAttribute('physical_port_assignment');
  }

  // status - computed: true, optional: false, required: false
  private _status = new NetworkAdapterNetworkAttributesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}
export interface NetworkAdapterOemNetworkAttributes {
  /**
  * dell network attributes. (Update Supported) To check allowed attributes please either use the datasource for dell network attributes: data.redfish_network or query /redfish/v1/Chassis/System.Embedded.1/NetworkAdapters/NIC.Integrated.1/NetworkDeviceFunctions/NIC.Integrated.1-3-1/Oem/Dell/DellNetworkAttributes/NIC.Integrated.1-3-1 to get attributes for NIC. To get allowed values for those attributes, check /redfish/v1/Registries/NetworkAttributesRegistry_{network_device_function_id}/NetworkAttributesRegistry_{network_device_function_id}.json from a Redfish Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#attributes NetworkAdapter#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * This parameter allows you to clear all the pending OEM network attributes changes. (Update Supported)`false`: does not perform any operation. `true`:  discards any pending changes to network attributes, or if a job is in scheduled state, removes the job. `apply_time` value will be ignored and will not have any impact for `clear_pending` operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#clear_pending NetworkAdapter#clear_pending}
  */
  readonly clearPending?: boolean | cdktf.IResolvable;
}

export function networkAdapterOemNetworkAttributesToTerraform(struct?: NetworkAdapterOemNetworkAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    clear_pending: cdktf.booleanToTerraform(struct!.clearPending),
  }
}


export function networkAdapterOemNetworkAttributesToHclTerraform(struct?: NetworkAdapterOemNetworkAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    clear_pending: {
      value: cdktf.booleanToHclTerraform(struct!.clearPending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterOemNetworkAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAdapterOemNetworkAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._clearPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPending = this._clearPending;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterOemNetworkAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._clearPending = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._clearPending = value.clearPending;
    }
  }

  // attribute_registry - computed: true, optional: false, required: false
  public get attributeRegistry() {
    return this.getStringAttribute('attribute_registry');
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // clear_pending - computed: true, optional: true, required: false
  private _clearPending?: boolean | cdktf.IResolvable; 
  public get clearPending() {
    return this.getBooleanAttribute('clear_pending');
  }
  public set clearPending(value: boolean | cdktf.IResolvable) {
    this._clearPending = value;
  }
  public resetClearPending() {
    this._clearPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPendingInput() {
    return this._clearPending;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }
}
export interface NetworkAdapterRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#endpoint NetworkAdapter#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#password NetworkAdapter#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#redfish_alias NetworkAdapter#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#ssl_insecure NetworkAdapter#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#user NetworkAdapter#user}
  */
  readonly user?: string;
}

export function networkAdapterRedfishServerToTerraform(struct?: NetworkAdapterRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function networkAdapterRedfishServerToHclTerraform(struct?: NetworkAdapterRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAdapterRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAdapterRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAdapterRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class NetworkAdapterRedfishServerList extends cdktf.ComplexList {
  public internalValue? : NetworkAdapterRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): NetworkAdapterRedfishServerOutputReference {
    return new NetworkAdapterRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter redfish_network_adapter}
*/
export class NetworkAdapter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_network_adapter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAdapter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAdapter to import
  * @param importFromId The id of the existing NetworkAdapter that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAdapter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_network_adapter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/network_adapter redfish_network_adapter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAdapterConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAdapterConfig) {
    super(scope, id, {
      terraformResourceType: 'redfish_network_adapter',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyTime = config.applyTime;
    this._jobTimeout = config.jobTimeout;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._networkAdapterId = config.networkAdapterId;
    this._networkAttributes.internalValue = config.networkAttributes;
    this._networkDeviceFunctionId = config.networkDeviceFunctionId;
    this._oemNetworkAttributes.internalValue = config.oemNetworkAttributes;
    this._resetTimeout = config.resetTimeout;
    this._resetType = config.resetType;
    this._systemId = config.systemId;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_time - computed: false, optional: false, required: true
  private _applyTime?: string; 
  public get applyTime() {
    return this.getStringAttribute('apply_time');
  }
  public set applyTime(value: string) {
    this._applyTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTimeInput() {
    return this._applyTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: number; 
  public get jobTimeout() {
    return this.getNumberAttribute('job_timeout');
  }
  public set jobTimeout(value: number) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new NetworkAdapterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: NetworkAdapterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // network_adapter_id - computed: false, optional: false, required: true
  private _networkAdapterId?: string; 
  public get networkAdapterId() {
    return this.getStringAttribute('network_adapter_id');
  }
  public set networkAdapterId(value: string) {
    this._networkAdapterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAdapterIdInput() {
    return this._networkAdapterId;
  }

  // network_attributes - computed: true, optional: true, required: false
  private _networkAttributes = new NetworkAdapterNetworkAttributesOutputReference(this, "network_attributes");
  public get networkAttributes() {
    return this._networkAttributes;
  }
  public putNetworkAttributes(value: NetworkAdapterNetworkAttributes) {
    this._networkAttributes.internalValue = value;
  }
  public resetNetworkAttributes() {
    this._networkAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttributesInput() {
    return this._networkAttributes.internalValue;
  }

  // network_device_function_id - computed: false, optional: false, required: true
  private _networkDeviceFunctionId?: string; 
  public get networkDeviceFunctionId() {
    return this.getStringAttribute('network_device_function_id');
  }
  public set networkDeviceFunctionId(value: string) {
    this._networkDeviceFunctionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceFunctionIdInput() {
    return this._networkDeviceFunctionId;
  }

  // oem_network_attributes - computed: true, optional: true, required: false
  private _oemNetworkAttributes = new NetworkAdapterOemNetworkAttributesOutputReference(this, "oem_network_attributes");
  public get oemNetworkAttributes() {
    return this._oemNetworkAttributes;
  }
  public putOemNetworkAttributes(value: NetworkAdapterOemNetworkAttributes) {
    this._oemNetworkAttributes.internalValue = value;
  }
  public resetOemNetworkAttributes() {
    this._oemNetworkAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oemNetworkAttributesInput() {
    return this._oemNetworkAttributes.internalValue;
  }

  // reset_timeout - computed: true, optional: true, required: false
  private _resetTimeout?: number; 
  public get resetTimeout() {
    return this.getNumberAttribute('reset_timeout');
  }
  public set resetTimeout(value: number) {
    this._resetTimeout = value;
  }
  public resetResetTimeout() {
    this._resetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeoutInput() {
    return this._resetTimeout;
  }

  // reset_type - computed: true, optional: true, required: false
  private _resetType?: string; 
  public get resetType() {
    return this.getStringAttribute('reset_type');
  }
  public set resetType(value: string) {
    this._resetType = value;
  }
  public resetResetType() {
    this._resetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTypeInput() {
    return this._resetType;
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new NetworkAdapterRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: NetworkAdapterRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_time: cdktf.stringToTerraform(this._applyTime),
      job_timeout: cdktf.numberToTerraform(this._jobTimeout),
      maintenance_window: networkAdapterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      network_adapter_id: cdktf.stringToTerraform(this._networkAdapterId),
      network_attributes: networkAdapterNetworkAttributesToTerraform(this._networkAttributes.internalValue),
      network_device_function_id: cdktf.stringToTerraform(this._networkDeviceFunctionId),
      oem_network_attributes: networkAdapterOemNetworkAttributesToTerraform(this._oemNetworkAttributes.internalValue),
      reset_timeout: cdktf.numberToTerraform(this._resetTimeout),
      reset_type: cdktf.stringToTerraform(this._resetType),
      system_id: cdktf.stringToTerraform(this._systemId),
      redfish_server: cdktf.listMapper(networkAdapterRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_time: {
        value: cdktf.stringToHclTerraform(this._applyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_timeout: {
        value: cdktf.numberToHclTerraform(this._jobTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_window: {
        value: networkAdapterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkAdapterMaintenanceWindow",
      },
      network_adapter_id: {
        value: cdktf.stringToHclTerraform(this._networkAdapterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_attributes: {
        value: networkAdapterNetworkAttributesToHclTerraform(this._networkAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkAdapterNetworkAttributes",
      },
      network_device_function_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceFunctionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oem_network_attributes: {
        value: networkAdapterOemNetworkAttributesToHclTerraform(this._oemNetworkAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkAdapterOemNetworkAttributes",
      },
      reset_timeout: {
        value: cdktf.numberToHclTerraform(this._resetTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_type: {
        value: cdktf.stringToHclTerraform(this._resetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(networkAdapterRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkAdapterRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
