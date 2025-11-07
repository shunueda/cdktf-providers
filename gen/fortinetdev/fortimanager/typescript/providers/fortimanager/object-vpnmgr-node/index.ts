// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnmgrNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#add_route ObjectVpnmgrNode#add_route}
  */
  readonly addRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#adom ObjectVpnmgrNode#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#assign_ip ObjectVpnmgrNode#assign_ip}
  */
  readonly assignIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#assign_ip_from ObjectVpnmgrNode#assign_ip_from}
  */
  readonly assignIpFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#authpasswd ObjectVpnmgrNode#authpasswd}
  */
  readonly authpasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#authusr ObjectVpnmgrNode#authusr}
  */
  readonly authusr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#authusrgrp ObjectVpnmgrNode#authusrgrp}
  */
  readonly authusrgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#auto_configuration ObjectVpnmgrNode#auto_configuration}
  */
  readonly autoConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#auto_discovery_receiver ObjectVpnmgrNode#auto_discovery_receiver}
  */
  readonly autoDiscoveryReceiver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#auto_discovery_sender ObjectVpnmgrNode#auto_discovery_sender}
  */
  readonly autoDiscoverySender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#automatic_routing ObjectVpnmgrNode#automatic_routing}
  */
  readonly automaticRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#banner ObjectVpnmgrNode#banner}
  */
  readonly banner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#default_gateway ObjectVpnmgrNode#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#dhcp_ra_giaddr ObjectVpnmgrNode#dhcp_ra_giaddr}
  */
  readonly dhcpRaGiaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#dhcp_server ObjectVpnmgrNode#dhcp_server}
  */
  readonly dhcpServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#dns_mode ObjectVpnmgrNode#dns_mode}
  */
  readonly dnsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#dns_service ObjectVpnmgrNode#dns_service}
  */
  readonly dnsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#domain ObjectVpnmgrNode#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#dynamic_sort_subtable ObjectVpnmgrNode#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#encapsulation ObjectVpnmgrNode#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#exchange_interface_ip ObjectVpnmgrNode#exchange_interface_ip}
  */
  readonly exchangeInterfaceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#extgw ObjectVpnmgrNode#extgw}
  */
  readonly extgw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#extgw_hubip ObjectVpnmgrNode#extgw_hubip}
  */
  readonly extgwHubip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#extgw_p2_per_net ObjectVpnmgrNode#extgw_p2_per_net}
  */
  readonly extgwP2PerNet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#extgwip ObjectVpnmgrNode#extgwip}
  */
  readonly extgwip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#fosid ObjectVpnmgrNode#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#hub_iface ObjectVpnmgrNode#hub_iface}
  */
  readonly hubIface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#hub_public_ip ObjectVpnmgrNode#hub_public_ip}
  */
  readonly hubPublicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#id ObjectVpnmgrNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#iface ObjectVpnmgrNode#iface}
  */
  readonly iface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipsec_lease_hold ObjectVpnmgrNode#ipsec_lease_hold}
  */
  readonly ipsecLeaseHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_dns_server1 ObjectVpnmgrNode#ipv4_dns_server1}
  */
  readonly ipv4DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_dns_server2 ObjectVpnmgrNode#ipv4_dns_server2}
  */
  readonly ipv4DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_dns_server3 ObjectVpnmgrNode#ipv4_dns_server3}
  */
  readonly ipv4DnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_end_ip ObjectVpnmgrNode#ipv4_end_ip}
  */
  readonly ipv4EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_name ObjectVpnmgrNode#ipv4_name}
  */
  readonly ipv4Name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_netmask ObjectVpnmgrNode#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_split_exclude ObjectVpnmgrNode#ipv4_split_exclude}
  */
  readonly ipv4SplitExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_split_include ObjectVpnmgrNode#ipv4_split_include}
  */
  readonly ipv4SplitInclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_start_ip ObjectVpnmgrNode#ipv4_start_ip}
  */
  readonly ipv4StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_wins_server1 ObjectVpnmgrNode#ipv4_wins_server1}
  */
  readonly ipv4WinsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_wins_server2 ObjectVpnmgrNode#ipv4_wins_server2}
  */
  readonly ipv4WinsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#l2tp ObjectVpnmgrNode#l2tp}
  */
  readonly l2Tp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#local_gw ObjectVpnmgrNode#local_gw}
  */
  readonly localGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#localid ObjectVpnmgrNode#localid}
  */
  readonly localid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#mode_cfg ObjectVpnmgrNode#mode_cfg}
  */
  readonly modeCfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#mode_cfg_ip_version ObjectVpnmgrNode#mode_cfg_ip_version}
  */
  readonly modeCfgIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#net_device ObjectVpnmgrNode#net_device}
  */
  readonly netDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#network_id ObjectVpnmgrNode#network_id}
  */
  readonly networkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#network_overlay ObjectVpnmgrNode#network_overlay}
  */
  readonly networkOverlay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#peer ObjectVpnmgrNode#peer}
  */
  readonly peer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#peergrp ObjectVpnmgrNode#peergrp}
  */
  readonly peergrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#peerid ObjectVpnmgrNode#peerid}
  */
  readonly peerid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#peertype ObjectVpnmgrNode#peertype}
  */
  readonly peertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#protocol ObjectVpnmgrNode#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#public_ip ObjectVpnmgrNode#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#role ObjectVpnmgrNode#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#route_overlap ObjectVpnmgrNode#route_overlap}
  */
  readonly routeOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#scopetype ObjectVpnmgrNode#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#spoke_zone ObjectVpnmgrNode#spoke_zone}
  */
  readonly spokeZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#tunnel_search ObjectVpnmgrNode#tunnel_search}
  */
  readonly tunnelSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#unity_support ObjectVpnmgrNode#unity_support}
  */
  readonly unitySupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#usrgrp ObjectVpnmgrNode#usrgrp}
  */
  readonly usrgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#vpn_interface_priority ObjectVpnmgrNode#vpn_interface_priority}
  */
  readonly vpnInterfacePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#vpn_zone ObjectVpnmgrNode#vpn_zone}
  */
  readonly vpnZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#vpntable ObjectVpnmgrNode#vpntable}
  */
  readonly vpntable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#xauthtype ObjectVpnmgrNode#xauthtype}
  */
  readonly xauthtype?: string;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ip_range ObjectVpnmgrNode#ip_range}
  */
  readonly ipRange?: ObjectVpnmgrNodeIpRange[] | cdktf.IResolvable;
  /**
  * ipv4_exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#ipv4_exclude_range ObjectVpnmgrNode#ipv4_exclude_range}
  */
  readonly ipv4ExcludeRange?: ObjectVpnmgrNodeIpv4ExcludeRange[] | cdktf.IResolvable;
  /**
  * protected_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#protected_subnet ObjectVpnmgrNode#protected_subnet}
  */
  readonly protectedSubnet?: ObjectVpnmgrNodeProtectedSubnet[] | cdktf.IResolvable;
  /**
  * scopemember block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#scopemember ObjectVpnmgrNode#scopemember}
  */
  readonly scopemember?: ObjectVpnmgrNodeScopemember[] | cdktf.IResolvable;
  /**
  * summary_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#summary_addr ObjectVpnmgrNode#summary_addr}
  */
  readonly summaryAddr?: ObjectVpnmgrNodeSummaryAddr[] | cdktf.IResolvable;
}
export interface ObjectVpnmgrNodeIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#end_ip ObjectVpnmgrNode#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#id ObjectVpnmgrNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#start_ip ObjectVpnmgrNode#start_ip}
  */
  readonly startIp?: string;
}

export function objectVpnmgrNodeIpRangeToTerraform(struct?: ObjectVpnmgrNodeIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function objectVpnmgrNodeIpRangeToHclTerraform(struct?: ObjectVpnmgrNodeIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnmgrNodeIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnmgrNodeIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnmgrNodeIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class ObjectVpnmgrNodeIpRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnmgrNodeIpRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnmgrNodeIpRangeOutputReference {
    return new ObjectVpnmgrNodeIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnmgrNodeIpv4ExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#end_ip ObjectVpnmgrNode#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#id ObjectVpnmgrNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#start_ip ObjectVpnmgrNode#start_ip}
  */
  readonly startIp?: string;
}

export function objectVpnmgrNodeIpv4ExcludeRangeToTerraform(struct?: ObjectVpnmgrNodeIpv4ExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function objectVpnmgrNodeIpv4ExcludeRangeToHclTerraform(struct?: ObjectVpnmgrNodeIpv4ExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnmgrNodeIpv4ExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnmgrNodeIpv4ExcludeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnmgrNodeIpv4ExcludeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class ObjectVpnmgrNodeIpv4ExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnmgrNodeIpv4ExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnmgrNodeIpv4ExcludeRangeOutputReference {
    return new ObjectVpnmgrNodeIpv4ExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnmgrNodeProtectedSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#addr ObjectVpnmgrNode#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#seq ObjectVpnmgrNode#seq}
  */
  readonly seq?: number;
}

export function objectVpnmgrNodeProtectedSubnetToTerraform(struct?: ObjectVpnmgrNodeProtectedSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function objectVpnmgrNodeProtectedSubnetToHclTerraform(struct?: ObjectVpnmgrNodeProtectedSubnet | cdktf.IResolvable): any {
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
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnmgrNodeProtectedSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnmgrNodeProtectedSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnmgrNodeProtectedSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._seq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._seq = value.seq;
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

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class ObjectVpnmgrNodeProtectedSubnetList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnmgrNodeProtectedSubnet[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnmgrNodeProtectedSubnetOutputReference {
    return new ObjectVpnmgrNodeProtectedSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnmgrNodeScopemember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#name ObjectVpnmgrNode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#vdom ObjectVpnmgrNode#vdom}
  */
  readonly vdom?: string;
}

export function objectVpnmgrNodeScopememberToTerraform(struct?: ObjectVpnmgrNodeScopemember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectVpnmgrNodeScopememberToHclTerraform(struct?: ObjectVpnmgrNodeScopemember | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnmgrNodeScopememberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnmgrNodeScopemember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnmgrNodeScopemember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectVpnmgrNodeScopememberList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnmgrNodeScopemember[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnmgrNodeScopememberOutputReference {
    return new ObjectVpnmgrNodeScopememberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectVpnmgrNodeSummaryAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#addr ObjectVpnmgrNode#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#priority ObjectVpnmgrNode#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#seq ObjectVpnmgrNode#seq}
  */
  readonly seq?: number;
}

export function objectVpnmgrNodeSummaryAddrToTerraform(struct?: ObjectVpnmgrNodeSummaryAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    priority: cdktf.numberToTerraform(struct!.priority),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function objectVpnmgrNodeSummaryAddrToHclTerraform(struct?: ObjectVpnmgrNodeSummaryAddr | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnmgrNodeSummaryAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectVpnmgrNodeSummaryAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnmgrNodeSummaryAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._priority = undefined;
      this._seq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._priority = value.priority;
      this._seq = value.seq;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class ObjectVpnmgrNodeSummaryAddrList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnmgrNodeSummaryAddr[] | cdktf.IResolvable

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
  public get(index: number): ObjectVpnmgrNodeSummaryAddrOutputReference {
    return new ObjectVpnmgrNodeSummaryAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node fortimanager_object_vpnmgr_node}
*/
export class ObjectVpnmgrNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpnmgr_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnmgrNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnmgrNode to import
  * @param importFromId The id of the existing ObjectVpnmgrNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnmgrNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpnmgr_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpnmgr_node fortimanager_object_vpnmgr_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnmgrNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnmgrNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpnmgr_node',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addRoute = config.addRoute;
    this._adom = config.adom;
    this._assignIp = config.assignIp;
    this._assignIpFrom = config.assignIpFrom;
    this._authpasswd = config.authpasswd;
    this._authusr = config.authusr;
    this._authusrgrp = config.authusrgrp;
    this._autoConfiguration = config.autoConfiguration;
    this._autoDiscoveryReceiver = config.autoDiscoveryReceiver;
    this._autoDiscoverySender = config.autoDiscoverySender;
    this._automaticRouting = config.automaticRouting;
    this._banner = config.banner;
    this._defaultGateway = config.defaultGateway;
    this._dhcpRaGiaddr = config.dhcpRaGiaddr;
    this._dhcpServer = config.dhcpServer;
    this._dnsMode = config.dnsMode;
    this._dnsService = config.dnsService;
    this._domain = config.domain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encapsulation = config.encapsulation;
    this._exchangeInterfaceIp = config.exchangeInterfaceIp;
    this._extgw = config.extgw;
    this._extgwHubip = config.extgwHubip;
    this._extgwP2PerNet = config.extgwP2PerNet;
    this._extgwip = config.extgwip;
    this._fosid = config.fosid;
    this._hubIface = config.hubIface;
    this._hubPublicIp = config.hubPublicIp;
    this._id = config.id;
    this._iface = config.iface;
    this._ipsecLeaseHold = config.ipsecLeaseHold;
    this._ipv4DnsServer1 = config.ipv4DnsServer1;
    this._ipv4DnsServer2 = config.ipv4DnsServer2;
    this._ipv4DnsServer3 = config.ipv4DnsServer3;
    this._ipv4EndIp = config.ipv4EndIp;
    this._ipv4Name = config.ipv4Name;
    this._ipv4Netmask = config.ipv4Netmask;
    this._ipv4SplitExclude = config.ipv4SplitExclude;
    this._ipv4SplitInclude = config.ipv4SplitInclude;
    this._ipv4StartIp = config.ipv4StartIp;
    this._ipv4WinsServer1 = config.ipv4WinsServer1;
    this._ipv4WinsServer2 = config.ipv4WinsServer2;
    this._l2Tp = config.l2Tp;
    this._localGw = config.localGw;
    this._localid = config.localid;
    this._modeCfg = config.modeCfg;
    this._modeCfgIpVersion = config.modeCfgIpVersion;
    this._netDevice = config.netDevice;
    this._networkId = config.networkId;
    this._networkOverlay = config.networkOverlay;
    this._peer = config.peer;
    this._peergrp = config.peergrp;
    this._peerid = config.peerid;
    this._peertype = config.peertype;
    this._protocol = config.protocol;
    this._publicIp = config.publicIp;
    this._role = config.role;
    this._routeOverlap = config.routeOverlap;
    this._scopetype = config.scopetype;
    this._spokeZone = config.spokeZone;
    this._tunnelSearch = config.tunnelSearch;
    this._unitySupport = config.unitySupport;
    this._usrgrp = config.usrgrp;
    this._vpnInterfacePriority = config.vpnInterfacePriority;
    this._vpnZone = config.vpnZone;
    this._vpntable = config.vpntable;
    this._xauthtype = config.xauthtype;
    this._ipRange.internalValue = config.ipRange;
    this._ipv4ExcludeRange.internalValue = config.ipv4ExcludeRange;
    this._protectedSubnet.internalValue = config.protectedSubnet;
    this._scopemember.internalValue = config.scopemember;
    this._summaryAddr.internalValue = config.summaryAddr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_route - computed: true, optional: true, required: false
  private _addRoute?: string; 
  public get addRoute() {
    return this.getStringAttribute('add_route');
  }
  public set addRoute(value: string) {
    this._addRoute = value;
  }
  public resetAddRoute() {
    this._addRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRouteInput() {
    return this._addRoute;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // assign_ip - computed: true, optional: true, required: false
  private _assignIp?: string; 
  public get assignIp() {
    return this.getStringAttribute('assign_ip');
  }
  public set assignIp(value: string) {
    this._assignIp = value;
  }
  public resetAssignIp() {
    this._assignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpInput() {
    return this._assignIp;
  }

  // assign_ip_from - computed: true, optional: true, required: false
  private _assignIpFrom?: string; 
  public get assignIpFrom() {
    return this.getStringAttribute('assign_ip_from');
  }
  public set assignIpFrom(value: string) {
    this._assignIpFrom = value;
  }
  public resetAssignIpFrom() {
    this._assignIpFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpFromInput() {
    return this._assignIpFrom;
  }

  // authpasswd - computed: true, optional: true, required: false
  private _authpasswd?: string[]; 
  public get authpasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('authpasswd'));
  }
  public set authpasswd(value: string[]) {
    this._authpasswd = value;
  }
  public resetAuthpasswd() {
    this._authpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authpasswdInput() {
    return this._authpasswd;
  }

  // authusr - computed: false, optional: true, required: false
  private _authusr?: string; 
  public get authusr() {
    return this.getStringAttribute('authusr');
  }
  public set authusr(value: string) {
    this._authusr = value;
  }
  public resetAuthusr() {
    this._authusr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authusrInput() {
    return this._authusr;
  }

  // authusrgrp - computed: false, optional: true, required: false
  private _authusrgrp?: string; 
  public get authusrgrp() {
    return this.getStringAttribute('authusrgrp');
  }
  public set authusrgrp(value: string) {
    this._authusrgrp = value;
  }
  public resetAuthusrgrp() {
    this._authusrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authusrgrpInput() {
    return this._authusrgrp;
  }

  // auto_configuration - computed: true, optional: true, required: false
  private _autoConfiguration?: string; 
  public get autoConfiguration() {
    return this.getStringAttribute('auto_configuration');
  }
  public set autoConfiguration(value: string) {
    this._autoConfiguration = value;
  }
  public resetAutoConfiguration() {
    this._autoConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigurationInput() {
    return this._autoConfiguration;
  }

  // auto_discovery_receiver - computed: true, optional: true, required: false
  private _autoDiscoveryReceiver?: string; 
  public get autoDiscoveryReceiver() {
    return this.getStringAttribute('auto_discovery_receiver');
  }
  public set autoDiscoveryReceiver(value: string) {
    this._autoDiscoveryReceiver = value;
  }
  public resetAutoDiscoveryReceiver() {
    this._autoDiscoveryReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryReceiverInput() {
    return this._autoDiscoveryReceiver;
  }

  // auto_discovery_sender - computed: true, optional: true, required: false
  private _autoDiscoverySender?: string; 
  public get autoDiscoverySender() {
    return this.getStringAttribute('auto_discovery_sender');
  }
  public set autoDiscoverySender(value: string) {
    this._autoDiscoverySender = value;
  }
  public resetAutoDiscoverySender() {
    this._autoDiscoverySender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoverySenderInput() {
    return this._autoDiscoverySender;
  }

  // automatic_routing - computed: false, optional: true, required: false
  private _automaticRouting?: string; 
  public get automaticRouting() {
    return this.getStringAttribute('automatic_routing');
  }
  public set automaticRouting(value: string) {
    this._automaticRouting = value;
  }
  public resetAutomaticRouting() {
    this._automaticRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRoutingInput() {
    return this._automaticRouting;
  }

  // banner - computed: false, optional: true, required: false
  private _banner?: string; 
  public get banner() {
    return this.getStringAttribute('banner');
  }
  public set banner(value: string) {
    this._banner = value;
  }
  public resetBanner() {
    this._banner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerInput() {
    return this._banner;
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // dhcp_ra_giaddr - computed: true, optional: true, required: false
  private _dhcpRaGiaddr?: string; 
  public get dhcpRaGiaddr() {
    return this.getStringAttribute('dhcp_ra_giaddr');
  }
  public set dhcpRaGiaddr(value: string) {
    this._dhcpRaGiaddr = value;
  }
  public resetDhcpRaGiaddr() {
    this._dhcpRaGiaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRaGiaddrInput() {
    return this._dhcpRaGiaddr;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer?: string; 
  public get dhcpServer() {
    return this.getStringAttribute('dhcp_server');
  }
  public set dhcpServer(value: string) {
    this._dhcpServer = value;
  }
  public resetDhcpServer() {
    this._dhcpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer;
  }

  // dns_mode - computed: true, optional: true, required: false
  private _dnsMode?: string; 
  public get dnsMode() {
    return this.getStringAttribute('dns_mode');
  }
  public set dnsMode(value: string) {
    this._dnsMode = value;
  }
  public resetDnsMode() {
    this._dnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsModeInput() {
    return this._dnsMode;
  }

  // dns_service - computed: true, optional: true, required: false
  private _dnsService?: string; 
  public get dnsService() {
    return this.getStringAttribute('dns_service');
  }
  public set dnsService(value: string) {
    this._dnsService = value;
  }
  public resetDnsService() {
    this._dnsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceInput() {
    return this._dnsService;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // encapsulation - computed: true, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // exchange_interface_ip - computed: true, optional: true, required: false
  private _exchangeInterfaceIp?: string; 
  public get exchangeInterfaceIp() {
    return this.getStringAttribute('exchange_interface_ip');
  }
  public set exchangeInterfaceIp(value: string) {
    this._exchangeInterfaceIp = value;
  }
  public resetExchangeInterfaceIp() {
    this._exchangeInterfaceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeInterfaceIpInput() {
    return this._exchangeInterfaceIp;
  }

  // extgw - computed: false, optional: true, required: false
  private _extgw?: string; 
  public get extgw() {
    return this.getStringAttribute('extgw');
  }
  public set extgw(value: string) {
    this._extgw = value;
  }
  public resetExtgw() {
    this._extgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extgwInput() {
    return this._extgw;
  }

  // extgw_hubip - computed: false, optional: true, required: false
  private _extgwHubip?: string; 
  public get extgwHubip() {
    return this.getStringAttribute('extgw_hubip');
  }
  public set extgwHubip(value: string) {
    this._extgwHubip = value;
  }
  public resetExtgwHubip() {
    this._extgwHubip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extgwHubipInput() {
    return this._extgwHubip;
  }

  // extgw_p2_per_net - computed: false, optional: true, required: false
  private _extgwP2PerNet?: string; 
  public get extgwP2PerNet() {
    return this.getStringAttribute('extgw_p2_per_net');
  }
  public set extgwP2PerNet(value: string) {
    this._extgwP2PerNet = value;
  }
  public resetExtgwP2PerNet() {
    this._extgwP2PerNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extgwP2PerNetInput() {
    return this._extgwP2PerNet;
  }

  // extgwip - computed: false, optional: true, required: false
  private _extgwip?: string; 
  public get extgwip() {
    return this.getStringAttribute('extgwip');
  }
  public set extgwip(value: string) {
    this._extgwip = value;
  }
  public resetExtgwip() {
    this._extgwip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extgwipInput() {
    return this._extgwip;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // hub_iface - computed: true, optional: true, required: false
  private _hubIface?: string[]; 
  public get hubIface() {
    return cdktf.Fn.tolist(this.getListAttribute('hub_iface'));
  }
  public set hubIface(value: string[]) {
    this._hubIface = value;
  }
  public resetHubIface() {
    this._hubIface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubIfaceInput() {
    return this._hubIface;
  }

  // hub_public_ip - computed: false, optional: true, required: false
  private _hubPublicIp?: string; 
  public get hubPublicIp() {
    return this.getStringAttribute('hub_public_ip');
  }
  public set hubPublicIp(value: string) {
    this._hubPublicIp = value;
  }
  public resetHubPublicIp() {
    this._hubPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubPublicIpInput() {
    return this._hubPublicIp;
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

  // iface - computed: true, optional: true, required: false
  private _iface?: string[]; 
  public get iface() {
    return cdktf.Fn.tolist(this.getListAttribute('iface'));
  }
  public set iface(value: string[]) {
    this._iface = value;
  }
  public resetIface() {
    this._iface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }

  // ipsec_lease_hold - computed: true, optional: true, required: false
  private _ipsecLeaseHold?: number; 
  public get ipsecLeaseHold() {
    return this.getNumberAttribute('ipsec_lease_hold');
  }
  public set ipsecLeaseHold(value: number) {
    this._ipsecLeaseHold = value;
  }
  public resetIpsecLeaseHold() {
    this._ipsecLeaseHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLeaseHoldInput() {
    return this._ipsecLeaseHold;
  }

  // ipv4_dns_server1 - computed: true, optional: true, required: false
  private _ipv4DnsServer1?: string; 
  public get ipv4DnsServer1() {
    return this.getStringAttribute('ipv4_dns_server1');
  }
  public set ipv4DnsServer1(value: string) {
    this._ipv4DnsServer1 = value;
  }
  public resetIpv4DnsServer1() {
    this._ipv4DnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServer1Input() {
    return this._ipv4DnsServer1;
  }

  // ipv4_dns_server2 - computed: true, optional: true, required: false
  private _ipv4DnsServer2?: string; 
  public get ipv4DnsServer2() {
    return this.getStringAttribute('ipv4_dns_server2');
  }
  public set ipv4DnsServer2(value: string) {
    this._ipv4DnsServer2 = value;
  }
  public resetIpv4DnsServer2() {
    this._ipv4DnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServer2Input() {
    return this._ipv4DnsServer2;
  }

  // ipv4_dns_server3 - computed: true, optional: true, required: false
  private _ipv4DnsServer3?: string; 
  public get ipv4DnsServer3() {
    return this.getStringAttribute('ipv4_dns_server3');
  }
  public set ipv4DnsServer3(value: string) {
    this._ipv4DnsServer3 = value;
  }
  public resetIpv4DnsServer3() {
    this._ipv4DnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServer3Input() {
    return this._ipv4DnsServer3;
  }

  // ipv4_end_ip - computed: true, optional: true, required: false
  private _ipv4EndIp?: string; 
  public get ipv4EndIp() {
    return this.getStringAttribute('ipv4_end_ip');
  }
  public set ipv4EndIp(value: string) {
    this._ipv4EndIp = value;
  }
  public resetIpv4EndIp() {
    this._ipv4EndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EndIpInput() {
    return this._ipv4EndIp;
  }

  // ipv4_name - computed: false, optional: true, required: false
  private _ipv4Name?: string; 
  public get ipv4Name() {
    return this.getStringAttribute('ipv4_name');
  }
  public set ipv4Name(value: string) {
    this._ipv4Name = value;
  }
  public resetIpv4Name() {
    this._ipv4Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NameInput() {
    return this._ipv4Name;
  }

  // ipv4_netmask - computed: true, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv4_split_exclude - computed: false, optional: true, required: false
  private _ipv4SplitExclude?: string; 
  public get ipv4SplitExclude() {
    return this.getStringAttribute('ipv4_split_exclude');
  }
  public set ipv4SplitExclude(value: string) {
    this._ipv4SplitExclude = value;
  }
  public resetIpv4SplitExclude() {
    this._ipv4SplitExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitExcludeInput() {
    return this._ipv4SplitExclude;
  }

  // ipv4_split_include - computed: false, optional: true, required: false
  private _ipv4SplitInclude?: string; 
  public get ipv4SplitInclude() {
    return this.getStringAttribute('ipv4_split_include');
  }
  public set ipv4SplitInclude(value: string) {
    this._ipv4SplitInclude = value;
  }
  public resetIpv4SplitInclude() {
    this._ipv4SplitInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitIncludeInput() {
    return this._ipv4SplitInclude;
  }

  // ipv4_start_ip - computed: true, optional: true, required: false
  private _ipv4StartIp?: string; 
  public get ipv4StartIp() {
    return this.getStringAttribute('ipv4_start_ip');
  }
  public set ipv4StartIp(value: string) {
    this._ipv4StartIp = value;
  }
  public resetIpv4StartIp() {
    this._ipv4StartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StartIpInput() {
    return this._ipv4StartIp;
  }

  // ipv4_wins_server1 - computed: true, optional: true, required: false
  private _ipv4WinsServer1?: string; 
  public get ipv4WinsServer1() {
    return this.getStringAttribute('ipv4_wins_server1');
  }
  public set ipv4WinsServer1(value: string) {
    this._ipv4WinsServer1 = value;
  }
  public resetIpv4WinsServer1() {
    this._ipv4WinsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4WinsServer1Input() {
    return this._ipv4WinsServer1;
  }

  // ipv4_wins_server2 - computed: true, optional: true, required: false
  private _ipv4WinsServer2?: string; 
  public get ipv4WinsServer2() {
    return this.getStringAttribute('ipv4_wins_server2');
  }
  public set ipv4WinsServer2(value: string) {
    this._ipv4WinsServer2 = value;
  }
  public resetIpv4WinsServer2() {
    this._ipv4WinsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4WinsServer2Input() {
    return this._ipv4WinsServer2;
  }

  // l2tp - computed: true, optional: true, required: false
  private _l2Tp?: string; 
  public get l2Tp() {
    return this.getStringAttribute('l2tp');
  }
  public set l2Tp(value: string) {
    this._l2Tp = value;
  }
  public resetL2Tp() {
    this._l2Tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TpInput() {
    return this._l2Tp;
  }

  // local_gw - computed: true, optional: true, required: false
  private _localGw?: string; 
  public get localGw() {
    return this.getStringAttribute('local_gw');
  }
  public set localGw(value: string) {
    this._localGw = value;
  }
  public resetLocalGw() {
    this._localGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGwInput() {
    return this._localGw;
  }

  // localid - computed: false, optional: true, required: false
  private _localid?: string; 
  public get localid() {
    return this.getStringAttribute('localid');
  }
  public set localid(value: string) {
    this._localid = value;
  }
  public resetLocalid() {
    this._localid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localidInput() {
    return this._localid;
  }

  // mode_cfg - computed: true, optional: true, required: false
  private _modeCfg?: string; 
  public get modeCfg() {
    return this.getStringAttribute('mode_cfg');
  }
  public set modeCfg(value: string) {
    this._modeCfg = value;
  }
  public resetModeCfg() {
    this._modeCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeCfgInput() {
    return this._modeCfg;
  }

  // mode_cfg_ip_version - computed: false, optional: true, required: false
  private _modeCfgIpVersion?: string; 
  public get modeCfgIpVersion() {
    return this.getStringAttribute('mode_cfg_ip_version');
  }
  public set modeCfgIpVersion(value: string) {
    this._modeCfgIpVersion = value;
  }
  public resetModeCfgIpVersion() {
    this._modeCfgIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeCfgIpVersionInput() {
    return this._modeCfgIpVersion;
  }

  // net_device - computed: true, optional: true, required: false
  private _netDevice?: string; 
  public get netDevice() {
    return this.getStringAttribute('net_device');
  }
  public set netDevice(value: string) {
    this._netDevice = value;
  }
  public resetNetDevice() {
    this._netDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDeviceInput() {
    return this._netDevice;
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_overlay - computed: true, optional: true, required: false
  private _networkOverlay?: string; 
  public get networkOverlay() {
    return this.getStringAttribute('network_overlay');
  }
  public set networkOverlay(value: string) {
    this._networkOverlay = value;
  }
  public resetNetworkOverlay() {
    this._networkOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOverlayInput() {
    return this._networkOverlay;
  }

  // peer - computed: true, optional: true, required: false
  private _peer?: string[]; 
  public get peer() {
    return cdktf.Fn.tolist(this.getListAttribute('peer'));
  }
  public set peer(value: string[]) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // peergrp - computed: false, optional: true, required: false
  private _peergrp?: string; 
  public get peergrp() {
    return this.getStringAttribute('peergrp');
  }
  public set peergrp(value: string) {
    this._peergrp = value;
  }
  public resetPeergrp() {
    this._peergrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peergrpInput() {
    return this._peergrp;
  }

  // peerid - computed: false, optional: true, required: false
  private _peerid?: string; 
  public get peerid() {
    return this.getStringAttribute('peerid');
  }
  public set peerid(value: string) {
    this._peerid = value;
  }
  public resetPeerid() {
    this._peerid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeridInput() {
    return this._peerid;
  }

  // peertype - computed: true, optional: true, required: false
  private _peertype?: string; 
  public get peertype() {
    return this.getStringAttribute('peertype');
  }
  public set peertype(value: string) {
    this._peertype = value;
  }
  public resetPeertype() {
    this._peertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peertypeInput() {
    return this._peertype;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // route_overlap - computed: false, optional: true, required: false
  private _routeOverlap?: string; 
  public get routeOverlap() {
    return this.getStringAttribute('route_overlap');
  }
  public set routeOverlap(value: string) {
    this._routeOverlap = value;
  }
  public resetRouteOverlap() {
    this._routeOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOverlapInput() {
    return this._routeOverlap;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // spoke_zone - computed: true, optional: true, required: false
  private _spokeZone?: string[]; 
  public get spokeZone() {
    return cdktf.Fn.tolist(this.getListAttribute('spoke_zone'));
  }
  public set spokeZone(value: string[]) {
    this._spokeZone = value;
  }
  public resetSpokeZone() {
    this._spokeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeZoneInput() {
    return this._spokeZone;
  }

  // tunnel_search - computed: true, optional: true, required: false
  private _tunnelSearch?: string; 
  public get tunnelSearch() {
    return this.getStringAttribute('tunnel_search');
  }
  public set tunnelSearch(value: string) {
    this._tunnelSearch = value;
  }
  public resetTunnelSearch() {
    this._tunnelSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSearchInput() {
    return this._tunnelSearch;
  }

  // unity_support - computed: true, optional: true, required: false
  private _unitySupport?: string; 
  public get unitySupport() {
    return this.getStringAttribute('unity_support');
  }
  public set unitySupport(value: string) {
    this._unitySupport = value;
  }
  public resetUnitySupport() {
    this._unitySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitySupportInput() {
    return this._unitySupport;
  }

  // usrgrp - computed: false, optional: true, required: false
  private _usrgrp?: string; 
  public get usrgrp() {
    return this.getStringAttribute('usrgrp');
  }
  public set usrgrp(value: string) {
    this._usrgrp = value;
  }
  public resetUsrgrp() {
    this._usrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usrgrpInput() {
    return this._usrgrp;
  }

  // vpn_interface_priority - computed: false, optional: true, required: false
  private _vpnInterfacePriority?: number; 
  public get vpnInterfacePriority() {
    return this.getNumberAttribute('vpn_interface_priority');
  }
  public set vpnInterfacePriority(value: number) {
    this._vpnInterfacePriority = value;
  }
  public resetVpnInterfacePriority() {
    this._vpnInterfacePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInterfacePriorityInput() {
    return this._vpnInterfacePriority;
  }

  // vpn_zone - computed: true, optional: true, required: false
  private _vpnZone?: string[]; 
  public get vpnZone() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_zone'));
  }
  public set vpnZone(value: string[]) {
    this._vpnZone = value;
  }
  public resetVpnZone() {
    this._vpnZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnZoneInput() {
    return this._vpnZone;
  }

  // vpntable - computed: true, optional: true, required: false
  private _vpntable?: string[]; 
  public get vpntable() {
    return cdktf.Fn.tolist(this.getListAttribute('vpntable'));
  }
  public set vpntable(value: string[]) {
    this._vpntable = value;
  }
  public resetVpntable() {
    this._vpntable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpntableInput() {
    return this._vpntable;
  }

  // xauthtype - computed: true, optional: true, required: false
  private _xauthtype?: string; 
  public get xauthtype() {
    return this.getStringAttribute('xauthtype');
  }
  public set xauthtype(value: string) {
    this._xauthtype = value;
  }
  public resetXauthtype() {
    this._xauthtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauthtypeInput() {
    return this._xauthtype;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new ObjectVpnmgrNodeIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: ObjectVpnmgrNodeIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // ipv4_exclude_range - computed: false, optional: true, required: false
  private _ipv4ExcludeRange = new ObjectVpnmgrNodeIpv4ExcludeRangeList(this, "ipv4_exclude_range", false);
  public get ipv4ExcludeRange() {
    return this._ipv4ExcludeRange;
  }
  public putIpv4ExcludeRange(value: ObjectVpnmgrNodeIpv4ExcludeRange[] | cdktf.IResolvable) {
    this._ipv4ExcludeRange.internalValue = value;
  }
  public resetIpv4ExcludeRange() {
    this._ipv4ExcludeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ExcludeRangeInput() {
    return this._ipv4ExcludeRange.internalValue;
  }

  // protected_subnet - computed: false, optional: true, required: false
  private _protectedSubnet = new ObjectVpnmgrNodeProtectedSubnetList(this, "protected_subnet", false);
  public get protectedSubnet() {
    return this._protectedSubnet;
  }
  public putProtectedSubnet(value: ObjectVpnmgrNodeProtectedSubnet[] | cdktf.IResolvable) {
    this._protectedSubnet.internalValue = value;
  }
  public resetProtectedSubnet() {
    this._protectedSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSubnetInput() {
    return this._protectedSubnet.internalValue;
  }

  // scopemember - computed: false, optional: true, required: false
  private _scopemember = new ObjectVpnmgrNodeScopememberList(this, "scopemember", false);
  public get scopemember() {
    return this._scopemember;
  }
  public putScopemember(value: ObjectVpnmgrNodeScopemember[] | cdktf.IResolvable) {
    this._scopemember.internalValue = value;
  }
  public resetScopemember() {
    this._scopemember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopememberInput() {
    return this._scopemember.internalValue;
  }

  // summary_addr - computed: false, optional: true, required: false
  private _summaryAddr = new ObjectVpnmgrNodeSummaryAddrList(this, "summary_addr", false);
  public get summaryAddr() {
    return this._summaryAddr;
  }
  public putSummaryAddr(value: ObjectVpnmgrNodeSummaryAddr[] | cdktf.IResolvable) {
    this._summaryAddr.internalValue = value;
  }
  public resetSummaryAddr() {
    this._summaryAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddrInput() {
    return this._summaryAddr.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_route: cdktf.stringToTerraform(this._addRoute),
      adom: cdktf.stringToTerraform(this._adom),
      assign_ip: cdktf.stringToTerraform(this._assignIp),
      assign_ip_from: cdktf.stringToTerraform(this._assignIpFrom),
      authpasswd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authpasswd),
      authusr: cdktf.stringToTerraform(this._authusr),
      authusrgrp: cdktf.stringToTerraform(this._authusrgrp),
      auto_configuration: cdktf.stringToTerraform(this._autoConfiguration),
      auto_discovery_receiver: cdktf.stringToTerraform(this._autoDiscoveryReceiver),
      auto_discovery_sender: cdktf.stringToTerraform(this._autoDiscoverySender),
      automatic_routing: cdktf.stringToTerraform(this._automaticRouting),
      banner: cdktf.stringToTerraform(this._banner),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      dhcp_ra_giaddr: cdktf.stringToTerraform(this._dhcpRaGiaddr),
      dhcp_server: cdktf.stringToTerraform(this._dhcpServer),
      dns_mode: cdktf.stringToTerraform(this._dnsMode),
      dns_service: cdktf.stringToTerraform(this._dnsService),
      domain: cdktf.stringToTerraform(this._domain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      exchange_interface_ip: cdktf.stringToTerraform(this._exchangeInterfaceIp),
      extgw: cdktf.stringToTerraform(this._extgw),
      extgw_hubip: cdktf.stringToTerraform(this._extgwHubip),
      extgw_p2_per_net: cdktf.stringToTerraform(this._extgwP2PerNet),
      extgwip: cdktf.stringToTerraform(this._extgwip),
      fosid: cdktf.numberToTerraform(this._fosid),
      hub_iface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hubIface),
      hub_public_ip: cdktf.stringToTerraform(this._hubPublicIp),
      id: cdktf.stringToTerraform(this._id),
      iface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iface),
      ipsec_lease_hold: cdktf.numberToTerraform(this._ipsecLeaseHold),
      ipv4_dns_server1: cdktf.stringToTerraform(this._ipv4DnsServer1),
      ipv4_dns_server2: cdktf.stringToTerraform(this._ipv4DnsServer2),
      ipv4_dns_server3: cdktf.stringToTerraform(this._ipv4DnsServer3),
      ipv4_end_ip: cdktf.stringToTerraform(this._ipv4EndIp),
      ipv4_name: cdktf.stringToTerraform(this._ipv4Name),
      ipv4_netmask: cdktf.stringToTerraform(this._ipv4Netmask),
      ipv4_split_exclude: cdktf.stringToTerraform(this._ipv4SplitExclude),
      ipv4_split_include: cdktf.stringToTerraform(this._ipv4SplitInclude),
      ipv4_start_ip: cdktf.stringToTerraform(this._ipv4StartIp),
      ipv4_wins_server1: cdktf.stringToTerraform(this._ipv4WinsServer1),
      ipv4_wins_server2: cdktf.stringToTerraform(this._ipv4WinsServer2),
      l2tp: cdktf.stringToTerraform(this._l2Tp),
      local_gw: cdktf.stringToTerraform(this._localGw),
      localid: cdktf.stringToTerraform(this._localid),
      mode_cfg: cdktf.stringToTerraform(this._modeCfg),
      mode_cfg_ip_version: cdktf.stringToTerraform(this._modeCfgIpVersion),
      net_device: cdktf.stringToTerraform(this._netDevice),
      network_id: cdktf.numberToTerraform(this._networkId),
      network_overlay: cdktf.stringToTerraform(this._networkOverlay),
      peer: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peer),
      peergrp: cdktf.stringToTerraform(this._peergrp),
      peerid: cdktf.stringToTerraform(this._peerid),
      peertype: cdktf.stringToTerraform(this._peertype),
      protocol: cdktf.numberToTerraform(this._protocol),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      role: cdktf.stringToTerraform(this._role),
      route_overlap: cdktf.stringToTerraform(this._routeOverlap),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      spoke_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spokeZone),
      tunnel_search: cdktf.stringToTerraform(this._tunnelSearch),
      unity_support: cdktf.stringToTerraform(this._unitySupport),
      usrgrp: cdktf.stringToTerraform(this._usrgrp),
      vpn_interface_priority: cdktf.numberToTerraform(this._vpnInterfacePriority),
      vpn_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpnZone),
      vpntable: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpntable),
      xauthtype: cdktf.stringToTerraform(this._xauthtype),
      ip_range: cdktf.listMapper(objectVpnmgrNodeIpRangeToTerraform, true)(this._ipRange.internalValue),
      ipv4_exclude_range: cdktf.listMapper(objectVpnmgrNodeIpv4ExcludeRangeToTerraform, true)(this._ipv4ExcludeRange.internalValue),
      protected_subnet: cdktf.listMapper(objectVpnmgrNodeProtectedSubnetToTerraform, true)(this._protectedSubnet.internalValue),
      scopemember: cdktf.listMapper(objectVpnmgrNodeScopememberToTerraform, true)(this._scopemember.internalValue),
      summary_addr: cdktf.listMapper(objectVpnmgrNodeSummaryAddrToTerraform, true)(this._summaryAddr.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_route: {
        value: cdktf.stringToHclTerraform(this._addRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_ip: {
        value: cdktf.stringToHclTerraform(this._assignIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_ip_from: {
        value: cdktf.stringToHclTerraform(this._assignIpFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authpasswd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authpasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authusr: {
        value: cdktf.stringToHclTerraform(this._authusr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authusrgrp: {
        value: cdktf.stringToHclTerraform(this._authusrgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_configuration: {
        value: cdktf.stringToHclTerraform(this._autoConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_receiver: {
        value: cdktf.stringToHclTerraform(this._autoDiscoveryReceiver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_sender: {
        value: cdktf.stringToHclTerraform(this._autoDiscoverySender),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_routing: {
        value: cdktf.stringToHclTerraform(this._automaticRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      banner: {
        value: cdktf.stringToHclTerraform(this._banner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ra_giaddr: {
        value: cdktf.stringToHclTerraform(this._dhcpRaGiaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server: {
        value: cdktf.stringToHclTerraform(this._dhcpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_mode: {
        value: cdktf.stringToHclTerraform(this._dnsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_service: {
        value: cdktf.stringToHclTerraform(this._dnsService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exchange_interface_ip: {
        value: cdktf.stringToHclTerraform(this._exchangeInterfaceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extgw: {
        value: cdktf.stringToHclTerraform(this._extgw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extgw_hubip: {
        value: cdktf.stringToHclTerraform(this._extgwHubip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extgw_p2_per_net: {
        value: cdktf.stringToHclTerraform(this._extgwP2PerNet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extgwip: {
        value: cdktf.stringToHclTerraform(this._extgwip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hub_iface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hubIface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hub_public_ip: {
        value: cdktf.stringToHclTerraform(this._hubPublicIp),
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
      iface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipsec_lease_hold: {
        value: cdktf.numberToHclTerraform(this._ipsecLeaseHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_dns_server1: {
        value: cdktf.stringToHclTerraform(this._ipv4DnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dns_server2: {
        value: cdktf.stringToHclTerraform(this._ipv4DnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dns_server3: {
        value: cdktf.stringToHclTerraform(this._ipv4DnsServer3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_end_ip: {
        value: cdktf.stringToHclTerraform(this._ipv4EndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_name: {
        value: cdktf.stringToHclTerraform(this._ipv4Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._ipv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_split_exclude: {
        value: cdktf.stringToHclTerraform(this._ipv4SplitExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_split_include: {
        value: cdktf.stringToHclTerraform(this._ipv4SplitInclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_start_ip: {
        value: cdktf.stringToHclTerraform(this._ipv4StartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_wins_server1: {
        value: cdktf.stringToHclTerraform(this._ipv4WinsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_wins_server2: {
        value: cdktf.stringToHclTerraform(this._ipv4WinsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2tp: {
        value: cdktf.stringToHclTerraform(this._l2Tp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_gw: {
        value: cdktf.stringToHclTerraform(this._localGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localid: {
        value: cdktf.stringToHclTerraform(this._localid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_cfg: {
        value: cdktf.stringToHclTerraform(this._modeCfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_cfg_ip_version: {
        value: cdktf.stringToHclTerraform(this._modeCfgIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_device: {
        value: cdktf.stringToHclTerraform(this._netDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.numberToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_overlay: {
        value: cdktf.stringToHclTerraform(this._networkOverlay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peergrp: {
        value: cdktf.stringToHclTerraform(this._peergrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peerid: {
        value: cdktf.stringToHclTerraform(this._peerid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peertype: {
        value: cdktf.stringToHclTerraform(this._peertype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_overlap: {
        value: cdktf.stringToHclTerraform(this._routeOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spokeZone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_search: {
        value: cdktf.stringToHclTerraform(this._tunnelSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unity_support: {
        value: cdktf.stringToHclTerraform(this._unitySupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usrgrp: {
        value: cdktf.stringToHclTerraform(this._usrgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_interface_priority: {
        value: cdktf.numberToHclTerraform(this._vpnInterfacePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpnZone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpntable: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpntable),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      xauthtype: {
        value: cdktf.stringToHclTerraform(this._xauthtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range: {
        value: cdktf.listMapperHcl(objectVpnmgrNodeIpRangeToHclTerraform, true)(this._ipRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnmgrNodeIpRangeList",
      },
      ipv4_exclude_range: {
        value: cdktf.listMapperHcl(objectVpnmgrNodeIpv4ExcludeRangeToHclTerraform, true)(this._ipv4ExcludeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnmgrNodeIpv4ExcludeRangeList",
      },
      protected_subnet: {
        value: cdktf.listMapperHcl(objectVpnmgrNodeProtectedSubnetToHclTerraform, true)(this._protectedSubnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnmgrNodeProtectedSubnetList",
      },
      scopemember: {
        value: cdktf.listMapperHcl(objectVpnmgrNodeScopememberToHclTerraform, true)(this._scopemember.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnmgrNodeScopememberList",
      },
      summary_addr: {
        value: cdktf.listMapperHcl(objectVpnmgrNodeSummaryAddrToHclTerraform, true)(this._summaryAddr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnmgrNodeSummaryAddrList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
