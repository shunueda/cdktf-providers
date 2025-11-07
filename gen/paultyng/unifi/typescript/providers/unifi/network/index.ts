// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the IPv4 addresses for the DNS server to be returned from the DHCP server. Leave blank to disable this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_dns Network#dhcp_dns}
  */
  readonly dhcpDns?: string[];
  /**
  * Specifies whether DHCP is enabled or not on this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_enabled Network#dhcp_enabled}
  */
  readonly dhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the lease time for DHCP addresses in seconds. Defaults to `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_lease Network#dhcp_lease}
  */
  readonly dhcpLease?: number;
  /**
  * Specifies whether DHCP relay is enabled or not on this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_relay_enabled Network#dhcp_relay_enabled}
  */
  readonly dhcpRelayEnabled?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 address where the DHCP range of addresses starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_start Network#dhcp_start}
  */
  readonly dhcpStart?: string;
  /**
  * The IPv4 address where the DHCP range of addresses stops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_stop Network#dhcp_stop}
  */
  readonly dhcpStop?: string;
  /**
  * Specifies the IPv6 addresses for the DNS server to be returned from the DHCP server. Used if `dhcp_v6_dns_auto` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_v6_dns Network#dhcp_v6_dns}
  */
  readonly dhcpV6Dns?: string[];
  /**
  * Specifies DNS source to propagate. If set `false` the entries in `dhcp_v6_dns` are used, the upstream entries otherwise Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_v6_dns_auto Network#dhcp_v6_dns_auto}
  */
  readonly dhcpV6DnsAuto?: boolean | cdktf.IResolvable;
  /**
  * Enable stateful DHCPv6 for static configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_v6_enabled Network#dhcp_v6_enabled}
  */
  readonly dhcpV6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the lease time for DHCPv6 addresses in seconds. Defaults to `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_v6_lease Network#dhcp_v6_lease}
  */
  readonly dhcpV6Lease?: number;
  /**
  * Start address of the DHCPv6 range. Used in static DHCPv6 configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_v6_start Network#dhcp_v6_start}
  */
  readonly dhcpV6Start?: string;
  /**
  * End address of the DHCPv6 range. Used in static DHCPv6 configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcp_v6_stop Network#dhcp_v6_stop}
  */
  readonly dhcpV6Stop?: string;
  /**
  * Toggles on the DHCP boot options. Should be set to true when you want to have dhcpd_boot_filename, and dhcpd_boot_server to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcpd_boot_enabled Network#dhcpd_boot_enabled}
  */
  readonly dhcpdBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the file to PXE boot from on the dhcpd_boot_server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcpd_boot_filename Network#dhcpd_boot_filename}
  */
  readonly dhcpdBootFilename?: string;
  /**
  * Specifies the IPv4 address of a TFTP server to network boot from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#dhcpd_boot_server Network#dhcpd_boot_server}
  */
  readonly dhcpdBootServer?: string;
  /**
  * The domain name of this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#domain_name Network#domain_name}
  */
  readonly domainName?: string;
  /**
  * Specifies whether IGMP snooping is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#igmp_snooping Network#igmp_snooping}
  */
  readonly igmpSnooping?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether this network should be allowed to access the internet or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#internet_access_enabled Network#internet_access_enabled}
  */
  readonly internetAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether this network should be allowed to access other local networks or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#intra_network_access_enabled Network#intra_network_access_enabled}
  */
  readonly intraNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies which type of IPv6 connection to use. Must be one of either `static`, `pd`, or `none`. Defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_interface_type Network#ipv6_interface_type}
  */
  readonly ipv6InterfaceType?: string;
  /**
  * Specifies which WAN interface to use for IPv6 PD. Must be one of either `wan` or `wan2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_pd_interface Network#ipv6_pd_interface}
  */
  readonly ipv6PdInterface?: string;
  /**
  * Specifies the IPv6 Prefix ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_pd_prefixid Network#ipv6_pd_prefixid}
  */
  readonly ipv6PdPrefixid?: string;
  /**
  * Start address of the DHCPv6 range. Used if `ipv6_interface_type` is set to `pd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_pd_start Network#ipv6_pd_start}
  */
  readonly ipv6PdStart?: string;
  /**
  * End address of the DHCPv6 range. Used if `ipv6_interface_type` is set to `pd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_pd_stop Network#ipv6_pd_stop}
  */
  readonly ipv6PdStop?: string;
  /**
  * Specifies whether to enable router advertisements or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_ra_enable Network#ipv6_ra_enable}
  */
  readonly ipv6RaEnable?: boolean | cdktf.IResolvable;
  /**
  * Lifetime in which the address can be used. Address becomes deprecated afterwards. Must be lower than or equal to `ipv6_ra_valid_lifetime` Defaults to `14400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_ra_preferred_lifetime Network#ipv6_ra_preferred_lifetime}
  */
  readonly ipv6RaPreferredLifetime?: number;
  /**
  * IPv6 router advertisement priority. Must be one of either `high`, `medium`, or `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_ra_priority Network#ipv6_ra_priority}
  */
  readonly ipv6RaPriority?: string;
  /**
  * Total lifetime in which the address can be used. Must be equal to or greater than `ipv6_ra_preferred_lifetime`. Defaults to `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_ra_valid_lifetime Network#ipv6_ra_valid_lifetime}
  */
  readonly ipv6RaValidLifetime?: number;
  /**
  * Specifies the static IPv6 subnet when `ipv6_interface_type` is 'static'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#ipv6_static_subnet Network#ipv6_static_subnet}
  */
  readonly ipv6StaticSubnet?: string;
  /**
  * Specifies whether Multicast DNS (mDNS) is enabled or not on the network (Controller >=v7).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#multicast_dns Network#multicast_dns}
  */
  readonly multicastDns?: boolean | cdktf.IResolvable;
  /**
  * The name of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#name Network#name}
  */
  readonly name: string;
  /**
  * The group of the network. Defaults to `LAN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#network_group Network#network_group}
  */
  readonly networkGroup?: string;
  /**
  * The purpose of the network. Must be one of `corporate`, `guest`, `wan`, or `vlan-only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#purpose Network#purpose}
  */
  readonly purpose: string;
  /**
  * The name of the site to associate the network with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#site Network#site}
  */
  readonly site?: string;
  /**
  * The subnet of the network. Must be a valid CIDR address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#subnet Network#subnet}
  */
  readonly subnet?: string;
  /**
  * The VLAN ID of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#vlan_id Network#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Specifies the IPv6 prefix size to request from ISP. Must be between 48 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_dhcp_v6_pd_size Network#wan_dhcp_v6_pd_size}
  */
  readonly wanDhcpV6PdSize?: number;
  /**
  * DNS servers IPs of the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_dns Network#wan_dns}
  */
  readonly wanDns?: string[];
  /**
  * Specifies the WAN egress quality of service. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_egress_qos Network#wan_egress_qos}
  */
  readonly wanEgressQos?: number;
  /**
  * The IPv4 gateway of the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_gateway Network#wan_gateway}
  */
  readonly wanGateway?: string;
  /**
  * The IPv6 gateway of the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_gateway_v6 Network#wan_gateway_v6}
  */
  readonly wanGatewayV6?: string;
  /**
  * The IPv4 address of the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_ip Network#wan_ip}
  */
  readonly wanIp?: string;
  /**
  * The IPv6 address of the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_ipv6 Network#wan_ipv6}
  */
  readonly wanIpv6?: string;
  /**
  * The IPv4 netmask of the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_netmask Network#wan_netmask}
  */
  readonly wanNetmask?: string;
  /**
  * Specifies the WAN network group. Must be one of either `WAN`, `WAN2` or `WAN_LTE_FAILOVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_networkgroup Network#wan_networkgroup}
  */
  readonly wanNetworkgroup?: string;
  /**
  * The IPv6 prefix length of the WAN. Must be between 1 and 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_prefixlen Network#wan_prefixlen}
  */
  readonly wanPrefixlen?: number;
  /**
  * Specifies the IPV4 WAN connection type. Must be one of either `disabled`, `static`, `dhcp`, or `pppoe`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_type Network#wan_type}
  */
  readonly wanType?: string;
  /**
  * Specifies the IPV6 WAN connection type. Must be one of either `disabled`, `static`, or `dhcpv6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_type_v6 Network#wan_type_v6}
  */
  readonly wanTypeV6?: string;
  /**
  * Specifies the IPV4 WAN username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#wan_username Network#wan_username}
  */
  readonly wanUsername?: string;
  /**
  * Specifies the IPV4 WAN password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#x_wan_password Network#x_wan_password}
  */
  readonly xWanPassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network unifi_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/network unifi_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_network',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcpDns = config.dhcpDns;
    this._dhcpEnabled = config.dhcpEnabled;
    this._dhcpLease = config.dhcpLease;
    this._dhcpRelayEnabled = config.dhcpRelayEnabled;
    this._dhcpStart = config.dhcpStart;
    this._dhcpStop = config.dhcpStop;
    this._dhcpV6Dns = config.dhcpV6Dns;
    this._dhcpV6DnsAuto = config.dhcpV6DnsAuto;
    this._dhcpV6Enabled = config.dhcpV6Enabled;
    this._dhcpV6Lease = config.dhcpV6Lease;
    this._dhcpV6Start = config.dhcpV6Start;
    this._dhcpV6Stop = config.dhcpV6Stop;
    this._dhcpdBootEnabled = config.dhcpdBootEnabled;
    this._dhcpdBootFilename = config.dhcpdBootFilename;
    this._dhcpdBootServer = config.dhcpdBootServer;
    this._domainName = config.domainName;
    this._igmpSnooping = config.igmpSnooping;
    this._internetAccessEnabled = config.internetAccessEnabled;
    this._intraNetworkAccessEnabled = config.intraNetworkAccessEnabled;
    this._ipv6InterfaceType = config.ipv6InterfaceType;
    this._ipv6PdInterface = config.ipv6PdInterface;
    this._ipv6PdPrefixid = config.ipv6PdPrefixid;
    this._ipv6PdStart = config.ipv6PdStart;
    this._ipv6PdStop = config.ipv6PdStop;
    this._ipv6RaEnable = config.ipv6RaEnable;
    this._ipv6RaPreferredLifetime = config.ipv6RaPreferredLifetime;
    this._ipv6RaPriority = config.ipv6RaPriority;
    this._ipv6RaValidLifetime = config.ipv6RaValidLifetime;
    this._ipv6StaticSubnet = config.ipv6StaticSubnet;
    this._multicastDns = config.multicastDns;
    this._name = config.name;
    this._networkGroup = config.networkGroup;
    this._purpose = config.purpose;
    this._site = config.site;
    this._subnet = config.subnet;
    this._vlanId = config.vlanId;
    this._wanDhcpV6PdSize = config.wanDhcpV6PdSize;
    this._wanDns = config.wanDns;
    this._wanEgressQos = config.wanEgressQos;
    this._wanGateway = config.wanGateway;
    this._wanGatewayV6 = config.wanGatewayV6;
    this._wanIp = config.wanIp;
    this._wanIpv6 = config.wanIpv6;
    this._wanNetmask = config.wanNetmask;
    this._wanNetworkgroup = config.wanNetworkgroup;
    this._wanPrefixlen = config.wanPrefixlen;
    this._wanType = config.wanType;
    this._wanTypeV6 = config.wanTypeV6;
    this._wanUsername = config.wanUsername;
    this._xWanPassword = config.xWanPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_dns - computed: false, optional: true, required: false
  private _dhcpDns?: string[]; 
  public get dhcpDns() {
    return this.getListAttribute('dhcp_dns');
  }
  public set dhcpDns(value: string[]) {
    this._dhcpDns = value;
  }
  public resetDhcpDns() {
    this._dhcpDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDnsInput() {
    return this._dhcpDns;
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpEnabled() {
    return this.getBooleanAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dhcp_lease - computed: false, optional: true, required: false
  private _dhcpLease?: number; 
  public get dhcpLease() {
    return this.getNumberAttribute('dhcp_lease');
  }
  public set dhcpLease(value: number) {
    this._dhcpLease = value;
  }
  public resetDhcpLease() {
    this._dhcpLease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpLeaseInput() {
    return this._dhcpLease;
  }

  // dhcp_relay_enabled - computed: false, optional: true, required: false
  private _dhcpRelayEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpRelayEnabled() {
    return this.getBooleanAttribute('dhcp_relay_enabled');
  }
  public set dhcpRelayEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpRelayEnabled = value;
  }
  public resetDhcpRelayEnabled() {
    this._dhcpRelayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayEnabledInput() {
    return this._dhcpRelayEnabled;
  }

  // dhcp_start - computed: false, optional: true, required: false
  private _dhcpStart?: string; 
  public get dhcpStart() {
    return this.getStringAttribute('dhcp_start');
  }
  public set dhcpStart(value: string) {
    this._dhcpStart = value;
  }
  public resetDhcpStart() {
    this._dhcpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStartInput() {
    return this._dhcpStart;
  }

  // dhcp_stop - computed: false, optional: true, required: false
  private _dhcpStop?: string; 
  public get dhcpStop() {
    return this.getStringAttribute('dhcp_stop');
  }
  public set dhcpStop(value: string) {
    this._dhcpStop = value;
  }
  public resetDhcpStop() {
    this._dhcpStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStopInput() {
    return this._dhcpStop;
  }

  // dhcp_v6_dns - computed: false, optional: true, required: false
  private _dhcpV6Dns?: string[]; 
  public get dhcpV6Dns() {
    return this.getListAttribute('dhcp_v6_dns');
  }
  public set dhcpV6Dns(value: string[]) {
    this._dhcpV6Dns = value;
  }
  public resetDhcpV6Dns() {
    this._dhcpV6Dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6DnsInput() {
    return this._dhcpV6Dns;
  }

  // dhcp_v6_dns_auto - computed: false, optional: true, required: false
  private _dhcpV6DnsAuto?: boolean | cdktf.IResolvable; 
  public get dhcpV6DnsAuto() {
    return this.getBooleanAttribute('dhcp_v6_dns_auto');
  }
  public set dhcpV6DnsAuto(value: boolean | cdktf.IResolvable) {
    this._dhcpV6DnsAuto = value;
  }
  public resetDhcpV6DnsAuto() {
    this._dhcpV6DnsAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6DnsAutoInput() {
    return this._dhcpV6DnsAuto;
  }

  // dhcp_v6_enabled - computed: false, optional: true, required: false
  private _dhcpV6Enabled?: boolean | cdktf.IResolvable; 
  public get dhcpV6Enabled() {
    return this.getBooleanAttribute('dhcp_v6_enabled');
  }
  public set dhcpV6Enabled(value: boolean | cdktf.IResolvable) {
    this._dhcpV6Enabled = value;
  }
  public resetDhcpV6Enabled() {
    this._dhcpV6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6EnabledInput() {
    return this._dhcpV6Enabled;
  }

  // dhcp_v6_lease - computed: false, optional: true, required: false
  private _dhcpV6Lease?: number; 
  public get dhcpV6Lease() {
    return this.getNumberAttribute('dhcp_v6_lease');
  }
  public set dhcpV6Lease(value: number) {
    this._dhcpV6Lease = value;
  }
  public resetDhcpV6Lease() {
    this._dhcpV6Lease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6LeaseInput() {
    return this._dhcpV6Lease;
  }

  // dhcp_v6_start - computed: false, optional: true, required: false
  private _dhcpV6Start?: string; 
  public get dhcpV6Start() {
    return this.getStringAttribute('dhcp_v6_start');
  }
  public set dhcpV6Start(value: string) {
    this._dhcpV6Start = value;
  }
  public resetDhcpV6Start() {
    this._dhcpV6Start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6StartInput() {
    return this._dhcpV6Start;
  }

  // dhcp_v6_stop - computed: false, optional: true, required: false
  private _dhcpV6Stop?: string; 
  public get dhcpV6Stop() {
    return this.getStringAttribute('dhcp_v6_stop');
  }
  public set dhcpV6Stop(value: string) {
    this._dhcpV6Stop = value;
  }
  public resetDhcpV6Stop() {
    this._dhcpV6Stop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6StopInput() {
    return this._dhcpV6Stop;
  }

  // dhcpd_boot_enabled - computed: false, optional: true, required: false
  private _dhcpdBootEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpdBootEnabled() {
    return this.getBooleanAttribute('dhcpd_boot_enabled');
  }
  public set dhcpdBootEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpdBootEnabled = value;
  }
  public resetDhcpdBootEnabled() {
    this._dhcpdBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpdBootEnabledInput() {
    return this._dhcpdBootEnabled;
  }

  // dhcpd_boot_filename - computed: false, optional: true, required: false
  private _dhcpdBootFilename?: string; 
  public get dhcpdBootFilename() {
    return this.getStringAttribute('dhcpd_boot_filename');
  }
  public set dhcpdBootFilename(value: string) {
    this._dhcpdBootFilename = value;
  }
  public resetDhcpdBootFilename() {
    this._dhcpdBootFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpdBootFilenameInput() {
    return this._dhcpdBootFilename;
  }

  // dhcpd_boot_server - computed: false, optional: true, required: false
  private _dhcpdBootServer?: string; 
  public get dhcpdBootServer() {
    return this.getStringAttribute('dhcpd_boot_server');
  }
  public set dhcpdBootServer(value: string) {
    this._dhcpdBootServer = value;
  }
  public resetDhcpdBootServer() {
    this._dhcpdBootServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpdBootServerInput() {
    return this._dhcpdBootServer;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // igmp_snooping - computed: false, optional: true, required: false
  private _igmpSnooping?: boolean | cdktf.IResolvable; 
  public get igmpSnooping() {
    return this.getBooleanAttribute('igmp_snooping');
  }
  public set igmpSnooping(value: boolean | cdktf.IResolvable) {
    this._igmpSnooping = value;
  }
  public resetIgmpSnooping() {
    this._igmpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingInput() {
    return this._igmpSnooping;
  }

  // internet_access_enabled - computed: false, optional: true, required: false
  private _internetAccessEnabled?: boolean | cdktf.IResolvable; 
  public get internetAccessEnabled() {
    return this.getBooleanAttribute('internet_access_enabled');
  }
  public set internetAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._internetAccessEnabled = value;
  }
  public resetInternetAccessEnabled() {
    this._internetAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessEnabledInput() {
    return this._internetAccessEnabled;
  }

  // intra_network_access_enabled - computed: false, optional: true, required: false
  private _intraNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get intraNetworkAccessEnabled() {
    return this.getBooleanAttribute('intra_network_access_enabled');
  }
  public set intraNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._intraNetworkAccessEnabled = value;
  }
  public resetIntraNetworkAccessEnabled() {
    this._intraNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraNetworkAccessEnabledInput() {
    return this._intraNetworkAccessEnabled;
  }

  // ipv6_interface_type - computed: false, optional: true, required: false
  private _ipv6InterfaceType?: string; 
  public get ipv6InterfaceType() {
    return this.getStringAttribute('ipv6_interface_type');
  }
  public set ipv6InterfaceType(value: string) {
    this._ipv6InterfaceType = value;
  }
  public resetIpv6InterfaceType() {
    this._ipv6InterfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InterfaceTypeInput() {
    return this._ipv6InterfaceType;
  }

  // ipv6_pd_interface - computed: false, optional: true, required: false
  private _ipv6PdInterface?: string; 
  public get ipv6PdInterface() {
    return this.getStringAttribute('ipv6_pd_interface');
  }
  public set ipv6PdInterface(value: string) {
    this._ipv6PdInterface = value;
  }
  public resetIpv6PdInterface() {
    this._ipv6PdInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PdInterfaceInput() {
    return this._ipv6PdInterface;
  }

  // ipv6_pd_prefixid - computed: false, optional: true, required: false
  private _ipv6PdPrefixid?: string; 
  public get ipv6PdPrefixid() {
    return this.getStringAttribute('ipv6_pd_prefixid');
  }
  public set ipv6PdPrefixid(value: string) {
    this._ipv6PdPrefixid = value;
  }
  public resetIpv6PdPrefixid() {
    this._ipv6PdPrefixid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PdPrefixidInput() {
    return this._ipv6PdPrefixid;
  }

  // ipv6_pd_start - computed: false, optional: true, required: false
  private _ipv6PdStart?: string; 
  public get ipv6PdStart() {
    return this.getStringAttribute('ipv6_pd_start');
  }
  public set ipv6PdStart(value: string) {
    this._ipv6PdStart = value;
  }
  public resetIpv6PdStart() {
    this._ipv6PdStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PdStartInput() {
    return this._ipv6PdStart;
  }

  // ipv6_pd_stop - computed: false, optional: true, required: false
  private _ipv6PdStop?: string; 
  public get ipv6PdStop() {
    return this.getStringAttribute('ipv6_pd_stop');
  }
  public set ipv6PdStop(value: string) {
    this._ipv6PdStop = value;
  }
  public resetIpv6PdStop() {
    this._ipv6PdStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PdStopInput() {
    return this._ipv6PdStop;
  }

  // ipv6_ra_enable - computed: false, optional: true, required: false
  private _ipv6RaEnable?: boolean | cdktf.IResolvable; 
  public get ipv6RaEnable() {
    return this.getBooleanAttribute('ipv6_ra_enable');
  }
  public set ipv6RaEnable(value: boolean | cdktf.IResolvable) {
    this._ipv6RaEnable = value;
  }
  public resetIpv6RaEnable() {
    this._ipv6RaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RaEnableInput() {
    return this._ipv6RaEnable;
  }

  // ipv6_ra_preferred_lifetime - computed: false, optional: true, required: false
  private _ipv6RaPreferredLifetime?: number; 
  public get ipv6RaPreferredLifetime() {
    return this.getNumberAttribute('ipv6_ra_preferred_lifetime');
  }
  public set ipv6RaPreferredLifetime(value: number) {
    this._ipv6RaPreferredLifetime = value;
  }
  public resetIpv6RaPreferredLifetime() {
    this._ipv6RaPreferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RaPreferredLifetimeInput() {
    return this._ipv6RaPreferredLifetime;
  }

  // ipv6_ra_priority - computed: false, optional: true, required: false
  private _ipv6RaPriority?: string; 
  public get ipv6RaPriority() {
    return this.getStringAttribute('ipv6_ra_priority');
  }
  public set ipv6RaPriority(value: string) {
    this._ipv6RaPriority = value;
  }
  public resetIpv6RaPriority() {
    this._ipv6RaPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RaPriorityInput() {
    return this._ipv6RaPriority;
  }

  // ipv6_ra_valid_lifetime - computed: false, optional: true, required: false
  private _ipv6RaValidLifetime?: number; 
  public get ipv6RaValidLifetime() {
    return this.getNumberAttribute('ipv6_ra_valid_lifetime');
  }
  public set ipv6RaValidLifetime(value: number) {
    this._ipv6RaValidLifetime = value;
  }
  public resetIpv6RaValidLifetime() {
    this._ipv6RaValidLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RaValidLifetimeInput() {
    return this._ipv6RaValidLifetime;
  }

  // ipv6_static_subnet - computed: false, optional: true, required: false
  private _ipv6StaticSubnet?: string; 
  public get ipv6StaticSubnet() {
    return this.getStringAttribute('ipv6_static_subnet');
  }
  public set ipv6StaticSubnet(value: string) {
    this._ipv6StaticSubnet = value;
  }
  public resetIpv6StaticSubnet() {
    this._ipv6StaticSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StaticSubnetInput() {
    return this._ipv6StaticSubnet;
  }

  // multicast_dns - computed: false, optional: true, required: false
  private _multicastDns?: boolean | cdktf.IResolvable; 
  public get multicastDns() {
    return this.getBooleanAttribute('multicast_dns');
  }
  public set multicastDns(value: boolean | cdktf.IResolvable) {
    this._multicastDns = value;
  }
  public resetMulticastDns() {
    this._multicastDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastDnsInput() {
    return this._multicastDns;
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

  // network_group - computed: false, optional: true, required: false
  private _networkGroup?: string; 
  public get networkGroup() {
    return this.getStringAttribute('network_group');
  }
  public set networkGroup(value: string) {
    this._networkGroup = value;
  }
  public resetNetworkGroup() {
    this._networkGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkGroupInput() {
    return this._networkGroup;
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
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

  // vlan_id - computed: false, optional: true, required: false
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

  // wan_dhcp_v6_pd_size - computed: false, optional: true, required: false
  private _wanDhcpV6PdSize?: number; 
  public get wanDhcpV6PdSize() {
    return this.getNumberAttribute('wan_dhcp_v6_pd_size');
  }
  public set wanDhcpV6PdSize(value: number) {
    this._wanDhcpV6PdSize = value;
  }
  public resetWanDhcpV6PdSize() {
    this._wanDhcpV6PdSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanDhcpV6PdSizeInput() {
    return this._wanDhcpV6PdSize;
  }

  // wan_dns - computed: false, optional: true, required: false
  private _wanDns?: string[]; 
  public get wanDns() {
    return this.getListAttribute('wan_dns');
  }
  public set wanDns(value: string[]) {
    this._wanDns = value;
  }
  public resetWanDns() {
    this._wanDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanDnsInput() {
    return this._wanDns;
  }

  // wan_egress_qos - computed: false, optional: true, required: false
  private _wanEgressQos?: number; 
  public get wanEgressQos() {
    return this.getNumberAttribute('wan_egress_qos');
  }
  public set wanEgressQos(value: number) {
    this._wanEgressQos = value;
  }
  public resetWanEgressQos() {
    this._wanEgressQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanEgressQosInput() {
    return this._wanEgressQos;
  }

  // wan_gateway - computed: false, optional: true, required: false
  private _wanGateway?: string; 
  public get wanGateway() {
    return this.getStringAttribute('wan_gateway');
  }
  public set wanGateway(value: string) {
    this._wanGateway = value;
  }
  public resetWanGateway() {
    this._wanGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanGatewayInput() {
    return this._wanGateway;
  }

  // wan_gateway_v6 - computed: false, optional: true, required: false
  private _wanGatewayV6?: string; 
  public get wanGatewayV6() {
    return this.getStringAttribute('wan_gateway_v6');
  }
  public set wanGatewayV6(value: string) {
    this._wanGatewayV6 = value;
  }
  public resetWanGatewayV6() {
    this._wanGatewayV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanGatewayV6Input() {
    return this._wanGatewayV6;
  }

  // wan_ip - computed: false, optional: true, required: false
  private _wanIp?: string; 
  public get wanIp() {
    return this.getStringAttribute('wan_ip');
  }
  public set wanIp(value: string) {
    this._wanIp = value;
  }
  public resetWanIp() {
    this._wanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanIpInput() {
    return this._wanIp;
  }

  // wan_ipv6 - computed: false, optional: true, required: false
  private _wanIpv6?: string; 
  public get wanIpv6() {
    return this.getStringAttribute('wan_ipv6');
  }
  public set wanIpv6(value: string) {
    this._wanIpv6 = value;
  }
  public resetWanIpv6() {
    this._wanIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanIpv6Input() {
    return this._wanIpv6;
  }

  // wan_netmask - computed: false, optional: true, required: false
  private _wanNetmask?: string; 
  public get wanNetmask() {
    return this.getStringAttribute('wan_netmask');
  }
  public set wanNetmask(value: string) {
    this._wanNetmask = value;
  }
  public resetWanNetmask() {
    this._wanNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNetmaskInput() {
    return this._wanNetmask;
  }

  // wan_networkgroup - computed: false, optional: true, required: false
  private _wanNetworkgroup?: string; 
  public get wanNetworkgroup() {
    return this.getStringAttribute('wan_networkgroup');
  }
  public set wanNetworkgroup(value: string) {
    this._wanNetworkgroup = value;
  }
  public resetWanNetworkgroup() {
    this._wanNetworkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNetworkgroupInput() {
    return this._wanNetworkgroup;
  }

  // wan_prefixlen - computed: false, optional: true, required: false
  private _wanPrefixlen?: number; 
  public get wanPrefixlen() {
    return this.getNumberAttribute('wan_prefixlen');
  }
  public set wanPrefixlen(value: number) {
    this._wanPrefixlen = value;
  }
  public resetWanPrefixlen() {
    this._wanPrefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPrefixlenInput() {
    return this._wanPrefixlen;
  }

  // wan_type - computed: false, optional: true, required: false
  private _wanType?: string; 
  public get wanType() {
    return this.getStringAttribute('wan_type');
  }
  public set wanType(value: string) {
    this._wanType = value;
  }
  public resetWanType() {
    this._wanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanTypeInput() {
    return this._wanType;
  }

  // wan_type_v6 - computed: false, optional: true, required: false
  private _wanTypeV6?: string; 
  public get wanTypeV6() {
    return this.getStringAttribute('wan_type_v6');
  }
  public set wanTypeV6(value: string) {
    this._wanTypeV6 = value;
  }
  public resetWanTypeV6() {
    this._wanTypeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanTypeV6Input() {
    return this._wanTypeV6;
  }

  // wan_username - computed: false, optional: true, required: false
  private _wanUsername?: string; 
  public get wanUsername() {
    return this.getStringAttribute('wan_username');
  }
  public set wanUsername(value: string) {
    this._wanUsername = value;
  }
  public resetWanUsername() {
    this._wanUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanUsernameInput() {
    return this._wanUsername;
  }

  // x_wan_password - computed: false, optional: true, required: false
  private _xWanPassword?: string; 
  public get xWanPassword() {
    return this.getStringAttribute('x_wan_password');
  }
  public set xWanPassword(value: string) {
    this._xWanPassword = value;
  }
  public resetXWanPassword() {
    this._xWanPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xWanPasswordInput() {
    return this._xWanPassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpDns),
      dhcp_enabled: cdktf.booleanToTerraform(this._dhcpEnabled),
      dhcp_lease: cdktf.numberToTerraform(this._dhcpLease),
      dhcp_relay_enabled: cdktf.booleanToTerraform(this._dhcpRelayEnabled),
      dhcp_start: cdktf.stringToTerraform(this._dhcpStart),
      dhcp_stop: cdktf.stringToTerraform(this._dhcpStop),
      dhcp_v6_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpV6Dns),
      dhcp_v6_dns_auto: cdktf.booleanToTerraform(this._dhcpV6DnsAuto),
      dhcp_v6_enabled: cdktf.booleanToTerraform(this._dhcpV6Enabled),
      dhcp_v6_lease: cdktf.numberToTerraform(this._dhcpV6Lease),
      dhcp_v6_start: cdktf.stringToTerraform(this._dhcpV6Start),
      dhcp_v6_stop: cdktf.stringToTerraform(this._dhcpV6Stop),
      dhcpd_boot_enabled: cdktf.booleanToTerraform(this._dhcpdBootEnabled),
      dhcpd_boot_filename: cdktf.stringToTerraform(this._dhcpdBootFilename),
      dhcpd_boot_server: cdktf.stringToTerraform(this._dhcpdBootServer),
      domain_name: cdktf.stringToTerraform(this._domainName),
      igmp_snooping: cdktf.booleanToTerraform(this._igmpSnooping),
      internet_access_enabled: cdktf.booleanToTerraform(this._internetAccessEnabled),
      intra_network_access_enabled: cdktf.booleanToTerraform(this._intraNetworkAccessEnabled),
      ipv6_interface_type: cdktf.stringToTerraform(this._ipv6InterfaceType),
      ipv6_pd_interface: cdktf.stringToTerraform(this._ipv6PdInterface),
      ipv6_pd_prefixid: cdktf.stringToTerraform(this._ipv6PdPrefixid),
      ipv6_pd_start: cdktf.stringToTerraform(this._ipv6PdStart),
      ipv6_pd_stop: cdktf.stringToTerraform(this._ipv6PdStop),
      ipv6_ra_enable: cdktf.booleanToTerraform(this._ipv6RaEnable),
      ipv6_ra_preferred_lifetime: cdktf.numberToTerraform(this._ipv6RaPreferredLifetime),
      ipv6_ra_priority: cdktf.stringToTerraform(this._ipv6RaPriority),
      ipv6_ra_valid_lifetime: cdktf.numberToTerraform(this._ipv6RaValidLifetime),
      ipv6_static_subnet: cdktf.stringToTerraform(this._ipv6StaticSubnet),
      multicast_dns: cdktf.booleanToTerraform(this._multicastDns),
      name: cdktf.stringToTerraform(this._name),
      network_group: cdktf.stringToTerraform(this._networkGroup),
      purpose: cdktf.stringToTerraform(this._purpose),
      site: cdktf.stringToTerraform(this._site),
      subnet: cdktf.stringToTerraform(this._subnet),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      wan_dhcp_v6_pd_size: cdktf.numberToTerraform(this._wanDhcpV6PdSize),
      wan_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wanDns),
      wan_egress_qos: cdktf.numberToTerraform(this._wanEgressQos),
      wan_gateway: cdktf.stringToTerraform(this._wanGateway),
      wan_gateway_v6: cdktf.stringToTerraform(this._wanGatewayV6),
      wan_ip: cdktf.stringToTerraform(this._wanIp),
      wan_ipv6: cdktf.stringToTerraform(this._wanIpv6),
      wan_netmask: cdktf.stringToTerraform(this._wanNetmask),
      wan_networkgroup: cdktf.stringToTerraform(this._wanNetworkgroup),
      wan_prefixlen: cdktf.numberToTerraform(this._wanPrefixlen),
      wan_type: cdktf.stringToTerraform(this._wanType),
      wan_type_v6: cdktf.stringToTerraform(this._wanTypeV6),
      wan_username: cdktf.stringToTerraform(this._wanUsername),
      x_wan_password: cdktf.stringToTerraform(this._xWanPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpDns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dhcp_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_lease: {
        value: cdktf.numberToHclTerraform(this._dhcpLease),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_relay_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpRelayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_start: {
        value: cdktf.stringToHclTerraform(this._dhcpStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_stop: {
        value: cdktf.stringToHclTerraform(this._dhcpStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_v6_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpV6Dns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dhcp_v6_dns_auto: {
        value: cdktf.booleanToHclTerraform(this._dhcpV6DnsAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_v6_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpV6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_v6_lease: {
        value: cdktf.numberToHclTerraform(this._dhcpV6Lease),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_v6_start: {
        value: cdktf.stringToHclTerraform(this._dhcpV6Start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_v6_stop: {
        value: cdktf.stringToHclTerraform(this._dhcpV6Stop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcpd_boot_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpdBootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcpd_boot_filename: {
        value: cdktf.stringToHclTerraform(this._dhcpdBootFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcpd_boot_server: {
        value: cdktf.stringToHclTerraform(this._dhcpdBootServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping: {
        value: cdktf.booleanToHclTerraform(this._igmpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internet_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._internetAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      intra_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._intraNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_interface_type: {
        value: cdktf.stringToHclTerraform(this._ipv6InterfaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_pd_interface: {
        value: cdktf.stringToHclTerraform(this._ipv6PdInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_pd_prefixid: {
        value: cdktf.stringToHclTerraform(this._ipv6PdPrefixid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_pd_start: {
        value: cdktf.stringToHclTerraform(this._ipv6PdStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_pd_stop: {
        value: cdktf.stringToHclTerraform(this._ipv6PdStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ra_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6RaEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_ra_preferred_lifetime: {
        value: cdktf.numberToHclTerraform(this._ipv6RaPreferredLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_ra_priority: {
        value: cdktf.stringToHclTerraform(this._ipv6RaPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ra_valid_lifetime: {
        value: cdktf.numberToHclTerraform(this._ipv6RaValidLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_static_subnet: {
        value: cdktf.stringToHclTerraform(this._ipv6StaticSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_dns: {
        value: cdktf.booleanToHclTerraform(this._multicastDns),
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
      network_group: {
        value: cdktf.stringToHclTerraform(this._networkGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_dhcp_v6_pd_size: {
        value: cdktf.numberToHclTerraform(this._wanDhcpV6PdSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wanDns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wan_egress_qos: {
        value: cdktf.numberToHclTerraform(this._wanEgressQos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_gateway: {
        value: cdktf.stringToHclTerraform(this._wanGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_gateway_v6: {
        value: cdktf.stringToHclTerraform(this._wanGatewayV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_ip: {
        value: cdktf.stringToHclTerraform(this._wanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_ipv6: {
        value: cdktf.stringToHclTerraform(this._wanIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_netmask: {
        value: cdktf.stringToHclTerraform(this._wanNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_networkgroup: {
        value: cdktf.stringToHclTerraform(this._wanNetworkgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_prefixlen: {
        value: cdktf.numberToHclTerraform(this._wanPrefixlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_type: {
        value: cdktf.stringToHclTerraform(this._wanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_type_v6: {
        value: cdktf.stringToHclTerraform(this._wanTypeV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_username: {
        value: cdktf.stringToHclTerraform(this._wanUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_wan_password: {
        value: cdktf.stringToHclTerraform(this._xWanPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
