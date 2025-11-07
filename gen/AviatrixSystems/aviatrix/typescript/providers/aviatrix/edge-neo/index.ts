// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeNeoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge CSP account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#account_name EdgeNeo#account_name}
  */
  readonly accountName: string;
  /**
  * Approved learned CIDRs for BGP Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#approved_learned_cidrs EdgeNeo#approved_learned_cidrs}
  */
  readonly approvedLearnedCidrs?: string[];
  /**
  * BGP Hold Time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 12 and 360.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#bgp_hold_time EdgeNeo#bgp_hold_time}
  */
  readonly bgpHoldTime?: number;
  /**
  * BGP route polling time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 10 and 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#bgp_polling_time EdgeNeo#bgp_polling_time}
  */
  readonly bgpPollingTime?: number;
  /**
  * Edge NEO device ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#device_id EdgeNeo#device_id}
  */
  readonly deviceId: string;
  /**
  * DNS profile to be associated with gateway, select an existing template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#dns_profile_name EdgeNeo#dns_profile_name}
  */
  readonly dnsProfileName?: string;
  /**
  * DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#dns_server_ip EdgeNeo#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Enable auto advertise LAN CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_auto_advertise_lan_cidrs EdgeNeo#enable_auto_advertise_lan_cidrs}
  */
  readonly enableAutoAdvertiseLanCidrs?: boolean | cdktf.IResolvable;
  /**
  * Enables Edge Active-Standby Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_edge_active_standby EdgeNeo#enable_edge_active_standby}
  */
  readonly enableEdgeActiveStandby?: boolean | cdktf.IResolvable;
  /**
  * Enables Preemptive Mode for Edge Active-Standby, available only with Active-Standby enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_edge_active_standby_preemptive EdgeNeo#enable_edge_active_standby_preemptive}
  */
  readonly enableEdgeActiveStandbyPreemptive?: boolean | cdktf.IResolvable;
  /**
  * Enable Edge transitive routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_edge_transitive_routing EdgeNeo#enable_edge_transitive_routing}
  */
  readonly enableEdgeTransitiveRouting?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_jumbo_frame EdgeNeo#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable/disable learned CIDR approval for BGP Spoke Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_learned_cidrs_approval EdgeNeo#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Enable management over private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_management_over_private_network EdgeNeo#enable_management_over_private_network}
  */
  readonly enableManagementOverPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Enable preserve as path when advertising manual summary CIDRs on BGP spoke gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_preserve_as_path EdgeNeo#enable_preserve_as_path}
  */
  readonly enablePreserveAsPath?: boolean | cdktf.IResolvable;
  /**
  * Enable Single IP SNAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_single_ip_snat EdgeNeo#enable_single_ip_snat}
  */
  readonly enableSingleIpSnat?: boolean | cdktf.IResolvable;
  /**
  * Edge CSP name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#gw_name EdgeNeo#gw_name}
  */
  readonly gwName: string;
  /**
  * Gateway size (CPU and Memory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#gw_size EdgeNeo#gw_size}
  */
  readonly gwSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#id EdgeNeo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of LAN interface names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#lan_interface_names EdgeNeo#lan_interface_names}
  */
  readonly lanInterfaceNames: string[];
  /**
  * The latitude of the Edge as a Spoke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#latitude EdgeNeo#latitude}
  */
  readonly latitude?: string;
  /**
  * Local AS number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#local_as_number EdgeNeo#local_as_number}
  */
  readonly localAsNumber?: string;
  /**
  * The longitude of the Edge as a Spoke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#longitude EdgeNeo#longitude}
  */
  readonly longitude?: string;
  /**
  * Set of management egress gateway IP/prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#management_egress_ip_prefix_list EdgeNeo#management_egress_ip_prefix_list}
  */
  readonly managementEgressIpPrefixList?: string[];
  /**
  * List of management interface names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#management_interface_names EdgeNeo#management_interface_names}
  */
  readonly managementInterfaceNames: string[];
  /**
  * List of AS numbers to prepend gateway BGP AS_Path field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#prepend_as_path EdgeNeo#prepend_as_path}
  */
  readonly prependAsPath?: string[];
  /**
  * Ethernet interface RX queue size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#rx_queue_size EdgeNeo#rx_queue_size}
  */
  readonly rxQueueSize?: string;
  /**
  * Secondary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#secondary_dns_server_ip EdgeNeo#secondary_dns_server_ip}
  */
  readonly secondaryDnsServerIp?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#site_id EdgeNeo#site_id}
  */
  readonly siteId: string;
  /**
  * Intended CIDR list to be advertised to external BGP router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#spoke_bgp_manual_advertise_cidrs EdgeNeo#spoke_bgp_manual_advertise_cidrs}
  */
  readonly spokeBgpManualAdvertiseCidrs?: string[];
  /**
  * List of WAN interface names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#wan_interface_names EdgeNeo#wan_interface_names}
  */
  readonly wanInterfaceNames: string[];
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#interfaces EdgeNeo#interfaces}
  */
  readonly interfaces: EdgeNeoInterfaces[] | cdktf.IResolvable;
  /**
  * vlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#vlan EdgeNeo#vlan}
  */
  readonly vlan?: EdgeNeoVlan[] | cdktf.IResolvable;
}
export interface EdgeNeoInterfaces {
  /**
  * The rate of data can be moved through the interface, requires an integer value. Unit is in Mb/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#bandwidth EdgeNeo#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Primary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#dns_server_ip EdgeNeo#dns_server_ip}
  */
  readonly dnsServerIp?: string;
  /**
  * Enable DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_dhcp EdgeNeo#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Enable VRRP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#enable_vrrp EdgeNeo#enable_vrrp}
  */
  readonly enableVrrp?: boolean | cdktf.IResolvable;
  /**
  * Gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#gateway_ip EdgeNeo#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Interface static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#ip_address EdgeNeo#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#name EdgeNeo#name}
  */
  readonly name: string;
  /**
  * Secondary DNS server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#secondary_dns_server_ip EdgeNeo#secondary_dns_server_ip}
  */
  readonly secondaryDnsServerIp?: string;
  /**
  * Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#tag EdgeNeo#tag}
  */
  readonly tag?: string;
  /**
  * Interface type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#type EdgeNeo#type}
  */
  readonly type: string;
  /**
  * VRRP virtual IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#vrrp_virtual_ip EdgeNeo#vrrp_virtual_ip}
  */
  readonly vrrpVirtualIp?: string;
  /**
  * WAN interface public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#wan_public_ip EdgeNeo#wan_public_ip}
  */
  readonly wanPublicIp?: string;
}

export function edgeNeoInterfacesToTerraform(struct?: EdgeNeoInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    dns_server_ip: cdktf.stringToTerraform(struct!.dnsServerIp),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    enable_vrrp: cdktf.booleanToTerraform(struct!.enableVrrp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    secondary_dns_server_ip: cdktf.stringToTerraform(struct!.secondaryDnsServerIp),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
    vrrp_virtual_ip: cdktf.stringToTerraform(struct!.vrrpVirtualIp),
    wan_public_ip: cdktf.stringToTerraform(struct!.wanPublicIp),
  }
}


export function edgeNeoInterfacesToHclTerraform(struct?: EdgeNeoInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vrrp: {
      value: cdktf.booleanToHclTerraform(struct!.enableVrrp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    secondary_dns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.secondaryDnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
    vrrp_virtual_ip: {
      value: cdktf.stringToHclTerraform(struct!.vrrpVirtualIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.wanPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeNeoInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeNeoInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._dnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIp = this._dnsServerIp;
    }
    if (this._enableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcp = this._enableDhcp;
    }
    if (this._enableVrrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVrrp = this._enableVrrp;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secondaryDnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDnsServerIp = this._secondaryDnsServerIp;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrrpVirtualIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpVirtualIp = this._vrrpVirtualIp;
    }
    if (this._wanPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanPublicIp = this._wanPublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeNeoInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._dnsServerIp = undefined;
      this._enableDhcp = undefined;
      this._enableVrrp = undefined;
      this._gatewayIp = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._secondaryDnsServerIp = undefined;
      this._tag = undefined;
      this._type = undefined;
      this._vrrpVirtualIp = undefined;
      this._wanPublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._dnsServerIp = value.dnsServerIp;
      this._enableDhcp = value.enableDhcp;
      this._enableVrrp = value.enableVrrp;
      this._gatewayIp = value.gatewayIp;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._secondaryDnsServerIp = value.secondaryDnsServerIp;
      this._tag = value.tag;
      this._type = value.type;
      this._vrrpVirtualIp = value.vrrpVirtualIp;
      this._wanPublicIp = value.wanPublicIp;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // dns_server_ip - computed: false, optional: true, required: false
  private _dnsServerIp?: string; 
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }
  public set dnsServerIp(value: string) {
    this._dnsServerIp = value;
  }
  public resetDnsServerIp() {
    this._dnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpInput() {
    return this._dnsServerIp;
  }

  // enable_dhcp - computed: false, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
  }

  // enable_vrrp - computed: false, optional: true, required: false
  private _enableVrrp?: boolean | cdktf.IResolvable; 
  public get enableVrrp() {
    return this.getBooleanAttribute('enable_vrrp');
  }
  public set enableVrrp(value: boolean | cdktf.IResolvable) {
    this._enableVrrp = value;
  }
  public resetEnableVrrp() {
    this._enableVrrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVrrpInput() {
    return this._enableVrrp;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // secondary_dns_server_ip - computed: false, optional: true, required: false
  private _secondaryDnsServerIp?: string; 
  public get secondaryDnsServerIp() {
    return this.getStringAttribute('secondary_dns_server_ip');
  }
  public set secondaryDnsServerIp(value: string) {
    this._secondaryDnsServerIp = value;
  }
  public resetSecondaryDnsServerIp() {
    this._secondaryDnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsServerIpInput() {
    return this._secondaryDnsServerIp;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // vrrp_virtual_ip - computed: false, optional: true, required: false
  private _vrrpVirtualIp?: string; 
  public get vrrpVirtualIp() {
    return this.getStringAttribute('vrrp_virtual_ip');
  }
  public set vrrpVirtualIp(value: string) {
    this._vrrpVirtualIp = value;
  }
  public resetVrrpVirtualIp() {
    this._vrrpVirtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualIpInput() {
    return this._vrrpVirtualIp;
  }

  // wan_public_ip - computed: false, optional: true, required: false
  private _wanPublicIp?: string; 
  public get wanPublicIp() {
    return this.getStringAttribute('wan_public_ip');
  }
  public set wanPublicIp(value: string) {
    this._wanPublicIp = value;
  }
  public resetWanPublicIp() {
    this._wanPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPublicIpInput() {
    return this._wanPublicIp;
  }
}

export class EdgeNeoInterfacesList extends cdktf.ComplexList {
  public internalValue? : EdgeNeoInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EdgeNeoInterfacesOutputReference {
    return new EdgeNeoInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeNeoVlan {
  /**
  * LAN sub-interface gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#gateway_ip EdgeNeo#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * LAN sub-interface IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#ip_address EdgeNeo#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Parent interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#parent_interface_name EdgeNeo#parent_interface_name}
  */
  readonly parentInterfaceName: string;
  /**
  * LAN sub-interface gateway IP on HA gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#peer_gateway_ip EdgeNeo#peer_gateway_ip}
  */
  readonly peerGatewayIp?: string;
  /**
  * LAN sub-interface IP address on HA gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#peer_ip_address EdgeNeo#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#tag EdgeNeo#tag}
  */
  readonly tag?: string;
  /**
  * VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#vlan_id EdgeNeo#vlan_id}
  */
  readonly vlanId: number;
  /**
  * LAN sub-interface virtual IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#vrrp_virtual_ip EdgeNeo#vrrp_virtual_ip}
  */
  readonly vrrpVirtualIp?: string;
}

export function edgeNeoVlanToTerraform(struct?: EdgeNeoVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    parent_interface_name: cdktf.stringToTerraform(struct!.parentInterfaceName),
    peer_gateway_ip: cdktf.stringToTerraform(struct!.peerGatewayIp),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    tag: cdktf.stringToTerraform(struct!.tag),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vrrp_virtual_ip: cdktf.stringToTerraform(struct!.vrrpVirtualIp),
  }
}


export function edgeNeoVlanToHclTerraform(struct?: EdgeNeoVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.parentInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerGatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrrp_virtual_ip: {
      value: cdktf.stringToHclTerraform(struct!.vrrpVirtualIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeNeoVlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeNeoVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._parentInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentInterfaceName = this._parentInterfaceName;
    }
    if (this._peerGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGatewayIp = this._peerGatewayIp;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vrrpVirtualIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpVirtualIp = this._vrrpVirtualIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeNeoVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayIp = undefined;
      this._ipAddress = undefined;
      this._parentInterfaceName = undefined;
      this._peerGatewayIp = undefined;
      this._peerIpAddress = undefined;
      this._tag = undefined;
      this._vlanId = undefined;
      this._vrrpVirtualIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayIp = value.gatewayIp;
      this._ipAddress = value.ipAddress;
      this._parentInterfaceName = value.parentInterfaceName;
      this._peerGatewayIp = value.peerGatewayIp;
      this._peerIpAddress = value.peerIpAddress;
      this._tag = value.tag;
      this._vlanId = value.vlanId;
      this._vrrpVirtualIp = value.vrrpVirtualIp;
    }
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // parent_interface_name - computed: false, optional: false, required: true
  private _parentInterfaceName?: string; 
  public get parentInterfaceName() {
    return this.getStringAttribute('parent_interface_name');
  }
  public set parentInterfaceName(value: string) {
    this._parentInterfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInterfaceNameInput() {
    return this._parentInterfaceName;
  }

  // peer_gateway_ip - computed: false, optional: true, required: false
  private _peerGatewayIp?: string; 
  public get peerGatewayIp() {
    return this.getStringAttribute('peer_gateway_ip');
  }
  public set peerGatewayIp(value: string) {
    this._peerGatewayIp = value;
  }
  public resetPeerGatewayIp() {
    this._peerGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGatewayIpInput() {
    return this._peerGatewayIp;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrrp_virtual_ip - computed: false, optional: true, required: false
  private _vrrpVirtualIp?: string; 
  public get vrrpVirtualIp() {
    return this.getStringAttribute('vrrp_virtual_ip');
  }
  public set vrrpVirtualIp(value: string) {
    this._vrrpVirtualIp = value;
  }
  public resetVrrpVirtualIp() {
    this._vrrpVirtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualIpInput() {
    return this._vrrpVirtualIp;
  }
}

export class EdgeNeoVlanList extends cdktf.ComplexList {
  public internalValue? : EdgeNeoVlan[] | cdktf.IResolvable

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
  public get(index: number): EdgeNeoVlanOutputReference {
    return new EdgeNeoVlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo aviatrix_edge_neo}
*/
export class EdgeNeo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_neo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeNeo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeNeo to import
  * @param importFromId The id of the existing EdgeNeo that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeNeo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_neo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_neo aviatrix_edge_neo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeNeoConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeNeoConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_neo',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._approvedLearnedCidrs = config.approvedLearnedCidrs;
    this._bgpHoldTime = config.bgpHoldTime;
    this._bgpPollingTime = config.bgpPollingTime;
    this._deviceId = config.deviceId;
    this._dnsProfileName = config.dnsProfileName;
    this._dnsServerIp = config.dnsServerIp;
    this._enableAutoAdvertiseLanCidrs = config.enableAutoAdvertiseLanCidrs;
    this._enableEdgeActiveStandby = config.enableEdgeActiveStandby;
    this._enableEdgeActiveStandbyPreemptive = config.enableEdgeActiveStandbyPreemptive;
    this._enableEdgeTransitiveRouting = config.enableEdgeTransitiveRouting;
    this._enableJumboFrame = config.enableJumboFrame;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._enableManagementOverPrivateNetwork = config.enableManagementOverPrivateNetwork;
    this._enablePreserveAsPath = config.enablePreserveAsPath;
    this._enableSingleIpSnat = config.enableSingleIpSnat;
    this._gwName = config.gwName;
    this._gwSize = config.gwSize;
    this._id = config.id;
    this._lanInterfaceNames = config.lanInterfaceNames;
    this._latitude = config.latitude;
    this._localAsNumber = config.localAsNumber;
    this._longitude = config.longitude;
    this._managementEgressIpPrefixList = config.managementEgressIpPrefixList;
    this._managementInterfaceNames = config.managementInterfaceNames;
    this._prependAsPath = config.prependAsPath;
    this._rxQueueSize = config.rxQueueSize;
    this._secondaryDnsServerIp = config.secondaryDnsServerIp;
    this._siteId = config.siteId;
    this._spokeBgpManualAdvertiseCidrs = config.spokeBgpManualAdvertiseCidrs;
    this._wanInterfaceNames = config.wanInterfaceNames;
    this._interfaces.internalValue = config.interfaces;
    this._vlan.internalValue = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // approved_learned_cidrs - computed: false, optional: true, required: false
  private _approvedLearnedCidrs?: string[]; 
  public get approvedLearnedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('approved_learned_cidrs'));
  }
  public set approvedLearnedCidrs(value: string[]) {
    this._approvedLearnedCidrs = value;
  }
  public resetApprovedLearnedCidrs() {
    this._approvedLearnedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedLearnedCidrsInput() {
    return this._approvedLearnedCidrs;
  }

  // bgp_hold_time - computed: false, optional: true, required: false
  private _bgpHoldTime?: number; 
  public get bgpHoldTime() {
    return this.getNumberAttribute('bgp_hold_time');
  }
  public set bgpHoldTime(value: number) {
    this._bgpHoldTime = value;
  }
  public resetBgpHoldTime() {
    this._bgpHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpHoldTimeInput() {
    return this._bgpHoldTime;
  }

  // bgp_polling_time - computed: false, optional: true, required: false
  private _bgpPollingTime?: number; 
  public get bgpPollingTime() {
    return this.getNumberAttribute('bgp_polling_time');
  }
  public set bgpPollingTime(value: number) {
    this._bgpPollingTime = value;
  }
  public resetBgpPollingTime() {
    this._bgpPollingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPollingTimeInput() {
    return this._bgpPollingTime;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // dns_profile_name - computed: false, optional: true, required: false
  private _dnsProfileName?: string; 
  public get dnsProfileName() {
    return this.getStringAttribute('dns_profile_name');
  }
  public set dnsProfileName(value: string) {
    this._dnsProfileName = value;
  }
  public resetDnsProfileName() {
    this._dnsProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProfileNameInput() {
    return this._dnsProfileName;
  }

  // dns_server_ip - computed: false, optional: true, required: false
  private _dnsServerIp?: string; 
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }
  public set dnsServerIp(value: string) {
    this._dnsServerIp = value;
  }
  public resetDnsServerIp() {
    this._dnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpInput() {
    return this._dnsServerIp;
  }

  // enable_auto_advertise_lan_cidrs - computed: false, optional: true, required: false
  private _enableAutoAdvertiseLanCidrs?: boolean | cdktf.IResolvable; 
  public get enableAutoAdvertiseLanCidrs() {
    return this.getBooleanAttribute('enable_auto_advertise_lan_cidrs');
  }
  public set enableAutoAdvertiseLanCidrs(value: boolean | cdktf.IResolvable) {
    this._enableAutoAdvertiseLanCidrs = value;
  }
  public resetEnableAutoAdvertiseLanCidrs() {
    this._enableAutoAdvertiseLanCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAdvertiseLanCidrsInput() {
    return this._enableAutoAdvertiseLanCidrs;
  }

  // enable_edge_active_standby - computed: false, optional: true, required: false
  private _enableEdgeActiveStandby?: boolean | cdktf.IResolvable; 
  public get enableEdgeActiveStandby() {
    return this.getBooleanAttribute('enable_edge_active_standby');
  }
  public set enableEdgeActiveStandby(value: boolean | cdktf.IResolvable) {
    this._enableEdgeActiveStandby = value;
  }
  public resetEnableEdgeActiveStandby() {
    this._enableEdgeActiveStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeActiveStandbyInput() {
    return this._enableEdgeActiveStandby;
  }

  // enable_edge_active_standby_preemptive - computed: false, optional: true, required: false
  private _enableEdgeActiveStandbyPreemptive?: boolean | cdktf.IResolvable; 
  public get enableEdgeActiveStandbyPreemptive() {
    return this.getBooleanAttribute('enable_edge_active_standby_preemptive');
  }
  public set enableEdgeActiveStandbyPreemptive(value: boolean | cdktf.IResolvable) {
    this._enableEdgeActiveStandbyPreemptive = value;
  }
  public resetEnableEdgeActiveStandbyPreemptive() {
    this._enableEdgeActiveStandbyPreemptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeActiveStandbyPreemptiveInput() {
    return this._enableEdgeActiveStandbyPreemptive;
  }

  // enable_edge_transitive_routing - computed: false, optional: true, required: false
  private _enableEdgeTransitiveRouting?: boolean | cdktf.IResolvable; 
  public get enableEdgeTransitiveRouting() {
    return this.getBooleanAttribute('enable_edge_transitive_routing');
  }
  public set enableEdgeTransitiveRouting(value: boolean | cdktf.IResolvable) {
    this._enableEdgeTransitiveRouting = value;
  }
  public resetEnableEdgeTransitiveRouting() {
    this._enableEdgeTransitiveRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeTransitiveRoutingInput() {
    return this._enableEdgeTransitiveRouting;
  }

  // enable_jumbo_frame - computed: false, optional: true, required: false
  private _enableJumboFrame?: boolean | cdktf.IResolvable; 
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }
  public set enableJumboFrame(value: boolean | cdktf.IResolvable) {
    this._enableJumboFrame = value;
  }
  public resetEnableJumboFrame() {
    this._enableJumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJumboFrameInput() {
    return this._enableJumboFrame;
  }

  // enable_learned_cidrs_approval - computed: false, optional: true, required: false
  private _enableLearnedCidrsApproval?: boolean | cdktf.IResolvable; 
  public get enableLearnedCidrsApproval() {
    return this.getBooleanAttribute('enable_learned_cidrs_approval');
  }
  public set enableLearnedCidrsApproval(value: boolean | cdktf.IResolvable) {
    this._enableLearnedCidrsApproval = value;
  }
  public resetEnableLearnedCidrsApproval() {
    this._enableLearnedCidrsApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnedCidrsApprovalInput() {
    return this._enableLearnedCidrsApproval;
  }

  // enable_management_over_private_network - computed: false, optional: true, required: false
  private _enableManagementOverPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get enableManagementOverPrivateNetwork() {
    return this.getBooleanAttribute('enable_management_over_private_network');
  }
  public set enableManagementOverPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._enableManagementOverPrivateNetwork = value;
  }
  public resetEnableManagementOverPrivateNetwork() {
    this._enableManagementOverPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableManagementOverPrivateNetworkInput() {
    return this._enableManagementOverPrivateNetwork;
  }

  // enable_preserve_as_path - computed: false, optional: true, required: false
  private _enablePreserveAsPath?: boolean | cdktf.IResolvable; 
  public get enablePreserveAsPath() {
    return this.getBooleanAttribute('enable_preserve_as_path');
  }
  public set enablePreserveAsPath(value: boolean | cdktf.IResolvable) {
    this._enablePreserveAsPath = value;
  }
  public resetEnablePreserveAsPath() {
    this._enablePreserveAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreserveAsPathInput() {
    return this._enablePreserveAsPath;
  }

  // enable_single_ip_snat - computed: false, optional: true, required: false
  private _enableSingleIpSnat?: boolean | cdktf.IResolvable; 
  public get enableSingleIpSnat() {
    return this.getBooleanAttribute('enable_single_ip_snat');
  }
  public set enableSingleIpSnat(value: boolean | cdktf.IResolvable) {
    this._enableSingleIpSnat = value;
  }
  public resetEnableSingleIpSnat() {
    this._enableSingleIpSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleIpSnatInput() {
    return this._enableSingleIpSnat;
  }

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
  }

  // gw_size - computed: false, optional: false, required: true
  private _gwSize?: string; 
  public get gwSize() {
    return this.getStringAttribute('gw_size');
  }
  public set gwSize(value: string) {
    this._gwSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwSizeInput() {
    return this._gwSize;
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

  // lan_interface_names - computed: false, optional: false, required: true
  private _lanInterfaceNames?: string[]; 
  public get lanInterfaceNames() {
    return this.getListAttribute('lan_interface_names');
  }
  public set lanInterfaceNames(value: string[]) {
    this._lanInterfaceNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInterfaceNamesInput() {
    return this._lanInterfaceNames;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // local_as_number - computed: true, optional: true, required: false
  private _localAsNumber?: string; 
  public get localAsNumber() {
    return this.getStringAttribute('local_as_number');
  }
  public set localAsNumber(value: string) {
    this._localAsNumber = value;
  }
  public resetLocalAsNumber() {
    this._localAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNumberInput() {
    return this._localAsNumber;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // management_egress_ip_prefix_list - computed: false, optional: true, required: false
  private _managementEgressIpPrefixList?: string[]; 
  public get managementEgressIpPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('management_egress_ip_prefix_list'));
  }
  public set managementEgressIpPrefixList(value: string[]) {
    this._managementEgressIpPrefixList = value;
  }
  public resetManagementEgressIpPrefixList() {
    this._managementEgressIpPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEgressIpPrefixListInput() {
    return this._managementEgressIpPrefixList;
  }

  // management_interface_names - computed: false, optional: false, required: true
  private _managementInterfaceNames?: string[]; 
  public get managementInterfaceNames() {
    return this.getListAttribute('management_interface_names');
  }
  public set managementInterfaceNames(value: string[]) {
    this._managementInterfaceNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInterfaceNamesInput() {
    return this._managementInterfaceNames;
  }

  // prepend_as_path - computed: false, optional: true, required: false
  private _prependAsPath?: string[]; 
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }
  public set prependAsPath(value: string[]) {
    this._prependAsPath = value;
  }
  public resetPrependAsPath() {
    this._prependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPathInput() {
    return this._prependAsPath;
  }

  // rx_queue_size - computed: false, optional: true, required: false
  private _rxQueueSize?: string; 
  public get rxQueueSize() {
    return this.getStringAttribute('rx_queue_size');
  }
  public set rxQueueSize(value: string) {
    this._rxQueueSize = value;
  }
  public resetRxQueueSize() {
    this._rxQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxQueueSizeInput() {
    return this._rxQueueSize;
  }

  // secondary_dns_server_ip - computed: false, optional: true, required: false
  private _secondaryDnsServerIp?: string; 
  public get secondaryDnsServerIp() {
    return this.getStringAttribute('secondary_dns_server_ip');
  }
  public set secondaryDnsServerIp(value: string) {
    this._secondaryDnsServerIp = value;
  }
  public resetSecondaryDnsServerIp() {
    this._secondaryDnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDnsServerIpInput() {
    return this._secondaryDnsServerIp;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // spoke_bgp_manual_advertise_cidrs - computed: false, optional: true, required: false
  private _spokeBgpManualAdvertiseCidrs?: string[]; 
  public get spokeBgpManualAdvertiseCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('spoke_bgp_manual_advertise_cidrs'));
  }
  public set spokeBgpManualAdvertiseCidrs(value: string[]) {
    this._spokeBgpManualAdvertiseCidrs = value;
  }
  public resetSpokeBgpManualAdvertiseCidrs() {
    this._spokeBgpManualAdvertiseCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeBgpManualAdvertiseCidrsInput() {
    return this._spokeBgpManualAdvertiseCidrs;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // wan_interface_names - computed: false, optional: false, required: true
  private _wanInterfaceNames?: string[]; 
  public get wanInterfaceNames() {
    return this.getListAttribute('wan_interface_names');
  }
  public set wanInterfaceNames(value: string[]) {
    this._wanInterfaceNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInterfaceNamesInput() {
    return this._wanInterfaceNames;
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new EdgeNeoInterfacesList(this, "interfaces", true);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: EdgeNeoInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new EdgeNeoVlanList(this, "vlan", true);
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: EdgeNeoVlan[] | cdktf.IResolvable) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      approved_learned_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvedLearnedCidrs),
      bgp_hold_time: cdktf.numberToTerraform(this._bgpHoldTime),
      bgp_polling_time: cdktf.numberToTerraform(this._bgpPollingTime),
      device_id: cdktf.stringToTerraform(this._deviceId),
      dns_profile_name: cdktf.stringToTerraform(this._dnsProfileName),
      dns_server_ip: cdktf.stringToTerraform(this._dnsServerIp),
      enable_auto_advertise_lan_cidrs: cdktf.booleanToTerraform(this._enableAutoAdvertiseLanCidrs),
      enable_edge_active_standby: cdktf.booleanToTerraform(this._enableEdgeActiveStandby),
      enable_edge_active_standby_preemptive: cdktf.booleanToTerraform(this._enableEdgeActiveStandbyPreemptive),
      enable_edge_transitive_routing: cdktf.booleanToTerraform(this._enableEdgeTransitiveRouting),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      enable_management_over_private_network: cdktf.booleanToTerraform(this._enableManagementOverPrivateNetwork),
      enable_preserve_as_path: cdktf.booleanToTerraform(this._enablePreserveAsPath),
      enable_single_ip_snat: cdktf.booleanToTerraform(this._enableSingleIpSnat),
      gw_name: cdktf.stringToTerraform(this._gwName),
      gw_size: cdktf.stringToTerraform(this._gwSize),
      id: cdktf.stringToTerraform(this._id),
      lan_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lanInterfaceNames),
      latitude: cdktf.stringToTerraform(this._latitude),
      local_as_number: cdktf.stringToTerraform(this._localAsNumber),
      longitude: cdktf.stringToTerraform(this._longitude),
      management_egress_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementEgressIpPrefixList),
      management_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementInterfaceNames),
      prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath),
      rx_queue_size: cdktf.stringToTerraform(this._rxQueueSize),
      secondary_dns_server_ip: cdktf.stringToTerraform(this._secondaryDnsServerIp),
      site_id: cdktf.stringToTerraform(this._siteId),
      spoke_bgp_manual_advertise_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spokeBgpManualAdvertiseCidrs),
      wan_interface_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wanInterfaceNames),
      interfaces: cdktf.listMapper(edgeNeoInterfacesToTerraform, true)(this._interfaces.internalValue),
      vlan: cdktf.listMapper(edgeNeoVlanToTerraform, true)(this._vlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approved_learned_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvedLearnedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bgp_hold_time: {
        value: cdktf.numberToHclTerraform(this._bgpHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_polling_time: {
        value: cdktf.numberToHclTerraform(this._bgpPollingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_profile_name: {
        value: cdktf.stringToHclTerraform(this._dnsProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._dnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_advertise_lan_cidrs: {
        value: cdktf.booleanToHclTerraform(this._enableAutoAdvertiseLanCidrs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_edge_active_standby: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeActiveStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_edge_active_standby_preemptive: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeActiveStandbyPreemptive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_edge_transitive_routing: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeTransitiveRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._enableJumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_learned_cidrs_approval: {
        value: cdktf.booleanToHclTerraform(this._enableLearnedCidrsApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_management_over_private_network: {
        value: cdktf.booleanToHclTerraform(this._enableManagementOverPrivateNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_preserve_as_path: {
        value: cdktf.booleanToHclTerraform(this._enablePreserveAsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_single_ip_snat: {
        value: cdktf.booleanToHclTerraform(this._enableSingleIpSnat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_size: {
        value: cdktf.stringToHclTerraform(this._gwSize),
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
      lan_interface_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lanInterfaceNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      latitude: {
        value: cdktf.stringToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as_number: {
        value: cdktf.stringToHclTerraform(this._localAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude: {
        value: cdktf.stringToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_egress_ip_prefix_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementEgressIpPrefixList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      management_interface_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementInterfaceNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rx_queue_size: {
        value: cdktf.stringToHclTerraform(this._rxQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._secondaryDnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_bgp_manual_advertise_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spokeBgpManualAdvertiseCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wan_interface_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wanInterfaceNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(edgeNeoInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeNeoInterfacesList",
      },
      vlan: {
        value: cdktf.listMapperHcl(edgeNeoVlanToHclTerraform, true)(this._vlan.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeNeoVlanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
