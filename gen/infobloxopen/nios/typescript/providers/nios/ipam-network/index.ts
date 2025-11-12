// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authority for the DHCP network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#authority IpamNetwork#authority}
  */
  readonly authority?: boolean | cdktf.IResolvable;
  /**
  * This flag controls whether reverse zones are automatically created when the network is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#auto_create_reversezone IpamNetwork#auto_create_reversezone}
  */
  readonly autoCreateReversezone?: boolean | cdktf.IResolvable;
  /**
  * The bootfile name for the network. You can configure the DHCP server to support clients that use the boot file name option in their DHCPREQUEST messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#bootfile IpamNetwork#bootfile}
  */
  readonly bootfile?: string;
  /**
  * The bootserver address for the network. You can specify the name and/or IP address of the boot server that the host needs to boot. The boot server IPv4 Address or name in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#bootserver IpamNetwork#bootserver}
  */
  readonly bootserver?: string;
  /**
  * Structure containing all cloud API related information for this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#cloud_info IpamNetwork#cloud_info}
  */
  readonly cloudInfo?: IpamNetworkCloudInfo;
  /**
  * Boolean flag to indicate if the network is shared with cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#cloud_shared IpamNetwork#cloud_shared}
  */
  readonly cloudShared?: boolean | cdktf.IResolvable;
  /**
  * Comment for the network, maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#comment IpamNetwork#comment}
  */
  readonly comment?: string;
  /**
  * The dynamic DNS domain name the appliance uses specifically for DDNS updates for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ddns_domainname IpamNetwork#ddns_domainname}
  */
  readonly ddnsDomainname?: string;
  /**
  * If this field is set to True, the DHCP server generates a hostname and updates DNS with it when the DHCP client request does not contain a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ddns_generate_hostname IpamNetwork#ddns_generate_hostname}
  */
  readonly ddnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether only the DHCP server is allowed to update DNS, regardless of the DHCP clients requests. Note that changes for this field take effect only if ddns_use_option81 is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ddns_server_always_updates IpamNetwork#ddns_server_always_updates}
  */
  readonly ddnsServerAlwaysUpdates?: boolean | cdktf.IResolvable;
  /**
  * The DNS update Time to Live (TTL) value of a DHCP network object. The TTL is a 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ddns_ttl IpamNetwork#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * By default, the DHCP server does not update DNS when it allocates a fixed address to a client. You can configure the DHCP server to update the A and PTR records of a client with a fixed address. When this feature is enabled and the DHCP server adds A and PTR records for a fixed address, the DHCP server never discards the records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ddns_update_fixed_addresses IpamNetwork#ddns_update_fixed_addresses}
  */
  readonly ddnsUpdateFixedAddresses?: boolean | cdktf.IResolvable;
  /**
  * The support for DHCP Option 81 at the network level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ddns_use_option81 IpamNetwork#ddns_use_option81}
  */
  readonly ddnsUseOption81?: boolean | cdktf.IResolvable;
  /**
  * The reason for deleting the RIR registration request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#delete_reason IpamNetwork#delete_reason}
  */
  readonly deleteReason?: string;
  /**
  * If set to true, BOOTP settings are disabled and BOOTP requests will be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#deny_bootp IpamNetwork#deny_bootp}
  */
  readonly denyBootp?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a network is disabled or not. When this is set to False, the network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#disable IpamNetwork#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Discovered bridge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#discovered_bridge_domain IpamNetwork#discovered_bridge_domain}
  */
  readonly discoveredBridgeDomain?: string;
  /**
  * Discovered tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#discovered_tenant IpamNetwork#discovered_tenant}
  */
  readonly discoveredTenant?: string;
  /**
  * The discovery basic poll settings for this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#discovery_basic_poll_settings IpamNetwork#discovery_basic_poll_settings}
  */
  readonly discoveryBasicPollSettings?: IpamNetworkDiscoveryBasicPollSettings;
  /**
  * The discovery blackout setting for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#discovery_blackout_setting IpamNetwork#discovery_blackout_setting}
  */
  readonly discoveryBlackoutSetting?: IpamNetworkDiscoveryBlackoutSetting;
  /**
  * The member that will run discovery for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#discovery_member IpamNetwork#discovery_member}
  */
  readonly discoveryMember?: string;
  /**
  * The e-mail lists to which the appliance sends DHCP threshold alarm e-mail messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#email_list IpamNetwork#email_list}
  */
  readonly emailList?: string[];
  /**
  * The dynamic DNS updates flag of a DHCP network object. If set to True, the DHCP server sends DDNS updates to DNS servers in the same Grid, and to external DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_ddns IpamNetwork#enable_ddns}
  */
  readonly enableDdns?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP thresholds are enabled for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_dhcp_thresholds IpamNetwork#enable_dhcp_thresholds}
  */
  readonly enableDhcpThresholds?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a discovery is enabled or not for this network. When this is set to False, the network discovery is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_discovery IpamNetwork#enable_discovery}
  */
  readonly enableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP threshold warnings are sent through email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_email_warnings IpamNetwork#enable_email_warnings}
  */
  readonly enableEmailWarnings?: boolean | cdktf.IResolvable;
  /**
  * Determines if IFMAP publishing is enabled for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_ifmap_publishing IpamNetwork#enable_ifmap_publishing}
  */
  readonly enableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the network should be immediately enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_immediate_discovery IpamNetwork#enable_immediate_discovery}
  */
  readonly enableImmediateDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Set this to True if you want the DHCP server to use a different lease time for PXE clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_pxe_lease_time IpamNetwork#enable_pxe_lease_time}
  */
  readonly enablePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP threshold warnings are send through SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_snmp_warnings IpamNetwork#enable_snmp_warnings}
  */
  readonly enableSnmpWarnings?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object. For valid values for extensible attributes, see {extattrs:values}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#extattrs IpamNetwork#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This field contains the federated realms associated to this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#federated_realms IpamNetwork#federated_realms}
  */
  readonly federatedRealms?: IpamNetworkFederatedRealms[] | cdktf.IResolvable;
  /**
  * Specifies the function call to execute. The `next_available_network` function is supported for Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#func_call IpamNetwork#func_call}
  */
  readonly funcCall?: IpamNetworkFuncCall;
  /**
  * The percentage of DHCP network usage threshold above which network usage is not expected and may warrant your attention. When the high watermark is reached, the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#high_water_mark IpamNetwork#high_water_mark}
  */
  readonly highWaterMark?: number;
  /**
  * The percentage of DHCP network usage below which the corresponding SNMP trap is reset. A number that specifies the percentage of allocated addresses. The range is from 1 to 100. The high watermark reset value must be lower than the high watermark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#high_water_mark_reset IpamNetwork#high_water_mark_reset}
  */
  readonly highWaterMarkReset?: number;
  /**
  * If this field is set to False, the appliance returns all DHCP options the client is eligible to receive, rather than only the list of options the client has requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ignore_dhcp_option_list_request IpamNetwork#ignore_dhcp_option_list_request}
  */
  readonly ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the appliance will ignore DHCP client IDs or MAC addresses. Valid values are "NONE", "CLIENT", or "MACADDR". The default is "NONE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ignore_id IpamNetwork#ignore_id}
  */
  readonly ignoreId?: string;
  /**
  * A list of MAC addresses the appliance will ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ignore_mac_addresses IpamNetwork#ignore_mac_addresses}
  */
  readonly ignoreMacAddresses?: string[];
  /**
  * The e-mail lists to which the appliance sends IPAM threshold alarm e-mail messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipam_email_addresses IpamNetwork#ipam_email_addresses}
  */
  readonly ipamEmailAddresses?: string[];
  /**
  * The IPAM threshold settings for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipam_threshold_settings IpamNetwork#ipam_threshold_settings}
  */
  readonly ipamThresholdSettings?: IpamNetworkIpamThresholdSettings;
  /**
  * The IPAM trap settings for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipam_trap_settings IpamNetwork#ipam_trap_settings}
  */
  readonly ipamTrapSettings?: IpamNetworkIpamTrapSettings;
  /**
  * The IPv4 Address of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipv4addr IpamNetwork#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * An integer that specifies the period of time (in seconds) that frees and backs up leases remained in the database before they are automatically deleted. To disable lease scavenging, set the parameter to -1. The minimum positive value must be greater than 86400 seconds (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#lease_scavenge_time IpamNetwork#lease_scavenge_time}
  */
  readonly leaseScavengeTime?: number;
  /**
  * This field contains the logic filters to be applied on the this network. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#logic_filter_rules IpamNetwork#logic_filter_rules}
  */
  readonly logicFilterRules?: IpamNetworkLogicFilterRules[] | cdktf.IResolvable;
  /**
  * The percentage of DHCP network usage below which the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#low_water_mark IpamNetwork#low_water_mark}
  */
  readonly lowWaterMark?: number;
  /**
  * The percentage of DHCP network usage threshold below which network usage is not expected and may warrant your attention. When the low watermark is crossed, the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100. The low watermark reset value must be higher than the low watermark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#low_water_mark_reset IpamNetwork#low_water_mark_reset}
  */
  readonly lowWaterMarkReset?: number;
  /**
  * A list of members or Microsoft (r) servers that serve DHCP for this network. All members in the array must be of the same type. The struct type must be indicated in each element, by setting the "_struct" member to the struct type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#members IpamNetwork#members}
  */
  readonly members?: IpamNetworkMembers[] | cdktf.IResolvable;
  /**
  * This field controls whether this object is synchronized with the Multi-Grid Master. If this field is set to True, objects are not synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#mgm_private IpamNetwork#mgm_private}
  */
  readonly mgmPrivate?: boolean | cdktf.IResolvable;
  /**
  * The netmask of the network in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#netmask IpamNetwork#netmask}
  */
  readonly netmask?: number;
  /**
  * The IPv4 Address of the record. This field is `required` unless a `func_call` is specified to invoke `next_available_network`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#network IpamNetwork#network}
  */
  readonly network?: string;
  /**
  * The name of the network view in which this network resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#network_view IpamNetwork#network_view}
  */
  readonly networkView?: string;
  /**
  * The name in FQDN and/or IPv4 Address of the next server that the host needs to boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#nextserver IpamNetwork#nextserver}
  */
  readonly nextserver?: string;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#options IpamNetwork#options}
  */
  readonly options?: IpamNetworkOptions[] | cdktf.IResolvable;
  /**
  * The port control blackout setting for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#port_control_blackout_setting IpamNetwork#port_control_blackout_setting}
  */
  readonly portControlBlackoutSetting?: IpamNetworkPortControlBlackoutSetting;
  /**
  * The PXE lease time value of a DHCP Network object. Some hosts use PXE (Preboot Execution Environment) to boot remotely from a server. To better manage your IP resources, set a different lease time for PXE boot requests. You can configure the DHCP server to allocate an IP address with a shorter lease time to hosts that send PXE boot requests, so IP addresses are not leased longer than necessary. A 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#pxe_lease_time IpamNetwork#pxe_lease_time}
  */
  readonly pxeLeaseTime?: number;
  /**
  * If the field is set to True, the leases are kept in the Recycle Bin until one week after expiration. Otherwise, the leases are permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#recycle_leases IpamNetwork#recycle_leases}
  */
  readonly recycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#restart_if_needed IpamNetwork#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The RIR organization assoicated with the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#rir_organization IpamNetwork#rir_organization}
  */
  readonly rirOrganization?: string;
  /**
  * The RIR registration action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#rir_registration_action IpamNetwork#rir_registration_action}
  */
  readonly rirRegistrationAction?: string;
  /**
  * The registration status of the network in RIR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#rir_registration_status IpamNetwork#rir_registration_status}
  */
  readonly rirRegistrationStatus?: string;
  /**
  * If the field is set to True, the discovery blackout setting will be used for port control blackout setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#same_port_control_discovery_blackout IpamNetwork#same_port_control_discovery_blackout}
  */
  readonly samePortControlDiscoveryBlackout?: boolean | cdktf.IResolvable;
  /**
  * Determines whether to send the RIR registration request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#send_rir_request IpamNetwork#send_rir_request}
  */
  readonly sendRirRequest?: boolean | cdktf.IResolvable;
  /**
  * The DHCP Network Cisco ISE subscribe settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#subscribe_settings IpamNetwork#subscribe_settings}
  */
  readonly subscribeSettings?: IpamNetworkSubscribeSettings;
  /**
  * If set on creation, the network is created according to the values specified in the selected template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#template IpamNetwork#template}
  */
  readonly template?: string;
  /**
  * Determines whether the DHCP IPv4 Network is unmanaged or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#unmanaged IpamNetwork#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether the DHCP server updates DNS when a DHCP lease is renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#update_dns_on_lease_renewal IpamNetwork#update_dns_on_lease_renewal}
  */
  readonly updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_authority IpamNetwork#use_authority}
  */
  readonly useAuthority?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_blackout_setting , port_control_blackout_setting, same_port_control_discovery_blackout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_blackout_setting IpamNetwork#use_blackout_setting}
  */
  readonly useBlackoutSetting?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_bootfile IpamNetwork#use_bootfile}
  */
  readonly useBootfile?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_bootserver IpamNetwork#use_bootserver}
  */
  readonly useBootserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_domainname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ddns_domainname IpamNetwork#use_ddns_domainname}
  */
  readonly useDdnsDomainname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_generate_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ddns_generate_hostname IpamNetwork#use_ddns_generate_hostname}
  */
  readonly useDdnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ddns_ttl IpamNetwork#use_ddns_ttl}
  */
  readonly useDdnsTtl?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_update_fixed_addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ddns_update_fixed_addresses IpamNetwork#use_ddns_update_fixed_addresses}
  */
  readonly useDdnsUpdateFixedAddresses?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_use_option81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ddns_use_option81 IpamNetwork#use_ddns_use_option81}
  */
  readonly useDdnsUseOption81?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: deny_bootp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_deny_bootp IpamNetwork#use_deny_bootp}
  */
  readonly useDenyBootp?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_basic_poll_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_discovery_basic_polling_settings IpamNetwork#use_discovery_basic_polling_settings}
  */
  readonly useDiscoveryBasicPollingSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: email_list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_email_list IpamNetwork#use_email_list}
  */
  readonly useEmailList?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ddns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_enable_ddns IpamNetwork#use_enable_ddns}
  */
  readonly useEnableDdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_dhcp_thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_enable_dhcp_thresholds IpamNetwork#use_enable_dhcp_thresholds}
  */
  readonly useEnableDhcpThresholds?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_member , enable_discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_enable_discovery IpamNetwork#use_enable_discovery}
  */
  readonly useEnableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ifmap_publishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_enable_ifmap_publishing IpamNetwork#use_enable_ifmap_publishing}
  */
  readonly useEnableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_dhcp_option_list_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ignore_dhcp_option_list_request IpamNetwork#use_ignore_dhcp_option_list_request}
  */
  readonly useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ignore_id IpamNetwork#use_ignore_id}
  */
  readonly useIgnoreId?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ipam_email_addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ipam_email_addresses IpamNetwork#use_ipam_email_addresses}
  */
  readonly useIpamEmailAddresses?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ipam_threshold_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ipam_threshold_settings IpamNetwork#use_ipam_threshold_settings}
  */
  readonly useIpamThresholdSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ipam_trap_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_ipam_trap_settings IpamNetwork#use_ipam_trap_settings}
  */
  readonly useIpamTrapSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: lease_scavenge_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_lease_scavenge_time IpamNetwork#use_lease_scavenge_time}
  */
  readonly useLeaseScavengeTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_logic_filter_rules IpamNetwork#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: mgm_private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_mgm_private IpamNetwork#use_mgm_private}
  */
  readonly useMgmPrivate?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nextserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_nextserver IpamNetwork#use_nextserver}
  */
  readonly useNextserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_options IpamNetwork#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: pxe_lease_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_pxe_lease_time IpamNetwork#use_pxe_lease_time}
  */
  readonly usePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recycle_leases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_recycle_leases IpamNetwork#use_recycle_leases}
  */
  readonly useRecycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: subscribe_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_subscribe_settings IpamNetwork#use_subscribe_settings}
  */
  readonly useSubscribeSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: update_dns_on_lease_renewal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_update_dns_on_lease_renewal IpamNetwork#use_update_dns_on_lease_renewal}
  */
  readonly useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: zone_associations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_zone_associations IpamNetwork#use_zone_associations}
  */
  readonly useZoneAssociations?: boolean | cdktf.IResolvable;
  /**
  * List of VLANs assigned to Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#vlans IpamNetwork#vlans}
  */
  readonly vlans?: IpamNetworkVlans[] | cdktf.IResolvable;
  /**
  * The list of zones associated with this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#zone_associations IpamNetwork#zone_associations}
  */
  readonly zoneAssociations?: IpamNetworkZoneAssociations[] | cdktf.IResolvable;
}
export interface IpamNetworkCloudInfoDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipv4addr IpamNetwork#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipv6addr IpamNetwork#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#name IpamNetwork#name}
  */
  readonly name?: string;
}

export function ipamNetworkCloudInfoDelegatedMemberToTerraform(struct?: IpamNetworkCloudInfoDelegatedMember | cdktf.IResolvable): any {
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


export function ipamNetworkCloudInfoDelegatedMemberToHclTerraform(struct?: IpamNetworkCloudInfoDelegatedMember | cdktf.IResolvable): any {
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

export class IpamNetworkCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkCloudInfoDelegatedMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkCloudInfoDelegatedMember | cdktf.IResolvable | undefined) {
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
export interface IpamNetworkCloudInfo {
  /**
  * Contains information about the delegated member of the network. This is only set if the network is delegated to a member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#delegated_member IpamNetwork#delegated_member}
  */
  readonly delegatedMember?: IpamNetworkCloudInfoDelegatedMember;
}

export function ipamNetworkCloudInfoToTerraform(struct?: IpamNetworkCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_member: ipamNetworkCloudInfoDelegatedMemberToTerraform(struct!.delegatedMember),
  }
}


export function ipamNetworkCloudInfoToHclTerraform(struct?: IpamNetworkCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_member: {
      value: ipamNetworkCloudInfoDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamNetworkCloudInfoDelegatedMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamNetworkCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkCloudInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkCloudInfo | cdktf.IResolvable | undefined) {
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
  private _delegatedMember = new IpamNetworkCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: IpamNetworkCloudInfoDelegatedMember) {
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
export interface IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#day_of_month IpamNetwork#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#disable IpamNetwork#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#every IpamNetwork#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#frequency IpamNetwork#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#hour_of_day IpamNetwork#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#minutes_past_hour IpamNetwork#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#month IpamNetwork#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#recurring_time IpamNetwork#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#repeat IpamNetwork#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#time_zone IpamNetwork#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#weekdays IpamNetwork#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#year IpamNetwork#year}
  */
  readonly year?: number;
}

export function ipamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct?: IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
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


export function ipamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct?: IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
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

export class IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined) {
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
export interface IpamNetworkDiscoveryBasicPollSettings {
  /**
  * Determines whether auto ARP refresh before switch port polling is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#auto_arp_refresh_before_switch_port_polling IpamNetwork#auto_arp_refresh_before_switch_port_polling}
  */
  readonly autoArpRefreshBeforeSwitchPortPolling?: boolean | cdktf.IResolvable;
  /**
  * Determines whether CLI collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#cli_collection IpamNetwork#cli_collection}
  */
  readonly cliCollection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether complete ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#complete_ping_sweep IpamNetwork#complete_ping_sweep}
  */
  readonly completePingSweep?: boolean | cdktf.IResolvable;
  /**
  * Credential group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#credential_group IpamNetwork#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * Determines whether device profile is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#device_profile IpamNetwork#device_profile}
  */
  readonly deviceProfile?: boolean | cdktf.IResolvable;
  /**
  * Determines whether netbios scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#netbios_scanning IpamNetwork#netbios_scanning}
  */
  readonly netbiosScanning?: boolean | cdktf.IResolvable;
  /**
  * Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#polling_frequency_modifier IpamNetwork#polling_frequency_modifier}
  */
  readonly pollingFrequencyModifier?: string;
  /**
  * Determines whether port scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#port_scanning IpamNetwork#port_scanning}
  */
  readonly portScanning?: boolean | cdktf.IResolvable;
  /**
  * Determines whether smart subnet ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#smart_subnet_ping_sweep IpamNetwork#smart_subnet_ping_sweep}
  */
  readonly smartSubnetPingSweep?: boolean | cdktf.IResolvable;
  /**
  * Determines whether SNMP collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#snmp_collection IpamNetwork#snmp_collection}
  */
  readonly snmpCollection?: boolean | cdktf.IResolvable;
  /**
  * A switch port data collection polling mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#switch_port_data_collection_polling IpamNetwork#switch_port_data_collection_polling}
  */
  readonly switchPortDataCollectionPolling?: string;
  /**
  * Indicates the interval for switch port data collection polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#switch_port_data_collection_polling_interval IpamNetwork#switch_port_data_collection_polling_interval}
  */
  readonly switchPortDataCollectionPollingInterval?: number;
  /**
  * A switch port data collection polling schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#switch_port_data_collection_polling_schedule IpamNetwork#switch_port_data_collection_polling_schedule}
  */
  readonly switchPortDataCollectionPollingSchedule?: IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule;
  /**
  * Use Global Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_global_polling_frequency_modifier IpamNetwork#use_global_polling_frequency_modifier}
  */
  readonly useGlobalPollingFrequencyModifier?: boolean | cdktf.IResolvable;
}

export function ipamNetworkDiscoveryBasicPollSettingsToTerraform(struct?: IpamNetworkDiscoveryBasicPollSettings | cdktf.IResolvable): any {
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
    switch_port_data_collection_polling_schedule: ipamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct!.switchPortDataCollectionPollingSchedule),
    use_global_polling_frequency_modifier: cdktf.booleanToTerraform(struct!.useGlobalPollingFrequencyModifier),
  }
}


export function ipamNetworkDiscoveryBasicPollSettingsToHclTerraform(struct?: IpamNetworkDiscoveryBasicPollSettings | cdktf.IResolvable): any {
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
      value: ipamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct!.switchPortDataCollectionPollingSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule",
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

export class IpamNetworkDiscoveryBasicPollSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkDiscoveryBasicPollSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkDiscoveryBasicPollSettings | cdktf.IResolvable | undefined) {
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
  private _switchPortDataCollectionPollingSchedule = new IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference(this, "switch_port_data_collection_polling_schedule");
  public get switchPortDataCollectionPollingSchedule() {
    return this._switchPortDataCollectionPollingSchedule;
  }
  public putSwitchPortDataCollectionPollingSchedule(value: IpamNetworkDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule) {
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
export interface IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#day_of_month IpamNetwork#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#disable IpamNetwork#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#every IpamNetwork#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#frequency IpamNetwork#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#hour_of_day IpamNetwork#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#minutes_past_hour IpamNetwork#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#month IpamNetwork#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#recurring_time IpamNetwork#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#repeat IpamNetwork#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#time_zone IpamNetwork#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#weekdays IpamNetwork#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#year IpamNetwork#year}
  */
  readonly year?: number;
}

export function ipamNetworkDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct?: IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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


export function ipamNetworkDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct?: IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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

export class IpamNetworkDiscoveryBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
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
export interface IpamNetworkDiscoveryBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#blackout_duration IpamNetwork#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * A Schedule Setting struct that determines blackout schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#blackout_schedule IpamNetwork#blackout_schedule}
  */
  readonly blackoutSchedule?: IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_blackout IpamNetwork#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function ipamNetworkDiscoveryBlackoutSettingToTerraform(struct?: IpamNetworkDiscoveryBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: ipamNetworkDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function ipamNetworkDiscoveryBlackoutSettingToHclTerraform(struct?: IpamNetworkDiscoveryBlackoutSetting | cdktf.IResolvable): any {
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
      value: ipamNetworkDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule",
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

export class IpamNetworkDiscoveryBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkDiscoveryBlackoutSetting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkDiscoveryBlackoutSetting | cdktf.IResolvable | undefined) {
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
  private _blackoutSchedule = new IpamNetworkDiscoveryBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: IpamNetworkDiscoveryBlackoutSettingBlackoutSchedule) {
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
export interface IpamNetworkFederatedRealms {
  /**
  * The federated realm id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#id IpamNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The federated realm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#name IpamNetwork#name}
  */
  readonly name: string;
}

export function ipamNetworkFederatedRealmsToTerraform(struct?: IpamNetworkFederatedRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipamNetworkFederatedRealmsToHclTerraform(struct?: IpamNetworkFederatedRealms | cdktf.IResolvable): any {
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

export class IpamNetworkFederatedRealmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamNetworkFederatedRealms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkFederatedRealms | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

export class IpamNetworkFederatedRealmsList extends cdktf.ComplexList {
  public internalValue? : IpamNetworkFederatedRealms[] | cdktf.IResolvable

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
  public get(index: number): IpamNetworkFederatedRealmsOutputReference {
    return new IpamNetworkFederatedRealmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamNetworkFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#attribute_name IpamNetwork#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#object IpamNetwork#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#object_function IpamNetwork#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#object_parameters IpamNetwork#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#parameters IpamNetwork#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#result_field IpamNetwork#result_field}
  */
  readonly resultField?: string;
}

export function ipamNetworkFuncCallToTerraform(struct?: IpamNetworkFuncCall | cdktf.IResolvable): any {
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


export function ipamNetworkFuncCallToHclTerraform(struct?: IpamNetworkFuncCall | cdktf.IResolvable): any {
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

export class IpamNetworkFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkFuncCall | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkFuncCall | cdktf.IResolvable | undefined) {
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
export interface IpamNetworkIpamThresholdSettings {
  /**
  * Indicates the percentage point which resets the email/SNMP trap sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#reset_value IpamNetwork#reset_value}
  */
  readonly resetValue?: number;
  /**
  * Indicates the percentage point which triggers the email/SNMP trap sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#trigger_value IpamNetwork#trigger_value}
  */
  readonly triggerValue?: number;
}

export function ipamNetworkIpamThresholdSettingsToTerraform(struct?: IpamNetworkIpamThresholdSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reset_value: cdktf.numberToTerraform(struct!.resetValue),
    trigger_value: cdktf.numberToTerraform(struct!.triggerValue),
  }
}


export function ipamNetworkIpamThresholdSettingsToHclTerraform(struct?: IpamNetworkIpamThresholdSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reset_value: {
      value: cdktf.numberToHclTerraform(struct!.resetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_value: {
      value: cdktf.numberToHclTerraform(struct!.triggerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamNetworkIpamThresholdSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkIpamThresholdSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetValue = this._resetValue;
    }
    if (this._triggerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerValue = this._triggerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamNetworkIpamThresholdSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resetValue = undefined;
      this._triggerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resetValue = value.resetValue;
      this._triggerValue = value.triggerValue;
    }
  }

  // reset_value - computed: true, optional: true, required: false
  private _resetValue?: number; 
  public get resetValue() {
    return this.getNumberAttribute('reset_value');
  }
  public set resetValue(value: number) {
    this._resetValue = value;
  }
  public resetResetValue() {
    this._resetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetValueInput() {
    return this._resetValue;
  }

  // trigger_value - computed: true, optional: true, required: false
  private _triggerValue?: number; 
  public get triggerValue() {
    return this.getNumberAttribute('trigger_value');
  }
  public set triggerValue(value: number) {
    this._triggerValue = value;
  }
  public resetTriggerValue() {
    this._triggerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerValueInput() {
    return this._triggerValue;
  }
}
export interface IpamNetworkIpamTrapSettings {
  /**
  * Determines whether sending warnings by email is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_email_warnings IpamNetwork#enable_email_warnings}
  */
  readonly enableEmailWarnings?: boolean | cdktf.IResolvable;
  /**
  * Determines whether sending warnings by SNMP is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_snmp_warnings IpamNetwork#enable_snmp_warnings}
  */
  readonly enableSnmpWarnings?: boolean | cdktf.IResolvable;
}

export function ipamNetworkIpamTrapSettingsToTerraform(struct?: IpamNetworkIpamTrapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_email_warnings: cdktf.booleanToTerraform(struct!.enableEmailWarnings),
    enable_snmp_warnings: cdktf.booleanToTerraform(struct!.enableSnmpWarnings),
  }
}


export function ipamNetworkIpamTrapSettingsToHclTerraform(struct?: IpamNetworkIpamTrapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_email_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.enableEmailWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_snmp_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnmpWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamNetworkIpamTrapSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkIpamTrapSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEmailWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEmailWarnings = this._enableEmailWarnings;
    }
    if (this._enableSnmpWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnmpWarnings = this._enableSnmpWarnings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamNetworkIpamTrapSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableEmailWarnings = undefined;
      this._enableSnmpWarnings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableEmailWarnings = value.enableEmailWarnings;
      this._enableSnmpWarnings = value.enableSnmpWarnings;
    }
  }

  // enable_email_warnings - computed: true, optional: true, required: false
  private _enableEmailWarnings?: boolean | cdktf.IResolvable; 
  public get enableEmailWarnings() {
    return this.getBooleanAttribute('enable_email_warnings');
  }
  public set enableEmailWarnings(value: boolean | cdktf.IResolvable) {
    this._enableEmailWarnings = value;
  }
  public resetEnableEmailWarnings() {
    this._enableEmailWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailWarningsInput() {
    return this._enableEmailWarnings;
  }

  // enable_snmp_warnings - computed: true, optional: true, required: false
  private _enableSnmpWarnings?: boolean | cdktf.IResolvable; 
  public get enableSnmpWarnings() {
    return this.getBooleanAttribute('enable_snmp_warnings');
  }
  public set enableSnmpWarnings(value: boolean | cdktf.IResolvable) {
    this._enableSnmpWarnings = value;
  }
  public resetEnableSnmpWarnings() {
    this._enableSnmpWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnmpWarningsInput() {
    return this._enableSnmpWarnings;
  }
}
export interface IpamNetworkLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#filter IpamNetwork#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#type IpamNetwork#type}
  */
  readonly type: string;
}

export function ipamNetworkLogicFilterRulesToTerraform(struct?: IpamNetworkLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipamNetworkLogicFilterRulesToHclTerraform(struct?: IpamNetworkLogicFilterRules | cdktf.IResolvable): any {
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

export class IpamNetworkLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamNetworkLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkLogicFilterRules | cdktf.IResolvable | undefined) {
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

export class IpamNetworkLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : IpamNetworkLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): IpamNetworkLogicFilterRulesOutputReference {
    return new IpamNetworkLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamNetworkMembers {
  /**
  * The IPv4 Address or FQDN of the Microsoft server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipv4addr IpamNetwork#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#ipv6addr IpamNetwork#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#name IpamNetwork#name}
  */
  readonly name?: string;
  /**
  * The struct type of the object. The value must be one of 'dhcpmember' or 'msdhcpserver'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#struct IpamNetwork#struct}
  */
  readonly struct: string;
}

export function ipamNetworkMembersToTerraform(struct?: IpamNetworkMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
    struct: cdktf.stringToTerraform(struct!.struct),
  }
}


export function ipamNetworkMembersToHclTerraform(struct?: IpamNetworkMembers | cdktf.IResolvable): any {
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
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamNetworkMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamNetworkMembers | cdktf.IResolvable | undefined {
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
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamNetworkMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
      this._struct = undefined;
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
      this._struct = value.struct;
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

  // struct - computed: true, optional: false, required: true
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
  }
}

export class IpamNetworkMembersList extends cdktf.ComplexList {
  public internalValue? : IpamNetworkMembers[] | cdktf.IResolvable

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
  public get(index: number): IpamNetworkMembersOutputReference {
    return new IpamNetworkMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamNetworkMsAdUserData {
}

export function ipamNetworkMsAdUserDataToTerraform(struct?: IpamNetworkMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ipamNetworkMsAdUserDataToHclTerraform(struct?: IpamNetworkMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IpamNetworkMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamNetworkMsAdUserData | undefined) {
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
export interface IpamNetworkOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#name IpamNetwork#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#num IpamNetwork#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#use_option IpamNetwork#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#value IpamNetwork#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#vendor_class IpamNetwork#vendor_class}
  */
  readonly vendorClass?: string;
}

export function ipamNetworkOptionsToTerraform(struct?: IpamNetworkOptions | cdktf.IResolvable): any {
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


export function ipamNetworkOptionsToHclTerraform(struct?: IpamNetworkOptions | cdktf.IResolvable): any {
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

export class IpamNetworkOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamNetworkOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkOptions | cdktf.IResolvable | undefined) {
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

export class IpamNetworkOptionsList extends cdktf.ComplexList {
  public internalValue? : IpamNetworkOptions[] | cdktf.IResolvable

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
  public get(index: number): IpamNetworkOptionsOutputReference {
    return new IpamNetworkOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamNetworkPortControlBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#day_of_month IpamNetwork#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#disable IpamNetwork#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#every IpamNetwork#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#frequency IpamNetwork#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#hour_of_day IpamNetwork#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#minutes_past_hour IpamNetwork#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#month IpamNetwork#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#recurring_time IpamNetwork#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#repeat IpamNetwork#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#time_zone IpamNetwork#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#weekdays IpamNetwork#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#year IpamNetwork#year}
  */
  readonly year?: number;
}

export function ipamNetworkPortControlBlackoutSettingBlackoutScheduleToTerraform(struct?: IpamNetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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


export function ipamNetworkPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct?: IpamNetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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

export class IpamNetworkPortControlBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
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
export interface IpamNetworkPortControlBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#blackout_duration IpamNetwork#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * A Schedule Setting struct that determines blackout schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#blackout_schedule IpamNetwork#blackout_schedule}
  */
  readonly blackoutSchedule?: IpamNetworkPortControlBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enable_blackout IpamNetwork#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function ipamNetworkPortControlBlackoutSettingToTerraform(struct?: IpamNetworkPortControlBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: ipamNetworkPortControlBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function ipamNetworkPortControlBlackoutSettingToHclTerraform(struct?: IpamNetworkPortControlBlackoutSetting | cdktf.IResolvable): any {
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
      value: ipamNetworkPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "IpamNetworkPortControlBlackoutSettingBlackoutSchedule",
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

export class IpamNetworkPortControlBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkPortControlBlackoutSetting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkPortControlBlackoutSetting | cdktf.IResolvable | undefined) {
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
  private _blackoutSchedule = new IpamNetworkPortControlBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: IpamNetworkPortControlBlackoutSettingBlackoutSchedule) {
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
export interface IpamNetworkSubscribeSettingsMappedEaAttributes {
  /**
  * The name of the extensible attribute definition object the Cisco ISE attribute that is enabled for subscription is mapped on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#mapped_ea IpamNetwork#mapped_ea}
  */
  readonly mappedEa?: string;
  /**
  * The Cisco ISE attribute name that is enabled for publishsing from a Cisco ISE endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#name IpamNetwork#name}
  */
  readonly name?: string;
}

export function ipamNetworkSubscribeSettingsMappedEaAttributesToTerraform(struct?: IpamNetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapped_ea: cdktf.stringToTerraform(struct!.mappedEa),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipamNetworkSubscribeSettingsMappedEaAttributesToHclTerraform(struct?: IpamNetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
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

export class IpamNetworkSubscribeSettingsMappedEaAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamNetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined) {
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

export class IpamNetworkSubscribeSettingsMappedEaAttributesList extends cdktf.ComplexList {
  public internalValue? : IpamNetworkSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable

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
  public get(index: number): IpamNetworkSubscribeSettingsMappedEaAttributesOutputReference {
    return new IpamNetworkSubscribeSettingsMappedEaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamNetworkSubscribeSettings {
  /**
  * The list of Cisco ISE attributes allowed for subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#enabled_attributes IpamNetwork#enabled_attributes}
  */
  readonly enabledAttributes?: string[];
  /**
  * The list of NIOS extensible attributes to Cisco ISE attributes mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#mapped_ea_attributes IpamNetwork#mapped_ea_attributes}
  */
  readonly mappedEaAttributes?: IpamNetworkSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable;
}

export function ipamNetworkSubscribeSettingsToTerraform(struct?: IpamNetworkSubscribeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledAttributes),
    mapped_ea_attributes: cdktf.listMapper(ipamNetworkSubscribeSettingsMappedEaAttributesToTerraform, false)(struct!.mappedEaAttributes),
  }
}


export function ipamNetworkSubscribeSettingsToHclTerraform(struct?: IpamNetworkSubscribeSettings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ipamNetworkSubscribeSettingsMappedEaAttributesToHclTerraform, false)(struct!.mappedEaAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "IpamNetworkSubscribeSettingsMappedEaAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamNetworkSubscribeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpamNetworkSubscribeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkSubscribeSettings | cdktf.IResolvable | undefined) {
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
  private _mappedEaAttributes = new IpamNetworkSubscribeSettingsMappedEaAttributesList(this, "mapped_ea_attributes", false);
  public get mappedEaAttributes() {
    return this._mappedEaAttributes;
  }
  public putMappedEaAttributes(value: IpamNetworkSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable) {
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
export interface IpamNetworkVlans {
  /**
  * Reference to the underlying StaticVlan object vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#vlan IpamNetwork#vlan}
  */
  readonly vlan?: { [key: string]: string };
}

export function ipamNetworkVlansToTerraform(struct?: IpamNetworkVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vlan),
  }
}


export function ipamNetworkVlansToHclTerraform(struct?: IpamNetworkVlans | cdktf.IResolvable): any {
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

export class IpamNetworkVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamNetworkVlans | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkVlans | cdktf.IResolvable | undefined) {
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

  // vlan - computed: false, optional: true, required: false
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

export class IpamNetworkVlansList extends cdktf.ComplexList {
  public internalValue? : IpamNetworkVlans[] | cdktf.IResolvable

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
  public get(index: number): IpamNetworkVlansOutputReference {
    return new IpamNetworkVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamNetworkZoneAssociations {
  /**
  * The FQDN of the authoritative forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#fqdn IpamNetwork#fqdn}
  */
  readonly fqdn: string;
  /**
  * True if this is the default zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#is_default IpamNetwork#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The view to which the zone belongs. If a view is not specified, the default view is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#view IpamNetwork#view}
  */
  readonly view?: string;
}

export function ipamNetworkZoneAssociationsToTerraform(struct?: IpamNetworkZoneAssociations | cdktf.IResolvable): any {
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


export function ipamNetworkZoneAssociationsToHclTerraform(struct?: IpamNetworkZoneAssociations | cdktf.IResolvable): any {
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

export class IpamNetworkZoneAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamNetworkZoneAssociations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IpamNetworkZoneAssociations | cdktf.IResolvable | undefined) {
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

  // fqdn - computed: false, optional: false, required: true
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

export class IpamNetworkZoneAssociationsList extends cdktf.ComplexList {
  public internalValue? : IpamNetworkZoneAssociations[] | cdktf.IResolvable

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
  public get(index: number): IpamNetworkZoneAssociationsOutputReference {
    return new IpamNetworkZoneAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network nios_ipam_network}
*/
export class IpamNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_ipam_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamNetwork to import
  * @param importFromId The id of the existing IpamNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_ipam_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_network nios_ipam_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpamNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_ipam_network',
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
    this._authority = config.authority;
    this._autoCreateReversezone = config.autoCreateReversezone;
    this._bootfile = config.bootfile;
    this._bootserver = config.bootserver;
    this._cloudInfo.internalValue = config.cloudInfo;
    this._cloudShared = config.cloudShared;
    this._comment = config.comment;
    this._ddnsDomainname = config.ddnsDomainname;
    this._ddnsGenerateHostname = config.ddnsGenerateHostname;
    this._ddnsServerAlwaysUpdates = config.ddnsServerAlwaysUpdates;
    this._ddnsTtl = config.ddnsTtl;
    this._ddnsUpdateFixedAddresses = config.ddnsUpdateFixedAddresses;
    this._ddnsUseOption81 = config.ddnsUseOption81;
    this._deleteReason = config.deleteReason;
    this._denyBootp = config.denyBootp;
    this._disable = config.disable;
    this._discoveredBridgeDomain = config.discoveredBridgeDomain;
    this._discoveredTenant = config.discoveredTenant;
    this._discoveryBasicPollSettings.internalValue = config.discoveryBasicPollSettings;
    this._discoveryBlackoutSetting.internalValue = config.discoveryBlackoutSetting;
    this._discoveryMember = config.discoveryMember;
    this._emailList = config.emailList;
    this._enableDdns = config.enableDdns;
    this._enableDhcpThresholds = config.enableDhcpThresholds;
    this._enableDiscovery = config.enableDiscovery;
    this._enableEmailWarnings = config.enableEmailWarnings;
    this._enableIfmapPublishing = config.enableIfmapPublishing;
    this._enableImmediateDiscovery = config.enableImmediateDiscovery;
    this._enablePxeLeaseTime = config.enablePxeLeaseTime;
    this._enableSnmpWarnings = config.enableSnmpWarnings;
    this._extattrs = config.extattrs;
    this._federatedRealms.internalValue = config.federatedRealms;
    this._funcCall.internalValue = config.funcCall;
    this._highWaterMark = config.highWaterMark;
    this._highWaterMarkReset = config.highWaterMarkReset;
    this._ignoreDhcpOptionListRequest = config.ignoreDhcpOptionListRequest;
    this._ignoreId = config.ignoreId;
    this._ignoreMacAddresses = config.ignoreMacAddresses;
    this._ipamEmailAddresses = config.ipamEmailAddresses;
    this._ipamThresholdSettings.internalValue = config.ipamThresholdSettings;
    this._ipamTrapSettings.internalValue = config.ipamTrapSettings;
    this._ipv4Addr = config.ipv4Addr;
    this._leaseScavengeTime = config.leaseScavengeTime;
    this._logicFilterRules.internalValue = config.logicFilterRules;
    this._lowWaterMark = config.lowWaterMark;
    this._lowWaterMarkReset = config.lowWaterMarkReset;
    this._members.internalValue = config.members;
    this._mgmPrivate = config.mgmPrivate;
    this._netmask = config.netmask;
    this._network = config.network;
    this._networkView = config.networkView;
    this._nextserver = config.nextserver;
    this._options.internalValue = config.options;
    this._portControlBlackoutSetting.internalValue = config.portControlBlackoutSetting;
    this._pxeLeaseTime = config.pxeLeaseTime;
    this._recycleLeases = config.recycleLeases;
    this._restartIfNeeded = config.restartIfNeeded;
    this._rirOrganization = config.rirOrganization;
    this._rirRegistrationAction = config.rirRegistrationAction;
    this._rirRegistrationStatus = config.rirRegistrationStatus;
    this._samePortControlDiscoveryBlackout = config.samePortControlDiscoveryBlackout;
    this._sendRirRequest = config.sendRirRequest;
    this._subscribeSettings.internalValue = config.subscribeSettings;
    this._template = config.template;
    this._unmanaged = config.unmanaged;
    this._updateDnsOnLeaseRenewal = config.updateDnsOnLeaseRenewal;
    this._useAuthority = config.useAuthority;
    this._useBlackoutSetting = config.useBlackoutSetting;
    this._useBootfile = config.useBootfile;
    this._useBootserver = config.useBootserver;
    this._useDdnsDomainname = config.useDdnsDomainname;
    this._useDdnsGenerateHostname = config.useDdnsGenerateHostname;
    this._useDdnsTtl = config.useDdnsTtl;
    this._useDdnsUpdateFixedAddresses = config.useDdnsUpdateFixedAddresses;
    this._useDdnsUseOption81 = config.useDdnsUseOption81;
    this._useDenyBootp = config.useDenyBootp;
    this._useDiscoveryBasicPollingSettings = config.useDiscoveryBasicPollingSettings;
    this._useEmailList = config.useEmailList;
    this._useEnableDdns = config.useEnableDdns;
    this._useEnableDhcpThresholds = config.useEnableDhcpThresholds;
    this._useEnableDiscovery = config.useEnableDiscovery;
    this._useEnableIfmapPublishing = config.useEnableIfmapPublishing;
    this._useIgnoreDhcpOptionListRequest = config.useIgnoreDhcpOptionListRequest;
    this._useIgnoreId = config.useIgnoreId;
    this._useIpamEmailAddresses = config.useIpamEmailAddresses;
    this._useIpamThresholdSettings = config.useIpamThresholdSettings;
    this._useIpamTrapSettings = config.useIpamTrapSettings;
    this._useLeaseScavengeTime = config.useLeaseScavengeTime;
    this._useLogicFilterRules = config.useLogicFilterRules;
    this._useMgmPrivate = config.useMgmPrivate;
    this._useNextserver = config.useNextserver;
    this._useOptions = config.useOptions;
    this._usePxeLeaseTime = config.usePxeLeaseTime;
    this._useRecycleLeases = config.useRecycleLeases;
    this._useSubscribeSettings = config.useSubscribeSettings;
    this._useUpdateDnsOnLeaseRenewal = config.useUpdateDnsOnLeaseRenewal;
    this._useZoneAssociations = config.useZoneAssociations;
    this._vlans.internalValue = config.vlans;
    this._zoneAssociations.internalValue = config.zoneAssociations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority - computed: true, optional: true, required: false
  private _authority?: boolean | cdktf.IResolvable; 
  public get authority() {
    return this.getBooleanAttribute('authority');
  }
  public set authority(value: boolean | cdktf.IResolvable) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // auto_create_reversezone - computed: false, optional: true, required: false
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

  // bootfile - computed: true, optional: true, required: false
  private _bootfile?: string; 
  public get bootfile() {
    return this.getStringAttribute('bootfile');
  }
  public set bootfile(value: string) {
    this._bootfile = value;
  }
  public resetBootfile() {
    this._bootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootfileInput() {
    return this._bootfile;
  }

  // bootserver - computed: true, optional: true, required: false
  private _bootserver?: string; 
  public get bootserver() {
    return this.getStringAttribute('bootserver');
  }
  public set bootserver(value: string) {
    this._bootserver = value;
  }
  public resetBootserver() {
    this._bootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootserverInput() {
    return this._bootserver;
  }

  // cloud_info - computed: true, optional: true, required: false
  private _cloudInfo = new IpamNetworkCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }
  public putCloudInfo(value: IpamNetworkCloudInfo) {
    this._cloudInfo.internalValue = value;
  }
  public resetCloudInfo() {
    this._cloudInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInfoInput() {
    return this._cloudInfo.internalValue;
  }

  // cloud_shared - computed: true, optional: true, required: false
  private _cloudShared?: boolean | cdktf.IResolvable; 
  public get cloudShared() {
    return this.getBooleanAttribute('cloud_shared');
  }
  public set cloudShared(value: boolean | cdktf.IResolvable) {
    this._cloudShared = value;
  }
  public resetCloudShared() {
    this._cloudShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSharedInput() {
    return this._cloudShared;
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

  // conflict_count - computed: true, optional: false, required: false
  public get conflictCount() {
    return this.getNumberAttribute('conflict_count');
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

  // ddns_update_fixed_addresses - computed: true, optional: true, required: false
  private _ddnsUpdateFixedAddresses?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateFixedAddresses() {
    return this.getBooleanAttribute('ddns_update_fixed_addresses');
  }
  public set ddnsUpdateFixedAddresses(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateFixedAddresses = value;
  }
  public resetDdnsUpdateFixedAddresses() {
    this._ddnsUpdateFixedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateFixedAddressesInput() {
    return this._ddnsUpdateFixedAddresses;
  }

  // ddns_use_option81 - computed: true, optional: true, required: false
  private _ddnsUseOption81?: boolean | cdktf.IResolvable; 
  public get ddnsUseOption81() {
    return this.getBooleanAttribute('ddns_use_option81');
  }
  public set ddnsUseOption81(value: boolean | cdktf.IResolvable) {
    this._ddnsUseOption81 = value;
  }
  public resetDdnsUseOption81() {
    this._ddnsUseOption81 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseOption81Input() {
    return this._ddnsUseOption81;
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

  // deny_bootp - computed: true, optional: true, required: false
  private _denyBootp?: boolean | cdktf.IResolvable; 
  public get denyBootp() {
    return this.getBooleanAttribute('deny_bootp');
  }
  public set denyBootp(value: boolean | cdktf.IResolvable) {
    this._denyBootp = value;
  }
  public resetDenyBootp() {
    this._denyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyBootpInput() {
    return this._denyBootp;
  }

  // dhcp_utilization - computed: true, optional: false, required: false
  public get dhcpUtilization() {
    return this.getNumberAttribute('dhcp_utilization');
  }

  // dhcp_utilization_status - computed: true, optional: false, required: false
  public get dhcpUtilizationStatus() {
    return this.getStringAttribute('dhcp_utilization_status');
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
  private _discoveryBasicPollSettings = new IpamNetworkDiscoveryBasicPollSettingsOutputReference(this, "discovery_basic_poll_settings");
  public get discoveryBasicPollSettings() {
    return this._discoveryBasicPollSettings;
  }
  public putDiscoveryBasicPollSettings(value: IpamNetworkDiscoveryBasicPollSettings) {
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
  private _discoveryBlackoutSetting = new IpamNetworkDiscoveryBlackoutSettingOutputReference(this, "discovery_blackout_setting");
  public get discoveryBlackoutSetting() {
    return this._discoveryBlackoutSetting;
  }
  public putDiscoveryBlackoutSetting(value: IpamNetworkDiscoveryBlackoutSetting) {
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

  // dynamic_hosts - computed: true, optional: false, required: false
  public get dynamicHosts() {
    return this.getNumberAttribute('dynamic_hosts');
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return this.getListAttribute('email_list');
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
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

  // enable_dhcp_thresholds - computed: true, optional: true, required: false
  private _enableDhcpThresholds?: boolean | cdktf.IResolvable; 
  public get enableDhcpThresholds() {
    return this.getBooleanAttribute('enable_dhcp_thresholds');
  }
  public set enableDhcpThresholds(value: boolean | cdktf.IResolvable) {
    this._enableDhcpThresholds = value;
  }
  public resetEnableDhcpThresholds() {
    this._enableDhcpThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpThresholdsInput() {
    return this._enableDhcpThresholds;
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

  // enable_email_warnings - computed: true, optional: true, required: false
  private _enableEmailWarnings?: boolean | cdktf.IResolvable; 
  public get enableEmailWarnings() {
    return this.getBooleanAttribute('enable_email_warnings');
  }
  public set enableEmailWarnings(value: boolean | cdktf.IResolvable) {
    this._enableEmailWarnings = value;
  }
  public resetEnableEmailWarnings() {
    this._enableEmailWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailWarningsInput() {
    return this._enableEmailWarnings;
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

  // enable_pxe_lease_time - computed: true, optional: true, required: false
  private _enablePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get enablePxeLeaseTime() {
    return this.getBooleanAttribute('enable_pxe_lease_time');
  }
  public set enablePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._enablePxeLeaseTime = value;
  }
  public resetEnablePxeLeaseTime() {
    this._enablePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePxeLeaseTimeInput() {
    return this._enablePxeLeaseTime;
  }

  // enable_snmp_warnings - computed: true, optional: true, required: false
  private _enableSnmpWarnings?: boolean | cdktf.IResolvable; 
  public get enableSnmpWarnings() {
    return this.getBooleanAttribute('enable_snmp_warnings');
  }
  public set enableSnmpWarnings(value: boolean | cdktf.IResolvable) {
    this._enableSnmpWarnings = value;
  }
  public resetEnableSnmpWarnings() {
    this._enableSnmpWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnmpWarningsInput() {
    return this._enableSnmpWarnings;
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

  // federated_realms - computed: true, optional: true, required: false
  private _federatedRealms = new IpamNetworkFederatedRealmsList(this, "federated_realms", false);
  public get federatedRealms() {
    return this._federatedRealms;
  }
  public putFederatedRealms(value: IpamNetworkFederatedRealms[] | cdktf.IResolvable) {
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
  private _funcCall = new IpamNetworkFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: IpamNetworkFuncCall) {
    this._funcCall.internalValue = value;
  }
  public resetFuncCall() {
    this._funcCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCallInput() {
    return this._funcCall.internalValue;
  }

  // high_water_mark - computed: true, optional: true, required: false
  private _highWaterMark?: number; 
  public get highWaterMark() {
    return this.getNumberAttribute('high_water_mark');
  }
  public set highWaterMark(value: number) {
    this._highWaterMark = value;
  }
  public resetHighWaterMark() {
    this._highWaterMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWaterMarkInput() {
    return this._highWaterMark;
  }

  // high_water_mark_reset - computed: true, optional: true, required: false
  private _highWaterMarkReset?: number; 
  public get highWaterMarkReset() {
    return this.getNumberAttribute('high_water_mark_reset');
  }
  public set highWaterMarkReset(value: number) {
    this._highWaterMarkReset = value;
  }
  public resetHighWaterMarkReset() {
    this._highWaterMarkReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWaterMarkResetInput() {
    return this._highWaterMarkReset;
  }

  // ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get ignoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('ignore_dhcp_option_list_request');
  }
  public set ignoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._ignoreDhcpOptionListRequest = value;
  }
  public resetIgnoreDhcpOptionListRequest() {
    this._ignoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDhcpOptionListRequestInput() {
    return this._ignoreDhcpOptionListRequest;
  }

  // ignore_id - computed: true, optional: true, required: false
  private _ignoreId?: string; 
  public get ignoreId() {
    return this.getStringAttribute('ignore_id');
  }
  public set ignoreId(value: string) {
    this._ignoreId = value;
  }
  public resetIgnoreId() {
    this._ignoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIdInput() {
    return this._ignoreId;
  }

  // ignore_mac_addresses - computed: false, optional: true, required: false
  private _ignoreMacAddresses?: string[]; 
  public get ignoreMacAddresses() {
    return this.getListAttribute('ignore_mac_addresses');
  }
  public set ignoreMacAddresses(value: string[]) {
    this._ignoreMacAddresses = value;
  }
  public resetIgnoreMacAddresses() {
    this._ignoreMacAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMacAddressesInput() {
    return this._ignoreMacAddresses;
  }

  // ipam_email_addresses - computed: false, optional: true, required: false
  private _ipamEmailAddresses?: string[]; 
  public get ipamEmailAddresses() {
    return this.getListAttribute('ipam_email_addresses');
  }
  public set ipamEmailAddresses(value: string[]) {
    this._ipamEmailAddresses = value;
  }
  public resetIpamEmailAddresses() {
    this._ipamEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamEmailAddressesInput() {
    return this._ipamEmailAddresses;
  }

  // ipam_threshold_settings - computed: true, optional: true, required: false
  private _ipamThresholdSettings = new IpamNetworkIpamThresholdSettingsOutputReference(this, "ipam_threshold_settings");
  public get ipamThresholdSettings() {
    return this._ipamThresholdSettings;
  }
  public putIpamThresholdSettings(value: IpamNetworkIpamThresholdSettings) {
    this._ipamThresholdSettings.internalValue = value;
  }
  public resetIpamThresholdSettings() {
    this._ipamThresholdSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamThresholdSettingsInput() {
    return this._ipamThresholdSettings.internalValue;
  }

  // ipam_trap_settings - computed: true, optional: true, required: false
  private _ipamTrapSettings = new IpamNetworkIpamTrapSettingsOutputReference(this, "ipam_trap_settings");
  public get ipamTrapSettings() {
    return this._ipamTrapSettings;
  }
  public putIpamTrapSettings(value: IpamNetworkIpamTrapSettings) {
    this._ipamTrapSettings.internalValue = value;
  }
  public resetIpamTrapSettings() {
    this._ipamTrapSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamTrapSettingsInput() {
    return this._ipamTrapSettings.internalValue;
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

  // last_rir_registration_update_sent - computed: true, optional: false, required: false
  public get lastRirRegistrationUpdateSent() {
    return this.getNumberAttribute('last_rir_registration_update_sent');
  }

  // last_rir_registration_update_status - computed: true, optional: false, required: false
  public get lastRirRegistrationUpdateStatus() {
    return this.getStringAttribute('last_rir_registration_update_status');
  }

  // lease_scavenge_time - computed: true, optional: true, required: false
  private _leaseScavengeTime?: number; 
  public get leaseScavengeTime() {
    return this.getNumberAttribute('lease_scavenge_time');
  }
  public set leaseScavengeTime(value: number) {
    this._leaseScavengeTime = value;
  }
  public resetLeaseScavengeTime() {
    this._leaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseScavengeTimeInput() {
    return this._leaseScavengeTime;
  }

  // logic_filter_rules - computed: false, optional: true, required: false
  private _logicFilterRules = new IpamNetworkLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: IpamNetworkLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // low_water_mark - computed: true, optional: true, required: false
  private _lowWaterMark?: number; 
  public get lowWaterMark() {
    return this.getNumberAttribute('low_water_mark');
  }
  public set lowWaterMark(value: number) {
    this._lowWaterMark = value;
  }
  public resetLowWaterMark() {
    this._lowWaterMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWaterMarkInput() {
    return this._lowWaterMark;
  }

  // low_water_mark_reset - computed: true, optional: true, required: false
  private _lowWaterMarkReset?: number; 
  public get lowWaterMarkReset() {
    return this.getNumberAttribute('low_water_mark_reset');
  }
  public set lowWaterMarkReset(value: number) {
    this._lowWaterMarkReset = value;
  }
  public resetLowWaterMarkReset() {
    this._lowWaterMarkReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWaterMarkResetInput() {
    return this._lowWaterMarkReset;
  }

  // members - computed: true, optional: true, required: false
  private _members = new IpamNetworkMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: IpamNetworkMembers[] | cdktf.IResolvable) {
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
  private _msAdUserData = new IpamNetworkMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: number; 
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
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

  // nextserver - computed: true, optional: true, required: false
  private _nextserver?: string; 
  public get nextserver() {
    return this.getStringAttribute('nextserver');
  }
  public set nextserver(value: string) {
    this._nextserver = value;
  }
  public resetNextserver() {
    this._nextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextserverInput() {
    return this._nextserver;
  }

  // options - computed: true, optional: true, required: false
  private _options = new IpamNetworkOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: IpamNetworkOptions[] | cdktf.IResolvable) {
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
  private _portControlBlackoutSetting = new IpamNetworkPortControlBlackoutSettingOutputReference(this, "port_control_blackout_setting");
  public get portControlBlackoutSetting() {
    return this._portControlBlackoutSetting;
  }
  public putPortControlBlackoutSetting(value: IpamNetworkPortControlBlackoutSetting) {
    this._portControlBlackoutSetting.internalValue = value;
  }
  public resetPortControlBlackoutSetting() {
    this._portControlBlackoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portControlBlackoutSettingInput() {
    return this._portControlBlackoutSetting.internalValue;
  }

  // pxe_lease_time - computed: true, optional: true, required: false
  private _pxeLeaseTime?: number; 
  public get pxeLeaseTime() {
    return this.getNumberAttribute('pxe_lease_time');
  }
  public set pxeLeaseTime(value: number) {
    this._pxeLeaseTime = value;
  }
  public resetPxeLeaseTime() {
    this._pxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeLeaseTimeInput() {
    return this._pxeLeaseTime;
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

  // rir_registration_action - computed: false, optional: true, required: false
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

  // static_hosts - computed: true, optional: false, required: false
  public get staticHosts() {
    return this.getNumberAttribute('static_hosts');
  }

  // subscribe_settings - computed: true, optional: true, required: false
  private _subscribeSettings = new IpamNetworkSubscribeSettingsOutputReference(this, "subscribe_settings");
  public get subscribeSettings() {
    return this._subscribeSettings;
  }
  public putSubscribeSettings(value: IpamNetworkSubscribeSettings) {
    this._subscribeSettings.internalValue = value;
  }
  public resetSubscribeSettings() {
    this._subscribeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeSettingsInput() {
    return this._subscribeSettings.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // total_hosts - computed: true, optional: false, required: false
  public get totalHosts() {
    return this.getNumberAttribute('total_hosts');
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

  // use_authority - computed: true, optional: true, required: false
  private _useAuthority?: boolean | cdktf.IResolvable; 
  public get useAuthority() {
    return this.getBooleanAttribute('use_authority');
  }
  public set useAuthority(value: boolean | cdktf.IResolvable) {
    this._useAuthority = value;
  }
  public resetUseAuthority() {
    this._useAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAuthorityInput() {
    return this._useAuthority;
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

  // use_bootfile - computed: true, optional: true, required: false
  private _useBootfile?: boolean | cdktf.IResolvable; 
  public get useBootfile() {
    return this.getBooleanAttribute('use_bootfile');
  }
  public set useBootfile(value: boolean | cdktf.IResolvable) {
    this._useBootfile = value;
  }
  public resetUseBootfile() {
    this._useBootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootfileInput() {
    return this._useBootfile;
  }

  // use_bootserver - computed: true, optional: true, required: false
  private _useBootserver?: boolean | cdktf.IResolvable; 
  public get useBootserver() {
    return this.getBooleanAttribute('use_bootserver');
  }
  public set useBootserver(value: boolean | cdktf.IResolvable) {
    this._useBootserver = value;
  }
  public resetUseBootserver() {
    this._useBootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootserverInput() {
    return this._useBootserver;
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

  // use_ddns_update_fixed_addresses - computed: true, optional: true, required: false
  private _useDdnsUpdateFixedAddresses?: boolean | cdktf.IResolvable; 
  public get useDdnsUpdateFixedAddresses() {
    return this.getBooleanAttribute('use_ddns_update_fixed_addresses');
  }
  public set useDdnsUpdateFixedAddresses(value: boolean | cdktf.IResolvable) {
    this._useDdnsUpdateFixedAddresses = value;
  }
  public resetUseDdnsUpdateFixedAddresses() {
    this._useDdnsUpdateFixedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsUpdateFixedAddressesInput() {
    return this._useDdnsUpdateFixedAddresses;
  }

  // use_ddns_use_option81 - computed: true, optional: true, required: false
  private _useDdnsUseOption81?: boolean | cdktf.IResolvable; 
  public get useDdnsUseOption81() {
    return this.getBooleanAttribute('use_ddns_use_option81');
  }
  public set useDdnsUseOption81(value: boolean | cdktf.IResolvable) {
    this._useDdnsUseOption81 = value;
  }
  public resetUseDdnsUseOption81() {
    this._useDdnsUseOption81 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsUseOption81Input() {
    return this._useDdnsUseOption81;
  }

  // use_deny_bootp - computed: true, optional: true, required: false
  private _useDenyBootp?: boolean | cdktf.IResolvable; 
  public get useDenyBootp() {
    return this.getBooleanAttribute('use_deny_bootp');
  }
  public set useDenyBootp(value: boolean | cdktf.IResolvable) {
    this._useDenyBootp = value;
  }
  public resetUseDenyBootp() {
    this._useDenyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDenyBootpInput() {
    return this._useDenyBootp;
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

  // use_email_list - computed: true, optional: true, required: false
  private _useEmailList?: boolean | cdktf.IResolvable; 
  public get useEmailList() {
    return this.getBooleanAttribute('use_email_list');
  }
  public set useEmailList(value: boolean | cdktf.IResolvable) {
    this._useEmailList = value;
  }
  public resetUseEmailList() {
    this._useEmailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEmailListInput() {
    return this._useEmailList;
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

  // use_enable_dhcp_thresholds - computed: true, optional: true, required: false
  private _useEnableDhcpThresholds?: boolean | cdktf.IResolvable; 
  public get useEnableDhcpThresholds() {
    return this.getBooleanAttribute('use_enable_dhcp_thresholds');
  }
  public set useEnableDhcpThresholds(value: boolean | cdktf.IResolvable) {
    this._useEnableDhcpThresholds = value;
  }
  public resetUseEnableDhcpThresholds() {
    this._useEnableDhcpThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDhcpThresholdsInput() {
    return this._useEnableDhcpThresholds;
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

  // use_ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get useIgnoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('use_ignore_dhcp_option_list_request');
  }
  public set useIgnoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._useIgnoreDhcpOptionListRequest = value;
  }
  public resetUseIgnoreDhcpOptionListRequest() {
    this._useIgnoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreDhcpOptionListRequestInput() {
    return this._useIgnoreDhcpOptionListRequest;
  }

  // use_ignore_id - computed: true, optional: true, required: false
  private _useIgnoreId?: boolean | cdktf.IResolvable; 
  public get useIgnoreId() {
    return this.getBooleanAttribute('use_ignore_id');
  }
  public set useIgnoreId(value: boolean | cdktf.IResolvable) {
    this._useIgnoreId = value;
  }
  public resetUseIgnoreId() {
    this._useIgnoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreIdInput() {
    return this._useIgnoreId;
  }

  // use_ipam_email_addresses - computed: true, optional: true, required: false
  private _useIpamEmailAddresses?: boolean | cdktf.IResolvable; 
  public get useIpamEmailAddresses() {
    return this.getBooleanAttribute('use_ipam_email_addresses');
  }
  public set useIpamEmailAddresses(value: boolean | cdktf.IResolvable) {
    this._useIpamEmailAddresses = value;
  }
  public resetUseIpamEmailAddresses() {
    this._useIpamEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpamEmailAddressesInput() {
    return this._useIpamEmailAddresses;
  }

  // use_ipam_threshold_settings - computed: true, optional: true, required: false
  private _useIpamThresholdSettings?: boolean | cdktf.IResolvable; 
  public get useIpamThresholdSettings() {
    return this.getBooleanAttribute('use_ipam_threshold_settings');
  }
  public set useIpamThresholdSettings(value: boolean | cdktf.IResolvable) {
    this._useIpamThresholdSettings = value;
  }
  public resetUseIpamThresholdSettings() {
    this._useIpamThresholdSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpamThresholdSettingsInput() {
    return this._useIpamThresholdSettings;
  }

  // use_ipam_trap_settings - computed: true, optional: true, required: false
  private _useIpamTrapSettings?: boolean | cdktf.IResolvable; 
  public get useIpamTrapSettings() {
    return this.getBooleanAttribute('use_ipam_trap_settings');
  }
  public set useIpamTrapSettings(value: boolean | cdktf.IResolvable) {
    this._useIpamTrapSettings = value;
  }
  public resetUseIpamTrapSettings() {
    this._useIpamTrapSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpamTrapSettingsInput() {
    return this._useIpamTrapSettings;
  }

  // use_lease_scavenge_time - computed: true, optional: true, required: false
  private _useLeaseScavengeTime?: boolean | cdktf.IResolvable; 
  public get useLeaseScavengeTime() {
    return this.getBooleanAttribute('use_lease_scavenge_time');
  }
  public set useLeaseScavengeTime(value: boolean | cdktf.IResolvable) {
    this._useLeaseScavengeTime = value;
  }
  public resetUseLeaseScavengeTime() {
    this._useLeaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLeaseScavengeTimeInput() {
    return this._useLeaseScavengeTime;
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

  // use_nextserver - computed: true, optional: true, required: false
  private _useNextserver?: boolean | cdktf.IResolvable; 
  public get useNextserver() {
    return this.getBooleanAttribute('use_nextserver');
  }
  public set useNextserver(value: boolean | cdktf.IResolvable) {
    this._useNextserver = value;
  }
  public resetUseNextserver() {
    this._useNextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNextserverInput() {
    return this._useNextserver;
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

  // use_pxe_lease_time - computed: true, optional: true, required: false
  private _usePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get usePxeLeaseTime() {
    return this.getBooleanAttribute('use_pxe_lease_time');
  }
  public set usePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._usePxeLeaseTime = value;
  }
  public resetUsePxeLeaseTime() {
    this._usePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePxeLeaseTimeInput() {
    return this._usePxeLeaseTime;
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

  // utilization - computed: true, optional: false, required: false
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }

  // utilization_update - computed: true, optional: false, required: false
  public get utilizationUpdate() {
    return this.getNumberAttribute('utilization_update');
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans = new IpamNetworkVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: IpamNetworkVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }

  // zone_associations - computed: false, optional: true, required: false
  private _zoneAssociations = new IpamNetworkZoneAssociationsList(this, "zone_associations", false);
  public get zoneAssociations() {
    return this._zoneAssociations;
  }
  public putZoneAssociations(value: IpamNetworkZoneAssociations[] | cdktf.IResolvable) {
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
      authority: cdktf.booleanToTerraform(this._authority),
      auto_create_reversezone: cdktf.booleanToTerraform(this._autoCreateReversezone),
      bootfile: cdktf.stringToTerraform(this._bootfile),
      bootserver: cdktf.stringToTerraform(this._bootserver),
      cloud_info: ipamNetworkCloudInfoToTerraform(this._cloudInfo.internalValue),
      cloud_shared: cdktf.booleanToTerraform(this._cloudShared),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_domainname: cdktf.stringToTerraform(this._ddnsDomainname),
      ddns_generate_hostname: cdktf.booleanToTerraform(this._ddnsGenerateHostname),
      ddns_server_always_updates: cdktf.booleanToTerraform(this._ddnsServerAlwaysUpdates),
      ddns_ttl: cdktf.numberToTerraform(this._ddnsTtl),
      ddns_update_fixed_addresses: cdktf.booleanToTerraform(this._ddnsUpdateFixedAddresses),
      ddns_use_option81: cdktf.booleanToTerraform(this._ddnsUseOption81),
      delete_reason: cdktf.stringToTerraform(this._deleteReason),
      deny_bootp: cdktf.booleanToTerraform(this._denyBootp),
      disable: cdktf.booleanToTerraform(this._disable),
      discovered_bridge_domain: cdktf.stringToTerraform(this._discoveredBridgeDomain),
      discovered_tenant: cdktf.stringToTerraform(this._discoveredTenant),
      discovery_basic_poll_settings: ipamNetworkDiscoveryBasicPollSettingsToTerraform(this._discoveryBasicPollSettings.internalValue),
      discovery_blackout_setting: ipamNetworkDiscoveryBlackoutSettingToTerraform(this._discoveryBlackoutSetting.internalValue),
      discovery_member: cdktf.stringToTerraform(this._discoveryMember),
      email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailList),
      enable_ddns: cdktf.booleanToTerraform(this._enableDdns),
      enable_dhcp_thresholds: cdktf.booleanToTerraform(this._enableDhcpThresholds),
      enable_discovery: cdktf.booleanToTerraform(this._enableDiscovery),
      enable_email_warnings: cdktf.booleanToTerraform(this._enableEmailWarnings),
      enable_ifmap_publishing: cdktf.booleanToTerraform(this._enableIfmapPublishing),
      enable_immediate_discovery: cdktf.booleanToTerraform(this._enableImmediateDiscovery),
      enable_pxe_lease_time: cdktf.booleanToTerraform(this._enablePxeLeaseTime),
      enable_snmp_warnings: cdktf.booleanToTerraform(this._enableSnmpWarnings),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      federated_realms: cdktf.listMapper(ipamNetworkFederatedRealmsToTerraform, false)(this._federatedRealms.internalValue),
      func_call: ipamNetworkFuncCallToTerraform(this._funcCall.internalValue),
      high_water_mark: cdktf.numberToTerraform(this._highWaterMark),
      high_water_mark_reset: cdktf.numberToTerraform(this._highWaterMarkReset),
      ignore_dhcp_option_list_request: cdktf.booleanToTerraform(this._ignoreDhcpOptionListRequest),
      ignore_id: cdktf.stringToTerraform(this._ignoreId),
      ignore_mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreMacAddresses),
      ipam_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipamEmailAddresses),
      ipam_threshold_settings: ipamNetworkIpamThresholdSettingsToTerraform(this._ipamThresholdSettings.internalValue),
      ipam_trap_settings: ipamNetworkIpamTrapSettingsToTerraform(this._ipamTrapSettings.internalValue),
      ipv4addr: cdktf.stringToTerraform(this._ipv4Addr),
      lease_scavenge_time: cdktf.numberToTerraform(this._leaseScavengeTime),
      logic_filter_rules: cdktf.listMapper(ipamNetworkLogicFilterRulesToTerraform, false)(this._logicFilterRules.internalValue),
      low_water_mark: cdktf.numberToTerraform(this._lowWaterMark),
      low_water_mark_reset: cdktf.numberToTerraform(this._lowWaterMarkReset),
      members: cdktf.listMapper(ipamNetworkMembersToTerraform, false)(this._members.internalValue),
      mgm_private: cdktf.booleanToTerraform(this._mgmPrivate),
      netmask: cdktf.numberToTerraform(this._netmask),
      network: cdktf.stringToTerraform(this._network),
      network_view: cdktf.stringToTerraform(this._networkView),
      nextserver: cdktf.stringToTerraform(this._nextserver),
      options: cdktf.listMapper(ipamNetworkOptionsToTerraform, false)(this._options.internalValue),
      port_control_blackout_setting: ipamNetworkPortControlBlackoutSettingToTerraform(this._portControlBlackoutSetting.internalValue),
      pxe_lease_time: cdktf.numberToTerraform(this._pxeLeaseTime),
      recycle_leases: cdktf.booleanToTerraform(this._recycleLeases),
      restart_if_needed: cdktf.booleanToTerraform(this._restartIfNeeded),
      rir_organization: cdktf.stringToTerraform(this._rirOrganization),
      rir_registration_action: cdktf.stringToTerraform(this._rirRegistrationAction),
      rir_registration_status: cdktf.stringToTerraform(this._rirRegistrationStatus),
      same_port_control_discovery_blackout: cdktf.booleanToTerraform(this._samePortControlDiscoveryBlackout),
      send_rir_request: cdktf.booleanToTerraform(this._sendRirRequest),
      subscribe_settings: ipamNetworkSubscribeSettingsToTerraform(this._subscribeSettings.internalValue),
      template: cdktf.stringToTerraform(this._template),
      unmanaged: cdktf.booleanToTerraform(this._unmanaged),
      update_dns_on_lease_renewal: cdktf.booleanToTerraform(this._updateDnsOnLeaseRenewal),
      use_authority: cdktf.booleanToTerraform(this._useAuthority),
      use_blackout_setting: cdktf.booleanToTerraform(this._useBlackoutSetting),
      use_bootfile: cdktf.booleanToTerraform(this._useBootfile),
      use_bootserver: cdktf.booleanToTerraform(this._useBootserver),
      use_ddns_domainname: cdktf.booleanToTerraform(this._useDdnsDomainname),
      use_ddns_generate_hostname: cdktf.booleanToTerraform(this._useDdnsGenerateHostname),
      use_ddns_ttl: cdktf.booleanToTerraform(this._useDdnsTtl),
      use_ddns_update_fixed_addresses: cdktf.booleanToTerraform(this._useDdnsUpdateFixedAddresses),
      use_ddns_use_option81: cdktf.booleanToTerraform(this._useDdnsUseOption81),
      use_deny_bootp: cdktf.booleanToTerraform(this._useDenyBootp),
      use_discovery_basic_polling_settings: cdktf.booleanToTerraform(this._useDiscoveryBasicPollingSettings),
      use_email_list: cdktf.booleanToTerraform(this._useEmailList),
      use_enable_ddns: cdktf.booleanToTerraform(this._useEnableDdns),
      use_enable_dhcp_thresholds: cdktf.booleanToTerraform(this._useEnableDhcpThresholds),
      use_enable_discovery: cdktf.booleanToTerraform(this._useEnableDiscovery),
      use_enable_ifmap_publishing: cdktf.booleanToTerraform(this._useEnableIfmapPublishing),
      use_ignore_dhcp_option_list_request: cdktf.booleanToTerraform(this._useIgnoreDhcpOptionListRequest),
      use_ignore_id: cdktf.booleanToTerraform(this._useIgnoreId),
      use_ipam_email_addresses: cdktf.booleanToTerraform(this._useIpamEmailAddresses),
      use_ipam_threshold_settings: cdktf.booleanToTerraform(this._useIpamThresholdSettings),
      use_ipam_trap_settings: cdktf.booleanToTerraform(this._useIpamTrapSettings),
      use_lease_scavenge_time: cdktf.booleanToTerraform(this._useLeaseScavengeTime),
      use_logic_filter_rules: cdktf.booleanToTerraform(this._useLogicFilterRules),
      use_mgm_private: cdktf.booleanToTerraform(this._useMgmPrivate),
      use_nextserver: cdktf.booleanToTerraform(this._useNextserver),
      use_options: cdktf.booleanToTerraform(this._useOptions),
      use_pxe_lease_time: cdktf.booleanToTerraform(this._usePxeLeaseTime),
      use_recycle_leases: cdktf.booleanToTerraform(this._useRecycleLeases),
      use_subscribe_settings: cdktf.booleanToTerraform(this._useSubscribeSettings),
      use_update_dns_on_lease_renewal: cdktf.booleanToTerraform(this._useUpdateDnsOnLeaseRenewal),
      use_zone_associations: cdktf.booleanToTerraform(this._useZoneAssociations),
      vlans: cdktf.listMapper(ipamNetworkVlansToTerraform, false)(this._vlans.internalValue),
      zone_associations: cdktf.listMapper(ipamNetworkZoneAssociationsToTerraform, false)(this._zoneAssociations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authority: {
        value: cdktf.booleanToHclTerraform(this._authority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_reversezone: {
        value: cdktf.booleanToHclTerraform(this._autoCreateReversezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootfile: {
        value: cdktf.stringToHclTerraform(this._bootfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootserver: {
        value: cdktf.stringToHclTerraform(this._bootserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_info: {
        value: ipamNetworkCloudInfoToHclTerraform(this._cloudInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkCloudInfo",
      },
      cloud_shared: {
        value: cdktf.booleanToHclTerraform(this._cloudShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ddns_update_fixed_addresses: {
        value: cdktf.booleanToHclTerraform(this._ddnsUpdateFixedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_use_option81: {
        value: cdktf.booleanToHclTerraform(this._ddnsUseOption81),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_reason: {
        value: cdktf.stringToHclTerraform(this._deleteReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_bootp: {
        value: cdktf.booleanToHclTerraform(this._denyBootp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: ipamNetworkDiscoveryBasicPollSettingsToHclTerraform(this._discoveryBasicPollSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkDiscoveryBasicPollSettings",
      },
      discovery_blackout_setting: {
        value: ipamNetworkDiscoveryBlackoutSettingToHclTerraform(this._discoveryBlackoutSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkDiscoveryBlackoutSetting",
      },
      discovery_member: {
        value: cdktf.stringToHclTerraform(this._discoveryMember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailList),
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
      enable_dhcp_thresholds: {
        value: cdktf.booleanToHclTerraform(this._enableDhcpThresholds),
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
      enable_email_warnings: {
        value: cdktf.booleanToHclTerraform(this._enableEmailWarnings),
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
      enable_pxe_lease_time: {
        value: cdktf.booleanToHclTerraform(this._enablePxeLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_snmp_warnings: {
        value: cdktf.booleanToHclTerraform(this._enableSnmpWarnings),
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
        value: cdktf.listMapperHcl(ipamNetworkFederatedRealmsToHclTerraform, false)(this._federatedRealms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamNetworkFederatedRealmsList",
      },
      func_call: {
        value: ipamNetworkFuncCallToHclTerraform(this._funcCall.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkFuncCall",
      },
      high_water_mark: {
        value: cdktf.numberToHclTerraform(this._highWaterMark),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      high_water_mark_reset: {
        value: cdktf.numberToHclTerraform(this._highWaterMarkReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ignore_dhcp_option_list_request: {
        value: cdktf.booleanToHclTerraform(this._ignoreDhcpOptionListRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_id: {
        value: cdktf.stringToHclTerraform(this._ignoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_mac_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreMacAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipam_email_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipamEmailAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipam_threshold_settings: {
        value: ipamNetworkIpamThresholdSettingsToHclTerraform(this._ipamThresholdSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkIpamThresholdSettings",
      },
      ipam_trap_settings: {
        value: ipamNetworkIpamTrapSettingsToHclTerraform(this._ipamTrapSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkIpamTrapSettings",
      },
      ipv4addr: {
        value: cdktf.stringToHclTerraform(this._ipv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_scavenge_time: {
        value: cdktf.numberToHclTerraform(this._leaseScavengeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logic_filter_rules: {
        value: cdktf.listMapperHcl(ipamNetworkLogicFilterRulesToHclTerraform, false)(this._logicFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamNetworkLogicFilterRulesList",
      },
      low_water_mark: {
        value: cdktf.numberToHclTerraform(this._lowWaterMark),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      low_water_mark_reset: {
        value: cdktf.numberToHclTerraform(this._lowWaterMarkReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      members: {
        value: cdktf.listMapperHcl(ipamNetworkMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamNetworkMembersList",
      },
      mgm_private: {
        value: cdktf.booleanToHclTerraform(this._mgmPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netmask: {
        value: cdktf.numberToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      nextserver: {
        value: cdktf.stringToHclTerraform(this._nextserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(ipamNetworkOptionsToHclTerraform, false)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamNetworkOptionsList",
      },
      port_control_blackout_setting: {
        value: ipamNetworkPortControlBlackoutSettingToHclTerraform(this._portControlBlackoutSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkPortControlBlackoutSetting",
      },
      pxe_lease_time: {
        value: cdktf.numberToHclTerraform(this._pxeLeaseTime),
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
        value: ipamNetworkSubscribeSettingsToHclTerraform(this._subscribeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpamNetworkSubscribeSettings",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      use_authority: {
        value: cdktf.booleanToHclTerraform(this._useAuthority),
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
      use_bootfile: {
        value: cdktf.booleanToHclTerraform(this._useBootfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_bootserver: {
        value: cdktf.booleanToHclTerraform(this._useBootserver),
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
      use_ddns_update_fixed_addresses: {
        value: cdktf.booleanToHclTerraform(this._useDdnsUpdateFixedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_use_option81: {
        value: cdktf.booleanToHclTerraform(this._useDdnsUseOption81),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_deny_bootp: {
        value: cdktf.booleanToHclTerraform(this._useDenyBootp),
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
      use_email_list: {
        value: cdktf.booleanToHclTerraform(this._useEmailList),
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
      use_enable_dhcp_thresholds: {
        value: cdktf.booleanToHclTerraform(this._useEnableDhcpThresholds),
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
      use_ignore_dhcp_option_list_request: {
        value: cdktf.booleanToHclTerraform(this._useIgnoreDhcpOptionListRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ignore_id: {
        value: cdktf.booleanToHclTerraform(this._useIgnoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ipam_email_addresses: {
        value: cdktf.booleanToHclTerraform(this._useIpamEmailAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ipam_threshold_settings: {
        value: cdktf.booleanToHclTerraform(this._useIpamThresholdSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ipam_trap_settings: {
        value: cdktf.booleanToHclTerraform(this._useIpamTrapSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_lease_scavenge_time: {
        value: cdktf.booleanToHclTerraform(this._useLeaseScavengeTime),
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
      use_nextserver: {
        value: cdktf.booleanToHclTerraform(this._useNextserver),
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
      use_pxe_lease_time: {
        value: cdktf.booleanToHclTerraform(this._usePxeLeaseTime),
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
      use_zone_associations: {
        value: cdktf.booleanToHclTerraform(this._useZoneAssociations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlans: {
        value: cdktf.listMapperHcl(ipamNetworkVlansToHclTerraform, false)(this._vlans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamNetworkVlansList",
      },
      zone_associations: {
        value: cdktf.listMapperHcl(ipamNetworkZoneAssociationsToHclTerraform, false)(this._zoneAssociations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamNetworkZoneAssociationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
