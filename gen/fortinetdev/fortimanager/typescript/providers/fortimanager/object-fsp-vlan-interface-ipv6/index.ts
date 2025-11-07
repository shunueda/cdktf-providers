// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanInterfaceIpv6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#adom ObjectFspVlanInterfaceIpv6A#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#autoconf ObjectFspVlanInterfaceIpv6A#autoconf}
  */
  readonly autoconf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#cli_conn6_status ObjectFspVlanInterfaceIpv6A#cli_conn6_status}
  */
  readonly cliConn6Status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_client_options ObjectFspVlanInterfaceIpv6A#dhcp6_client_options}
  */
  readonly dhcp6ClientOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_information_request ObjectFspVlanInterfaceIpv6A#dhcp6_information_request}
  */
  readonly dhcp6InformationRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_prefix_delegation ObjectFspVlanInterfaceIpv6A#dhcp6_prefix_delegation}
  */
  readonly dhcp6PrefixDelegation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_prefix_hint ObjectFspVlanInterfaceIpv6A#dhcp6_prefix_hint}
  */
  readonly dhcp6PrefixHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_prefix_hint_plt ObjectFspVlanInterfaceIpv6A#dhcp6_prefix_hint_plt}
  */
  readonly dhcp6PrefixHintPlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_prefix_hint_vlt ObjectFspVlanInterfaceIpv6A#dhcp6_prefix_hint_vlt}
  */
  readonly dhcp6PrefixHintVlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_relay_interface_id ObjectFspVlanInterfaceIpv6A#dhcp6_relay_interface_id}
  */
  readonly dhcp6RelayInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_relay_ip ObjectFspVlanInterfaceIpv6A#dhcp6_relay_ip}
  */
  readonly dhcp6RelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_relay_service ObjectFspVlanInterfaceIpv6A#dhcp6_relay_service}
  */
  readonly dhcp6RelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_relay_source_interface ObjectFspVlanInterfaceIpv6A#dhcp6_relay_source_interface}
  */
  readonly dhcp6RelaySourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_relay_source_ip ObjectFspVlanInterfaceIpv6A#dhcp6_relay_source_ip}
  */
  readonly dhcp6RelaySourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dhcp6_relay_type ObjectFspVlanInterfaceIpv6A#dhcp6_relay_type}
  */
  readonly dhcp6RelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dynamic_sort_subtable ObjectFspVlanInterfaceIpv6A#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#icmp6_send_redirect ObjectFspVlanInterfaceIpv6A#icmp6_send_redirect}
  */
  readonly icmp6SendRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#id ObjectFspVlanInterfaceIpv6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#interface_identifier ObjectFspVlanInterfaceIpv6A#interface_identifier}
  */
  readonly interfaceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_address ObjectFspVlanInterfaceIpv6A#ip6_address}
  */
  readonly ip6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_allowaccess ObjectFspVlanInterfaceIpv6A#ip6_allowaccess}
  */
  readonly ip6Allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_default_life ObjectFspVlanInterfaceIpv6A#ip6_default_life}
  */
  readonly ip6DefaultLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_delegated_prefix_iaid ObjectFspVlanInterfaceIpv6A#ip6_delegated_prefix_iaid}
  */
  readonly ip6DelegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_dns_server_override ObjectFspVlanInterfaceIpv6A#ip6_dns_server_override}
  */
  readonly ip6DnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_hop_limit ObjectFspVlanInterfaceIpv6A#ip6_hop_limit}
  */
  readonly ip6HopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_link_mtu ObjectFspVlanInterfaceIpv6A#ip6_link_mtu}
  */
  readonly ip6LinkMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_manage_flag ObjectFspVlanInterfaceIpv6A#ip6_manage_flag}
  */
  readonly ip6ManageFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_max_interval ObjectFspVlanInterfaceIpv6A#ip6_max_interval}
  */
  readonly ip6MaxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_min_interval ObjectFspVlanInterfaceIpv6A#ip6_min_interval}
  */
  readonly ip6MinInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_mode ObjectFspVlanInterfaceIpv6A#ip6_mode}
  */
  readonly ip6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_other_flag ObjectFspVlanInterfaceIpv6A#ip6_other_flag}
  */
  readonly ip6OtherFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_prefix_mode ObjectFspVlanInterfaceIpv6A#ip6_prefix_mode}
  */
  readonly ip6PrefixMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_reachable_time ObjectFspVlanInterfaceIpv6A#ip6_reachable_time}
  */
  readonly ip6ReachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_retrans_time ObjectFspVlanInterfaceIpv6A#ip6_retrans_time}
  */
  readonly ip6RetransTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_send_adv ObjectFspVlanInterfaceIpv6A#ip6_send_adv}
  */
  readonly ip6SendAdv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_subnet ObjectFspVlanInterfaceIpv6A#ip6_subnet}
  */
  readonly ip6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_upstream_interface ObjectFspVlanInterfaceIpv6A#ip6_upstream_interface}
  */
  readonly ip6UpstreamInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#nd_cert ObjectFspVlanInterfaceIpv6A#nd_cert}
  */
  readonly ndCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#nd_cga_modifier ObjectFspVlanInterfaceIpv6A#nd_cga_modifier}
  */
  readonly ndCgaModifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#nd_mode ObjectFspVlanInterfaceIpv6A#nd_mode}
  */
  readonly ndMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#nd_security_level ObjectFspVlanInterfaceIpv6A#nd_security_level}
  */
  readonly ndSecurityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#nd_timestamp_delta ObjectFspVlanInterfaceIpv6A#nd_timestamp_delta}
  */
  readonly ndTimestampDelta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#nd_timestamp_fuzz ObjectFspVlanInterfaceIpv6A#nd_timestamp_fuzz}
  */
  readonly ndTimestampFuzz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ra_send_mtu ObjectFspVlanInterfaceIpv6A#ra_send_mtu}
  */
  readonly raSendMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#scopetype ObjectFspVlanInterfaceIpv6A#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#unique_autoconf_addr ObjectFspVlanInterfaceIpv6A#unique_autoconf_addr}
  */
  readonly uniqueAutoconfAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vlan ObjectFspVlanInterfaceIpv6A#vlan}
  */
  readonly vlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vrip6_link_local ObjectFspVlanInterfaceIpv6A#vrip6_link_local}
  */
  readonly vrip6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vrrp_virtual_mac6 ObjectFspVlanInterfaceIpv6A#vrrp_virtual_mac6}
  */
  readonly vrrpVirtualMac6?: string;
  /**
  * ip6_delegated_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_delegated_prefix_list ObjectFspVlanInterfaceIpv6A#ip6_delegated_prefix_list}
  */
  readonly ip6DelegatedPrefixList?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable;
  /**
  * ip6_extra_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_extra_addr ObjectFspVlanInterfaceIpv6A#ip6_extra_addr}
  */
  readonly ip6ExtraAddr?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable;
  /**
  * ip6_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ip6_prefix_list ObjectFspVlanInterfaceIpv6A#ip6_prefix_list}
  */
  readonly ip6PrefixList?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable;
  /**
  * vrrp6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vrrp6 ObjectFspVlanInterfaceIpv6A#vrrp6}
  */
  readonly vrrp6?: ObjectFspVlanInterfaceIpv6Vrrp6A[] | cdktf.IResolvable;
}
export interface ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#autonomous_flag ObjectFspVlanInterfaceIpv6A#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#delegated_prefix_iaid ObjectFspVlanInterfaceIpv6A#delegated_prefix_iaid}
  */
  readonly delegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#onlink_flag ObjectFspVlanInterfaceIpv6A#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#prefix_id ObjectFspVlanInterfaceIpv6A#prefix_id}
  */
  readonly prefixId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#rdnss ObjectFspVlanInterfaceIpv6A#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#rdnss_service ObjectFspVlanInterfaceIpv6A#rdnss_service}
  */
  readonly rdnssService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#subnet ObjectFspVlanInterfaceIpv6A#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#upstream_interface ObjectFspVlanInterfaceIpv6A#upstream_interface}
  */
  readonly upstreamInterface?: string;
}

export function objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    delegated_prefix_iaid: cdktf.numberToTerraform(struct!.delegatedPrefixIaid),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    prefix_id: cdktf.numberToTerraform(struct!.prefixId),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    rdnss_service: cdktf.stringToTerraform(struct!.rdnssService),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    upstream_interface: cdktf.stringToTerraform(struct!.upstreamInterface),
  }
}


export function objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_prefix_iaid: {
      value: cdktf.numberToHclTerraform(struct!.delegatedPrefixIaid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rdnss_service: {
      value: cdktf.stringToHclTerraform(struct!.rdnssService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_interface: {
      value: cdktf.stringToHclTerraform(struct!.upstreamInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._delegatedPrefixIaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedPrefixIaid = this._delegatedPrefixIaid;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._prefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixId = this._prefixId;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._rdnssService !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnssService = this._rdnssService;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._upstreamInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamInterface = this._upstreamInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._delegatedPrefixIaid = undefined;
      this._onlinkFlag = undefined;
      this._prefixId = undefined;
      this._rdnss = undefined;
      this._rdnssService = undefined;
      this._subnet = undefined;
      this._upstreamInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._delegatedPrefixIaid = value.delegatedPrefixIaid;
      this._onlinkFlag = value.onlinkFlag;
      this._prefixId = value.prefixId;
      this._rdnss = value.rdnss;
      this._rdnssService = value.rdnssService;
      this._subnet = value.subnet;
      this._upstreamInterface = value.upstreamInterface;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // delegated_prefix_iaid - computed: false, optional: true, required: false
  private _delegatedPrefixIaid?: number; 
  public get delegatedPrefixIaid() {
    return this.getNumberAttribute('delegated_prefix_iaid');
  }
  public set delegatedPrefixIaid(value: number) {
    this._delegatedPrefixIaid = value;
  }
  public resetDelegatedPrefixIaid() {
    this._delegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPrefixIaidInput() {
    return this._delegatedPrefixIaid;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // prefix_id - computed: false, optional: true, required: false
  private _prefixId?: number; 
  public get prefixId() {
    return this.getNumberAttribute('prefix_id');
  }
  public set prefixId(value: number) {
    this._prefixId = value;
  }
  public resetPrefixId() {
    this._prefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // rdnss_service - computed: false, optional: true, required: false
  private _rdnssService?: string; 
  public get rdnssService() {
    return this.getStringAttribute('rdnss_service');
  }
  public set rdnssService(value: string) {
    this._rdnssService = value;
  }
  public resetRdnssService() {
    this._rdnssService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssServiceInput() {
    return this._rdnssService;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // upstream_interface - computed: false, optional: true, required: false
  private _upstreamInterface?: string; 
  public get upstreamInterface() {
    return this.getStringAttribute('upstream_interface');
  }
  public set upstreamInterface(value: string) {
    this._upstreamInterface = value;
  }
  public resetUpstreamInterface() {
    this._upstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInterfaceInput() {
    return this._upstreamInterface;
  }
}

export class ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#prefix ObjectFspVlanInterfaceIpv6A#prefix}
  */
  readonly prefix?: string;
}

export function objectFspVlanInterfaceIpv6Ip6ExtraAddrAToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function objectFspVlanInterfaceIpv6Ip6ExtraAddrAToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
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

export class ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#autonomous_flag ObjectFspVlanInterfaceIpv6A#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#dnssl ObjectFspVlanInterfaceIpv6A#dnssl}
  */
  readonly dnssl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#onlink_flag ObjectFspVlanInterfaceIpv6A#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#preferred_life_time ObjectFspVlanInterfaceIpv6A#preferred_life_time}
  */
  readonly preferredLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#prefix ObjectFspVlanInterfaceIpv6A#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#rdnss ObjectFspVlanInterfaceIpv6A#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#valid_life_time ObjectFspVlanInterfaceIpv6A#valid_life_time}
  */
  readonly validLifeTime?: number;
}

export function objectFspVlanInterfaceIpv6Ip6PrefixListStructAToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    dnssl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnssl),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    preferred_life_time: cdktf.numberToTerraform(struct!.preferredLifeTime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    valid_life_time: cdktf.numberToTerraform(struct!.validLifeTime),
  }
}


export function objectFspVlanInterfaceIpv6Ip6PrefixListStructAToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnssl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnssl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_life_time: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifeTime),
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
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valid_life_time: {
      value: cdktf.numberToHclTerraform(struct!.validLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._dnssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssl = this._dnssl;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifeTime = this._preferredLifeTime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._validLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifeTime = this._validLifeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._dnssl = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifeTime = undefined;
      this._prefix = undefined;
      this._rdnss = undefined;
      this._validLifeTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._dnssl = value.dnssl;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifeTime = value.preferredLifeTime;
      this._prefix = value.prefix;
      this._rdnss = value.rdnss;
      this._validLifeTime = value.validLifeTime;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // dnssl - computed: true, optional: true, required: false
  private _dnssl?: string[]; 
  public get dnssl() {
    return cdktf.Fn.tolist(this.getListAttribute('dnssl'));
  }
  public set dnssl(value: string[]) {
    this._dnssl = value;
  }
  public resetDnssl() {
    this._dnssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsslInput() {
    return this._dnssl;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_life_time - computed: false, optional: true, required: false
  private _preferredLifeTime?: number; 
  public get preferredLifeTime() {
    return this.getNumberAttribute('preferred_life_time');
  }
  public set preferredLifeTime(value: number) {
    this._preferredLifeTime = value;
  }
  public resetPreferredLifeTime() {
    this._preferredLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifeTimeInput() {
    return this._preferredLifeTime;
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

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // valid_life_time - computed: false, optional: true, required: false
  private _validLifeTime?: number; 
  public get validLifeTime() {
    return this.getNumberAttribute('valid_life_time');
  }
  public set validLifeTime(value: number) {
    this._validLifeTime = value;
  }
  public resetValidLifeTime() {
    this._validLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifeTimeInput() {
    return this._validLifeTime;
  }
}

export class ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Vrrp6A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#accept_mode ObjectFspVlanInterfaceIpv6A#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#adv_interval ObjectFspVlanInterfaceIpv6A#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#ignore_default_route ObjectFspVlanInterfaceIpv6A#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#preempt ObjectFspVlanInterfaceIpv6A#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#priority ObjectFspVlanInterfaceIpv6A#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#start_time ObjectFspVlanInterfaceIpv6A#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#status ObjectFspVlanInterfaceIpv6A#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vrdst6 ObjectFspVlanInterfaceIpv6A#vrdst6}
  */
  readonly vrdst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vrgrp ObjectFspVlanInterfaceIpv6A#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vrid ObjectFspVlanInterfaceIpv6A#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#vrip6 ObjectFspVlanInterfaceIpv6A#vrip6}
  */
  readonly vrip6?: string;
}

export function objectFspVlanInterfaceIpv6Vrrp6AToTerraform(struct?: ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_mode: cdktf.stringToTerraform(struct!.acceptMode),
    adv_interval: cdktf.numberToTerraform(struct!.advInterval),
    ignore_default_route: cdktf.stringToTerraform(struct!.ignoreDefaultRoute),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    vrdst6: cdktf.stringToTerraform(struct!.vrdst6),
    vrgrp: cdktf.numberToTerraform(struct!.vrgrp),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrip6: cdktf.stringToTerraform(struct!.vrip6),
  }
}


export function objectFspVlanInterfaceIpv6Vrrp6AToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_mode: {
      value: cdktf.stringToHclTerraform(struct!.acceptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_interval: {
      value: cdktf.numberToHclTerraform(struct!.advInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_default_route: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
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
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrdst6: {
      value: cdktf.stringToHclTerraform(struct!.vrdst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrgrp: {
      value: cdktf.numberToHclTerraform(struct!.vrgrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrip6: {
      value: cdktf.stringToHclTerraform(struct!.vrip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Vrrp6AOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMode = this._acceptMode;
    }
    if (this._advInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advInterval = this._advInterval;
    }
    if (this._ignoreDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultRoute = this._ignoreDefaultRoute;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vrdst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdst6 = this._vrdst6;
    }
    if (this._vrgrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrgrp = this._vrgrp;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip6 = this._vrip6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Vrrp6A | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptMode = undefined;
      this._advInterval = undefined;
      this._ignoreDefaultRoute = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._vrdst6 = undefined;
      this._vrgrp = undefined;
      this._vrid = undefined;
      this._vrip6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptMode = value.acceptMode;
      this._advInterval = value.advInterval;
      this._ignoreDefaultRoute = value.ignoreDefaultRoute;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._startTime = value.startTime;
      this._status = value.status;
      this._vrdst6 = value.vrdst6;
      this._vrgrp = value.vrgrp;
      this._vrid = value.vrid;
      this._vrip6 = value.vrip6;
    }
  }

  // accept_mode - computed: true, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: true, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
  }

  // ignore_default_route - computed: true, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
  }

  // preempt - computed: true, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // priority - computed: true, optional: true, required: false
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vrdst6 - computed: false, optional: true, required: false
  private _vrdst6?: string; 
  public get vrdst6() {
    return this.getStringAttribute('vrdst6');
  }
  public set vrdst6(value: string) {
    this._vrdst6 = value;
  }
  public resetVrdst6() {
    this._vrdst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdst6Input() {
    return this._vrdst6;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip6 - computed: true, optional: true, required: false
  private _vrip6?: string; 
  public get vrip6() {
    return this.getStringAttribute('vrip6');
  }
  public set vrip6(value: string) {
    this._vrip6 = value;
  }
  public resetVrip6() {
    this._vrip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6Input() {
    return this._vrip6;
  }
}

export class ObjectFspVlanInterfaceIpv6Vrrp6AList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Vrrp6A[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Vrrp6AOutputReference {
    return new ObjectFspVlanInterfaceIpv6Vrrp6AOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6 fortimanager_object_fsp_vlan_interface_ipv6}
*/
export class ObjectFspVlanInterfaceIpv6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_interface_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanInterfaceIpv6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanInterfaceIpv6A to import
  * @param importFromId The id of the existing ObjectFspVlanInterfaceIpv6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanInterfaceIpv6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_interface_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_ipv6 fortimanager_object_fsp_vlan_interface_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanInterfaceIpv6AConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanInterfaceIpv6AConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_interface_ipv6',
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
    this._adom = config.adom;
    this._autoconf = config.autoconf;
    this._cliConn6Status = config.cliConn6Status;
    this._dhcp6ClientOptions = config.dhcp6ClientOptions;
    this._dhcp6InformationRequest = config.dhcp6InformationRequest;
    this._dhcp6PrefixDelegation = config.dhcp6PrefixDelegation;
    this._dhcp6PrefixHint = config.dhcp6PrefixHint;
    this._dhcp6PrefixHintPlt = config.dhcp6PrefixHintPlt;
    this._dhcp6PrefixHintVlt = config.dhcp6PrefixHintVlt;
    this._dhcp6RelayInterfaceId = config.dhcp6RelayInterfaceId;
    this._dhcp6RelayIp = config.dhcp6RelayIp;
    this._dhcp6RelayService = config.dhcp6RelayService;
    this._dhcp6RelaySourceInterface = config.dhcp6RelaySourceInterface;
    this._dhcp6RelaySourceIp = config.dhcp6RelaySourceIp;
    this._dhcp6RelayType = config.dhcp6RelayType;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._icmp6SendRedirect = config.icmp6SendRedirect;
    this._id = config.id;
    this._interfaceIdentifier = config.interfaceIdentifier;
    this._ip6Address = config.ip6Address;
    this._ip6Allowaccess = config.ip6Allowaccess;
    this._ip6DefaultLife = config.ip6DefaultLife;
    this._ip6DelegatedPrefixIaid = config.ip6DelegatedPrefixIaid;
    this._ip6DnsServerOverride = config.ip6DnsServerOverride;
    this._ip6HopLimit = config.ip6HopLimit;
    this._ip6LinkMtu = config.ip6LinkMtu;
    this._ip6ManageFlag = config.ip6ManageFlag;
    this._ip6MaxInterval = config.ip6MaxInterval;
    this._ip6MinInterval = config.ip6MinInterval;
    this._ip6Mode = config.ip6Mode;
    this._ip6OtherFlag = config.ip6OtherFlag;
    this._ip6PrefixMode = config.ip6PrefixMode;
    this._ip6ReachableTime = config.ip6ReachableTime;
    this._ip6RetransTime = config.ip6RetransTime;
    this._ip6SendAdv = config.ip6SendAdv;
    this._ip6Subnet = config.ip6Subnet;
    this._ip6UpstreamInterface = config.ip6UpstreamInterface;
    this._ndCert = config.ndCert;
    this._ndCgaModifier = config.ndCgaModifier;
    this._ndMode = config.ndMode;
    this._ndSecurityLevel = config.ndSecurityLevel;
    this._ndTimestampDelta = config.ndTimestampDelta;
    this._ndTimestampFuzz = config.ndTimestampFuzz;
    this._raSendMtu = config.raSendMtu;
    this._scopetype = config.scopetype;
    this._uniqueAutoconfAddr = config.uniqueAutoconfAddr;
    this._vlan = config.vlan;
    this._vrip6LinkLocal = config.vrip6LinkLocal;
    this._vrrpVirtualMac6 = config.vrrpVirtualMac6;
    this._ip6DelegatedPrefixList.internalValue = config.ip6DelegatedPrefixList;
    this._ip6ExtraAddr.internalValue = config.ip6ExtraAddr;
    this._ip6PrefixList.internalValue = config.ip6PrefixList;
    this._vrrp6.internalValue = config.vrrp6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // autoconf - computed: true, optional: true, required: false
  private _autoconf?: string; 
  public get autoconf() {
    return this.getStringAttribute('autoconf');
  }
  public set autoconf(value: string) {
    this._autoconf = value;
  }
  public resetAutoconf() {
    this._autoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfInput() {
    return this._autoconf;
  }

  // cli_conn6_status - computed: false, optional: true, required: false
  private _cliConn6Status?: number; 
  public get cliConn6Status() {
    return this.getNumberAttribute('cli_conn6_status');
  }
  public set cliConn6Status(value: number) {
    this._cliConn6Status = value;
  }
  public resetCliConn6Status() {
    this._cliConn6Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConn6StatusInput() {
    return this._cliConn6Status;
  }

  // dhcp6_client_options - computed: true, optional: true, required: false
  private _dhcp6ClientOptions?: string[]; 
  public get dhcp6ClientOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp6_client_options'));
  }
  public set dhcp6ClientOptions(value: string[]) {
    this._dhcp6ClientOptions = value;
  }
  public resetDhcp6ClientOptions() {
    this._dhcp6ClientOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6ClientOptionsInput() {
    return this._dhcp6ClientOptions;
  }

  // dhcp6_information_request - computed: true, optional: true, required: false
  private _dhcp6InformationRequest?: string; 
  public get dhcp6InformationRequest() {
    return this.getStringAttribute('dhcp6_information_request');
  }
  public set dhcp6InformationRequest(value: string) {
    this._dhcp6InformationRequest = value;
  }
  public resetDhcp6InformationRequest() {
    this._dhcp6InformationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6InformationRequestInput() {
    return this._dhcp6InformationRequest;
  }

  // dhcp6_prefix_delegation - computed: true, optional: true, required: false
  private _dhcp6PrefixDelegation?: string; 
  public get dhcp6PrefixDelegation() {
    return this.getStringAttribute('dhcp6_prefix_delegation');
  }
  public set dhcp6PrefixDelegation(value: string) {
    this._dhcp6PrefixDelegation = value;
  }
  public resetDhcp6PrefixDelegation() {
    this._dhcp6PrefixDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixDelegationInput() {
    return this._dhcp6PrefixDelegation;
  }

  // dhcp6_prefix_hint - computed: true, optional: true, required: false
  private _dhcp6PrefixHint?: string; 
  public get dhcp6PrefixHint() {
    return this.getStringAttribute('dhcp6_prefix_hint');
  }
  public set dhcp6PrefixHint(value: string) {
    this._dhcp6PrefixHint = value;
  }
  public resetDhcp6PrefixHint() {
    this._dhcp6PrefixHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintInput() {
    return this._dhcp6PrefixHint;
  }

  // dhcp6_prefix_hint_plt - computed: true, optional: true, required: false
  private _dhcp6PrefixHintPlt?: number; 
  public get dhcp6PrefixHintPlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_plt');
  }
  public set dhcp6PrefixHintPlt(value: number) {
    this._dhcp6PrefixHintPlt = value;
  }
  public resetDhcp6PrefixHintPlt() {
    this._dhcp6PrefixHintPlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintPltInput() {
    return this._dhcp6PrefixHintPlt;
  }

  // dhcp6_prefix_hint_vlt - computed: true, optional: true, required: false
  private _dhcp6PrefixHintVlt?: number; 
  public get dhcp6PrefixHintVlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_vlt');
  }
  public set dhcp6PrefixHintVlt(value: number) {
    this._dhcp6PrefixHintVlt = value;
  }
  public resetDhcp6PrefixHintVlt() {
    this._dhcp6PrefixHintVlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintVltInput() {
    return this._dhcp6PrefixHintVlt;
  }

  // dhcp6_relay_interface_id - computed: false, optional: true, required: false
  private _dhcp6RelayInterfaceId?: string; 
  public get dhcp6RelayInterfaceId() {
    return this.getStringAttribute('dhcp6_relay_interface_id');
  }
  public set dhcp6RelayInterfaceId(value: string) {
    this._dhcp6RelayInterfaceId = value;
  }
  public resetDhcp6RelayInterfaceId() {
    this._dhcp6RelayInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayInterfaceIdInput() {
    return this._dhcp6RelayInterfaceId;
  }

  // dhcp6_relay_ip - computed: false, optional: true, required: false
  private _dhcp6RelayIp?: string; 
  public get dhcp6RelayIp() {
    return this.getStringAttribute('dhcp6_relay_ip');
  }
  public set dhcp6RelayIp(value: string) {
    this._dhcp6RelayIp = value;
  }
  public resetDhcp6RelayIp() {
    this._dhcp6RelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayIpInput() {
    return this._dhcp6RelayIp;
  }

  // dhcp6_relay_service - computed: true, optional: true, required: false
  private _dhcp6RelayService?: string; 
  public get dhcp6RelayService() {
    return this.getStringAttribute('dhcp6_relay_service');
  }
  public set dhcp6RelayService(value: string) {
    this._dhcp6RelayService = value;
  }
  public resetDhcp6RelayService() {
    this._dhcp6RelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayServiceInput() {
    return this._dhcp6RelayService;
  }

  // dhcp6_relay_source_interface - computed: true, optional: true, required: false
  private _dhcp6RelaySourceInterface?: string; 
  public get dhcp6RelaySourceInterface() {
    return this.getStringAttribute('dhcp6_relay_source_interface');
  }
  public set dhcp6RelaySourceInterface(value: string) {
    this._dhcp6RelaySourceInterface = value;
  }
  public resetDhcp6RelaySourceInterface() {
    this._dhcp6RelaySourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceInterfaceInput() {
    return this._dhcp6RelaySourceInterface;
  }

  // dhcp6_relay_source_ip - computed: true, optional: true, required: false
  private _dhcp6RelaySourceIp?: string; 
  public get dhcp6RelaySourceIp() {
    return this.getStringAttribute('dhcp6_relay_source_ip');
  }
  public set dhcp6RelaySourceIp(value: string) {
    this._dhcp6RelaySourceIp = value;
  }
  public resetDhcp6RelaySourceIp() {
    this._dhcp6RelaySourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceIpInput() {
    return this._dhcp6RelaySourceIp;
  }

  // dhcp6_relay_type - computed: true, optional: true, required: false
  private _dhcp6RelayType?: string; 
  public get dhcp6RelayType() {
    return this.getStringAttribute('dhcp6_relay_type');
  }
  public set dhcp6RelayType(value: string) {
    this._dhcp6RelayType = value;
  }
  public resetDhcp6RelayType() {
    this._dhcp6RelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayTypeInput() {
    return this._dhcp6RelayType;
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

  // icmp6_send_redirect - computed: true, optional: true, required: false
  private _icmp6SendRedirect?: string; 
  public get icmp6SendRedirect() {
    return this.getStringAttribute('icmp6_send_redirect');
  }
  public set icmp6SendRedirect(value: string) {
    this._icmp6SendRedirect = value;
  }
  public resetIcmp6SendRedirect() {
    this._icmp6SendRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6SendRedirectInput() {
    return this._icmp6SendRedirect;
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

  // interface_identifier - computed: true, optional: true, required: false
  private _interfaceIdentifier?: string; 
  public get interfaceIdentifier() {
    return this.getStringAttribute('interface_identifier');
  }
  public set interfaceIdentifier(value: string) {
    this._interfaceIdentifier = value;
  }
  public resetInterfaceIdentifier() {
    this._interfaceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdentifierInput() {
    return this._interfaceIdentifier;
  }

  // ip6_address - computed: true, optional: true, required: false
  private _ip6Address?: string; 
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }
  public set ip6Address(value: string) {
    this._ip6Address = value;
  }
  public resetIp6Address() {
    this._ip6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address;
  }

  // ip6_allowaccess - computed: true, optional: true, required: false
  private _ip6Allowaccess?: string[]; 
  public get ip6Allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('ip6_allowaccess'));
  }
  public set ip6Allowaccess(value: string[]) {
    this._ip6Allowaccess = value;
  }
  public resetIp6Allowaccess() {
    this._ip6Allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AllowaccessInput() {
    return this._ip6Allowaccess;
  }

  // ip6_default_life - computed: true, optional: true, required: false
  private _ip6DefaultLife?: number; 
  public get ip6DefaultLife() {
    return this.getNumberAttribute('ip6_default_life');
  }
  public set ip6DefaultLife(value: number) {
    this._ip6DefaultLife = value;
  }
  public resetIp6DefaultLife() {
    this._ip6DefaultLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DefaultLifeInput() {
    return this._ip6DefaultLife;
  }

  // ip6_delegated_prefix_iaid - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixIaid?: number; 
  public get ip6DelegatedPrefixIaid() {
    return this.getNumberAttribute('ip6_delegated_prefix_iaid');
  }
  public set ip6DelegatedPrefixIaid(value: number) {
    this._ip6DelegatedPrefixIaid = value;
  }
  public resetIp6DelegatedPrefixIaid() {
    this._ip6DelegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixIaidInput() {
    return this._ip6DelegatedPrefixIaid;
  }

  // ip6_dns_server_override - computed: true, optional: true, required: false
  private _ip6DnsServerOverride?: string; 
  public get ip6DnsServerOverride() {
    return this.getStringAttribute('ip6_dns_server_override');
  }
  public set ip6DnsServerOverride(value: string) {
    this._ip6DnsServerOverride = value;
  }
  public resetIp6DnsServerOverride() {
    this._ip6DnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DnsServerOverrideInput() {
    return this._ip6DnsServerOverride;
  }

  // ip6_hop_limit - computed: false, optional: true, required: false
  private _ip6HopLimit?: number; 
  public get ip6HopLimit() {
    return this.getNumberAttribute('ip6_hop_limit');
  }
  public set ip6HopLimit(value: number) {
    this._ip6HopLimit = value;
  }
  public resetIp6HopLimit() {
    this._ip6HopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6HopLimitInput() {
    return this._ip6HopLimit;
  }

  // ip6_link_mtu - computed: false, optional: true, required: false
  private _ip6LinkMtu?: number; 
  public get ip6LinkMtu() {
    return this.getNumberAttribute('ip6_link_mtu');
  }
  public set ip6LinkMtu(value: number) {
    this._ip6LinkMtu = value;
  }
  public resetIp6LinkMtu() {
    this._ip6LinkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6LinkMtuInput() {
    return this._ip6LinkMtu;
  }

  // ip6_manage_flag - computed: true, optional: true, required: false
  private _ip6ManageFlag?: string; 
  public get ip6ManageFlag() {
    return this.getStringAttribute('ip6_manage_flag');
  }
  public set ip6ManageFlag(value: string) {
    this._ip6ManageFlag = value;
  }
  public resetIp6ManageFlag() {
    this._ip6ManageFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ManageFlagInput() {
    return this._ip6ManageFlag;
  }

  // ip6_max_interval - computed: true, optional: true, required: false
  private _ip6MaxInterval?: number; 
  public get ip6MaxInterval() {
    return this.getNumberAttribute('ip6_max_interval');
  }
  public set ip6MaxInterval(value: number) {
    this._ip6MaxInterval = value;
  }
  public resetIp6MaxInterval() {
    this._ip6MaxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MaxIntervalInput() {
    return this._ip6MaxInterval;
  }

  // ip6_min_interval - computed: true, optional: true, required: false
  private _ip6MinInterval?: number; 
  public get ip6MinInterval() {
    return this.getNumberAttribute('ip6_min_interval');
  }
  public set ip6MinInterval(value: number) {
    this._ip6MinInterval = value;
  }
  public resetIp6MinInterval() {
    this._ip6MinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MinIntervalInput() {
    return this._ip6MinInterval;
  }

  // ip6_mode - computed: true, optional: true, required: false
  private _ip6Mode?: string; 
  public get ip6Mode() {
    return this.getStringAttribute('ip6_mode');
  }
  public set ip6Mode(value: string) {
    this._ip6Mode = value;
  }
  public resetIp6Mode() {
    this._ip6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ModeInput() {
    return this._ip6Mode;
  }

  // ip6_other_flag - computed: true, optional: true, required: false
  private _ip6OtherFlag?: string; 
  public get ip6OtherFlag() {
    return this.getStringAttribute('ip6_other_flag');
  }
  public set ip6OtherFlag(value: string) {
    this._ip6OtherFlag = value;
  }
  public resetIp6OtherFlag() {
    this._ip6OtherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6OtherFlagInput() {
    return this._ip6OtherFlag;
  }

  // ip6_prefix_mode - computed: true, optional: true, required: false
  private _ip6PrefixMode?: string; 
  public get ip6PrefixMode() {
    return this.getStringAttribute('ip6_prefix_mode');
  }
  public set ip6PrefixMode(value: string) {
    this._ip6PrefixMode = value;
  }
  public resetIp6PrefixMode() {
    this._ip6PrefixMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixModeInput() {
    return this._ip6PrefixMode;
  }

  // ip6_reachable_time - computed: false, optional: true, required: false
  private _ip6ReachableTime?: number; 
  public get ip6ReachableTime() {
    return this.getNumberAttribute('ip6_reachable_time');
  }
  public set ip6ReachableTime(value: number) {
    this._ip6ReachableTime = value;
  }
  public resetIp6ReachableTime() {
    this._ip6ReachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ReachableTimeInput() {
    return this._ip6ReachableTime;
  }

  // ip6_retrans_time - computed: false, optional: true, required: false
  private _ip6RetransTime?: number; 
  public get ip6RetransTime() {
    return this.getNumberAttribute('ip6_retrans_time');
  }
  public set ip6RetransTime(value: number) {
    this._ip6RetransTime = value;
  }
  public resetIp6RetransTime() {
    this._ip6RetransTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RetransTimeInput() {
    return this._ip6RetransTime;
  }

  // ip6_send_adv - computed: true, optional: true, required: false
  private _ip6SendAdv?: string; 
  public get ip6SendAdv() {
    return this.getStringAttribute('ip6_send_adv');
  }
  public set ip6SendAdv(value: string) {
    this._ip6SendAdv = value;
  }
  public resetIp6SendAdv() {
    this._ip6SendAdv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SendAdvInput() {
    return this._ip6SendAdv;
  }

  // ip6_subnet - computed: true, optional: true, required: false
  private _ip6Subnet?: string; 
  public get ip6Subnet() {
    return this.getStringAttribute('ip6_subnet');
  }
  public set ip6Subnet(value: string) {
    this._ip6Subnet = value;
  }
  public resetIp6Subnet() {
    this._ip6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SubnetInput() {
    return this._ip6Subnet;
  }

  // ip6_upstream_interface - computed: false, optional: true, required: false
  private _ip6UpstreamInterface?: string; 
  public get ip6UpstreamInterface() {
    return this.getStringAttribute('ip6_upstream_interface');
  }
  public set ip6UpstreamInterface(value: string) {
    this._ip6UpstreamInterface = value;
  }
  public resetIp6UpstreamInterface() {
    this._ip6UpstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6UpstreamInterfaceInput() {
    return this._ip6UpstreamInterface;
  }

  // nd_cert - computed: false, optional: true, required: false
  private _ndCert?: string; 
  public get ndCert() {
    return this.getStringAttribute('nd_cert');
  }
  public set ndCert(value: string) {
    this._ndCert = value;
  }
  public resetNdCert() {
    this._ndCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCertInput() {
    return this._ndCert;
  }

  // nd_cga_modifier - computed: false, optional: true, required: false
  private _ndCgaModifier?: string; 
  public get ndCgaModifier() {
    return this.getStringAttribute('nd_cga_modifier');
  }
  public set ndCgaModifier(value: string) {
    this._ndCgaModifier = value;
  }
  public resetNdCgaModifier() {
    this._ndCgaModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCgaModifierInput() {
    return this._ndCgaModifier;
  }

  // nd_mode - computed: true, optional: true, required: false
  private _ndMode?: string; 
  public get ndMode() {
    return this.getStringAttribute('nd_mode');
  }
  public set ndMode(value: string) {
    this._ndMode = value;
  }
  public resetNdMode() {
    this._ndMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndModeInput() {
    return this._ndMode;
  }

  // nd_security_level - computed: false, optional: true, required: false
  private _ndSecurityLevel?: number; 
  public get ndSecurityLevel() {
    return this.getNumberAttribute('nd_security_level');
  }
  public set ndSecurityLevel(value: number) {
    this._ndSecurityLevel = value;
  }
  public resetNdSecurityLevel() {
    this._ndSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndSecurityLevelInput() {
    return this._ndSecurityLevel;
  }

  // nd_timestamp_delta - computed: false, optional: true, required: false
  private _ndTimestampDelta?: number; 
  public get ndTimestampDelta() {
    return this.getNumberAttribute('nd_timestamp_delta');
  }
  public set ndTimestampDelta(value: number) {
    this._ndTimestampDelta = value;
  }
  public resetNdTimestampDelta() {
    this._ndTimestampDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampDeltaInput() {
    return this._ndTimestampDelta;
  }

  // nd_timestamp_fuzz - computed: false, optional: true, required: false
  private _ndTimestampFuzz?: number; 
  public get ndTimestampFuzz() {
    return this.getNumberAttribute('nd_timestamp_fuzz');
  }
  public set ndTimestampFuzz(value: number) {
    this._ndTimestampFuzz = value;
  }
  public resetNdTimestampFuzz() {
    this._ndTimestampFuzz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampFuzzInput() {
    return this._ndTimestampFuzz;
  }

  // ra_send_mtu - computed: true, optional: true, required: false
  private _raSendMtu?: string; 
  public get raSendMtu() {
    return this.getStringAttribute('ra_send_mtu');
  }
  public set raSendMtu(value: string) {
    this._raSendMtu = value;
  }
  public resetRaSendMtu() {
    this._raSendMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raSendMtuInput() {
    return this._raSendMtu;
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

  // unique_autoconf_addr - computed: true, optional: true, required: false
  private _uniqueAutoconfAddr?: string; 
  public get uniqueAutoconfAddr() {
    return this.getStringAttribute('unique_autoconf_addr');
  }
  public set uniqueAutoconfAddr(value: string) {
    this._uniqueAutoconfAddr = value;
  }
  public resetUniqueAutoconfAddr() {
    this._uniqueAutoconfAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueAutoconfAddrInput() {
    return this._uniqueAutoconfAddr;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vrip6_link_local - computed: true, optional: true, required: false
  private _vrip6LinkLocal?: string; 
  public get vrip6LinkLocal() {
    return this.getStringAttribute('vrip6_link_local');
  }
  public set vrip6LinkLocal(value: string) {
    this._vrip6LinkLocal = value;
  }
  public resetVrip6LinkLocal() {
    this._vrip6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6LinkLocalInput() {
    return this._vrip6LinkLocal;
  }

  // vrrp_virtual_mac6 - computed: true, optional: true, required: false
  private _vrrpVirtualMac6?: string; 
  public get vrrpVirtualMac6() {
    return this.getStringAttribute('vrrp_virtual_mac6');
  }
  public set vrrpVirtualMac6(value: string) {
    this._vrrpVirtualMac6 = value;
  }
  public resetVrrpVirtualMac6() {
    this._vrrpVirtualMac6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualMac6Input() {
    return this._vrrpVirtualMac6;
  }

  // ip6_delegated_prefix_list - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixList = new ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAList(this, "ip6_delegated_prefix_list", false);
  public get ip6DelegatedPrefixList() {
    return this._ip6DelegatedPrefixList;
  }
  public putIp6DelegatedPrefixList(value: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable) {
    this._ip6DelegatedPrefixList.internalValue = value;
  }
  public resetIp6DelegatedPrefixList() {
    this._ip6DelegatedPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixListInput() {
    return this._ip6DelegatedPrefixList.internalValue;
  }

  // ip6_extra_addr - computed: false, optional: true, required: false
  private _ip6ExtraAddr = new ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAList(this, "ip6_extra_addr", false);
  public get ip6ExtraAddr() {
    return this._ip6ExtraAddr;
  }
  public putIp6ExtraAddr(value: ObjectFspVlanInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable) {
    this._ip6ExtraAddr.internalValue = value;
  }
  public resetIp6ExtraAddr() {
    this._ip6ExtraAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ExtraAddrInput() {
    return this._ip6ExtraAddr.internalValue;
  }

  // ip6_prefix_list - computed: false, optional: true, required: false
  private _ip6PrefixList = new ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAList(this, "ip6_prefix_list", false);
  public get ip6PrefixList() {
    return this._ip6PrefixList;
  }
  public putIp6PrefixList(value: ObjectFspVlanInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable) {
    this._ip6PrefixList.internalValue = value;
  }
  public resetIp6PrefixList() {
    this._ip6PrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixListInput() {
    return this._ip6PrefixList.internalValue;
  }

  // vrrp6 - computed: false, optional: true, required: false
  private _vrrp6 = new ObjectFspVlanInterfaceIpv6Vrrp6AList(this, "vrrp6", false);
  public get vrrp6() {
    return this._vrrp6;
  }
  public putVrrp6(value: ObjectFspVlanInterfaceIpv6Vrrp6A[] | cdktf.IResolvable) {
    this._vrrp6.internalValue = value;
  }
  public resetVrrp6() {
    this._vrrp6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrp6Input() {
    return this._vrrp6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      autoconf: cdktf.stringToTerraform(this._autoconf),
      cli_conn6_status: cdktf.numberToTerraform(this._cliConn6Status),
      dhcp6_client_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcp6ClientOptions),
      dhcp6_information_request: cdktf.stringToTerraform(this._dhcp6InformationRequest),
      dhcp6_prefix_delegation: cdktf.stringToTerraform(this._dhcp6PrefixDelegation),
      dhcp6_prefix_hint: cdktf.stringToTerraform(this._dhcp6PrefixHint),
      dhcp6_prefix_hint_plt: cdktf.numberToTerraform(this._dhcp6PrefixHintPlt),
      dhcp6_prefix_hint_vlt: cdktf.numberToTerraform(this._dhcp6PrefixHintVlt),
      dhcp6_relay_interface_id: cdktf.stringToTerraform(this._dhcp6RelayInterfaceId),
      dhcp6_relay_ip: cdktf.stringToTerraform(this._dhcp6RelayIp),
      dhcp6_relay_service: cdktf.stringToTerraform(this._dhcp6RelayService),
      dhcp6_relay_source_interface: cdktf.stringToTerraform(this._dhcp6RelaySourceInterface),
      dhcp6_relay_source_ip: cdktf.stringToTerraform(this._dhcp6RelaySourceIp),
      dhcp6_relay_type: cdktf.stringToTerraform(this._dhcp6RelayType),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      icmp6_send_redirect: cdktf.stringToTerraform(this._icmp6SendRedirect),
      id: cdktf.stringToTerraform(this._id),
      interface_identifier: cdktf.stringToTerraform(this._interfaceIdentifier),
      ip6_address: cdktf.stringToTerraform(this._ip6Address),
      ip6_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ip6Allowaccess),
      ip6_default_life: cdktf.numberToTerraform(this._ip6DefaultLife),
      ip6_delegated_prefix_iaid: cdktf.numberToTerraform(this._ip6DelegatedPrefixIaid),
      ip6_dns_server_override: cdktf.stringToTerraform(this._ip6DnsServerOverride),
      ip6_hop_limit: cdktf.numberToTerraform(this._ip6HopLimit),
      ip6_link_mtu: cdktf.numberToTerraform(this._ip6LinkMtu),
      ip6_manage_flag: cdktf.stringToTerraform(this._ip6ManageFlag),
      ip6_max_interval: cdktf.numberToTerraform(this._ip6MaxInterval),
      ip6_min_interval: cdktf.numberToTerraform(this._ip6MinInterval),
      ip6_mode: cdktf.stringToTerraform(this._ip6Mode),
      ip6_other_flag: cdktf.stringToTerraform(this._ip6OtherFlag),
      ip6_prefix_mode: cdktf.stringToTerraform(this._ip6PrefixMode),
      ip6_reachable_time: cdktf.numberToTerraform(this._ip6ReachableTime),
      ip6_retrans_time: cdktf.numberToTerraform(this._ip6RetransTime),
      ip6_send_adv: cdktf.stringToTerraform(this._ip6SendAdv),
      ip6_subnet: cdktf.stringToTerraform(this._ip6Subnet),
      ip6_upstream_interface: cdktf.stringToTerraform(this._ip6UpstreamInterface),
      nd_cert: cdktf.stringToTerraform(this._ndCert),
      nd_cga_modifier: cdktf.stringToTerraform(this._ndCgaModifier),
      nd_mode: cdktf.stringToTerraform(this._ndMode),
      nd_security_level: cdktf.numberToTerraform(this._ndSecurityLevel),
      nd_timestamp_delta: cdktf.numberToTerraform(this._ndTimestampDelta),
      nd_timestamp_fuzz: cdktf.numberToTerraform(this._ndTimestampFuzz),
      ra_send_mtu: cdktf.stringToTerraform(this._raSendMtu),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      unique_autoconf_addr: cdktf.stringToTerraform(this._uniqueAutoconfAddr),
      vlan: cdktf.stringToTerraform(this._vlan),
      vrip6_link_local: cdktf.stringToTerraform(this._vrip6LinkLocal),
      vrrp_virtual_mac6: cdktf.stringToTerraform(this._vrrpVirtualMac6),
      ip6_delegated_prefix_list: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToTerraform, true)(this._ip6DelegatedPrefixList.internalValue),
      ip6_extra_addr: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6ExtraAddrAToTerraform, true)(this._ip6ExtraAddr.internalValue),
      ip6_prefix_list: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6PrefixListStructAToTerraform, true)(this._ip6PrefixList.internalValue),
      vrrp6: cdktf.listMapper(objectFspVlanInterfaceIpv6Vrrp6AToTerraform, true)(this._vrrp6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoconf: {
        value: cdktf.stringToHclTerraform(this._autoconf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_conn6_status: {
        value: cdktf.numberToHclTerraform(this._cliConn6Status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp6_client_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcp6ClientOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dhcp6_information_request: {
        value: cdktf.stringToHclTerraform(this._dhcp6InformationRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_prefix_delegation: {
        value: cdktf.stringToHclTerraform(this._dhcp6PrefixDelegation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_prefix_hint: {
        value: cdktf.stringToHclTerraform(this._dhcp6PrefixHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_prefix_hint_plt: {
        value: cdktf.numberToHclTerraform(this._dhcp6PrefixHintPlt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp6_prefix_hint_vlt: {
        value: cdktf.numberToHclTerraform(this._dhcp6PrefixHintVlt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp6_relay_interface_id: {
        value: cdktf.stringToHclTerraform(this._dhcp6RelayInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_relay_ip: {
        value: cdktf.stringToHclTerraform(this._dhcp6RelayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_relay_service: {
        value: cdktf.stringToHclTerraform(this._dhcp6RelayService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_relay_source_interface: {
        value: cdktf.stringToHclTerraform(this._dhcp6RelaySourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_relay_source_ip: {
        value: cdktf.stringToHclTerraform(this._dhcp6RelaySourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_relay_type: {
        value: cdktf.stringToHclTerraform(this._dhcp6RelayType),
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
      icmp6_send_redirect: {
        value: cdktf.stringToHclTerraform(this._icmp6SendRedirect),
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
      interface_identifier: {
        value: cdktf.stringToHclTerraform(this._interfaceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_address: {
        value: cdktf.stringToHclTerraform(this._ip6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ip6Allowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip6_default_life: {
        value: cdktf.numberToHclTerraform(this._ip6DefaultLife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_delegated_prefix_iaid: {
        value: cdktf.numberToHclTerraform(this._ip6DelegatedPrefixIaid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_dns_server_override: {
        value: cdktf.stringToHclTerraform(this._ip6DnsServerOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_hop_limit: {
        value: cdktf.numberToHclTerraform(this._ip6HopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_link_mtu: {
        value: cdktf.numberToHclTerraform(this._ip6LinkMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_manage_flag: {
        value: cdktf.stringToHclTerraform(this._ip6ManageFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_max_interval: {
        value: cdktf.numberToHclTerraform(this._ip6MaxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_min_interval: {
        value: cdktf.numberToHclTerraform(this._ip6MinInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_mode: {
        value: cdktf.stringToHclTerraform(this._ip6Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_other_flag: {
        value: cdktf.stringToHclTerraform(this._ip6OtherFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_prefix_mode: {
        value: cdktf.stringToHclTerraform(this._ip6PrefixMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_reachable_time: {
        value: cdktf.numberToHclTerraform(this._ip6ReachableTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_retrans_time: {
        value: cdktf.numberToHclTerraform(this._ip6RetransTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip6_send_adv: {
        value: cdktf.stringToHclTerraform(this._ip6SendAdv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_subnet: {
        value: cdktf.stringToHclTerraform(this._ip6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_upstream_interface: {
        value: cdktf.stringToHclTerraform(this._ip6UpstreamInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nd_cert: {
        value: cdktf.stringToHclTerraform(this._ndCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nd_cga_modifier: {
        value: cdktf.stringToHclTerraform(this._ndCgaModifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nd_mode: {
        value: cdktf.stringToHclTerraform(this._ndMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nd_security_level: {
        value: cdktf.numberToHclTerraform(this._ndSecurityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nd_timestamp_delta: {
        value: cdktf.numberToHclTerraform(this._ndTimestampDelta),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nd_timestamp_fuzz: {
        value: cdktf.numberToHclTerraform(this._ndTimestampFuzz),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ra_send_mtu: {
        value: cdktf.stringToHclTerraform(this._raSendMtu),
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
      unique_autoconf_addr: {
        value: cdktf.stringToHclTerraform(this._uniqueAutoconfAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrip6_link_local: {
        value: cdktf.stringToHclTerraform(this._vrip6LinkLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrrp_virtual_mac6: {
        value: cdktf.stringToHclTerraform(this._vrrpVirtualMac6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_delegated_prefix_list: {
        value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAToHclTerraform, true)(this._ip6DelegatedPrefixList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructAList",
      },
      ip6_extra_addr: {
        value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6ExtraAddrAToHclTerraform, true)(this._ip6ExtraAddr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceIpv6Ip6ExtraAddrAList",
      },
      ip6_prefix_list: {
        value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6PrefixListStructAToHclTerraform, true)(this._ip6PrefixList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceIpv6Ip6PrefixListStructAList",
      },
      vrrp6: {
        value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Vrrp6AToHclTerraform, true)(this._vrrp6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceIpv6Vrrp6AList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
