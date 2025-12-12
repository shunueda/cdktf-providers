// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#allow_all_usb Fleet#allow_all_usb}
  */
  readonly allowAllUsb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#annotations Fleet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#default_config Fleet#default_config}
  */
  readonly defaultConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#default_sriov_interface Fleet#default_sriov_interface}
  */
  readonly defaultSriovInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#default_storage_class Fleet#default_storage_class}
  */
  readonly defaultStorageClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#deny_all_usb Fleet#deny_all_usb}
  */
  readonly denyAllUsb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#description Fleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#disable Fleet#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#disable_gpu Fleet#disable_gpu}
  */
  readonly disableGpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#disable_vm Fleet#disable_vm}
  */
  readonly disableVm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_default_fleet_config_download Fleet#enable_default_fleet_config_download}
  */
  readonly enableDefaultFleetConfigDownload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_gpu Fleet#enable_gpu}
  */
  readonly enableGpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#fleet_label Fleet#fleet_label}
  */
  readonly fleetLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#id Fleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#labels Fleet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#logs_streaming_disabled Fleet#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_bond_devices Fleet#no_bond_devices}
  */
  readonly noBondDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_dc_cluster_group Fleet#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_storage_device Fleet#no_storage_device}
  */
  readonly noStorageDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_storage_interfaces Fleet#no_storage_interfaces}
  */
  readonly noStorageInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_storage_static_routes Fleet#no_storage_static_routes}
  */
  readonly noStorageStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#operating_system_version Fleet#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#volterra_software_version Fleet#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
  /**
  * blocked_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blocked_services Fleet#blocked_services}
  */
  readonly blockedServices?: FleetBlockedServices[] | cdktf.IResolvable;
  /**
  * bond_device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#bond_device_list Fleet#bond_device_list}
  */
  readonly bondDeviceList?: FleetBondDeviceListStruct;
  /**
  * dc_cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#dc_cluster_group Fleet#dc_cluster_group}
  */
  readonly dcClusterGroup?: FleetDcClusterGroup;
  /**
  * dc_cluster_group_inside block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#dc_cluster_group_inside Fleet#dc_cluster_group_inside}
  */
  readonly dcClusterGroupInside?: FleetDcClusterGroupInside;
  /**
  * device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#device_list Fleet#device_list}
  */
  readonly deviceList?: FleetDeviceListStruct;
  /**
  * enable_vgpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_vgpu Fleet#enable_vgpu}
  */
  readonly enableVgpu?: FleetEnableVgpu;
  /**
  * enable_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_vm Fleet#enable_vm}
  */
  readonly enableVm?: FleetEnableVm;
  /**
  * inside_virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#inside_virtual_network Fleet#inside_virtual_network}
  */
  readonly insideVirtualNetwork?: FleetInsideVirtualNetwork[] | cdktf.IResolvable;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#interface_list Fleet#interface_list}
  */
  readonly interfaceList?: FleetInterfaceListStruct;
  /**
  * kubernetes_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#kubernetes_upgrade_drain Fleet#kubernetes_upgrade_drain}
  */
  readonly kubernetesUpgradeDrain?: FleetKubernetesUpgradeDrain;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#log_receiver Fleet#log_receiver}
  */
  readonly logReceiver?: FleetLogReceiver;
  /**
  * network_connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#network_connectors Fleet#network_connectors}
  */
  readonly networkConnectors?: FleetNetworkConnectors[] | cdktf.IResolvable;
  /**
  * network_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#network_firewall Fleet#network_firewall}
  */
  readonly networkFirewall?: FleetNetworkFirewall[] | cdktf.IResolvable;
  /**
  * outside_virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#outside_virtual_network Fleet#outside_virtual_network}
  */
  readonly outsideVirtualNetwork?: FleetOutsideVirtualNetwork[] | cdktf.IResolvable;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#performance_enhancement_mode Fleet#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: FleetPerformanceEnhancementMode;
  /**
  * sriov_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#sriov_interfaces Fleet#sriov_interfaces}
  */
  readonly sriovInterfaces?: FleetSriovInterfaces;
  /**
  * storage_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_class_list Fleet#storage_class_list}
  */
  readonly storageClassList?: FleetStorageClassListStruct;
  /**
  * storage_device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_device_list Fleet#storage_device_list}
  */
  readonly storageDeviceList?: FleetStorageDeviceListStruct;
  /**
  * storage_interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_interface_list Fleet#storage_interface_list}
  */
  readonly storageInterfaceList?: FleetStorageInterfaceListStruct;
  /**
  * storage_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_static_routes Fleet#storage_static_routes}
  */
  readonly storageStaticRoutes?: FleetStorageStaticRoutes;
  /**
  * usb_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#usb_policy Fleet#usb_policy}
  */
  readonly usbPolicy?: FleetUsbPolicy;
}
export interface FleetBlockedServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#dns Fleet#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#network_type Fleet#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#ssh Fleet#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#web_user_interface Fleet#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function fleetBlockedServicesToTerraform(struct?: FleetBlockedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.booleanToTerraform(struct!.dns),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ssh: cdktf.booleanToTerraform(struct!.ssh),
    web_user_interface: cdktf.booleanToTerraform(struct!.webUserInterface),
  }
}


export function fleetBlockedServicesToHclTerraform(struct?: FleetBlockedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: cdktf.booleanToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_user_interface: {
      value: cdktf.booleanToHclTerraform(struct!.webUserInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetBlockedServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetBlockedServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    if (this._webUserInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.webUserInterface = this._webUserInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetBlockedServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._networkType = undefined;
      this._ssh = undefined;
      this._webUserInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._networkType = value.networkType;
      this._ssh = value.ssh;
      this._webUserInterface = value.webUserInterface;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // web_user_interface - computed: false, optional: true, required: false
  private _webUserInterface?: boolean | cdktf.IResolvable; 
  public get webUserInterface() {
    return this.getBooleanAttribute('web_user_interface');
  }
  public set webUserInterface(value: boolean | cdktf.IResolvable) {
    this._webUserInterface = value;
  }
  public resetWebUserInterface() {
    this._webUserInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUserInterfaceInput() {
    return this._webUserInterface;
  }
}

export class FleetBlockedServicesList extends cdktf.ComplexList {
  public internalValue? : FleetBlockedServices[] | cdktf.IResolvable

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
  public get(index: number): FleetBlockedServicesOutputReference {
    return new FleetBlockedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetBondDeviceListBondDevicesLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#rate Fleet#rate}
  */
  readonly rate?: number;
}

export function fleetBondDeviceListBondDevicesLacpToTerraform(struct?: FleetBondDeviceListBondDevicesLacpOutputReference | FleetBondDeviceListBondDevicesLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function fleetBondDeviceListBondDevicesLacpToHclTerraform(struct?: FleetBondDeviceListBondDevicesLacpOutputReference | FleetBondDeviceListBondDevicesLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetBondDeviceListBondDevicesLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetBondDeviceListBondDevicesLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetBondDeviceListBondDevicesLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
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
}
export interface FleetBondDeviceListBondDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#active_backup Fleet#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#devices Fleet#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#link_polling_interval Fleet#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#link_up_delay Fleet#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#lacp Fleet#lacp}
  */
  readonly lacp?: FleetBondDeviceListBondDevicesLacp;
}

export function fleetBondDeviceListBondDevicesToTerraform(struct?: FleetBondDeviceListBondDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: fleetBondDeviceListBondDevicesLacpToTerraform(struct!.lacp),
  }
}


export function fleetBondDeviceListBondDevicesToHclTerraform(struct?: FleetBondDeviceListBondDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
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
    lacp: {
      value: fleetBondDeviceListBondDevicesLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "FleetBondDeviceListBondDevicesLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetBondDeviceListBondDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetBondDeviceListBondDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetBondDeviceListBondDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new FleetBondDeviceListBondDevicesLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: FleetBondDeviceListBondDevicesLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}

export class FleetBondDeviceListBondDevicesList extends cdktf.ComplexList {
  public internalValue? : FleetBondDeviceListBondDevices[] | cdktf.IResolvable

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
  public get(index: number): FleetBondDeviceListBondDevicesOutputReference {
    return new FleetBondDeviceListBondDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetBondDeviceListStruct {
  /**
  * bond_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#bond_devices Fleet#bond_devices}
  */
  readonly bondDevices: FleetBondDeviceListBondDevices[] | cdktf.IResolvable;
}

export function fleetBondDeviceListStructToTerraform(struct?: FleetBondDeviceListStructOutputReference | FleetBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_devices: cdktf.listMapper(fleetBondDeviceListBondDevicesToTerraform, true)(struct!.bondDevices),
  }
}


export function fleetBondDeviceListStructToHclTerraform(struct?: FleetBondDeviceListStructOutputReference | FleetBondDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_devices: {
      value: cdktf.listMapperHcl(fleetBondDeviceListBondDevicesToHclTerraform, true)(struct!.bondDevices),
      isBlock: true,
      type: "list",
      storageClassType: "FleetBondDeviceListBondDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetBondDeviceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetBondDeviceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondDevices = this._bondDevices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetBondDeviceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bondDevices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bondDevices.internalValue = value.bondDevices;
    }
  }

  // bond_devices - computed: false, optional: false, required: true
  private _bondDevices = new FleetBondDeviceListBondDevicesList(this, "bond_devices", false);
  public get bondDevices() {
    return this._bondDevices;
  }
  public putBondDevices(value: FleetBondDeviceListBondDevices[] | cdktf.IResolvable) {
    this._bondDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDevicesInput() {
    return this._bondDevices.internalValue;
  }
}
export interface FleetDcClusterGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetDcClusterGroupToTerraform(struct?: FleetDcClusterGroupOutputReference | FleetDcClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetDcClusterGroupToHclTerraform(struct?: FleetDcClusterGroupOutputReference | FleetDcClusterGroup): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetDcClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetDcClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface FleetDcClusterGroupInside {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetDcClusterGroupInsideToTerraform(struct?: FleetDcClusterGroupInsideOutputReference | FleetDcClusterGroupInside): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetDcClusterGroupInsideToHclTerraform(struct?: FleetDcClusterGroupInsideOutputReference | FleetDcClusterGroupInside): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetDcClusterGroupInsideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetDcClusterGroupInside | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetDcClusterGroupInside | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface FleetDeviceListDevicesNetworkDeviceInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetDeviceListDevicesNetworkDeviceInterfaceToTerraform(struct?: FleetDeviceListDevicesNetworkDeviceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetDeviceListDevicesNetworkDeviceInterfaceToHclTerraform(struct?: FleetDeviceListDevicesNetworkDeviceInterface | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetDeviceListDevicesNetworkDeviceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetDeviceListDevicesNetworkDeviceInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetDeviceListDevicesNetworkDeviceInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetDeviceListDevicesNetworkDeviceInterfaceList extends cdktf.ComplexList {
  public internalValue? : FleetDeviceListDevicesNetworkDeviceInterface[] | cdktf.IResolvable

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
  public get(index: number): FleetDeviceListDevicesNetworkDeviceInterfaceOutputReference {
    return new FleetDeviceListDevicesNetworkDeviceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetDeviceListDevicesNetworkDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#use Fleet#use}
  */
  readonly use: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#interface Fleet#interface}
  */
  readonly interface: FleetDeviceListDevicesNetworkDeviceInterface[] | cdktf.IResolvable;
}

export function fleetDeviceListDevicesNetworkDeviceToTerraform(struct?: FleetDeviceListDevicesNetworkDeviceOutputReference | FleetDeviceListDevicesNetworkDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use: cdktf.stringToTerraform(struct!.use),
    interface: cdktf.listMapper(fleetDeviceListDevicesNetworkDeviceInterfaceToTerraform, true)(struct!.interface),
  }
}


export function fleetDeviceListDevicesNetworkDeviceToHclTerraform(struct?: FleetDeviceListDevicesNetworkDeviceOutputReference | FleetDeviceListDevicesNetworkDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use: {
      value: cdktf.stringToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(fleetDeviceListDevicesNetworkDeviceInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "FleetDeviceListDevicesNetworkDeviceInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetDeviceListDevicesNetworkDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetDeviceListDevicesNetworkDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetDeviceListDevicesNetworkDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._use = undefined;
      this._interface.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._use = value.use;
      this._interface.internalValue = value.interface;
    }
  }

  // use - computed: false, optional: false, required: true
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new FleetDeviceListDevicesNetworkDeviceInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FleetDeviceListDevicesNetworkDeviceInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface FleetDeviceListDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#owner Fleet#owner}
  */
  readonly owner: string;
  /**
  * network_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#network_device Fleet#network_device}
  */
  readonly networkDevice?: FleetDeviceListDevicesNetworkDevice;
}

export function fleetDeviceListDevicesToTerraform(struct?: FleetDeviceListDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    network_device: fleetDeviceListDevicesNetworkDeviceToTerraform(struct!.networkDevice),
  }
}


export function fleetDeviceListDevicesToHclTerraform(struct?: FleetDeviceListDevices | cdktf.IResolvable): any {
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_device: {
      value: fleetDeviceListDevicesNetworkDeviceToHclTerraform(struct!.networkDevice),
      isBlock: true,
      type: "list",
      storageClassType: "FleetDeviceListDevicesNetworkDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetDeviceListDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetDeviceListDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._networkDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDevice = this._networkDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetDeviceListDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._networkDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._owner = value.owner;
      this._networkDevice.internalValue = value.networkDevice;
    }
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // network_device - computed: false, optional: true, required: false
  private _networkDevice = new FleetDeviceListDevicesNetworkDeviceOutputReference(this, "network_device");
  public get networkDevice() {
    return this._networkDevice;
  }
  public putNetworkDevice(value: FleetDeviceListDevicesNetworkDevice) {
    this._networkDevice.internalValue = value;
  }
  public resetNetworkDevice() {
    this._networkDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceInput() {
    return this._networkDevice.internalValue;
  }
}

export class FleetDeviceListDevicesList extends cdktf.ComplexList {
  public internalValue? : FleetDeviceListDevices[] | cdktf.IResolvable

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
  public get(index: number): FleetDeviceListDevicesOutputReference {
    return new FleetDeviceListDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetDeviceListStruct {
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#devices Fleet#devices}
  */
  readonly devices?: FleetDeviceListDevices[] | cdktf.IResolvable;
}

export function fleetDeviceListStructToTerraform(struct?: FleetDeviceListStructOutputReference | FleetDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(fleetDeviceListDevicesToTerraform, true)(struct!.devices),
  }
}


export function fleetDeviceListStructToHclTerraform(struct?: FleetDeviceListStructOutputReference | FleetDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(fleetDeviceListDevicesToHclTerraform, true)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "FleetDeviceListDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetDeviceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetDeviceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetDeviceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devices.internalValue = value.devices;
    }
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new FleetDeviceListDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: FleetDeviceListDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }
}
export interface FleetEnableVgpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#feature_type Fleet#feature_type}
  */
  readonly featureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#server_address Fleet#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#server_port Fleet#server_port}
  */
  readonly serverPort?: number;
}

export function fleetEnableVgpuToTerraform(struct?: FleetEnableVgpuOutputReference | FleetEnableVgpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_type: cdktf.stringToTerraform(struct!.featureType),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
  }
}


export function fleetEnableVgpuToHclTerraform(struct?: FleetEnableVgpuOutputReference | FleetEnableVgpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_type: {
      value: cdktf.stringToHclTerraform(struct!.featureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetEnableVgpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetEnableVgpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureType = this._featureType;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetEnableVgpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureType = undefined;
      this._serverAddress = undefined;
      this._serverPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureType = value.featureType;
      this._serverAddress = value.serverAddress;
      this._serverPort = value.serverPort;
    }
  }

  // feature_type - computed: false, optional: false, required: true
  private _featureType?: string; 
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
  public set featureType(value: string) {
    this._featureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTypeInput() {
    return this._featureType;
  }

  // server_address - computed: false, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }
}
export interface FleetEnableVm {
}

export function fleetEnableVmToTerraform(struct?: FleetEnableVmOutputReference | FleetEnableVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fleetEnableVmToHclTerraform(struct?: FleetEnableVmOutputReference | FleetEnableVm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FleetEnableVmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetEnableVm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetEnableVm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface FleetInsideVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetInsideVirtualNetworkToTerraform(struct?: FleetInsideVirtualNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetInsideVirtualNetworkToHclTerraform(struct?: FleetInsideVirtualNetwork | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetInsideVirtualNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetInsideVirtualNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetInsideVirtualNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetInsideVirtualNetworkList extends cdktf.ComplexList {
  public internalValue? : FleetInsideVirtualNetwork[] | cdktf.IResolvable

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
  public get(index: number): FleetInsideVirtualNetworkOutputReference {
    return new FleetInsideVirtualNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetInterfaceListInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetInterfaceListInterfacesToTerraform(struct?: FleetInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetInterfaceListInterfacesToHclTerraform(struct?: FleetInterfaceListInterfaces | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetInterfaceListInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetInterfaceListInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetInterfaceListInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetInterfaceListInterfacesList extends cdktf.ComplexList {
  public internalValue? : FleetInterfaceListInterfaces[] | cdktf.IResolvable

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
  public get(index: number): FleetInterfaceListInterfacesOutputReference {
    return new FleetInterfaceListInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetInterfaceListStruct {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#interfaces Fleet#interfaces}
  */
  readonly interfaces: FleetInterfaceListInterfaces[] | cdktf.IResolvable;
}

export function fleetInterfaceListStructToTerraform(struct?: FleetInterfaceListStructOutputReference | FleetInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(fleetInterfaceListInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function fleetInterfaceListStructToHclTerraform(struct?: FleetInterfaceListStructOutputReference | FleetInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(fleetInterfaceListInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "FleetInterfaceListInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetInterfaceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetInterfaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetInterfaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new FleetInterfaceListInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: FleetInterfaceListInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface FleetKubernetesUpgradeDrainEnableUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#disable_vega_upgrade_mode Fleet#disable_vega_upgrade_mode}
  */
  readonly disableVegaUpgradeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#drain_max_unavailable_node_count Fleet#drain_max_unavailable_node_count}
  */
  readonly drainMaxUnavailableNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#drain_max_unavailable_node_percentage Fleet#drain_max_unavailable_node_percentage}
  */
  readonly drainMaxUnavailableNodePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#drain_node_timeout Fleet#drain_node_timeout}
  */
  readonly drainNodeTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_vega_upgrade_mode Fleet#enable_vega_upgrade_mode}
  */
  readonly enableVegaUpgradeMode?: boolean | cdktf.IResolvable;
}

export function fleetKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct?: FleetKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | FleetKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.disableVegaUpgradeMode),
    drain_max_unavailable_node_count: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodeCount),
    drain_max_unavailable_node_percentage: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodePercentage),
    drain_node_timeout: cdktf.numberToTerraform(struct!.drainNodeTimeout),
    enable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.enableVegaUpgradeMode),
  }
}


export function fleetKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct?: FleetKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | FleetKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.disableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drain_max_unavailable_node_count: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_max_unavailable_node_percentage: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_node_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainNodeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetKubernetesUpgradeDrainEnableUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetKubernetesUpgradeDrainEnableUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVegaUpgradeMode = this._disableVegaUpgradeMode;
    }
    if (this._drainMaxUnavailableNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodeCount = this._drainMaxUnavailableNodeCount;
    }
    if (this._drainMaxUnavailableNodePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodePercentage = this._drainMaxUnavailableNodePercentage;
    }
    if (this._drainNodeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainNodeTimeout = this._drainNodeTimeout;
    }
    if (this._enableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVegaUpgradeMode = this._enableVegaUpgradeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetKubernetesUpgradeDrainEnableUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVegaUpgradeMode = undefined;
      this._drainMaxUnavailableNodeCount = undefined;
      this._drainMaxUnavailableNodePercentage = undefined;
      this._drainNodeTimeout = undefined;
      this._enableVegaUpgradeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVegaUpgradeMode = value.disableVegaUpgradeMode;
      this._drainMaxUnavailableNodeCount = value.drainMaxUnavailableNodeCount;
      this._drainMaxUnavailableNodePercentage = value.drainMaxUnavailableNodePercentage;
      this._drainNodeTimeout = value.drainNodeTimeout;
      this._enableVegaUpgradeMode = value.enableVegaUpgradeMode;
    }
  }

  // disable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _disableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get disableVegaUpgradeMode() {
    return this.getBooleanAttribute('disable_vega_upgrade_mode');
  }
  public set disableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._disableVegaUpgradeMode = value;
  }
  public resetDisableVegaUpgradeMode() {
    this._disableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVegaUpgradeModeInput() {
    return this._disableVegaUpgradeMode;
  }

  // drain_max_unavailable_node_count - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodeCount?: number; 
  public get drainMaxUnavailableNodeCount() {
    return this.getNumberAttribute('drain_max_unavailable_node_count');
  }
  public set drainMaxUnavailableNodeCount(value: number) {
    this._drainMaxUnavailableNodeCount = value;
  }
  public resetDrainMaxUnavailableNodeCount() {
    this._drainMaxUnavailableNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodeCountInput() {
    return this._drainMaxUnavailableNodeCount;
  }

  // drain_max_unavailable_node_percentage - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodePercentage?: number; 
  public get drainMaxUnavailableNodePercentage() {
    return this.getNumberAttribute('drain_max_unavailable_node_percentage');
  }
  public set drainMaxUnavailableNodePercentage(value: number) {
    this._drainMaxUnavailableNodePercentage = value;
  }
  public resetDrainMaxUnavailableNodePercentage() {
    this._drainMaxUnavailableNodePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodePercentageInput() {
    return this._drainMaxUnavailableNodePercentage;
  }

  // drain_node_timeout - computed: false, optional: false, required: true
  private _drainNodeTimeout?: number; 
  public get drainNodeTimeout() {
    return this.getNumberAttribute('drain_node_timeout');
  }
  public set drainNodeTimeout(value: number) {
    this._drainNodeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNodeTimeoutInput() {
    return this._drainNodeTimeout;
  }

  // enable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _enableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get enableVegaUpgradeMode() {
    return this.getBooleanAttribute('enable_vega_upgrade_mode');
  }
  public set enableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._enableVegaUpgradeMode = value;
  }
  public resetEnableVegaUpgradeMode() {
    this._enableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVegaUpgradeModeInput() {
    return this._enableVegaUpgradeMode;
  }
}
export interface FleetKubernetesUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#disable_upgrade_drain Fleet#disable_upgrade_drain}
  */
  readonly disableUpgradeDrain?: boolean | cdktf.IResolvable;
  /**
  * enable_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_upgrade_drain Fleet#enable_upgrade_drain}
  */
  readonly enableUpgradeDrain?: FleetKubernetesUpgradeDrainEnableUpgradeDrain;
}

export function fleetKubernetesUpgradeDrainToTerraform(struct?: FleetKubernetesUpgradeDrainOutputReference | FleetKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_upgrade_drain: cdktf.booleanToTerraform(struct!.disableUpgradeDrain),
    enable_upgrade_drain: fleetKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct!.enableUpgradeDrain),
  }
}


export function fleetKubernetesUpgradeDrainToHclTerraform(struct?: FleetKubernetesUpgradeDrainOutputReference | FleetKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_upgrade_drain: {
      value: cdktf.booleanToHclTerraform(struct!.disableUpgradeDrain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upgrade_drain: {
      value: fleetKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct!.enableUpgradeDrain),
      isBlock: true,
      type: "list",
      storageClassType: "FleetKubernetesUpgradeDrainEnableUpgradeDrainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetKubernetesUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetKubernetesUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableUpgradeDrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUpgradeDrain = this._disableUpgradeDrain;
    }
    if (this._enableUpgradeDrain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUpgradeDrain = this._enableUpgradeDrain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetKubernetesUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableUpgradeDrain = undefined;
      this._enableUpgradeDrain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableUpgradeDrain = value.disableUpgradeDrain;
      this._enableUpgradeDrain.internalValue = value.enableUpgradeDrain;
    }
  }

  // disable_upgrade_drain - computed: false, optional: true, required: false
  private _disableUpgradeDrain?: boolean | cdktf.IResolvable; 
  public get disableUpgradeDrain() {
    return this.getBooleanAttribute('disable_upgrade_drain');
  }
  public set disableUpgradeDrain(value: boolean | cdktf.IResolvable) {
    this._disableUpgradeDrain = value;
  }
  public resetDisableUpgradeDrain() {
    this._disableUpgradeDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeDrainInput() {
    return this._disableUpgradeDrain;
  }

  // enable_upgrade_drain - computed: false, optional: true, required: false
  private _enableUpgradeDrain = new FleetKubernetesUpgradeDrainEnableUpgradeDrainOutputReference(this, "enable_upgrade_drain");
  public get enableUpgradeDrain() {
    return this._enableUpgradeDrain;
  }
  public putEnableUpgradeDrain(value: FleetKubernetesUpgradeDrainEnableUpgradeDrain) {
    this._enableUpgradeDrain.internalValue = value;
  }
  public resetEnableUpgradeDrain() {
    this._enableUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpgradeDrainInput() {
    return this._enableUpgradeDrain.internalValue;
  }
}
export interface FleetLogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetLogReceiverToTerraform(struct?: FleetLogReceiverOutputReference | FleetLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetLogReceiverToHclTerraform(struct?: FleetLogReceiverOutputReference | FleetLogReceiver): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetLogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetLogReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetLogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface FleetNetworkConnectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetNetworkConnectorsToTerraform(struct?: FleetNetworkConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetNetworkConnectorsToHclTerraform(struct?: FleetNetworkConnectors | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetNetworkConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetNetworkConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetNetworkConnectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetNetworkConnectorsList extends cdktf.ComplexList {
  public internalValue? : FleetNetworkConnectors[] | cdktf.IResolvable

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
  public get(index: number): FleetNetworkConnectorsOutputReference {
    return new FleetNetworkConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetNetworkFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetNetworkFirewallToTerraform(struct?: FleetNetworkFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetNetworkFirewallToHclTerraform(struct?: FleetNetworkFirewall | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetNetworkFirewallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetNetworkFirewall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetNetworkFirewall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetNetworkFirewallList extends cdktf.ComplexList {
  public internalValue? : FleetNetworkFirewall[] | cdktf.IResolvable

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
  public get(index: number): FleetNetworkFirewallOutputReference {
    return new FleetNetworkFirewallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetOutsideVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetOutsideVirtualNetworkToTerraform(struct?: FleetOutsideVirtualNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetOutsideVirtualNetworkToHclTerraform(struct?: FleetOutsideVirtualNetwork | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetOutsideVirtualNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetOutsideVirtualNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetOutsideVirtualNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetOutsideVirtualNetworkList extends cdktf.ComplexList {
  public internalValue? : FleetOutsideVirtualNetwork[] | cdktf.IResolvable

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
  public get(index: number): FleetOutsideVirtualNetworkOutputReference {
    return new FleetOutsideVirtualNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetPerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#jumbo Fleet#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_jumbo Fleet#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function fleetPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: FleetPerformanceEnhancementModePerfModeL3EnhancedOutputReference | FleetPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function fleetPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: FleetPerformanceEnhancementModePerfModeL3EnhancedOutputReference | FleetPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetPerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetPerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetPerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface FleetPerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#perf_mode_l7_enhanced Fleet#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#perf_mode_l3_enhanced Fleet#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: FleetPerformanceEnhancementModePerfModeL3Enhanced;
}

export function fleetPerformanceEnhancementModeToTerraform(struct?: FleetPerformanceEnhancementModeOutputReference | FleetPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: fleetPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function fleetPerformanceEnhancementModeToHclTerraform(struct?: FleetPerformanceEnhancementModeOutputReference | FleetPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: fleetPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "FleetPerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetPerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetPerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetPerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new FleetPerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: FleetPerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface FleetSriovInterfacesSriovInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#interface_name Fleet#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#number_of_vfio_vfs Fleet#number_of_vfio_vfs}
  */
  readonly numberOfVfioVfs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#number_of_vfs Fleet#number_of_vfs}
  */
  readonly numberOfVfs: number;
}

export function fleetSriovInterfacesSriovInterfaceToTerraform(struct?: FleetSriovInterfacesSriovInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    number_of_vfio_vfs: cdktf.numberToTerraform(struct!.numberOfVfioVfs),
    number_of_vfs: cdktf.numberToTerraform(struct!.numberOfVfs),
  }
}


export function fleetSriovInterfacesSriovInterfaceToHclTerraform(struct?: FleetSriovInterfacesSriovInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_vfio_vfs: {
      value: cdktf.numberToHclTerraform(struct!.numberOfVfioVfs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_vfs: {
      value: cdktf.numberToHclTerraform(struct!.numberOfVfs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSriovInterfacesSriovInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetSriovInterfacesSriovInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._numberOfVfioVfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfVfioVfs = this._numberOfVfioVfs;
    }
    if (this._numberOfVfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfVfs = this._numberOfVfs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSriovInterfacesSriovInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._numberOfVfioVfs = undefined;
      this._numberOfVfs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._numberOfVfioVfs = value.numberOfVfioVfs;
      this._numberOfVfs = value.numberOfVfs;
    }
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // number_of_vfio_vfs - computed: false, optional: true, required: false
  private _numberOfVfioVfs?: number; 
  public get numberOfVfioVfs() {
    return this.getNumberAttribute('number_of_vfio_vfs');
  }
  public set numberOfVfioVfs(value: number) {
    this._numberOfVfioVfs = value;
  }
  public resetNumberOfVfioVfs() {
    this._numberOfVfioVfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfVfioVfsInput() {
    return this._numberOfVfioVfs;
  }

  // number_of_vfs - computed: false, optional: false, required: true
  private _numberOfVfs?: number; 
  public get numberOfVfs() {
    return this.getNumberAttribute('number_of_vfs');
  }
  public set numberOfVfs(value: number) {
    this._numberOfVfs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfVfsInput() {
    return this._numberOfVfs;
  }
}

export class FleetSriovInterfacesSriovInterfaceList extends cdktf.ComplexList {
  public internalValue? : FleetSriovInterfacesSriovInterface[] | cdktf.IResolvable

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
  public get(index: number): FleetSriovInterfacesSriovInterfaceOutputReference {
    return new FleetSriovInterfacesSriovInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetSriovInterfaces {
  /**
  * sriov_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#sriov_interface Fleet#sriov_interface}
  */
  readonly sriovInterface?: FleetSriovInterfacesSriovInterface[] | cdktf.IResolvable;
}

export function fleetSriovInterfacesToTerraform(struct?: FleetSriovInterfacesOutputReference | FleetSriovInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sriov_interface: cdktf.listMapper(fleetSriovInterfacesSriovInterfaceToTerraform, true)(struct!.sriovInterface),
  }
}


export function fleetSriovInterfacesToHclTerraform(struct?: FleetSriovInterfacesOutputReference | FleetSriovInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sriov_interface: {
      value: cdktf.listMapperHcl(fleetSriovInterfacesSriovInterfaceToHclTerraform, true)(struct!.sriovInterface),
      isBlock: true,
      type: "list",
      storageClassType: "FleetSriovInterfacesSriovInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSriovInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSriovInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sriovInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sriovInterface = this._sriovInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSriovInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sriovInterface.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sriovInterface.internalValue = value.sriovInterface;
    }
  }

  // sriov_interface - computed: false, optional: true, required: false
  private _sriovInterface = new FleetSriovInterfacesSriovInterfaceList(this, "sriov_interface", false);
  public get sriovInterface() {
    return this._sriovInterface;
  }
  public putSriovInterface(value: FleetSriovInterfacesSriovInterface[] | cdktf.IResolvable) {
    this._sriovInterface.internalValue = value;
  }
  public resetSriovInterface() {
    this._sriovInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovInterfaceInput() {
    return this._sriovInterface.internalValue;
  }
}
export interface FleetStorageClassListStorageClassesCustomStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#yaml Fleet#yaml}
  */
  readonly yaml?: string;
}

export function fleetStorageClassListStorageClassesCustomStorageToTerraform(struct?: FleetStorageClassListStorageClassesCustomStorageOutputReference | FleetStorageClassListStorageClassesCustomStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    yaml: cdktf.stringToTerraform(struct!.yaml),
  }
}


export function fleetStorageClassListStorageClassesCustomStorageToHclTerraform(struct?: FleetStorageClassListStorageClassesCustomStorageOutputReference | FleetStorageClassListStorageClassesCustomStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    yaml: {
      value: cdktf.stringToHclTerraform(struct!.yaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageClassListStorageClassesCustomStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageClassListStorageClassesCustomStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._yaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaml = this._yaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageClassListStorageClassesCustomStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._yaml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._yaml = value.yaml;
    }
  }

  // yaml - computed: false, optional: true, required: false
  private _yaml?: string; 
  public get yaml() {
    return this.getStringAttribute('yaml');
  }
  public set yaml(value: string) {
    this._yaml = value;
  }
  public resetYaml() {
    this._yaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml;
  }
}
export interface FleetStorageClassListStorageClassesHpeStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#allow_mutations Fleet#allow_mutations}
  */
  readonly allowMutations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#allow_overrides Fleet#allow_overrides}
  */
  readonly allowOverrides?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#dedupe_enabled Fleet#dedupe_enabled}
  */
  readonly dedupeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#description Fleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#destroy_on_delete Fleet#destroy_on_delete}
  */
  readonly destroyOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#encrypted Fleet#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#folder Fleet#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#limit_iops Fleet#limit_iops}
  */
  readonly limitIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#limit_mbps Fleet#limit_mbps}
  */
  readonly limitMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#performance_policy Fleet#performance_policy}
  */
  readonly performancePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#pool Fleet#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#protection_template Fleet#protection_template}
  */
  readonly protectionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_name Fleet#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_namespace Fleet#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#sync_on_detach Fleet#sync_on_detach}
  */
  readonly syncOnDetach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#thick Fleet#thick}
  */
  readonly thick?: boolean | cdktf.IResolvable;
}

export function fleetStorageClassListStorageClassesHpeStorageToTerraform(struct?: FleetStorageClassListStorageClassesHpeStorageOutputReference | FleetStorageClassListStorageClassesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_mutations: cdktf.stringToTerraform(struct!.allowMutations),
    allow_overrides: cdktf.stringToTerraform(struct!.allowOverrides),
    dedupe_enabled: cdktf.booleanToTerraform(struct!.dedupeEnabled),
    description: cdktf.stringToTerraform(struct!.description),
    destroy_on_delete: cdktf.booleanToTerraform(struct!.destroyOnDelete),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    folder: cdktf.stringToTerraform(struct!.folder),
    limit_iops: cdktf.numberToTerraform(struct!.limitIops),
    limit_mbps: cdktf.numberToTerraform(struct!.limitMbps),
    performance_policy: cdktf.stringToTerraform(struct!.performancePolicy),
    pool: cdktf.stringToTerraform(struct!.pool),
    protection_template: cdktf.stringToTerraform(struct!.protectionTemplate),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    sync_on_detach: cdktf.booleanToTerraform(struct!.syncOnDetach),
    thick: cdktf.booleanToTerraform(struct!.thick),
  }
}


export function fleetStorageClassListStorageClassesHpeStorageToHclTerraform(struct?: FleetStorageClassListStorageClassesHpeStorageOutputReference | FleetStorageClassListStorageClassesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_mutations: {
      value: cdktf.stringToHclTerraform(struct!.allowMutations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_overrides: {
      value: cdktf.stringToHclTerraform(struct!.allowOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedupe_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dedupeEnabled),
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
    destroy_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.destroyOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_iops: {
      value: cdktf.numberToHclTerraform(struct!.limitIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_mbps: {
      value: cdktf.numberToHclTerraform(struct!.limitMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_policy: {
      value: cdktf.stringToHclTerraform(struct!.performancePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_template: {
      value: cdktf.stringToHclTerraform(struct!.protectionTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_on_detach: {
      value: cdktf.booleanToHclTerraform(struct!.syncOnDetach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thick: {
      value: cdktf.booleanToHclTerraform(struct!.thick),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageClassListStorageClassesHpeStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageClassListStorageClassesHpeStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMutations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMutations = this._allowMutations;
    }
    if (this._allowOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOverrides = this._allowOverrides;
    }
    if (this._dedupeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeEnabled = this._dedupeEnabled;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destroyOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.destroyOnDelete = this._destroyOnDelete;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._limitIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitIops = this._limitIops;
    }
    if (this._limitMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMbps = this._limitMbps;
    }
    if (this._performancePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.performancePolicy = this._performancePolicy;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._protectionTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionTemplate = this._protectionTemplate;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    if (this._syncOnDetach !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOnDetach = this._syncOnDetach;
    }
    if (this._thick !== undefined) {
      hasAnyValues = true;
      internalValueResult.thick = this._thick;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageClassListStorageClassesHpeStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowMutations = undefined;
      this._allowOverrides = undefined;
      this._dedupeEnabled = undefined;
      this._description = undefined;
      this._destroyOnDelete = undefined;
      this._encrypted = undefined;
      this._folder = undefined;
      this._limitIops = undefined;
      this._limitMbps = undefined;
      this._performancePolicy = undefined;
      this._pool = undefined;
      this._protectionTemplate = undefined;
      this._secretName = undefined;
      this._secretNamespace = undefined;
      this._syncOnDetach = undefined;
      this._thick = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowMutations = value.allowMutations;
      this._allowOverrides = value.allowOverrides;
      this._dedupeEnabled = value.dedupeEnabled;
      this._description = value.description;
      this._destroyOnDelete = value.destroyOnDelete;
      this._encrypted = value.encrypted;
      this._folder = value.folder;
      this._limitIops = value.limitIops;
      this._limitMbps = value.limitMbps;
      this._performancePolicy = value.performancePolicy;
      this._pool = value.pool;
      this._protectionTemplate = value.protectionTemplate;
      this._secretName = value.secretName;
      this._secretNamespace = value.secretNamespace;
      this._syncOnDetach = value.syncOnDetach;
      this._thick = value.thick;
    }
  }

  // allow_mutations - computed: false, optional: true, required: false
  private _allowMutations?: string; 
  public get allowMutations() {
    return this.getStringAttribute('allow_mutations');
  }
  public set allowMutations(value: string) {
    this._allowMutations = value;
  }
  public resetAllowMutations() {
    this._allowMutations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMutationsInput() {
    return this._allowMutations;
  }

  // allow_overrides - computed: false, optional: true, required: false
  private _allowOverrides?: string; 
  public get allowOverrides() {
    return this.getStringAttribute('allow_overrides');
  }
  public set allowOverrides(value: string) {
    this._allowOverrides = value;
  }
  public resetAllowOverrides() {
    this._allowOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverridesInput() {
    return this._allowOverrides;
  }

  // dedupe_enabled - computed: false, optional: true, required: false
  private _dedupeEnabled?: boolean | cdktf.IResolvable; 
  public get dedupeEnabled() {
    return this.getBooleanAttribute('dedupe_enabled');
  }
  public set dedupeEnabled(value: boolean | cdktf.IResolvable) {
    this._dedupeEnabled = value;
  }
  public resetDedupeEnabled() {
    this._dedupeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeEnabledInput() {
    return this._dedupeEnabled;
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

  // destroy_on_delete - computed: false, optional: true, required: false
  private _destroyOnDelete?: boolean | cdktf.IResolvable; 
  public get destroyOnDelete() {
    return this.getBooleanAttribute('destroy_on_delete');
  }
  public set destroyOnDelete(value: boolean | cdktf.IResolvable) {
    this._destroyOnDelete = value;
  }
  public resetDestroyOnDelete() {
    this._destroyOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyOnDeleteInput() {
    return this._destroyOnDelete;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit_iops - computed: false, optional: true, required: false
  private _limitIops?: number; 
  public get limitIops() {
    return this.getNumberAttribute('limit_iops');
  }
  public set limitIops(value: number) {
    this._limitIops = value;
  }
  public resetLimitIops() {
    this._limitIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIopsInput() {
    return this._limitIops;
  }

  // limit_mbps - computed: false, optional: true, required: false
  private _limitMbps?: number; 
  public get limitMbps() {
    return this.getNumberAttribute('limit_mbps');
  }
  public set limitMbps(value: number) {
    this._limitMbps = value;
  }
  public resetLimitMbps() {
    this._limitMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMbpsInput() {
    return this._limitMbps;
  }

  // performance_policy - computed: false, optional: true, required: false
  private _performancePolicy?: string; 
  public get performancePolicy() {
    return this.getStringAttribute('performance_policy');
  }
  public set performancePolicy(value: string) {
    this._performancePolicy = value;
  }
  public resetPerformancePolicy() {
    this._performancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performancePolicyInput() {
    return this._performancePolicy;
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

  // protection_template - computed: false, optional: true, required: false
  private _protectionTemplate?: string; 
  public get protectionTemplate() {
    return this.getStringAttribute('protection_template');
  }
  public set protectionTemplate(value: string) {
    this._protectionTemplate = value;
  }
  public resetProtectionTemplate() {
    this._protectionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionTemplateInput() {
    return this._protectionTemplate;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // sync_on_detach - computed: false, optional: true, required: false
  private _syncOnDetach?: boolean | cdktf.IResolvable; 
  public get syncOnDetach() {
    return this.getBooleanAttribute('sync_on_detach');
  }
  public set syncOnDetach(value: boolean | cdktf.IResolvable) {
    this._syncOnDetach = value;
  }
  public resetSyncOnDetach() {
    this._syncOnDetach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOnDetachInput() {
    return this._syncOnDetach;
  }

  // thick - computed: false, optional: true, required: false
  private _thick?: boolean | cdktf.IResolvable; 
  public get thick() {
    return this.getBooleanAttribute('thick');
  }
  public set thick(value: boolean | cdktf.IResolvable) {
    this._thick = value;
  }
  public resetThick() {
    this._thick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thickInput() {
    return this._thick;
  }
}
export interface FleetStorageClassListStorageClassesNetappTrident {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#selector Fleet#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_pools Fleet#storage_pools}
  */
  readonly storagePools?: string;
}

export function fleetStorageClassListStorageClassesNetappTridentToTerraform(struct?: FleetStorageClassListStorageClassesNetappTridentOutputReference | FleetStorageClassListStorageClassesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    storage_pools: cdktf.stringToTerraform(struct!.storagePools),
  }
}


export function fleetStorageClassListStorageClassesNetappTridentToHclTerraform(struct?: FleetStorageClassListStorageClassesNetappTridentOutputReference | FleetStorageClassListStorageClassesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage_pools: {
      value: cdktf.stringToHclTerraform(struct!.storagePools),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageClassListStorageClassesNetappTridentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageClassListStorageClassesNetappTrident | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageClassListStorageClassesNetappTrident | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
      this._storagePools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
      this._storagePools = value.storagePools;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string; 
  public get storagePools() {
    return this.getStringAttribute('storage_pools');
  }
  public set storagePools(value: string) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
  }
}
export interface FleetStorageClassListStorageClassesPureServiceOrchestrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#backend Fleet#backend}
  */
  readonly backend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#bandwidth_limit Fleet#bandwidth_limit}
  */
  readonly bandwidthLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#iops_limit Fleet#iops_limit}
  */
  readonly iopsLimit?: number;
}

export function fleetStorageClassListStorageClassesPureServiceOrchestratorToTerraform(struct?: FleetStorageClassListStorageClassesPureServiceOrchestratorOutputReference | FleetStorageClassListStorageClassesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdktf.stringToTerraform(struct!.backend),
    bandwidth_limit: cdktf.stringToTerraform(struct!.bandwidthLimit),
    iops_limit: cdktf.numberToTerraform(struct!.iopsLimit),
  }
}


export function fleetStorageClassListStorageClassesPureServiceOrchestratorToHclTerraform(struct?: FleetStorageClassListStorageClassesPureServiceOrchestratorOutputReference | FleetStorageClassListStorageClassesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: cdktf.stringToHclTerraform(struct!.backend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_limit: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops_limit: {
      value: cdktf.numberToHclTerraform(struct!.iopsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageClassListStorageClassesPureServiceOrchestratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageClassListStorageClassesPureServiceOrchestrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend;
    }
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._iopsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsLimit = this._iopsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageClassListStorageClassesPureServiceOrchestrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backend = undefined;
      this._bandwidthLimit = undefined;
      this._iopsLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backend = value.backend;
      this._bandwidthLimit = value.bandwidthLimit;
      this._iopsLimit = value.iopsLimit;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: string; 
  public get bandwidthLimit() {
    return this.getStringAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: string) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // iops_limit - computed: false, optional: true, required: false
  private _iopsLimit?: number; 
  public get iopsLimit() {
    return this.getNumberAttribute('iops_limit');
  }
  public set iopsLimit(value: number) {
    this._iopsLimit = value;
  }
  public resetIopsLimit() {
    this._iopsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsLimitInput() {
    return this._iopsLimit;
  }
}
export interface FleetStorageClassListStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#advanced_storage_parameters Fleet#advanced_storage_parameters}
  */
  readonly advancedStorageParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#allow_volume_expansion Fleet#allow_volume_expansion}
  */
  readonly allowVolumeExpansion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#default_storage_class Fleet#default_storage_class}
  */
  readonly defaultStorageClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#description Fleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#reclaim_policy Fleet#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_class_name Fleet#storage_class_name}
  */
  readonly storageClassName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_device Fleet#storage_device}
  */
  readonly storageDevice: string;
  /**
  * custom_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#custom_storage Fleet#custom_storage}
  */
  readonly customStorage?: FleetStorageClassListStorageClassesCustomStorage;
  /**
  * hpe_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#hpe_storage Fleet#hpe_storage}
  */
  readonly hpeStorage?: FleetStorageClassListStorageClassesHpeStorage;
  /**
  * netapp_trident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#netapp_trident Fleet#netapp_trident}
  */
  readonly netappTrident?: FleetStorageClassListStorageClassesNetappTrident;
  /**
  * pure_service_orchestrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#pure_service_orchestrator Fleet#pure_service_orchestrator}
  */
  readonly pureServiceOrchestrator?: FleetStorageClassListStorageClassesPureServiceOrchestrator;
}

export function fleetStorageClassListStorageClassesToTerraform(struct?: FleetStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_storage_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.advancedStorageParameters),
    allow_volume_expansion: cdktf.booleanToTerraform(struct!.allowVolumeExpansion),
    default_storage_class: cdktf.booleanToTerraform(struct!.defaultStorageClass),
    description: cdktf.stringToTerraform(struct!.description),
    reclaim_policy: cdktf.stringToTerraform(struct!.reclaimPolicy),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    storage_device: cdktf.stringToTerraform(struct!.storageDevice),
    custom_storage: fleetStorageClassListStorageClassesCustomStorageToTerraform(struct!.customStorage),
    hpe_storage: fleetStorageClassListStorageClassesHpeStorageToTerraform(struct!.hpeStorage),
    netapp_trident: fleetStorageClassListStorageClassesNetappTridentToTerraform(struct!.netappTrident),
    pure_service_orchestrator: fleetStorageClassListStorageClassesPureServiceOrchestratorToTerraform(struct!.pureServiceOrchestrator),
  }
}


export function fleetStorageClassListStorageClassesToHclTerraform(struct?: FleetStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_storage_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.advancedStorageParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allow_volume_expansion: {
      value: cdktf.booleanToHclTerraform(struct!.allowVolumeExpansion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_storage_class: {
      value: cdktf.booleanToHclTerraform(struct!.defaultStorageClass),
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
    reclaim_policy: {
      value: cdktf.stringToHclTerraform(struct!.reclaimPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_device: {
      value: cdktf.stringToHclTerraform(struct!.storageDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_storage: {
      value: fleetStorageClassListStorageClassesCustomStorageToHclTerraform(struct!.customStorage),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageClassListStorageClassesCustomStorageList",
    },
    hpe_storage: {
      value: fleetStorageClassListStorageClassesHpeStorageToHclTerraform(struct!.hpeStorage),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageClassListStorageClassesHpeStorageList",
    },
    netapp_trident: {
      value: fleetStorageClassListStorageClassesNetappTridentToHclTerraform(struct!.netappTrident),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageClassListStorageClassesNetappTridentList",
    },
    pure_service_orchestrator: {
      value: fleetStorageClassListStorageClassesPureServiceOrchestratorToHclTerraform(struct!.pureServiceOrchestrator),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageClassListStorageClassesPureServiceOrchestratorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageClassListStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageClassListStorageClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedStorageParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedStorageParameters = this._advancedStorageParameters;
    }
    if (this._allowVolumeExpansion !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVolumeExpansion = this._allowVolumeExpansion;
    }
    if (this._defaultStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorageClass = this._defaultStorageClass;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._reclaimPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimPolicy = this._reclaimPolicy;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._storageDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevice = this._storageDevice;
    }
    if (this._customStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStorage = this._customStorage?.internalValue;
    }
    if (this._hpeStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpeStorage = this._hpeStorage?.internalValue;
    }
    if (this._netappTrident?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappTrident = this._netappTrident?.internalValue;
    }
    if (this._pureServiceOrchestrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pureServiceOrchestrator = this._pureServiceOrchestrator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageClassListStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedStorageParameters = undefined;
      this._allowVolumeExpansion = undefined;
      this._defaultStorageClass = undefined;
      this._description = undefined;
      this._reclaimPolicy = undefined;
      this._storageClassName = undefined;
      this._storageDevice = undefined;
      this._customStorage.internalValue = undefined;
      this._hpeStorage.internalValue = undefined;
      this._netappTrident.internalValue = undefined;
      this._pureServiceOrchestrator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedStorageParameters = value.advancedStorageParameters;
      this._allowVolumeExpansion = value.allowVolumeExpansion;
      this._defaultStorageClass = value.defaultStorageClass;
      this._description = value.description;
      this._reclaimPolicy = value.reclaimPolicy;
      this._storageClassName = value.storageClassName;
      this._storageDevice = value.storageDevice;
      this._customStorage.internalValue = value.customStorage;
      this._hpeStorage.internalValue = value.hpeStorage;
      this._netappTrident.internalValue = value.netappTrident;
      this._pureServiceOrchestrator.internalValue = value.pureServiceOrchestrator;
    }
  }

  // advanced_storage_parameters - computed: false, optional: true, required: false
  private _advancedStorageParameters?: { [key: string]: string }; 
  public get advancedStorageParameters() {
    return this.getStringMapAttribute('advanced_storage_parameters');
  }
  public set advancedStorageParameters(value: { [key: string]: string }) {
    this._advancedStorageParameters = value;
  }
  public resetAdvancedStorageParameters() {
    this._advancedStorageParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedStorageParametersInput() {
    return this._advancedStorageParameters;
  }

  // allow_volume_expansion - computed: false, optional: true, required: false
  private _allowVolumeExpansion?: boolean | cdktf.IResolvable; 
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }
  public set allowVolumeExpansion(value: boolean | cdktf.IResolvable) {
    this._allowVolumeExpansion = value;
  }
  public resetAllowVolumeExpansion() {
    this._allowVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVolumeExpansionInput() {
    return this._allowVolumeExpansion;
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: boolean | cdktf.IResolvable; 
  public get defaultStorageClass() {
    return this.getBooleanAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: boolean | cdktf.IResolvable) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass;
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

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string; 
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy;
  }

  // storage_class_name - computed: false, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // storage_device - computed: false, optional: false, required: true
  private _storageDevice?: string; 
  public get storageDevice() {
    return this.getStringAttribute('storage_device');
  }
  public set storageDevice(value: string) {
    this._storageDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceInput() {
    return this._storageDevice;
  }

  // custom_storage - computed: false, optional: true, required: false
  private _customStorage = new FleetStorageClassListStorageClassesCustomStorageOutputReference(this, "custom_storage");
  public get customStorage() {
    return this._customStorage;
  }
  public putCustomStorage(value: FleetStorageClassListStorageClassesCustomStorage) {
    this._customStorage.internalValue = value;
  }
  public resetCustomStorage() {
    this._customStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStorageInput() {
    return this._customStorage.internalValue;
  }

  // hpe_storage - computed: false, optional: true, required: false
  private _hpeStorage = new FleetStorageClassListStorageClassesHpeStorageOutputReference(this, "hpe_storage");
  public get hpeStorage() {
    return this._hpeStorage;
  }
  public putHpeStorage(value: FleetStorageClassListStorageClassesHpeStorage) {
    this._hpeStorage.internalValue = value;
  }
  public resetHpeStorage() {
    this._hpeStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpeStorageInput() {
    return this._hpeStorage.internalValue;
  }

  // netapp_trident - computed: false, optional: true, required: false
  private _netappTrident = new FleetStorageClassListStorageClassesNetappTridentOutputReference(this, "netapp_trident");
  public get netappTrident() {
    return this._netappTrident;
  }
  public putNetappTrident(value: FleetStorageClassListStorageClassesNetappTrident) {
    this._netappTrident.internalValue = value;
  }
  public resetNetappTrident() {
    this._netappTrident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappTridentInput() {
    return this._netappTrident.internalValue;
  }

  // pure_service_orchestrator - computed: false, optional: true, required: false
  private _pureServiceOrchestrator = new FleetStorageClassListStorageClassesPureServiceOrchestratorOutputReference(this, "pure_service_orchestrator");
  public get pureServiceOrchestrator() {
    return this._pureServiceOrchestrator;
  }
  public putPureServiceOrchestrator(value: FleetStorageClassListStorageClassesPureServiceOrchestrator) {
    this._pureServiceOrchestrator.internalValue = value;
  }
  public resetPureServiceOrchestrator() {
    this._pureServiceOrchestrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureServiceOrchestratorInput() {
    return this._pureServiceOrchestrator.internalValue;
  }
}

export class FleetStorageClassListStorageClassesList extends cdktf.ComplexList {
  public internalValue? : FleetStorageClassListStorageClasses[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageClassListStorageClassesOutputReference {
    return new FleetStorageClassListStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageClassListStruct {
  /**
  * storage_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_classes Fleet#storage_classes}
  */
  readonly storageClasses?: FleetStorageClassListStorageClasses[] | cdktf.IResolvable;
}

export function fleetStorageClassListStructToTerraform(struct?: FleetStorageClassListStructOutputReference | FleetStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_classes: cdktf.listMapper(fleetStorageClassListStorageClassesToTerraform, true)(struct!.storageClasses),
  }
}


export function fleetStorageClassListStructToHclTerraform(struct?: FleetStorageClassListStructOutputReference | FleetStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_classes: {
      value: cdktf.listMapperHcl(fleetStorageClassListStorageClassesToHclTerraform, true)(struct!.storageClasses),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageClassListStorageClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageClasses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new FleetStorageClassListStorageClassesList(this, "storage_classes", false);
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: FleetStorageClassListStorageClasses[] | cdktf.IResolvable) {
    this._storageClasses.internalValue = value;
  }
  public resetStorageClasses() {
    this._storageClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference | FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesHpeStoragePassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStoragePasswordToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference | FleetStorageDeviceListStorageDevicesHpeStoragePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStoragePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStoragePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesHpeStoragePasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesHpeStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#api_server_port Fleet#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#csi_version Fleet#csi_version}
  */
  readonly csiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#iscsi_chap_user Fleet#iscsi_chap_user}
  */
  readonly iscsiChapUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#log_level Fleet#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_server_ip_address Fleet#storage_server_ip_address}
  */
  readonly storageServerIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_server_name Fleet#storage_server_name}
  */
  readonly storageServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#username Fleet#username}
  */
  readonly username: string;
  /**
  * iscsi_chap_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#iscsi_chap_password Fleet#iscsi_chap_password}
  */
  readonly iscsiChapPassword?: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#password Fleet#password}
  */
  readonly password?: FleetStorageDeviceListStorageDevicesHpeStoragePassword;
}

export function fleetStorageDeviceListStorageDevicesHpeStorageToTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageOutputReference | FleetStorageDeviceListStorageDevicesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    csi_version: cdktf.stringToTerraform(struct!.csiVersion),
    iscsi_chap_user: cdktf.stringToTerraform(struct!.iscsiChapUser),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    storage_server_ip_address: cdktf.stringToTerraform(struct!.storageServerIpAddress),
    storage_server_name: cdktf.stringToTerraform(struct!.storageServerName),
    username: cdktf.stringToTerraform(struct!.username),
    iscsi_chap_password: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToTerraform(struct!.iscsiChapPassword),
    password: fleetStorageDeviceListStorageDevicesHpeStoragePasswordToTerraform(struct!.password),
  }
}


export function fleetStorageDeviceListStorageDevicesHpeStorageToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesHpeStorageOutputReference | FleetStorageDeviceListStorageDevicesHpeStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_port: {
      value: cdktf.numberToHclTerraform(struct!.apiServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    csi_version: {
      value: cdktf.stringToHclTerraform(struct!.csiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_chap_user: {
      value: cdktf.stringToHclTerraform(struct!.iscsiChapUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_server_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.storageServerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_server_name: {
      value: cdktf.stringToHclTerraform(struct!.storageServerName),
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
    iscsi_chap_password: {
      value: fleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordToHclTerraform(struct!.iscsiChapPassword),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordList",
    },
    password: {
      value: fleetStorageDeviceListStorageDevicesHpeStoragePasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStoragePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesHpeStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesHpeStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPort = this._apiServerPort;
    }
    if (this._csiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiVersion = this._csiVersion;
    }
    if (this._iscsiChapUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiChapUser = this._iscsiChapUser;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._storageServerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageServerIpAddress = this._storageServerIpAddress;
    }
    if (this._storageServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageServerName = this._storageServerName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._iscsiChapPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiChapPassword = this._iscsiChapPassword?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesHpeStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServerPort = undefined;
      this._csiVersion = undefined;
      this._iscsiChapUser = undefined;
      this._logLevel = undefined;
      this._storageServerIpAddress = undefined;
      this._storageServerName = undefined;
      this._username = undefined;
      this._iscsiChapPassword.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServerPort = value.apiServerPort;
      this._csiVersion = value.csiVersion;
      this._iscsiChapUser = value.iscsiChapUser;
      this._logLevel = value.logLevel;
      this._storageServerIpAddress = value.storageServerIpAddress;
      this._storageServerName = value.storageServerName;
      this._username = value.username;
      this._iscsiChapPassword.internalValue = value.iscsiChapPassword;
      this._password.internalValue = value.password;
    }
  }

  // api_server_port - computed: false, optional: true, required: false
  private _apiServerPort?: number; 
  public get apiServerPort() {
    return this.getNumberAttribute('api_server_port');
  }
  public set apiServerPort(value: number) {
    this._apiServerPort = value;
  }
  public resetApiServerPort() {
    this._apiServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPortInput() {
    return this._apiServerPort;
  }

  // csi_version - computed: false, optional: true, required: false
  private _csiVersion?: string; 
  public get csiVersion() {
    return this.getStringAttribute('csi_version');
  }
  public set csiVersion(value: string) {
    this._csiVersion = value;
  }
  public resetCsiVersion() {
    this._csiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiVersionInput() {
    return this._csiVersion;
  }

  // iscsi_chap_user - computed: false, optional: true, required: false
  private _iscsiChapUser?: string; 
  public get iscsiChapUser() {
    return this.getStringAttribute('iscsi_chap_user');
  }
  public set iscsiChapUser(value: string) {
    this._iscsiChapUser = value;
  }
  public resetIscsiChapUser() {
    this._iscsiChapUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiChapUserInput() {
    return this._iscsiChapUser;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // storage_server_ip_address - computed: false, optional: true, required: false
  private _storageServerIpAddress?: string; 
  public get storageServerIpAddress() {
    return this.getStringAttribute('storage_server_ip_address');
  }
  public set storageServerIpAddress(value: string) {
    this._storageServerIpAddress = value;
  }
  public resetStorageServerIpAddress() {
    this._storageServerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageServerIpAddressInput() {
    return this._storageServerIpAddress;
  }

  // storage_server_name - computed: false, optional: true, required: false
  private _storageServerName?: string; 
  public get storageServerName() {
    return this.getStringAttribute('storage_server_name');
  }
  public set storageServerName(value: string) {
    this._storageServerName = value;
  }
  public resetStorageServerName() {
    this._storageServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageServerNameInput() {
    return this._storageServerName;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // iscsi_chap_password - computed: false, optional: true, required: false
  private _iscsiChapPassword = new FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPasswordOutputReference(this, "iscsi_chap_password");
  public get iscsiChapPassword() {
    return this._iscsiChapPassword;
  }
  public putIscsiChapPassword(value: FleetStorageDeviceListStorageDevicesHpeStorageIscsiChapPassword) {
    this._iscsiChapPassword.internalValue = value;
  }
  public resetIscsiChapPassword() {
    this._iscsiChapPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiChapPasswordInput() {
    return this._iscsiChapPassword.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new FleetStorageDeviceListStorageDevicesHpeStoragePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: FleetStorageDeviceListStorageDevicesHpeStoragePassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#ipv6_prefixes Fleet#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#prefixes Fleet#prefixes}
  */
  readonly prefixes?: string[];
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#adaptive_qos_policy Fleet#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#encryption Fleet#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#export_policy Fleet#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_qos Fleet#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#qos_policy Fleet#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#security_style Fleet#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_dir Fleet#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_policy Fleet#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_reserve Fleet#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#space_reserve Fleet#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#split_on_clone Fleet#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tiering_policy Fleet#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#unix_permissions Fleet#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#labels Fleet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#zone Fleet#zone}
  */
  readonly zone?: string;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#volume_defaults Fleet#volume_defaults}
  */
  readonly volumeDefaults?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    zone: cdktf.stringToTerraform(struct!.zone),
    volume_defaults: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_defaults: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._zone = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._zone = value.zone;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageList extends cdktf.ComplexList {
  public internalValue? : FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageOutputReference {
    return new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#adaptive_qos_policy Fleet#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#encryption Fleet#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#export_policy Fleet#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_qos Fleet#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#qos_policy Fleet#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#security_style Fleet#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_dir Fleet#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_policy Fleet#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_reserve Fleet#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#space_reserve Fleet#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#split_on_clone Fleet#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tiering_policy Fleet#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#unix_permissions Fleet#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#auto_export_policy Fleet#auto_export_policy}
  */
  readonly autoExportPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#backend_name Fleet#backend_name}
  */
  readonly backendName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#client_certificate Fleet#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#data_lif_dns_name Fleet#data_lif_dns_name}
  */
  readonly dataLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#data_lif_ip Fleet#data_lif_ip}
  */
  readonly dataLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#labels Fleet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#limit_aggregate_usage Fleet#limit_aggregate_usage}
  */
  readonly limitAggregateUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#limit_volume_size Fleet#limit_volume_size}
  */
  readonly limitVolumeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#management_lif_dns_name Fleet#management_lif_dns_name}
  */
  readonly managementLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#management_lif_ip Fleet#management_lif_ip}
  */
  readonly managementLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#nfs_mount_options Fleet#nfs_mount_options}
  */
  readonly nfsMountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#region Fleet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_driver_name Fleet#storage_driver_name}
  */
  readonly storageDriverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_prefix Fleet#storage_prefix}
  */
  readonly storagePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#svm Fleet#svm}
  */
  readonly svm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#trusted_ca_certificate Fleet#trusted_ca_certificate}
  */
  readonly trustedCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#username Fleet#username}
  */
  readonly username: string;
  /**
  * auto_export_cidrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#auto_export_cidrs Fleet#auto_export_cidrs}
  */
  readonly autoExportCidrs?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs;
  /**
  * client_private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#client_private_key Fleet#client_private_key}
  */
  readonly clientPrivateKey?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#password Fleet#password}
  */
  readonly password?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage Fleet#storage}
  */
  readonly storage?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage[] | cdktf.IResolvable;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#volume_defaults Fleet#volume_defaults}
  */
  readonly volumeDefaults?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_export_policy: cdktf.booleanToTerraform(struct!.autoExportPolicy),
    backend_name: cdktf.stringToTerraform(struct!.backendName),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    data_lif_dns_name: cdktf.stringToTerraform(struct!.dataLifDnsName),
    data_lif_ip: cdktf.stringToTerraform(struct!.dataLifIp),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    limit_aggregate_usage: cdktf.stringToTerraform(struct!.limitAggregateUsage),
    limit_volume_size: cdktf.stringToTerraform(struct!.limitVolumeSize),
    management_lif_dns_name: cdktf.stringToTerraform(struct!.managementLifDnsName),
    management_lif_ip: cdktf.stringToTerraform(struct!.managementLifIp),
    nfs_mount_options: cdktf.stringToTerraform(struct!.nfsMountOptions),
    region: cdktf.stringToTerraform(struct!.region),
    storage_driver_name: cdktf.stringToTerraform(struct!.storageDriverName),
    storage_prefix: cdktf.stringToTerraform(struct!.storagePrefix),
    svm: cdktf.stringToTerraform(struct!.svm),
    trusted_ca_certificate: cdktf.stringToTerraform(struct!.trustedCaCertificate),
    username: cdktf.stringToTerraform(struct!.username),
    auto_export_cidrs: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToTerraform(struct!.autoExportCidrs),
    client_private_key: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToTerraform(struct!.clientPrivateKey),
    password: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToTerraform(struct!.password),
    storage: cdktf.listMapper(fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToTerraform, true)(struct!.storage),
    volume_defaults: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_export_policy: {
      value: cdktf.booleanToHclTerraform(struct!.autoExportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backend_name: {
      value: cdktf.stringToHclTerraform(struct!.backendName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dataLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.dataLifIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    limit_aggregate_usage: {
      value: cdktf.stringToHclTerraform(struct!.limitAggregateUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_volume_size: {
      value: cdktf.stringToHclTerraform(struct!.limitVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.managementLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementLifIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_mount_options: {
      value: cdktf.stringToHclTerraform(struct!.nfsMountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_driver_name: {
      value: cdktf.stringToHclTerraform(struct!.storageDriverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_prefix: {
      value: cdktf.stringToHclTerraform(struct!.storagePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm: {
      value: cdktf.stringToHclTerraform(struct!.svm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaCertificate),
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
    auto_export_cidrs: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsToHclTerraform(struct!.autoExportCidrs),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsList",
    },
    client_private_key: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyToHclTerraform(struct!.clientPrivateKey),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyList",
    },
    password: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordList",
    },
    storage: {
      value: cdktf.listMapperHcl(fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageList",
    },
    volume_defaults: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoExportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExportPolicy = this._autoExportPolicy;
    }
    if (this._backendName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendName = this._backendName;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._dataLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifDnsName = this._dataLifDnsName;
    }
    if (this._dataLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifIp = this._dataLifIp;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._limitAggregateUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitAggregateUsage = this._limitAggregateUsage;
    }
    if (this._limitVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitVolumeSize = this._limitVolumeSize;
    }
    if (this._managementLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifDnsName = this._managementLifDnsName;
    }
    if (this._managementLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifIp = this._managementLifIp;
    }
    if (this._nfsMountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsMountOptions = this._nfsMountOptions;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageDriverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDriverName = this._storageDriverName;
    }
    if (this._storagePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePrefix = this._storagePrefix;
    }
    if (this._svm !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm;
    }
    if (this._trustedCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaCertificate = this._trustedCaCertificate;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._autoExportCidrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExportCidrs = this._autoExportCidrs?.internalValue;
    }
    if (this._clientPrivateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKey = this._clientPrivateKey?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoExportPolicy = undefined;
      this._backendName = undefined;
      this._clientCertificate = undefined;
      this._dataLifDnsName = undefined;
      this._dataLifIp = undefined;
      this._labels = undefined;
      this._limitAggregateUsage = undefined;
      this._limitVolumeSize = undefined;
      this._managementLifDnsName = undefined;
      this._managementLifIp = undefined;
      this._nfsMountOptions = undefined;
      this._region = undefined;
      this._storageDriverName = undefined;
      this._storagePrefix = undefined;
      this._svm = undefined;
      this._trustedCaCertificate = undefined;
      this._username = undefined;
      this._autoExportCidrs.internalValue = undefined;
      this._clientPrivateKey.internalValue = undefined;
      this._password.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoExportPolicy = value.autoExportPolicy;
      this._backendName = value.backendName;
      this._clientCertificate = value.clientCertificate;
      this._dataLifDnsName = value.dataLifDnsName;
      this._dataLifIp = value.dataLifIp;
      this._labels = value.labels;
      this._limitAggregateUsage = value.limitAggregateUsage;
      this._limitVolumeSize = value.limitVolumeSize;
      this._managementLifDnsName = value.managementLifDnsName;
      this._managementLifIp = value.managementLifIp;
      this._nfsMountOptions = value.nfsMountOptions;
      this._region = value.region;
      this._storageDriverName = value.storageDriverName;
      this._storagePrefix = value.storagePrefix;
      this._svm = value.svm;
      this._trustedCaCertificate = value.trustedCaCertificate;
      this._username = value.username;
      this._autoExportCidrs.internalValue = value.autoExportCidrs;
      this._clientPrivateKey.internalValue = value.clientPrivateKey;
      this._password.internalValue = value.password;
      this._storage.internalValue = value.storage;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // auto_export_policy - computed: false, optional: true, required: false
  private _autoExportPolicy?: boolean | cdktf.IResolvable; 
  public get autoExportPolicy() {
    return this.getBooleanAttribute('auto_export_policy');
  }
  public set autoExportPolicy(value: boolean | cdktf.IResolvable) {
    this._autoExportPolicy = value;
  }
  public resetAutoExportPolicy() {
    this._autoExportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportPolicyInput() {
    return this._autoExportPolicy;
  }

  // backend_name - computed: false, optional: true, required: false
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  public resetBackendName() {
    this._backendName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // data_lif_dns_name - computed: false, optional: true, required: false
  private _dataLifDnsName?: string; 
  public get dataLifDnsName() {
    return this.getStringAttribute('data_lif_dns_name');
  }
  public set dataLifDnsName(value: string) {
    this._dataLifDnsName = value;
  }
  public resetDataLifDnsName() {
    this._dataLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifDnsNameInput() {
    return this._dataLifDnsName;
  }

  // data_lif_ip - computed: false, optional: true, required: false
  private _dataLifIp?: string; 
  public get dataLifIp() {
    return this.getStringAttribute('data_lif_ip');
  }
  public set dataLifIp(value: string) {
    this._dataLifIp = value;
  }
  public resetDataLifIp() {
    this._dataLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifIpInput() {
    return this._dataLifIp;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // limit_aggregate_usage - computed: false, optional: true, required: false
  private _limitAggregateUsage?: string; 
  public get limitAggregateUsage() {
    return this.getStringAttribute('limit_aggregate_usage');
  }
  public set limitAggregateUsage(value: string) {
    this._limitAggregateUsage = value;
  }
  public resetLimitAggregateUsage() {
    this._limitAggregateUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAggregateUsageInput() {
    return this._limitAggregateUsage;
  }

  // limit_volume_size - computed: false, optional: true, required: false
  private _limitVolumeSize?: string; 
  public get limitVolumeSize() {
    return this.getStringAttribute('limit_volume_size');
  }
  public set limitVolumeSize(value: string) {
    this._limitVolumeSize = value;
  }
  public resetLimitVolumeSize() {
    this._limitVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitVolumeSizeInput() {
    return this._limitVolumeSize;
  }

  // management_lif_dns_name - computed: false, optional: true, required: false
  private _managementLifDnsName?: string; 
  public get managementLifDnsName() {
    return this.getStringAttribute('management_lif_dns_name');
  }
  public set managementLifDnsName(value: string) {
    this._managementLifDnsName = value;
  }
  public resetManagementLifDnsName() {
    this._managementLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifDnsNameInput() {
    return this._managementLifDnsName;
  }

  // management_lif_ip - computed: false, optional: true, required: false
  private _managementLifIp?: string; 
  public get managementLifIp() {
    return this.getStringAttribute('management_lif_ip');
  }
  public set managementLifIp(value: string) {
    this._managementLifIp = value;
  }
  public resetManagementLifIp() {
    this._managementLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifIpInput() {
    return this._managementLifIp;
  }

  // nfs_mount_options - computed: false, optional: true, required: false
  private _nfsMountOptions?: string; 
  public get nfsMountOptions() {
    return this.getStringAttribute('nfs_mount_options');
  }
  public set nfsMountOptions(value: string) {
    this._nfsMountOptions = value;
  }
  public resetNfsMountOptions() {
    this._nfsMountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsMountOptionsInput() {
    return this._nfsMountOptions;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_driver_name - computed: false, optional: false, required: true
  private _storageDriverName?: string; 
  public get storageDriverName() {
    return this.getStringAttribute('storage_driver_name');
  }
  public set storageDriverName(value: string) {
    this._storageDriverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDriverNameInput() {
    return this._storageDriverName;
  }

  // storage_prefix - computed: false, optional: true, required: false
  private _storagePrefix?: string; 
  public get storagePrefix() {
    return this.getStringAttribute('storage_prefix');
  }
  public set storagePrefix(value: string) {
    this._storagePrefix = value;
  }
  public resetStoragePrefix() {
    this._storagePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePrefixInput() {
    return this._storagePrefix;
  }

  // svm - computed: false, optional: true, required: false
  private _svm?: string; 
  public get svm() {
    return this.getStringAttribute('svm');
  }
  public set svm(value: string) {
    this._svm = value;
  }
  public resetSvm() {
    this._svm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm;
  }

  // trusted_ca_certificate - computed: false, optional: true, required: false
  private _trustedCaCertificate?: string; 
  public get trustedCaCertificate() {
    return this.getStringAttribute('trusted_ca_certificate');
  }
  public set trustedCaCertificate(value: string) {
    this._trustedCaCertificate = value;
  }
  public resetTrustedCaCertificate() {
    this._trustedCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaCertificateInput() {
    return this._trustedCaCertificate;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // auto_export_cidrs - computed: false, optional: true, required: false
  private _autoExportCidrs = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrsOutputReference(this, "auto_export_cidrs");
  public get autoExportCidrs() {
    return this._autoExportCidrs;
  }
  public putAutoExportCidrs(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasAutoExportCidrs) {
    this._autoExportCidrs.internalValue = value;
  }
  public resetAutoExportCidrs() {
    this._autoExportCidrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExportCidrsInput() {
    return this._autoExportCidrs.internalValue;
  }

  // client_private_key - computed: false, optional: true, required: false
  private _clientPrivateKey = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKeyOutputReference(this, "client_private_key");
  public get clientPrivateKey() {
    return this._clientPrivateKey;
  }
  public putClientPrivateKey(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasClientPrivateKey) {
    this._clientPrivateKey.internalValue = value;
  }
  public resetClientPrivateKey() {
    this._clientPrivateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyInput() {
    return this._clientPrivateKey.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#adaptive_qos_policy Fleet#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#encryption Fleet#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#export_policy Fleet#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_qos Fleet#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#qos_policy Fleet#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#security_style Fleet#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_dir Fleet#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_policy Fleet#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_reserve Fleet#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#space_reserve Fleet#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#split_on_clone Fleet#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tiering_policy Fleet#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#unix_permissions Fleet#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#labels Fleet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#zone Fleet#zone}
  */
  readonly zone?: string;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#volume_defaults Fleet#volume_defaults}
  */
  readonly volumeDefaults?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    zone: cdktf.stringToTerraform(struct!.zone),
    volume_defaults: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_defaults: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._zone = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._zone = value.zone;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageList extends cdktf.ComplexList {
  public internalValue? : FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageOutputReference {
    return new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#chap_target_username Fleet#chap_target_username}
  */
  readonly chapTargetUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#chap_username Fleet#chap_username}
  */
  readonly chapUsername?: string;
  /**
  * chap_initiator_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#chap_initiator_secret Fleet#chap_initiator_secret}
  */
  readonly chapInitiatorSecret?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret;
  /**
  * chap_target_initiator_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#chap_target_initiator_secret Fleet#chap_target_initiator_secret}
  */
  readonly chapTargetInitiatorSecret?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_target_username: cdktf.stringToTerraform(struct!.chapTargetUsername),
    chap_username: cdktf.stringToTerraform(struct!.chapUsername),
    chap_initiator_secret: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToTerraform(struct!.chapInitiatorSecret),
    chap_target_initiator_secret: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToTerraform(struct!.chapTargetInitiatorSecret),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_target_username: {
      value: cdktf.stringToHclTerraform(struct!.chapTargetUsername),
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
    chap_initiator_secret: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretToHclTerraform(struct!.chapInitiatorSecret),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretList",
    },
    chap_target_initiator_secret: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretToHclTerraform(struct!.chapTargetInitiatorSecret),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapTargetUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapTargetUsername = this._chapTargetUsername;
    }
    if (this._chapUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapUsername = this._chapUsername;
    }
    if (this._chapInitiatorSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapInitiatorSecret = this._chapInitiatorSecret?.internalValue;
    }
    if (this._chapTargetInitiatorSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapTargetInitiatorSecret = this._chapTargetInitiatorSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chapTargetUsername = undefined;
      this._chapUsername = undefined;
      this._chapInitiatorSecret.internalValue = undefined;
      this._chapTargetInitiatorSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chapTargetUsername = value.chapTargetUsername;
      this._chapUsername = value.chapUsername;
      this._chapInitiatorSecret.internalValue = value.chapInitiatorSecret;
      this._chapTargetInitiatorSecret.internalValue = value.chapTargetInitiatorSecret;
    }
  }

  // chap_target_username - computed: false, optional: true, required: false
  private _chapTargetUsername?: string; 
  public get chapTargetUsername() {
    return this.getStringAttribute('chap_target_username');
  }
  public set chapTargetUsername(value: string) {
    this._chapTargetUsername = value;
  }
  public resetChapTargetUsername() {
    this._chapTargetUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapTargetUsernameInput() {
    return this._chapTargetUsername;
  }

  // chap_username - computed: false, optional: true, required: false
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

  // chap_initiator_secret - computed: false, optional: true, required: false
  private _chapInitiatorSecret = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecretOutputReference(this, "chap_initiator_secret");
  public get chapInitiatorSecret() {
    return this._chapInitiatorSecret;
  }
  public putChapInitiatorSecret(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapInitiatorSecret) {
    this._chapInitiatorSecret.internalValue = value;
  }
  public resetChapInitiatorSecret() {
    this._chapInitiatorSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapInitiatorSecretInput() {
    return this._chapInitiatorSecret.internalValue;
  }

  // chap_target_initiator_secret - computed: false, optional: true, required: false
  private _chapTargetInitiatorSecret = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecretOutputReference(this, "chap_target_initiator_secret");
  public get chapTargetInitiatorSecret() {
    return this._chapTargetInitiatorSecret;
  }
  public putChapTargetInitiatorSecret(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapChapTargetInitiatorSecret) {
    this._chapTargetInitiatorSecret.internalValue = value;
  }
  public resetChapTargetInitiatorSecret() {
    this._chapTargetInitiatorSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapTargetInitiatorSecretInput() {
    return this._chapTargetInitiatorSecret.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#adaptive_qos_policy Fleet#adaptive_qos_policy}
  */
  readonly adaptiveQosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#encryption Fleet#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#export_policy Fleet#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_qos Fleet#no_qos}
  */
  readonly noQos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#qos_policy Fleet#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#security_style Fleet#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_dir Fleet#snapshot_dir}
  */
  readonly snapshotDir?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_policy Fleet#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#snapshot_reserve Fleet#snapshot_reserve}
  */
  readonly snapshotReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#space_reserve Fleet#space_reserve}
  */
  readonly spaceReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#split_on_clone Fleet#split_on_clone}
  */
  readonly splitOnClone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tiering_policy Fleet#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#unix_permissions Fleet#unix_permissions}
  */
  readonly unixPermissions?: number;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_qos_policy: cdktf.stringToTerraform(struct!.adaptiveQosPolicy),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    no_qos: cdktf.booleanToTerraform(struct!.noQos),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    snapshot_dir: cdktf.booleanToTerraform(struct!.snapshotDir),
    snapshot_policy: cdktf.stringToTerraform(struct!.snapshotPolicy),
    snapshot_reserve: cdktf.stringToTerraform(struct!.snapshotReserve),
    space_reserve: cdktf.stringToTerraform(struct!.spaceReserve),
    split_on_clone: cdktf.booleanToTerraform(struct!.splitOnClone),
    tiering_policy: cdktf.stringToTerraform(struct!.tieringPolicy),
    unix_permissions: cdktf.numberToTerraform(struct!.unixPermissions),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.adaptiveQosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_qos: {
      value: cdktf.booleanToHclTerraform(struct!.noQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_dir: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_policy: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_reserve: {
      value: cdktf.stringToHclTerraform(struct!.snapshotReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_reserve: {
      value: cdktf.stringToHclTerraform(struct!.spaceReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_on_clone: {
      value: cdktf.booleanToHclTerraform(struct!.splitOnClone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiering_policy: {
      value: cdktf.stringToHclTerraform(struct!.tieringPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unix_permissions: {
      value: cdktf.numberToHclTerraform(struct!.unixPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveQosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveQosPolicy = this._adaptiveQosPolicy;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._noQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.noQos = this._noQos;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._snapshotDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDir = this._snapshotDir;
    }
    if (this._snapshotPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicy = this._snapshotPolicy;
    }
    if (this._snapshotReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotReserve = this._snapshotReserve;
    }
    if (this._spaceReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceReserve = this._spaceReserve;
    }
    if (this._splitOnClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOnClone = this._splitOnClone;
    }
    if (this._tieringPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy;
    }
    if (this._unixPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixPermissions = this._unixPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveQosPolicy = undefined;
      this._encryption = undefined;
      this._exportPolicy = undefined;
      this._noQos = undefined;
      this._qosPolicy = undefined;
      this._securityStyle = undefined;
      this._snapshotDir = undefined;
      this._snapshotPolicy = undefined;
      this._snapshotReserve = undefined;
      this._spaceReserve = undefined;
      this._splitOnClone = undefined;
      this._tieringPolicy = undefined;
      this._unixPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveQosPolicy = value.adaptiveQosPolicy;
      this._encryption = value.encryption;
      this._exportPolicy = value.exportPolicy;
      this._noQos = value.noQos;
      this._qosPolicy = value.qosPolicy;
      this._securityStyle = value.securityStyle;
      this._snapshotDir = value.snapshotDir;
      this._snapshotPolicy = value.snapshotPolicy;
      this._snapshotReserve = value.snapshotReserve;
      this._spaceReserve = value.spaceReserve;
      this._splitOnClone = value.splitOnClone;
      this._tieringPolicy = value.tieringPolicy;
      this._unixPermissions = value.unixPermissions;
    }
  }

  // adaptive_qos_policy - computed: false, optional: true, required: false
  private _adaptiveQosPolicy?: string; 
  public get adaptiveQosPolicy() {
    return this.getStringAttribute('adaptive_qos_policy');
  }
  public set adaptiveQosPolicy(value: string) {
    this._adaptiveQosPolicy = value;
  }
  public resetAdaptiveQosPolicy() {
    this._adaptiveQosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveQosPolicyInput() {
    return this._adaptiveQosPolicy;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // no_qos - computed: false, optional: true, required: false
  private _noQos?: boolean | cdktf.IResolvable; 
  public get noQos() {
    return this.getBooleanAttribute('no_qos');
  }
  public set noQos(value: boolean | cdktf.IResolvable) {
    this._noQos = value;
  }
  public resetNoQos() {
    this._noQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noQosInput() {
    return this._noQos;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // security_style - computed: false, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // snapshot_dir - computed: false, optional: true, required: false
  private _snapshotDir?: boolean | cdktf.IResolvable; 
  public get snapshotDir() {
    return this.getBooleanAttribute('snapshot_dir');
  }
  public set snapshotDir(value: boolean | cdktf.IResolvable) {
    this._snapshotDir = value;
  }
  public resetSnapshotDir() {
    this._snapshotDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirInput() {
    return this._snapshotDir;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // snapshot_reserve - computed: false, optional: true, required: false
  private _snapshotReserve?: string; 
  public get snapshotReserve() {
    return this.getStringAttribute('snapshot_reserve');
  }
  public set snapshotReserve(value: string) {
    this._snapshotReserve = value;
  }
  public resetSnapshotReserve() {
    this._snapshotReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotReserveInput() {
    return this._snapshotReserve;
  }

  // space_reserve - computed: false, optional: true, required: false
  private _spaceReserve?: string; 
  public get spaceReserve() {
    return this.getStringAttribute('space_reserve');
  }
  public set spaceReserve(value: string) {
    this._spaceReserve = value;
  }
  public resetSpaceReserve() {
    this._spaceReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceReserveInput() {
    return this._spaceReserve;
  }

  // split_on_clone - computed: false, optional: true, required: false
  private _splitOnClone?: boolean | cdktf.IResolvable; 
  public get splitOnClone() {
    return this.getBooleanAttribute('split_on_clone');
  }
  public set splitOnClone(value: boolean | cdktf.IResolvable) {
    this._splitOnClone = value;
  }
  public resetSplitOnClone() {
    this._splitOnClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOnCloneInput() {
    return this._splitOnClone;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unix_permissions - computed: false, optional: true, required: false
  private _unixPermissions?: number; 
  public get unixPermissions() {
    return this.getNumberAttribute('unix_permissions');
  }
  public set unixPermissions(value: number) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#client_certificate Fleet#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#data_lif_dns_name Fleet#data_lif_dns_name}
  */
  readonly dataLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#data_lif_ip Fleet#data_lif_ip}
  */
  readonly dataLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#igroup_name Fleet#igroup_name}
  */
  readonly igroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#labels Fleet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#limit_aggregate_usage Fleet#limit_aggregate_usage}
  */
  readonly limitAggregateUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#limit_volume_size Fleet#limit_volume_size}
  */
  readonly limitVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#management_lif_dns_name Fleet#management_lif_dns_name}
  */
  readonly managementLifDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#management_lif_ip Fleet#management_lif_ip}
  */
  readonly managementLifIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#no_chap Fleet#no_chap}
  */
  readonly noChap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#region Fleet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_driver_name Fleet#storage_driver_name}
  */
  readonly storageDriverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_prefix Fleet#storage_prefix}
  */
  readonly storagePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#svm Fleet#svm}
  */
  readonly svm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#trusted_ca_certificate Fleet#trusted_ca_certificate}
  */
  readonly trustedCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#username Fleet#username}
  */
  readonly username: string;
  /**
  * client_private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#client_private_key Fleet#client_private_key}
  */
  readonly clientPrivateKey?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#password Fleet#password}
  */
  readonly password?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage Fleet#storage}
  */
  readonly storage?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage[] | cdktf.IResolvable;
  /**
  * use_chap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#use_chap Fleet#use_chap}
  */
  readonly useChap?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap;
  /**
  * volume_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#volume_defaults Fleet#volume_defaults}
  */
  readonly volumeDefaults?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    data_lif_dns_name: cdktf.stringToTerraform(struct!.dataLifDnsName),
    data_lif_ip: cdktf.stringToTerraform(struct!.dataLifIp),
    igroup_name: cdktf.stringToTerraform(struct!.igroupName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    limit_aggregate_usage: cdktf.numberToTerraform(struct!.limitAggregateUsage),
    limit_volume_size: cdktf.numberToTerraform(struct!.limitVolumeSize),
    management_lif_dns_name: cdktf.stringToTerraform(struct!.managementLifDnsName),
    management_lif_ip: cdktf.stringToTerraform(struct!.managementLifIp),
    no_chap: cdktf.booleanToTerraform(struct!.noChap),
    region: cdktf.stringToTerraform(struct!.region),
    storage_driver_name: cdktf.stringToTerraform(struct!.storageDriverName),
    storage_prefix: cdktf.stringToTerraform(struct!.storagePrefix),
    svm: cdktf.stringToTerraform(struct!.svm),
    trusted_ca_certificate: cdktf.stringToTerraform(struct!.trustedCaCertificate),
    username: cdktf.stringToTerraform(struct!.username),
    client_private_key: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToTerraform(struct!.clientPrivateKey),
    password: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToTerraform(struct!.password),
    storage: cdktf.listMapper(fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToTerraform, true)(struct!.storage),
    use_chap: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToTerraform(struct!.useChap),
    volume_defaults: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToTerraform(struct!.volumeDefaults),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference | FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dataLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.dataLifIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igroup_name: {
      value: cdktf.stringToHclTerraform(struct!.igroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    limit_aggregate_usage: {
      value: cdktf.numberToHclTerraform(struct!.limitAggregateUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.limitVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_lif_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.managementLifDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_lif_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementLifIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_chap: {
      value: cdktf.booleanToHclTerraform(struct!.noChap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_driver_name: {
      value: cdktf.stringToHclTerraform(struct!.storageDriverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_prefix: {
      value: cdktf.stringToHclTerraform(struct!.storagePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm: {
      value: cdktf.stringToHclTerraform(struct!.svm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaCertificate),
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
    client_private_key: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyToHclTerraform(struct!.clientPrivateKey),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyList",
    },
    password: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordList",
    },
    storage: {
      value: cdktf.listMapperHcl(fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageList",
    },
    use_chap: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapToHclTerraform(struct!.useChap),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapList",
    },
    volume_defaults: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsToHclTerraform(struct!.volumeDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._dataLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifDnsName = this._dataLifDnsName;
    }
    if (this._dataLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLifIp = this._dataLifIp;
    }
    if (this._igroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.igroupName = this._igroupName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._limitAggregateUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitAggregateUsage = this._limitAggregateUsage;
    }
    if (this._limitVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitVolumeSize = this._limitVolumeSize;
    }
    if (this._managementLifDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifDnsName = this._managementLifDnsName;
    }
    if (this._managementLifIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementLifIp = this._managementLifIp;
    }
    if (this._noChap !== undefined) {
      hasAnyValues = true;
      internalValueResult.noChap = this._noChap;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageDriverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDriverName = this._storageDriverName;
    }
    if (this._storagePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePrefix = this._storagePrefix;
    }
    if (this._svm !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm;
    }
    if (this._trustedCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaCertificate = this._trustedCaCertificate;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._clientPrivateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKey = this._clientPrivateKey?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._useChap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useChap = this._useChap?.internalValue;
    }
    if (this._volumeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDefaults = this._volumeDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificate = undefined;
      this._dataLifDnsName = undefined;
      this._dataLifIp = undefined;
      this._igroupName = undefined;
      this._labels = undefined;
      this._limitAggregateUsage = undefined;
      this._limitVolumeSize = undefined;
      this._managementLifDnsName = undefined;
      this._managementLifIp = undefined;
      this._noChap = undefined;
      this._region = undefined;
      this._storageDriverName = undefined;
      this._storagePrefix = undefined;
      this._svm = undefined;
      this._trustedCaCertificate = undefined;
      this._username = undefined;
      this._clientPrivateKey.internalValue = undefined;
      this._password.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._useChap.internalValue = undefined;
      this._volumeDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificate = value.clientCertificate;
      this._dataLifDnsName = value.dataLifDnsName;
      this._dataLifIp = value.dataLifIp;
      this._igroupName = value.igroupName;
      this._labels = value.labels;
      this._limitAggregateUsage = value.limitAggregateUsage;
      this._limitVolumeSize = value.limitVolumeSize;
      this._managementLifDnsName = value.managementLifDnsName;
      this._managementLifIp = value.managementLifIp;
      this._noChap = value.noChap;
      this._region = value.region;
      this._storageDriverName = value.storageDriverName;
      this._storagePrefix = value.storagePrefix;
      this._svm = value.svm;
      this._trustedCaCertificate = value.trustedCaCertificate;
      this._username = value.username;
      this._clientPrivateKey.internalValue = value.clientPrivateKey;
      this._password.internalValue = value.password;
      this._storage.internalValue = value.storage;
      this._useChap.internalValue = value.useChap;
      this._volumeDefaults.internalValue = value.volumeDefaults;
    }
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // data_lif_dns_name - computed: false, optional: true, required: false
  private _dataLifDnsName?: string; 
  public get dataLifDnsName() {
    return this.getStringAttribute('data_lif_dns_name');
  }
  public set dataLifDnsName(value: string) {
    this._dataLifDnsName = value;
  }
  public resetDataLifDnsName() {
    this._dataLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifDnsNameInput() {
    return this._dataLifDnsName;
  }

  // data_lif_ip - computed: false, optional: true, required: false
  private _dataLifIp?: string; 
  public get dataLifIp() {
    return this.getStringAttribute('data_lif_ip');
  }
  public set dataLifIp(value: string) {
    this._dataLifIp = value;
  }
  public resetDataLifIp() {
    this._dataLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLifIpInput() {
    return this._dataLifIp;
  }

  // igroup_name - computed: false, optional: true, required: false
  private _igroupName?: string; 
  public get igroupName() {
    return this.getStringAttribute('igroup_name');
  }
  public set igroupName(value: string) {
    this._igroupName = value;
  }
  public resetIgroupName() {
    this._igroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igroupNameInput() {
    return this._igroupName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // limit_aggregate_usage - computed: false, optional: true, required: false
  private _limitAggregateUsage?: number; 
  public get limitAggregateUsage() {
    return this.getNumberAttribute('limit_aggregate_usage');
  }
  public set limitAggregateUsage(value: number) {
    this._limitAggregateUsage = value;
  }
  public resetLimitAggregateUsage() {
    this._limitAggregateUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAggregateUsageInput() {
    return this._limitAggregateUsage;
  }

  // limit_volume_size - computed: false, optional: true, required: false
  private _limitVolumeSize?: number; 
  public get limitVolumeSize() {
    return this.getNumberAttribute('limit_volume_size');
  }
  public set limitVolumeSize(value: number) {
    this._limitVolumeSize = value;
  }
  public resetLimitVolumeSize() {
    this._limitVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitVolumeSizeInput() {
    return this._limitVolumeSize;
  }

  // management_lif_dns_name - computed: false, optional: true, required: false
  private _managementLifDnsName?: string; 
  public get managementLifDnsName() {
    return this.getStringAttribute('management_lif_dns_name');
  }
  public set managementLifDnsName(value: string) {
    this._managementLifDnsName = value;
  }
  public resetManagementLifDnsName() {
    this._managementLifDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifDnsNameInput() {
    return this._managementLifDnsName;
  }

  // management_lif_ip - computed: false, optional: true, required: false
  private _managementLifIp?: string; 
  public get managementLifIp() {
    return this.getStringAttribute('management_lif_ip');
  }
  public set managementLifIp(value: string) {
    this._managementLifIp = value;
  }
  public resetManagementLifIp() {
    this._managementLifIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementLifIpInput() {
    return this._managementLifIp;
  }

  // no_chap - computed: false, optional: true, required: false
  private _noChap?: boolean | cdktf.IResolvable; 
  public get noChap() {
    return this.getBooleanAttribute('no_chap');
  }
  public set noChap(value: boolean | cdktf.IResolvable) {
    this._noChap = value;
  }
  public resetNoChap() {
    this._noChap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noChapInput() {
    return this._noChap;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_driver_name - computed: false, optional: false, required: true
  private _storageDriverName?: string; 
  public get storageDriverName() {
    return this.getStringAttribute('storage_driver_name');
  }
  public set storageDriverName(value: string) {
    this._storageDriverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDriverNameInput() {
    return this._storageDriverName;
  }

  // storage_prefix - computed: false, optional: true, required: false
  private _storagePrefix?: string; 
  public get storagePrefix() {
    return this.getStringAttribute('storage_prefix');
  }
  public set storagePrefix(value: string) {
    this._storagePrefix = value;
  }
  public resetStoragePrefix() {
    this._storagePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePrefixInput() {
    return this._storagePrefix;
  }

  // svm - computed: false, optional: true, required: false
  private _svm?: string; 
  public get svm() {
    return this.getStringAttribute('svm');
  }
  public set svm(value: string) {
    this._svm = value;
  }
  public resetSvm() {
    this._svm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm;
  }

  // trusted_ca_certificate - computed: false, optional: true, required: false
  private _trustedCaCertificate?: string; 
  public get trustedCaCertificate() {
    return this.getStringAttribute('trusted_ca_certificate');
  }
  public set trustedCaCertificate(value: string) {
    this._trustedCaCertificate = value;
  }
  public resetTrustedCaCertificate() {
    this._trustedCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaCertificateInput() {
    return this._trustedCaCertificate;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // client_private_key - computed: false, optional: true, required: false
  private _clientPrivateKey = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKeyOutputReference(this, "client_private_key");
  public get clientPrivateKey() {
    return this._clientPrivateKey;
  }
  public putClientPrivateKey(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanClientPrivateKey) {
    this._clientPrivateKey.internalValue = value;
  }
  public resetClientPrivateKey() {
    this._clientPrivateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyInput() {
    return this._clientPrivateKey.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // use_chap - computed: false, optional: true, required: false
  private _useChap = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChapOutputReference(this, "use_chap");
  public get useChap() {
    return this._useChap;
  }
  public putUseChap(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanUseChap) {
    this._useChap.internalValue = value;
  }
  public resetUseChap() {
    this._useChap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChapInput() {
    return this._useChap.internalValue;
  }

  // volume_defaults - computed: false, optional: true, required: false
  private _volumeDefaults = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaultsOutputReference(this, "volume_defaults");
  public get volumeDefaults() {
    return this._volumeDefaults;
  }
  public putVolumeDefaults(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanVolumeDefaults) {
    this._volumeDefaults.internalValue = value;
  }
  public resetVolumeDefaults() {
    this._volumeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDefaultsInput() {
    return this._volumeDefaults.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesNetappTrident {
  /**
  * netapp_backend_ontap_nas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#netapp_backend_ontap_nas Fleet#netapp_backend_ontap_nas}
  */
  readonly netappBackendOntapNas?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas;
  /**
  * netapp_backend_ontap_san block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#netapp_backend_ontap_san Fleet#netapp_backend_ontap_san}
  */
  readonly netappBackendOntapSan?: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan;
}

export function fleetStorageDeviceListStorageDevicesNetappTridentToTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentOutputReference | FleetStorageDeviceListStorageDevicesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    netapp_backend_ontap_nas: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToTerraform(struct!.netappBackendOntapNas),
    netapp_backend_ontap_san: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToTerraform(struct!.netappBackendOntapSan),
  }
}


export function fleetStorageDeviceListStorageDevicesNetappTridentToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesNetappTridentOutputReference | FleetStorageDeviceListStorageDevicesNetappTrident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    netapp_backend_ontap_nas: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasToHclTerraform(struct!.netappBackendOntapNas),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasList",
    },
    netapp_backend_ontap_san: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanToHclTerraform(struct!.netappBackendOntapSan),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesNetappTridentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesNetappTrident | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._netappBackendOntapNas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappBackendOntapNas = this._netappBackendOntapNas?.internalValue;
    }
    if (this._netappBackendOntapSan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappBackendOntapSan = this._netappBackendOntapSan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesNetappTrident | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._netappBackendOntapNas.internalValue = undefined;
      this._netappBackendOntapSan.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._netappBackendOntapNas.internalValue = value.netappBackendOntapNas;
      this._netappBackendOntapSan.internalValue = value.netappBackendOntapSan;
    }
  }

  // netapp_backend_ontap_nas - computed: false, optional: true, required: false
  private _netappBackendOntapNas = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNasOutputReference(this, "netapp_backend_ontap_nas");
  public get netappBackendOntapNas() {
    return this._netappBackendOntapNas;
  }
  public putNetappBackendOntapNas(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapNas) {
    this._netappBackendOntapNas.internalValue = value;
  }
  public resetNetappBackendOntapNas() {
    this._netappBackendOntapNas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappBackendOntapNasInput() {
    return this._netappBackendOntapNas.internalValue;
  }

  // netapp_backend_ontap_san - computed: false, optional: true, required: false
  private _netappBackendOntapSan = new FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSanOutputReference(this, "netapp_backend_ontap_san");
  public get netappBackendOntapSan() {
    return this._netappBackendOntapSan;
  }
  public putNetappBackendOntapSan(value: FleetStorageDeviceListStorageDevicesNetappTridentNetappBackendOntapSan) {
    this._netappBackendOntapSan.internalValue = value;
  }
  public resetNetappBackendOntapSan() {
    this._netappBackendOntapSan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappBackendOntapSanInput() {
    return this._netappBackendOntapSan.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#labels Fleet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#mgmt_dns_name Fleet#mgmt_dns_name}
  */
  readonly mgmtDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#mgmt_ip Fleet#mgmt_ip}
  */
  readonly mgmtIp?: string;
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#api_token Fleet#api_token}
  */
  readonly apiToken?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mgmt_dns_name: cdktf.stringToTerraform(struct!.mgmtDnsName),
    mgmt_ip: cdktf.stringToTerraform(struct!.mgmtIp),
    api_token: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToTerraform(struct!.apiToken),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mgmt_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.mgmtDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_ip: {
      value: cdktf.stringToHclTerraform(struct!.mgmtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mgmtDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtDnsName = this._mgmtDnsName;
    }
    if (this._mgmtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtIp = this._mgmtIp;
    }
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._mgmtDnsName = undefined;
      this._mgmtIp = undefined;
      this._apiToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._mgmtDnsName = value.mgmtDnsName;
      this._mgmtIp = value.mgmtIp;
      this._apiToken.internalValue = value.apiToken;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mgmt_dns_name - computed: false, optional: true, required: false
  private _mgmtDnsName?: string; 
  public get mgmtDnsName() {
    return this.getStringAttribute('mgmt_dns_name');
  }
  public set mgmtDnsName(value: string) {
    this._mgmtDnsName = value;
  }
  public resetMgmtDnsName() {
    this._mgmtDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtDnsNameInput() {
    return this._mgmtDnsName;
  }

  // mgmt_ip - computed: false, optional: true, required: false
  private _mgmtIp?: string; 
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }
  public set mgmtIp(value: string) {
    this._mgmtIp = value;
  }
  public resetMgmtIp() {
    this._mgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpInput() {
    return this._mgmtIp;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysList extends cdktf.ComplexList {
  public internalValue? : FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysOutputReference {
    return new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#default_fs_opt Fleet#default_fs_opt}
  */
  readonly defaultFsOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#default_fs_type Fleet#default_fs_type}
  */
  readonly defaultFsType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#default_mount_opts Fleet#default_mount_opts}
  */
  readonly defaultMountOpts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#disable_preempt_attachments Fleet#disable_preempt_attachments}
  */
  readonly disablePreemptAttachments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#iscsi_login_timeout Fleet#iscsi_login_timeout}
  */
  readonly iscsiLoginTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#san_type Fleet#san_type}
  */
  readonly sanType: string;
  /**
  * flash_arrays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#flash_arrays Fleet#flash_arrays}
  */
  readonly flashArrays: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays[] | cdktf.IResolvable;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_fs_opt: cdktf.stringToTerraform(struct!.defaultFsOpt),
    default_fs_type: cdktf.stringToTerraform(struct!.defaultFsType),
    default_mount_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultMountOpts),
    disable_preempt_attachments: cdktf.booleanToTerraform(struct!.disablePreemptAttachments),
    iscsi_login_timeout: cdktf.numberToTerraform(struct!.iscsiLoginTimeout),
    san_type: cdktf.stringToTerraform(struct!.sanType),
    flash_arrays: cdktf.listMapper(fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToTerraform, true)(struct!.flashArrays),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_fs_opt: {
      value: cdktf.stringToHclTerraform(struct!.defaultFsOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_fs_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultFsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_mount_opts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultMountOpts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_preempt_attachments: {
      value: cdktf.booleanToHclTerraform(struct!.disablePreemptAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iscsi_login_timeout: {
      value: cdktf.numberToHclTerraform(struct!.iscsiLoginTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    san_type: {
      value: cdktf.stringToHclTerraform(struct!.sanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flash_arrays: {
      value: cdktf.listMapperHcl(fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysToHclTerraform, true)(struct!.flashArrays),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultFsOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFsOpt = this._defaultFsOpt;
    }
    if (this._defaultFsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFsType = this._defaultFsType;
    }
    if (this._defaultMountOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMountOpts = this._defaultMountOpts;
    }
    if (this._disablePreemptAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePreemptAttachments = this._disablePreemptAttachments;
    }
    if (this._iscsiLoginTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiLoginTimeout = this._iscsiLoginTimeout;
    }
    if (this._sanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanType = this._sanType;
    }
    if (this._flashArrays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashArrays = this._flashArrays?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultFsOpt = undefined;
      this._defaultFsType = undefined;
      this._defaultMountOpts = undefined;
      this._disablePreemptAttachments = undefined;
      this._iscsiLoginTimeout = undefined;
      this._sanType = undefined;
      this._flashArrays.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultFsOpt = value.defaultFsOpt;
      this._defaultFsType = value.defaultFsType;
      this._defaultMountOpts = value.defaultMountOpts;
      this._disablePreemptAttachments = value.disablePreemptAttachments;
      this._iscsiLoginTimeout = value.iscsiLoginTimeout;
      this._sanType = value.sanType;
      this._flashArrays.internalValue = value.flashArrays;
    }
  }

  // default_fs_opt - computed: false, optional: true, required: false
  private _defaultFsOpt?: string; 
  public get defaultFsOpt() {
    return this.getStringAttribute('default_fs_opt');
  }
  public set defaultFsOpt(value: string) {
    this._defaultFsOpt = value;
  }
  public resetDefaultFsOpt() {
    this._defaultFsOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFsOptInput() {
    return this._defaultFsOpt;
  }

  // default_fs_type - computed: false, optional: false, required: true
  private _defaultFsType?: string; 
  public get defaultFsType() {
    return this.getStringAttribute('default_fs_type');
  }
  public set defaultFsType(value: string) {
    this._defaultFsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFsTypeInput() {
    return this._defaultFsType;
  }

  // default_mount_opts - computed: false, optional: true, required: false
  private _defaultMountOpts?: string[]; 
  public get defaultMountOpts() {
    return this.getListAttribute('default_mount_opts');
  }
  public set defaultMountOpts(value: string[]) {
    this._defaultMountOpts = value;
  }
  public resetDefaultMountOpts() {
    this._defaultMountOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMountOptsInput() {
    return this._defaultMountOpts;
  }

  // disable_preempt_attachments - computed: false, optional: true, required: false
  private _disablePreemptAttachments?: boolean | cdktf.IResolvable; 
  public get disablePreemptAttachments() {
    return this.getBooleanAttribute('disable_preempt_attachments');
  }
  public set disablePreemptAttachments(value: boolean | cdktf.IResolvable) {
    this._disablePreemptAttachments = value;
  }
  public resetDisablePreemptAttachments() {
    this._disablePreemptAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePreemptAttachmentsInput() {
    return this._disablePreemptAttachments;
  }

  // iscsi_login_timeout - computed: false, optional: false, required: true
  private _iscsiLoginTimeout?: number; 
  public get iscsiLoginTimeout() {
    return this.getNumberAttribute('iscsi_login_timeout');
  }
  public set iscsiLoginTimeout(value: number) {
    this._iscsiLoginTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiLoginTimeoutInput() {
    return this._iscsiLoginTimeout;
  }

  // san_type - computed: false, optional: false, required: true
  private _sanType?: string; 
  public get sanType() {
    return this.getStringAttribute('san_type');
  }
  public set sanType(value: string) {
    this._sanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sanTypeInput() {
    return this._sanType;
  }

  // flash_arrays - computed: false, optional: false, required: true
  private _flashArrays = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArraysList(this, "flash_arrays", false);
  public get flashArrays() {
    return this._flashArrays;
  }
  public putFlashArrays(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayFlashArrays[] | cdktf.IResolvable) {
    this._flashArrays.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flashArraysInput() {
    return this._flashArrays.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#decryption_provider Fleet#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#store_provider Fleet#store_provider}
  */
  readonly storeProvider?: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#url Fleet#url}
  */
  readonly url: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#key Fleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#location Fleet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#provider Fleet#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding Fleet#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#version Fleet#version}
  */
  readonly version?: number;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name: string;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#secret_encoding_type Fleet#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info Fleet#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#blindfold_secret_info_internal Fleet#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#clear_secret_info Fleet#clear_secret_info}
  */
  readonly clearSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#vault_secret_info Fleet#vault_secret_info}
  */
  readonly vaultSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#wingman_secret_info Fleet#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfo;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoList",
    },
    vault_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#lables Fleet#lables}
  */
  readonly lables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#mgmt_dns_name Fleet#mgmt_dns_name}
  */
  readonly mgmtDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#mgmt_ip Fleet#mgmt_ip}
  */
  readonly mgmtIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#nfs_endpoint_dns_name Fleet#nfs_endpoint_dns_name}
  */
  readonly nfsEndpointDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#nfs_endpoint_ip Fleet#nfs_endpoint_ip}
  */
  readonly nfsEndpointIp?: string;
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#api_token Fleet#api_token}
  */
  readonly apiToken?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.lables),
    mgmt_dns_name: cdktf.stringToTerraform(struct!.mgmtDnsName),
    mgmt_ip: cdktf.stringToTerraform(struct!.mgmtIp),
    nfs_endpoint_dns_name: cdktf.stringToTerraform(struct!.nfsEndpointDnsName),
    nfs_endpoint_ip: cdktf.stringToTerraform(struct!.nfsEndpointIp),
    api_token: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToTerraform(struct!.apiToken),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.lables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mgmt_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.mgmtDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_ip: {
      value: cdktf.stringToHclTerraform(struct!.mgmtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_endpoint_dns_name: {
      value: cdktf.stringToHclTerraform(struct!.nfsEndpointDnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_endpoint_ip: {
      value: cdktf.stringToHclTerraform(struct!.nfsEndpointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lables !== undefined) {
      hasAnyValues = true;
      internalValueResult.lables = this._lables;
    }
    if (this._mgmtDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtDnsName = this._mgmtDnsName;
    }
    if (this._mgmtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtIp = this._mgmtIp;
    }
    if (this._nfsEndpointDnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsEndpointDnsName = this._nfsEndpointDnsName;
    }
    if (this._nfsEndpointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsEndpointIp = this._nfsEndpointIp;
    }
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lables = undefined;
      this._mgmtDnsName = undefined;
      this._mgmtIp = undefined;
      this._nfsEndpointDnsName = undefined;
      this._nfsEndpointIp = undefined;
      this._apiToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lables = value.lables;
      this._mgmtDnsName = value.mgmtDnsName;
      this._mgmtIp = value.mgmtIp;
      this._nfsEndpointDnsName = value.nfsEndpointDnsName;
      this._nfsEndpointIp = value.nfsEndpointIp;
      this._apiToken.internalValue = value.apiToken;
    }
  }

  // lables - computed: false, optional: true, required: false
  private _lables?: { [key: string]: string }; 
  public get lables() {
    return this.getStringMapAttribute('lables');
  }
  public set lables(value: { [key: string]: string }) {
    this._lables = value;
  }
  public resetLables() {
    this._lables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lablesInput() {
    return this._lables;
  }

  // mgmt_dns_name - computed: false, optional: true, required: false
  private _mgmtDnsName?: string; 
  public get mgmtDnsName() {
    return this.getStringAttribute('mgmt_dns_name');
  }
  public set mgmtDnsName(value: string) {
    this._mgmtDnsName = value;
  }
  public resetMgmtDnsName() {
    this._mgmtDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtDnsNameInput() {
    return this._mgmtDnsName;
  }

  // mgmt_ip - computed: false, optional: true, required: false
  private _mgmtIp?: string; 
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }
  public set mgmtIp(value: string) {
    this._mgmtIp = value;
  }
  public resetMgmtIp() {
    this._mgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpInput() {
    return this._mgmtIp;
  }

  // nfs_endpoint_dns_name - computed: false, optional: true, required: false
  private _nfsEndpointDnsName?: string; 
  public get nfsEndpointDnsName() {
    return this.getStringAttribute('nfs_endpoint_dns_name');
  }
  public set nfsEndpointDnsName(value: string) {
    this._nfsEndpointDnsName = value;
  }
  public resetNfsEndpointDnsName() {
    this._nfsEndpointDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsEndpointDnsNameInput() {
    return this._nfsEndpointDnsName;
  }

  // nfs_endpoint_ip - computed: false, optional: true, required: false
  private _nfsEndpointIp?: string; 
  public get nfsEndpointIp() {
    return this.getStringAttribute('nfs_endpoint_ip');
  }
  public set nfsEndpointIp(value: string) {
    this._nfsEndpointIp = value;
  }
  public resetNfsEndpointIp() {
    this._nfsEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsEndpointIpInput() {
    return this._nfsEndpointIp;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesList extends cdktf.ComplexList {
  public internalValue? : FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesOutputReference {
    return new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_snapshot_directory Fleet#enable_snapshot_directory}
  */
  readonly enableSnapshotDirectory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#export_rules Fleet#export_rules}
  */
  readonly exportRules?: string;
  /**
  * flash_blades block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#flash_blades Fleet#flash_blades}
  */
  readonly flashBlades: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades[] | cdktf.IResolvable;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_snapshot_directory: cdktf.booleanToTerraform(struct!.enableSnapshotDirectory),
    export_rules: cdktf.stringToTerraform(struct!.exportRules),
    flash_blades: cdktf.listMapper(fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToTerraform, true)(struct!.flashBlades),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_snapshot_directory: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnapshotDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_rules: {
      value: cdktf.stringToHclTerraform(struct!.exportRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flash_blades: {
      value: cdktf.listMapperHcl(fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesToHclTerraform, true)(struct!.flashBlades),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSnapshotDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnapshotDirectory = this._enableSnapshotDirectory;
    }
    if (this._exportRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRules = this._exportRules;
    }
    if (this._flashBlades?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashBlades = this._flashBlades?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSnapshotDirectory = undefined;
      this._exportRules = undefined;
      this._flashBlades.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSnapshotDirectory = value.enableSnapshotDirectory;
      this._exportRules = value.exportRules;
      this._flashBlades.internalValue = value.flashBlades;
    }
  }

  // enable_snapshot_directory - computed: false, optional: true, required: false
  private _enableSnapshotDirectory?: boolean | cdktf.IResolvable; 
  public get enableSnapshotDirectory() {
    return this.getBooleanAttribute('enable_snapshot_directory');
  }
  public set enableSnapshotDirectory(value: boolean | cdktf.IResolvable) {
    this._enableSnapshotDirectory = value;
  }
  public resetEnableSnapshotDirectory() {
    this._enableSnapshotDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnapshotDirectoryInput() {
    return this._enableSnapshotDirectory;
  }

  // export_rules - computed: false, optional: true, required: false
  private _exportRules?: string; 
  public get exportRules() {
    return this.getStringAttribute('export_rules');
  }
  public set exportRules(value: string) {
    this._exportRules = value;
  }
  public resetExportRules() {
    this._exportRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRulesInput() {
    return this._exportRules;
  }

  // flash_blades - computed: false, optional: false, required: true
  private _flashBlades = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBladesList(this, "flash_blades", false);
  public get flashBlades() {
    return this._flashBlades;
  }
  public putFlashBlades(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeFlashBlades[] | cdktf.IResolvable) {
    this._flashBlades.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flashBladesInput() {
    return this._flashBlades.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArrays {
  /**
  * flash_array block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#flash_array Fleet#flash_array}
  */
  readonly flashArray?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray;
  /**
  * flash_blade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#flash_blade Fleet#flash_blade}
  */
  readonly flashBlade?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArrays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flash_array: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToTerraform(struct!.flashArray),
    flash_blade: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToTerraform(struct!.flashBlade),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArrays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flash_array: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayToHclTerraform(struct!.flashArray),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayList",
    },
    flash_blade: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeToHclTerraform(struct!.flashBlade),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArrays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flashArray?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashArray = this._flashArray?.internalValue;
    }
    if (this._flashBlade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashBlade = this._flashBlade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArrays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flashArray.internalValue = undefined;
      this._flashBlade.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flashArray.internalValue = value.flashArray;
      this._flashBlade.internalValue = value.flashBlade;
    }
  }

  // flash_array - computed: false, optional: true, required: false
  private _flashArray = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArrayOutputReference(this, "flash_array");
  public get flashArray() {
    return this._flashArray;
  }
  public putFlashArray(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashArray) {
    this._flashArray.internalValue = value;
  }
  public resetFlashArray() {
    this._flashArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashArrayInput() {
    return this._flashArray.internalValue;
  }

  // flash_blade - computed: false, optional: true, required: false
  private _flashBlade = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBladeOutputReference(this, "flash_blade");
  public get flashBlade() {
    return this._flashBlade;
  }
  public putFlashBlade(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysFlashBlade) {
    this._flashBlade.internalValue = value;
  }
  public resetFlashBlade() {
    this._flashBlade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashBladeInput() {
    return this._flashBlade.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevicesPureServiceOrchestrator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#cluster_id Fleet#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_storage_topology Fleet#enable_storage_topology}
  */
  readonly enableStorageTopology?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#enable_strict_topology Fleet#enable_strict_topology}
  */
  readonly enableStrictTopology?: boolean | cdktf.IResolvable;
  /**
  * arrays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#arrays Fleet#arrays}
  */
  readonly arrays: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArrays;
}

export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorToTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    enable_storage_topology: cdktf.booleanToTerraform(struct!.enableStorageTopology),
    enable_strict_topology: cdktf.booleanToTerraform(struct!.enableStrictTopology),
    arrays: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToTerraform(struct!.arrays),
  }
}


export function fleetStorageDeviceListStorageDevicesPureServiceOrchestratorToHclTerraform(struct?: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference | FleetStorageDeviceListStorageDevicesPureServiceOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_storage_topology: {
      value: cdktf.booleanToHclTerraform(struct!.enableStorageTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_strict_topology: {
      value: cdktf.booleanToHclTerraform(struct!.enableStrictTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    arrays: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysToHclTerraform(struct!.arrays),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStorageDevicesPureServiceOrchestrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._enableStorageTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStorageTopology = this._enableStorageTopology;
    }
    if (this._enableStrictTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStrictTopology = this._enableStrictTopology;
    }
    if (this._arrays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrays = this._arrays?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._enableStorageTopology = undefined;
      this._enableStrictTopology = undefined;
      this._arrays.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._enableStorageTopology = value.enableStorageTopology;
      this._enableStrictTopology = value.enableStrictTopology;
      this._arrays.internalValue = value.arrays;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // enable_storage_topology - computed: false, optional: true, required: false
  private _enableStorageTopology?: boolean | cdktf.IResolvable; 
  public get enableStorageTopology() {
    return this.getBooleanAttribute('enable_storage_topology');
  }
  public set enableStorageTopology(value: boolean | cdktf.IResolvable) {
    this._enableStorageTopology = value;
  }
  public resetEnableStorageTopology() {
    this._enableStorageTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStorageTopologyInput() {
    return this._enableStorageTopology;
  }

  // enable_strict_topology - computed: false, optional: true, required: false
  private _enableStrictTopology?: boolean | cdktf.IResolvable; 
  public get enableStrictTopology() {
    return this.getBooleanAttribute('enable_strict_topology');
  }
  public set enableStrictTopology(value: boolean | cdktf.IResolvable) {
    this._enableStrictTopology = value;
  }
  public resetEnableStrictTopology() {
    this._enableStrictTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStrictTopologyInput() {
    return this._enableStrictTopology;
  }

  // arrays - computed: false, optional: false, required: true
  private _arrays = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArraysOutputReference(this, "arrays");
  public get arrays() {
    return this._arrays;
  }
  public putArrays(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestratorArrays) {
    this._arrays.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arraysInput() {
    return this._arrays.internalValue;
  }
}
export interface FleetStorageDeviceListStorageDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#advanced_advanced_parameters Fleet#advanced_advanced_parameters}
  */
  readonly advancedAdvancedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#custom_storage Fleet#custom_storage}
  */
  readonly customStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_device Fleet#storage_device}
  */
  readonly storageDevice: string;
  /**
  * hpe_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#hpe_storage Fleet#hpe_storage}
  */
  readonly hpeStorage?: FleetStorageDeviceListStorageDevicesHpeStorage;
  /**
  * netapp_trident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#netapp_trident Fleet#netapp_trident}
  */
  readonly netappTrident?: FleetStorageDeviceListStorageDevicesNetappTrident;
  /**
  * pure_service_orchestrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#pure_service_orchestrator Fleet#pure_service_orchestrator}
  */
  readonly pureServiceOrchestrator?: FleetStorageDeviceListStorageDevicesPureServiceOrchestrator;
}

export function fleetStorageDeviceListStorageDevicesToTerraform(struct?: FleetStorageDeviceListStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_advanced_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.advancedAdvancedParameters),
    custom_storage: cdktf.booleanToTerraform(struct!.customStorage),
    storage_device: cdktf.stringToTerraform(struct!.storageDevice),
    hpe_storage: fleetStorageDeviceListStorageDevicesHpeStorageToTerraform(struct!.hpeStorage),
    netapp_trident: fleetStorageDeviceListStorageDevicesNetappTridentToTerraform(struct!.netappTrident),
    pure_service_orchestrator: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorToTerraform(struct!.pureServiceOrchestrator),
  }
}


export function fleetStorageDeviceListStorageDevicesToHclTerraform(struct?: FleetStorageDeviceListStorageDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_advanced_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.advancedAdvancedParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_storage: {
      value: cdktf.booleanToHclTerraform(struct!.customStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_device: {
      value: cdktf.stringToHclTerraform(struct!.storageDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hpe_storage: {
      value: fleetStorageDeviceListStorageDevicesHpeStorageToHclTerraform(struct!.hpeStorage),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesHpeStorageList",
    },
    netapp_trident: {
      value: fleetStorageDeviceListStorageDevicesNetappTridentToHclTerraform(struct!.netappTrident),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesNetappTridentList",
    },
    pure_service_orchestrator: {
      value: fleetStorageDeviceListStorageDevicesPureServiceOrchestratorToHclTerraform(struct!.pureServiceOrchestrator),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesPureServiceOrchestratorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStorageDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageDeviceListStorageDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedAdvancedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedAdvancedParameters = this._advancedAdvancedParameters;
    }
    if (this._customStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStorage = this._customStorage;
    }
    if (this._storageDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevice = this._storageDevice;
    }
    if (this._hpeStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpeStorage = this._hpeStorage?.internalValue;
    }
    if (this._netappTrident?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappTrident = this._netappTrident?.internalValue;
    }
    if (this._pureServiceOrchestrator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pureServiceOrchestrator = this._pureServiceOrchestrator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStorageDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedAdvancedParameters = undefined;
      this._customStorage = undefined;
      this._storageDevice = undefined;
      this._hpeStorage.internalValue = undefined;
      this._netappTrident.internalValue = undefined;
      this._pureServiceOrchestrator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedAdvancedParameters = value.advancedAdvancedParameters;
      this._customStorage = value.customStorage;
      this._storageDevice = value.storageDevice;
      this._hpeStorage.internalValue = value.hpeStorage;
      this._netappTrident.internalValue = value.netappTrident;
      this._pureServiceOrchestrator.internalValue = value.pureServiceOrchestrator;
    }
  }

  // advanced_advanced_parameters - computed: false, optional: true, required: false
  private _advancedAdvancedParameters?: { [key: string]: string }; 
  public get advancedAdvancedParameters() {
    return this.getStringMapAttribute('advanced_advanced_parameters');
  }
  public set advancedAdvancedParameters(value: { [key: string]: string }) {
    this._advancedAdvancedParameters = value;
  }
  public resetAdvancedAdvancedParameters() {
    this._advancedAdvancedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedAdvancedParametersInput() {
    return this._advancedAdvancedParameters;
  }

  // custom_storage - computed: false, optional: true, required: false
  private _customStorage?: boolean | cdktf.IResolvable; 
  public get customStorage() {
    return this.getBooleanAttribute('custom_storage');
  }
  public set customStorage(value: boolean | cdktf.IResolvable) {
    this._customStorage = value;
  }
  public resetCustomStorage() {
    this._customStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStorageInput() {
    return this._customStorage;
  }

  // storage_device - computed: false, optional: false, required: true
  private _storageDevice?: string; 
  public get storageDevice() {
    return this.getStringAttribute('storage_device');
  }
  public set storageDevice(value: string) {
    this._storageDevice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceInput() {
    return this._storageDevice;
  }

  // hpe_storage - computed: false, optional: true, required: false
  private _hpeStorage = new FleetStorageDeviceListStorageDevicesHpeStorageOutputReference(this, "hpe_storage");
  public get hpeStorage() {
    return this._hpeStorage;
  }
  public putHpeStorage(value: FleetStorageDeviceListStorageDevicesHpeStorage) {
    this._hpeStorage.internalValue = value;
  }
  public resetHpeStorage() {
    this._hpeStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpeStorageInput() {
    return this._hpeStorage.internalValue;
  }

  // netapp_trident - computed: false, optional: true, required: false
  private _netappTrident = new FleetStorageDeviceListStorageDevicesNetappTridentOutputReference(this, "netapp_trident");
  public get netappTrident() {
    return this._netappTrident;
  }
  public putNetappTrident(value: FleetStorageDeviceListStorageDevicesNetappTrident) {
    this._netappTrident.internalValue = value;
  }
  public resetNetappTrident() {
    this._netappTrident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappTridentInput() {
    return this._netappTrident.internalValue;
  }

  // pure_service_orchestrator - computed: false, optional: true, required: false
  private _pureServiceOrchestrator = new FleetStorageDeviceListStorageDevicesPureServiceOrchestratorOutputReference(this, "pure_service_orchestrator");
  public get pureServiceOrchestrator() {
    return this._pureServiceOrchestrator;
  }
  public putPureServiceOrchestrator(value: FleetStorageDeviceListStorageDevicesPureServiceOrchestrator) {
    this._pureServiceOrchestrator.internalValue = value;
  }
  public resetPureServiceOrchestrator() {
    this._pureServiceOrchestrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pureServiceOrchestratorInput() {
    return this._pureServiceOrchestrator.internalValue;
  }
}

export class FleetStorageDeviceListStorageDevicesList extends cdktf.ComplexList {
  public internalValue? : FleetStorageDeviceListStorageDevices[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageDeviceListStorageDevicesOutputReference {
    return new FleetStorageDeviceListStorageDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageDeviceListStruct {
  /**
  * storage_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_devices Fleet#storage_devices}
  */
  readonly storageDevices?: FleetStorageDeviceListStorageDevices[] | cdktf.IResolvable;
}

export function fleetStorageDeviceListStructToTerraform(struct?: FleetStorageDeviceListStructOutputReference | FleetStorageDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_devices: cdktf.listMapper(fleetStorageDeviceListStorageDevicesToTerraform, true)(struct!.storageDevices),
  }
}


export function fleetStorageDeviceListStructToHclTerraform(struct?: FleetStorageDeviceListStructOutputReference | FleetStorageDeviceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_devices: {
      value: cdktf.listMapperHcl(fleetStorageDeviceListStorageDevicesToHclTerraform, true)(struct!.storageDevices),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageDeviceListStorageDevicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageDeviceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageDeviceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevices = this._storageDevices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageDeviceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageDevices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageDevices.internalValue = value.storageDevices;
    }
  }

  // storage_devices - computed: false, optional: true, required: false
  private _storageDevices = new FleetStorageDeviceListStorageDevicesList(this, "storage_devices", false);
  public get storageDevices() {
    return this._storageDevices;
  }
  public putStorageDevices(value: FleetStorageDeviceListStorageDevices[] | cdktf.IResolvable) {
    this._storageDevices.internalValue = value;
  }
  public resetStorageDevices() {
    this._storageDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDevicesInput() {
    return this._storageDevices.internalValue;
  }
}
export interface FleetStorageInterfaceListInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetStorageInterfaceListInterfacesToTerraform(struct?: FleetStorageInterfaceListInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetStorageInterfaceListInterfacesToHclTerraform(struct?: FleetStorageInterfaceListInterfaces | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageInterfaceListInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageInterfaceListInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageInterfaceListInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetStorageInterfaceListInterfacesList extends cdktf.ComplexList {
  public internalValue? : FleetStorageInterfaceListInterfaces[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageInterfaceListInterfacesOutputReference {
    return new FleetStorageInterfaceListInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageInterfaceListStruct {
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#interfaces Fleet#interfaces}
  */
  readonly interfaces: FleetStorageInterfaceListInterfaces[] | cdktf.IResolvable;
}

export function fleetStorageInterfaceListStructToTerraform(struct?: FleetStorageInterfaceListStructOutputReference | FleetStorageInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(fleetStorageInterfaceListInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function fleetStorageInterfaceListStructToHclTerraform(struct?: FleetStorageInterfaceListStructOutputReference | FleetStorageInterfaceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(fleetStorageInterfaceListInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageInterfaceListInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageInterfaceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageInterfaceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageInterfaceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new FleetStorageInterfaceListInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: FleetStorageInterfaceListInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface FleetStorageStaticRoutesStorageRoutesNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetStorageStaticRoutesStorageRoutesNexthopInterfaceToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetStorageStaticRoutesStorageRoutesNexthopInterfaceToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopInterface | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesNexthopInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesNexthopInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FleetStorageStaticRoutesStorageRoutesNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : FleetStorageStaticRoutesStorageRoutesNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageStaticRoutesStorageRoutesNexthopInterfaceOutputReference {
    return new FleetStorageStaticRoutesStorageRoutesNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#addr Fleet#addr}
  */
  readonly addr?: string;
}

export function fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4ToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4OutputReference | FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4ToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4OutputReference | FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#addr Fleet#addr}
  */
  readonly addr?: string;
}

export function fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6ToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6OutputReference | FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6ToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6OutputReference | FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#ipv4 Fleet#ipv4}
  */
  readonly ipv4?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#ipv6 Fleet#ipv6}
  */
  readonly ipv6?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6;
}

export function fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressOutputReference | FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressOutputReference | FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddress | undefined {
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

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressIpv6) {
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
export interface FleetStorageStaticRoutesStorageRoutesNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#type Fleet#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#interface Fleet#interface}
  */
  readonly interface?: FleetStorageStaticRoutesStorageRoutesNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#nexthop_address Fleet#nexthop_address}
  */
  readonly nexthopAddress?: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddress;
}

export function fleetStorageStaticRoutesStorageRoutesNexthopToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopOutputReference | FleetStorageStaticRoutesStorageRoutesNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(fleetStorageStaticRoutesStorageRoutesNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function fleetStorageStaticRoutesStorageRoutesNexthopToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesNexthopOutputReference | FleetStorageStaticRoutesStorageRoutesNexthop): any {
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
    interface: {
      value: cdktf.listMapperHcl(fleetStorageStaticRoutesStorageRoutesNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesNexthopInterfaceList",
    },
    nexthop_address: {
      value: fleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
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

  // interface - computed: false, optional: true, required: false
  private _interface = new FleetStorageStaticRoutesStorageRoutesNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FleetStorageStaticRoutesStorageRoutesNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: FleetStorageStaticRoutesStorageRoutesNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface FleetStorageStaticRoutesStorageRoutesSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#plen Fleet#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#prefix Fleet#prefix}
  */
  readonly prefix?: string;
}

export function fleetStorageStaticRoutesStorageRoutesSubnetsIpv4ToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesSubnetsIpv4OutputReference | FleetStorageStaticRoutesStorageRoutesSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function fleetStorageStaticRoutesStorageRoutesSubnetsIpv4ToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesSubnetsIpv4OutputReference | FleetStorageStaticRoutesStorageRoutesSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface FleetStorageStaticRoutesStorageRoutesSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#plen Fleet#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#prefix Fleet#prefix}
  */
  readonly prefix?: string;
}

export function fleetStorageStaticRoutesStorageRoutesSubnetsIpv6ToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesSubnetsIpv6OutputReference | FleetStorageStaticRoutesStorageRoutesSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function fleetStorageStaticRoutesStorageRoutesSubnetsIpv6ToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesSubnetsIpv6OutputReference | FleetStorageStaticRoutesStorageRoutesSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface FleetStorageStaticRoutesStorageRoutesSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#ipv4 Fleet#ipv4}
  */
  readonly ipv4?: FleetStorageStaticRoutesStorageRoutesSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#ipv6 Fleet#ipv6}
  */
  readonly ipv6?: FleetStorageStaticRoutesStorageRoutesSubnetsIpv6;
}

export function fleetStorageStaticRoutesStorageRoutesSubnetsToTerraform(struct?: FleetStorageStaticRoutesStorageRoutesSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: fleetStorageStaticRoutesStorageRoutesSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: fleetStorageStaticRoutesStorageRoutesSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function fleetStorageStaticRoutesStorageRoutesSubnetsToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutesSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: fleetStorageStaticRoutesStorageRoutesSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesSubnetsIpv4List",
    },
    ipv6: {
      value: fleetStorageStaticRoutesStorageRoutesSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageStaticRoutesStorageRoutesSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutesSubnets | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new FleetStorageStaticRoutesStorageRoutesSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: FleetStorageStaticRoutesStorageRoutesSubnetsIpv4) {
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
  private _ipv6 = new FleetStorageStaticRoutesStorageRoutesSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: FleetStorageStaticRoutesStorageRoutesSubnetsIpv6) {
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

export class FleetStorageStaticRoutesStorageRoutesSubnetsList extends cdktf.ComplexList {
  public internalValue? : FleetStorageStaticRoutesStorageRoutesSubnets[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageStaticRoutesStorageRoutesSubnetsOutputReference {
    return new FleetStorageStaticRoutesStorageRoutesSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageStaticRoutesStorageRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#attrs Fleet#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#labels Fleet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#nexthop Fleet#nexthop}
  */
  readonly nexthop?: FleetStorageStaticRoutesStorageRoutesNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#subnets Fleet#subnets}
  */
  readonly subnets: FleetStorageStaticRoutesStorageRoutesSubnets[] | cdktf.IResolvable;
}

export function fleetStorageStaticRoutesStorageRoutesToTerraform(struct?: FleetStorageStaticRoutesStorageRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: fleetStorageStaticRoutesStorageRoutesNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(fleetStorageStaticRoutesStorageRoutesSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function fleetStorageStaticRoutesStorageRoutesToHclTerraform(struct?: FleetStorageStaticRoutesStorageRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: fleetStorageStaticRoutesStorageRoutesNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(fleetStorageStaticRoutesStorageRoutesSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesStorageRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetStorageStaticRoutesStorageRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutesStorageRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new FleetStorageStaticRoutesStorageRoutesNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: FleetStorageStaticRoutesStorageRoutesNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new FleetStorageStaticRoutesStorageRoutesSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: FleetStorageStaticRoutesStorageRoutesSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class FleetStorageStaticRoutesStorageRoutesList extends cdktf.ComplexList {
  public internalValue? : FleetStorageStaticRoutesStorageRoutes[] | cdktf.IResolvable

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
  public get(index: number): FleetStorageStaticRoutesStorageRoutesOutputReference {
    return new FleetStorageStaticRoutesStorageRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetStorageStaticRoutes {
  /**
  * storage_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#storage_routes Fleet#storage_routes}
  */
  readonly storageRoutes: FleetStorageStaticRoutesStorageRoutes[] | cdktf.IResolvable;
}

export function fleetStorageStaticRoutesToTerraform(struct?: FleetStorageStaticRoutesOutputReference | FleetStorageStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_routes: cdktf.listMapper(fleetStorageStaticRoutesStorageRoutesToTerraform, true)(struct!.storageRoutes),
  }
}


export function fleetStorageStaticRoutesToHclTerraform(struct?: FleetStorageStaticRoutesOutputReference | FleetStorageStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_routes: {
      value: cdktf.listMapperHcl(fleetStorageStaticRoutesStorageRoutesToHclTerraform, true)(struct!.storageRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "FleetStorageStaticRoutesStorageRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetStorageStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetStorageStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageRoutes = this._storageRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetStorageStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageRoutes.internalValue = value.storageRoutes;
    }
  }

  // storage_routes - computed: false, optional: false, required: true
  private _storageRoutes = new FleetStorageStaticRoutesStorageRoutesList(this, "storage_routes", false);
  public get storageRoutes() {
    return this._storageRoutes;
  }
  public putStorageRoutes(value: FleetStorageStaticRoutesStorageRoutes[] | cdktf.IResolvable) {
    this._storageRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRoutesInput() {
    return this._storageRoutes.internalValue;
  }
}
export interface FleetUsbPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#name Fleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#namespace Fleet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#tenant Fleet#tenant}
  */
  readonly tenant?: string;
}

export function fleetUsbPolicyToTerraform(struct?: FleetUsbPolicyOutputReference | FleetUsbPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fleetUsbPolicyToHclTerraform(struct?: FleetUsbPolicyOutputReference | FleetUsbPolicy): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetUsbPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetUsbPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetUsbPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet volterra_fleet}
*/
export class Fleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fleet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fleet to import
  * @param importFromId The id of the existing Fleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/fleet volterra_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetConfig
  */
  public constructor(scope: Construct, id: string, config: FleetConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_fleet',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAllUsb = config.allowAllUsb;
    this._annotations = config.annotations;
    this._defaultConfig = config.defaultConfig;
    this._defaultSriovInterface = config.defaultSriovInterface;
    this._defaultStorageClass = config.defaultStorageClass;
    this._denyAllUsb = config.denyAllUsb;
    this._description = config.description;
    this._disable = config.disable;
    this._disableGpu = config.disableGpu;
    this._disableVm = config.disableVm;
    this._enableDefaultFleetConfigDownload = config.enableDefaultFleetConfigDownload;
    this._enableGpu = config.enableGpu;
    this._fleetLabel = config.fleetLabel;
    this._id = config.id;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noBondDevices = config.noBondDevices;
    this._noDcClusterGroup = config.noDcClusterGroup;
    this._noStorageDevice = config.noStorageDevice;
    this._noStorageInterfaces = config.noStorageInterfaces;
    this._noStorageStaticRoutes = config.noStorageStaticRoutes;
    this._operatingSystemVersion = config.operatingSystemVersion;
    this._volterraSoftwareVersion = config.volterraSoftwareVersion;
    this._blockedServices.internalValue = config.blockedServices;
    this._bondDeviceList.internalValue = config.bondDeviceList;
    this._dcClusterGroup.internalValue = config.dcClusterGroup;
    this._dcClusterGroupInside.internalValue = config.dcClusterGroupInside;
    this._deviceList.internalValue = config.deviceList;
    this._enableVgpu.internalValue = config.enableVgpu;
    this._enableVm.internalValue = config.enableVm;
    this._insideVirtualNetwork.internalValue = config.insideVirtualNetwork;
    this._interfaceList.internalValue = config.interfaceList;
    this._kubernetesUpgradeDrain.internalValue = config.kubernetesUpgradeDrain;
    this._logReceiver.internalValue = config.logReceiver;
    this._networkConnectors.internalValue = config.networkConnectors;
    this._networkFirewall.internalValue = config.networkFirewall;
    this._outsideVirtualNetwork.internalValue = config.outsideVirtualNetwork;
    this._performanceEnhancementMode.internalValue = config.performanceEnhancementMode;
    this._sriovInterfaces.internalValue = config.sriovInterfaces;
    this._storageClassList.internalValue = config.storageClassList;
    this._storageDeviceList.internalValue = config.storageDeviceList;
    this._storageInterfaceList.internalValue = config.storageInterfaceList;
    this._storageStaticRoutes.internalValue = config.storageStaticRoutes;
    this._usbPolicy.internalValue = config.usbPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all_usb - computed: false, optional: true, required: false
  private _allowAllUsb?: boolean | cdktf.IResolvable; 
  public get allowAllUsb() {
    return this.getBooleanAttribute('allow_all_usb');
  }
  public set allowAllUsb(value: boolean | cdktf.IResolvable) {
    this._allowAllUsb = value;
  }
  public resetAllowAllUsb() {
    this._allowAllUsb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllUsbInput() {
    return this._allowAllUsb;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig?: boolean | cdktf.IResolvable; 
  public get defaultConfig() {
    return this.getBooleanAttribute('default_config');
  }
  public set defaultConfig(value: boolean | cdktf.IResolvable) {
    this._defaultConfig = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig;
  }

  // default_sriov_interface - computed: false, optional: true, required: false
  private _defaultSriovInterface?: boolean | cdktf.IResolvable; 
  public get defaultSriovInterface() {
    return this.getBooleanAttribute('default_sriov_interface');
  }
  public set defaultSriovInterface(value: boolean | cdktf.IResolvable) {
    this._defaultSriovInterface = value;
  }
  public resetDefaultSriovInterface() {
    this._defaultSriovInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSriovInterfaceInput() {
    return this._defaultSriovInterface;
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: boolean | cdktf.IResolvable; 
  public get defaultStorageClass() {
    return this.getBooleanAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: boolean | cdktf.IResolvable) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass;
  }

  // deny_all_usb - computed: false, optional: true, required: false
  private _denyAllUsb?: boolean | cdktf.IResolvable; 
  public get denyAllUsb() {
    return this.getBooleanAttribute('deny_all_usb');
  }
  public set denyAllUsb(value: boolean | cdktf.IResolvable) {
    this._denyAllUsb = value;
  }
  public resetDenyAllUsb() {
    this._denyAllUsb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllUsbInput() {
    return this._denyAllUsb;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_gpu - computed: false, optional: true, required: false
  private _disableGpu?: boolean | cdktf.IResolvable; 
  public get disableGpu() {
    return this.getBooleanAttribute('disable_gpu');
  }
  public set disableGpu(value: boolean | cdktf.IResolvable) {
    this._disableGpu = value;
  }
  public resetDisableGpu() {
    this._disableGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGpuInput() {
    return this._disableGpu;
  }

  // disable_vm - computed: false, optional: true, required: false
  private _disableVm?: boolean | cdktf.IResolvable; 
  public get disableVm() {
    return this.getBooleanAttribute('disable_vm');
  }
  public set disableVm(value: boolean | cdktf.IResolvable) {
    this._disableVm = value;
  }
  public resetDisableVm() {
    this._disableVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVmInput() {
    return this._disableVm;
  }

  // enable_default_fleet_config_download - computed: false, optional: true, required: false
  private _enableDefaultFleetConfigDownload?: boolean | cdktf.IResolvable; 
  public get enableDefaultFleetConfigDownload() {
    return this.getBooleanAttribute('enable_default_fleet_config_download');
  }
  public set enableDefaultFleetConfigDownload(value: boolean | cdktf.IResolvable) {
    this._enableDefaultFleetConfigDownload = value;
  }
  public resetEnableDefaultFleetConfigDownload() {
    this._enableDefaultFleetConfigDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultFleetConfigDownloadInput() {
    return this._enableDefaultFleetConfigDownload;
  }

  // enable_gpu - computed: false, optional: true, required: false
  private _enableGpu?: boolean | cdktf.IResolvable; 
  public get enableGpu() {
    return this.getBooleanAttribute('enable_gpu');
  }
  public set enableGpu(value: boolean | cdktf.IResolvable) {
    this._enableGpu = value;
  }
  public resetEnableGpu() {
    this._enableGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGpuInput() {
    return this._enableGpu;
  }

  // fleet_label - computed: false, optional: false, required: true
  private _fleetLabel?: string; 
  public get fleetLabel() {
    return this.getStringAttribute('fleet_label');
  }
  public set fleetLabel(value: string) {
    this._fleetLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetLabelInput() {
    return this._fleetLabel;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // logs_streaming_disabled - computed: false, optional: true, required: false
  private _logsStreamingDisabled?: boolean | cdktf.IResolvable; 
  public get logsStreamingDisabled() {
    return this.getBooleanAttribute('logs_streaming_disabled');
  }
  public set logsStreamingDisabled(value: boolean | cdktf.IResolvable) {
    this._logsStreamingDisabled = value;
  }
  public resetLogsStreamingDisabled() {
    this._logsStreamingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsStreamingDisabledInput() {
    return this._logsStreamingDisabled;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // no_bond_devices - computed: false, optional: true, required: false
  private _noBondDevices?: boolean | cdktf.IResolvable; 
  public get noBondDevices() {
    return this.getBooleanAttribute('no_bond_devices');
  }
  public set noBondDevices(value: boolean | cdktf.IResolvable) {
    this._noBondDevices = value;
  }
  public resetNoBondDevices() {
    this._noBondDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBondDevicesInput() {
    return this._noBondDevices;
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
  }

  // no_storage_device - computed: false, optional: true, required: false
  private _noStorageDevice?: boolean | cdktf.IResolvable; 
  public get noStorageDevice() {
    return this.getBooleanAttribute('no_storage_device');
  }
  public set noStorageDevice(value: boolean | cdktf.IResolvable) {
    this._noStorageDevice = value;
  }
  public resetNoStorageDevice() {
    this._noStorageDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStorageDeviceInput() {
    return this._noStorageDevice;
  }

  // no_storage_interfaces - computed: false, optional: true, required: false
  private _noStorageInterfaces?: boolean | cdktf.IResolvable; 
  public get noStorageInterfaces() {
    return this.getBooleanAttribute('no_storage_interfaces');
  }
  public set noStorageInterfaces(value: boolean | cdktf.IResolvable) {
    this._noStorageInterfaces = value;
  }
  public resetNoStorageInterfaces() {
    this._noStorageInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStorageInterfacesInput() {
    return this._noStorageInterfaces;
  }

  // no_storage_static_routes - computed: false, optional: true, required: false
  private _noStorageStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noStorageStaticRoutes() {
    return this.getBooleanAttribute('no_storage_static_routes');
  }
  public set noStorageStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noStorageStaticRoutes = value;
  }
  public resetNoStorageStaticRoutes() {
    this._noStorageStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStorageStaticRoutesInput() {
    return this._noStorageStaticRoutes;
  }

  // operating_system_version - computed: false, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }

  // blocked_services - computed: false, optional: true, required: false
  private _blockedServices = new FleetBlockedServicesList(this, "blocked_services", false);
  public get blockedServices() {
    return this._blockedServices;
  }
  public putBlockedServices(value: FleetBlockedServices[] | cdktf.IResolvable) {
    this._blockedServices.internalValue = value;
  }
  public resetBlockedServices() {
    this._blockedServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesInput() {
    return this._blockedServices.internalValue;
  }

  // bond_device_list - computed: false, optional: true, required: false
  private _bondDeviceList = new FleetBondDeviceListStructOutputReference(this, "bond_device_list");
  public get bondDeviceList() {
    return this._bondDeviceList;
  }
  public putBondDeviceList(value: FleetBondDeviceListStruct) {
    this._bondDeviceList.internalValue = value;
  }
  public resetBondDeviceList() {
    this._bondDeviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDeviceListInput() {
    return this._bondDeviceList.internalValue;
  }

  // dc_cluster_group - computed: false, optional: true, required: false
  private _dcClusterGroup = new FleetDcClusterGroupOutputReference(this, "dc_cluster_group");
  public get dcClusterGroup() {
    return this._dcClusterGroup;
  }
  public putDcClusterGroup(value: FleetDcClusterGroup) {
    this._dcClusterGroup.internalValue = value;
  }
  public resetDcClusterGroup() {
    this._dcClusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInput() {
    return this._dcClusterGroup.internalValue;
  }

  // dc_cluster_group_inside - computed: false, optional: true, required: false
  private _dcClusterGroupInside = new FleetDcClusterGroupInsideOutputReference(this, "dc_cluster_group_inside");
  public get dcClusterGroupInside() {
    return this._dcClusterGroupInside;
  }
  public putDcClusterGroupInside(value: FleetDcClusterGroupInside) {
    this._dcClusterGroupInside.internalValue = value;
  }
  public resetDcClusterGroupInside() {
    this._dcClusterGroupInside.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInsideInput() {
    return this._dcClusterGroupInside.internalValue;
  }

  // device_list - computed: false, optional: true, required: false
  private _deviceList = new FleetDeviceListStructOutputReference(this, "device_list");
  public get deviceList() {
    return this._deviceList;
  }
  public putDeviceList(value: FleetDeviceListStruct) {
    this._deviceList.internalValue = value;
  }
  public resetDeviceList() {
    this._deviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceListInput() {
    return this._deviceList.internalValue;
  }

  // enable_vgpu - computed: false, optional: true, required: false
  private _enableVgpu = new FleetEnableVgpuOutputReference(this, "enable_vgpu");
  public get enableVgpu() {
    return this._enableVgpu;
  }
  public putEnableVgpu(value: FleetEnableVgpu) {
    this._enableVgpu.internalValue = value;
  }
  public resetEnableVgpu() {
    this._enableVgpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVgpuInput() {
    return this._enableVgpu.internalValue;
  }

  // enable_vm - computed: false, optional: true, required: false
  private _enableVm = new FleetEnableVmOutputReference(this, "enable_vm");
  public get enableVm() {
    return this._enableVm;
  }
  public putEnableVm(value: FleetEnableVm) {
    this._enableVm.internalValue = value;
  }
  public resetEnableVm() {
    this._enableVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVmInput() {
    return this._enableVm.internalValue;
  }

  // inside_virtual_network - computed: false, optional: true, required: false
  private _insideVirtualNetwork = new FleetInsideVirtualNetworkList(this, "inside_virtual_network", false);
  public get insideVirtualNetwork() {
    return this._insideVirtualNetwork;
  }
  public putInsideVirtualNetwork(value: FleetInsideVirtualNetwork[] | cdktf.IResolvable) {
    this._insideVirtualNetwork.internalValue = value;
  }
  public resetInsideVirtualNetwork() {
    this._insideVirtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideVirtualNetworkInput() {
    return this._insideVirtualNetwork.internalValue;
  }

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new FleetInterfaceListStructOutputReference(this, "interface_list");
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: FleetInterfaceListStruct) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }

  // kubernetes_upgrade_drain - computed: false, optional: true, required: false
  private _kubernetesUpgradeDrain = new FleetKubernetesUpgradeDrainOutputReference(this, "kubernetes_upgrade_drain");
  public get kubernetesUpgradeDrain() {
    return this._kubernetesUpgradeDrain;
  }
  public putKubernetesUpgradeDrain(value: FleetKubernetesUpgradeDrain) {
    this._kubernetesUpgradeDrain.internalValue = value;
  }
  public resetKubernetesUpgradeDrain() {
    this._kubernetesUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUpgradeDrainInput() {
    return this._kubernetesUpgradeDrain.internalValue;
  }

  // log_receiver - computed: false, optional: true, required: false
  private _logReceiver = new FleetLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: FleetLogReceiver) {
    this._logReceiver.internalValue = value;
  }
  public resetLogReceiver() {
    this._logReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReceiverInput() {
    return this._logReceiver.internalValue;
  }

  // network_connectors - computed: false, optional: true, required: false
  private _networkConnectors = new FleetNetworkConnectorsList(this, "network_connectors", false);
  public get networkConnectors() {
    return this._networkConnectors;
  }
  public putNetworkConnectors(value: FleetNetworkConnectors[] | cdktf.IResolvable) {
    this._networkConnectors.internalValue = value;
  }
  public resetNetworkConnectors() {
    this._networkConnectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectorsInput() {
    return this._networkConnectors.internalValue;
  }

  // network_firewall - computed: false, optional: true, required: false
  private _networkFirewall = new FleetNetworkFirewallList(this, "network_firewall", false);
  public get networkFirewall() {
    return this._networkFirewall;
  }
  public putNetworkFirewall(value: FleetNetworkFirewall[] | cdktf.IResolvable) {
    this._networkFirewall.internalValue = value;
  }
  public resetNetworkFirewall() {
    this._networkFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallInput() {
    return this._networkFirewall.internalValue;
  }

  // outside_virtual_network - computed: false, optional: true, required: false
  private _outsideVirtualNetwork = new FleetOutsideVirtualNetworkList(this, "outside_virtual_network", false);
  public get outsideVirtualNetwork() {
    return this._outsideVirtualNetwork;
  }
  public putOutsideVirtualNetwork(value: FleetOutsideVirtualNetwork[] | cdktf.IResolvable) {
    this._outsideVirtualNetwork.internalValue = value;
  }
  public resetOutsideVirtualNetwork() {
    this._outsideVirtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideVirtualNetworkInput() {
    return this._outsideVirtualNetwork.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new FleetPerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: FleetPerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }

  // sriov_interfaces - computed: false, optional: true, required: false
  private _sriovInterfaces = new FleetSriovInterfacesOutputReference(this, "sriov_interfaces");
  public get sriovInterfaces() {
    return this._sriovInterfaces;
  }
  public putSriovInterfaces(value: FleetSriovInterfaces) {
    this._sriovInterfaces.internalValue = value;
  }
  public resetSriovInterfaces() {
    this._sriovInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovInterfacesInput() {
    return this._sriovInterfaces.internalValue;
  }

  // storage_class_list - computed: false, optional: true, required: false
  private _storageClassList = new FleetStorageClassListStructOutputReference(this, "storage_class_list");
  public get storageClassList() {
    return this._storageClassList;
  }
  public putStorageClassList(value: FleetStorageClassListStruct) {
    this._storageClassList.internalValue = value;
  }
  public resetStorageClassList() {
    this._storageClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassListInput() {
    return this._storageClassList.internalValue;
  }

  // storage_device_list - computed: false, optional: true, required: false
  private _storageDeviceList = new FleetStorageDeviceListStructOutputReference(this, "storage_device_list");
  public get storageDeviceList() {
    return this._storageDeviceList;
  }
  public putStorageDeviceList(value: FleetStorageDeviceListStruct) {
    this._storageDeviceList.internalValue = value;
  }
  public resetStorageDeviceList() {
    this._storageDeviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceListInput() {
    return this._storageDeviceList.internalValue;
  }

  // storage_interface_list - computed: false, optional: true, required: false
  private _storageInterfaceList = new FleetStorageInterfaceListStructOutputReference(this, "storage_interface_list");
  public get storageInterfaceList() {
    return this._storageInterfaceList;
  }
  public putStorageInterfaceList(value: FleetStorageInterfaceListStruct) {
    this._storageInterfaceList.internalValue = value;
  }
  public resetStorageInterfaceList() {
    this._storageInterfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInterfaceListInput() {
    return this._storageInterfaceList.internalValue;
  }

  // storage_static_routes - computed: false, optional: true, required: false
  private _storageStaticRoutes = new FleetStorageStaticRoutesOutputReference(this, "storage_static_routes");
  public get storageStaticRoutes() {
    return this._storageStaticRoutes;
  }
  public putStorageStaticRoutes(value: FleetStorageStaticRoutes) {
    this._storageStaticRoutes.internalValue = value;
  }
  public resetStorageStaticRoutes() {
    this._storageStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageStaticRoutesInput() {
    return this._storageStaticRoutes.internalValue;
  }

  // usb_policy - computed: false, optional: true, required: false
  private _usbPolicy = new FleetUsbPolicyOutputReference(this, "usb_policy");
  public get usbPolicy() {
    return this._usbPolicy;
  }
  public putUsbPolicy(value: FleetUsbPolicy) {
    this._usbPolicy.internalValue = value;
  }
  public resetUsbPolicy() {
    this._usbPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPolicyInput() {
    return this._usbPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_all_usb: cdktf.booleanToTerraform(this._allowAllUsb),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      default_config: cdktf.booleanToTerraform(this._defaultConfig),
      default_sriov_interface: cdktf.booleanToTerraform(this._defaultSriovInterface),
      default_storage_class: cdktf.booleanToTerraform(this._defaultStorageClass),
      deny_all_usb: cdktf.booleanToTerraform(this._denyAllUsb),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_gpu: cdktf.booleanToTerraform(this._disableGpu),
      disable_vm: cdktf.booleanToTerraform(this._disableVm),
      enable_default_fleet_config_download: cdktf.booleanToTerraform(this._enableDefaultFleetConfigDownload),
      enable_gpu: cdktf.booleanToTerraform(this._enableGpu),
      fleet_label: cdktf.stringToTerraform(this._fleetLabel),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_bond_devices: cdktf.booleanToTerraform(this._noBondDevices),
      no_dc_cluster_group: cdktf.booleanToTerraform(this._noDcClusterGroup),
      no_storage_device: cdktf.booleanToTerraform(this._noStorageDevice),
      no_storage_interfaces: cdktf.booleanToTerraform(this._noStorageInterfaces),
      no_storage_static_routes: cdktf.booleanToTerraform(this._noStorageStaticRoutes),
      operating_system_version: cdktf.stringToTerraform(this._operatingSystemVersion),
      volterra_software_version: cdktf.stringToTerraform(this._volterraSoftwareVersion),
      blocked_services: cdktf.listMapper(fleetBlockedServicesToTerraform, true)(this._blockedServices.internalValue),
      bond_device_list: fleetBondDeviceListStructToTerraform(this._bondDeviceList.internalValue),
      dc_cluster_group: fleetDcClusterGroupToTerraform(this._dcClusterGroup.internalValue),
      dc_cluster_group_inside: fleetDcClusterGroupInsideToTerraform(this._dcClusterGroupInside.internalValue),
      device_list: fleetDeviceListStructToTerraform(this._deviceList.internalValue),
      enable_vgpu: fleetEnableVgpuToTerraform(this._enableVgpu.internalValue),
      enable_vm: fleetEnableVmToTerraform(this._enableVm.internalValue),
      inside_virtual_network: cdktf.listMapper(fleetInsideVirtualNetworkToTerraform, true)(this._insideVirtualNetwork.internalValue),
      interface_list: fleetInterfaceListStructToTerraform(this._interfaceList.internalValue),
      kubernetes_upgrade_drain: fleetKubernetesUpgradeDrainToTerraform(this._kubernetesUpgradeDrain.internalValue),
      log_receiver: fleetLogReceiverToTerraform(this._logReceiver.internalValue),
      network_connectors: cdktf.listMapper(fleetNetworkConnectorsToTerraform, true)(this._networkConnectors.internalValue),
      network_firewall: cdktf.listMapper(fleetNetworkFirewallToTerraform, true)(this._networkFirewall.internalValue),
      outside_virtual_network: cdktf.listMapper(fleetOutsideVirtualNetworkToTerraform, true)(this._outsideVirtualNetwork.internalValue),
      performance_enhancement_mode: fleetPerformanceEnhancementModeToTerraform(this._performanceEnhancementMode.internalValue),
      sriov_interfaces: fleetSriovInterfacesToTerraform(this._sriovInterfaces.internalValue),
      storage_class_list: fleetStorageClassListStructToTerraform(this._storageClassList.internalValue),
      storage_device_list: fleetStorageDeviceListStructToTerraform(this._storageDeviceList.internalValue),
      storage_interface_list: fleetStorageInterfaceListStructToTerraform(this._storageInterfaceList.internalValue),
      storage_static_routes: fleetStorageStaticRoutesToTerraform(this._storageStaticRoutes.internalValue),
      usb_policy: fleetUsbPolicyToTerraform(this._usbPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all_usb: {
        value: cdktf.booleanToHclTerraform(this._allowAllUsb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      default_config: {
        value: cdktf.booleanToHclTerraform(this._defaultConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_sriov_interface: {
        value: cdktf.booleanToHclTerraform(this._defaultSriovInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_storage_class: {
        value: cdktf.booleanToHclTerraform(this._defaultStorageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deny_all_usb: {
        value: cdktf.booleanToHclTerraform(this._denyAllUsb),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_gpu: {
        value: cdktf.booleanToHclTerraform(this._disableGpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_vm: {
        value: cdktf.booleanToHclTerraform(this._disableVm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_fleet_config_download: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultFleetConfigDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_gpu: {
        value: cdktf.booleanToHclTerraform(this._enableGpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fleet_label: {
        value: cdktf.stringToHclTerraform(this._fleetLabel),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      logs_streaming_disabled: {
        value: cdktf.booleanToHclTerraform(this._logsStreamingDisabled),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_bond_devices: {
        value: cdktf.booleanToHclTerraform(this._noBondDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_dc_cluster_group: {
        value: cdktf.booleanToHclTerraform(this._noDcClusterGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_storage_device: {
        value: cdktf.booleanToHclTerraform(this._noStorageDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_storage_interfaces: {
        value: cdktf.booleanToHclTerraform(this._noStorageInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_storage_static_routes: {
        value: cdktf.booleanToHclTerraform(this._noStorageStaticRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operating_system_version: {
        value: cdktf.stringToHclTerraform(this._operatingSystemVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volterra_software_version: {
        value: cdktf.stringToHclTerraform(this._volterraSoftwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_services: {
        value: cdktf.listMapperHcl(fleetBlockedServicesToHclTerraform, true)(this._blockedServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetBlockedServicesList",
      },
      bond_device_list: {
        value: fleetBondDeviceListStructToHclTerraform(this._bondDeviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetBondDeviceListStructList",
      },
      dc_cluster_group: {
        value: fleetDcClusterGroupToHclTerraform(this._dcClusterGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetDcClusterGroupList",
      },
      dc_cluster_group_inside: {
        value: fleetDcClusterGroupInsideToHclTerraform(this._dcClusterGroupInside.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetDcClusterGroupInsideList",
      },
      device_list: {
        value: fleetDeviceListStructToHclTerraform(this._deviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetDeviceListStructList",
      },
      enable_vgpu: {
        value: fleetEnableVgpuToHclTerraform(this._enableVgpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetEnableVgpuList",
      },
      enable_vm: {
        value: fleetEnableVmToHclTerraform(this._enableVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetEnableVmList",
      },
      inside_virtual_network: {
        value: cdktf.listMapperHcl(fleetInsideVirtualNetworkToHclTerraform, true)(this._insideVirtualNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetInsideVirtualNetworkList",
      },
      interface_list: {
        value: fleetInterfaceListStructToHclTerraform(this._interfaceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetInterfaceListStructList",
      },
      kubernetes_upgrade_drain: {
        value: fleetKubernetesUpgradeDrainToHclTerraform(this._kubernetesUpgradeDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetKubernetesUpgradeDrainList",
      },
      log_receiver: {
        value: fleetLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetLogReceiverList",
      },
      network_connectors: {
        value: cdktf.listMapperHcl(fleetNetworkConnectorsToHclTerraform, true)(this._networkConnectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetNetworkConnectorsList",
      },
      network_firewall: {
        value: cdktf.listMapperHcl(fleetNetworkFirewallToHclTerraform, true)(this._networkFirewall.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetNetworkFirewallList",
      },
      outside_virtual_network: {
        value: cdktf.listMapperHcl(fleetOutsideVirtualNetworkToHclTerraform, true)(this._outsideVirtualNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetOutsideVirtualNetworkList",
      },
      performance_enhancement_mode: {
        value: fleetPerformanceEnhancementModeToHclTerraform(this._performanceEnhancementMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetPerformanceEnhancementModeList",
      },
      sriov_interfaces: {
        value: fleetSriovInterfacesToHclTerraform(this._sriovInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetSriovInterfacesList",
      },
      storage_class_list: {
        value: fleetStorageClassListStructToHclTerraform(this._storageClassList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetStorageClassListStructList",
      },
      storage_device_list: {
        value: fleetStorageDeviceListStructToHclTerraform(this._storageDeviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetStorageDeviceListStructList",
      },
      storage_interface_list: {
        value: fleetStorageInterfaceListStructToHclTerraform(this._storageInterfaceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetStorageInterfaceListStructList",
      },
      storage_static_routes: {
        value: fleetStorageStaticRoutesToHclTerraform(this._storageStaticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetStorageStaticRoutesList",
      },
      usb_policy: {
        value: fleetUsbPolicyToHclTerraform(this._usbPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetUsbPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
