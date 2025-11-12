// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamIpv6NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * This flag controls whether reverse zones are automatically created when the network is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#auto_create_reversezone IpamIpv6Network#auto_create_reversezone}
  */
  readonly autoCreateReversezone?: boolean | cdktf.IResolvable;
  /**
  * Structure containing all cloud API related information for this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#cloud_info IpamIpv6Network#cloud_info}
  */
  readonly cloudInfo?: IpamIpv6NetworkCloudInfo;
  /**
  * Comment for the network; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#comment IpamIpv6Network#comment}
  */
  readonly comment?: string;
  /**
  * The dynamic DNS domain name the appliance uses specifically for DDNS updates for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ddns_domainname IpamIpv6Network#ddns_domainname}
  */
  readonly ddnsDomainname?: string;
  /**
  * Use this method to set or retrieve the ddns_enable_option_fqdn flag of a DHCP IPv6 Network object. This method controls whether the FQDN option sent by the client is to be used, or if the server can automatically generate the FQDN. This setting overrides the upper-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ddns_enable_option_fqdn IpamIpv6Network#ddns_enable_option_fqdn}
  */
  readonly ddnsEnableOptionFqdn?: boolean | cdktf.IResolvable;
  /**
  * If this field is set to True, the DHCP server generates a hostname and updates DNS with it when the DHCP client request does not contain a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ddns_generate_hostname IpamIpv6Network#ddns_generate_hostname}
  */
  readonly ddnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether only the DHCP server is allowed to update DNS, regardless of the DHCP clients requests. Note that changes for this field take effect only if ddns_enable_option_fqdn is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ddns_server_always_updates IpamIpv6Network#ddns_server_always_updates}
  */
  readonly ddnsServerAlwaysUpdates?: boolean | cdktf.IResolvable;
  /**
  * The DNS update Time to Live (TTL) value of a DHCP network object. The TTL is a 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ddns_ttl IpamIpv6Network#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * The reason for deleting the RIR registration request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#delete_reason IpamIpv6Network#delete_reason}
  */
  readonly deleteReason?: string;
  /**
  * Determines whether a network is disabled or not. When this is set to False, the network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#disable IpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Discovered bridge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#discovered_bridge_domain IpamIpv6Network#discovered_bridge_domain}
  */
  readonly discoveredBridgeDomain?: string;
  /**
  * Discovered tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#discovered_tenant IpamIpv6Network#discovered_tenant}
  */
  readonly discoveredTenant?: string;
  /**
  * The discovery basic poll settings for this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#discovery_basic_poll_settings IpamIpv6Network#discovery_basic_poll_settings}
  */
  readonly discoveryBasicPollSettings?: IpamIpv6NetworkDiscoveryBasicPollSettings;
  /**
  * The discovery blackout setting for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#discovery_blackout_setting IpamIpv6Network#discovery_blackout_setting}
  */
  readonly discoveryBlackoutSetting?: IpamIpv6NetworkDiscoveryBlackoutSetting;
  /**
  * The member that will run discovery for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#discovery_member IpamIpv6Network#discovery_member}
  */
  readonly discoveryMember?: string;
  /**
  * Use this method to set or retrieve the domain_name value of a DHCP IPv6 Network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#domain_name IpamIpv6Network#domain_name}
  */
  readonly domainName?: string;
  /**
  * Use this method to set or retrieve the dynamic DNS updates flag of a DHCP IPv6 Network object. The DHCP server can send DDNS updates to DNS servers in the same Grid and to external DNS servers. This setting overrides the member level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#domain_name_servers IpamIpv6Network#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * The dynamic DNS updates flag of a DHCP IPv6 network object. If set to True, the DHCP server sends DDNS updates to DNS servers in the same Grid, and to external DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#enable_ddns IpamIpv6Network#enable_ddns}
  */
  readonly enableDdns?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a discovery is enabled or not for this network. When this is set to False, the network discovery is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#enable_discovery IpamIpv6Network#enable_discovery}
  */
  readonly enableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Determines if IFMAP publishing is enabled for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#enable_ifmap_publishing IpamIpv6Network#enable_ifmap_publishing}
  */
  readonly enableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the network should be immediately enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#enable_immediate_discovery IpamIpv6Network#enable_immediate_discovery}
  */
  readonly enableImmediateDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#extattrs IpamIpv6Network#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This field contains the federated realms associated to this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#federated_realms IpamIpv6Network#federated_realms}
  */
  readonly federatedRealms?: IpamIpv6NetworkFederatedRealms[] | cdktf.IResolvable;
  /**
  * Specifies the function call to execute. The `next_available_network` function is supported for IPv6 Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#func_call IpamIpv6Network#func_call}
  */
  readonly funcCall?: IpamIpv6NetworkFuncCall;
  /**
  * This field contains the logic filters to be applied on this IPv6 network. This list corresponds to the match rules that are written to the DHCPv6 configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#logic_filter_rules IpamIpv6Network#logic_filter_rules}
  */
  readonly logicFilterRules?: IpamIpv6NetworkLogicFilterRules[] | cdktf.IResolvable;
  /**
  * A list of members servers that serve DHCP for the network. All members in the array must be of the same type. The struct type must be indicated in each element, by setting the "_struct" member to the struct type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#members IpamIpv6Network#members}
  */
  readonly members?: IpamIpv6NetworkMembers[] | cdktf.IResolvable;
  /**
  * This field controls whether this object is synchronized with the Multi-Grid Master. If this field is set to True, objects are not synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#mgm_private IpamIpv6Network#mgm_private}
  */
  readonly mgmPrivate?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 network address in CIDR notation. The network address must be unique within the network view. This field is `required` unless a `func_call` is specified to invoke `next_available_network`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#network IpamIpv6Network#network}
  */
  readonly network?: string;
  /**
  * The name of the network view in which this network resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#network_view IpamIpv6Network#network_view}
  */
  readonly networkView?: string;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object. The option `dhcp-lease-time` cannot be configured for this object and instead 'valid_lifetime' attribute should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#options IpamIpv6Network#options}
  */
  readonly options?: IpamIpv6NetworkOptions[] | cdktf.IResolvable;
  /**
  * The port control blackout setting for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#port_control_blackout_setting IpamIpv6Network#port_control_blackout_setting}
  */
  readonly portControlBlackoutSetting?: IpamIpv6NetworkPortControlBlackoutSetting;
  /**
  * Use this method to set or retrieve the preferred lifetime value of a DHCP IPv6 Network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#preferred_lifetime IpamIpv6Network#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * If the field is set to True, the leases are kept in the Recycle Bin until one week after expiration. Otherwise, the leases are permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#recycle_leases IpamIpv6Network#recycle_leases}
  */
  readonly recycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#restart_if_needed IpamIpv6Network#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The RIR organization associated with the IPv6 network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#rir_organization IpamIpv6Network#rir_organization}
  */
  readonly rirOrganization?: string;
  /**
  * The RIR registration action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#rir_registration_action IpamIpv6Network#rir_registration_action}
  */
  readonly rirRegistrationAction?: string;
  /**
  * The registration status of the IPv6 network in RIR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#rir_registration_status IpamIpv6Network#rir_registration_status}
  */
  readonly rirRegistrationStatus?: string;
  /**
  * If the field is set to True, the discovery blackout setting will be used for port control blackout setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#same_port_control_discovery_blackout IpamIpv6Network#same_port_control_discovery_blackout}
  */
  readonly samePortControlDiscoveryBlackout?: boolean | cdktf.IResolvable;
  /**
  * Determines whether to send the RIR registration request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#send_rir_request IpamIpv6Network#send_rir_request}
  */
  readonly sendRirRequest?: boolean | cdktf.IResolvable;
  /**
  * The DHCP IPv6 Network Cisco ISE subscribe settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#subscribe_settings IpamIpv6Network#subscribe_settings}
  */
  readonly subscribeSettings?: IpamIpv6NetworkSubscribeSettings;
  /**
  * Determines whether the DHCP IPv6 Network is unmanaged or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#unmanaged IpamIpv6Network#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether the DHCP server updates DNS when a DHCP lease is renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#update_dns_on_lease_renewal IpamIpv6Network#update_dns_on_lease_renewal}
  */
  readonly updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_blackout_setting , port_control_blackout_setting, same_port_control_discovery_blackout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_blackout_setting IpamIpv6Network#use_blackout_setting}
  */
  readonly useBlackoutSetting?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_domainname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_ddns_domainname IpamIpv6Network#use_ddns_domainname}
  */
  readonly useDdnsDomainname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_enable_option_fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_ddns_enable_option_fqdn IpamIpv6Network#use_ddns_enable_option_fqdn}
  */
  readonly useDdnsEnableOptionFqdn?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_generate_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_ddns_generate_hostname IpamIpv6Network#use_ddns_generate_hostname}
  */
  readonly useDdnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_ddns_ttl IpamIpv6Network#use_ddns_ttl}
  */
  readonly useDdnsTtl?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_basic_poll_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_discovery_basic_polling_settings IpamIpv6Network#use_discovery_basic_polling_settings}
  */
  readonly useDiscoveryBasicPollingSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_domain_name IpamIpv6Network#use_domain_name}
  */
  readonly useDomainName?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name_servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_domain_name_servers IpamIpv6Network#use_domain_name_servers}
  */
  readonly useDomainNameServers?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ddns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_enable_ddns IpamIpv6Network#use_enable_ddns}
  */
  readonly useEnableDdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_member , enable_discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_enable_discovery IpamIpv6Network#use_enable_discovery}
  */
  readonly useEnableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ifmap_publishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_enable_ifmap_publishing IpamIpv6Network#use_enable_ifmap_publishing}
  */
  readonly useEnableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_logic_filter_rules IpamIpv6Network#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: mgm_private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_mgm_private IpamIpv6Network#use_mgm_private}
  */
  readonly useMgmPrivate?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_options IpamIpv6Network#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: preferred_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_preferred_lifetime IpamIpv6Network#use_preferred_lifetime}
  */
  readonly usePreferredLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recycle_leases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_recycle_leases IpamIpv6Network#use_recycle_leases}
  */
  readonly useRecycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: subscribe_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_subscribe_settings IpamIpv6Network#use_subscribe_settings}
  */
  readonly useSubscribeSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: update_dns_on_lease_renewal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_update_dns_on_lease_renewal IpamIpv6Network#use_update_dns_on_lease_renewal}
  */
  readonly useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: valid_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_valid_lifetime IpamIpv6Network#use_valid_lifetime}
  */
  readonly useValidLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: zone_associations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_zone_associations IpamIpv6Network#use_zone_associations}
  */
  readonly useZoneAssociations?: boolean | cdktf.IResolvable;
  /**
  * Use this method to set or retrieve the valid lifetime value of a DHCP IPv6 Network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#valid_lifetime IpamIpv6Network#valid_lifetime}
  */
  readonly validLifetime?: number;
  /**
  * List of VLANs assigned to Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#vlans IpamIpv6Network#vlans}
  */
  readonly vlans?: IpamIpv6NetworkVlans[] | cdktf.IResolvable;
  /**
  * The list of zones associated with this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#zone_associations IpamIpv6Network#zone_associations}
  */
  readonly zoneAssociations?: IpamIpv6NetworkZoneAssociations[] | cdktf.IResolvable;
}
export interface IpamIpv6NetworkCloudInfoDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ipv4addr IpamIpv6Network#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ipv6addr IpamIpv6Network#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#name IpamIpv6Network#name}
  */
  readonly name?: string;
}

export function ipamIpv6NetworkCloudInfoDelegatedMemberToTerraform(struct?: IpamIpv6NetworkCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipamIpv6NetworkCloudInfoDelegatedMemberToHclTerraform(struct?: IpamIpv6NetworkCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkCloudInfoDelegatedMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkCloudInfoDelegatedMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
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
}
export interface IpamIpv6NetworkCloudInfo {
  /**
  * Contains information about the delegated member of the object. This is not set if the object is not delegated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#delegated_member IpamIpv6Network#delegated_member}
  */
  readonly delegatedMember?: IpamIpv6NetworkCloudInfoDelegatedMember;
}

export function ipamIpv6NetworkCloudInfoToTerraform(struct?: IpamIpv6NetworkCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_member: ipamIpv6NetworkCloudInfoDelegatedMemberToTerraform(struct!.delegatedMember),
  }
}


export function ipamIpv6NetworkCloudInfoToHclTerraform(struct?: IpamIpv6NetworkCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_member: {
      value: ipamIpv6NetworkCloudInfoDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpv6NetworkCloudInfoDelegatedMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkCloudInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegatedMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedMember = this._delegatedMember?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkCloudInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegatedMember.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegatedMember.internalValue = value.delegatedMember;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: true, required: false
  private _delegatedMember = new IpamIpv6NetworkCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: IpamIpv6NetworkCloudInfoDelegatedMember) {
    this._delegatedMember.internalValue = value;
  }
  public resetDelegatedMember() {
    this._delegatedMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedMemberInput() {
    return this._delegatedMember.internalValue;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}
export interface IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#day_of_month IpamIpv6Network#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#disable IpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#every IpamIpv6Network#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#frequency IpamIpv6Network#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#hour_of_day IpamIpv6Network#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#minutes_past_hour IpamIpv6Network#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#month IpamIpv6Network#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#recurring_time IpamIpv6Network#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#repeat IpamIpv6Network#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#time_zone IpamIpv6Network#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#weekdays IpamIpv6Network#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#year IpamIpv6Network#year}
  */
  readonly year?: number;
}

export function ipamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct?: IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function ipamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct?: IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
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

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface IpamIpv6NetworkDiscoveryBasicPollSettings {
  /**
  * Determines whether auto ARP refresh before switch port polling is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#auto_arp_refresh_before_switch_port_polling IpamIpv6Network#auto_arp_refresh_before_switch_port_polling}
  */
  readonly autoArpRefreshBeforeSwitchPortPolling?: boolean | cdktf.IResolvable;
  /**
  * Determines whether CLI collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#cli_collection IpamIpv6Network#cli_collection}
  */
  readonly cliCollection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether complete ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#complete_ping_sweep IpamIpv6Network#complete_ping_sweep}
  */
  readonly completePingSweep?: boolean | cdktf.IResolvable;
  /**
  * Credential group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#credential_group IpamIpv6Network#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * Determines whether device profile is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#device_profile IpamIpv6Network#device_profile}
  */
  readonly deviceProfile?: boolean | cdktf.IResolvable;
  /**
  * Determines whether netbios scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#netbios_scanning IpamIpv6Network#netbios_scanning}
  */
  readonly netbiosScanning?: boolean | cdktf.IResolvable;
  /**
  * Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#polling_frequency_modifier IpamIpv6Network#polling_frequency_modifier}
  */
  readonly pollingFrequencyModifier?: string;
  /**
  * Determines whether port scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#port_scanning IpamIpv6Network#port_scanning}
  */
  readonly portScanning?: boolean | cdktf.IResolvable;
  /**
  * Determines whether smart subnet ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#smart_subnet_ping_sweep IpamIpv6Network#smart_subnet_ping_sweep}
  */
  readonly smartSubnetPingSweep?: boolean | cdktf.IResolvable;
  /**
  * Determines whether SNMP collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#snmp_collection IpamIpv6Network#snmp_collection}
  */
  readonly snmpCollection?: boolean | cdktf.IResolvable;
  /**
  * A switch port data collection polling mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#switch_port_data_collection_polling IpamIpv6Network#switch_port_data_collection_polling}
  */
  readonly switchPortDataCollectionPolling?: string;
  /**
  * Indicates the interval for switch port data collection polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#switch_port_data_collection_polling_interval IpamIpv6Network#switch_port_data_collection_polling_interval}
  */
  readonly switchPortDataCollectionPollingInterval?: number;
  /**
  * A switch port data collection polling schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#switch_port_data_collection_polling_schedule IpamIpv6Network#switch_port_data_collection_polling_schedule}
  */
  readonly switchPortDataCollectionPollingSchedule?: IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule;
  /**
  * Use Global Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_global_polling_frequency_modifier IpamIpv6Network#use_global_polling_frequency_modifier}
  */
  readonly useGlobalPollingFrequencyModifier?: boolean | cdktf.IResolvable;
}

export function ipamIpv6NetworkDiscoveryBasicPollSettingsToTerraform(struct?: IpamIpv6NetworkDiscoveryBasicPollSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_arp_refresh_before_switch_port_polling: cdktf.booleanToTerraform(struct!.autoArpRefreshBeforeSwitchPortPolling),
    cli_collection: cdktf.booleanToTerraform(struct!.cliCollection),
    complete_ping_sweep: cdktf.booleanToTerraform(struct!.completePingSweep),
    credential_group: cdktf.stringToTerraform(struct!.credentialGroup),
    device_profile: cdktf.booleanToTerraform(struct!.deviceProfile),
    netbios_scanning: cdktf.booleanToTerraform(struct!.netbiosScanning),
    polling_frequency_modifier: cdktf.stringToTerraform(struct!.pollingFrequencyModifier),
    port_scanning: cdktf.booleanToTerraform(struct!.portScanning),
    smart_subnet_ping_sweep: cdktf.booleanToTerraform(struct!.smartSubnetPingSweep),
    snmp_collection: cdktf.booleanToTerraform(struct!.snmpCollection),
    switch_port_data_collection_polling: cdktf.stringToTerraform(struct!.switchPortDataCollectionPolling),
    switch_port_data_collection_polling_interval: cdktf.numberToTerraform(struct!.switchPortDataCollectionPollingInterval),
    switch_port_data_collection_polling_schedule: ipamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct!.switchPortDataCollectionPollingSchedule),
    use_global_polling_frequency_modifier: cdktf.booleanToTerraform(struct!.useGlobalPollingFrequencyModifier),
  }
}


export function ipamIpv6NetworkDiscoveryBasicPollSettingsToHclTerraform(struct?: IpamIpv6NetworkDiscoveryBasicPollSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_arp_refresh_before_switch_port_polling: {
      value: cdktf.booleanToHclTerraform(struct!.autoArpRefreshBeforeSwitchPortPolling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cli_collection: {
      value: cdktf.booleanToHclTerraform(struct!.cliCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    complete_ping_sweep: {
      value: cdktf.booleanToHclTerraform(struct!.completePingSweep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credential_group: {
      value: cdktf.stringToHclTerraform(struct!.credentialGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_profile: {
      value: cdktf.booleanToHclTerraform(struct!.deviceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netbios_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.netbiosScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    polling_frequency_modifier: {
      value: cdktf.stringToHclTerraform(struct!.pollingFrequencyModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.portScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smart_subnet_ping_sweep: {
      value: cdktf.booleanToHclTerraform(struct!.smartSubnetPingSweep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snmp_collection: {
      value: cdktf.booleanToHclTerraform(struct!.snmpCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    switch_port_data_collection_polling: {
      value: cdktf.stringToHclTerraform(struct!.switchPortDataCollectionPolling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_port_data_collection_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.switchPortDataCollectionPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_port_data_collection_polling_schedule: {
      value: ipamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct!.switchPortDataCollectionPollingSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule",
    },
    use_global_polling_frequency_modifier: {
      value: cdktf.booleanToHclTerraform(struct!.useGlobalPollingFrequencyModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkDiscoveryBasicPollSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkDiscoveryBasicPollSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoArpRefreshBeforeSwitchPortPolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoArpRefreshBeforeSwitchPortPolling = this._autoArpRefreshBeforeSwitchPortPolling;
    }
    if (this._cliCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliCollection = this._cliCollection;
    }
    if (this._completePingSweep !== undefined) {
      hasAnyValues = true;
      internalValueResult.completePingSweep = this._completePingSweep;
    }
    if (this._credentialGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialGroup = this._credentialGroup;
    }
    if (this._deviceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceProfile = this._deviceProfile;
    }
    if (this._netbiosScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.netbiosScanning = this._netbiosScanning;
    }
    if (this._pollingFrequencyModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingFrequencyModifier = this._pollingFrequencyModifier;
    }
    if (this._portScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.portScanning = this._portScanning;
    }
    if (this._smartSubnetPingSweep !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartSubnetPingSweep = this._smartSubnetPingSweep;
    }
    if (this._snmpCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpCollection = this._snmpCollection;
    }
    if (this._switchPortDataCollectionPolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortDataCollectionPolling = this._switchPortDataCollectionPolling;
    }
    if (this._switchPortDataCollectionPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortDataCollectionPollingInterval = this._switchPortDataCollectionPollingInterval;
    }
    if (this._switchPortDataCollectionPollingSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortDataCollectionPollingSchedule = this._switchPortDataCollectionPollingSchedule?.internalValue;
    }
    if (this._useGlobalPollingFrequencyModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGlobalPollingFrequencyModifier = this._useGlobalPollingFrequencyModifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkDiscoveryBasicPollSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoArpRefreshBeforeSwitchPortPolling = undefined;
      this._cliCollection = undefined;
      this._completePingSweep = undefined;
      this._credentialGroup = undefined;
      this._deviceProfile = undefined;
      this._netbiosScanning = undefined;
      this._pollingFrequencyModifier = undefined;
      this._portScanning = undefined;
      this._smartSubnetPingSweep = undefined;
      this._snmpCollection = undefined;
      this._switchPortDataCollectionPolling = undefined;
      this._switchPortDataCollectionPollingInterval = undefined;
      this._switchPortDataCollectionPollingSchedule.internalValue = undefined;
      this._useGlobalPollingFrequencyModifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoArpRefreshBeforeSwitchPortPolling = value.autoArpRefreshBeforeSwitchPortPolling;
      this._cliCollection = value.cliCollection;
      this._completePingSweep = value.completePingSweep;
      this._credentialGroup = value.credentialGroup;
      this._deviceProfile = value.deviceProfile;
      this._netbiosScanning = value.netbiosScanning;
      this._pollingFrequencyModifier = value.pollingFrequencyModifier;
      this._portScanning = value.portScanning;
      this._smartSubnetPingSweep = value.smartSubnetPingSweep;
      this._snmpCollection = value.snmpCollection;
      this._switchPortDataCollectionPolling = value.switchPortDataCollectionPolling;
      this._switchPortDataCollectionPollingInterval = value.switchPortDataCollectionPollingInterval;
      this._switchPortDataCollectionPollingSchedule.internalValue = value.switchPortDataCollectionPollingSchedule;
      this._useGlobalPollingFrequencyModifier = value.useGlobalPollingFrequencyModifier;
    }
  }

  // auto_arp_refresh_before_switch_port_polling - computed: true, optional: true, required: false
  private _autoArpRefreshBeforeSwitchPortPolling?: boolean | cdktf.IResolvable; 
  public get autoArpRefreshBeforeSwitchPortPolling() {
    return this.getBooleanAttribute('auto_arp_refresh_before_switch_port_polling');
  }
  public set autoArpRefreshBeforeSwitchPortPolling(value: boolean | cdktf.IResolvable) {
    this._autoArpRefreshBeforeSwitchPortPolling = value;
  }
  public resetAutoArpRefreshBeforeSwitchPortPolling() {
    this._autoArpRefreshBeforeSwitchPortPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoArpRefreshBeforeSwitchPortPollingInput() {
    return this._autoArpRefreshBeforeSwitchPortPolling;
  }

  // cli_collection - computed: true, optional: true, required: false
  private _cliCollection?: boolean | cdktf.IResolvable; 
  public get cliCollection() {
    return this.getBooleanAttribute('cli_collection');
  }
  public set cliCollection(value: boolean | cdktf.IResolvable) {
    this._cliCollection = value;
  }
  public resetCliCollection() {
    this._cliCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCollectionInput() {
    return this._cliCollection;
  }

  // complete_ping_sweep - computed: true, optional: true, required: false
  private _completePingSweep?: boolean | cdktf.IResolvable; 
  public get completePingSweep() {
    return this.getBooleanAttribute('complete_ping_sweep');
  }
  public set completePingSweep(value: boolean | cdktf.IResolvable) {
    this._completePingSweep = value;
  }
  public resetCompletePingSweep() {
    this._completePingSweep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completePingSweepInput() {
    return this._completePingSweep;
  }

  // credential_group - computed: true, optional: true, required: false
  private _credentialGroup?: string; 
  public get credentialGroup() {
    return this.getStringAttribute('credential_group');
  }
  public set credentialGroup(value: string) {
    this._credentialGroup = value;
  }
  public resetCredentialGroup() {
    this._credentialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialGroupInput() {
    return this._credentialGroup;
  }

  // device_profile - computed: true, optional: true, required: false
  private _deviceProfile?: boolean | cdktf.IResolvable; 
  public get deviceProfile() {
    return this.getBooleanAttribute('device_profile');
  }
  public set deviceProfile(value: boolean | cdktf.IResolvable) {
    this._deviceProfile = value;
  }
  public resetDeviceProfile() {
    this._deviceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceProfileInput() {
    return this._deviceProfile;
  }

  // netbios_scanning - computed: true, optional: true, required: false
  private _netbiosScanning?: boolean | cdktf.IResolvable; 
  public get netbiosScanning() {
    return this.getBooleanAttribute('netbios_scanning');
  }
  public set netbiosScanning(value: boolean | cdktf.IResolvable) {
    this._netbiosScanning = value;
  }
  public resetNetbiosScanning() {
    this._netbiosScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosScanningInput() {
    return this._netbiosScanning;
  }

  // polling_frequency_modifier - computed: true, optional: true, required: false
  private _pollingFrequencyModifier?: string; 
  public get pollingFrequencyModifier() {
    return this.getStringAttribute('polling_frequency_modifier');
  }
  public set pollingFrequencyModifier(value: string) {
    this._pollingFrequencyModifier = value;
  }
  public resetPollingFrequencyModifier() {
    this._pollingFrequencyModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingFrequencyModifierInput() {
    return this._pollingFrequencyModifier;
  }

  // port_scanning - computed: true, optional: true, required: false
  private _portScanning?: boolean | cdktf.IResolvable; 
  public get portScanning() {
    return this.getBooleanAttribute('port_scanning');
  }
  public set portScanning(value: boolean | cdktf.IResolvable) {
    this._portScanning = value;
  }
  public resetPortScanning() {
    this._portScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanningInput() {
    return this._portScanning;
  }

  // smart_subnet_ping_sweep - computed: true, optional: true, required: false
  private _smartSubnetPingSweep?: boolean | cdktf.IResolvable; 
  public get smartSubnetPingSweep() {
    return this.getBooleanAttribute('smart_subnet_ping_sweep');
  }
  public set smartSubnetPingSweep(value: boolean | cdktf.IResolvable) {
    this._smartSubnetPingSweep = value;
  }
  public resetSmartSubnetPingSweep() {
    this._smartSubnetPingSweep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartSubnetPingSweepInput() {
    return this._smartSubnetPingSweep;
  }

  // snmp_collection - computed: true, optional: true, required: false
  private _snmpCollection?: boolean | cdktf.IResolvable; 
  public get snmpCollection() {
    return this.getBooleanAttribute('snmp_collection');
  }
  public set snmpCollection(value: boolean | cdktf.IResolvable) {
    this._snmpCollection = value;
  }
  public resetSnmpCollection() {
    this._snmpCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCollectionInput() {
    return this._snmpCollection;
  }

  // switch_port_data_collection_polling - computed: true, optional: true, required: false
  private _switchPortDataCollectionPolling?: string; 
  public get switchPortDataCollectionPolling() {
    return this.getStringAttribute('switch_port_data_collection_polling');
  }
  public set switchPortDataCollectionPolling(value: string) {
    this._switchPortDataCollectionPolling = value;
  }
  public resetSwitchPortDataCollectionPolling() {
    this._switchPortDataCollectionPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortDataCollectionPollingInput() {
    return this._switchPortDataCollectionPolling;
  }

  // switch_port_data_collection_polling_interval - computed: true, optional: true, required: false
  private _switchPortDataCollectionPollingInterval?: number; 
  public get switchPortDataCollectionPollingInterval() {
    return this.getNumberAttribute('switch_port_data_collection_polling_interval');
  }
  public set switchPortDataCollectionPollingInterval(value: number) {
    this._switchPortDataCollectionPollingInterval = value;
  }
  public resetSwitchPortDataCollectionPollingInterval() {
    this._switchPortDataCollectionPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortDataCollectionPollingIntervalInput() {
    return this._switchPortDataCollectionPollingInterval;
  }

  // switch_port_data_collection_polling_schedule - computed: true, optional: true, required: false
  private _switchPortDataCollectionPollingSchedule = new IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference(this, "switch_port_data_collection_polling_schedule");
  public get switchPortDataCollectionPollingSchedule() {
    return this._switchPortDataCollectionPollingSchedule;
  }
  public putSwitchPortDataCollectionPollingSchedule(value: IpamIpv6NetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule) {
    this._switchPortDataCollectionPollingSchedule.internalValue = value;
  }
  public resetSwitchPortDataCollectionPollingSchedule() {
    this._switchPortDataCollectionPollingSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortDataCollectionPollingScheduleInput() {
    return this._switchPortDataCollectionPollingSchedule.internalValue;
  }

  // use_global_polling_frequency_modifier - computed: true, optional: true, required: false
  private _useGlobalPollingFrequencyModifier?: boolean | cdktf.IResolvable; 
  public get useGlobalPollingFrequencyModifier() {
    return this.getBooleanAttribute('use_global_polling_frequency_modifier');
  }
  public set useGlobalPollingFrequencyModifier(value: boolean | cdktf.IResolvable) {
    this._useGlobalPollingFrequencyModifier = value;
  }
  public resetUseGlobalPollingFrequencyModifier() {
    this._useGlobalPollingFrequencyModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalPollingFrequencyModifierInput() {
    return this._useGlobalPollingFrequencyModifier;
  }
}
export interface IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#day_of_month IpamIpv6Network#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#disable IpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#every IpamIpv6Network#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#frequency IpamIpv6Network#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#hour_of_day IpamIpv6Network#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#minutes_past_hour IpamIpv6Network#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#month IpamIpv6Network#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#recurring_time IpamIpv6Network#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#repeat IpamIpv6Network#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#time_zone IpamIpv6Network#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#weekdays IpamIpv6Network#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#year IpamIpv6Network#year}
  */
  readonly year?: number;
}

export function ipamIpv6NetworkDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct?: IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function ipamIpv6NetworkDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct?: IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
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

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface IpamIpv6NetworkDiscoveryBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#blackout_duration IpamIpv6Network#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * A Schedule Setting struct that determines blackout schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#blackout_schedule IpamIpv6Network#blackout_schedule}
  */
  readonly blackoutSchedule?: IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#enable_blackout IpamIpv6Network#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function ipamIpv6NetworkDiscoveryBlackoutSettingToTerraform(struct?: IpamIpv6NetworkDiscoveryBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: ipamIpv6NetworkDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function ipamIpv6NetworkDiscoveryBlackoutSettingToHclTerraform(struct?: IpamIpv6NetworkDiscoveryBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blackout_duration: {
      value: cdktf.numberToHclTerraform(struct!.blackoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blackout_schedule: {
      value: ipamIpv6NetworkDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule",
    },
    enable_blackout: {
      value: cdktf.booleanToHclTerraform(struct!.enableBlackout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkDiscoveryBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkDiscoveryBlackoutSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutDuration = this._blackoutDuration;
    }
    if (this._blackoutSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutSchedule = this._blackoutSchedule?.internalValue;
    }
    if (this._enableBlackout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBlackout = this._enableBlackout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkDiscoveryBlackoutSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackoutDuration = undefined;
      this._blackoutSchedule.internalValue = undefined;
      this._enableBlackout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackoutDuration = value.blackoutDuration;
      this._blackoutSchedule.internalValue = value.blackoutSchedule;
      this._enableBlackout = value.enableBlackout;
    }
  }

  // blackout_duration - computed: true, optional: true, required: false
  private _blackoutDuration?: number; 
  public get blackoutDuration() {
    return this.getNumberAttribute('blackout_duration');
  }
  public set blackoutDuration(value: number) {
    this._blackoutDuration = value;
  }
  public resetBlackoutDuration() {
    this._blackoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutDurationInput() {
    return this._blackoutDuration;
  }

  // blackout_schedule - computed: true, optional: true, required: false
  private _blackoutSchedule = new IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: IpamIpv6NetworkDiscoveryBlackoutSettingBlackoutSchedule) {
    this._blackoutSchedule.internalValue = value;
  }
  public resetBlackoutSchedule() {
    this._blackoutSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutScheduleInput() {
    return this._blackoutSchedule.internalValue;
  }

  // enable_blackout - computed: true, optional: true, required: false
  private _enableBlackout?: boolean | cdktf.IResolvable; 
  public get enableBlackout() {
    return this.getBooleanAttribute('enable_blackout');
  }
  public set enableBlackout(value: boolean | cdktf.IResolvable) {
    this._enableBlackout = value;
  }
  public resetEnableBlackout() {
    this._enableBlackout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlackoutInput() {
    return this._enableBlackout;
  }
}
export interface IpamIpv6NetworkFederatedRealms {
  /**
  * The federated realm id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#id IpamIpv6Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The federated realm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#name IpamIpv6Network#name}
  */
  readonly name: string;
}

export function ipamIpv6NetworkFederatedRealmsToTerraform(struct?: IpamIpv6NetworkFederatedRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipamIpv6NetworkFederatedRealmsToHclTerraform(struct?: IpamIpv6NetworkFederatedRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkFederatedRealmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpv6NetworkFederatedRealms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkFederatedRealms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class IpamIpv6NetworkFederatedRealmsList extends cdktf.ComplexList {
  public internalValue? : IpamIpv6NetworkFederatedRealms[] | cdktf.IResolvable

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
  public get(index: number): IpamIpv6NetworkFederatedRealmsOutputReference {
    return new IpamIpv6NetworkFederatedRealmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpv6NetworkFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#attribute_name IpamIpv6Network#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#object IpamIpv6Network#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#object_function IpamIpv6Network#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#object_parameters IpamIpv6Network#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#parameters IpamIpv6Network#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#result_field IpamIpv6Network#result_field}
  */
  readonly resultField?: string;
}

export function ipamIpv6NetworkFuncCallToTerraform(struct?: IpamIpv6NetworkFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    object: cdktf.stringToTerraform(struct!.object),
    object_function: cdktf.stringToTerraform(struct!.objectFunction),
    object_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.objectParameters),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    result_field: cdktf.stringToTerraform(struct!.resultField),
  }
}


export function ipamIpv6NetworkFuncCallToHclTerraform(struct?: IpamIpv6NetworkFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_function: {
      value: cdktf.stringToHclTerraform(struct!.objectFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.objectParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    result_field: {
      value: cdktf.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkFuncCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFunction = this._objectFunction;
    }
    if (this._objectParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectParameters = this._objectParameters;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkFuncCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._object = undefined;
      this._objectFunction = undefined;
      this._objectParameters = undefined;
      this._parameters = undefined;
      this._resultField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._object = value.object;
      this._objectFunction = value.objectFunction;
      this._objectParameters = value.objectParameters;
      this._parameters = value.parameters;
      this._resultField = value.resultField;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_function - computed: true, optional: true, required: false
  private _objectFunction?: string; 
  public get objectFunction() {
    return this.getStringAttribute('object_function');
  }
  public set objectFunction(value: string) {
    this._objectFunction = value;
  }
  public resetObjectFunction() {
    this._objectFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFunctionInput() {
    return this._objectFunction;
  }

  // object_parameters - computed: true, optional: true, required: false
  private _objectParameters?: { [key: string]: string }; 
  public get objectParameters() {
    return this.getStringMapAttribute('object_parameters');
  }
  public set objectParameters(value: { [key: string]: string }) {
    this._objectParameters = value;
  }
  public resetObjectParameters() {
    this._objectParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectParametersInput() {
    return this._objectParameters;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface IpamIpv6NetworkLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#filter IpamIpv6Network#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#type IpamIpv6Network#type}
  */
  readonly type: string;
}

export function ipamIpv6NetworkLogicFilterRulesToTerraform(struct?: IpamIpv6NetworkLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamIpv6NetworkLogicFilterRulesToHclTerraform(struct?: IpamIpv6NetworkLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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

export class IpamIpv6NetworkLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpv6NetworkLogicFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkLogicFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._type = value.type;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class IpamIpv6NetworkLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : IpamIpv6NetworkLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): IpamIpv6NetworkLogicFilterRulesOutputReference {
    return new IpamIpv6NetworkLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpv6NetworkMembers {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ipv4addr IpamIpv6Network#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#ipv6addr IpamIpv6Network#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#name IpamIpv6Network#name}
  */
  readonly name?: string;
}

export function ipamIpv6NetworkMembersToTerraform(struct?: IpamIpv6NetworkMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipamIpv6NetworkMembersToHclTerraform(struct?: IpamIpv6NetworkMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpv6NetworkMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
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
}

export class IpamIpv6NetworkMembersList extends cdktf.ComplexList {
  public internalValue? : IpamIpv6NetworkMembers[] | cdktf.IResolvable

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
  public get(index: number): IpamIpv6NetworkMembersOutputReference {
    return new IpamIpv6NetworkMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpv6NetworkMsAdUserData {
}

export function ipamIpv6NetworkMsAdUserDataToTerraform(struct?: IpamIpv6NetworkMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamIpv6NetworkMsAdUserDataToHclTerraform(struct?: IpamIpv6NetworkMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamIpv6NetworkMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkMsAdUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface IpamIpv6NetworkOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#name IpamIpv6Network#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#num IpamIpv6Network#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#use_option IpamIpv6Network#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#value IpamIpv6Network#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#vendor_class IpamIpv6Network#vendor_class}
  */
  readonly vendorClass?: string;
}

export function ipamIpv6NetworkOptionsToTerraform(struct?: IpamIpv6NetworkOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function ipamIpv6NetworkOptionsToHclTerraform(struct?: IpamIpv6NetworkOptions | cdktf.IResolvable): any {
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
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpv6NetworkOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
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

  // num - computed: true, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: true, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
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

  // vendor_class - computed: true, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class IpamIpv6NetworkOptionsList extends cdktf.ComplexList {
  public internalValue? : IpamIpv6NetworkOptions[] | cdktf.IResolvable

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
  public get(index: number): IpamIpv6NetworkOptionsOutputReference {
    return new IpamIpv6NetworkOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#day_of_month IpamIpv6Network#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#disable IpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#every IpamIpv6Network#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#frequency IpamIpv6Network#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#hour_of_day IpamIpv6Network#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#minutes_past_hour IpamIpv6Network#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#month IpamIpv6Network#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#recurring_time IpamIpv6Network#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#repeat IpamIpv6Network#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#time_zone IpamIpv6Network#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#weekdays IpamIpv6Network#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#year IpamIpv6Network#year}
  */
  readonly year?: number;
}

export function ipamIpv6NetworkPortControlBlackoutSettingBlackoutScheduleToTerraform(struct?: IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function ipamIpv6NetworkPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct?: IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkPortControlBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
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

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface IpamIpv6NetworkPortControlBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#blackout_duration IpamIpv6Network#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * A Schedule Setting struct that determines blackout schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#blackout_schedule IpamIpv6Network#blackout_schedule}
  */
  readonly blackoutSchedule?: IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#enable_blackout IpamIpv6Network#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function ipamIpv6NetworkPortControlBlackoutSettingToTerraform(struct?: IpamIpv6NetworkPortControlBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: ipamIpv6NetworkPortControlBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function ipamIpv6NetworkPortControlBlackoutSettingToHclTerraform(struct?: IpamIpv6NetworkPortControlBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blackout_duration: {
      value: cdktf.numberToHclTerraform(struct!.blackoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blackout_schedule: {
      value: ipamIpv6NetworkPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule",
    },
    enable_blackout: {
      value: cdktf.booleanToHclTerraform(struct!.enableBlackout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkPortControlBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkPortControlBlackoutSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutDuration = this._blackoutDuration;
    }
    if (this._blackoutSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutSchedule = this._blackoutSchedule?.internalValue;
    }
    if (this._enableBlackout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBlackout = this._enableBlackout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkPortControlBlackoutSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackoutDuration = undefined;
      this._blackoutSchedule.internalValue = undefined;
      this._enableBlackout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackoutDuration = value.blackoutDuration;
      this._blackoutSchedule.internalValue = value.blackoutSchedule;
      this._enableBlackout = value.enableBlackout;
    }
  }

  // blackout_duration - computed: true, optional: true, required: false
  private _blackoutDuration?: number; 
  public get blackoutDuration() {
    return this.getNumberAttribute('blackout_duration');
  }
  public set blackoutDuration(value: number) {
    this._blackoutDuration = value;
  }
  public resetBlackoutDuration() {
    this._blackoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutDurationInput() {
    return this._blackoutDuration;
  }

  // blackout_schedule - computed: true, optional: true, required: false
  private _blackoutSchedule = new IpamIpv6NetworkPortControlBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: IpamIpv6NetworkPortControlBlackoutSettingBlackoutSchedule) {
    this._blackoutSchedule.internalValue = value;
  }
  public resetBlackoutSchedule() {
    this._blackoutSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutScheduleInput() {
    return this._blackoutSchedule.internalValue;
  }

  // enable_blackout - computed: true, optional: true, required: false
  private _enableBlackout?: boolean | cdktf.IResolvable; 
  public get enableBlackout() {
    return this.getBooleanAttribute('enable_blackout');
  }
  public set enableBlackout(value: boolean | cdktf.IResolvable) {
    this._enableBlackout = value;
  }
  public resetEnableBlackout() {
    this._enableBlackout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlackoutInput() {
    return this._enableBlackout;
  }
}
export interface IpamIpv6NetworkSubscribeSettingsMappedEaAttributes {
  /**
  * The name of the extensible attribute definition object the Cisco ISE attribute that is enabled for subscription is mapped on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#mapped_ea IpamIpv6Network#mapped_ea}
  */
  readonly mappedEa?: string;
  /**
  * The Cisco ISE attribute name that is enabled for publishsing from a Cisco ISE endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#name IpamIpv6Network#name}
  */
  readonly name?: string;
}

export function ipamIpv6NetworkSubscribeSettingsMappedEaAttributesToTerraform(struct?: IpamIpv6NetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapped_ea: cdktf.stringToTerraform(struct!.mappedEa),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipamIpv6NetworkSubscribeSettingsMappedEaAttributesToHclTerraform(struct?: IpamIpv6NetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapped_ea: {
      value: cdktf.stringToHclTerraform(struct!.mappedEa),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkSubscribeSettingsMappedEaAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpv6NetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappedEa !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedEa = this._mappedEa;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappedEa = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappedEa = value.mappedEa;
      this._name = value.name;
    }
  }

  // mapped_ea - computed: true, optional: true, required: false
  private _mappedEa?: string; 
  public get mappedEa() {
    return this.getStringAttribute('mapped_ea');
  }
  public set mappedEa(value: string) {
    this._mappedEa = value;
  }
  public resetMappedEa() {
    this._mappedEa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedEaInput() {
    return this._mappedEa;
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
}

export class IpamIpv6NetworkSubscribeSettingsMappedEaAttributesList extends cdktf.ComplexList {
  public internalValue? : IpamIpv6NetworkSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable

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
  public get(index: number): IpamIpv6NetworkSubscribeSettingsMappedEaAttributesOutputReference {
    return new IpamIpv6NetworkSubscribeSettingsMappedEaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpv6NetworkSubscribeSettings {
  /**
  * The list of Cisco ISE attributes allowed for subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#enabled_attributes IpamIpv6Network#enabled_attributes}
  */
  readonly enabledAttributes?: string[];
  /**
  * The list of NIOS extensible attributes to Cisco ISE attributes mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#mapped_ea_attributes IpamIpv6Network#mapped_ea_attributes}
  */
  readonly mappedEaAttributes?: IpamIpv6NetworkSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable;
}

export function ipamIpv6NetworkSubscribeSettingsToTerraform(struct?: IpamIpv6NetworkSubscribeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledAttributes),
    mapped_ea_attributes: cdktf.listMapper(ipamIpv6NetworkSubscribeSettingsMappedEaAttributesToTerraform, false)(struct!.mappedEaAttributes),
  }
}


export function ipamIpv6NetworkSubscribeSettingsToHclTerraform(struct?: IpamIpv6NetworkSubscribeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mapped_ea_attributes: {
      value: cdktf.listMapperHcl(ipamIpv6NetworkSubscribeSettingsMappedEaAttributesToHclTerraform, false)(struct!.mappedEaAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "IpamIpv6NetworkSubscribeSettingsMappedEaAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkSubscribeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamIpv6NetworkSubscribeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledAttributes = this._enabledAttributes;
    }
    if (this._mappedEaAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedEaAttributes = this._mappedEaAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkSubscribeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledAttributes = undefined;
      this._mappedEaAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledAttributes = value.enabledAttributes;
      this._mappedEaAttributes.internalValue = value.mappedEaAttributes;
    }
  }

  // enabled_attributes - computed: true, optional: true, required: false
  private _enabledAttributes?: string[]; 
  public get enabledAttributes() {
    return this.getListAttribute('enabled_attributes');
  }
  public set enabledAttributes(value: string[]) {
    this._enabledAttributes = value;
  }
  public resetEnabledAttributes() {
    this._enabledAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAttributesInput() {
    return this._enabledAttributes;
  }

  // mapped_ea_attributes - computed: true, optional: true, required: false
  private _mappedEaAttributes = new IpamIpv6NetworkSubscribeSettingsMappedEaAttributesList(this, "mapped_ea_attributes", false);
  public get mappedEaAttributes() {
    return this._mappedEaAttributes;
  }
  public putMappedEaAttributes(value: IpamIpv6NetworkSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable) {
    this._mappedEaAttributes.internalValue = value;
  }
  public resetMappedEaAttributes() {
    this._mappedEaAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedEaAttributesInput() {
    return this._mappedEaAttributes.internalValue;
  }
}
export interface IpamIpv6NetworkVlans {
  /**
  * Reference to the underlying StaticVlan object vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#vlan IpamIpv6Network#vlan}
  */
  readonly vlan?: { [key: string]: string };
}

export function ipamIpv6NetworkVlansToTerraform(struct?: IpamIpv6NetworkVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vlan),
  }
}


export function ipamIpv6NetworkVlansToHclTerraform(struct?: IpamIpv6NetworkVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vlan),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpv6NetworkVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlan = value.vlan;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: { [key: string]: string }; 
  public get vlan() {
    return this.getStringMapAttribute('vlan');
  }
  public set vlan(value: { [key: string]: string }) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class IpamIpv6NetworkVlansList extends cdktf.ComplexList {
  public internalValue? : IpamIpv6NetworkVlans[] | cdktf.IResolvable

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
  public get(index: number): IpamIpv6NetworkVlansOutputReference {
    return new IpamIpv6NetworkVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpv6NetworkZoneAssociations {
  /**
  * The FQDN of the authoritative forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#fqdn IpamIpv6Network#fqdn}
  */
  readonly fqdn: string;
  /**
  * True if this is the default zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#is_default IpamIpv6Network#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The view to which the zone belongs. If a view is not specified, the default view is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#view IpamIpv6Network#view}
  */
  readonly view?: string;
}

export function ipamIpv6NetworkZoneAssociationsToTerraform(struct?: IpamIpv6NetworkZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function ipamIpv6NetworkZoneAssociationsToHclTerraform(struct?: IpamIpv6NetworkZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpv6NetworkZoneAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpv6NetworkZoneAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpv6NetworkZoneAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._isDefault = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._isDefault = value.isDefault;
      this._view = value.view;
    }
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class IpamIpv6NetworkZoneAssociationsList extends cdktf.ComplexList {
  public internalValue? : IpamIpv6NetworkZoneAssociations[] | cdktf.IResolvable

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
  public get(index: number): IpamIpv6NetworkZoneAssociationsOutputReference {
    return new IpamIpv6NetworkZoneAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network nios_ipam_ipv6network}
*/
export class IpamIpv6Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_ipam_ipv6network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamIpv6Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamIpv6Network to import
  * @param importFromId The id of the existing IpamIpv6Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamIpv6Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_ipam_ipv6network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_ipv6network nios_ipam_ipv6network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamIpv6NetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpamIpv6NetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_ipam_ipv6network',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateReversezone = config.autoCreateReversezone;
    this._cloudInfo.internalValue = config.cloudInfo;
    this._comment = config.comment;
    this._ddnsDomainname = config.ddnsDomainname;
    this._ddnsEnableOptionFqdn = config.ddnsEnableOptionFqdn;
    this._ddnsGenerateHostname = config.ddnsGenerateHostname;
    this._ddnsServerAlwaysUpdates = config.ddnsServerAlwaysUpdates;
    this._ddnsTtl = config.ddnsTtl;
    this._deleteReason = config.deleteReason;
    this._disable = config.disable;
    this._discoveredBridgeDomain = config.discoveredBridgeDomain;
    this._discoveredTenant = config.discoveredTenant;
    this._discoveryBasicPollSettings.internalValue = config.discoveryBasicPollSettings;
    this._discoveryBlackoutSetting.internalValue = config.discoveryBlackoutSetting;
    this._discoveryMember = config.discoveryMember;
    this._domainName = config.domainName;
    this._domainNameServers = config.domainNameServers;
    this._enableDdns = config.enableDdns;
    this._enableDiscovery = config.enableDiscovery;
    this._enableIfmapPublishing = config.enableIfmapPublishing;
    this._enableImmediateDiscovery = config.enableImmediateDiscovery;
    this._extattrs = config.extattrs;
    this._federatedRealms.internalValue = config.federatedRealms;
    this._funcCall.internalValue = config.funcCall;
    this._logicFilterRules.internalValue = config.logicFilterRules;
    this._members.internalValue = config.members;
    this._mgmPrivate = config.mgmPrivate;
    this._network = config.network;
    this._networkView = config.networkView;
    this._options.internalValue = config.options;
    this._portControlBlackoutSetting.internalValue = config.portControlBlackoutSetting;
    this._preferredLifetime = config.preferredLifetime;
    this._recycleLeases = config.recycleLeases;
    this._restartIfNeeded = config.restartIfNeeded;
    this._rirOrganization = config.rirOrganization;
    this._rirRegistrationAction = config.rirRegistrationAction;
    this._rirRegistrationStatus = config.rirRegistrationStatus;
    this._samePortControlDiscoveryBlackout = config.samePortControlDiscoveryBlackout;
    this._sendRirRequest = config.sendRirRequest;
    this._subscribeSettings.internalValue = config.subscribeSettings;
    this._unmanaged = config.unmanaged;
    this._updateDnsOnLeaseRenewal = config.updateDnsOnLeaseRenewal;
    this._useBlackoutSetting = config.useBlackoutSetting;
    this._useDdnsDomainname = config.useDdnsDomainname;
    this._useDdnsEnableOptionFqdn = config.useDdnsEnableOptionFqdn;
    this._useDdnsGenerateHostname = config.useDdnsGenerateHostname;
    this._useDdnsTtl = config.useDdnsTtl;
    this._useDiscoveryBasicPollingSettings = config.useDiscoveryBasicPollingSettings;
    this._useDomainName = config.useDomainName;
    this._useDomainNameServers = config.useDomainNameServers;
    this._useEnableDdns = config.useEnableDdns;
    this._useEnableDiscovery = config.useEnableDiscovery;
    this._useEnableIfmapPublishing = config.useEnableIfmapPublishing;
    this._useLogicFilterRules = config.useLogicFilterRules;
    this._useMgmPrivate = config.useMgmPrivate;
    this._useOptions = config.useOptions;
    this._usePreferredLifetime = config.usePreferredLifetime;
    this._useRecycleLeases = config.useRecycleLeases;
    this._useSubscribeSettings = config.useSubscribeSettings;
    this._useUpdateDnsOnLeaseRenewal = config.useUpdateDnsOnLeaseRenewal;
    this._useValidLifetime = config.useValidLifetime;
    this._useZoneAssociations = config.useZoneAssociations;
    this._validLifetime = config.validLifetime;
    this._vlans.internalValue = config.vlans;
    this._zoneAssociations.internalValue = config.zoneAssociations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_reversezone - computed: true, optional: true, required: false
  private _autoCreateReversezone?: boolean | cdktf.IResolvable; 
  public get autoCreateReversezone() {
    return this.getBooleanAttribute('auto_create_reversezone');
  }
  public set autoCreateReversezone(value: boolean | cdktf.IResolvable) {
    this._autoCreateReversezone = value;
  }
  public resetAutoCreateReversezone() {
    this._autoCreateReversezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateReversezoneInput() {
    return this._autoCreateReversezone;
  }

  // cloud_info - computed: true, optional: true, required: false
  private _cloudInfo = new IpamIpv6NetworkCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }
  public putCloudInfo(value: IpamIpv6NetworkCloudInfo) {
    this._cloudInfo.internalValue = value;
  }
  public resetCloudInfo() {
    this._cloudInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInfoInput() {
    return this._cloudInfo.internalValue;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ddns_domainname - computed: true, optional: true, required: false
  private _ddnsDomainname?: string; 
  public get ddnsDomainname() {
    return this.getStringAttribute('ddns_domainname');
  }
  public set ddnsDomainname(value: string) {
    this._ddnsDomainname = value;
  }
  public resetDdnsDomainname() {
    this._ddnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainnameInput() {
    return this._ddnsDomainname;
  }

  // ddns_enable_option_fqdn - computed: true, optional: true, required: false
  private _ddnsEnableOptionFqdn?: boolean | cdktf.IResolvable; 
  public get ddnsEnableOptionFqdn() {
    return this.getBooleanAttribute('ddns_enable_option_fqdn');
  }
  public set ddnsEnableOptionFqdn(value: boolean | cdktf.IResolvable) {
    this._ddnsEnableOptionFqdn = value;
  }
  public resetDdnsEnableOptionFqdn() {
    this._ddnsEnableOptionFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnableOptionFqdnInput() {
    return this._ddnsEnableOptionFqdn;
  }

  // ddns_generate_hostname - computed: true, optional: true, required: false
  private _ddnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateHostname() {
    return this.getBooleanAttribute('ddns_generate_hostname');
  }
  public set ddnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateHostname = value;
  }
  public resetDdnsGenerateHostname() {
    this._ddnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateHostnameInput() {
    return this._ddnsGenerateHostname;
  }

  // ddns_server_always_updates - computed: true, optional: true, required: false
  private _ddnsServerAlwaysUpdates?: boolean | cdktf.IResolvable; 
  public get ddnsServerAlwaysUpdates() {
    return this.getBooleanAttribute('ddns_server_always_updates');
  }
  public set ddnsServerAlwaysUpdates(value: boolean | cdktf.IResolvable) {
    this._ddnsServerAlwaysUpdates = value;
  }
  public resetDdnsServerAlwaysUpdates() {
    this._ddnsServerAlwaysUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerAlwaysUpdatesInput() {
    return this._ddnsServerAlwaysUpdates;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // delete_reason - computed: false, optional: true, required: false
  private _deleteReason?: string; 
  public get deleteReason() {
    return this.getStringAttribute('delete_reason');
  }
  public set deleteReason(value: string) {
    this._deleteReason = value;
  }
  public resetDeleteReason() {
    this._deleteReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteReasonInput() {
    return this._deleteReason;
  }

  // disable - computed: true, optional: true, required: false
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

  // discover_now_status - computed: true, optional: false, required: false
  public get discoverNowStatus() {
    return this.getStringAttribute('discover_now_status');
  }

  // discovered_bgp_as - computed: true, optional: false, required: false
  public get discoveredBgpAs() {
    return this.getStringAttribute('discovered_bgp_as');
  }

  // discovered_bridge_domain - computed: true, optional: true, required: false
  private _discoveredBridgeDomain?: string; 
  public get discoveredBridgeDomain() {
    return this.getStringAttribute('discovered_bridge_domain');
  }
  public set discoveredBridgeDomain(value: string) {
    this._discoveredBridgeDomain = value;
  }
  public resetDiscoveredBridgeDomain() {
    this._discoveredBridgeDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredBridgeDomainInput() {
    return this._discoveredBridgeDomain;
  }

  // discovered_tenant - computed: true, optional: true, required: false
  private _discoveredTenant?: string; 
  public get discoveredTenant() {
    return this.getStringAttribute('discovered_tenant');
  }
  public set discoveredTenant(value: string) {
    this._discoveredTenant = value;
  }
  public resetDiscoveredTenant() {
    this._discoveredTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredTenantInput() {
    return this._discoveredTenant;
  }

  // discovered_vlan_id - computed: true, optional: false, required: false
  public get discoveredVlanId() {
    return this.getStringAttribute('discovered_vlan_id');
  }

  // discovered_vlan_name - computed: true, optional: false, required: false
  public get discoveredVlanName() {
    return this.getStringAttribute('discovered_vlan_name');
  }

  // discovered_vrf_description - computed: true, optional: false, required: false
  public get discoveredVrfDescription() {
    return this.getStringAttribute('discovered_vrf_description');
  }

  // discovered_vrf_name - computed: true, optional: false, required: false
  public get discoveredVrfName() {
    return this.getStringAttribute('discovered_vrf_name');
  }

  // discovered_vrf_rd - computed: true, optional: false, required: false
  public get discoveredVrfRd() {
    return this.getStringAttribute('discovered_vrf_rd');
  }

  // discovery_basic_poll_settings - computed: true, optional: true, required: false
  private _discoveryBasicPollSettings = new IpamIpv6NetworkDiscoveryBasicPollSettingsOutputReference(this, "discovery_basic_poll_settings");
  public get discoveryBasicPollSettings() {
    return this._discoveryBasicPollSettings;
  }
  public putDiscoveryBasicPollSettings(value: IpamIpv6NetworkDiscoveryBasicPollSettings) {
    this._discoveryBasicPollSettings.internalValue = value;
  }
  public resetDiscoveryBasicPollSettings() {
    this._discoveryBasicPollSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryBasicPollSettingsInput() {
    return this._discoveryBasicPollSettings.internalValue;
  }

  // discovery_blackout_setting - computed: true, optional: true, required: false
  private _discoveryBlackoutSetting = new IpamIpv6NetworkDiscoveryBlackoutSettingOutputReference(this, "discovery_blackout_setting");
  public get discoveryBlackoutSetting() {
    return this._discoveryBlackoutSetting;
  }
  public putDiscoveryBlackoutSetting(value: IpamIpv6NetworkDiscoveryBlackoutSetting) {
    this._discoveryBlackoutSetting.internalValue = value;
  }
  public resetDiscoveryBlackoutSetting() {
    this._discoveryBlackoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryBlackoutSettingInput() {
    return this._discoveryBlackoutSetting.internalValue;
  }

  // discovery_engine_type - computed: true, optional: false, required: false
  public get discoveryEngineType() {
    return this.getStringAttribute('discovery_engine_type');
  }

  // discovery_member - computed: true, optional: true, required: false
  private _discoveryMember?: string; 
  public get discoveryMember() {
    return this.getStringAttribute('discovery_member');
  }
  public set discoveryMember(value: string) {
    this._discoveryMember = value;
  }
  public resetDiscoveryMember() {
    this._discoveryMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMemberInput() {
    return this._discoveryMember;
  }

  // domain_name - computed: true, optional: true, required: false
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

  // domain_name_servers - computed: false, optional: true, required: false
  private _domainNameServers?: string[]; 
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[]) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
  }

  // enable_ddns - computed: true, optional: true, required: false
  private _enableDdns?: boolean | cdktf.IResolvable; 
  public get enableDdns() {
    return this.getBooleanAttribute('enable_ddns');
  }
  public set enableDdns(value: boolean | cdktf.IResolvable) {
    this._enableDdns = value;
  }
  public resetEnableDdns() {
    this._enableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDdnsInput() {
    return this._enableDdns;
  }

  // enable_discovery - computed: true, optional: true, required: false
  private _enableDiscovery?: boolean | cdktf.IResolvable; 
  public get enableDiscovery() {
    return this.getBooleanAttribute('enable_discovery');
  }
  public set enableDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableDiscovery = value;
  }
  public resetEnableDiscovery() {
    this._enableDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiscoveryInput() {
    return this._enableDiscovery;
  }

  // enable_ifmap_publishing - computed: true, optional: true, required: false
  private _enableIfmapPublishing?: boolean | cdktf.IResolvable; 
  public get enableIfmapPublishing() {
    return this.getBooleanAttribute('enable_ifmap_publishing');
  }
  public set enableIfmapPublishing(value: boolean | cdktf.IResolvable) {
    this._enableIfmapPublishing = value;
  }
  public resetEnableIfmapPublishing() {
    this._enableIfmapPublishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIfmapPublishingInput() {
    return this._enableIfmapPublishing;
  }

  // enable_immediate_discovery - computed: false, optional: true, required: false
  private _enableImmediateDiscovery?: boolean | cdktf.IResolvable; 
  public get enableImmediateDiscovery() {
    return this.getBooleanAttribute('enable_immediate_discovery');
  }
  public set enableImmediateDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableImmediateDiscovery = value;
  }
  public resetEnableImmediateDiscovery() {
    this._enableImmediateDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImmediateDiscoveryInput() {
    return this._enableImmediateDiscovery;
  }

  // endpoint_sources - computed: true, optional: false, required: false
  public get endpointSources() {
    return this.getListAttribute('endpoint_sources');
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // federated_realms - computed: false, optional: true, required: false
  private _federatedRealms = new IpamIpv6NetworkFederatedRealmsList(this, "federated_realms", false);
  public get federatedRealms() {
    return this._federatedRealms;
  }
  public putFederatedRealms(value: IpamIpv6NetworkFederatedRealms[] | cdktf.IResolvable) {
    this._federatedRealms.internalValue = value;
  }
  public resetFederatedRealms() {
    this._federatedRealms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedRealmsInput() {
    return this._federatedRealms.internalValue;
  }

  // func_call - computed: true, optional: true, required: false
  private _funcCall = new IpamIpv6NetworkFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: IpamIpv6NetworkFuncCall) {
    this._funcCall.internalValue = value;
  }
  public resetFuncCall() {
    this._funcCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCallInput() {
    return this._funcCall.internalValue;
  }

  // last_rir_registration_update_sent - computed: true, optional: false, required: false
  public get lastRirRegistrationUpdateSent() {
    return this.getNumberAttribute('last_rir_registration_update_sent');
  }

  // last_rir_registration_update_status - computed: true, optional: false, required: false
  public get lastRirRegistrationUpdateStatus() {
    return this.getStringAttribute('last_rir_registration_update_status');
  }

  // logic_filter_rules - computed: false, optional: true, required: false
  private _logicFilterRules = new IpamIpv6NetworkLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: IpamIpv6NetworkLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // members - computed: true, optional: true, required: false
  private _members = new IpamIpv6NetworkMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: IpamIpv6NetworkMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // mgm_private - computed: true, optional: true, required: false
  private _mgmPrivate?: boolean | cdktf.IResolvable; 
  public get mgmPrivate() {
    return this.getBooleanAttribute('mgm_private');
  }
  public set mgmPrivate(value: boolean | cdktf.IResolvable) {
    this._mgmPrivate = value;
  }
  public resetMgmPrivate() {
    this._mgmPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmPrivateInput() {
    return this._mgmPrivate;
  }

  // mgm_private_overridable - computed: true, optional: false, required: false
  public get mgmPrivateOverridable() {
    return this.getBooleanAttribute('mgm_private_overridable');
  }

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new IpamIpv6NetworkMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_container - computed: true, optional: false, required: false
  public get networkContainer() {
    return this.getStringAttribute('network_container');
  }

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // options - computed: true, optional: true, required: false
  private _options = new IpamIpv6NetworkOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: IpamIpv6NetworkOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // port_control_blackout_setting - computed: true, optional: true, required: false
  private _portControlBlackoutSetting = new IpamIpv6NetworkPortControlBlackoutSettingOutputReference(this, "port_control_blackout_setting");
  public get portControlBlackoutSetting() {
    return this._portControlBlackoutSetting;
  }
  public putPortControlBlackoutSetting(value: IpamIpv6NetworkPortControlBlackoutSetting) {
    this._portControlBlackoutSetting.internalValue = value;
  }
  public resetPortControlBlackoutSetting() {
    this._portControlBlackoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portControlBlackoutSettingInput() {
    return this._portControlBlackoutSetting.internalValue;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // recycle_leases - computed: true, optional: true, required: false
  private _recycleLeases?: boolean | cdktf.IResolvable; 
  public get recycleLeases() {
    return this.getBooleanAttribute('recycle_leases');
  }
  public set recycleLeases(value: boolean | cdktf.IResolvable) {
    this._recycleLeases = value;
  }
  public resetRecycleLeases() {
    this._recycleLeases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleLeasesInput() {
    return this._recycleLeases;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // restart_if_needed - computed: true, optional: true, required: false
  private _restartIfNeeded?: boolean | cdktf.IResolvable; 
  public get restartIfNeeded() {
    return this.getBooleanAttribute('restart_if_needed');
  }
  public set restartIfNeeded(value: boolean | cdktf.IResolvable) {
    this._restartIfNeeded = value;
  }
  public resetRestartIfNeeded() {
    this._restartIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIfNeededInput() {
    return this._restartIfNeeded;
  }

  // rir - computed: true, optional: false, required: false
  public get rir() {
    return this.getStringAttribute('rir');
  }

  // rir_organization - computed: true, optional: true, required: false
  private _rirOrganization?: string; 
  public get rirOrganization() {
    return this.getStringAttribute('rir_organization');
  }
  public set rirOrganization(value: string) {
    this._rirOrganization = value;
  }
  public resetRirOrganization() {
    this._rirOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rirOrganizationInput() {
    return this._rirOrganization;
  }

  // rir_registration_action - computed: true, optional: true, required: false
  private _rirRegistrationAction?: string; 
  public get rirRegistrationAction() {
    return this.getStringAttribute('rir_registration_action');
  }
  public set rirRegistrationAction(value: string) {
    this._rirRegistrationAction = value;
  }
  public resetRirRegistrationAction() {
    this._rirRegistrationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rirRegistrationActionInput() {
    return this._rirRegistrationAction;
  }

  // rir_registration_status - computed: true, optional: true, required: false
  private _rirRegistrationStatus?: string; 
  public get rirRegistrationStatus() {
    return this.getStringAttribute('rir_registration_status');
  }
  public set rirRegistrationStatus(value: string) {
    this._rirRegistrationStatus = value;
  }
  public resetRirRegistrationStatus() {
    this._rirRegistrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rirRegistrationStatusInput() {
    return this._rirRegistrationStatus;
  }

  // same_port_control_discovery_blackout - computed: true, optional: true, required: false
  private _samePortControlDiscoveryBlackout?: boolean | cdktf.IResolvable; 
  public get samePortControlDiscoveryBlackout() {
    return this.getBooleanAttribute('same_port_control_discovery_blackout');
  }
  public set samePortControlDiscoveryBlackout(value: boolean | cdktf.IResolvable) {
    this._samePortControlDiscoveryBlackout = value;
  }
  public resetSamePortControlDiscoveryBlackout() {
    this._samePortControlDiscoveryBlackout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samePortControlDiscoveryBlackoutInput() {
    return this._samePortControlDiscoveryBlackout;
  }

  // send_rir_request - computed: false, optional: true, required: false
  private _sendRirRequest?: boolean | cdktf.IResolvable; 
  public get sendRirRequest() {
    return this.getBooleanAttribute('send_rir_request');
  }
  public set sendRirRequest(value: boolean | cdktf.IResolvable) {
    this._sendRirRequest = value;
  }
  public resetSendRirRequest() {
    this._sendRirRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRirRequestInput() {
    return this._sendRirRequest;
  }

  // subscribe_settings - computed: true, optional: true, required: false
  private _subscribeSettings = new IpamIpv6NetworkSubscribeSettingsOutputReference(this, "subscribe_settings");
  public get subscribeSettings() {
    return this._subscribeSettings;
  }
  public putSubscribeSettings(value: IpamIpv6NetworkSubscribeSettings) {
    this._subscribeSettings.internalValue = value;
  }
  public resetSubscribeSettings() {
    this._subscribeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeSettingsInput() {
    return this._subscribeSettings.internalValue;
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // unmanaged - computed: true, optional: true, required: false
  private _unmanaged?: boolean | cdktf.IResolvable; 
  public get unmanaged() {
    return this.getBooleanAttribute('unmanaged');
  }
  public set unmanaged(value: boolean | cdktf.IResolvable) {
    this._unmanaged = value;
  }
  public resetUnmanaged() {
    this._unmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInput() {
    return this._unmanaged;
  }

  // unmanaged_count - computed: true, optional: false, required: false
  public get unmanagedCount() {
    return this.getNumberAttribute('unmanaged_count');
  }

  // update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get updateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('update_dns_on_lease_renewal');
  }
  public set updateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._updateDnsOnLeaseRenewal = value;
  }
  public resetUpdateDnsOnLeaseRenewal() {
    this._updateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsOnLeaseRenewalInput() {
    return this._updateDnsOnLeaseRenewal;
  }

  // use_blackout_setting - computed: true, optional: true, required: false
  private _useBlackoutSetting?: boolean | cdktf.IResolvable; 
  public get useBlackoutSetting() {
    return this.getBooleanAttribute('use_blackout_setting');
  }
  public set useBlackoutSetting(value: boolean | cdktf.IResolvable) {
    this._useBlackoutSetting = value;
  }
  public resetUseBlackoutSetting() {
    this._useBlackoutSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBlackoutSettingInput() {
    return this._useBlackoutSetting;
  }

  // use_ddns_domainname - computed: true, optional: true, required: false
  private _useDdnsDomainname?: boolean | cdktf.IResolvable; 
  public get useDdnsDomainname() {
    return this.getBooleanAttribute('use_ddns_domainname');
  }
  public set useDdnsDomainname(value: boolean | cdktf.IResolvable) {
    this._useDdnsDomainname = value;
  }
  public resetUseDdnsDomainname() {
    this._useDdnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsDomainnameInput() {
    return this._useDdnsDomainname;
  }

  // use_ddns_enable_option_fqdn - computed: true, optional: true, required: false
  private _useDdnsEnableOptionFqdn?: boolean | cdktf.IResolvable; 
  public get useDdnsEnableOptionFqdn() {
    return this.getBooleanAttribute('use_ddns_enable_option_fqdn');
  }
  public set useDdnsEnableOptionFqdn(value: boolean | cdktf.IResolvable) {
    this._useDdnsEnableOptionFqdn = value;
  }
  public resetUseDdnsEnableOptionFqdn() {
    this._useDdnsEnableOptionFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsEnableOptionFqdnInput() {
    return this._useDdnsEnableOptionFqdn;
  }

  // use_ddns_generate_hostname - computed: true, optional: true, required: false
  private _useDdnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get useDdnsGenerateHostname() {
    return this.getBooleanAttribute('use_ddns_generate_hostname');
  }
  public set useDdnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._useDdnsGenerateHostname = value;
  }
  public resetUseDdnsGenerateHostname() {
    this._useDdnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsGenerateHostnameInput() {
    return this._useDdnsGenerateHostname;
  }

  // use_ddns_ttl - computed: true, optional: true, required: false
  private _useDdnsTtl?: boolean | cdktf.IResolvable; 
  public get useDdnsTtl() {
    return this.getBooleanAttribute('use_ddns_ttl');
  }
  public set useDdnsTtl(value: boolean | cdktf.IResolvable) {
    this._useDdnsTtl = value;
  }
  public resetUseDdnsTtl() {
    this._useDdnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsTtlInput() {
    return this._useDdnsTtl;
  }

  // use_discovery_basic_polling_settings - computed: true, optional: true, required: false
  private _useDiscoveryBasicPollingSettings?: boolean | cdktf.IResolvable; 
  public get useDiscoveryBasicPollingSettings() {
    return this.getBooleanAttribute('use_discovery_basic_polling_settings');
  }
  public set useDiscoveryBasicPollingSettings(value: boolean | cdktf.IResolvable) {
    this._useDiscoveryBasicPollingSettings = value;
  }
  public resetUseDiscoveryBasicPollingSettings() {
    this._useDiscoveryBasicPollingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDiscoveryBasicPollingSettingsInput() {
    return this._useDiscoveryBasicPollingSettings;
  }

  // use_domain_name - computed: true, optional: true, required: false
  private _useDomainName?: boolean | cdktf.IResolvable; 
  public get useDomainName() {
    return this.getBooleanAttribute('use_domain_name');
  }
  public set useDomainName(value: boolean | cdktf.IResolvable) {
    this._useDomainName = value;
  }
  public resetUseDomainName() {
    this._useDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameInput() {
    return this._useDomainName;
  }

  // use_domain_name_servers - computed: true, optional: true, required: false
  private _useDomainNameServers?: boolean | cdktf.IResolvable; 
  public get useDomainNameServers() {
    return this.getBooleanAttribute('use_domain_name_servers');
  }
  public set useDomainNameServers(value: boolean | cdktf.IResolvable) {
    this._useDomainNameServers = value;
  }
  public resetUseDomainNameServers() {
    this._useDomainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameServersInput() {
    return this._useDomainNameServers;
  }

  // use_enable_ddns - computed: true, optional: true, required: false
  private _useEnableDdns?: boolean | cdktf.IResolvable; 
  public get useEnableDdns() {
    return this.getBooleanAttribute('use_enable_ddns');
  }
  public set useEnableDdns(value: boolean | cdktf.IResolvable) {
    this._useEnableDdns = value;
  }
  public resetUseEnableDdns() {
    this._useEnableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDdnsInput() {
    return this._useEnableDdns;
  }

  // use_enable_discovery - computed: true, optional: true, required: false
  private _useEnableDiscovery?: boolean | cdktf.IResolvable; 
  public get useEnableDiscovery() {
    return this.getBooleanAttribute('use_enable_discovery');
  }
  public set useEnableDiscovery(value: boolean | cdktf.IResolvable) {
    this._useEnableDiscovery = value;
  }
  public resetUseEnableDiscovery() {
    this._useEnableDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDiscoveryInput() {
    return this._useEnableDiscovery;
  }

  // use_enable_ifmap_publishing - computed: true, optional: true, required: false
  private _useEnableIfmapPublishing?: boolean | cdktf.IResolvable; 
  public get useEnableIfmapPublishing() {
    return this.getBooleanAttribute('use_enable_ifmap_publishing');
  }
  public set useEnableIfmapPublishing(value: boolean | cdktf.IResolvable) {
    this._useEnableIfmapPublishing = value;
  }
  public resetUseEnableIfmapPublishing() {
    this._useEnableIfmapPublishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableIfmapPublishingInput() {
    return this._useEnableIfmapPublishing;
  }

  // use_logic_filter_rules - computed: true, optional: true, required: false
  private _useLogicFilterRules?: boolean | cdktf.IResolvable; 
  public get useLogicFilterRules() {
    return this.getBooleanAttribute('use_logic_filter_rules');
  }
  public set useLogicFilterRules(value: boolean | cdktf.IResolvable) {
    this._useLogicFilterRules = value;
  }
  public resetUseLogicFilterRules() {
    this._useLogicFilterRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicFilterRulesInput() {
    return this._useLogicFilterRules;
  }

  // use_mgm_private - computed: true, optional: true, required: false
  private _useMgmPrivate?: boolean | cdktf.IResolvable; 
  public get useMgmPrivate() {
    return this.getBooleanAttribute('use_mgm_private');
  }
  public set useMgmPrivate(value: boolean | cdktf.IResolvable) {
    this._useMgmPrivate = value;
  }
  public resetUseMgmPrivate() {
    this._useMgmPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmPrivateInput() {
    return this._useMgmPrivate;
  }

  // use_options - computed: true, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // use_preferred_lifetime - computed: true, optional: true, required: false
  private _usePreferredLifetime?: boolean | cdktf.IResolvable; 
  public get usePreferredLifetime() {
    return this.getBooleanAttribute('use_preferred_lifetime');
  }
  public set usePreferredLifetime(value: boolean | cdktf.IResolvable) {
    this._usePreferredLifetime = value;
  }
  public resetUsePreferredLifetime() {
    this._usePreferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreferredLifetimeInput() {
    return this._usePreferredLifetime;
  }

  // use_recycle_leases - computed: true, optional: true, required: false
  private _useRecycleLeases?: boolean | cdktf.IResolvable; 
  public get useRecycleLeases() {
    return this.getBooleanAttribute('use_recycle_leases');
  }
  public set useRecycleLeases(value: boolean | cdktf.IResolvable) {
    this._useRecycleLeases = value;
  }
  public resetUseRecycleLeases() {
    this._useRecycleLeases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecycleLeasesInput() {
    return this._useRecycleLeases;
  }

  // use_subscribe_settings - computed: true, optional: true, required: false
  private _useSubscribeSettings?: boolean | cdktf.IResolvable; 
  public get useSubscribeSettings() {
    return this.getBooleanAttribute('use_subscribe_settings');
  }
  public set useSubscribeSettings(value: boolean | cdktf.IResolvable) {
    this._useSubscribeSettings = value;
  }
  public resetUseSubscribeSettings() {
    this._useSubscribeSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSubscribeSettingsInput() {
    return this._useSubscribeSettings;
  }

  // use_update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get useUpdateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('use_update_dns_on_lease_renewal');
  }
  public set useUpdateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._useUpdateDnsOnLeaseRenewal = value;
  }
  public resetUseUpdateDnsOnLeaseRenewal() {
    this._useUpdateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUpdateDnsOnLeaseRenewalInput() {
    return this._useUpdateDnsOnLeaseRenewal;
  }

  // use_valid_lifetime - computed: true, optional: true, required: false
  private _useValidLifetime?: boolean | cdktf.IResolvable; 
  public get useValidLifetime() {
    return this.getBooleanAttribute('use_valid_lifetime');
  }
  public set useValidLifetime(value: boolean | cdktf.IResolvable) {
    this._useValidLifetime = value;
  }
  public resetUseValidLifetime() {
    this._useValidLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useValidLifetimeInput() {
    return this._useValidLifetime;
  }

  // use_zone_associations - computed: true, optional: true, required: false
  private _useZoneAssociations?: boolean | cdktf.IResolvable; 
  public get useZoneAssociations() {
    return this.getBooleanAttribute('use_zone_associations');
  }
  public set useZoneAssociations(value: boolean | cdktf.IResolvable) {
    this._useZoneAssociations = value;
  }
  public resetUseZoneAssociations() {
    this._useZoneAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useZoneAssociationsInput() {
    return this._useZoneAssociations;
  }

  // valid_lifetime - computed: true, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }

  // vlans - computed: true, optional: true, required: false
  private _vlans = new IpamIpv6NetworkVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: IpamIpv6NetworkVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }

  // zone_associations - computed: true, optional: true, required: false
  private _zoneAssociations = new IpamIpv6NetworkZoneAssociationsList(this, "zone_associations", false);
  public get zoneAssociations() {
    return this._zoneAssociations;
  }
  public putZoneAssociations(value: IpamIpv6NetworkZoneAssociations[] | cdktf.IResolvable) {
    this._zoneAssociations.internalValue = value;
  }
  public resetZoneAssociations() {
    this._zoneAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAssociationsInput() {
    return this._zoneAssociations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_reversezone: cdktf.booleanToTerraform(this._autoCreateReversezone),
      cloud_info: ipamIpv6NetworkCloudInfoToTerraform(this._cloudInfo.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_domainname: cdktf.stringToTerraform(this._ddnsDomainname),
      ddns_enable_option_fqdn: cdktf.booleanToTerraform(this._ddnsEnableOptionFqdn),
      ddns_generate_hostname: cdktf.booleanToTerraform(this._ddnsGenerateHostname),
      ddns_server_always_updates: cdktf.booleanToTerraform(this._ddnsServerAlwaysUpdates),
      ddns_ttl: cdktf.numberToTerraform(this._ddnsTtl),
      delete_reason: cdktf.stringToTerraform(this._deleteReason),
      disable: cdktf.booleanToTerraform(this._disable),
      discovered_bridge_domain: cdktf.stringToTerraform(this._discoveredBridgeDomain),
      discovered_tenant: cdktf.stringToTerraform(this._discoveredTenant),
      discovery_basic_poll_settings: ipamIpv6NetworkDiscoveryBasicPollSettingsToTerraform(this._discoveryBasicPollSettings.internalValue),
      discovery_blackout_setting: ipamIpv6NetworkDiscoveryBlackoutSettingToTerraform(this._discoveryBlackoutSetting.internalValue),
      discovery_member: cdktf.stringToTerraform(this._discoveryMember),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNameServers),
      enable_ddns: cdktf.booleanToTerraform(this._enableDdns),
      enable_discovery: cdktf.booleanToTerraform(this._enableDiscovery),
      enable_ifmap_publishing: cdktf.booleanToTerraform(this._enableIfmapPublishing),
      enable_immediate_discovery: cdktf.booleanToTerraform(this._enableImmediateDiscovery),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      federated_realms: cdktf.listMapper(ipamIpv6NetworkFederatedRealmsToTerraform, false)(this._federatedRealms.internalValue),
      func_call: ipamIpv6NetworkFuncCallToTerraform(this._funcCall.internalValue),
      logic_filter_rules: cdktf.listMapper(ipamIpv6NetworkLogicFilterRulesToTerraform, false)(this._logicFilterRules.internalValue),
      members: cdktf.listMapper(ipamIpv6NetworkMembersToTerraform, false)(this._members.internalValue),
      mgm_private: cdktf.booleanToTerraform(this._mgmPrivate),
      network: cdktf.stringToTerraform(this._network),
      network_view: cdktf.stringToTerraform(this._networkView),
      options: cdktf.listMapper(ipamIpv6NetworkOptionsToTerraform, false)(this._options.internalValue),
      port_control_blackout_setting: ipamIpv6NetworkPortControlBlackoutSettingToTerraform(this._portControlBlackoutSetting.internalValue),
      preferred_lifetime: cdktf.numberToTerraform(this._preferredLifetime),
      recycle_leases: cdktf.booleanToTerraform(this._recycleLeases),
      restart_if_needed: cdktf.booleanToTerraform(this._restartIfNeeded),
      rir_organization: cdktf.stringToTerraform(this._rirOrganization),
      rir_registration_action: cdktf.stringToTerraform(this._rirRegistrationAction),
      rir_registration_status: cdktf.stringToTerraform(this._rirRegistrationStatus),
      same_port_control_discovery_blackout: cdktf.booleanToTerraform(this._samePortControlDiscoveryBlackout),
      send_rir_request: cdktf.booleanToTerraform(this._sendRirRequest),
      subscribe_settings: ipamIpv6NetworkSubscribeSettingsToTerraform(this._subscribeSettings.internalValue),
      unmanaged: cdktf.booleanToTerraform(this._unmanaged),
      update_dns_on_lease_renewal: cdktf.booleanToTerraform(this._updateDnsOnLeaseRenewal),
      use_blackout_setting: cdktf.booleanToTerraform(this._useBlackoutSetting),
      use_ddns_domainname: cdktf.booleanToTerraform(this._useDdnsDomainname),
      use_ddns_enable_option_fqdn: cdktf.booleanToTerraform(this._useDdnsEnableOptionFqdn),
      use_ddns_generate_hostname: cdktf.booleanToTerraform(this._useDdnsGenerateHostname),
      use_ddns_ttl: cdktf.booleanToTerraform(this._useDdnsTtl),
      use_discovery_basic_polling_settings: cdktf.booleanToTerraform(this._useDiscoveryBasicPollingSettings),
      use_domain_name: cdktf.booleanToTerraform(this._useDomainName),
      use_domain_name_servers: cdktf.booleanToTerraform(this._useDomainNameServers),
      use_enable_ddns: cdktf.booleanToTerraform(this._useEnableDdns),
      use_enable_discovery: cdktf.booleanToTerraform(this._useEnableDiscovery),
      use_enable_ifmap_publishing: cdktf.booleanToTerraform(this._useEnableIfmapPublishing),
      use_logic_filter_rules: cdktf.booleanToTerraform(this._useLogicFilterRules),
      use_mgm_private: cdktf.booleanToTerraform(this._useMgmPrivate),
      use_options: cdktf.booleanToTerraform(this._useOptions),
      use_preferred_lifetime: cdktf.booleanToTerraform(this._usePreferredLifetime),
      use_recycle_leases: cdktf.booleanToTerraform(this._useRecycleLeases),
      use_subscribe_settings: cdktf.booleanToTerraform(this._useSubscribeSettings),
      use_update_dns_on_lease_renewal: cdktf.booleanToTerraform(this._useUpdateDnsOnLeaseRenewal),
      use_valid_lifetime: cdktf.booleanToTerraform(this._useValidLifetime),
      use_zone_associations: cdktf.booleanToTerraform(this._useZoneAssociations),
      valid_lifetime: cdktf.numberToTerraform(this._validLifetime),
      vlans: cdktf.listMapper(ipamIpv6NetworkVlansToTerraform, false)(this._vlans.internalValue),
      zone_associations: cdktf.listMapper(ipamIpv6NetworkZoneAssociationsToTerraform, false)(this._zoneAssociations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_reversezone: {
        value: cdktf.booleanToHclTerraform(this._autoCreateReversezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_info: {
        value: ipamIpv6NetworkCloudInfoToHclTerraform(this._cloudInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpv6NetworkCloudInfo",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_domainname: {
        value: cdktf.stringToHclTerraform(this._ddnsDomainname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_enable_option_fqdn: {
        value: cdktf.booleanToHclTerraform(this._ddnsEnableOptionFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_generate_hostname: {
        value: cdktf.booleanToHclTerraform(this._ddnsGenerateHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_server_always_updates: {
        value: cdktf.booleanToHclTerraform(this._ddnsServerAlwaysUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_ttl: {
        value: cdktf.numberToHclTerraform(this._ddnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_reason: {
        value: cdktf.stringToHclTerraform(this._deleteReason),
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
      discovered_bridge_domain: {
        value: cdktf.stringToHclTerraform(this._discoveredBridgeDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovered_tenant: {
        value: cdktf.stringToHclTerraform(this._discoveredTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_basic_poll_settings: {
        value: ipamIpv6NetworkDiscoveryBasicPollSettingsToHclTerraform(this._discoveryBasicPollSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpv6NetworkDiscoveryBasicPollSettings",
      },
      discovery_blackout_setting: {
        value: ipamIpv6NetworkDiscoveryBlackoutSettingToHclTerraform(this._discoveryBlackoutSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpv6NetworkDiscoveryBlackoutSetting",
      },
      discovery_member: {
        value: cdktf.stringToHclTerraform(this._discoveryMember),
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
      domain_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_ddns: {
        value: cdktf.booleanToHclTerraform(this._enableDdns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_discovery: {
        value: cdktf.booleanToHclTerraform(this._enableDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ifmap_publishing: {
        value: cdktf.booleanToHclTerraform(this._enableIfmapPublishing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_immediate_discovery: {
        value: cdktf.booleanToHclTerraform(this._enableImmediateDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      federated_realms: {
        value: cdktf.listMapperHcl(ipamIpv6NetworkFederatedRealmsToHclTerraform, false)(this._federatedRealms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpv6NetworkFederatedRealmsList",
      },
      func_call: {
        value: ipamIpv6NetworkFuncCallToHclTerraform(this._funcCall.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpv6NetworkFuncCall",
      },
      logic_filter_rules: {
        value: cdktf.listMapperHcl(ipamIpv6NetworkLogicFilterRulesToHclTerraform, false)(this._logicFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpv6NetworkLogicFilterRulesList",
      },
      members: {
        value: cdktf.listMapperHcl(ipamIpv6NetworkMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpv6NetworkMembersList",
      },
      mgm_private: {
        value: cdktf.booleanToHclTerraform(this._mgmPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(ipamIpv6NetworkOptionsToHclTerraform, false)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpv6NetworkOptionsList",
      },
      port_control_blackout_setting: {
        value: ipamIpv6NetworkPortControlBlackoutSettingToHclTerraform(this._portControlBlackoutSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpv6NetworkPortControlBlackoutSetting",
      },
      preferred_lifetime: {
        value: cdktf.numberToHclTerraform(this._preferredLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recycle_leases: {
        value: cdktf.booleanToHclTerraform(this._recycleLeases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restart_if_needed: {
        value: cdktf.booleanToHclTerraform(this._restartIfNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rir_organization: {
        value: cdktf.stringToHclTerraform(this._rirOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rir_registration_action: {
        value: cdktf.stringToHclTerraform(this._rirRegistrationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rir_registration_status: {
        value: cdktf.stringToHclTerraform(this._rirRegistrationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      same_port_control_discovery_blackout: {
        value: cdktf.booleanToHclTerraform(this._samePortControlDiscoveryBlackout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_rir_request: {
        value: cdktf.booleanToHclTerraform(this._sendRirRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscribe_settings: {
        value: ipamIpv6NetworkSubscribeSettingsToHclTerraform(this._subscribeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamIpv6NetworkSubscribeSettings",
      },
      unmanaged: {
        value: cdktf.booleanToHclTerraform(this._unmanaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_dns_on_lease_renewal: {
        value: cdktf.booleanToHclTerraform(this._updateDnsOnLeaseRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_blackout_setting: {
        value: cdktf.booleanToHclTerraform(this._useBlackoutSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_domainname: {
        value: cdktf.booleanToHclTerraform(this._useDdnsDomainname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_enable_option_fqdn: {
        value: cdktf.booleanToHclTerraform(this._useDdnsEnableOptionFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_generate_hostname: {
        value: cdktf.booleanToHclTerraform(this._useDdnsGenerateHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_ttl: {
        value: cdktf.booleanToHclTerraform(this._useDdnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_discovery_basic_polling_settings: {
        value: cdktf.booleanToHclTerraform(this._useDiscoveryBasicPollingSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_domain_name: {
        value: cdktf.booleanToHclTerraform(this._useDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_domain_name_servers: {
        value: cdktf.booleanToHclTerraform(this._useDomainNameServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_enable_ddns: {
        value: cdktf.booleanToHclTerraform(this._useEnableDdns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_enable_discovery: {
        value: cdktf.booleanToHclTerraform(this._useEnableDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_enable_ifmap_publishing: {
        value: cdktf.booleanToHclTerraform(this._useEnableIfmapPublishing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_logic_filter_rules: {
        value: cdktf.booleanToHclTerraform(this._useLogicFilterRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_mgm_private: {
        value: cdktf.booleanToHclTerraform(this._useMgmPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_options: {
        value: cdktf.booleanToHclTerraform(this._useOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_preferred_lifetime: {
        value: cdktf.booleanToHclTerraform(this._usePreferredLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_recycle_leases: {
        value: cdktf.booleanToHclTerraform(this._useRecycleLeases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_subscribe_settings: {
        value: cdktf.booleanToHclTerraform(this._useSubscribeSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_update_dns_on_lease_renewal: {
        value: cdktf.booleanToHclTerraform(this._useUpdateDnsOnLeaseRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_valid_lifetime: {
        value: cdktf.booleanToHclTerraform(this._useValidLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_zone_associations: {
        value: cdktf.booleanToHclTerraform(this._useZoneAssociations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      valid_lifetime: {
        value: cdktf.numberToHclTerraform(this._validLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlans: {
        value: cdktf.listMapperHcl(ipamIpv6NetworkVlansToHclTerraform, false)(this._vlans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpv6NetworkVlansList",
      },
      zone_associations: {
        value: cdktf.listMapperHcl(ipamIpv6NetworkZoneAssociationsToHclTerraform, false)(this._zoneAssociations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamIpv6NetworkZoneAssociationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
