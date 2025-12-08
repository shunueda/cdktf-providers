// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#deploy InterfaceVlan#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * interfaces to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#interfaces InterfaceVlan#interfaces}
  */
  readonly interfaces: { [key: string]: InterfaceVlanInterfaces } | cdktf.IResolvable;
  /**
  * Name of the policy. Examples: `int_vlan`, `int_freeform`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#policy InterfaceVlan#policy}
  */
  readonly policy?: string;
  /**
  * Serial number of switch to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#serial_number InterfaceVlan#serial_number}
  */
  readonly serialNumber?: string;
}
export interface InterfaceVlanInterfaces {
  /**
  * Enable or disable the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#admin_state InterfaceVlan#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Advertise subnet in underlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#advertise_subnet_in_underlay InterfaceVlan#advertise_subnet_in_underlay}
  */
  readonly advertiseSubnetInUnderlay?: boolean | cdktf.IResolvable;
  /**
  * DHCP server address 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#dhcp_server_addr1 InterfaceVlan#dhcp_server_addr1}
  */
  readonly dhcpServerAddr1?: string;
  /**
  * DHCP server address 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#dhcp_server_addr2 InterfaceVlan#dhcp_server_addr2}
  */
  readonly dhcpServerAddr2?: string;
  /**
  * DHCP server address 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#dhcp_server_addr3 InterfaceVlan#dhcp_server_addr3}
  */
  readonly dhcpServerAddr3?: string;
  /**
  * Disable IP redirects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#disable_ip_redirects InterfaceVlan#disable_ip_redirects}
  */
  readonly disableIpRedirects?: boolean | cdktf.IResolvable;
  /**
  * Enable HSRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#enable_hsrp InterfaceVlan#enable_hsrp}
  */
  readonly enableHsrp?: boolean | cdktf.IResolvable;
  /**
  * Additional CLI for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#freeform_config InterfaceVlan#freeform_config}
  */
  readonly freeformConfig?: string;
  /**
  * HSRP group number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#hsrp_group InterfaceVlan#hsrp_group}
  */
  readonly hsrpGroup?: number;
  /**
  * HSRP priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#hsrp_priority InterfaceVlan#hsrp_priority}
  */
  readonly hsrpPriority?: number;
  /**
  * HSRP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#hsrp_version InterfaceVlan#hsrp_version}
  */
  readonly hsrpVersion?: string;
  /**
  * HSRP virtual IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#hsrp_vip InterfaceVlan#hsrp_vip}
  */
  readonly hsrpVip?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#interface_description InterfaceVlan#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Name of the Interface. Example: `Vlan1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#interface_name InterfaceVlan#interface_name}
  */
  readonly interfaceName: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#ipv4_address InterfaceVlan#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Prefix length for the IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#ipv4_prefix_length InterfaceVlan#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: string;
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#mac InterfaceVlan#mac}
  */
  readonly mac?: string;
  /**
  * MTU for the interface - range 68-9216
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#mtu InterfaceVlan#mtu}
  */
  readonly mtu?: string;
  /**
  * Netflow is supported only if it is enabled on fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#netflow InterfaceVlan#netflow}
  */
  readonly netflow?: boolean | cdktf.IResolvable;
  /**
  * Provide the Layer 2 Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#netflow_monitor InterfaceVlan#netflow_monitor}
  */
  readonly netflowMonitor?: string;
  /**
  * Netflow sampler name, applicable to N7K only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#netflow_sampler InterfaceVlan#netflow_sampler}
  */
  readonly netflowSampler?: string;
  /**
  * Enable HSRP preempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#preempt InterfaceVlan#preempt}
  */
  readonly preempt?: boolean | cdktf.IResolvable;
  /**
  * Routing tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#routing_tag InterfaceVlan#routing_tag}
  */
  readonly routingTag?: string;
  /**
  * Serial number of switch to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#serial_number InterfaceVlan#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#vrf InterfaceVlan#vrf}
  */
  readonly vrf?: string;
  /**
  * VRF for DHCP server 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#vrf_dhcp1 InterfaceVlan#vrf_dhcp1}
  */
  readonly vrfDhcp1?: string;
  /**
  * VRF for DHCP server 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#vrf_dhcp2 InterfaceVlan#vrf_dhcp2}
  */
  readonly vrfDhcp2?: string;
  /**
  * VRF for DHCP server 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#vrf_dhcp3 InterfaceVlan#vrf_dhcp3}
  */
  readonly vrfDhcp3?: string;
}

export function interfaceVlanInterfacesToTerraform(struct?: InterfaceVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.booleanToTerraform(struct!.adminState),
    advertise_subnet_in_underlay: cdktf.booleanToTerraform(struct!.advertiseSubnetInUnderlay),
    dhcp_server_addr1: cdktf.stringToTerraform(struct!.dhcpServerAddr1),
    dhcp_server_addr2: cdktf.stringToTerraform(struct!.dhcpServerAddr2),
    dhcp_server_addr3: cdktf.stringToTerraform(struct!.dhcpServerAddr3),
    disable_ip_redirects: cdktf.booleanToTerraform(struct!.disableIpRedirects),
    enable_hsrp: cdktf.booleanToTerraform(struct!.enableHsrp),
    freeform_config: cdktf.stringToTerraform(struct!.freeformConfig),
    hsrp_group: cdktf.numberToTerraform(struct!.hsrpGroup),
    hsrp_priority: cdktf.numberToTerraform(struct!.hsrpPriority),
    hsrp_version: cdktf.stringToTerraform(struct!.hsrpVersion),
    hsrp_vip: cdktf.stringToTerraform(struct!.hsrpVip),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.stringToTerraform(struct!.ipv4PrefixLength),
    mac: cdktf.stringToTerraform(struct!.mac),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    netflow: cdktf.booleanToTerraform(struct!.netflow),
    netflow_monitor: cdktf.stringToTerraform(struct!.netflowMonitor),
    netflow_sampler: cdktf.stringToTerraform(struct!.netflowSampler),
    preempt: cdktf.booleanToTerraform(struct!.preempt),
    routing_tag: cdktf.stringToTerraform(struct!.routingTag),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    vrf: cdktf.stringToTerraform(struct!.vrf),
    vrf_dhcp1: cdktf.stringToTerraform(struct!.vrfDhcp1),
    vrf_dhcp2: cdktf.stringToTerraform(struct!.vrfDhcp2),
    vrf_dhcp3: cdktf.stringToTerraform(struct!.vrfDhcp3),
  }
}


export function interfaceVlanInterfacesToHclTerraform(struct?: InterfaceVlanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.booleanToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_subnet_in_underlay: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseSubnetInUnderlay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_server_addr1: {
      value: cdktf.stringToHclTerraform(struct!.dhcpServerAddr1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_server_addr2: {
      value: cdktf.stringToHclTerraform(struct!.dhcpServerAddr2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_server_addr3: {
      value: cdktf.stringToHclTerraform(struct!.dhcpServerAddr3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_ip_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.disableIpRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_hsrp: {
      value: cdktf.booleanToHclTerraform(struct!.enableHsrp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    freeform_config: {
      value: cdktf.stringToHclTerraform(struct!.freeformConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsrp_group: {
      value: cdktf.numberToHclTerraform(struct!.hsrpGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hsrp_priority: {
      value: cdktf.numberToHclTerraform(struct!.hsrpPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hsrp_version: {
      value: cdktf.stringToHclTerraform(struct!.hsrpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsrp_vip: {
      value: cdktf.stringToHclTerraform(struct!.hsrpVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow: {
      value: cdktf.booleanToHclTerraform(struct!.netflow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netflow_monitor: {
      value: cdktf.stringToHclTerraform(struct!.netflowMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow_sampler: {
      value: cdktf.stringToHclTerraform(struct!.netflowSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.booleanToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_tag: {
      value: cdktf.stringToHclTerraform(struct!.routingTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_dhcp1: {
      value: cdktf.stringToHclTerraform(struct!.vrfDhcp1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_dhcp2: {
      value: cdktf.stringToHclTerraform(struct!.vrfDhcp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_dhcp3: {
      value: cdktf.stringToHclTerraform(struct!.vrfDhcp3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVlanInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): InterfaceVlanInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._advertiseSubnetInUnderlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseSubnetInUnderlay = this._advertiseSubnetInUnderlay;
    }
    if (this._dhcpServerAddr1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerAddr1 = this._dhcpServerAddr1;
    }
    if (this._dhcpServerAddr2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerAddr2 = this._dhcpServerAddr2;
    }
    if (this._dhcpServerAddr3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServerAddr3 = this._dhcpServerAddr3;
    }
    if (this._disableIpRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIpRedirects = this._disableIpRedirects;
    }
    if (this._enableHsrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHsrp = this._enableHsrp;
    }
    if (this._freeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformConfig = this._freeformConfig;
    }
    if (this._hsrpGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsrpGroup = this._hsrpGroup;
    }
    if (this._hsrpPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsrpPriority = this._hsrpPriority;
    }
    if (this._hsrpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsrpVersion = this._hsrpVersion;
    }
    if (this._hsrpVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsrpVip = this._hsrpVip;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._netflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow;
    }
    if (this._netflowMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowMonitor = this._netflowMonitor;
    }
    if (this._netflowSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowSampler = this._netflowSampler;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._routingTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingTag = this._routingTag;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._vrfDhcp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfDhcp1 = this._vrfDhcp1;
    }
    if (this._vrfDhcp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfDhcp2 = this._vrfDhcp2;
    }
    if (this._vrfDhcp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfDhcp3 = this._vrfDhcp3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVlanInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._advertiseSubnetInUnderlay = undefined;
      this._dhcpServerAddr1 = undefined;
      this._dhcpServerAddr2 = undefined;
      this._dhcpServerAddr3 = undefined;
      this._disableIpRedirects = undefined;
      this._enableHsrp = undefined;
      this._freeformConfig = undefined;
      this._hsrpGroup = undefined;
      this._hsrpPriority = undefined;
      this._hsrpVersion = undefined;
      this._hsrpVip = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._mac = undefined;
      this._mtu = undefined;
      this._netflow = undefined;
      this._netflowMonitor = undefined;
      this._netflowSampler = undefined;
      this._preempt = undefined;
      this._routingTag = undefined;
      this._serialNumber = undefined;
      this._vrf = undefined;
      this._vrfDhcp1 = undefined;
      this._vrfDhcp2 = undefined;
      this._vrfDhcp3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._advertiseSubnetInUnderlay = value.advertiseSubnetInUnderlay;
      this._dhcpServerAddr1 = value.dhcpServerAddr1;
      this._dhcpServerAddr2 = value.dhcpServerAddr2;
      this._dhcpServerAddr3 = value.dhcpServerAddr3;
      this._disableIpRedirects = value.disableIpRedirects;
      this._enableHsrp = value.enableHsrp;
      this._freeformConfig = value.freeformConfig;
      this._hsrpGroup = value.hsrpGroup;
      this._hsrpPriority = value.hsrpPriority;
      this._hsrpVersion = value.hsrpVersion;
      this._hsrpVip = value.hsrpVip;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._mac = value.mac;
      this._mtu = value.mtu;
      this._netflow = value.netflow;
      this._netflowMonitor = value.netflowMonitor;
      this._netflowSampler = value.netflowSampler;
      this._preempt = value.preempt;
      this._routingTag = value.routingTag;
      this._serialNumber = value.serialNumber;
      this._vrf = value.vrf;
      this._vrfDhcp1 = value.vrfDhcp1;
      this._vrfDhcp2 = value.vrfDhcp2;
      this._vrfDhcp3 = value.vrfDhcp3;
    }
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: boolean | cdktf.IResolvable; 
  public get adminState() {
    return this.getBooleanAttribute('admin_state');
  }
  public set adminState(value: boolean | cdktf.IResolvable) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // advertise_subnet_in_underlay - computed: true, optional: true, required: false
  private _advertiseSubnetInUnderlay?: boolean | cdktf.IResolvable; 
  public get advertiseSubnetInUnderlay() {
    return this.getBooleanAttribute('advertise_subnet_in_underlay');
  }
  public set advertiseSubnetInUnderlay(value: boolean | cdktf.IResolvable) {
    this._advertiseSubnetInUnderlay = value;
  }
  public resetAdvertiseSubnetInUnderlay() {
    this._advertiseSubnetInUnderlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseSubnetInUnderlayInput() {
    return this._advertiseSubnetInUnderlay;
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // dhcp_server_addr1 - computed: false, optional: true, required: false
  private _dhcpServerAddr1?: string; 
  public get dhcpServerAddr1() {
    return this.getStringAttribute('dhcp_server_addr1');
  }
  public set dhcpServerAddr1(value: string) {
    this._dhcpServerAddr1 = value;
  }
  public resetDhcpServerAddr1() {
    this._dhcpServerAddr1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAddr1Input() {
    return this._dhcpServerAddr1;
  }

  // dhcp_server_addr2 - computed: false, optional: true, required: false
  private _dhcpServerAddr2?: string; 
  public get dhcpServerAddr2() {
    return this.getStringAttribute('dhcp_server_addr2');
  }
  public set dhcpServerAddr2(value: string) {
    this._dhcpServerAddr2 = value;
  }
  public resetDhcpServerAddr2() {
    this._dhcpServerAddr2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAddr2Input() {
    return this._dhcpServerAddr2;
  }

  // dhcp_server_addr3 - computed: false, optional: true, required: false
  private _dhcpServerAddr3?: string; 
  public get dhcpServerAddr3() {
    return this.getStringAttribute('dhcp_server_addr3');
  }
  public set dhcpServerAddr3(value: string) {
    this._dhcpServerAddr3 = value;
  }
  public resetDhcpServerAddr3() {
    this._dhcpServerAddr3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAddr3Input() {
    return this._dhcpServerAddr3;
  }

  // disable_ip_redirects - computed: true, optional: true, required: false
  private _disableIpRedirects?: boolean | cdktf.IResolvable; 
  public get disableIpRedirects() {
    return this.getBooleanAttribute('disable_ip_redirects');
  }
  public set disableIpRedirects(value: boolean | cdktf.IResolvable) {
    this._disableIpRedirects = value;
  }
  public resetDisableIpRedirects() {
    this._disableIpRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpRedirectsInput() {
    return this._disableIpRedirects;
  }

  // enable_hsrp - computed: true, optional: true, required: false
  private _enableHsrp?: boolean | cdktf.IResolvable; 
  public get enableHsrp() {
    return this.getBooleanAttribute('enable_hsrp');
  }
  public set enableHsrp(value: boolean | cdktf.IResolvable) {
    this._enableHsrp = value;
  }
  public resetEnableHsrp() {
    this._enableHsrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHsrpInput() {
    return this._enableHsrp;
  }

  // freeform_config - computed: false, optional: true, required: false
  private _freeformConfig?: string; 
  public get freeformConfig() {
    return this.getStringAttribute('freeform_config');
  }
  public set freeformConfig(value: string) {
    this._freeformConfig = value;
  }
  public resetFreeformConfig() {
    this._freeformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformConfigInput() {
    return this._freeformConfig;
  }

  // hsrp_group - computed: true, optional: true, required: false
  private _hsrpGroup?: number; 
  public get hsrpGroup() {
    return this.getNumberAttribute('hsrp_group');
  }
  public set hsrpGroup(value: number) {
    this._hsrpGroup = value;
  }
  public resetHsrpGroup() {
    this._hsrpGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpGroupInput() {
    return this._hsrpGroup;
  }

  // hsrp_priority - computed: false, optional: true, required: false
  private _hsrpPriority?: number; 
  public get hsrpPriority() {
    return this.getNumberAttribute('hsrp_priority');
  }
  public set hsrpPriority(value: number) {
    this._hsrpPriority = value;
  }
  public resetHsrpPriority() {
    this._hsrpPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpPriorityInput() {
    return this._hsrpPriority;
  }

  // hsrp_version - computed: true, optional: true, required: false
  private _hsrpVersion?: string; 
  public get hsrpVersion() {
    return this.getStringAttribute('hsrp_version');
  }
  public set hsrpVersion(value: string) {
    this._hsrpVersion = value;
  }
  public resetHsrpVersion() {
    this._hsrpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpVersionInput() {
    return this._hsrpVersion;
  }

  // hsrp_vip - computed: false, optional: true, required: false
  private _hsrpVip?: string; 
  public get hsrpVip() {
    return this.getStringAttribute('hsrp_vip');
  }
  public set hsrpVip(value: string) {
    this._hsrpVip = value;
  }
  public resetHsrpVip() {
    this._hsrpVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpVipInput() {
    return this._hsrpVip;
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
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

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: string; 
  public get ipv4PrefixLength() {
    return this.getStringAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: string) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // netflow - computed: true, optional: true, required: false
  private _netflow?: boolean | cdktf.IResolvable; 
  public get netflow() {
    return this.getBooleanAttribute('netflow');
  }
  public set netflow(value: boolean | cdktf.IResolvable) {
    this._netflow = value;
  }
  public resetNetflow() {
    this._netflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow;
  }

  // netflow_monitor - computed: false, optional: true, required: false
  private _netflowMonitor?: string; 
  public get netflowMonitor() {
    return this.getStringAttribute('netflow_monitor');
  }
  public set netflowMonitor(value: string) {
    this._netflowMonitor = value;
  }
  public resetNetflowMonitor() {
    this._netflowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowMonitorInput() {
    return this._netflowMonitor;
  }

  // netflow_sampler - computed: false, optional: true, required: false
  private _netflowSampler?: string; 
  public get netflowSampler() {
    return this.getStringAttribute('netflow_sampler');
  }
  public set netflowSampler(value: string) {
    this._netflowSampler = value;
  }
  public resetNetflowSampler() {
    this._netflowSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplerInput() {
    return this._netflowSampler;
  }

  // preempt - computed: true, optional: true, required: false
  private _preempt?: boolean | cdktf.IResolvable; 
  public get preempt() {
    return this.getBooleanAttribute('preempt');
  }
  public set preempt(value: boolean | cdktf.IResolvable) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // routing_tag - computed: false, optional: true, required: false
  private _routingTag?: string; 
  public get routingTag() {
    return this.getStringAttribute('routing_tag');
  }
  public set routingTag(value: string) {
    this._routingTag = value;
  }
  public resetRoutingTag() {
    this._routingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTagInput() {
    return this._routingTag;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // vrf - computed: true, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // vrf_dhcp1 - computed: false, optional: true, required: false
  private _vrfDhcp1?: string; 
  public get vrfDhcp1() {
    return this.getStringAttribute('vrf_dhcp1');
  }
  public set vrfDhcp1(value: string) {
    this._vrfDhcp1 = value;
  }
  public resetVrfDhcp1() {
    this._vrfDhcp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDhcp1Input() {
    return this._vrfDhcp1;
  }

  // vrf_dhcp2 - computed: false, optional: true, required: false
  private _vrfDhcp2?: string; 
  public get vrfDhcp2() {
    return this.getStringAttribute('vrf_dhcp2');
  }
  public set vrfDhcp2(value: string) {
    this._vrfDhcp2 = value;
  }
  public resetVrfDhcp2() {
    this._vrfDhcp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDhcp2Input() {
    return this._vrfDhcp2;
  }

  // vrf_dhcp3 - computed: false, optional: true, required: false
  private _vrfDhcp3?: string; 
  public get vrfDhcp3() {
    return this.getStringAttribute('vrf_dhcp3');
  }
  public set vrfDhcp3(value: string) {
    this._vrfDhcp3 = value;
  }
  public resetVrfDhcp3() {
    this._vrfDhcp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDhcp3Input() {
    return this._vrfDhcp3;
  }
}

export class InterfaceVlanInterfacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: InterfaceVlanInterfaces } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): InterfaceVlanInterfacesOutputReference {
    return new InterfaceVlanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan ndfc_interface_vlan}
*/
export class InterfaceVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_interface_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceVlan to import
  * @param importFromId The id of the existing InterfaceVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_interface_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vlan ndfc_interface_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceVlanConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_interface_vlan',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploy = config.deploy;
    this._interfaces.internalValue = config.interfaces;
    this._policy = config.policy;
    this._serialNumber = config.serialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new InterfaceVlanInterfacesMap(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: { [key: string]: InterfaceVlanInterfaces } | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // policy - computed: true, optional: true, required: false
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

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy: cdktf.booleanToTerraform(this._deploy),
      interfaces: cdktf.hashMapper(interfaceVlanInterfacesToTerraform)(this._interfaces.internalValue),
      policy: cdktf.stringToTerraform(this._policy),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces: {
        value: cdktf.hashMapperHcl(interfaceVlanInterfacesToHclTerraform)(this._interfaces.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "InterfaceVlanInterfacesMap",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
