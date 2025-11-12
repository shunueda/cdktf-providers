// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementInteroperableDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#color ManagementInteroperableDevice#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#comments ManagementInteroperableDevice#comments}
  */
  readonly comments?: string;
  /**
  * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#domains_to_process ManagementInteroperableDevice#domains_to_process}
  */
  readonly domainsToProcess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#id ManagementInteroperableDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ignore_errors ManagementInteroperableDevice#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ignore_warnings ManagementInteroperableDevice#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address of the Interoperable Device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv4_address ManagementInteroperableDevice#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address of the Interoperable Device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv6_address ManagementInteroperableDevice#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#name ManagementInteroperableDevice#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#tags ManagementInteroperableDevice#tags}
  */
  readonly tags?: string[];
  /**
  * VPN domain properties for the Interoperable Device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#vpn_settings ManagementInteroperableDevice#vpn_settings}
  */
  readonly vpnSettings?: { [key: string]: string };
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#interfaces ManagementInteroperableDevice#interfaces}
  */
  readonly interfaces?: ManagementInteroperableDeviceInterfaces[] | cdktf.IResolvable;
}
export interface ManagementInteroperableDeviceGroups {
}

export function managementInteroperableDeviceGroupsToTerraform(struct?: ManagementInteroperableDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementInteroperableDeviceGroupsToHclTerraform(struct?: ManagementInteroperableDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementInteroperableDeviceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementInteroperableDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInteroperableDeviceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ManagementInteroperableDeviceGroupsList extends cdktf.ComplexList {

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
  public get(index: number): ManagementInteroperableDeviceGroupsOutputReference {
    return new ManagementInteroperableDeviceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementInteroperableDeviceInterfacesTopologySettings {
  /**
  * Whether this interface leads to demilitarized zone (perimeter network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#interface_leads_to_dmz ManagementInteroperableDevice#interface_leads_to_dmz}
  */
  readonly interfaceLeadsToDmz?: boolean | cdktf.IResolvable;
  /**
  * Network settings behind this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ip_address_behind_this_interface ManagementInteroperableDevice#ip_address_behind_this_interface}
  */
  readonly ipAddressBehindThisInterface?: string;
  /**
  * Network behind this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#specific_network ManagementInteroperableDevice#specific_network}
  */
  readonly specificNetwork?: string;
}

export function managementInteroperableDeviceInterfacesTopologySettingsToTerraform(struct?: ManagementInteroperableDeviceInterfacesTopologySettingsOutputReference | ManagementInteroperableDeviceInterfacesTopologySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_leads_to_dmz: cdktf.booleanToTerraform(struct!.interfaceLeadsToDmz),
    ip_address_behind_this_interface: cdktf.stringToTerraform(struct!.ipAddressBehindThisInterface),
    specific_network: cdktf.stringToTerraform(struct!.specificNetwork),
  }
}


export function managementInteroperableDeviceInterfacesTopologySettingsToHclTerraform(struct?: ManagementInteroperableDeviceInterfacesTopologySettingsOutputReference | ManagementInteroperableDeviceInterfacesTopologySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_leads_to_dmz: {
      value: cdktf.booleanToHclTerraform(struct!.interfaceLeadsToDmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address_behind_this_interface: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressBehindThisInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_network: {
      value: cdktf.stringToHclTerraform(struct!.specificNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInteroperableDeviceInterfacesTopologySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementInteroperableDeviceInterfacesTopologySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceLeadsToDmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceLeadsToDmz = this._interfaceLeadsToDmz;
    }
    if (this._ipAddressBehindThisInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressBehindThisInterface = this._ipAddressBehindThisInterface;
    }
    if (this._specificNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificNetwork = this._specificNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInteroperableDeviceInterfacesTopologySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceLeadsToDmz = undefined;
      this._ipAddressBehindThisInterface = undefined;
      this._specificNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceLeadsToDmz = value.interfaceLeadsToDmz;
      this._ipAddressBehindThisInterface = value.ipAddressBehindThisInterface;
      this._specificNetwork = value.specificNetwork;
    }
  }

  // interface_leads_to_dmz - computed: false, optional: true, required: false
  private _interfaceLeadsToDmz?: boolean | cdktf.IResolvable; 
  public get interfaceLeadsToDmz() {
    return this.getBooleanAttribute('interface_leads_to_dmz');
  }
  public set interfaceLeadsToDmz(value: boolean | cdktf.IResolvable) {
    this._interfaceLeadsToDmz = value;
  }
  public resetInterfaceLeadsToDmz() {
    this._interfaceLeadsToDmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceLeadsToDmzInput() {
    return this._interfaceLeadsToDmz;
  }

  // ip_address_behind_this_interface - computed: false, optional: true, required: false
  private _ipAddressBehindThisInterface?: string; 
  public get ipAddressBehindThisInterface() {
    return this.getStringAttribute('ip_address_behind_this_interface');
  }
  public set ipAddressBehindThisInterface(value: string) {
    this._ipAddressBehindThisInterface = value;
  }
  public resetIpAddressBehindThisInterface() {
    this._ipAddressBehindThisInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressBehindThisInterfaceInput() {
    return this._ipAddressBehindThisInterface;
  }

  // specific_network - computed: false, optional: true, required: false
  private _specificNetwork?: string; 
  public get specificNetwork() {
    return this.getStringAttribute('specific_network');
  }
  public set specificNetwork(value: string) {
    this._specificNetwork = value;
  }
  public resetSpecificNetwork() {
    this._specificNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificNetworkInput() {
    return this._specificNetwork;
  }
}
export interface ManagementInteroperableDeviceInterfaces {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#color ManagementInteroperableDevice#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#comments ManagementInteroperableDevice#comments}
  */
  readonly comments?: string;
  /**
  * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#domains_to_process ManagementInteroperableDevice#domains_to_process}
  */
  readonly domainsToProcess?: string[];
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ignore_errors ManagementInteroperableDevice#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ignore_warnings ManagementInteroperableDevice#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv4_address ManagementInteroperableDevice#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv4_mask_length ManagementInteroperableDevice#ipv4_mask_length}
  */
  readonly ipv4MaskLength?: string;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv4_network_mask ManagementInteroperableDevice#ipv4_network_mask}
  */
  readonly ipv4NetworkMask?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv6_address ManagementInteroperableDevice#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv6_mask_length ManagementInteroperableDevice#ipv6_mask_length}
  */
  readonly ipv6MaskLength?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#ipv6_network_mask ManagementInteroperableDevice#ipv6_network_mask}
  */
  readonly ipv6NetworkMask?: string;
  /**
  * Object name. Must be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#name ManagementInteroperableDevice#name}
  */
  readonly name?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#tags ManagementInteroperableDevice#tags}
  */
  readonly tags?: string[];
  /**
  * Topology configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#topology ManagementInteroperableDevice#topology}
  */
  readonly topology?: string;
  /**
  * topology_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#topology_settings ManagementInteroperableDevice#topology_settings}
  */
  readonly topologySettings?: ManagementInteroperableDeviceInterfacesTopologySettings;
}

export function managementInteroperableDeviceInterfacesToTerraform(struct?: ManagementInteroperableDeviceInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    comments: cdktf.stringToTerraform(struct!.comments),
    domains_to_process: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainsToProcess),
    ignore_errors: cdktf.booleanToTerraform(struct!.ignoreErrors),
    ignore_warnings: cdktf.booleanToTerraform(struct!.ignoreWarnings),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_mask_length: cdktf.stringToTerraform(struct!.ipv4MaskLength),
    ipv4_network_mask: cdktf.stringToTerraform(struct!.ipv4NetworkMask),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_mask_length: cdktf.stringToTerraform(struct!.ipv6MaskLength),
    ipv6_network_mask: cdktf.stringToTerraform(struct!.ipv6NetworkMask),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    topology: cdktf.stringToTerraform(struct!.topology),
    topology_settings: managementInteroperableDeviceInterfacesTopologySettingsToTerraform(struct!.topologySettings),
  }
}


export function managementInteroperableDeviceInterfacesToHclTerraform(struct?: ManagementInteroperableDeviceInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains_to_process: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainsToProcess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv4MaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_network_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NetworkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv6MaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_network_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NetworkMask),
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
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_settings: {
      value: managementInteroperableDeviceInterfacesTopologySettingsToHclTerraform(struct!.topologySettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementInteroperableDeviceInterfacesTopologySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInteroperableDeviceInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementInteroperableDeviceInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._domainsToProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainsToProcess = this._domainsToProcess;
    }
    if (this._ignoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrors = this._ignoreErrors;
    }
    if (this._ignoreWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreWarnings = this._ignoreWarnings;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4MaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4MaskLength = this._ipv4MaskLength;
    }
    if (this._ipv4NetworkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NetworkMask = this._ipv4NetworkMask;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6MaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MaskLength = this._ipv6MaskLength;
    }
    if (this._ipv6NetworkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NetworkMask = this._ipv6NetworkMask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._topologySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySettings = this._topologySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInteroperableDeviceInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._comments = undefined;
      this._domainsToProcess = undefined;
      this._ignoreErrors = undefined;
      this._ignoreWarnings = undefined;
      this._ipv4Address = undefined;
      this._ipv4MaskLength = undefined;
      this._ipv4NetworkMask = undefined;
      this._ipv6Address = undefined;
      this._ipv6MaskLength = undefined;
      this._ipv6NetworkMask = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._topology = undefined;
      this._topologySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._comments = value.comments;
      this._domainsToProcess = value.domainsToProcess;
      this._ignoreErrors = value.ignoreErrors;
      this._ignoreWarnings = value.ignoreWarnings;
      this._ipv4Address = value.ipv4Address;
      this._ipv4MaskLength = value.ipv4MaskLength;
      this._ipv4NetworkMask = value.ipv4NetworkMask;
      this._ipv6Address = value.ipv6Address;
      this._ipv6MaskLength = value.ipv6MaskLength;
      this._ipv6NetworkMask = value.ipv6NetworkMask;
      this._name = value.name;
      this._tags = value.tags;
      this._topology = value.topology;
      this._topologySettings.internalValue = value.topologySettings;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // domains_to_process - computed: false, optional: true, required: false
  private _domainsToProcess?: string[]; 
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }
  public set domainsToProcess(value: string[]) {
    this._domainsToProcess = value;
  }
  public resetDomainsToProcess() {
    this._domainsToProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsToProcessInput() {
    return this._domainsToProcess;
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_mask_length - computed: false, optional: true, required: false
  private _ipv4MaskLength?: string; 
  public get ipv4MaskLength() {
    return this.getStringAttribute('ipv4_mask_length');
  }
  public set ipv4MaskLength(value: string) {
    this._ipv4MaskLength = value;
  }
  public resetIpv4MaskLength() {
    this._ipv4MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskLengthInput() {
    return this._ipv4MaskLength;
  }

  // ipv4_network_mask - computed: false, optional: true, required: false
  private _ipv4NetworkMask?: string; 
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }
  public set ipv4NetworkMask(value: string) {
    this._ipv4NetworkMask = value;
  }
  public resetIpv4NetworkMask() {
    this._ipv4NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetworkMaskInput() {
    return this._ipv4NetworkMask;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_mask_length - computed: false, optional: true, required: false
  private _ipv6MaskLength?: string; 
  public get ipv6MaskLength() {
    return this.getStringAttribute('ipv6_mask_length');
  }
  public set ipv6MaskLength(value: string) {
    this._ipv6MaskLength = value;
  }
  public resetIpv6MaskLength() {
    this._ipv6MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskLengthInput() {
    return this._ipv6MaskLength;
  }

  // ipv6_network_mask - computed: false, optional: true, required: false
  private _ipv6NetworkMask?: string; 
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }
  public set ipv6NetworkMask(value: string) {
    this._ipv6NetworkMask = value;
  }
  public resetIpv6NetworkMask() {
    this._ipv6NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkMaskInput() {
    return this._ipv6NetworkMask;
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

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // topology_settings - computed: false, optional: true, required: false
  private _topologySettings = new ManagementInteroperableDeviceInterfacesTopologySettingsOutputReference(this, "topology_settings");
  public get topologySettings() {
    return this._topologySettings;
  }
  public putTopologySettings(value: ManagementInteroperableDeviceInterfacesTopologySettings) {
    this._topologySettings.internalValue = value;
  }
  public resetTopologySettings() {
    this._topologySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySettingsInput() {
    return this._topologySettings.internalValue;
  }
}

export class ManagementInteroperableDeviceInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementInteroperableDeviceInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementInteroperableDeviceInterfacesOutputReference {
    return new ManagementInteroperableDeviceInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device checkpoint_management_interoperable_device}
*/
export class ManagementInteroperableDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_interoperable_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementInteroperableDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementInteroperableDevice to import
  * @param importFromId The id of the existing ManagementInteroperableDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementInteroperableDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_interoperable_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_interoperable_device checkpoint_management_interoperable_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementInteroperableDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementInteroperableDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_interoperable_device',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._domainsToProcess = config.domainsToProcess;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._name = config.name;
    this._tags = config.tags;
    this._vpnSettings = config.vpnSettings;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // domains_to_process - computed: false, optional: true, required: false
  private _domainsToProcess?: string[]; 
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }
  public set domainsToProcess(value: string[]) {
    this._domainsToProcess = value;
  }
  public resetDomainsToProcess() {
    this._domainsToProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsToProcessInput() {
    return this._domainsToProcess;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new ManagementInteroperableDeviceGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // vpn_settings - computed: false, optional: true, required: false
  private _vpnSettings?: { [key: string]: string }; 
  public get vpnSettings() {
    return this.getStringMapAttribute('vpn_settings');
  }
  public set vpnSettings(value: { [key: string]: string }) {
    this._vpnSettings = value;
  }
  public resetVpnSettings() {
    this._vpnSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnSettingsInput() {
    return this._vpnSettings;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ManagementInteroperableDeviceInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementInteroperableDeviceInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      domains_to_process: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainsToProcess),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vpn_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._vpnSettings),
      interfaces: cdktf.listMapper(managementInteroperableDeviceInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains_to_process: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainsToProcess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpn_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vpnSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      interfaces: {
        value: cdktf.listMapperHcl(managementInteroperableDeviceInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementInteroperableDeviceInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
