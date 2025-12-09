// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LanAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Discovered device site name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#discovered_device_site_name_hierarchy LanAutomation#discovered_device_site_name_hierarchy}
  */
  readonly discoveredDeviceSiteNameHierarchy: string;
  /**
  * List of specific devices that will be LAN Automated in this session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#discovery_devices LanAutomation#discovery_devices}
  */
  readonly discoveryDevices?: LanAutomationDiscoveryDevices[] | cdktf.IResolvable;
  /**
  * Level below primary seed device upto which the new devices will be LAN Automated by this session, level + seed = tier
  *   - Range: `1`-`5`
  *   - Default value: `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#discovery_level LanAutomation#discovery_level}
  */
  readonly discoveryLevel?: number;
  /**
  * Discovery timeout in minutes. Until this time, the stop processing will not be triggered.
  *   - Range: `20`-`10080`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#discovery_timeout LanAutomation#discovery_timeout}
  */
  readonly discoveryTimeout?: number;
  /**
  * File ID of the CSV file containing the host name list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#host_name_file_id LanAutomation#host_name_file_id}
  */
  readonly hostNameFileId?: string;
  /**
  * Host name prefix which shall be assigned to the discovered device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#host_name_prefix LanAutomation#host_name_prefix}
  */
  readonly hostNamePrefix?: string;
  /**
  * The list of IP pools with its name and role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#ip_pools LanAutomation#ip_pools}
  */
  readonly ipPools: LanAutomationIpPools[] | cdktf.IResolvable;
  /**
  * ISIS domain password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#isis_domain_password LanAutomation#isis_domain_password}
  */
  readonly isisDomainPassword?: string;
  /**
  * To enable underlay native multicast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#multicast_enabled LanAutomation#multicast_enabled}
  */
  readonly multicastEnabled?: boolean | cdktf.IResolvable;
  /**
  * Secondary seed management IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#peer_device_management_ip_address LanAutomation#peer_device_management_ip_address}
  */
  readonly peerDeviceManagementIpAddress?: string;
  /**
  * The list of interfaces on primary seed via which the discovered devices are connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#primary_device_interface_names LanAutomation#primary_device_interface_names}
  */
  readonly primaryDeviceInterfaceNames: string[];
  /**
  * Primary seed management IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#primary_device_management_ip_address LanAutomation#primary_device_management_ip_address}
  */
  readonly primaryDeviceManagementIpAddress: string;
  /**
  * Advertise LAN Automation summary route into BGP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#redistribute_isis_to_bgp LanAutomation#redistribute_isis_to_bgp}
  */
  readonly redistributeIsisToBgp?: boolean | cdktf.IResolvable;
}
export interface LanAutomationDiscoveryDevices {
  /**
  * Hostname of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#device_host_name LanAutomation#device_host_name}
  */
  readonly deviceHostName?: string;
  /**
  * Management IP Address of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#device_management_ip_address LanAutomation#device_management_ip_address}
  */
  readonly deviceManagementIpAddress?: string;
  /**
  * Serial number of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#device_serial_number LanAutomation#device_serial_number}
  */
  readonly deviceSerialNumber: string;
  /**
  * Site name hierarchy for the device, must be a child site of the discoveredDeviceSiteNameHierarchy or same if it’s not area type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#device_site_name_hierarchy LanAutomation#device_site_name_hierarchy}
  */
  readonly deviceSiteNameHierarchy?: string;
}

export function lanAutomationDiscoveryDevicesToTerraform(struct?: LanAutomationDiscoveryDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_host_name: cdktf.stringToTerraform(struct!.deviceHostName),
    device_management_ip_address: cdktf.stringToTerraform(struct!.deviceManagementIpAddress),
    device_serial_number: cdktf.stringToTerraform(struct!.deviceSerialNumber),
    device_site_name_hierarchy: cdktf.stringToTerraform(struct!.deviceSiteNameHierarchy),
  }
}


export function lanAutomationDiscoveryDevicesToHclTerraform(struct?: LanAutomationDiscoveryDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_host_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_management_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.deviceManagementIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.deviceSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.deviceSiteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LanAutomationDiscoveryDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LanAutomationDiscoveryDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceHostName = this._deviceHostName;
    }
    if (this._deviceManagementIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceManagementIpAddress = this._deviceManagementIpAddress;
    }
    if (this._deviceSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSerialNumber = this._deviceSerialNumber;
    }
    if (this._deviceSiteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSiteNameHierarchy = this._deviceSiteNameHierarchy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LanAutomationDiscoveryDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceHostName = undefined;
      this._deviceManagementIpAddress = undefined;
      this._deviceSerialNumber = undefined;
      this._deviceSiteNameHierarchy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceHostName = value.deviceHostName;
      this._deviceManagementIpAddress = value.deviceManagementIpAddress;
      this._deviceSerialNumber = value.deviceSerialNumber;
      this._deviceSiteNameHierarchy = value.deviceSiteNameHierarchy;
    }
  }

  // device_host_name - computed: false, optional: true, required: false
  private _deviceHostName?: string; 
  public get deviceHostName() {
    return this.getStringAttribute('device_host_name');
  }
  public set deviceHostName(value: string) {
    this._deviceHostName = value;
  }
  public resetDeviceHostName() {
    this._deviceHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceHostNameInput() {
    return this._deviceHostName;
  }

  // device_management_ip_address - computed: false, optional: true, required: false
  private _deviceManagementIpAddress?: string; 
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }
  public set deviceManagementIpAddress(value: string) {
    this._deviceManagementIpAddress = value;
  }
  public resetDeviceManagementIpAddress() {
    this._deviceManagementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagementIpAddressInput() {
    return this._deviceManagementIpAddress;
  }

  // device_serial_number - computed: false, optional: false, required: true
  private _deviceSerialNumber?: string; 
  public get deviceSerialNumber() {
    return this.getStringAttribute('device_serial_number');
  }
  public set deviceSerialNumber(value: string) {
    this._deviceSerialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSerialNumberInput() {
    return this._deviceSerialNumber;
  }

  // device_site_name_hierarchy - computed: false, optional: true, required: false
  private _deviceSiteNameHierarchy?: string; 
  public get deviceSiteNameHierarchy() {
    return this.getStringAttribute('device_site_name_hierarchy');
  }
  public set deviceSiteNameHierarchy(value: string) {
    this._deviceSiteNameHierarchy = value;
  }
  public resetDeviceSiteNameHierarchy() {
    this._deviceSiteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSiteNameHierarchyInput() {
    return this._deviceSiteNameHierarchy;
  }
}

export class LanAutomationDiscoveryDevicesList extends cdktf.ComplexList {
  public internalValue? : LanAutomationDiscoveryDevices[] | cdktf.IResolvable

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
  public get(index: number): LanAutomationDiscoveryDevicesOutputReference {
    return new LanAutomationDiscoveryDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LanAutomationIpPools {
  /**
  * Name of the IP pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#ip_pool_name LanAutomation#ip_pool_name}
  */
  readonly ipPoolName: string;
  /**
  * Role of the IP pool.
  *   - Choices: `MAIN_POOL`, `PHYSICAL_LINK_POOL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#ip_pool_role LanAutomation#ip_pool_role}
  */
  readonly ipPoolRole: string;
}

export function lanAutomationIpPoolsToTerraform(struct?: LanAutomationIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_pool_name: cdktf.stringToTerraform(struct!.ipPoolName),
    ip_pool_role: cdktf.stringToTerraform(struct!.ipPoolRole),
  }
}


export function lanAutomationIpPoolsToHclTerraform(struct?: LanAutomationIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pool_role: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LanAutomationIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LanAutomationIpPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolName = this._ipPoolName;
    }
    if (this._ipPoolRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolRole = this._ipPoolRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LanAutomationIpPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPoolName = undefined;
      this._ipPoolRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPoolName = value.ipPoolName;
      this._ipPoolRole = value.ipPoolRole;
    }
  }

  // ip_pool_name - computed: false, optional: false, required: true
  private _ipPoolName?: string; 
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }
  public set ipPoolName(value: string) {
    this._ipPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolNameInput() {
    return this._ipPoolName;
  }

  // ip_pool_role - computed: false, optional: false, required: true
  private _ipPoolRole?: string; 
  public get ipPoolRole() {
    return this.getStringAttribute('ip_pool_role');
  }
  public set ipPoolRole(value: string) {
    this._ipPoolRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolRoleInput() {
    return this._ipPoolRole;
  }
}

export class LanAutomationIpPoolsList extends cdktf.ComplexList {
  public internalValue? : LanAutomationIpPools[] | cdktf.IResolvable

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
  public get(index: number): LanAutomationIpPoolsOutputReference {
    return new LanAutomationIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation catalystcenter_lan_automation}
*/
export class LanAutomation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_lan_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LanAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LanAutomation to import
  * @param importFromId The id of the existing LanAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LanAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_lan_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/lan_automation catalystcenter_lan_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LanAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: LanAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_lan_automation',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._discoveredDeviceSiteNameHierarchy = config.discoveredDeviceSiteNameHierarchy;
    this._discoveryDevices.internalValue = config.discoveryDevices;
    this._discoveryLevel = config.discoveryLevel;
    this._discoveryTimeout = config.discoveryTimeout;
    this._hostNameFileId = config.hostNameFileId;
    this._hostNamePrefix = config.hostNamePrefix;
    this._ipPools.internalValue = config.ipPools;
    this._isisDomainPassword = config.isisDomainPassword;
    this._multicastEnabled = config.multicastEnabled;
    this._peerDeviceManagementIpAddress = config.peerDeviceManagementIpAddress;
    this._primaryDeviceInterfaceNames = config.primaryDeviceInterfaceNames;
    this._primaryDeviceManagementIpAddress = config.primaryDeviceManagementIpAddress;
    this._redistributeIsisToBgp = config.redistributeIsisToBgp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // discovered_device_site_name_hierarchy - computed: false, optional: false, required: true
  private _discoveredDeviceSiteNameHierarchy?: string; 
  public get discoveredDeviceSiteNameHierarchy() {
    return this.getStringAttribute('discovered_device_site_name_hierarchy');
  }
  public set discoveredDeviceSiteNameHierarchy(value: string) {
    this._discoveredDeviceSiteNameHierarchy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredDeviceSiteNameHierarchyInput() {
    return this._discoveredDeviceSiteNameHierarchy;
  }

  // discovery_devices - computed: false, optional: true, required: false
  private _discoveryDevices = new LanAutomationDiscoveryDevicesList(this, "discovery_devices", true);
  public get discoveryDevices() {
    return this._discoveryDevices;
  }
  public putDiscoveryDevices(value: LanAutomationDiscoveryDevices[] | cdktf.IResolvable) {
    this._discoveryDevices.internalValue = value;
  }
  public resetDiscoveryDevices() {
    this._discoveryDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryDevicesInput() {
    return this._discoveryDevices.internalValue;
  }

  // discovery_level - computed: true, optional: true, required: false
  private _discoveryLevel?: number; 
  public get discoveryLevel() {
    return this.getNumberAttribute('discovery_level');
  }
  public set discoveryLevel(value: number) {
    this._discoveryLevel = value;
  }
  public resetDiscoveryLevel() {
    this._discoveryLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryLevelInput() {
    return this._discoveryLevel;
  }

  // discovery_timeout - computed: false, optional: true, required: false
  private _discoveryTimeout?: number; 
  public get discoveryTimeout() {
    return this.getNumberAttribute('discovery_timeout');
  }
  public set discoveryTimeout(value: number) {
    this._discoveryTimeout = value;
  }
  public resetDiscoveryTimeout() {
    this._discoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTimeoutInput() {
    return this._discoveryTimeout;
  }

  // host_name_file_id - computed: false, optional: true, required: false
  private _hostNameFileId?: string; 
  public get hostNameFileId() {
    return this.getStringAttribute('host_name_file_id');
  }
  public set hostNameFileId(value: string) {
    this._hostNameFileId = value;
  }
  public resetHostNameFileId() {
    this._hostNameFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameFileIdInput() {
    return this._hostNameFileId;
  }

  // host_name_prefix - computed: false, optional: true, required: false
  private _hostNamePrefix?: string; 
  public get hostNamePrefix() {
    return this.getStringAttribute('host_name_prefix');
  }
  public set hostNamePrefix(value: string) {
    this._hostNamePrefix = value;
  }
  public resetHostNamePrefix() {
    this._hostNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamePrefixInput() {
    return this._hostNamePrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_pools - computed: false, optional: false, required: true
  private _ipPools = new LanAutomationIpPoolsList(this, "ip_pools", false);
  public get ipPools() {
    return this._ipPools;
  }
  public putIpPools(value: LanAutomationIpPools[] | cdktf.IResolvable) {
    this._ipPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolsInput() {
    return this._ipPools.internalValue;
  }

  // isis_domain_password - computed: false, optional: true, required: false
  private _isisDomainPassword?: string; 
  public get isisDomainPassword() {
    return this.getStringAttribute('isis_domain_password');
  }
  public set isisDomainPassword(value: string) {
    this._isisDomainPassword = value;
  }
  public resetIsisDomainPassword() {
    this._isisDomainPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisDomainPasswordInput() {
    return this._isisDomainPassword;
  }

  // multicast_enabled - computed: false, optional: true, required: false
  private _multicastEnabled?: boolean | cdktf.IResolvable; 
  public get multicastEnabled() {
    return this.getBooleanAttribute('multicast_enabled');
  }
  public set multicastEnabled(value: boolean | cdktf.IResolvable) {
    this._multicastEnabled = value;
  }
  public resetMulticastEnabled() {
    this._multicastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastEnabledInput() {
    return this._multicastEnabled;
  }

  // peer_device_management_ip_address - computed: false, optional: true, required: false
  private _peerDeviceManagementIpAddress?: string; 
  public get peerDeviceManagementIpAddress() {
    return this.getStringAttribute('peer_device_management_ip_address');
  }
  public set peerDeviceManagementIpAddress(value: string) {
    this._peerDeviceManagementIpAddress = value;
  }
  public resetPeerDeviceManagementIpAddress() {
    this._peerDeviceManagementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDeviceManagementIpAddressInput() {
    return this._peerDeviceManagementIpAddress;
  }

  // primary_device_interface_names - computed: false, optional: false, required: true
  private _primaryDeviceInterfaceNames?: string[]; 
  public get primaryDeviceInterfaceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_device_interface_names'));
  }
  public set primaryDeviceInterfaceNames(value: string[]) {
    this._primaryDeviceInterfaceNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceInterfaceNamesInput() {
    return this._primaryDeviceInterfaceNames;
  }

  // primary_device_management_ip_address - computed: false, optional: false, required: true
  private _primaryDeviceManagementIpAddress?: string; 
  public get primaryDeviceManagementIpAddress() {
    return this.getStringAttribute('primary_device_management_ip_address');
  }
  public set primaryDeviceManagementIpAddress(value: string) {
    this._primaryDeviceManagementIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDeviceManagementIpAddressInput() {
    return this._primaryDeviceManagementIpAddress;
  }

  // redistribute_isis_to_bgp - computed: false, optional: true, required: false
  private _redistributeIsisToBgp?: boolean | cdktf.IResolvable; 
  public get redistributeIsisToBgp() {
    return this.getBooleanAttribute('redistribute_isis_to_bgp');
  }
  public set redistributeIsisToBgp(value: boolean | cdktf.IResolvable) {
    this._redistributeIsisToBgp = value;
  }
  public resetRedistributeIsisToBgp() {
    this._redistributeIsisToBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeIsisToBgpInput() {
    return this._redistributeIsisToBgp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      discovered_device_site_name_hierarchy: cdktf.stringToTerraform(this._discoveredDeviceSiteNameHierarchy),
      discovery_devices: cdktf.listMapper(lanAutomationDiscoveryDevicesToTerraform, false)(this._discoveryDevices.internalValue),
      discovery_level: cdktf.numberToTerraform(this._discoveryLevel),
      discovery_timeout: cdktf.numberToTerraform(this._discoveryTimeout),
      host_name_file_id: cdktf.stringToTerraform(this._hostNameFileId),
      host_name_prefix: cdktf.stringToTerraform(this._hostNamePrefix),
      ip_pools: cdktf.listMapper(lanAutomationIpPoolsToTerraform, false)(this._ipPools.internalValue),
      isis_domain_password: cdktf.stringToTerraform(this._isisDomainPassword),
      multicast_enabled: cdktf.booleanToTerraform(this._multicastEnabled),
      peer_device_management_ip_address: cdktf.stringToTerraform(this._peerDeviceManagementIpAddress),
      primary_device_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaryDeviceInterfaceNames),
      primary_device_management_ip_address: cdktf.stringToTerraform(this._primaryDeviceManagementIpAddress),
      redistribute_isis_to_bgp: cdktf.booleanToTerraform(this._redistributeIsisToBgp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      discovered_device_site_name_hierarchy: {
        value: cdktf.stringToHclTerraform(this._discoveredDeviceSiteNameHierarchy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_devices: {
        value: cdktf.listMapperHcl(lanAutomationDiscoveryDevicesToHclTerraform, false)(this._discoveryDevices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LanAutomationDiscoveryDevicesList",
      },
      discovery_level: {
        value: cdktf.numberToHclTerraform(this._discoveryLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      discovery_timeout: {
        value: cdktf.numberToHclTerraform(this._discoveryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_name_file_id: {
        value: cdktf.stringToHclTerraform(this._hostNameFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name_prefix: {
        value: cdktf.stringToHclTerraform(this._hostNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_pools: {
        value: cdktf.listMapperHcl(lanAutomationIpPoolsToHclTerraform, false)(this._ipPools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LanAutomationIpPoolsList",
      },
      isis_domain_password: {
        value: cdktf.stringToHclTerraform(this._isisDomainPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_enabled: {
        value: cdktf.booleanToHclTerraform(this._multicastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peer_device_management_ip_address: {
        value: cdktf.stringToHclTerraform(this._peerDeviceManagementIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_device_interface_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaryDeviceInterfaceNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      primary_device_management_ip_address: {
        value: cdktf.stringToHclTerraform(this._primaryDeviceManagementIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_isis_to_bgp: {
        value: cdktf.booleanToHclTerraform(this._redistributeIsisToBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
