// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingoptionsDhcprelayGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access profile to use for AAA services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#access_profile ForwardingoptionsDhcprelayGroup#access_profile}
  */
  readonly accessProfile?: string;
  /**
  * Name of DHCP server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#active_server_group ForwardingoptionsDhcprelayGroup#active_server_group}
  */
  readonly activeServerGroup?: string;
  /**
  * Accept DHCP-ACK from any server in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#active_server_group_allow_server_change ForwardingoptionsDhcprelayGroup#active_server_group_allow_server_change}
  */
  readonly activeServerGroupAllowServerChange?: boolean | cdktf.IResolvable;
  /**
  * DHCP authentication, username password to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#authentication_password ForwardingoptionsDhcprelayGroup#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * P time-to-live value to set in responses to client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_response_ttl ForwardingoptionsDhcprelayGroup#client_response_ttl}
  */
  readonly clientResponseTtl?: number;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#description ForwardingoptionsDhcprelayGroup#description}
  */
  readonly description?: string;
  /**
  * Dynamic profile to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile ForwardingoptionsDhcprelayGroup#dynamic_profile}
  */
  readonly dynamicProfile?: string;
  /**
  * Aggregate client profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile_aggregate_clients ForwardingoptionsDhcprelayGroup#dynamic_profile_aggregate_clients}
  */
  readonly dynamicProfileAggregateClients?: boolean | cdktf.IResolvable;
  /**
  * Merge or replace the client dynamic profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile_aggregate_clients_action ForwardingoptionsDhcprelayGroup#dynamic_profile_aggregate_clients_action}
  */
  readonly dynamicProfileAggregateClientsAction?: string;
  /**
  * Dynamic profile to use on the primary interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile_use_primary ForwardingoptionsDhcprelayGroup#dynamic_profile_use_primary}
  */
  readonly dynamicProfileUsePrimary?: string;
  /**
  * Forward DHCP packets without creating binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#forward_only ForwardingoptionsDhcprelayGroup#forward_only}
  */
  readonly forwardOnly?: boolean | cdktf.IResolvable;
  /**
  * Name of routing instance to forward-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#forward_only_routing_instance ForwardingoptionsDhcprelayGroup#forward_only_routing_instance}
  */
  readonly forwardOnlyRoutingInstance?: string;
  /**
  * Liveness detection failure action options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#liveness_detection_failure_action ForwardingoptionsDhcprelayGroup#liveness_detection_failure_action}
  */
  readonly livenessDetectionFailureAction?: string;
  /**
  * Maximum number of hops per packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#maximum_hop_count ForwardingoptionsDhcprelayGroup#maximum_hop_count}
  */
  readonly maximumHopCount?: number;
  /**
  * Minimum number of seconds before requests are forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#minimum_wait_time ForwardingoptionsDhcprelayGroup#minimum_wait_time}
  */
  readonly minimumWaitTime?: number;
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#name ForwardingoptionsDhcprelayGroup#name}
  */
  readonly name: string;
  /**
  * Add the client MAC address to the Relay Forward header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_agent_option_79 ForwardingoptionsDhcprelayGroup#relay_agent_option_79}
  */
  readonly relayAgentOption79?: boolean | cdktf.IResolvable;
  /**
  * Disconnect session on remote-id mismatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#remote_id_mismatch_disconnect ForwardingoptionsDhcprelayGroup#remote_id_mismatch_disconnect}
  */
  readonly remoteIdMismatchDisconnect?: boolean | cdktf.IResolvable;
  /**
  * Suppress access route addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#route_suppression_access ForwardingoptionsDhcprelayGroup#route_suppression_access}
  */
  readonly routeSuppressionAccess?: boolean | cdktf.IResolvable;
  /**
  * Suppress access-internal route addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#route_suppression_access_internal ForwardingoptionsDhcprelayGroup#route_suppression_access_internal}
  */
  readonly routeSuppressionAccessInternal?: boolean | cdktf.IResolvable;
  /**
  * Suppress destination route addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#route_suppression_destination ForwardingoptionsDhcprelayGroup#route_suppression_destination}
  */
  readonly routeSuppressionDestination?: boolean | cdktf.IResolvable;
  /**
  * Routing instance if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#routing_instance ForwardingoptionsDhcprelayGroup#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Server match default action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#server_match_default_action ForwardingoptionsDhcprelayGroup#server_match_default_action}
  */
  readonly serverMatchDefaultAction?: string;
  /**
  * Dynamic profile to use for default service activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#service_profile ForwardingoptionsDhcprelayGroup#service_profile}
  */
  readonly serviceProfile?: string;
  /**
  * Short cycle lockout max time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#short_cycle_protection_lockout_max_time ForwardingoptionsDhcprelayGroup#short_cycle_protection_lockout_max_time}
  */
  readonly shortCycleProtectionLockoutMaxTime?: number;
  /**
  * hort cycle lockout min time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#short_cycle_protection_lockout_min_time ForwardingoptionsDhcprelayGroup#short_cycle_protection_lockout_min_time}
  */
  readonly shortCycleProtectionLockoutMinTime?: number;
  /**
  * Use address of egress interface as source ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#source_ip_change ForwardingoptionsDhcprelayGroup#source_ip_change}
  */
  readonly sourceIpChange?: boolean | cdktf.IResolvable;
  /**
  * DHCPv6 option 17 vendor-specific processing, add router host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#vendor_specific_information_host_name ForwardingoptionsDhcprelayGroup#vendor_specific_information_host_name}
  */
  readonly vendorSpecificInformationHostName?: boolean | cdktf.IResolvable;
  /**
  * DHCPv6 option 17 vendor-specific processing, add location information expressed as interface name format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#vendor_specific_information_location ForwardingoptionsDhcprelayGroup#vendor_specific_information_location}
  */
  readonly vendorSpecificInformationLocation?: boolean | cdktf.IResolvable;
  /**
  * Version for DHCP or DHCPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#version ForwardingoptionsDhcprelayGroup#version}
  */
  readonly version?: string;
  /**
  * authentication_username_include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#authentication_username_include ForwardingoptionsDhcprelayGroup#authentication_username_include}
  */
  readonly authenticationUsernameInclude?: ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#interface ForwardingoptionsDhcprelayGroup#interface}
  */
  readonly interface?: ForwardingoptionsDhcprelayGroupInterface[] | cdktf.IResolvable;
  /**
  * lease_time_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#lease_time_validation ForwardingoptionsDhcprelayGroup#lease_time_validation}
  */
  readonly leaseTimeValidation?: ForwardingoptionsDhcprelayGroupLeaseTimeValidation;
  /**
  * liveness_detection_method_bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#liveness_detection_method_bfd ForwardingoptionsDhcprelayGroup#liveness_detection_method_bfd}
  */
  readonly livenessDetectionMethodBfd?: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd;
  /**
  * liveness_detection_method_layer2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#liveness_detection_method_layer2 ForwardingoptionsDhcprelayGroup#liveness_detection_method_layer2}
  */
  readonly livenessDetectionMethodLayer2?: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2;
  /**
  * overrides_v4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#overrides_v4 ForwardingoptionsDhcprelayGroup#overrides_v4}
  */
  readonly overridesV4?: ForwardingoptionsDhcprelayGroupOverridesV4;
  /**
  * overrides_v6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#overrides_v6 ForwardingoptionsDhcprelayGroup#overrides_v6}
  */
  readonly overridesV6?: ForwardingoptionsDhcprelayGroupOverridesV6;
  /**
  * relay_agent_interface_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_agent_interface_id ForwardingoptionsDhcprelayGroup#relay_agent_interface_id}
  */
  readonly relayAgentInterfaceId?: ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId;
  /**
  * relay_agent_remote_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_agent_remote_id ForwardingoptionsDhcprelayGroup#relay_agent_remote_id}
  */
  readonly relayAgentRemoteId?: ForwardingoptionsDhcprelayGroupRelayAgentRemoteId;
  /**
  * relay_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_option ForwardingoptionsDhcprelayGroup#relay_option}
  */
  readonly relayOption?: ForwardingoptionsDhcprelayGroupRelayOption;
  /**
  * relay_option_82 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_option_82 ForwardingoptionsDhcprelayGroup#relay_option_82}
  */
  readonly relayOption82?: ForwardingoptionsDhcprelayGroupRelayOption82;
  /**
  * server_match_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#server_match_address ForwardingoptionsDhcprelayGroup#server_match_address}
  */
  readonly serverMatchAddress?: ForwardingoptionsDhcprelayGroupServerMatchAddress[] | cdktf.IResolvable;
  /**
  * server_match_duid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#server_match_duid ForwardingoptionsDhcprelayGroup#server_match_duid}
  */
  readonly serverMatchDuid?: ForwardingoptionsDhcprelayGroupServerMatchDuid[] | cdktf.IResolvable;
}
export interface ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude {
  /**
  * Include circuit type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#circuit_type ForwardingoptionsDhcprelayGroup#circuit_type}
  */
  readonly circuitType?: boolean | cdktf.IResolvable;
  /**
  * Include client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_id ForwardingoptionsDhcprelayGroup#client_id}
  */
  readonly clientId?: boolean | cdktf.IResolvable;
  /**
  * Exclude all the headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_id_exclude_headers ForwardingoptionsDhcprelayGroup#client_id_exclude_headers}
  */
  readonly clientIdExcludeHeaders?: boolean | cdktf.IResolvable;
  /**
  * Use automatic ascii hex username encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_id_use_automatic_ascii_hex_encoding ForwardingoptionsDhcprelayGroup#client_id_use_automatic_ascii_hex_encoding}
  */
  readonly clientIdUseAutomaticAsciiHexEncoding?: boolean | cdktf.IResolvable;
  /**
  * Change delimiter/separator character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delimiter ForwardingoptionsDhcprelayGroup#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Add domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#domain_name ForwardingoptionsDhcprelayGroup#domain_name}
  */
  readonly domainName?: string;
  /**
  * Include interface description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#interface_description ForwardingoptionsDhcprelayGroup#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Include interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#interface_name ForwardingoptionsDhcprelayGroup#interface_name}
  */
  readonly interfaceName?: boolean | cdktf.IResolvable;
  /**
  * Include MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#mac_address ForwardingoptionsDhcprelayGroup#mac_address}
  */
  readonly macAddress?: boolean | cdktf.IResolvable;
  /**
  * Include option 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_60 ForwardingoptionsDhcprelayGroup#option_60}
  */
  readonly option60?: boolean | cdktf.IResolvable;
  /**
  * Include option 82.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_82 ForwardingoptionsDhcprelayGroup#option_82}
  */
  readonly option82?: boolean | cdktf.IResolvable;
  /**
  * Include option 82 circuit-id (sub option 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_82_circuit_id ForwardingoptionsDhcprelayGroup#option_82_circuit_id}
  */
  readonly option82CircuitId?: boolean | cdktf.IResolvable;
  /**
  * Include option 82 remote-id (sub option 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_82_remote_id ForwardingoptionsDhcprelayGroup#option_82_remote_id}
  */
  readonly option82RemoteId?: boolean | cdktf.IResolvable;
  /**
  * Include the relay agent interface ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_agent_interface_id ForwardingoptionsDhcprelayGroup#relay_agent_interface_id}
  */
  readonly relayAgentInterfaceId?: boolean | cdktf.IResolvable;
  /**
  * Include the relay agent remote ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_agent_remote_id ForwardingoptionsDhcprelayGroup#relay_agent_remote_id}
  */
  readonly relayAgentRemoteId?: boolean | cdktf.IResolvable;
  /**
  * Include the relay agent subscriber ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_agent_subscriber_id ForwardingoptionsDhcprelayGroup#relay_agent_subscriber_id}
  */
  readonly relayAgentSubscriberId?: boolean | cdktf.IResolvable;
  /**
  * Include routing instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#routing_instance_name ForwardingoptionsDhcprelayGroup#routing_instance_name}
  */
  readonly routingInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Add user defined prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#user_prefix ForwardingoptionsDhcprelayGroup#user_prefix}
  */
  readonly userPrefix?: string;
  /**
  * Include the vlan tag(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#vlan_tags ForwardingoptionsDhcprelayGroup#vlan_tags}
  */
  readonly vlanTags?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupAuthenticationUsernameIncludeToTerraform(struct?: ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_type: cdktf.booleanToTerraform(struct!.circuitType),
    client_id: cdktf.booleanToTerraform(struct!.clientId),
    client_id_exclude_headers: cdktf.booleanToTerraform(struct!.clientIdExcludeHeaders),
    client_id_use_automatic_ascii_hex_encoding: cdktf.booleanToTerraform(struct!.clientIdUseAutomaticAsciiHexEncoding),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.booleanToTerraform(struct!.interfaceName),
    mac_address: cdktf.booleanToTerraform(struct!.macAddress),
    option_60: cdktf.booleanToTerraform(struct!.option60),
    option_82: cdktf.booleanToTerraform(struct!.option82),
    option_82_circuit_id: cdktf.booleanToTerraform(struct!.option82CircuitId),
    option_82_remote_id: cdktf.booleanToTerraform(struct!.option82RemoteId),
    relay_agent_interface_id: cdktf.booleanToTerraform(struct!.relayAgentInterfaceId),
    relay_agent_remote_id: cdktf.booleanToTerraform(struct!.relayAgentRemoteId),
    relay_agent_subscriber_id: cdktf.booleanToTerraform(struct!.relayAgentSubscriberId),
    routing_instance_name: cdktf.booleanToTerraform(struct!.routingInstanceName),
    user_prefix: cdktf.stringToTerraform(struct!.userPrefix),
    vlan_tags: cdktf.booleanToTerraform(struct!.vlanTags),
  }
}


export function forwardingoptionsDhcprelayGroupAuthenticationUsernameIncludeToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_type: {
      value: cdktf.booleanToHclTerraform(struct!.circuitType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.booleanToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id_exclude_headers: {
      value: cdktf.booleanToHclTerraform(struct!.clientIdExcludeHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id_use_automatic_ascii_hex_encoding: {
      value: cdktf.booleanToHclTerraform(struct!.clientIdUseAutomaticAsciiHexEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
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
      value: cdktf.booleanToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_address: {
      value: cdktf.booleanToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_60: {
      value: cdktf.booleanToHclTerraform(struct!.option60),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_82: {
      value: cdktf.booleanToHclTerraform(struct!.option82),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_82_circuit_id: {
      value: cdktf.booleanToHclTerraform(struct!.option82CircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_82_remote_id: {
      value: cdktf.booleanToHclTerraform(struct!.option82RemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_agent_interface_id: {
      value: cdktf.booleanToHclTerraform(struct!.relayAgentInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_agent_remote_id: {
      value: cdktf.booleanToHclTerraform(struct!.relayAgentRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_agent_subscriber_id: {
      value: cdktf.booleanToHclTerraform(struct!.relayAgentSubscriberId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_instance_name: {
      value: cdktf.booleanToHclTerraform(struct!.routingInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_prefix: {
      value: cdktf.stringToHclTerraform(struct!.userPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_tags: {
      value: cdktf.booleanToHclTerraform(struct!.vlanTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupAuthenticationUsernameIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitType = this._circuitType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientIdExcludeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdExcludeHeaders = this._clientIdExcludeHeaders;
    }
    if (this._clientIdUseAutomaticAsciiHexEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdUseAutomaticAsciiHexEncoding = this._clientIdUseAutomaticAsciiHexEncoding;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._option60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option60 = this._option60;
    }
    if (this._option82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option82 = this._option82;
    }
    if (this._option82CircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.option82CircuitId = this._option82CircuitId;
    }
    if (this._option82RemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.option82RemoteId = this._option82RemoteId;
    }
    if (this._relayAgentInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayAgentInterfaceId = this._relayAgentInterfaceId;
    }
    if (this._relayAgentRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayAgentRemoteId = this._relayAgentRemoteId;
    }
    if (this._relayAgentSubscriberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayAgentSubscriberId = this._relayAgentSubscriberId;
    }
    if (this._routingInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstanceName = this._routingInstanceName;
    }
    if (this._userPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPrefix = this._userPrefix;
    }
    if (this._vlanTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTags = this._vlanTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitType = undefined;
      this._clientId = undefined;
      this._clientIdExcludeHeaders = undefined;
      this._clientIdUseAutomaticAsciiHexEncoding = undefined;
      this._delimiter = undefined;
      this._domainName = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._macAddress = undefined;
      this._option60 = undefined;
      this._option82 = undefined;
      this._option82CircuitId = undefined;
      this._option82RemoteId = undefined;
      this._relayAgentInterfaceId = undefined;
      this._relayAgentRemoteId = undefined;
      this._relayAgentSubscriberId = undefined;
      this._routingInstanceName = undefined;
      this._userPrefix = undefined;
      this._vlanTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitType = value.circuitType;
      this._clientId = value.clientId;
      this._clientIdExcludeHeaders = value.clientIdExcludeHeaders;
      this._clientIdUseAutomaticAsciiHexEncoding = value.clientIdUseAutomaticAsciiHexEncoding;
      this._delimiter = value.delimiter;
      this._domainName = value.domainName;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._macAddress = value.macAddress;
      this._option60 = value.option60;
      this._option82 = value.option82;
      this._option82CircuitId = value.option82CircuitId;
      this._option82RemoteId = value.option82RemoteId;
      this._relayAgentInterfaceId = value.relayAgentInterfaceId;
      this._relayAgentRemoteId = value.relayAgentRemoteId;
      this._relayAgentSubscriberId = value.relayAgentSubscriberId;
      this._routingInstanceName = value.routingInstanceName;
      this._userPrefix = value.userPrefix;
      this._vlanTags = value.vlanTags;
    }
  }

  // circuit_type - computed: false, optional: true, required: false
  private _circuitType?: boolean | cdktf.IResolvable; 
  public get circuitType() {
    return this.getBooleanAttribute('circuit_type');
  }
  public set circuitType(value: boolean | cdktf.IResolvable) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: boolean | cdktf.IResolvable; 
  public get clientId() {
    return this.getBooleanAttribute('client_id');
  }
  public set clientId(value: boolean | cdktf.IResolvable) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_id_exclude_headers - computed: false, optional: true, required: false
  private _clientIdExcludeHeaders?: boolean | cdktf.IResolvable; 
  public get clientIdExcludeHeaders() {
    return this.getBooleanAttribute('client_id_exclude_headers');
  }
  public set clientIdExcludeHeaders(value: boolean | cdktf.IResolvable) {
    this._clientIdExcludeHeaders = value;
  }
  public resetClientIdExcludeHeaders() {
    this._clientIdExcludeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdExcludeHeadersInput() {
    return this._clientIdExcludeHeaders;
  }

  // client_id_use_automatic_ascii_hex_encoding - computed: false, optional: true, required: false
  private _clientIdUseAutomaticAsciiHexEncoding?: boolean | cdktf.IResolvable; 
  public get clientIdUseAutomaticAsciiHexEncoding() {
    return this.getBooleanAttribute('client_id_use_automatic_ascii_hex_encoding');
  }
  public set clientIdUseAutomaticAsciiHexEncoding(value: boolean | cdktf.IResolvable) {
    this._clientIdUseAutomaticAsciiHexEncoding = value;
  }
  public resetClientIdUseAutomaticAsciiHexEncoding() {
    this._clientIdUseAutomaticAsciiHexEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdUseAutomaticAsciiHexEncodingInput() {
    return this._clientIdUseAutomaticAsciiHexEncoding;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
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

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: boolean | cdktf.IResolvable; 
  public get interfaceName() {
    return this.getBooleanAttribute('interface_name');
  }
  public set interfaceName(value: boolean | cdktf.IResolvable) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: boolean | cdktf.IResolvable; 
  public get macAddress() {
    return this.getBooleanAttribute('mac_address');
  }
  public set macAddress(value: boolean | cdktf.IResolvable) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // option_60 - computed: false, optional: true, required: false
  private _option60?: boolean | cdktf.IResolvable; 
  public get option60() {
    return this.getBooleanAttribute('option_60');
  }
  public set option60(value: boolean | cdktf.IResolvable) {
    this._option60 = value;
  }
  public resetOption60() {
    this._option60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option60Input() {
    return this._option60;
  }

  // option_82 - computed: false, optional: true, required: false
  private _option82?: boolean | cdktf.IResolvable; 
  public get option82() {
    return this.getBooleanAttribute('option_82');
  }
  public set option82(value: boolean | cdktf.IResolvable) {
    this._option82 = value;
  }
  public resetOption82() {
    this._option82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option82Input() {
    return this._option82;
  }

  // option_82_circuit_id - computed: false, optional: true, required: false
  private _option82CircuitId?: boolean | cdktf.IResolvable; 
  public get option82CircuitId() {
    return this.getBooleanAttribute('option_82_circuit_id');
  }
  public set option82CircuitId(value: boolean | cdktf.IResolvable) {
    this._option82CircuitId = value;
  }
  public resetOption82CircuitId() {
    this._option82CircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option82CircuitIdInput() {
    return this._option82CircuitId;
  }

  // option_82_remote_id - computed: false, optional: true, required: false
  private _option82RemoteId?: boolean | cdktf.IResolvable; 
  public get option82RemoteId() {
    return this.getBooleanAttribute('option_82_remote_id');
  }
  public set option82RemoteId(value: boolean | cdktf.IResolvable) {
    this._option82RemoteId = value;
  }
  public resetOption82RemoteId() {
    this._option82RemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option82RemoteIdInput() {
    return this._option82RemoteId;
  }

  // relay_agent_interface_id - computed: false, optional: true, required: false
  private _relayAgentInterfaceId?: boolean | cdktf.IResolvable; 
  public get relayAgentInterfaceId() {
    return this.getBooleanAttribute('relay_agent_interface_id');
  }
  public set relayAgentInterfaceId(value: boolean | cdktf.IResolvable) {
    this._relayAgentInterfaceId = value;
  }
  public resetRelayAgentInterfaceId() {
    this._relayAgentInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentInterfaceIdInput() {
    return this._relayAgentInterfaceId;
  }

  // relay_agent_remote_id - computed: false, optional: true, required: false
  private _relayAgentRemoteId?: boolean | cdktf.IResolvable; 
  public get relayAgentRemoteId() {
    return this.getBooleanAttribute('relay_agent_remote_id');
  }
  public set relayAgentRemoteId(value: boolean | cdktf.IResolvable) {
    this._relayAgentRemoteId = value;
  }
  public resetRelayAgentRemoteId() {
    this._relayAgentRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentRemoteIdInput() {
    return this._relayAgentRemoteId;
  }

  // relay_agent_subscriber_id - computed: false, optional: true, required: false
  private _relayAgentSubscriberId?: boolean | cdktf.IResolvable; 
  public get relayAgentSubscriberId() {
    return this.getBooleanAttribute('relay_agent_subscriber_id');
  }
  public set relayAgentSubscriberId(value: boolean | cdktf.IResolvable) {
    this._relayAgentSubscriberId = value;
  }
  public resetRelayAgentSubscriberId() {
    this._relayAgentSubscriberId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentSubscriberIdInput() {
    return this._relayAgentSubscriberId;
  }

  // routing_instance_name - computed: false, optional: true, required: false
  private _routingInstanceName?: boolean | cdktf.IResolvable; 
  public get routingInstanceName() {
    return this.getBooleanAttribute('routing_instance_name');
  }
  public set routingInstanceName(value: boolean | cdktf.IResolvable) {
    this._routingInstanceName = value;
  }
  public resetRoutingInstanceName() {
    this._routingInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceNameInput() {
    return this._routingInstanceName;
  }

  // user_prefix - computed: false, optional: true, required: false
  private _userPrefix?: string; 
  public get userPrefix() {
    return this.getStringAttribute('user_prefix');
  }
  public set userPrefix(value: string) {
    this._userPrefix = value;
  }
  public resetUserPrefix() {
    this._userPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrefixInput() {
    return this._userPrefix;
  }

  // vlan_tags - computed: false, optional: true, required: false
  private _vlanTags?: boolean | cdktf.IResolvable; 
  public get vlanTags() {
    return this.getBooleanAttribute('vlan_tags');
  }
  public set vlanTags(value: boolean | cdktf.IResolvable) {
    this._vlanTags = value;
  }
  public resetVlanTags() {
    this._vlanTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagsInput() {
    return this._vlanTags;
  }
}
export interface ForwardingoptionsDhcprelayGroupInterfaceOverridesV4 {
  /**
  * Allow packets without end-of-option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#allow_no_end_option ForwardingoptionsDhcprelayGroup#allow_no_end_option}
  */
  readonly allowNoEndOption?: boolean | cdktf.IResolvable;
  /**
  * Allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#allow_snooped_clients ForwardingoptionsDhcprelayGroup#allow_snooped_clients}
  */
  readonly allowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Overwrite existing 'giaddr' field, when present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#always_write_giaddr ForwardingoptionsDhcprelayGroup#always_write_giaddr}
  */
  readonly alwaysWriteGiaddr?: boolean | cdktf.IResolvable;
  /**
  * Overwrite existing value of option 82, when present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#always_write_option_82 ForwardingoptionsDhcprelayGroup#always_write_option_82}
  */
  readonly alwaysWriteOption82?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#asymmetric_lease_time ForwardingoptionsDhcprelayGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Allows relay of bootp req and reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#bootp_support ForwardingoptionsDhcprelayGroup#bootp_support}
  */
  readonly bootpSupport?: boolean | cdktf.IResolvable;
  /**
  * Use secondary match criteria for DISCOVER PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_discover_match ForwardingoptionsDhcprelayGroup#client_discover_match}
  */
  readonly clientDiscoverMatch?: string;
  /**
  * Delay subscriber authentication in DHCP protocol processing until request packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delay_authentication ForwardingoptionsDhcprelayGroup#delay_authentication}
  */
  readonly delayAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delete_binding_on_renegotiation ForwardingoptionsDhcprelayGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Disable DHCP relay processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#disable_relay ForwardingoptionsDhcprelayGroup#disable_relay}
  */
  readonly disableRelay?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dual_stack ForwardingoptionsDhcprelayGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#interface_client_limit ForwardingoptionsDhcprelayGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * Do not broadcast client responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#layer2_unicast_replies ForwardingoptionsDhcprelayGroup#layer2_unicast_replies}
  */
  readonly layer2UnicastReplies?: boolean | cdktf.IResolvable;
  /**
  * Don't allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_allow_snooped_clients ForwardingoptionsDhcprelayGroup#no_allow_snooped_clients}
  */
  readonly noAllowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Do not bind if stray DHCP request is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_bind_on_request ForwardingoptionsDhcprelayGroup#no_bind_on_request}
  */
  readonly noBindOnRequest?: boolean | cdktf.IResolvable;
  /**
  * Overwrite unicast bit in incoming packet, when present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_unicast_replies ForwardingoptionsDhcprelayGroup#no_unicast_replies}
  */
  readonly noUnicastReplies?: boolean | cdktf.IResolvable;
  /**
  * Put the relay in proxy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#proxy_mode ForwardingoptionsDhcprelayGroup#proxy_mode}
  */
  readonly proxyMode?: boolean | cdktf.IResolvable;
  /**
  * Interface for relay source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_source ForwardingoptionsDhcprelayGroup#relay_source}
  */
  readonly relaySource?: string;
  /**
  * Replace IP source address in request and release packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#replace_ip_source_with_giaddr ForwardingoptionsDhcprelayGroup#replace_ip_source_with_giaddr}
  */
  readonly replaceIpSourceWithGiaddr?: boolean | cdktf.IResolvable;
  /**
  * Always send RELEASE to the server when a binding is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#send_release_on_delete ForwardingoptionsDhcprelayGroup#send_release_on_delete}
  */
  readonly sendReleaseOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Trust options-82 option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#trust_option_82 ForwardingoptionsDhcprelayGroup#trust_option_82}
  */
  readonly trustOption82?: boolean | cdktf.IResolvable;
  /**
  * Set user defined description for option-82.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#user_defined_option_82 ForwardingoptionsDhcprelayGroup#user_defined_option_82}
  */
  readonly userDefinedOption82?: string;
}

export function forwardingoptionsDhcprelayGroupInterfaceOverridesV4ToTerraform(struct?: ForwardingoptionsDhcprelayGroupInterfaceOverridesV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_end_option: cdktf.booleanToTerraform(struct!.allowNoEndOption),
    allow_snooped_clients: cdktf.booleanToTerraform(struct!.allowSnoopedClients),
    always_write_giaddr: cdktf.booleanToTerraform(struct!.alwaysWriteGiaddr),
    always_write_option_82: cdktf.booleanToTerraform(struct!.alwaysWriteOption82),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    bootp_support: cdktf.booleanToTerraform(struct!.bootpSupport),
    client_discover_match: cdktf.stringToTerraform(struct!.clientDiscoverMatch),
    delay_authentication: cdktf.booleanToTerraform(struct!.delayAuthentication),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    disable_relay: cdktf.booleanToTerraform(struct!.disableRelay),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    layer2_unicast_replies: cdktf.booleanToTerraform(struct!.layer2UnicastReplies),
    no_allow_snooped_clients: cdktf.booleanToTerraform(struct!.noAllowSnoopedClients),
    no_bind_on_request: cdktf.booleanToTerraform(struct!.noBindOnRequest),
    no_unicast_replies: cdktf.booleanToTerraform(struct!.noUnicastReplies),
    proxy_mode: cdktf.booleanToTerraform(struct!.proxyMode),
    relay_source: cdktf.stringToTerraform(struct!.relaySource),
    replace_ip_source_with_giaddr: cdktf.booleanToTerraform(struct!.replaceIpSourceWithGiaddr),
    send_release_on_delete: cdktf.booleanToTerraform(struct!.sendReleaseOnDelete),
    trust_option_82: cdktf.booleanToTerraform(struct!.trustOption82),
    user_defined_option_82: cdktf.stringToTerraform(struct!.userDefinedOption82),
  }
}


export function forwardingoptionsDhcprelayGroupInterfaceOverridesV4ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupInterfaceOverridesV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_no_end_option: {
      value: cdktf.booleanToHclTerraform(struct!.allowNoEndOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.allowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_write_giaddr: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysWriteGiaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_write_option_82: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysWriteOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asymmetric_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.asymmetricLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bootp_support: {
      value: cdktf.booleanToHclTerraform(struct!.bootpSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_discover_match: {
      value: cdktf.stringToHclTerraform(struct!.clientDiscoverMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.delayAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_binding_on_renegotiation: {
      value: cdktf.booleanToHclTerraform(struct!.deleteBindingOnRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_relay: {
      value: cdktf.booleanToHclTerraform(struct!.disableRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dual_stack: {
      value: cdktf.stringToHclTerraform(struct!.dualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_client_limit: {
      value: cdktf.numberToHclTerraform(struct!.interfaceClientLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    layer2_unicast_replies: {
      value: cdktf.booleanToHclTerraform(struct!.layer2UnicastReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.noAllowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_bind_on_request: {
      value: cdktf.booleanToHclTerraform(struct!.noBindOnRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_unicast_replies: {
      value: cdktf.booleanToHclTerraform(struct!.noUnicastReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_mode: {
      value: cdktf.booleanToHclTerraform(struct!.proxyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_source: {
      value: cdktf.stringToHclTerraform(struct!.relaySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_ip_source_with_giaddr: {
      value: cdktf.booleanToHclTerraform(struct!.replaceIpSourceWithGiaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_release_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.sendReleaseOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_option_82: {
      value: cdktf.booleanToHclTerraform(struct!.trustOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined_option_82: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupInterfaceOverridesV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupInterfaceOverridesV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoEndOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoEndOption = this._allowNoEndOption;
    }
    if (this._allowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSnoopedClients = this._allowSnoopedClients;
    }
    if (this._alwaysWriteGiaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysWriteGiaddr = this._alwaysWriteGiaddr;
    }
    if (this._alwaysWriteOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysWriteOption82 = this._alwaysWriteOption82;
    }
    if (this._asymmetricLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricLeaseTime = this._asymmetricLeaseTime;
    }
    if (this._bootpSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootpSupport = this._bootpSupport;
    }
    if (this._clientDiscoverMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDiscoverMatch = this._clientDiscoverMatch;
    }
    if (this._delayAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAuthentication = this._delayAuthentication;
    }
    if (this._deleteBindingOnRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBindingOnRenegotiation = this._deleteBindingOnRenegotiation;
    }
    if (this._disableRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRelay = this._disableRelay;
    }
    if (this._dualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStack = this._dualStack;
    }
    if (this._interfaceClientLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceClientLimit = this._interfaceClientLimit;
    }
    if (this._layer2UnicastReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2UnicastReplies = this._layer2UnicastReplies;
    }
    if (this._noAllowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAllowSnoopedClients = this._noAllowSnoopedClients;
    }
    if (this._noBindOnRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBindOnRequest = this._noBindOnRequest;
    }
    if (this._noUnicastReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUnicastReplies = this._noUnicastReplies;
    }
    if (this._proxyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyMode = this._proxyMode;
    }
    if (this._relaySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaySource = this._relaySource;
    }
    if (this._replaceIpSourceWithGiaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceIpSourceWithGiaddr = this._replaceIpSourceWithGiaddr;
    }
    if (this._sendReleaseOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendReleaseOnDelete = this._sendReleaseOnDelete;
    }
    if (this._trustOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustOption82 = this._trustOption82;
    }
    if (this._userDefinedOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedOption82 = this._userDefinedOption82;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupInterfaceOverridesV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoEndOption = undefined;
      this._allowSnoopedClients = undefined;
      this._alwaysWriteGiaddr = undefined;
      this._alwaysWriteOption82 = undefined;
      this._asymmetricLeaseTime = undefined;
      this._bootpSupport = undefined;
      this._clientDiscoverMatch = undefined;
      this._delayAuthentication = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._disableRelay = undefined;
      this._dualStack = undefined;
      this._interfaceClientLimit = undefined;
      this._layer2UnicastReplies = undefined;
      this._noAllowSnoopedClients = undefined;
      this._noBindOnRequest = undefined;
      this._noUnicastReplies = undefined;
      this._proxyMode = undefined;
      this._relaySource = undefined;
      this._replaceIpSourceWithGiaddr = undefined;
      this._sendReleaseOnDelete = undefined;
      this._trustOption82 = undefined;
      this._userDefinedOption82 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoEndOption = value.allowNoEndOption;
      this._allowSnoopedClients = value.allowSnoopedClients;
      this._alwaysWriteGiaddr = value.alwaysWriteGiaddr;
      this._alwaysWriteOption82 = value.alwaysWriteOption82;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._bootpSupport = value.bootpSupport;
      this._clientDiscoverMatch = value.clientDiscoverMatch;
      this._delayAuthentication = value.delayAuthentication;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._disableRelay = value.disableRelay;
      this._dualStack = value.dualStack;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._layer2UnicastReplies = value.layer2UnicastReplies;
      this._noAllowSnoopedClients = value.noAllowSnoopedClients;
      this._noBindOnRequest = value.noBindOnRequest;
      this._noUnicastReplies = value.noUnicastReplies;
      this._proxyMode = value.proxyMode;
      this._relaySource = value.relaySource;
      this._replaceIpSourceWithGiaddr = value.replaceIpSourceWithGiaddr;
      this._sendReleaseOnDelete = value.sendReleaseOnDelete;
      this._trustOption82 = value.trustOption82;
      this._userDefinedOption82 = value.userDefinedOption82;
    }
  }

  // allow_no_end_option - computed: false, optional: true, required: false
  private _allowNoEndOption?: boolean | cdktf.IResolvable; 
  public get allowNoEndOption() {
    return this.getBooleanAttribute('allow_no_end_option');
  }
  public set allowNoEndOption(value: boolean | cdktf.IResolvable) {
    this._allowNoEndOption = value;
  }
  public resetAllowNoEndOption() {
    this._allowNoEndOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoEndOptionInput() {
    return this._allowNoEndOption;
  }

  // allow_snooped_clients - computed: false, optional: true, required: false
  private _allowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get allowSnoopedClients() {
    return this.getBooleanAttribute('allow_snooped_clients');
  }
  public set allowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._allowSnoopedClients = value;
  }
  public resetAllowSnoopedClients() {
    this._allowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnoopedClientsInput() {
    return this._allowSnoopedClients;
  }

  // always_write_giaddr - computed: false, optional: true, required: false
  private _alwaysWriteGiaddr?: boolean | cdktf.IResolvable; 
  public get alwaysWriteGiaddr() {
    return this.getBooleanAttribute('always_write_giaddr');
  }
  public set alwaysWriteGiaddr(value: boolean | cdktf.IResolvable) {
    this._alwaysWriteGiaddr = value;
  }
  public resetAlwaysWriteGiaddr() {
    this._alwaysWriteGiaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysWriteGiaddrInput() {
    return this._alwaysWriteGiaddr;
  }

  // always_write_option_82 - computed: false, optional: true, required: false
  private _alwaysWriteOption82?: boolean | cdktf.IResolvable; 
  public get alwaysWriteOption82() {
    return this.getBooleanAttribute('always_write_option_82');
  }
  public set alwaysWriteOption82(value: boolean | cdktf.IResolvable) {
    this._alwaysWriteOption82 = value;
  }
  public resetAlwaysWriteOption82() {
    this._alwaysWriteOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysWriteOption82Input() {
    return this._alwaysWriteOption82;
  }

  // asymmetric_lease_time - computed: false, optional: true, required: false
  private _asymmetricLeaseTime?: number; 
  public get asymmetricLeaseTime() {
    return this.getNumberAttribute('asymmetric_lease_time');
  }
  public set asymmetricLeaseTime(value: number) {
    this._asymmetricLeaseTime = value;
  }
  public resetAsymmetricLeaseTime() {
    this._asymmetricLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricLeaseTimeInput() {
    return this._asymmetricLeaseTime;
  }

  // bootp_support - computed: false, optional: true, required: false
  private _bootpSupport?: boolean | cdktf.IResolvable; 
  public get bootpSupport() {
    return this.getBooleanAttribute('bootp_support');
  }
  public set bootpSupport(value: boolean | cdktf.IResolvable) {
    this._bootpSupport = value;
  }
  public resetBootpSupport() {
    this._bootpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootpSupportInput() {
    return this._bootpSupport;
  }

  // client_discover_match - computed: false, optional: true, required: false
  private _clientDiscoverMatch?: string; 
  public get clientDiscoverMatch() {
    return this.getStringAttribute('client_discover_match');
  }
  public set clientDiscoverMatch(value: string) {
    this._clientDiscoverMatch = value;
  }
  public resetClientDiscoverMatch() {
    this._clientDiscoverMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDiscoverMatchInput() {
    return this._clientDiscoverMatch;
  }

  // delay_authentication - computed: false, optional: true, required: false
  private _delayAuthentication?: boolean | cdktf.IResolvable; 
  public get delayAuthentication() {
    return this.getBooleanAttribute('delay_authentication');
  }
  public set delayAuthentication(value: boolean | cdktf.IResolvable) {
    this._delayAuthentication = value;
  }
  public resetDelayAuthentication() {
    this._delayAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAuthenticationInput() {
    return this._delayAuthentication;
  }

  // delete_binding_on_renegotiation - computed: false, optional: true, required: false
  private _deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable; 
  public get deleteBindingOnRenegotiation() {
    return this.getBooleanAttribute('delete_binding_on_renegotiation');
  }
  public set deleteBindingOnRenegotiation(value: boolean | cdktf.IResolvable) {
    this._deleteBindingOnRenegotiation = value;
  }
  public resetDeleteBindingOnRenegotiation() {
    this._deleteBindingOnRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBindingOnRenegotiationInput() {
    return this._deleteBindingOnRenegotiation;
  }

  // disable_relay - computed: false, optional: true, required: false
  private _disableRelay?: boolean | cdktf.IResolvable; 
  public get disableRelay() {
    return this.getBooleanAttribute('disable_relay');
  }
  public set disableRelay(value: boolean | cdktf.IResolvable) {
    this._disableRelay = value;
  }
  public resetDisableRelay() {
    this._disableRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRelayInput() {
    return this._disableRelay;
  }

  // dual_stack - computed: false, optional: true, required: false
  private _dualStack?: string; 
  public get dualStack() {
    return this.getStringAttribute('dual_stack');
  }
  public set dualStack(value: string) {
    this._dualStack = value;
  }
  public resetDualStack() {
    this._dualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackInput() {
    return this._dualStack;
  }

  // interface_client_limit - computed: false, optional: true, required: false
  private _interfaceClientLimit?: number; 
  public get interfaceClientLimit() {
    return this.getNumberAttribute('interface_client_limit');
  }
  public set interfaceClientLimit(value: number) {
    this._interfaceClientLimit = value;
  }
  public resetInterfaceClientLimit() {
    this._interfaceClientLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceClientLimitInput() {
    return this._interfaceClientLimit;
  }

  // layer2_unicast_replies - computed: false, optional: true, required: false
  private _layer2UnicastReplies?: boolean | cdktf.IResolvable; 
  public get layer2UnicastReplies() {
    return this.getBooleanAttribute('layer2_unicast_replies');
  }
  public set layer2UnicastReplies(value: boolean | cdktf.IResolvable) {
    this._layer2UnicastReplies = value;
  }
  public resetLayer2UnicastReplies() {
    this._layer2UnicastReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2UnicastRepliesInput() {
    return this._layer2UnicastReplies;
  }

  // no_allow_snooped_clients - computed: false, optional: true, required: false
  private _noAllowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get noAllowSnoopedClients() {
    return this.getBooleanAttribute('no_allow_snooped_clients');
  }
  public set noAllowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._noAllowSnoopedClients = value;
  }
  public resetNoAllowSnoopedClients() {
    this._noAllowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAllowSnoopedClientsInput() {
    return this._noAllowSnoopedClients;
  }

  // no_bind_on_request - computed: false, optional: true, required: false
  private _noBindOnRequest?: boolean | cdktf.IResolvable; 
  public get noBindOnRequest() {
    return this.getBooleanAttribute('no_bind_on_request');
  }
  public set noBindOnRequest(value: boolean | cdktf.IResolvable) {
    this._noBindOnRequest = value;
  }
  public resetNoBindOnRequest() {
    this._noBindOnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBindOnRequestInput() {
    return this._noBindOnRequest;
  }

  // no_unicast_replies - computed: false, optional: true, required: false
  private _noUnicastReplies?: boolean | cdktf.IResolvable; 
  public get noUnicastReplies() {
    return this.getBooleanAttribute('no_unicast_replies');
  }
  public set noUnicastReplies(value: boolean | cdktf.IResolvable) {
    this._noUnicastReplies = value;
  }
  public resetNoUnicastReplies() {
    this._noUnicastReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUnicastRepliesInput() {
    return this._noUnicastReplies;
  }

  // proxy_mode - computed: false, optional: true, required: false
  private _proxyMode?: boolean | cdktf.IResolvable; 
  public get proxyMode() {
    return this.getBooleanAttribute('proxy_mode');
  }
  public set proxyMode(value: boolean | cdktf.IResolvable) {
    this._proxyMode = value;
  }
  public resetProxyMode() {
    this._proxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeInput() {
    return this._proxyMode;
  }

  // relay_source - computed: false, optional: true, required: false
  private _relaySource?: string; 
  public get relaySource() {
    return this.getStringAttribute('relay_source');
  }
  public set relaySource(value: string) {
    this._relaySource = value;
  }
  public resetRelaySource() {
    this._relaySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaySourceInput() {
    return this._relaySource;
  }

  // replace_ip_source_with_giaddr - computed: false, optional: true, required: false
  private _replaceIpSourceWithGiaddr?: boolean | cdktf.IResolvable; 
  public get replaceIpSourceWithGiaddr() {
    return this.getBooleanAttribute('replace_ip_source_with_giaddr');
  }
  public set replaceIpSourceWithGiaddr(value: boolean | cdktf.IResolvable) {
    this._replaceIpSourceWithGiaddr = value;
  }
  public resetReplaceIpSourceWithGiaddr() {
    this._replaceIpSourceWithGiaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceIpSourceWithGiaddrInput() {
    return this._replaceIpSourceWithGiaddr;
  }

  // send_release_on_delete - computed: false, optional: true, required: false
  private _sendReleaseOnDelete?: boolean | cdktf.IResolvable; 
  public get sendReleaseOnDelete() {
    return this.getBooleanAttribute('send_release_on_delete');
  }
  public set sendReleaseOnDelete(value: boolean | cdktf.IResolvable) {
    this._sendReleaseOnDelete = value;
  }
  public resetSendReleaseOnDelete() {
    this._sendReleaseOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendReleaseOnDeleteInput() {
    return this._sendReleaseOnDelete;
  }

  // trust_option_82 - computed: false, optional: true, required: false
  private _trustOption82?: boolean | cdktf.IResolvable; 
  public get trustOption82() {
    return this.getBooleanAttribute('trust_option_82');
  }
  public set trustOption82(value: boolean | cdktf.IResolvable) {
    this._trustOption82 = value;
  }
  public resetTrustOption82() {
    this._trustOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustOption82Input() {
    return this._trustOption82;
  }

  // user_defined_option_82 - computed: false, optional: true, required: false
  private _userDefinedOption82?: string; 
  public get userDefinedOption82() {
    return this.getStringAttribute('user_defined_option_82');
  }
  public set userDefinedOption82(value: string) {
    this._userDefinedOption82 = value;
  }
  public resetUserDefinedOption82() {
    this._userDefinedOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedOption82Input() {
    return this._userDefinedOption82;
  }
}
export interface ForwardingoptionsDhcprelayGroupInterfaceOverridesV6 {
  /**
  * Allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#allow_snooped_clients ForwardingoptionsDhcprelayGroup#allow_snooped_clients}
  */
  readonly allowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Always process option even after address allocation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#always_process_option_request_option ForwardingoptionsDhcprelayGroup#always_process_option_request_option}
  */
  readonly alwaysProcessOptionRequestOption?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#asymmetric_lease_time ForwardingoptionsDhcprelayGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Use a reduced prefix lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#asymmetric_prefix_lease_time ForwardingoptionsDhcprelayGroup#asymmetric_prefix_lease_time}
  */
  readonly asymmetricPrefixLeaseTime?: number;
  /**
  * Use incoming interface match criteria for SOLICIT PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_negotiation_match_incoming_interface ForwardingoptionsDhcprelayGroup#client_negotiation_match_incoming_interface}
  */
  readonly clientNegotiationMatchIncomingInterface?: boolean | cdktf.IResolvable;
  /**
  * Delay subscriber authentication in DHCP protocol processing until request packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delay_authentication ForwardingoptionsDhcprelayGroup#delay_authentication}
  */
  readonly delayAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delete_binding_on_renegotiation ForwardingoptionsDhcprelayGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dual_stack ForwardingoptionsDhcprelayGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#interface_client_limit ForwardingoptionsDhcprelayGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * Don't allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_allow_snooped_clients ForwardingoptionsDhcprelayGroup#no_allow_snooped_clients}
  */
  readonly noAllowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Do not bind if stray DHCPv6 RENEW, REBIND is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_bind_on_request ForwardingoptionsDhcprelayGroup#no_bind_on_request}
  */
  readonly noBindOnRequest?: boolean | cdktf.IResolvable;
  /**
  * Interface for relay source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_source ForwardingoptionsDhcprelayGroup#relay_source}
  */
  readonly relaySource?: string;
  /**
  * Always send RELEASE to the server when a binding is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#send_release_on_delete ForwardingoptionsDhcprelayGroup#send_release_on_delete}
  */
  readonly sendReleaseOnDelete?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupInterfaceOverridesV6ToTerraform(struct?: ForwardingoptionsDhcprelayGroupInterfaceOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_snooped_clients: cdktf.booleanToTerraform(struct!.allowSnoopedClients),
    always_process_option_request_option: cdktf.booleanToTerraform(struct!.alwaysProcessOptionRequestOption),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    asymmetric_prefix_lease_time: cdktf.numberToTerraform(struct!.asymmetricPrefixLeaseTime),
    client_negotiation_match_incoming_interface: cdktf.booleanToTerraform(struct!.clientNegotiationMatchIncomingInterface),
    delay_authentication: cdktf.booleanToTerraform(struct!.delayAuthentication),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    no_allow_snooped_clients: cdktf.booleanToTerraform(struct!.noAllowSnoopedClients),
    no_bind_on_request: cdktf.booleanToTerraform(struct!.noBindOnRequest),
    relay_source: cdktf.stringToTerraform(struct!.relaySource),
    send_release_on_delete: cdktf.booleanToTerraform(struct!.sendReleaseOnDelete),
  }
}


export function forwardingoptionsDhcprelayGroupInterfaceOverridesV6ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupInterfaceOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.allowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_process_option_request_option: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysProcessOptionRequestOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asymmetric_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.asymmetricLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asymmetric_prefix_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.asymmetricPrefixLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_negotiation_match_incoming_interface: {
      value: cdktf.booleanToHclTerraform(struct!.clientNegotiationMatchIncomingInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delay_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.delayAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_binding_on_renegotiation: {
      value: cdktf.booleanToHclTerraform(struct!.deleteBindingOnRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dual_stack: {
      value: cdktf.stringToHclTerraform(struct!.dualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_client_limit: {
      value: cdktf.numberToHclTerraform(struct!.interfaceClientLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.noAllowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_bind_on_request: {
      value: cdktf.booleanToHclTerraform(struct!.noBindOnRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_source: {
      value: cdktf.stringToHclTerraform(struct!.relaySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_release_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.sendReleaseOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupInterfaceOverridesV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupInterfaceOverridesV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSnoopedClients = this._allowSnoopedClients;
    }
    if (this._alwaysProcessOptionRequestOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysProcessOptionRequestOption = this._alwaysProcessOptionRequestOption;
    }
    if (this._asymmetricLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricLeaseTime = this._asymmetricLeaseTime;
    }
    if (this._asymmetricPrefixLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricPrefixLeaseTime = this._asymmetricPrefixLeaseTime;
    }
    if (this._clientNegotiationMatchIncomingInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNegotiationMatchIncomingInterface = this._clientNegotiationMatchIncomingInterface;
    }
    if (this._delayAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAuthentication = this._delayAuthentication;
    }
    if (this._deleteBindingOnRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBindingOnRenegotiation = this._deleteBindingOnRenegotiation;
    }
    if (this._dualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStack = this._dualStack;
    }
    if (this._interfaceClientLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceClientLimit = this._interfaceClientLimit;
    }
    if (this._noAllowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAllowSnoopedClients = this._noAllowSnoopedClients;
    }
    if (this._noBindOnRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBindOnRequest = this._noBindOnRequest;
    }
    if (this._relaySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaySource = this._relaySource;
    }
    if (this._sendReleaseOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendReleaseOnDelete = this._sendReleaseOnDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupInterfaceOverridesV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSnoopedClients = undefined;
      this._alwaysProcessOptionRequestOption = undefined;
      this._asymmetricLeaseTime = undefined;
      this._asymmetricPrefixLeaseTime = undefined;
      this._clientNegotiationMatchIncomingInterface = undefined;
      this._delayAuthentication = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._dualStack = undefined;
      this._interfaceClientLimit = undefined;
      this._noAllowSnoopedClients = undefined;
      this._noBindOnRequest = undefined;
      this._relaySource = undefined;
      this._sendReleaseOnDelete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSnoopedClients = value.allowSnoopedClients;
      this._alwaysProcessOptionRequestOption = value.alwaysProcessOptionRequestOption;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._asymmetricPrefixLeaseTime = value.asymmetricPrefixLeaseTime;
      this._clientNegotiationMatchIncomingInterface = value.clientNegotiationMatchIncomingInterface;
      this._delayAuthentication = value.delayAuthentication;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._dualStack = value.dualStack;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._noAllowSnoopedClients = value.noAllowSnoopedClients;
      this._noBindOnRequest = value.noBindOnRequest;
      this._relaySource = value.relaySource;
      this._sendReleaseOnDelete = value.sendReleaseOnDelete;
    }
  }

  // allow_snooped_clients - computed: false, optional: true, required: false
  private _allowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get allowSnoopedClients() {
    return this.getBooleanAttribute('allow_snooped_clients');
  }
  public set allowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._allowSnoopedClients = value;
  }
  public resetAllowSnoopedClients() {
    this._allowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnoopedClientsInput() {
    return this._allowSnoopedClients;
  }

  // always_process_option_request_option - computed: false, optional: true, required: false
  private _alwaysProcessOptionRequestOption?: boolean | cdktf.IResolvable; 
  public get alwaysProcessOptionRequestOption() {
    return this.getBooleanAttribute('always_process_option_request_option');
  }
  public set alwaysProcessOptionRequestOption(value: boolean | cdktf.IResolvable) {
    this._alwaysProcessOptionRequestOption = value;
  }
  public resetAlwaysProcessOptionRequestOption() {
    this._alwaysProcessOptionRequestOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysProcessOptionRequestOptionInput() {
    return this._alwaysProcessOptionRequestOption;
  }

  // asymmetric_lease_time - computed: false, optional: true, required: false
  private _asymmetricLeaseTime?: number; 
  public get asymmetricLeaseTime() {
    return this.getNumberAttribute('asymmetric_lease_time');
  }
  public set asymmetricLeaseTime(value: number) {
    this._asymmetricLeaseTime = value;
  }
  public resetAsymmetricLeaseTime() {
    this._asymmetricLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricLeaseTimeInput() {
    return this._asymmetricLeaseTime;
  }

  // asymmetric_prefix_lease_time - computed: false, optional: true, required: false
  private _asymmetricPrefixLeaseTime?: number; 
  public get asymmetricPrefixLeaseTime() {
    return this.getNumberAttribute('asymmetric_prefix_lease_time');
  }
  public set asymmetricPrefixLeaseTime(value: number) {
    this._asymmetricPrefixLeaseTime = value;
  }
  public resetAsymmetricPrefixLeaseTime() {
    this._asymmetricPrefixLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricPrefixLeaseTimeInput() {
    return this._asymmetricPrefixLeaseTime;
  }

  // client_negotiation_match_incoming_interface - computed: false, optional: true, required: false
  private _clientNegotiationMatchIncomingInterface?: boolean | cdktf.IResolvable; 
  public get clientNegotiationMatchIncomingInterface() {
    return this.getBooleanAttribute('client_negotiation_match_incoming_interface');
  }
  public set clientNegotiationMatchIncomingInterface(value: boolean | cdktf.IResolvable) {
    this._clientNegotiationMatchIncomingInterface = value;
  }
  public resetClientNegotiationMatchIncomingInterface() {
    this._clientNegotiationMatchIncomingInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNegotiationMatchIncomingInterfaceInput() {
    return this._clientNegotiationMatchIncomingInterface;
  }

  // delay_authentication - computed: false, optional: true, required: false
  private _delayAuthentication?: boolean | cdktf.IResolvable; 
  public get delayAuthentication() {
    return this.getBooleanAttribute('delay_authentication');
  }
  public set delayAuthentication(value: boolean | cdktf.IResolvable) {
    this._delayAuthentication = value;
  }
  public resetDelayAuthentication() {
    this._delayAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAuthenticationInput() {
    return this._delayAuthentication;
  }

  // delete_binding_on_renegotiation - computed: false, optional: true, required: false
  private _deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable; 
  public get deleteBindingOnRenegotiation() {
    return this.getBooleanAttribute('delete_binding_on_renegotiation');
  }
  public set deleteBindingOnRenegotiation(value: boolean | cdktf.IResolvable) {
    this._deleteBindingOnRenegotiation = value;
  }
  public resetDeleteBindingOnRenegotiation() {
    this._deleteBindingOnRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBindingOnRenegotiationInput() {
    return this._deleteBindingOnRenegotiation;
  }

  // dual_stack - computed: false, optional: true, required: false
  private _dualStack?: string; 
  public get dualStack() {
    return this.getStringAttribute('dual_stack');
  }
  public set dualStack(value: string) {
    this._dualStack = value;
  }
  public resetDualStack() {
    this._dualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackInput() {
    return this._dualStack;
  }

  // interface_client_limit - computed: false, optional: true, required: false
  private _interfaceClientLimit?: number; 
  public get interfaceClientLimit() {
    return this.getNumberAttribute('interface_client_limit');
  }
  public set interfaceClientLimit(value: number) {
    this._interfaceClientLimit = value;
  }
  public resetInterfaceClientLimit() {
    this._interfaceClientLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceClientLimitInput() {
    return this._interfaceClientLimit;
  }

  // no_allow_snooped_clients - computed: false, optional: true, required: false
  private _noAllowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get noAllowSnoopedClients() {
    return this.getBooleanAttribute('no_allow_snooped_clients');
  }
  public set noAllowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._noAllowSnoopedClients = value;
  }
  public resetNoAllowSnoopedClients() {
    this._noAllowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAllowSnoopedClientsInput() {
    return this._noAllowSnoopedClients;
  }

  // no_bind_on_request - computed: false, optional: true, required: false
  private _noBindOnRequest?: boolean | cdktf.IResolvable; 
  public get noBindOnRequest() {
    return this.getBooleanAttribute('no_bind_on_request');
  }
  public set noBindOnRequest(value: boolean | cdktf.IResolvable) {
    this._noBindOnRequest = value;
  }
  public resetNoBindOnRequest() {
    this._noBindOnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBindOnRequestInput() {
    return this._noBindOnRequest;
  }

  // relay_source - computed: false, optional: true, required: false
  private _relaySource?: string; 
  public get relaySource() {
    return this.getStringAttribute('relay_source');
  }
  public set relaySource(value: string) {
    this._relaySource = value;
  }
  public resetRelaySource() {
    this._relaySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaySourceInput() {
    return this._relaySource;
  }

  // send_release_on_delete - computed: false, optional: true, required: false
  private _sendReleaseOnDelete?: boolean | cdktf.IResolvable; 
  public get sendReleaseOnDelete() {
    return this.getBooleanAttribute('send_release_on_delete');
  }
  public set sendReleaseOnDelete(value: boolean | cdktf.IResolvable) {
    this._sendReleaseOnDelete = value;
  }
  public resetSendReleaseOnDelete() {
    this._sendReleaseOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendReleaseOnDeleteInput() {
    return this._sendReleaseOnDelete;
  }
}
export interface ForwardingoptionsDhcprelayGroupInterface {
  /**
  * Access profile to use for AAA services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#access_profile ForwardingoptionsDhcprelayGroup#access_profile}
  */
  readonly accessProfile?: string;
  /**
  * Dynamic profile to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile ForwardingoptionsDhcprelayGroup#dynamic_profile}
  */
  readonly dynamicProfile?: string;
  /**
  * Aggregate client profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile_aggregate_clients ForwardingoptionsDhcprelayGroup#dynamic_profile_aggregate_clients}
  */
  readonly dynamicProfileAggregateClients?: boolean | cdktf.IResolvable;
  /**
  * Merge or replace the client dynamic profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile_aggregate_clients_action ForwardingoptionsDhcprelayGroup#dynamic_profile_aggregate_clients_action}
  */
  readonly dynamicProfileAggregateClientsAction?: string;
  /**
  * Dynamic profile to use on the primary interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dynamic_profile_use_primary ForwardingoptionsDhcprelayGroup#dynamic_profile_use_primary}
  */
  readonly dynamicProfileUsePrimary?: string;
  /**
  * Exclude this interface range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#exclude ForwardingoptionsDhcprelayGroup#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#name ForwardingoptionsDhcprelayGroup#name}
  */
  readonly name: string;
  /**
  * Dynamic profile to use for default service activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#service_profile ForwardingoptionsDhcprelayGroup#service_profile}
  */
  readonly serviceProfile?: string;
  /**
  * Short cycle lockout max time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#short_cycle_protection_lockout_max_time ForwardingoptionsDhcprelayGroup#short_cycle_protection_lockout_max_time}
  */
  readonly shortCycleProtectionLockoutMaxTime?: number;
  /**
  * Short cycle lockout min time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#short_cycle_protection_lockout_min_time ForwardingoptionsDhcprelayGroup#short_cycle_protection_lockout_min_time}
  */
  readonly shortCycleProtectionLockoutMinTime?: number;
  /**
  * Enable tracing for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#trace ForwardingoptionsDhcprelayGroup#trace}
  */
  readonly trace?: boolean | cdktf.IResolvable;
  /**
  * Interface up to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#upto ForwardingoptionsDhcprelayGroup#upto}
  */
  readonly upto?: string;
  /**
  * overrides_v4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#overrides_v4 ForwardingoptionsDhcprelayGroup#overrides_v4}
  */
  readonly overridesV4?: ForwardingoptionsDhcprelayGroupInterfaceOverridesV4;
  /**
  * overrides_v6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#overrides_v6 ForwardingoptionsDhcprelayGroup#overrides_v6}
  */
  readonly overridesV6?: ForwardingoptionsDhcprelayGroupInterfaceOverridesV6;
}

export function forwardingoptionsDhcprelayGroupInterfaceToTerraform(struct?: ForwardingoptionsDhcprelayGroupInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_profile: cdktf.stringToTerraform(struct!.accessProfile),
    dynamic_profile: cdktf.stringToTerraform(struct!.dynamicProfile),
    dynamic_profile_aggregate_clients: cdktf.booleanToTerraform(struct!.dynamicProfileAggregateClients),
    dynamic_profile_aggregate_clients_action: cdktf.stringToTerraform(struct!.dynamicProfileAggregateClientsAction),
    dynamic_profile_use_primary: cdktf.stringToTerraform(struct!.dynamicProfileUsePrimary),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    name: cdktf.stringToTerraform(struct!.name),
    service_profile: cdktf.stringToTerraform(struct!.serviceProfile),
    short_cycle_protection_lockout_max_time: cdktf.numberToTerraform(struct!.shortCycleProtectionLockoutMaxTime),
    short_cycle_protection_lockout_min_time: cdktf.numberToTerraform(struct!.shortCycleProtectionLockoutMinTime),
    trace: cdktf.booleanToTerraform(struct!.trace),
    upto: cdktf.stringToTerraform(struct!.upto),
    overrides_v4: forwardingoptionsDhcprelayGroupInterfaceOverridesV4ToTerraform(struct!.overridesV4),
    overrides_v6: forwardingoptionsDhcprelayGroupInterfaceOverridesV6ToTerraform(struct!.overridesV6),
  }
}


export function forwardingoptionsDhcprelayGroupInterfaceToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_profile: {
      value: cdktf.stringToHclTerraform(struct!.accessProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_profile: {
      value: cdktf.stringToHclTerraform(struct!.dynamicProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_profile_aggregate_clients: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicProfileAggregateClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_profile_aggregate_clients_action: {
      value: cdktf.stringToHclTerraform(struct!.dynamicProfileAggregateClientsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_profile_use_primary: {
      value: cdktf.stringToHclTerraform(struct!.dynamicProfileUsePrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_profile: {
      value: cdktf.stringToHclTerraform(struct!.serviceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_cycle_protection_lockout_max_time: {
      value: cdktf.numberToHclTerraform(struct!.shortCycleProtectionLockoutMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    short_cycle_protection_lockout_min_time: {
      value: cdktf.numberToHclTerraform(struct!.shortCycleProtectionLockoutMinTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trace: {
      value: cdktf.booleanToHclTerraform(struct!.trace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upto: {
      value: cdktf.stringToHclTerraform(struct!.upto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides_v4: {
      value: forwardingoptionsDhcprelayGroupInterfaceOverridesV4ToHclTerraform(struct!.overridesV4),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupInterfaceOverridesV4",
    },
    overrides_v6: {
      value: forwardingoptionsDhcprelayGroupInterfaceOverridesV6ToHclTerraform(struct!.overridesV6),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupInterfaceOverridesV6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsDhcprelayGroupInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessProfile = this._accessProfile;
    }
    if (this._dynamicProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicProfile = this._dynamicProfile;
    }
    if (this._dynamicProfileAggregateClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicProfileAggregateClients = this._dynamicProfileAggregateClients;
    }
    if (this._dynamicProfileAggregateClientsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicProfileAggregateClientsAction = this._dynamicProfileAggregateClientsAction;
    }
    if (this._dynamicProfileUsePrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicProfileUsePrimary = this._dynamicProfileUsePrimary;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProfile = this._serviceProfile;
    }
    if (this._shortCycleProtectionLockoutMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortCycleProtectionLockoutMaxTime = this._shortCycleProtectionLockoutMaxTime;
    }
    if (this._shortCycleProtectionLockoutMinTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortCycleProtectionLockoutMinTime = this._shortCycleProtectionLockoutMinTime;
    }
    if (this._trace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trace = this._trace;
    }
    if (this._upto !== undefined) {
      hasAnyValues = true;
      internalValueResult.upto = this._upto;
    }
    if (this._overridesV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridesV4 = this._overridesV4?.internalValue;
    }
    if (this._overridesV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridesV6 = this._overridesV6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessProfile = undefined;
      this._dynamicProfile = undefined;
      this._dynamicProfileAggregateClients = undefined;
      this._dynamicProfileAggregateClientsAction = undefined;
      this._dynamicProfileUsePrimary = undefined;
      this._exclude = undefined;
      this._name = undefined;
      this._serviceProfile = undefined;
      this._shortCycleProtectionLockoutMaxTime = undefined;
      this._shortCycleProtectionLockoutMinTime = undefined;
      this._trace = undefined;
      this._upto = undefined;
      this._overridesV4.internalValue = undefined;
      this._overridesV6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessProfile = value.accessProfile;
      this._dynamicProfile = value.dynamicProfile;
      this._dynamicProfileAggregateClients = value.dynamicProfileAggregateClients;
      this._dynamicProfileAggregateClientsAction = value.dynamicProfileAggregateClientsAction;
      this._dynamicProfileUsePrimary = value.dynamicProfileUsePrimary;
      this._exclude = value.exclude;
      this._name = value.name;
      this._serviceProfile = value.serviceProfile;
      this._shortCycleProtectionLockoutMaxTime = value.shortCycleProtectionLockoutMaxTime;
      this._shortCycleProtectionLockoutMinTime = value.shortCycleProtectionLockoutMinTime;
      this._trace = value.trace;
      this._upto = value.upto;
      this._overridesV4.internalValue = value.overridesV4;
      this._overridesV6.internalValue = value.overridesV6;
    }
  }

  // access_profile - computed: false, optional: true, required: false
  private _accessProfile?: string; 
  public get accessProfile() {
    return this.getStringAttribute('access_profile');
  }
  public set accessProfile(value: string) {
    this._accessProfile = value;
  }
  public resetAccessProfile() {
    this._accessProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProfileInput() {
    return this._accessProfile;
  }

  // dynamic_profile - computed: false, optional: true, required: false
  private _dynamicProfile?: string; 
  public get dynamicProfile() {
    return this.getStringAttribute('dynamic_profile');
  }
  public set dynamicProfile(value: string) {
    this._dynamicProfile = value;
  }
  public resetDynamicProfile() {
    this._dynamicProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileInput() {
    return this._dynamicProfile;
  }

  // dynamic_profile_aggregate_clients - computed: false, optional: true, required: false
  private _dynamicProfileAggregateClients?: boolean | cdktf.IResolvable; 
  public get dynamicProfileAggregateClients() {
    return this.getBooleanAttribute('dynamic_profile_aggregate_clients');
  }
  public set dynamicProfileAggregateClients(value: boolean | cdktf.IResolvable) {
    this._dynamicProfileAggregateClients = value;
  }
  public resetDynamicProfileAggregateClients() {
    this._dynamicProfileAggregateClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileAggregateClientsInput() {
    return this._dynamicProfileAggregateClients;
  }

  // dynamic_profile_aggregate_clients_action - computed: false, optional: true, required: false
  private _dynamicProfileAggregateClientsAction?: string; 
  public get dynamicProfileAggregateClientsAction() {
    return this.getStringAttribute('dynamic_profile_aggregate_clients_action');
  }
  public set dynamicProfileAggregateClientsAction(value: string) {
    this._dynamicProfileAggregateClientsAction = value;
  }
  public resetDynamicProfileAggregateClientsAction() {
    this._dynamicProfileAggregateClientsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileAggregateClientsActionInput() {
    return this._dynamicProfileAggregateClientsAction;
  }

  // dynamic_profile_use_primary - computed: false, optional: true, required: false
  private _dynamicProfileUsePrimary?: string; 
  public get dynamicProfileUsePrimary() {
    return this.getStringAttribute('dynamic_profile_use_primary');
  }
  public set dynamicProfileUsePrimary(value: string) {
    this._dynamicProfileUsePrimary = value;
  }
  public resetDynamicProfileUsePrimary() {
    this._dynamicProfileUsePrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileUsePrimaryInput() {
    return this._dynamicProfileUsePrimary;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // service_profile - computed: false, optional: true, required: false
  private _serviceProfile?: string; 
  public get serviceProfile() {
    return this.getStringAttribute('service_profile');
  }
  public set serviceProfile(value: string) {
    this._serviceProfile = value;
  }
  public resetServiceProfile() {
    this._serviceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProfileInput() {
    return this._serviceProfile;
  }

  // short_cycle_protection_lockout_max_time - computed: false, optional: true, required: false
  private _shortCycleProtectionLockoutMaxTime?: number; 
  public get shortCycleProtectionLockoutMaxTime() {
    return this.getNumberAttribute('short_cycle_protection_lockout_max_time');
  }
  public set shortCycleProtectionLockoutMaxTime(value: number) {
    this._shortCycleProtectionLockoutMaxTime = value;
  }
  public resetShortCycleProtectionLockoutMaxTime() {
    this._shortCycleProtectionLockoutMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortCycleProtectionLockoutMaxTimeInput() {
    return this._shortCycleProtectionLockoutMaxTime;
  }

  // short_cycle_protection_lockout_min_time - computed: false, optional: true, required: false
  private _shortCycleProtectionLockoutMinTime?: number; 
  public get shortCycleProtectionLockoutMinTime() {
    return this.getNumberAttribute('short_cycle_protection_lockout_min_time');
  }
  public set shortCycleProtectionLockoutMinTime(value: number) {
    this._shortCycleProtectionLockoutMinTime = value;
  }
  public resetShortCycleProtectionLockoutMinTime() {
    this._shortCycleProtectionLockoutMinTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortCycleProtectionLockoutMinTimeInput() {
    return this._shortCycleProtectionLockoutMinTime;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: boolean | cdktf.IResolvable; 
  public get trace() {
    return this.getBooleanAttribute('trace');
  }
  public set trace(value: boolean | cdktf.IResolvable) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // upto - computed: false, optional: true, required: false
  private _upto?: string; 
  public get upto() {
    return this.getStringAttribute('upto');
  }
  public set upto(value: string) {
    this._upto = value;
  }
  public resetUpto() {
    this._upto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptoInput() {
    return this._upto;
  }

  // overrides_v4 - computed: false, optional: true, required: false
  private _overridesV4 = new ForwardingoptionsDhcprelayGroupInterfaceOverridesV4OutputReference(this, "overrides_v4");
  public get overridesV4() {
    return this._overridesV4;
  }
  public putOverridesV4(value: ForwardingoptionsDhcprelayGroupInterfaceOverridesV4) {
    this._overridesV4.internalValue = value;
  }
  public resetOverridesV4() {
    this._overridesV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesV4Input() {
    return this._overridesV4.internalValue;
  }

  // overrides_v6 - computed: false, optional: true, required: false
  private _overridesV6 = new ForwardingoptionsDhcprelayGroupInterfaceOverridesV6OutputReference(this, "overrides_v6");
  public get overridesV6() {
    return this._overridesV6;
  }
  public putOverridesV6(value: ForwardingoptionsDhcprelayGroupInterfaceOverridesV6) {
    this._overridesV6.internalValue = value;
  }
  public resetOverridesV6() {
    this._overridesV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesV6Input() {
    return this._overridesV6.internalValue;
  }
}

export class ForwardingoptionsDhcprelayGroupInterfaceList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsDhcprelayGroupInterface[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsDhcprelayGroupInterfaceOutputReference {
    return new ForwardingoptionsDhcprelayGroupInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsDhcprelayGroupLeaseTimeValidation {
  /**
  * Threshold for lease time violation seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#lease_time_threshold ForwardingoptionsDhcprelayGroup#lease_time_threshold}
  */
  readonly leaseTimeThreshold?: number;
  /**
  * Lease time validation violation action is drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#violation_action_drop ForwardingoptionsDhcprelayGroup#violation_action_drop}
  */
  readonly violationActionDrop?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupLeaseTimeValidationToTerraform(struct?: ForwardingoptionsDhcprelayGroupLeaseTimeValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lease_time_threshold: cdktf.numberToTerraform(struct!.leaseTimeThreshold),
    violation_action_drop: cdktf.booleanToTerraform(struct!.violationActionDrop),
  }
}


export function forwardingoptionsDhcprelayGroupLeaseTimeValidationToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupLeaseTimeValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lease_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.leaseTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violation_action_drop: {
      value: cdktf.booleanToHclTerraform(struct!.violationActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupLeaseTimeValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupLeaseTimeValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaseTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeThreshold = this._leaseTimeThreshold;
    }
    if (this._violationActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationActionDrop = this._violationActionDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupLeaseTimeValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leaseTimeThreshold = undefined;
      this._violationActionDrop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leaseTimeThreshold = value.leaseTimeThreshold;
      this._violationActionDrop = value.violationActionDrop;
    }
  }

  // lease_time_threshold - computed: false, optional: true, required: false
  private _leaseTimeThreshold?: number; 
  public get leaseTimeThreshold() {
    return this.getNumberAttribute('lease_time_threshold');
  }
  public set leaseTimeThreshold(value: number) {
    this._leaseTimeThreshold = value;
  }
  public resetLeaseTimeThreshold() {
    this._leaseTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeThresholdInput() {
    return this._leaseTimeThreshold;
  }

  // violation_action_drop - computed: false, optional: true, required: false
  private _violationActionDrop?: boolean | cdktf.IResolvable; 
  public get violationActionDrop() {
    return this.getBooleanAttribute('violation_action_drop');
  }
  public set violationActionDrop(value: boolean | cdktf.IResolvable) {
    this._violationActionDrop = value;
  }
  public resetViolationActionDrop() {
    this._violationActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationActionDropInput() {
    return this._violationActionDrop;
  }
}
export interface ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd {
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#detection_time_threshold ForwardingoptionsDhcprelayGroup#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Time to hold the session-UP notification to the client (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#holddown_interval ForwardingoptionsDhcprelayGroup#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Minimum transmit and receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#minimum_interval ForwardingoptionsDhcprelayGroup#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#minimum_receive_interval ForwardingoptionsDhcprelayGroup#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#multiplier ForwardingoptionsDhcprelayGroup#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Disable adaptation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_adaptation ForwardingoptionsDhcprelayGroup#no_adaptation}
  */
  readonly noAdaptation?: boolean | cdktf.IResolvable;
  /**
  * BFD single-hop or multihop session-mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#session_mode ForwardingoptionsDhcprelayGroup#session_mode}
  */
  readonly sessionMode?: string;
  /**
  * Minimum transmit interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#transmit_interval_minimum ForwardingoptionsDhcprelayGroup#transmit_interval_minimum}
  */
  readonly transmitIntervalMinimum?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#transmit_interval_threshold ForwardingoptionsDhcprelayGroup#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#version ForwardingoptionsDhcprelayGroup#version}
  */
  readonly version?: string;
}

export function forwardingoptionsDhcprelayGroupLivenessDetectionMethodBfdToTerraform(struct?: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_time_threshold: cdktf.numberToTerraform(struct!.detectionTimeThreshold),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    minimum_interval: cdktf.numberToTerraform(struct!.minimumInterval),
    minimum_receive_interval: cdktf.numberToTerraform(struct!.minimumReceiveInterval),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    no_adaptation: cdktf.booleanToTerraform(struct!.noAdaptation),
    session_mode: cdktf.stringToTerraform(struct!.sessionMode),
    transmit_interval_minimum: cdktf.numberToTerraform(struct!.transmitIntervalMinimum),
    transmit_interval_threshold: cdktf.numberToTerraform(struct!.transmitIntervalThreshold),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function forwardingoptionsDhcprelayGroupLivenessDetectionMethodBfdToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.detectionTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    holddown_interval: {
      value: cdktf.numberToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_receive_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumReceiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_adaptation: {
      value: cdktf.booleanToHclTerraform(struct!.noAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_mode: {
      value: cdktf.stringToHclTerraform(struct!.sessionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmit_interval_minimum: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval_threshold: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionTimeThreshold = this._detectionTimeThreshold;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._minimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInterval = this._minimumInterval;
    }
    if (this._minimumReceiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumReceiveInterval = this._minimumReceiveInterval;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._noAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdaptation = this._noAdaptation;
    }
    if (this._sessionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMode = this._sessionMode;
    }
    if (this._transmitIntervalMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalMinimum = this._transmitIntervalMinimum;
    }
    if (this._transmitIntervalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalThreshold = this._transmitIntervalThreshold;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionTimeThreshold = undefined;
      this._holddownInterval = undefined;
      this._minimumInterval = undefined;
      this._minimumReceiveInterval = undefined;
      this._multiplier = undefined;
      this._noAdaptation = undefined;
      this._sessionMode = undefined;
      this._transmitIntervalMinimum = undefined;
      this._transmitIntervalThreshold = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionTimeThreshold = value.detectionTimeThreshold;
      this._holddownInterval = value.holddownInterval;
      this._minimumInterval = value.minimumInterval;
      this._minimumReceiveInterval = value.minimumReceiveInterval;
      this._multiplier = value.multiplier;
      this._noAdaptation = value.noAdaptation;
      this._sessionMode = value.sessionMode;
      this._transmitIntervalMinimum = value.transmitIntervalMinimum;
      this._transmitIntervalThreshold = value.transmitIntervalThreshold;
      this._version = value.version;
    }
  }

  // detection_time_threshold - computed: false, optional: true, required: false
  private _detectionTimeThreshold?: number; 
  public get detectionTimeThreshold() {
    return this.getNumberAttribute('detection_time_threshold');
  }
  public set detectionTimeThreshold(value: number) {
    this._detectionTimeThreshold = value;
  }
  public resetDetectionTimeThreshold() {
    this._detectionTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionTimeThresholdInput() {
    return this._detectionTimeThreshold;
  }

  // holddown_interval - computed: false, optional: true, required: false
  private _holddownInterval?: number; 
  public get holddownInterval() {
    return this.getNumberAttribute('holddown_interval');
  }
  public set holddownInterval(value: number) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // minimum_interval - computed: false, optional: true, required: false
  private _minimumInterval?: number; 
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
  }
  public set minimumInterval(value: number) {
    this._minimumInterval = value;
  }
  public resetMinimumInterval() {
    this._minimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumIntervalInput() {
    return this._minimumInterval;
  }

  // minimum_receive_interval - computed: false, optional: true, required: false
  private _minimumReceiveInterval?: number; 
  public get minimumReceiveInterval() {
    return this.getNumberAttribute('minimum_receive_interval');
  }
  public set minimumReceiveInterval(value: number) {
    this._minimumReceiveInterval = value;
  }
  public resetMinimumReceiveInterval() {
    this._minimumReceiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumReceiveIntervalInput() {
    return this._minimumReceiveInterval;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // no_adaptation - computed: false, optional: true, required: false
  private _noAdaptation?: boolean | cdktf.IResolvable; 
  public get noAdaptation() {
    return this.getBooleanAttribute('no_adaptation');
  }
  public set noAdaptation(value: boolean | cdktf.IResolvable) {
    this._noAdaptation = value;
  }
  public resetNoAdaptation() {
    this._noAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdaptationInput() {
    return this._noAdaptation;
  }

  // session_mode - computed: false, optional: true, required: false
  private _sessionMode?: string; 
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }
  public set sessionMode(value: string) {
    this._sessionMode = value;
  }
  public resetSessionMode() {
    this._sessionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionModeInput() {
    return this._sessionMode;
  }

  // transmit_interval_minimum - computed: false, optional: true, required: false
  private _transmitIntervalMinimum?: number; 
  public get transmitIntervalMinimum() {
    return this.getNumberAttribute('transmit_interval_minimum');
  }
  public set transmitIntervalMinimum(value: number) {
    this._transmitIntervalMinimum = value;
  }
  public resetTransmitIntervalMinimum() {
    this._transmitIntervalMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalMinimumInput() {
    return this._transmitIntervalMinimum;
  }

  // transmit_interval_threshold - computed: false, optional: true, required: false
  private _transmitIntervalThreshold?: number; 
  public get transmitIntervalThreshold() {
    return this.getNumberAttribute('transmit_interval_threshold');
  }
  public set transmitIntervalThreshold(value: number) {
    this._transmitIntervalThreshold = value;
  }
  public resetTransmitIntervalThreshold() {
    this._transmitIntervalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalThresholdInput() {
    return this._transmitIntervalThreshold;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
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
export interface ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2 {
  /**
  * Retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#max_consecutive_retries ForwardingoptionsDhcprelayGroup#max_consecutive_retries}
  */
  readonly maxConsecutiveRetries?: number;
  /**
  * Transmit interval for address resolution (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#transmit_interval ForwardingoptionsDhcprelayGroup#transmit_interval}
  */
  readonly transmitInterval?: number;
}

export function forwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2ToTerraform(struct?: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_consecutive_retries: cdktf.numberToTerraform(struct!.maxConsecutiveRetries),
    transmit_interval: cdktf.numberToTerraform(struct!.transmitInterval),
  }
}


export function forwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_consecutive_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxConsecutiveRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.transmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConsecutiveRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConsecutiveRetries = this._maxConsecutiveRetries;
    }
    if (this._transmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitInterval = this._transmitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConsecutiveRetries = undefined;
      this._transmitInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConsecutiveRetries = value.maxConsecutiveRetries;
      this._transmitInterval = value.transmitInterval;
    }
  }

  // max_consecutive_retries - computed: false, optional: true, required: false
  private _maxConsecutiveRetries?: number; 
  public get maxConsecutiveRetries() {
    return this.getNumberAttribute('max_consecutive_retries');
  }
  public set maxConsecutiveRetries(value: number) {
    this._maxConsecutiveRetries = value;
  }
  public resetMaxConsecutiveRetries() {
    this._maxConsecutiveRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConsecutiveRetriesInput() {
    return this._maxConsecutiveRetries;
  }

  // transmit_interval - computed: false, optional: true, required: false
  private _transmitInterval?: number; 
  public get transmitInterval() {
    return this.getNumberAttribute('transmit_interval');
  }
  public set transmitInterval(value: number) {
    this._transmitInterval = value;
  }
  public resetTransmitInterval() {
    this._transmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalInput() {
    return this._transmitInterval;
  }
}
export interface ForwardingoptionsDhcprelayGroupOverridesV4 {
  /**
  * Allow packets without end-of-option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#allow_no_end_option ForwardingoptionsDhcprelayGroup#allow_no_end_option}
  */
  readonly allowNoEndOption?: boolean | cdktf.IResolvable;
  /**
  * Allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#allow_snooped_clients ForwardingoptionsDhcprelayGroup#allow_snooped_clients}
  */
  readonly allowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Overwrite existing 'giaddr' field, when present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#always_write_giaddr ForwardingoptionsDhcprelayGroup#always_write_giaddr}
  */
  readonly alwaysWriteGiaddr?: boolean | cdktf.IResolvable;
  /**
  * Overwrite existing value of option 82, when present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#always_write_option_82 ForwardingoptionsDhcprelayGroup#always_write_option_82}
  */
  readonly alwaysWriteOption82?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#asymmetric_lease_time ForwardingoptionsDhcprelayGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Allows relay of bootp req and reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#bootp_support ForwardingoptionsDhcprelayGroup#bootp_support}
  */
  readonly bootpSupport?: boolean | cdktf.IResolvable;
  /**
  * Use secondary match criteria for DISCOVER PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_discover_match ForwardingoptionsDhcprelayGroup#client_discover_match}
  */
  readonly clientDiscoverMatch?: string;
  /**
  * Delay subscriber authentication in DHCP protocol processing until request packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delay_authentication ForwardingoptionsDhcprelayGroup#delay_authentication}
  */
  readonly delayAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delete_binding_on_renegotiation ForwardingoptionsDhcprelayGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Disable DHCP relay processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#disable_relay ForwardingoptionsDhcprelayGroup#disable_relay}
  */
  readonly disableRelay?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dual_stack ForwardingoptionsDhcprelayGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#interface_client_limit ForwardingoptionsDhcprelayGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * Do not broadcast client responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#layer2_unicast_replies ForwardingoptionsDhcprelayGroup#layer2_unicast_replies}
  */
  readonly layer2UnicastReplies?: boolean | cdktf.IResolvable;
  /**
  * Don't allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_allow_snooped_clients ForwardingoptionsDhcprelayGroup#no_allow_snooped_clients}
  */
  readonly noAllowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Do not bind if stray DHCP request is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_bind_on_request ForwardingoptionsDhcprelayGroup#no_bind_on_request}
  */
  readonly noBindOnRequest?: boolean | cdktf.IResolvable;
  /**
  * Overwrite unicast bit in incoming packet, when present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_unicast_replies ForwardingoptionsDhcprelayGroup#no_unicast_replies}
  */
  readonly noUnicastReplies?: boolean | cdktf.IResolvable;
  /**
  * Put the relay in proxy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#proxy_mode ForwardingoptionsDhcprelayGroup#proxy_mode}
  */
  readonly proxyMode?: boolean | cdktf.IResolvable;
  /**
  * Interface for relay source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_source ForwardingoptionsDhcprelayGroup#relay_source}
  */
  readonly relaySource?: string;
  /**
  * Replace IP source address in request and release packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#replace_ip_source_with_giaddr ForwardingoptionsDhcprelayGroup#replace_ip_source_with_giaddr}
  */
  readonly replaceIpSourceWithGiaddr?: boolean | cdktf.IResolvable;
  /**
  * Always send RELEASE to the server when a binding is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#send_release_on_delete ForwardingoptionsDhcprelayGroup#send_release_on_delete}
  */
  readonly sendReleaseOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Trust options-82 option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#trust_option_82 ForwardingoptionsDhcprelayGroup#trust_option_82}
  */
  readonly trustOption82?: boolean | cdktf.IResolvable;
  /**
  * Set user defined description for option-82.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#user_defined_option_82 ForwardingoptionsDhcprelayGroup#user_defined_option_82}
  */
  readonly userDefinedOption82?: string;
}

export function forwardingoptionsDhcprelayGroupOverridesV4ToTerraform(struct?: ForwardingoptionsDhcprelayGroupOverridesV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_end_option: cdktf.booleanToTerraform(struct!.allowNoEndOption),
    allow_snooped_clients: cdktf.booleanToTerraform(struct!.allowSnoopedClients),
    always_write_giaddr: cdktf.booleanToTerraform(struct!.alwaysWriteGiaddr),
    always_write_option_82: cdktf.booleanToTerraform(struct!.alwaysWriteOption82),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    bootp_support: cdktf.booleanToTerraform(struct!.bootpSupport),
    client_discover_match: cdktf.stringToTerraform(struct!.clientDiscoverMatch),
    delay_authentication: cdktf.booleanToTerraform(struct!.delayAuthentication),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    disable_relay: cdktf.booleanToTerraform(struct!.disableRelay),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    layer2_unicast_replies: cdktf.booleanToTerraform(struct!.layer2UnicastReplies),
    no_allow_snooped_clients: cdktf.booleanToTerraform(struct!.noAllowSnoopedClients),
    no_bind_on_request: cdktf.booleanToTerraform(struct!.noBindOnRequest),
    no_unicast_replies: cdktf.booleanToTerraform(struct!.noUnicastReplies),
    proxy_mode: cdktf.booleanToTerraform(struct!.proxyMode),
    relay_source: cdktf.stringToTerraform(struct!.relaySource),
    replace_ip_source_with_giaddr: cdktf.booleanToTerraform(struct!.replaceIpSourceWithGiaddr),
    send_release_on_delete: cdktf.booleanToTerraform(struct!.sendReleaseOnDelete),
    trust_option_82: cdktf.booleanToTerraform(struct!.trustOption82),
    user_defined_option_82: cdktf.stringToTerraform(struct!.userDefinedOption82),
  }
}


export function forwardingoptionsDhcprelayGroupOverridesV4ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupOverridesV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_no_end_option: {
      value: cdktf.booleanToHclTerraform(struct!.allowNoEndOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.allowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_write_giaddr: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysWriteGiaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_write_option_82: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysWriteOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asymmetric_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.asymmetricLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bootp_support: {
      value: cdktf.booleanToHclTerraform(struct!.bootpSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_discover_match: {
      value: cdktf.stringToHclTerraform(struct!.clientDiscoverMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.delayAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_binding_on_renegotiation: {
      value: cdktf.booleanToHclTerraform(struct!.deleteBindingOnRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_relay: {
      value: cdktf.booleanToHclTerraform(struct!.disableRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dual_stack: {
      value: cdktf.stringToHclTerraform(struct!.dualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_client_limit: {
      value: cdktf.numberToHclTerraform(struct!.interfaceClientLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    layer2_unicast_replies: {
      value: cdktf.booleanToHclTerraform(struct!.layer2UnicastReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.noAllowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_bind_on_request: {
      value: cdktf.booleanToHclTerraform(struct!.noBindOnRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_unicast_replies: {
      value: cdktf.booleanToHclTerraform(struct!.noUnicastReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_mode: {
      value: cdktf.booleanToHclTerraform(struct!.proxyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_source: {
      value: cdktf.stringToHclTerraform(struct!.relaySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_ip_source_with_giaddr: {
      value: cdktf.booleanToHclTerraform(struct!.replaceIpSourceWithGiaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_release_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.sendReleaseOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_option_82: {
      value: cdktf.booleanToHclTerraform(struct!.trustOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined_option_82: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupOverridesV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupOverridesV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoEndOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoEndOption = this._allowNoEndOption;
    }
    if (this._allowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSnoopedClients = this._allowSnoopedClients;
    }
    if (this._alwaysWriteGiaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysWriteGiaddr = this._alwaysWriteGiaddr;
    }
    if (this._alwaysWriteOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysWriteOption82 = this._alwaysWriteOption82;
    }
    if (this._asymmetricLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricLeaseTime = this._asymmetricLeaseTime;
    }
    if (this._bootpSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootpSupport = this._bootpSupport;
    }
    if (this._clientDiscoverMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDiscoverMatch = this._clientDiscoverMatch;
    }
    if (this._delayAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAuthentication = this._delayAuthentication;
    }
    if (this._deleteBindingOnRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBindingOnRenegotiation = this._deleteBindingOnRenegotiation;
    }
    if (this._disableRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRelay = this._disableRelay;
    }
    if (this._dualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStack = this._dualStack;
    }
    if (this._interfaceClientLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceClientLimit = this._interfaceClientLimit;
    }
    if (this._layer2UnicastReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2UnicastReplies = this._layer2UnicastReplies;
    }
    if (this._noAllowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAllowSnoopedClients = this._noAllowSnoopedClients;
    }
    if (this._noBindOnRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBindOnRequest = this._noBindOnRequest;
    }
    if (this._noUnicastReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUnicastReplies = this._noUnicastReplies;
    }
    if (this._proxyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyMode = this._proxyMode;
    }
    if (this._relaySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaySource = this._relaySource;
    }
    if (this._replaceIpSourceWithGiaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceIpSourceWithGiaddr = this._replaceIpSourceWithGiaddr;
    }
    if (this._sendReleaseOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendReleaseOnDelete = this._sendReleaseOnDelete;
    }
    if (this._trustOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustOption82 = this._trustOption82;
    }
    if (this._userDefinedOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedOption82 = this._userDefinedOption82;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupOverridesV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoEndOption = undefined;
      this._allowSnoopedClients = undefined;
      this._alwaysWriteGiaddr = undefined;
      this._alwaysWriteOption82 = undefined;
      this._asymmetricLeaseTime = undefined;
      this._bootpSupport = undefined;
      this._clientDiscoverMatch = undefined;
      this._delayAuthentication = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._disableRelay = undefined;
      this._dualStack = undefined;
      this._interfaceClientLimit = undefined;
      this._layer2UnicastReplies = undefined;
      this._noAllowSnoopedClients = undefined;
      this._noBindOnRequest = undefined;
      this._noUnicastReplies = undefined;
      this._proxyMode = undefined;
      this._relaySource = undefined;
      this._replaceIpSourceWithGiaddr = undefined;
      this._sendReleaseOnDelete = undefined;
      this._trustOption82 = undefined;
      this._userDefinedOption82 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoEndOption = value.allowNoEndOption;
      this._allowSnoopedClients = value.allowSnoopedClients;
      this._alwaysWriteGiaddr = value.alwaysWriteGiaddr;
      this._alwaysWriteOption82 = value.alwaysWriteOption82;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._bootpSupport = value.bootpSupport;
      this._clientDiscoverMatch = value.clientDiscoverMatch;
      this._delayAuthentication = value.delayAuthentication;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._disableRelay = value.disableRelay;
      this._dualStack = value.dualStack;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._layer2UnicastReplies = value.layer2UnicastReplies;
      this._noAllowSnoopedClients = value.noAllowSnoopedClients;
      this._noBindOnRequest = value.noBindOnRequest;
      this._noUnicastReplies = value.noUnicastReplies;
      this._proxyMode = value.proxyMode;
      this._relaySource = value.relaySource;
      this._replaceIpSourceWithGiaddr = value.replaceIpSourceWithGiaddr;
      this._sendReleaseOnDelete = value.sendReleaseOnDelete;
      this._trustOption82 = value.trustOption82;
      this._userDefinedOption82 = value.userDefinedOption82;
    }
  }

  // allow_no_end_option - computed: false, optional: true, required: false
  private _allowNoEndOption?: boolean | cdktf.IResolvable; 
  public get allowNoEndOption() {
    return this.getBooleanAttribute('allow_no_end_option');
  }
  public set allowNoEndOption(value: boolean | cdktf.IResolvable) {
    this._allowNoEndOption = value;
  }
  public resetAllowNoEndOption() {
    this._allowNoEndOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoEndOptionInput() {
    return this._allowNoEndOption;
  }

  // allow_snooped_clients - computed: false, optional: true, required: false
  private _allowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get allowSnoopedClients() {
    return this.getBooleanAttribute('allow_snooped_clients');
  }
  public set allowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._allowSnoopedClients = value;
  }
  public resetAllowSnoopedClients() {
    this._allowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnoopedClientsInput() {
    return this._allowSnoopedClients;
  }

  // always_write_giaddr - computed: false, optional: true, required: false
  private _alwaysWriteGiaddr?: boolean | cdktf.IResolvable; 
  public get alwaysWriteGiaddr() {
    return this.getBooleanAttribute('always_write_giaddr');
  }
  public set alwaysWriteGiaddr(value: boolean | cdktf.IResolvable) {
    this._alwaysWriteGiaddr = value;
  }
  public resetAlwaysWriteGiaddr() {
    this._alwaysWriteGiaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysWriteGiaddrInput() {
    return this._alwaysWriteGiaddr;
  }

  // always_write_option_82 - computed: false, optional: true, required: false
  private _alwaysWriteOption82?: boolean | cdktf.IResolvable; 
  public get alwaysWriteOption82() {
    return this.getBooleanAttribute('always_write_option_82');
  }
  public set alwaysWriteOption82(value: boolean | cdktf.IResolvable) {
    this._alwaysWriteOption82 = value;
  }
  public resetAlwaysWriteOption82() {
    this._alwaysWriteOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysWriteOption82Input() {
    return this._alwaysWriteOption82;
  }

  // asymmetric_lease_time - computed: false, optional: true, required: false
  private _asymmetricLeaseTime?: number; 
  public get asymmetricLeaseTime() {
    return this.getNumberAttribute('asymmetric_lease_time');
  }
  public set asymmetricLeaseTime(value: number) {
    this._asymmetricLeaseTime = value;
  }
  public resetAsymmetricLeaseTime() {
    this._asymmetricLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricLeaseTimeInput() {
    return this._asymmetricLeaseTime;
  }

  // bootp_support - computed: false, optional: true, required: false
  private _bootpSupport?: boolean | cdktf.IResolvable; 
  public get bootpSupport() {
    return this.getBooleanAttribute('bootp_support');
  }
  public set bootpSupport(value: boolean | cdktf.IResolvable) {
    this._bootpSupport = value;
  }
  public resetBootpSupport() {
    this._bootpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootpSupportInput() {
    return this._bootpSupport;
  }

  // client_discover_match - computed: false, optional: true, required: false
  private _clientDiscoverMatch?: string; 
  public get clientDiscoverMatch() {
    return this.getStringAttribute('client_discover_match');
  }
  public set clientDiscoverMatch(value: string) {
    this._clientDiscoverMatch = value;
  }
  public resetClientDiscoverMatch() {
    this._clientDiscoverMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDiscoverMatchInput() {
    return this._clientDiscoverMatch;
  }

  // delay_authentication - computed: false, optional: true, required: false
  private _delayAuthentication?: boolean | cdktf.IResolvable; 
  public get delayAuthentication() {
    return this.getBooleanAttribute('delay_authentication');
  }
  public set delayAuthentication(value: boolean | cdktf.IResolvable) {
    this._delayAuthentication = value;
  }
  public resetDelayAuthentication() {
    this._delayAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAuthenticationInput() {
    return this._delayAuthentication;
  }

  // delete_binding_on_renegotiation - computed: false, optional: true, required: false
  private _deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable; 
  public get deleteBindingOnRenegotiation() {
    return this.getBooleanAttribute('delete_binding_on_renegotiation');
  }
  public set deleteBindingOnRenegotiation(value: boolean | cdktf.IResolvable) {
    this._deleteBindingOnRenegotiation = value;
  }
  public resetDeleteBindingOnRenegotiation() {
    this._deleteBindingOnRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBindingOnRenegotiationInput() {
    return this._deleteBindingOnRenegotiation;
  }

  // disable_relay - computed: false, optional: true, required: false
  private _disableRelay?: boolean | cdktf.IResolvable; 
  public get disableRelay() {
    return this.getBooleanAttribute('disable_relay');
  }
  public set disableRelay(value: boolean | cdktf.IResolvable) {
    this._disableRelay = value;
  }
  public resetDisableRelay() {
    this._disableRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRelayInput() {
    return this._disableRelay;
  }

  // dual_stack - computed: false, optional: true, required: false
  private _dualStack?: string; 
  public get dualStack() {
    return this.getStringAttribute('dual_stack');
  }
  public set dualStack(value: string) {
    this._dualStack = value;
  }
  public resetDualStack() {
    this._dualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackInput() {
    return this._dualStack;
  }

  // interface_client_limit - computed: false, optional: true, required: false
  private _interfaceClientLimit?: number; 
  public get interfaceClientLimit() {
    return this.getNumberAttribute('interface_client_limit');
  }
  public set interfaceClientLimit(value: number) {
    this._interfaceClientLimit = value;
  }
  public resetInterfaceClientLimit() {
    this._interfaceClientLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceClientLimitInput() {
    return this._interfaceClientLimit;
  }

  // layer2_unicast_replies - computed: false, optional: true, required: false
  private _layer2UnicastReplies?: boolean | cdktf.IResolvable; 
  public get layer2UnicastReplies() {
    return this.getBooleanAttribute('layer2_unicast_replies');
  }
  public set layer2UnicastReplies(value: boolean | cdktf.IResolvable) {
    this._layer2UnicastReplies = value;
  }
  public resetLayer2UnicastReplies() {
    this._layer2UnicastReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2UnicastRepliesInput() {
    return this._layer2UnicastReplies;
  }

  // no_allow_snooped_clients - computed: false, optional: true, required: false
  private _noAllowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get noAllowSnoopedClients() {
    return this.getBooleanAttribute('no_allow_snooped_clients');
  }
  public set noAllowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._noAllowSnoopedClients = value;
  }
  public resetNoAllowSnoopedClients() {
    this._noAllowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAllowSnoopedClientsInput() {
    return this._noAllowSnoopedClients;
  }

  // no_bind_on_request - computed: false, optional: true, required: false
  private _noBindOnRequest?: boolean | cdktf.IResolvable; 
  public get noBindOnRequest() {
    return this.getBooleanAttribute('no_bind_on_request');
  }
  public set noBindOnRequest(value: boolean | cdktf.IResolvable) {
    this._noBindOnRequest = value;
  }
  public resetNoBindOnRequest() {
    this._noBindOnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBindOnRequestInput() {
    return this._noBindOnRequest;
  }

  // no_unicast_replies - computed: false, optional: true, required: false
  private _noUnicastReplies?: boolean | cdktf.IResolvable; 
  public get noUnicastReplies() {
    return this.getBooleanAttribute('no_unicast_replies');
  }
  public set noUnicastReplies(value: boolean | cdktf.IResolvable) {
    this._noUnicastReplies = value;
  }
  public resetNoUnicastReplies() {
    this._noUnicastReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUnicastRepliesInput() {
    return this._noUnicastReplies;
  }

  // proxy_mode - computed: false, optional: true, required: false
  private _proxyMode?: boolean | cdktf.IResolvable; 
  public get proxyMode() {
    return this.getBooleanAttribute('proxy_mode');
  }
  public set proxyMode(value: boolean | cdktf.IResolvable) {
    this._proxyMode = value;
  }
  public resetProxyMode() {
    this._proxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeInput() {
    return this._proxyMode;
  }

  // relay_source - computed: false, optional: true, required: false
  private _relaySource?: string; 
  public get relaySource() {
    return this.getStringAttribute('relay_source');
  }
  public set relaySource(value: string) {
    this._relaySource = value;
  }
  public resetRelaySource() {
    this._relaySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaySourceInput() {
    return this._relaySource;
  }

  // replace_ip_source_with_giaddr - computed: false, optional: true, required: false
  private _replaceIpSourceWithGiaddr?: boolean | cdktf.IResolvable; 
  public get replaceIpSourceWithGiaddr() {
    return this.getBooleanAttribute('replace_ip_source_with_giaddr');
  }
  public set replaceIpSourceWithGiaddr(value: boolean | cdktf.IResolvable) {
    this._replaceIpSourceWithGiaddr = value;
  }
  public resetReplaceIpSourceWithGiaddr() {
    this._replaceIpSourceWithGiaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceIpSourceWithGiaddrInput() {
    return this._replaceIpSourceWithGiaddr;
  }

  // send_release_on_delete - computed: false, optional: true, required: false
  private _sendReleaseOnDelete?: boolean | cdktf.IResolvable; 
  public get sendReleaseOnDelete() {
    return this.getBooleanAttribute('send_release_on_delete');
  }
  public set sendReleaseOnDelete(value: boolean | cdktf.IResolvable) {
    this._sendReleaseOnDelete = value;
  }
  public resetSendReleaseOnDelete() {
    this._sendReleaseOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendReleaseOnDeleteInput() {
    return this._sendReleaseOnDelete;
  }

  // trust_option_82 - computed: false, optional: true, required: false
  private _trustOption82?: boolean | cdktf.IResolvable; 
  public get trustOption82() {
    return this.getBooleanAttribute('trust_option_82');
  }
  public set trustOption82(value: boolean | cdktf.IResolvable) {
    this._trustOption82 = value;
  }
  public resetTrustOption82() {
    this._trustOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustOption82Input() {
    return this._trustOption82;
  }

  // user_defined_option_82 - computed: false, optional: true, required: false
  private _userDefinedOption82?: string; 
  public get userDefinedOption82() {
    return this.getStringAttribute('user_defined_option_82');
  }
  public set userDefinedOption82(value: string) {
    this._userDefinedOption82 = value;
  }
  public resetUserDefinedOption82() {
    this._userDefinedOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedOption82Input() {
    return this._userDefinedOption82;
  }
}
export interface ForwardingoptionsDhcprelayGroupOverridesV6 {
  /**
  * Allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#allow_snooped_clients ForwardingoptionsDhcprelayGroup#allow_snooped_clients}
  */
  readonly allowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Always process option even after address allocation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#always_process_option_request_option ForwardingoptionsDhcprelayGroup#always_process_option_request_option}
  */
  readonly alwaysProcessOptionRequestOption?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#asymmetric_lease_time ForwardingoptionsDhcprelayGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Use a reduced prefix lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#asymmetric_prefix_lease_time ForwardingoptionsDhcprelayGroup#asymmetric_prefix_lease_time}
  */
  readonly asymmetricPrefixLeaseTime?: number;
  /**
  * Use incoming interface match criteria for SOLICIT PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#client_negotiation_match_incoming_interface ForwardingoptionsDhcprelayGroup#client_negotiation_match_incoming_interface}
  */
  readonly clientNegotiationMatchIncomingInterface?: boolean | cdktf.IResolvable;
  /**
  * Delay subscriber authentication in DHCP protocol processing until request packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delay_authentication ForwardingoptionsDhcprelayGroup#delay_authentication}
  */
  readonly delayAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#delete_binding_on_renegotiation ForwardingoptionsDhcprelayGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#dual_stack ForwardingoptionsDhcprelayGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#interface_client_limit ForwardingoptionsDhcprelayGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * Don't allow client creation from snooped PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_allow_snooped_clients ForwardingoptionsDhcprelayGroup#no_allow_snooped_clients}
  */
  readonly noAllowSnoopedClients?: boolean | cdktf.IResolvable;
  /**
  * Do not bind if stray DHCPv6 RENEW, REBIND is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_bind_on_request ForwardingoptionsDhcprelayGroup#no_bind_on_request}
  */
  readonly noBindOnRequest?: boolean | cdktf.IResolvable;
  /**
  * Interface for relay source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#relay_source ForwardingoptionsDhcprelayGroup#relay_source}
  */
  readonly relaySource?: string;
  /**
  * Always send RELEASE to the server when a binding is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#send_release_on_delete ForwardingoptionsDhcprelayGroup#send_release_on_delete}
  */
  readonly sendReleaseOnDelete?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupOverridesV6ToTerraform(struct?: ForwardingoptionsDhcprelayGroupOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_snooped_clients: cdktf.booleanToTerraform(struct!.allowSnoopedClients),
    always_process_option_request_option: cdktf.booleanToTerraform(struct!.alwaysProcessOptionRequestOption),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    asymmetric_prefix_lease_time: cdktf.numberToTerraform(struct!.asymmetricPrefixLeaseTime),
    client_negotiation_match_incoming_interface: cdktf.booleanToTerraform(struct!.clientNegotiationMatchIncomingInterface),
    delay_authentication: cdktf.booleanToTerraform(struct!.delayAuthentication),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    no_allow_snooped_clients: cdktf.booleanToTerraform(struct!.noAllowSnoopedClients),
    no_bind_on_request: cdktf.booleanToTerraform(struct!.noBindOnRequest),
    relay_source: cdktf.stringToTerraform(struct!.relaySource),
    send_release_on_delete: cdktf.booleanToTerraform(struct!.sendReleaseOnDelete),
  }
}


export function forwardingoptionsDhcprelayGroupOverridesV6ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.allowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_process_option_request_option: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysProcessOptionRequestOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asymmetric_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.asymmetricLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asymmetric_prefix_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.asymmetricPrefixLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_negotiation_match_incoming_interface: {
      value: cdktf.booleanToHclTerraform(struct!.clientNegotiationMatchIncomingInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delay_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.delayAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_binding_on_renegotiation: {
      value: cdktf.booleanToHclTerraform(struct!.deleteBindingOnRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dual_stack: {
      value: cdktf.stringToHclTerraform(struct!.dualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_client_limit: {
      value: cdktf.numberToHclTerraform(struct!.interfaceClientLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_allow_snooped_clients: {
      value: cdktf.booleanToHclTerraform(struct!.noAllowSnoopedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_bind_on_request: {
      value: cdktf.booleanToHclTerraform(struct!.noBindOnRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    relay_source: {
      value: cdktf.stringToHclTerraform(struct!.relaySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_release_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.sendReleaseOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupOverridesV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupOverridesV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSnoopedClients = this._allowSnoopedClients;
    }
    if (this._alwaysProcessOptionRequestOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysProcessOptionRequestOption = this._alwaysProcessOptionRequestOption;
    }
    if (this._asymmetricLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricLeaseTime = this._asymmetricLeaseTime;
    }
    if (this._asymmetricPrefixLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricPrefixLeaseTime = this._asymmetricPrefixLeaseTime;
    }
    if (this._clientNegotiationMatchIncomingInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNegotiationMatchIncomingInterface = this._clientNegotiationMatchIncomingInterface;
    }
    if (this._delayAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAuthentication = this._delayAuthentication;
    }
    if (this._deleteBindingOnRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBindingOnRenegotiation = this._deleteBindingOnRenegotiation;
    }
    if (this._dualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStack = this._dualStack;
    }
    if (this._interfaceClientLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceClientLimit = this._interfaceClientLimit;
    }
    if (this._noAllowSnoopedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAllowSnoopedClients = this._noAllowSnoopedClients;
    }
    if (this._noBindOnRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBindOnRequest = this._noBindOnRequest;
    }
    if (this._relaySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaySource = this._relaySource;
    }
    if (this._sendReleaseOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendReleaseOnDelete = this._sendReleaseOnDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupOverridesV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSnoopedClients = undefined;
      this._alwaysProcessOptionRequestOption = undefined;
      this._asymmetricLeaseTime = undefined;
      this._asymmetricPrefixLeaseTime = undefined;
      this._clientNegotiationMatchIncomingInterface = undefined;
      this._delayAuthentication = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._dualStack = undefined;
      this._interfaceClientLimit = undefined;
      this._noAllowSnoopedClients = undefined;
      this._noBindOnRequest = undefined;
      this._relaySource = undefined;
      this._sendReleaseOnDelete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSnoopedClients = value.allowSnoopedClients;
      this._alwaysProcessOptionRequestOption = value.alwaysProcessOptionRequestOption;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._asymmetricPrefixLeaseTime = value.asymmetricPrefixLeaseTime;
      this._clientNegotiationMatchIncomingInterface = value.clientNegotiationMatchIncomingInterface;
      this._delayAuthentication = value.delayAuthentication;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._dualStack = value.dualStack;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._noAllowSnoopedClients = value.noAllowSnoopedClients;
      this._noBindOnRequest = value.noBindOnRequest;
      this._relaySource = value.relaySource;
      this._sendReleaseOnDelete = value.sendReleaseOnDelete;
    }
  }

  // allow_snooped_clients - computed: false, optional: true, required: false
  private _allowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get allowSnoopedClients() {
    return this.getBooleanAttribute('allow_snooped_clients');
  }
  public set allowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._allowSnoopedClients = value;
  }
  public resetAllowSnoopedClients() {
    this._allowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnoopedClientsInput() {
    return this._allowSnoopedClients;
  }

  // always_process_option_request_option - computed: false, optional: true, required: false
  private _alwaysProcessOptionRequestOption?: boolean | cdktf.IResolvable; 
  public get alwaysProcessOptionRequestOption() {
    return this.getBooleanAttribute('always_process_option_request_option');
  }
  public set alwaysProcessOptionRequestOption(value: boolean | cdktf.IResolvable) {
    this._alwaysProcessOptionRequestOption = value;
  }
  public resetAlwaysProcessOptionRequestOption() {
    this._alwaysProcessOptionRequestOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysProcessOptionRequestOptionInput() {
    return this._alwaysProcessOptionRequestOption;
  }

  // asymmetric_lease_time - computed: false, optional: true, required: false
  private _asymmetricLeaseTime?: number; 
  public get asymmetricLeaseTime() {
    return this.getNumberAttribute('asymmetric_lease_time');
  }
  public set asymmetricLeaseTime(value: number) {
    this._asymmetricLeaseTime = value;
  }
  public resetAsymmetricLeaseTime() {
    this._asymmetricLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricLeaseTimeInput() {
    return this._asymmetricLeaseTime;
  }

  // asymmetric_prefix_lease_time - computed: false, optional: true, required: false
  private _asymmetricPrefixLeaseTime?: number; 
  public get asymmetricPrefixLeaseTime() {
    return this.getNumberAttribute('asymmetric_prefix_lease_time');
  }
  public set asymmetricPrefixLeaseTime(value: number) {
    this._asymmetricPrefixLeaseTime = value;
  }
  public resetAsymmetricPrefixLeaseTime() {
    this._asymmetricPrefixLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricPrefixLeaseTimeInput() {
    return this._asymmetricPrefixLeaseTime;
  }

  // client_negotiation_match_incoming_interface - computed: false, optional: true, required: false
  private _clientNegotiationMatchIncomingInterface?: boolean | cdktf.IResolvable; 
  public get clientNegotiationMatchIncomingInterface() {
    return this.getBooleanAttribute('client_negotiation_match_incoming_interface');
  }
  public set clientNegotiationMatchIncomingInterface(value: boolean | cdktf.IResolvable) {
    this._clientNegotiationMatchIncomingInterface = value;
  }
  public resetClientNegotiationMatchIncomingInterface() {
    this._clientNegotiationMatchIncomingInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNegotiationMatchIncomingInterfaceInput() {
    return this._clientNegotiationMatchIncomingInterface;
  }

  // delay_authentication - computed: false, optional: true, required: false
  private _delayAuthentication?: boolean | cdktf.IResolvable; 
  public get delayAuthentication() {
    return this.getBooleanAttribute('delay_authentication');
  }
  public set delayAuthentication(value: boolean | cdktf.IResolvable) {
    this._delayAuthentication = value;
  }
  public resetDelayAuthentication() {
    this._delayAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAuthenticationInput() {
    return this._delayAuthentication;
  }

  // delete_binding_on_renegotiation - computed: false, optional: true, required: false
  private _deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable; 
  public get deleteBindingOnRenegotiation() {
    return this.getBooleanAttribute('delete_binding_on_renegotiation');
  }
  public set deleteBindingOnRenegotiation(value: boolean | cdktf.IResolvable) {
    this._deleteBindingOnRenegotiation = value;
  }
  public resetDeleteBindingOnRenegotiation() {
    this._deleteBindingOnRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBindingOnRenegotiationInput() {
    return this._deleteBindingOnRenegotiation;
  }

  // dual_stack - computed: false, optional: true, required: false
  private _dualStack?: string; 
  public get dualStack() {
    return this.getStringAttribute('dual_stack');
  }
  public set dualStack(value: string) {
    this._dualStack = value;
  }
  public resetDualStack() {
    this._dualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackInput() {
    return this._dualStack;
  }

  // interface_client_limit - computed: false, optional: true, required: false
  private _interfaceClientLimit?: number; 
  public get interfaceClientLimit() {
    return this.getNumberAttribute('interface_client_limit');
  }
  public set interfaceClientLimit(value: number) {
    this._interfaceClientLimit = value;
  }
  public resetInterfaceClientLimit() {
    this._interfaceClientLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceClientLimitInput() {
    return this._interfaceClientLimit;
  }

  // no_allow_snooped_clients - computed: false, optional: true, required: false
  private _noAllowSnoopedClients?: boolean | cdktf.IResolvable; 
  public get noAllowSnoopedClients() {
    return this.getBooleanAttribute('no_allow_snooped_clients');
  }
  public set noAllowSnoopedClients(value: boolean | cdktf.IResolvable) {
    this._noAllowSnoopedClients = value;
  }
  public resetNoAllowSnoopedClients() {
    this._noAllowSnoopedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAllowSnoopedClientsInput() {
    return this._noAllowSnoopedClients;
  }

  // no_bind_on_request - computed: false, optional: true, required: false
  private _noBindOnRequest?: boolean | cdktf.IResolvable; 
  public get noBindOnRequest() {
    return this.getBooleanAttribute('no_bind_on_request');
  }
  public set noBindOnRequest(value: boolean | cdktf.IResolvable) {
    this._noBindOnRequest = value;
  }
  public resetNoBindOnRequest() {
    this._noBindOnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBindOnRequestInput() {
    return this._noBindOnRequest;
  }

  // relay_source - computed: false, optional: true, required: false
  private _relaySource?: string; 
  public get relaySource() {
    return this.getStringAttribute('relay_source');
  }
  public set relaySource(value: string) {
    this._relaySource = value;
  }
  public resetRelaySource() {
    this._relaySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaySourceInput() {
    return this._relaySource;
  }

  // send_release_on_delete - computed: false, optional: true, required: false
  private _sendReleaseOnDelete?: boolean | cdktf.IResolvable; 
  public get sendReleaseOnDelete() {
    return this.getBooleanAttribute('send_release_on_delete');
  }
  public set sendReleaseOnDelete(value: boolean | cdktf.IResolvable) {
    this._sendReleaseOnDelete = value;
  }
  public resetSendReleaseOnDelete() {
    this._sendReleaseOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendReleaseOnDeleteInput() {
    return this._sendReleaseOnDelete;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId {
  /**
  * Include IRB and L2 interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#include_irb_and_l2 ForwardingoptionsDhcprelayGroup#include_irb_and_l2}
  */
  readonly includeIrbAndL2?: boolean | cdktf.IResolvable;
  /**
  * Keep incoming interface identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#keep_incoming_id ForwardingoptionsDhcprelayGroup#keep_incoming_id}
  */
  readonly keepIncomingId?: boolean | cdktf.IResolvable;
  /**
  * Drop packet if interface identifier not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#keep_incoming_id_strict ForwardingoptionsDhcprelayGroup#keep_incoming_id_strict}
  */
  readonly keepIncomingIdStrict?: boolean | cdktf.IResolvable;
  /**
  * Not include vlan or interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_vlan_interface_name ForwardingoptionsDhcprelayGroup#no_vlan_interface_name}
  */
  readonly noVlanInterfaceName?: boolean | cdktf.IResolvable;
  /**
  * Add router host name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_host_name ForwardingoptionsDhcprelayGroup#prefix_host_name}
  */
  readonly prefixHostName?: boolean | cdktf.IResolvable;
  /**
  * Add routing instance name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_routing_instance_name ForwardingoptionsDhcprelayGroup#prefix_routing_instance_name}
  */
  readonly prefixRoutingInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Use interface description instead of circuit identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_interface_description ForwardingoptionsDhcprelayGroup#use_interface_description}
  */
  readonly useInterfaceDescription?: string;
  /**
  * Use option-82 circuit-id for interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_option_82 ForwardingoptionsDhcprelayGroup#use_option_82}
  */
  readonly useOption82?: boolean | cdktf.IResolvable;
  /**
  * Drop packet if option-82 circuit-id not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_option_82_strict ForwardingoptionsDhcprelayGroup#use_option_82_strict}
  */
  readonly useOption82Strict?: boolean | cdktf.IResolvable;
  /**
  * Use VLAN id instead of name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_vlan_id ForwardingoptionsDhcprelayGroup#use_vlan_id}
  */
  readonly useVlanId?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupRelayAgentInterfaceIdToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_irb_and_l2: cdktf.booleanToTerraform(struct!.includeIrbAndL2),
    keep_incoming_id: cdktf.booleanToTerraform(struct!.keepIncomingId),
    keep_incoming_id_strict: cdktf.booleanToTerraform(struct!.keepIncomingIdStrict),
    no_vlan_interface_name: cdktf.booleanToTerraform(struct!.noVlanInterfaceName),
    prefix_host_name: cdktf.booleanToTerraform(struct!.prefixHostName),
    prefix_routing_instance_name: cdktf.booleanToTerraform(struct!.prefixRoutingInstanceName),
    use_interface_description: cdktf.stringToTerraform(struct!.useInterfaceDescription),
    use_option_82: cdktf.booleanToTerraform(struct!.useOption82),
    use_option_82_strict: cdktf.booleanToTerraform(struct!.useOption82Strict),
    use_vlan_id: cdktf.booleanToTerraform(struct!.useVlanId),
  }
}


export function forwardingoptionsDhcprelayGroupRelayAgentInterfaceIdToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_irb_and_l2: {
      value: cdktf.booleanToHclTerraform(struct!.includeIrbAndL2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_incoming_id: {
      value: cdktf.booleanToHclTerraform(struct!.keepIncomingId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_incoming_id_strict: {
      value: cdktf.booleanToHclTerraform(struct!.keepIncomingIdStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_vlan_interface_name: {
      value: cdktf.booleanToHclTerraform(struct!.noVlanInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_host_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_routing_instance_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixRoutingInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_interface_description: {
      value: cdktf.stringToHclTerraform(struct!.useInterfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_option_82: {
      value: cdktf.booleanToHclTerraform(struct!.useOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_option_82_strict: {
      value: cdktf.booleanToHclTerraform(struct!.useOption82Strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_vlan_id: {
      value: cdktf.booleanToHclTerraform(struct!.useVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayAgentInterfaceIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeIrbAndL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIrbAndL2 = this._includeIrbAndL2;
    }
    if (this._keepIncomingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIncomingId = this._keepIncomingId;
    }
    if (this._keepIncomingIdStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIncomingIdStrict = this._keepIncomingIdStrict;
    }
    if (this._noVlanInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.noVlanInterfaceName = this._noVlanInterfaceName;
    }
    if (this._prefixHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHostName = this._prefixHostName;
    }
    if (this._prefixRoutingInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRoutingInstanceName = this._prefixRoutingInstanceName;
    }
    if (this._useInterfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInterfaceDescription = this._useInterfaceDescription;
    }
    if (this._useOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption82 = this._useOption82;
    }
    if (this._useOption82Strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption82Strict = this._useOption82Strict;
    }
    if (this._useVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVlanId = this._useVlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeIrbAndL2 = undefined;
      this._keepIncomingId = undefined;
      this._keepIncomingIdStrict = undefined;
      this._noVlanInterfaceName = undefined;
      this._prefixHostName = undefined;
      this._prefixRoutingInstanceName = undefined;
      this._useInterfaceDescription = undefined;
      this._useOption82 = undefined;
      this._useOption82Strict = undefined;
      this._useVlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeIrbAndL2 = value.includeIrbAndL2;
      this._keepIncomingId = value.keepIncomingId;
      this._keepIncomingIdStrict = value.keepIncomingIdStrict;
      this._noVlanInterfaceName = value.noVlanInterfaceName;
      this._prefixHostName = value.prefixHostName;
      this._prefixRoutingInstanceName = value.prefixRoutingInstanceName;
      this._useInterfaceDescription = value.useInterfaceDescription;
      this._useOption82 = value.useOption82;
      this._useOption82Strict = value.useOption82Strict;
      this._useVlanId = value.useVlanId;
    }
  }

  // include_irb_and_l2 - computed: false, optional: true, required: false
  private _includeIrbAndL2?: boolean | cdktf.IResolvable; 
  public get includeIrbAndL2() {
    return this.getBooleanAttribute('include_irb_and_l2');
  }
  public set includeIrbAndL2(value: boolean | cdktf.IResolvable) {
    this._includeIrbAndL2 = value;
  }
  public resetIncludeIrbAndL2() {
    this._includeIrbAndL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIrbAndL2Input() {
    return this._includeIrbAndL2;
  }

  // keep_incoming_id - computed: false, optional: true, required: false
  private _keepIncomingId?: boolean | cdktf.IResolvable; 
  public get keepIncomingId() {
    return this.getBooleanAttribute('keep_incoming_id');
  }
  public set keepIncomingId(value: boolean | cdktf.IResolvable) {
    this._keepIncomingId = value;
  }
  public resetKeepIncomingId() {
    this._keepIncomingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIncomingIdInput() {
    return this._keepIncomingId;
  }

  // keep_incoming_id_strict - computed: false, optional: true, required: false
  private _keepIncomingIdStrict?: boolean | cdktf.IResolvable; 
  public get keepIncomingIdStrict() {
    return this.getBooleanAttribute('keep_incoming_id_strict');
  }
  public set keepIncomingIdStrict(value: boolean | cdktf.IResolvable) {
    this._keepIncomingIdStrict = value;
  }
  public resetKeepIncomingIdStrict() {
    this._keepIncomingIdStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIncomingIdStrictInput() {
    return this._keepIncomingIdStrict;
  }

  // no_vlan_interface_name - computed: false, optional: true, required: false
  private _noVlanInterfaceName?: boolean | cdktf.IResolvable; 
  public get noVlanInterfaceName() {
    return this.getBooleanAttribute('no_vlan_interface_name');
  }
  public set noVlanInterfaceName(value: boolean | cdktf.IResolvable) {
    this._noVlanInterfaceName = value;
  }
  public resetNoVlanInterfaceName() {
    this._noVlanInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVlanInterfaceNameInput() {
    return this._noVlanInterfaceName;
  }

  // prefix_host_name - computed: false, optional: true, required: false
  private _prefixHostName?: boolean | cdktf.IResolvable; 
  public get prefixHostName() {
    return this.getBooleanAttribute('prefix_host_name');
  }
  public set prefixHostName(value: boolean | cdktf.IResolvable) {
    this._prefixHostName = value;
  }
  public resetPrefixHostName() {
    this._prefixHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHostNameInput() {
    return this._prefixHostName;
  }

  // prefix_routing_instance_name - computed: false, optional: true, required: false
  private _prefixRoutingInstanceName?: boolean | cdktf.IResolvable; 
  public get prefixRoutingInstanceName() {
    return this.getBooleanAttribute('prefix_routing_instance_name');
  }
  public set prefixRoutingInstanceName(value: boolean | cdktf.IResolvable) {
    this._prefixRoutingInstanceName = value;
  }
  public resetPrefixRoutingInstanceName() {
    this._prefixRoutingInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRoutingInstanceNameInput() {
    return this._prefixRoutingInstanceName;
  }

  // use_interface_description - computed: false, optional: true, required: false
  private _useInterfaceDescription?: string; 
  public get useInterfaceDescription() {
    return this.getStringAttribute('use_interface_description');
  }
  public set useInterfaceDescription(value: string) {
    this._useInterfaceDescription = value;
  }
  public resetUseInterfaceDescription() {
    this._useInterfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInterfaceDescriptionInput() {
    return this._useInterfaceDescription;
  }

  // use_option_82 - computed: false, optional: true, required: false
  private _useOption82?: boolean | cdktf.IResolvable; 
  public get useOption82() {
    return this.getBooleanAttribute('use_option_82');
  }
  public set useOption82(value: boolean | cdktf.IResolvable) {
    this._useOption82 = value;
  }
  public resetUseOption82() {
    this._useOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOption82Input() {
    return this._useOption82;
  }

  // use_option_82_strict - computed: false, optional: true, required: false
  private _useOption82Strict?: boolean | cdktf.IResolvable; 
  public get useOption82Strict() {
    return this.getBooleanAttribute('use_option_82_strict');
  }
  public set useOption82Strict(value: boolean | cdktf.IResolvable) {
    this._useOption82Strict = value;
  }
  public resetUseOption82Strict() {
    this._useOption82Strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOption82StrictInput() {
    return this._useOption82Strict;
  }

  // use_vlan_id - computed: false, optional: true, required: false
  private _useVlanId?: boolean | cdktf.IResolvable; 
  public get useVlanId() {
    return this.getBooleanAttribute('use_vlan_id');
  }
  public set useVlanId(value: boolean | cdktf.IResolvable) {
    this._useVlanId = value;
  }
  public resetUseVlanId() {
    this._useVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVlanIdInput() {
    return this._useVlanId;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayAgentRemoteId {
  /**
  * Include IRB and L2 interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#include_irb_and_l2 ForwardingoptionsDhcprelayGroup#include_irb_and_l2}
  */
  readonly includeIrbAndL2?: boolean | cdktf.IResolvable;
  /**
  * Keep incoming interface identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#keep_incoming_id ForwardingoptionsDhcprelayGroup#keep_incoming_id}
  */
  readonly keepIncomingId?: boolean | cdktf.IResolvable;
  /**
  * Not include vlan or interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_vlan_interface_name ForwardingoptionsDhcprelayGroup#no_vlan_interface_name}
  */
  readonly noVlanInterfaceName?: boolean | cdktf.IResolvable;
  /**
  * Add router host name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_host_name ForwardingoptionsDhcprelayGroup#prefix_host_name}
  */
  readonly prefixHostName?: boolean | cdktf.IResolvable;
  /**
  * Add routing instance name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_routing_instance_name ForwardingoptionsDhcprelayGroup#prefix_routing_instance_name}
  */
  readonly prefixRoutingInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Use interface description instead of circuit identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_interface_description ForwardingoptionsDhcprelayGroup#use_interface_description}
  */
  readonly useInterfaceDescription?: string;
  /**
  * Use option-82 circuit-id for interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_option_82 ForwardingoptionsDhcprelayGroup#use_option_82}
  */
  readonly useOption82?: boolean | cdktf.IResolvable;
  /**
  * Drop packet if option-82 circuit-id not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_option_82_strict ForwardingoptionsDhcprelayGroup#use_option_82_strict}
  */
  readonly useOption82Strict?: boolean | cdktf.IResolvable;
  /**
  * Use VLAN id instead of name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_vlan_id ForwardingoptionsDhcprelayGroup#use_vlan_id}
  */
  readonly useVlanId?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupRelayAgentRemoteIdToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayAgentRemoteId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_irb_and_l2: cdktf.booleanToTerraform(struct!.includeIrbAndL2),
    keep_incoming_id: cdktf.booleanToTerraform(struct!.keepIncomingId),
    no_vlan_interface_name: cdktf.booleanToTerraform(struct!.noVlanInterfaceName),
    prefix_host_name: cdktf.booleanToTerraform(struct!.prefixHostName),
    prefix_routing_instance_name: cdktf.booleanToTerraform(struct!.prefixRoutingInstanceName),
    use_interface_description: cdktf.stringToTerraform(struct!.useInterfaceDescription),
    use_option_82: cdktf.booleanToTerraform(struct!.useOption82),
    use_option_82_strict: cdktf.booleanToTerraform(struct!.useOption82Strict),
    use_vlan_id: cdktf.booleanToTerraform(struct!.useVlanId),
  }
}


export function forwardingoptionsDhcprelayGroupRelayAgentRemoteIdToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayAgentRemoteId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_irb_and_l2: {
      value: cdktf.booleanToHclTerraform(struct!.includeIrbAndL2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_incoming_id: {
      value: cdktf.booleanToHclTerraform(struct!.keepIncomingId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_vlan_interface_name: {
      value: cdktf.booleanToHclTerraform(struct!.noVlanInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_host_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_routing_instance_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixRoutingInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_interface_description: {
      value: cdktf.stringToHclTerraform(struct!.useInterfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_option_82: {
      value: cdktf.booleanToHclTerraform(struct!.useOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_option_82_strict: {
      value: cdktf.booleanToHclTerraform(struct!.useOption82Strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_vlan_id: {
      value: cdktf.booleanToHclTerraform(struct!.useVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayAgentRemoteIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayAgentRemoteId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeIrbAndL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIrbAndL2 = this._includeIrbAndL2;
    }
    if (this._keepIncomingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIncomingId = this._keepIncomingId;
    }
    if (this._noVlanInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.noVlanInterfaceName = this._noVlanInterfaceName;
    }
    if (this._prefixHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHostName = this._prefixHostName;
    }
    if (this._prefixRoutingInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRoutingInstanceName = this._prefixRoutingInstanceName;
    }
    if (this._useInterfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInterfaceDescription = this._useInterfaceDescription;
    }
    if (this._useOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption82 = this._useOption82;
    }
    if (this._useOption82Strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption82Strict = this._useOption82Strict;
    }
    if (this._useVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVlanId = this._useVlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayAgentRemoteId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeIrbAndL2 = undefined;
      this._keepIncomingId = undefined;
      this._noVlanInterfaceName = undefined;
      this._prefixHostName = undefined;
      this._prefixRoutingInstanceName = undefined;
      this._useInterfaceDescription = undefined;
      this._useOption82 = undefined;
      this._useOption82Strict = undefined;
      this._useVlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeIrbAndL2 = value.includeIrbAndL2;
      this._keepIncomingId = value.keepIncomingId;
      this._noVlanInterfaceName = value.noVlanInterfaceName;
      this._prefixHostName = value.prefixHostName;
      this._prefixRoutingInstanceName = value.prefixRoutingInstanceName;
      this._useInterfaceDescription = value.useInterfaceDescription;
      this._useOption82 = value.useOption82;
      this._useOption82Strict = value.useOption82Strict;
      this._useVlanId = value.useVlanId;
    }
  }

  // include_irb_and_l2 - computed: false, optional: true, required: false
  private _includeIrbAndL2?: boolean | cdktf.IResolvable; 
  public get includeIrbAndL2() {
    return this.getBooleanAttribute('include_irb_and_l2');
  }
  public set includeIrbAndL2(value: boolean | cdktf.IResolvable) {
    this._includeIrbAndL2 = value;
  }
  public resetIncludeIrbAndL2() {
    this._includeIrbAndL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIrbAndL2Input() {
    return this._includeIrbAndL2;
  }

  // keep_incoming_id - computed: false, optional: true, required: false
  private _keepIncomingId?: boolean | cdktf.IResolvable; 
  public get keepIncomingId() {
    return this.getBooleanAttribute('keep_incoming_id');
  }
  public set keepIncomingId(value: boolean | cdktf.IResolvable) {
    this._keepIncomingId = value;
  }
  public resetKeepIncomingId() {
    this._keepIncomingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIncomingIdInput() {
    return this._keepIncomingId;
  }

  // no_vlan_interface_name - computed: false, optional: true, required: false
  private _noVlanInterfaceName?: boolean | cdktf.IResolvable; 
  public get noVlanInterfaceName() {
    return this.getBooleanAttribute('no_vlan_interface_name');
  }
  public set noVlanInterfaceName(value: boolean | cdktf.IResolvable) {
    this._noVlanInterfaceName = value;
  }
  public resetNoVlanInterfaceName() {
    this._noVlanInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVlanInterfaceNameInput() {
    return this._noVlanInterfaceName;
  }

  // prefix_host_name - computed: false, optional: true, required: false
  private _prefixHostName?: boolean | cdktf.IResolvable; 
  public get prefixHostName() {
    return this.getBooleanAttribute('prefix_host_name');
  }
  public set prefixHostName(value: boolean | cdktf.IResolvable) {
    this._prefixHostName = value;
  }
  public resetPrefixHostName() {
    this._prefixHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHostNameInput() {
    return this._prefixHostName;
  }

  // prefix_routing_instance_name - computed: false, optional: true, required: false
  private _prefixRoutingInstanceName?: boolean | cdktf.IResolvable; 
  public get prefixRoutingInstanceName() {
    return this.getBooleanAttribute('prefix_routing_instance_name');
  }
  public set prefixRoutingInstanceName(value: boolean | cdktf.IResolvable) {
    this._prefixRoutingInstanceName = value;
  }
  public resetPrefixRoutingInstanceName() {
    this._prefixRoutingInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRoutingInstanceNameInput() {
    return this._prefixRoutingInstanceName;
  }

  // use_interface_description - computed: false, optional: true, required: false
  private _useInterfaceDescription?: string; 
  public get useInterfaceDescription() {
    return this.getStringAttribute('use_interface_description');
  }
  public set useInterfaceDescription(value: string) {
    this._useInterfaceDescription = value;
  }
  public resetUseInterfaceDescription() {
    this._useInterfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInterfaceDescriptionInput() {
    return this._useInterfaceDescription;
  }

  // use_option_82 - computed: false, optional: true, required: false
  private _useOption82?: boolean | cdktf.IResolvable; 
  public get useOption82() {
    return this.getBooleanAttribute('use_option_82');
  }
  public set useOption82(value: boolean | cdktf.IResolvable) {
    this._useOption82 = value;
  }
  public resetUseOption82() {
    this._useOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOption82Input() {
    return this._useOption82;
  }

  // use_option_82_strict - computed: false, optional: true, required: false
  private _useOption82Strict?: boolean | cdktf.IResolvable; 
  public get useOption82Strict() {
    return this.getBooleanAttribute('use_option_82_strict');
  }
  public set useOption82Strict(value: boolean | cdktf.IResolvable) {
    this._useOption82Strict = value;
  }
  public resetUseOption82Strict() {
    this._useOption82Strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOption82StrictInput() {
    return this._useOption82Strict;
  }

  // use_vlan_id - computed: false, optional: true, required: false
  private _useVlanId?: boolean | cdktf.IResolvable; 
  public get useVlanId() {
    return this.getBooleanAttribute('use_vlan_id');
  }
  public set useVlanId(value: boolean | cdktf.IResolvable) {
    this._useVlanId = value;
  }
  public resetUseVlanId() {
    this._useVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVlanIdInput() {
    return this._useVlanId;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption15 {
  /**
  * Action on match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action: string;
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#compare ForwardingoptionsDhcprelayGroup#compare}
  */
  readonly compare: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value ForwardingoptionsDhcprelayGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value_type ForwardingoptionsDhcprelayGroup#value_type}
  */
  readonly valueType: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption15ToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption15 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    compare: cdktf.stringToTerraform(struct!.compare),
    group: cdktf.stringToTerraform(struct!.group),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption15ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption15 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption15OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption15 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption15 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._compare = undefined;
      this._group = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._compare = value.compare;
      this._group = value.group;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // compare - computed: false, optional: false, required: true
  private _compare?: string; 
  public get compare() {
    return this.getStringAttribute('compare');
  }
  public set compare(value: string) {
    this._compare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareInput() {
    return this._compare;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption15List extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsDhcprelayGroupRelayOptionOption15[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsDhcprelayGroupRelayOptionOption15OutputReference {
    return new ForwardingoptionsDhcprelayGroupRelayOptionOption15OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction {
  /**
  * Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action?: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption15DefaultActionToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption15DefaultActionToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._group = value.group;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption16 {
  /**
  * Action on match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action: string;
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#compare ForwardingoptionsDhcprelayGroup#compare}
  */
  readonly compare: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value ForwardingoptionsDhcprelayGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value_type ForwardingoptionsDhcprelayGroup#value_type}
  */
  readonly valueType: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption16ToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption16 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    compare: cdktf.stringToTerraform(struct!.compare),
    group: cdktf.stringToTerraform(struct!.group),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption16ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption16 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption16OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption16 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption16 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._compare = undefined;
      this._group = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._compare = value.compare;
      this._group = value.group;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // compare - computed: false, optional: false, required: true
  private _compare?: string; 
  public get compare() {
    return this.getStringAttribute('compare');
  }
  public set compare(value: string) {
    this._compare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareInput() {
    return this._compare;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption16List extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsDhcprelayGroupRelayOptionOption16[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsDhcprelayGroupRelayOptionOption16OutputReference {
    return new ForwardingoptionsDhcprelayGroupRelayOptionOption16OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction {
  /**
  * Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action?: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption16DefaultActionToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption16DefaultActionToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._group = value.group;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption60 {
  /**
  * Action on match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action: string;
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#compare ForwardingoptionsDhcprelayGroup#compare}
  */
  readonly compare: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value ForwardingoptionsDhcprelayGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value_type ForwardingoptionsDhcprelayGroup#value_type}
  */
  readonly valueType: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption60ToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption60 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    compare: cdktf.stringToTerraform(struct!.compare),
    group: cdktf.stringToTerraform(struct!.group),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption60ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption60 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption60OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption60 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption60 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._compare = undefined;
      this._group = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._compare = value.compare;
      this._group = value.group;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // compare - computed: false, optional: false, required: true
  private _compare?: string; 
  public get compare() {
    return this.getStringAttribute('compare');
  }
  public set compare(value: string) {
    this._compare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareInput() {
    return this._compare;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption60List extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsDhcprelayGroupRelayOptionOption60[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsDhcprelayGroupRelayOptionOption60OutputReference {
    return new ForwardingoptionsDhcprelayGroupRelayOptionOption60OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction {
  /**
  * Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action?: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption60DefaultActionToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption60DefaultActionToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._group = value.group;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption77 {
  /**
  * Action on match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action: string;
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#compare ForwardingoptionsDhcprelayGroup#compare}
  */
  readonly compare: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value ForwardingoptionsDhcprelayGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value_type ForwardingoptionsDhcprelayGroup#value_type}
  */
  readonly valueType: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption77ToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption77 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    compare: cdktf.stringToTerraform(struct!.compare),
    group: cdktf.stringToTerraform(struct!.group),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption77ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption77 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption77OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption77 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption77 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._compare = undefined;
      this._group = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._compare = value.compare;
      this._group = value.group;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // compare - computed: false, optional: false, required: true
  private _compare?: string; 
  public get compare() {
    return this.getStringAttribute('compare');
  }
  public set compare(value: string) {
    this._compare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareInput() {
    return this._compare;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption77List extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsDhcprelayGroupRelayOptionOption77[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsDhcprelayGroupRelayOptionOption77OutputReference {
    return new ForwardingoptionsDhcprelayGroupRelayOptionOption77OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction {
  /**
  * Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action?: string;
  /**
  * Group for action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#group ForwardingoptionsDhcprelayGroup#group}
  */
  readonly group?: string;
}

export function forwardingoptionsDhcprelayGroupRelayOptionOption77DefaultActionToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionOption77DefaultActionToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._group = value.group;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOption {
  /**
  * Options precedence order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_order ForwardingoptionsDhcprelayGroup#option_order}
  */
  readonly optionOrder?: string[];
  /**
  * option_15 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_15 ForwardingoptionsDhcprelayGroup#option_15}
  */
  readonly option15?: ForwardingoptionsDhcprelayGroupRelayOptionOption15[] | cdktf.IResolvable;
  /**
  * option_15_default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_15_default_action ForwardingoptionsDhcprelayGroup#option_15_default_action}
  */
  readonly option15DefaultAction?: ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction;
  /**
  * option_16 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_16 ForwardingoptionsDhcprelayGroup#option_16}
  */
  readonly option16?: ForwardingoptionsDhcprelayGroupRelayOptionOption16[] | cdktf.IResolvable;
  /**
  * option_16_default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_16_default_action ForwardingoptionsDhcprelayGroup#option_16_default_action}
  */
  readonly option16DefaultAction?: ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction;
  /**
  * option_60 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_60 ForwardingoptionsDhcprelayGroup#option_60}
  */
  readonly option60?: ForwardingoptionsDhcprelayGroupRelayOptionOption60[] | cdktf.IResolvable;
  /**
  * option_60_default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_60_default_action ForwardingoptionsDhcprelayGroup#option_60_default_action}
  */
  readonly option60DefaultAction?: ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction;
  /**
  * option_77 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_77 ForwardingoptionsDhcprelayGroup#option_77}
  */
  readonly option77?: ForwardingoptionsDhcprelayGroupRelayOptionOption77[] | cdktf.IResolvable;
  /**
  * option_77_default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#option_77_default_action ForwardingoptionsDhcprelayGroup#option_77_default_action}
  */
  readonly option77DefaultAction?: ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction;
}

export function forwardingoptionsDhcprelayGroupRelayOptionToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionOrder),
    option_15: cdktf.listMapper(forwardingoptionsDhcprelayGroupRelayOptionOption15ToTerraform, true)(struct!.option15),
    option_15_default_action: forwardingoptionsDhcprelayGroupRelayOptionOption15DefaultActionToTerraform(struct!.option15DefaultAction),
    option_16: cdktf.listMapper(forwardingoptionsDhcprelayGroupRelayOptionOption16ToTerraform, true)(struct!.option16),
    option_16_default_action: forwardingoptionsDhcprelayGroupRelayOptionOption16DefaultActionToTerraform(struct!.option16DefaultAction),
    option_60: cdktf.listMapper(forwardingoptionsDhcprelayGroupRelayOptionOption60ToTerraform, true)(struct!.option60),
    option_60_default_action: forwardingoptionsDhcprelayGroupRelayOptionOption60DefaultActionToTerraform(struct!.option60DefaultAction),
    option_77: cdktf.listMapper(forwardingoptionsDhcprelayGroupRelayOptionOption77ToTerraform, true)(struct!.option77),
    option_77_default_action: forwardingoptionsDhcprelayGroupRelayOptionOption77DefaultActionToTerraform(struct!.option77DefaultAction),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOptionToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    option_15: {
      value: cdktf.listMapperHcl(forwardingoptionsDhcprelayGroupRelayOptionOption15ToHclTerraform, true)(struct!.option15),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption15List",
    },
    option_15_default_action: {
      value: forwardingoptionsDhcprelayGroupRelayOptionOption15DefaultActionToHclTerraform(struct!.option15DefaultAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction",
    },
    option_16: {
      value: cdktf.listMapperHcl(forwardingoptionsDhcprelayGroupRelayOptionOption16ToHclTerraform, true)(struct!.option16),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption16List",
    },
    option_16_default_action: {
      value: forwardingoptionsDhcprelayGroupRelayOptionOption16DefaultActionToHclTerraform(struct!.option16DefaultAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction",
    },
    option_60: {
      value: cdktf.listMapperHcl(forwardingoptionsDhcprelayGroupRelayOptionOption60ToHclTerraform, true)(struct!.option60),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption60List",
    },
    option_60_default_action: {
      value: forwardingoptionsDhcprelayGroupRelayOptionOption60DefaultActionToHclTerraform(struct!.option60DefaultAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction",
    },
    option_77: {
      value: cdktf.listMapperHcl(forwardingoptionsDhcprelayGroupRelayOptionOption77ToHclTerraform, true)(struct!.option77),
      isBlock: true,
      type: "set",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption77List",
    },
    option_77_default_action: {
      value: forwardingoptionsDhcprelayGroupRelayOptionOption77DefaultActionToHclTerraform(struct!.option77DefaultAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionOrder = this._optionOrder;
    }
    if (this._option15?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option15 = this._option15?.internalValue;
    }
    if (this._option15DefaultAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option15DefaultAction = this._option15DefaultAction?.internalValue;
    }
    if (this._option16?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option16 = this._option16?.internalValue;
    }
    if (this._option16DefaultAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option16DefaultAction = this._option16DefaultAction?.internalValue;
    }
    if (this._option60?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option60 = this._option60?.internalValue;
    }
    if (this._option60DefaultAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option60DefaultAction = this._option60DefaultAction?.internalValue;
    }
    if (this._option77?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option77 = this._option77?.internalValue;
    }
    if (this._option77DefaultAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option77DefaultAction = this._option77DefaultAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionOrder = undefined;
      this._option15.internalValue = undefined;
      this._option15DefaultAction.internalValue = undefined;
      this._option16.internalValue = undefined;
      this._option16DefaultAction.internalValue = undefined;
      this._option60.internalValue = undefined;
      this._option60DefaultAction.internalValue = undefined;
      this._option77.internalValue = undefined;
      this._option77DefaultAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionOrder = value.optionOrder;
      this._option15.internalValue = value.option15;
      this._option15DefaultAction.internalValue = value.option15DefaultAction;
      this._option16.internalValue = value.option16;
      this._option16DefaultAction.internalValue = value.option16DefaultAction;
      this._option60.internalValue = value.option60;
      this._option60DefaultAction.internalValue = value.option60DefaultAction;
      this._option77.internalValue = value.option77;
      this._option77DefaultAction.internalValue = value.option77DefaultAction;
    }
  }

  // option_order - computed: false, optional: true, required: false
  private _optionOrder?: string[]; 
  public get optionOrder() {
    return this.getListAttribute('option_order');
  }
  public set optionOrder(value: string[]) {
    this._optionOrder = value;
  }
  public resetOptionOrder() {
    this._optionOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionOrderInput() {
    return this._optionOrder;
  }

  // option_15 - computed: false, optional: true, required: false
  private _option15 = new ForwardingoptionsDhcprelayGroupRelayOptionOption15List(this, "option_15", true);
  public get option15() {
    return this._option15;
  }
  public putOption15(value: ForwardingoptionsDhcprelayGroupRelayOptionOption15[] | cdktf.IResolvable) {
    this._option15.internalValue = value;
  }
  public resetOption15() {
    this._option15.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option15Input() {
    return this._option15.internalValue;
  }

  // option_15_default_action - computed: false, optional: true, required: false
  private _option15DefaultAction = new ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultActionOutputReference(this, "option_15_default_action");
  public get option15DefaultAction() {
    return this._option15DefaultAction;
  }
  public putOption15DefaultAction(value: ForwardingoptionsDhcprelayGroupRelayOptionOption15DefaultAction) {
    this._option15DefaultAction.internalValue = value;
  }
  public resetOption15DefaultAction() {
    this._option15DefaultAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option15DefaultActionInput() {
    return this._option15DefaultAction.internalValue;
  }

  // option_16 - computed: false, optional: true, required: false
  private _option16 = new ForwardingoptionsDhcprelayGroupRelayOptionOption16List(this, "option_16", true);
  public get option16() {
    return this._option16;
  }
  public putOption16(value: ForwardingoptionsDhcprelayGroupRelayOptionOption16[] | cdktf.IResolvable) {
    this._option16.internalValue = value;
  }
  public resetOption16() {
    this._option16.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option16Input() {
    return this._option16.internalValue;
  }

  // option_16_default_action - computed: false, optional: true, required: false
  private _option16DefaultAction = new ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultActionOutputReference(this, "option_16_default_action");
  public get option16DefaultAction() {
    return this._option16DefaultAction;
  }
  public putOption16DefaultAction(value: ForwardingoptionsDhcprelayGroupRelayOptionOption16DefaultAction) {
    this._option16DefaultAction.internalValue = value;
  }
  public resetOption16DefaultAction() {
    this._option16DefaultAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option16DefaultActionInput() {
    return this._option16DefaultAction.internalValue;
  }

  // option_60 - computed: false, optional: true, required: false
  private _option60 = new ForwardingoptionsDhcprelayGroupRelayOptionOption60List(this, "option_60", true);
  public get option60() {
    return this._option60;
  }
  public putOption60(value: ForwardingoptionsDhcprelayGroupRelayOptionOption60[] | cdktf.IResolvable) {
    this._option60.internalValue = value;
  }
  public resetOption60() {
    this._option60.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option60Input() {
    return this._option60.internalValue;
  }

  // option_60_default_action - computed: false, optional: true, required: false
  private _option60DefaultAction = new ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultActionOutputReference(this, "option_60_default_action");
  public get option60DefaultAction() {
    return this._option60DefaultAction;
  }
  public putOption60DefaultAction(value: ForwardingoptionsDhcprelayGroupRelayOptionOption60DefaultAction) {
    this._option60DefaultAction.internalValue = value;
  }
  public resetOption60DefaultAction() {
    this._option60DefaultAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option60DefaultActionInput() {
    return this._option60DefaultAction.internalValue;
  }

  // option_77 - computed: false, optional: true, required: false
  private _option77 = new ForwardingoptionsDhcprelayGroupRelayOptionOption77List(this, "option_77", true);
  public get option77() {
    return this._option77;
  }
  public putOption77(value: ForwardingoptionsDhcprelayGroupRelayOptionOption77[] | cdktf.IResolvable) {
    this._option77.internalValue = value;
  }
  public resetOption77() {
    this._option77.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option77Input() {
    return this._option77.internalValue;
  }

  // option_77_default_action - computed: false, optional: true, required: false
  private _option77DefaultAction = new ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultActionOutputReference(this, "option_77_default_action");
  public get option77DefaultAction() {
    return this._option77DefaultAction;
  }
  public putOption77DefaultAction(value: ForwardingoptionsDhcprelayGroupRelayOptionOption77DefaultAction) {
    this._option77DefaultAction.internalValue = value;
  }
  public resetOption77DefaultAction() {
    this._option77DefaultAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option77DefaultActionInput() {
    return this._option77DefaultAction.internalValue;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOption82CircuitId {
  /**
  * Include IRB and L2 interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#include_irb_and_l2 ForwardingoptionsDhcprelayGroup#include_irb_and_l2}
  */
  readonly includeIrbAndL2?: boolean | cdktf.IResolvable;
  /**
  * Keep incoming circuit identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#keep_incoming_circuit_id ForwardingoptionsDhcprelayGroup#keep_incoming_circuit_id}
  */
  readonly keepIncomingCircuitId?: boolean | cdktf.IResolvable;
  /**
  * Not include vlan or interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_vlan_interface_name ForwardingoptionsDhcprelayGroup#no_vlan_interface_name}
  */
  readonly noVlanInterfaceName?: boolean | cdktf.IResolvable;
  /**
  * Add router host name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_host_name ForwardingoptionsDhcprelayGroup#prefix_host_name}
  */
  readonly prefixHostName?: boolean | cdktf.IResolvable;
  /**
  * Add routing instance name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_routing_instance_name ForwardingoptionsDhcprelayGroup#prefix_routing_instance_name}
  */
  readonly prefixRoutingInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Use interface description instead of circuit identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_interface_description ForwardingoptionsDhcprelayGroup#use_interface_description}
  */
  readonly useInterfaceDescription?: string;
  /**
  * Use VLAN id instead of name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_vlan_id ForwardingoptionsDhcprelayGroup#use_vlan_id}
  */
  readonly useVlanId?: boolean | cdktf.IResolvable;
  /**
  * Include user defined string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#user_defined ForwardingoptionsDhcprelayGroup#user_defined}
  */
  readonly userDefined?: boolean | cdktf.IResolvable;
  /**
  * Use only VLAN id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#vlan_id_only ForwardingoptionsDhcprelayGroup#vlan_id_only}
  */
  readonly vlanIdOnly?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupRelayOption82CircuitIdToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption82CircuitId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_irb_and_l2: cdktf.booleanToTerraform(struct!.includeIrbAndL2),
    keep_incoming_circuit_id: cdktf.booleanToTerraform(struct!.keepIncomingCircuitId),
    no_vlan_interface_name: cdktf.booleanToTerraform(struct!.noVlanInterfaceName),
    prefix_host_name: cdktf.booleanToTerraform(struct!.prefixHostName),
    prefix_routing_instance_name: cdktf.booleanToTerraform(struct!.prefixRoutingInstanceName),
    use_interface_description: cdktf.stringToTerraform(struct!.useInterfaceDescription),
    use_vlan_id: cdktf.booleanToTerraform(struct!.useVlanId),
    user_defined: cdktf.booleanToTerraform(struct!.userDefined),
    vlan_id_only: cdktf.booleanToTerraform(struct!.vlanIdOnly),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOption82CircuitIdToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption82CircuitId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_irb_and_l2: {
      value: cdktf.booleanToHclTerraform(struct!.includeIrbAndL2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_incoming_circuit_id: {
      value: cdktf.booleanToHclTerraform(struct!.keepIncomingCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_vlan_interface_name: {
      value: cdktf.booleanToHclTerraform(struct!.noVlanInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_host_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_routing_instance_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixRoutingInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_interface_description: {
      value: cdktf.stringToHclTerraform(struct!.useInterfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_vlan_id: {
      value: cdktf.booleanToHclTerraform(struct!.useVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined: {
      value: cdktf.booleanToHclTerraform(struct!.userDefined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id_only: {
      value: cdktf.booleanToHclTerraform(struct!.vlanIdOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOption82CircuitIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOption82CircuitId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeIrbAndL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIrbAndL2 = this._includeIrbAndL2;
    }
    if (this._keepIncomingCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIncomingCircuitId = this._keepIncomingCircuitId;
    }
    if (this._noVlanInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.noVlanInterfaceName = this._noVlanInterfaceName;
    }
    if (this._prefixHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHostName = this._prefixHostName;
    }
    if (this._prefixRoutingInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRoutingInstanceName = this._prefixRoutingInstanceName;
    }
    if (this._useInterfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInterfaceDescription = this._useInterfaceDescription;
    }
    if (this._useVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVlanId = this._useVlanId;
    }
    if (this._userDefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefined = this._userDefined;
    }
    if (this._vlanIdOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIdOnly = this._vlanIdOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOption82CircuitId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeIrbAndL2 = undefined;
      this._keepIncomingCircuitId = undefined;
      this._noVlanInterfaceName = undefined;
      this._prefixHostName = undefined;
      this._prefixRoutingInstanceName = undefined;
      this._useInterfaceDescription = undefined;
      this._useVlanId = undefined;
      this._userDefined = undefined;
      this._vlanIdOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeIrbAndL2 = value.includeIrbAndL2;
      this._keepIncomingCircuitId = value.keepIncomingCircuitId;
      this._noVlanInterfaceName = value.noVlanInterfaceName;
      this._prefixHostName = value.prefixHostName;
      this._prefixRoutingInstanceName = value.prefixRoutingInstanceName;
      this._useInterfaceDescription = value.useInterfaceDescription;
      this._useVlanId = value.useVlanId;
      this._userDefined = value.userDefined;
      this._vlanIdOnly = value.vlanIdOnly;
    }
  }

  // include_irb_and_l2 - computed: false, optional: true, required: false
  private _includeIrbAndL2?: boolean | cdktf.IResolvable; 
  public get includeIrbAndL2() {
    return this.getBooleanAttribute('include_irb_and_l2');
  }
  public set includeIrbAndL2(value: boolean | cdktf.IResolvable) {
    this._includeIrbAndL2 = value;
  }
  public resetIncludeIrbAndL2() {
    this._includeIrbAndL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIrbAndL2Input() {
    return this._includeIrbAndL2;
  }

  // keep_incoming_circuit_id - computed: false, optional: true, required: false
  private _keepIncomingCircuitId?: boolean | cdktf.IResolvable; 
  public get keepIncomingCircuitId() {
    return this.getBooleanAttribute('keep_incoming_circuit_id');
  }
  public set keepIncomingCircuitId(value: boolean | cdktf.IResolvable) {
    this._keepIncomingCircuitId = value;
  }
  public resetKeepIncomingCircuitId() {
    this._keepIncomingCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIncomingCircuitIdInput() {
    return this._keepIncomingCircuitId;
  }

  // no_vlan_interface_name - computed: false, optional: true, required: false
  private _noVlanInterfaceName?: boolean | cdktf.IResolvable; 
  public get noVlanInterfaceName() {
    return this.getBooleanAttribute('no_vlan_interface_name');
  }
  public set noVlanInterfaceName(value: boolean | cdktf.IResolvable) {
    this._noVlanInterfaceName = value;
  }
  public resetNoVlanInterfaceName() {
    this._noVlanInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVlanInterfaceNameInput() {
    return this._noVlanInterfaceName;
  }

  // prefix_host_name - computed: false, optional: true, required: false
  private _prefixHostName?: boolean | cdktf.IResolvable; 
  public get prefixHostName() {
    return this.getBooleanAttribute('prefix_host_name');
  }
  public set prefixHostName(value: boolean | cdktf.IResolvable) {
    this._prefixHostName = value;
  }
  public resetPrefixHostName() {
    this._prefixHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHostNameInput() {
    return this._prefixHostName;
  }

  // prefix_routing_instance_name - computed: false, optional: true, required: false
  private _prefixRoutingInstanceName?: boolean | cdktf.IResolvable; 
  public get prefixRoutingInstanceName() {
    return this.getBooleanAttribute('prefix_routing_instance_name');
  }
  public set prefixRoutingInstanceName(value: boolean | cdktf.IResolvable) {
    this._prefixRoutingInstanceName = value;
  }
  public resetPrefixRoutingInstanceName() {
    this._prefixRoutingInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRoutingInstanceNameInput() {
    return this._prefixRoutingInstanceName;
  }

  // use_interface_description - computed: false, optional: true, required: false
  private _useInterfaceDescription?: string; 
  public get useInterfaceDescription() {
    return this.getStringAttribute('use_interface_description');
  }
  public set useInterfaceDescription(value: string) {
    this._useInterfaceDescription = value;
  }
  public resetUseInterfaceDescription() {
    this._useInterfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInterfaceDescriptionInput() {
    return this._useInterfaceDescription;
  }

  // use_vlan_id - computed: false, optional: true, required: false
  private _useVlanId?: boolean | cdktf.IResolvable; 
  public get useVlanId() {
    return this.getBooleanAttribute('use_vlan_id');
  }
  public set useVlanId(value: boolean | cdktf.IResolvable) {
    this._useVlanId = value;
  }
  public resetUseVlanId() {
    this._useVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVlanIdInput() {
    return this._useVlanId;
  }

  // user_defined - computed: false, optional: true, required: false
  private _userDefined?: boolean | cdktf.IResolvable; 
  public get userDefined() {
    return this.getBooleanAttribute('user_defined');
  }
  public set userDefined(value: boolean | cdktf.IResolvable) {
    this._userDefined = value;
  }
  public resetUserDefined() {
    this._userDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedInput() {
    return this._userDefined;
  }

  // vlan_id_only - computed: false, optional: true, required: false
  private _vlanIdOnly?: boolean | cdktf.IResolvable; 
  public get vlanIdOnly() {
    return this.getBooleanAttribute('vlan_id_only');
  }
  public set vlanIdOnly(value: boolean | cdktf.IResolvable) {
    this._vlanIdOnly = value;
  }
  public resetVlanIdOnly() {
    this._vlanIdOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdOnlyInput() {
    return this._vlanIdOnly;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOption82RemoteId {
  /**
  * Include hostname only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#hostname_only ForwardingoptionsDhcprelayGroup#hostname_only}
  */
  readonly hostnameOnly?: boolean | cdktf.IResolvable;
  /**
  * Include IRB and L2 interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#include_irb_and_l2 ForwardingoptionsDhcprelayGroup#include_irb_and_l2}
  */
  readonly includeIrbAndL2?: boolean | cdktf.IResolvable;
  /**
  * Keep incoming remote identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#keep_incoming_remote_id ForwardingoptionsDhcprelayGroup#keep_incoming_remote_id}
  */
  readonly keepIncomingRemoteId?: boolean | cdktf.IResolvable;
  /**
  * Not include vlan or interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#no_vlan_interface_name ForwardingoptionsDhcprelayGroup#no_vlan_interface_name}
  */
  readonly noVlanInterfaceName?: boolean | cdktf.IResolvable;
  /**
  * Add router host name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_host_name ForwardingoptionsDhcprelayGroup#prefix_host_name}
  */
  readonly prefixHostName?: boolean | cdktf.IResolvable;
  /**
  * Add routing instance name to circuit / interface-id or remote-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#prefix_routing_instance_name ForwardingoptionsDhcprelayGroup#prefix_routing_instance_name}
  */
  readonly prefixRoutingInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Use interface description instead of circuit identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_interface_description ForwardingoptionsDhcprelayGroup#use_interface_description}
  */
  readonly useInterfaceDescription?: string;
  /**
  * Use raw string instead of the default remote id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_string ForwardingoptionsDhcprelayGroup#use_string}
  */
  readonly useString?: string;
  /**
  * Use VLAN id instead of name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#use_vlan_id ForwardingoptionsDhcprelayGroup#use_vlan_id}
  */
  readonly useVlanId?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsDhcprelayGroupRelayOption82RemoteIdToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption82RemoteId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname_only: cdktf.booleanToTerraform(struct!.hostnameOnly),
    include_irb_and_l2: cdktf.booleanToTerraform(struct!.includeIrbAndL2),
    keep_incoming_remote_id: cdktf.booleanToTerraform(struct!.keepIncomingRemoteId),
    no_vlan_interface_name: cdktf.booleanToTerraform(struct!.noVlanInterfaceName),
    prefix_host_name: cdktf.booleanToTerraform(struct!.prefixHostName),
    prefix_routing_instance_name: cdktf.booleanToTerraform(struct!.prefixRoutingInstanceName),
    use_interface_description: cdktf.stringToTerraform(struct!.useInterfaceDescription),
    use_string: cdktf.stringToTerraform(struct!.useString),
    use_vlan_id: cdktf.booleanToTerraform(struct!.useVlanId),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOption82RemoteIdToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption82RemoteId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname_only: {
      value: cdktf.booleanToHclTerraform(struct!.hostnameOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_irb_and_l2: {
      value: cdktf.booleanToHclTerraform(struct!.includeIrbAndL2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_incoming_remote_id: {
      value: cdktf.booleanToHclTerraform(struct!.keepIncomingRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_vlan_interface_name: {
      value: cdktf.booleanToHclTerraform(struct!.noVlanInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_host_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_routing_instance_name: {
      value: cdktf.booleanToHclTerraform(struct!.prefixRoutingInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_interface_description: {
      value: cdktf.stringToHclTerraform(struct!.useInterfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_string: {
      value: cdktf.stringToHclTerraform(struct!.useString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_vlan_id: {
      value: cdktf.booleanToHclTerraform(struct!.useVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOption82RemoteIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOption82RemoteId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnameOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameOnly = this._hostnameOnly;
    }
    if (this._includeIrbAndL2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIrbAndL2 = this._includeIrbAndL2;
    }
    if (this._keepIncomingRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIncomingRemoteId = this._keepIncomingRemoteId;
    }
    if (this._noVlanInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.noVlanInterfaceName = this._noVlanInterfaceName;
    }
    if (this._prefixHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHostName = this._prefixHostName;
    }
    if (this._prefixRoutingInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRoutingInstanceName = this._prefixRoutingInstanceName;
    }
    if (this._useInterfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInterfaceDescription = this._useInterfaceDescription;
    }
    if (this._useString !== undefined) {
      hasAnyValues = true;
      internalValueResult.useString = this._useString;
    }
    if (this._useVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVlanId = this._useVlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOption82RemoteId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnameOnly = undefined;
      this._includeIrbAndL2 = undefined;
      this._keepIncomingRemoteId = undefined;
      this._noVlanInterfaceName = undefined;
      this._prefixHostName = undefined;
      this._prefixRoutingInstanceName = undefined;
      this._useInterfaceDescription = undefined;
      this._useString = undefined;
      this._useVlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnameOnly = value.hostnameOnly;
      this._includeIrbAndL2 = value.includeIrbAndL2;
      this._keepIncomingRemoteId = value.keepIncomingRemoteId;
      this._noVlanInterfaceName = value.noVlanInterfaceName;
      this._prefixHostName = value.prefixHostName;
      this._prefixRoutingInstanceName = value.prefixRoutingInstanceName;
      this._useInterfaceDescription = value.useInterfaceDescription;
      this._useString = value.useString;
      this._useVlanId = value.useVlanId;
    }
  }

  // hostname_only - computed: false, optional: true, required: false
  private _hostnameOnly?: boolean | cdktf.IResolvable; 
  public get hostnameOnly() {
    return this.getBooleanAttribute('hostname_only');
  }
  public set hostnameOnly(value: boolean | cdktf.IResolvable) {
    this._hostnameOnly = value;
  }
  public resetHostnameOnly() {
    this._hostnameOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameOnlyInput() {
    return this._hostnameOnly;
  }

  // include_irb_and_l2 - computed: false, optional: true, required: false
  private _includeIrbAndL2?: boolean | cdktf.IResolvable; 
  public get includeIrbAndL2() {
    return this.getBooleanAttribute('include_irb_and_l2');
  }
  public set includeIrbAndL2(value: boolean | cdktf.IResolvable) {
    this._includeIrbAndL2 = value;
  }
  public resetIncludeIrbAndL2() {
    this._includeIrbAndL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIrbAndL2Input() {
    return this._includeIrbAndL2;
  }

  // keep_incoming_remote_id - computed: false, optional: true, required: false
  private _keepIncomingRemoteId?: boolean | cdktf.IResolvable; 
  public get keepIncomingRemoteId() {
    return this.getBooleanAttribute('keep_incoming_remote_id');
  }
  public set keepIncomingRemoteId(value: boolean | cdktf.IResolvable) {
    this._keepIncomingRemoteId = value;
  }
  public resetKeepIncomingRemoteId() {
    this._keepIncomingRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIncomingRemoteIdInput() {
    return this._keepIncomingRemoteId;
  }

  // no_vlan_interface_name - computed: false, optional: true, required: false
  private _noVlanInterfaceName?: boolean | cdktf.IResolvable; 
  public get noVlanInterfaceName() {
    return this.getBooleanAttribute('no_vlan_interface_name');
  }
  public set noVlanInterfaceName(value: boolean | cdktf.IResolvable) {
    this._noVlanInterfaceName = value;
  }
  public resetNoVlanInterfaceName() {
    this._noVlanInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVlanInterfaceNameInput() {
    return this._noVlanInterfaceName;
  }

  // prefix_host_name - computed: false, optional: true, required: false
  private _prefixHostName?: boolean | cdktf.IResolvable; 
  public get prefixHostName() {
    return this.getBooleanAttribute('prefix_host_name');
  }
  public set prefixHostName(value: boolean | cdktf.IResolvable) {
    this._prefixHostName = value;
  }
  public resetPrefixHostName() {
    this._prefixHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHostNameInput() {
    return this._prefixHostName;
  }

  // prefix_routing_instance_name - computed: false, optional: true, required: false
  private _prefixRoutingInstanceName?: boolean | cdktf.IResolvable; 
  public get prefixRoutingInstanceName() {
    return this.getBooleanAttribute('prefix_routing_instance_name');
  }
  public set prefixRoutingInstanceName(value: boolean | cdktf.IResolvable) {
    this._prefixRoutingInstanceName = value;
  }
  public resetPrefixRoutingInstanceName() {
    this._prefixRoutingInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRoutingInstanceNameInput() {
    return this._prefixRoutingInstanceName;
  }

  // use_interface_description - computed: false, optional: true, required: false
  private _useInterfaceDescription?: string; 
  public get useInterfaceDescription() {
    return this.getStringAttribute('use_interface_description');
  }
  public set useInterfaceDescription(value: string) {
    this._useInterfaceDescription = value;
  }
  public resetUseInterfaceDescription() {
    this._useInterfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInterfaceDescriptionInput() {
    return this._useInterfaceDescription;
  }

  // use_string - computed: false, optional: true, required: false
  private _useString?: string; 
  public get useString() {
    return this.getStringAttribute('use_string');
  }
  public set useString(value: string) {
    this._useString = value;
  }
  public resetUseString() {
    this._useString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStringInput() {
    return this._useString;
  }

  // use_vlan_id - computed: false, optional: true, required: false
  private _useVlanId?: boolean | cdktf.IResolvable; 
  public get useVlanId() {
    return this.getBooleanAttribute('use_vlan_id');
  }
  public set useVlanId(value: boolean | cdktf.IResolvable) {
    this._useVlanId = value;
  }
  public resetUseVlanId() {
    this._useVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVlanIdInput() {
    return this._useVlanId;
  }
}
export interface ForwardingoptionsDhcprelayGroupRelayOption82 {
  /**
  * Exclude relay agent identifier from packets to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#exclude_relay_agent_identifier ForwardingoptionsDhcprelayGroup#exclude_relay_agent_identifier}
  */
  readonly excludeRelayAgentIdentifier?: boolean | cdktf.IResolvable;
  /**
  * Add link-selection sub-option on packets to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#link_selection ForwardingoptionsDhcprelayGroup#link_selection}
  */
  readonly linkSelection?: boolean | cdktf.IResolvable;
  /**
  * Add link-selection and server-id sub-options on packets to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#server_id_override ForwardingoptionsDhcprelayGroup#server_id_override}
  */
  readonly serverIdOverride?: boolean | cdktf.IResolvable;
  /**
  * Add vendor-specific information, add router host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#vendor_specific_host_name ForwardingoptionsDhcprelayGroup#vendor_specific_host_name}
  */
  readonly vendorSpecificHostName?: boolean | cdktf.IResolvable;
  /**
  * Add vendor-specific information, add location information expressed as interface name format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#vendor_specific_location ForwardingoptionsDhcprelayGroup#vendor_specific_location}
  */
  readonly vendorSpecificLocation?: boolean | cdktf.IResolvable;
  /**
  * circuit_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#circuit_id ForwardingoptionsDhcprelayGroup#circuit_id}
  */
  readonly circuitId?: ForwardingoptionsDhcprelayGroupRelayOption82CircuitId;
  /**
  * remote_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#remote_id ForwardingoptionsDhcprelayGroup#remote_id}
  */
  readonly remoteId?: ForwardingoptionsDhcprelayGroupRelayOption82RemoteId;
}

export function forwardingoptionsDhcprelayGroupRelayOption82ToTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption82 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_relay_agent_identifier: cdktf.booleanToTerraform(struct!.excludeRelayAgentIdentifier),
    link_selection: cdktf.booleanToTerraform(struct!.linkSelection),
    server_id_override: cdktf.booleanToTerraform(struct!.serverIdOverride),
    vendor_specific_host_name: cdktf.booleanToTerraform(struct!.vendorSpecificHostName),
    vendor_specific_location: cdktf.booleanToTerraform(struct!.vendorSpecificLocation),
    circuit_id: forwardingoptionsDhcprelayGroupRelayOption82CircuitIdToTerraform(struct!.circuitId),
    remote_id: forwardingoptionsDhcprelayGroupRelayOption82RemoteIdToTerraform(struct!.remoteId),
  }
}


export function forwardingoptionsDhcprelayGroupRelayOption82ToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupRelayOption82 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_relay_agent_identifier: {
      value: cdktf.booleanToHclTerraform(struct!.excludeRelayAgentIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_selection: {
      value: cdktf.booleanToHclTerraform(struct!.linkSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_id_override: {
      value: cdktf.booleanToHclTerraform(struct!.serverIdOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor_specific_host_name: {
      value: cdktf.booleanToHclTerraform(struct!.vendorSpecificHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vendor_specific_location: {
      value: cdktf.booleanToHclTerraform(struct!.vendorSpecificLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    circuit_id: {
      value: forwardingoptionsDhcprelayGroupRelayOption82CircuitIdToHclTerraform(struct!.circuitId),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOption82CircuitId",
    },
    remote_id: {
      value: forwardingoptionsDhcprelayGroupRelayOption82RemoteIdToHclTerraform(struct!.remoteId),
      isBlock: true,
      type: "struct",
      storageClassType: "ForwardingoptionsDhcprelayGroupRelayOption82RemoteId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupRelayOption82OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsDhcprelayGroupRelayOption82 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeRelayAgentIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRelayAgentIdentifier = this._excludeRelayAgentIdentifier;
    }
    if (this._linkSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkSelection = this._linkSelection;
    }
    if (this._serverIdOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdOverride = this._serverIdOverride;
    }
    if (this._vendorSpecificHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSpecificHostName = this._vendorSpecificHostName;
    }
    if (this._vendorSpecificLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSpecificLocation = this._vendorSpecificLocation;
    }
    if (this._circuitId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId?.internalValue;
    }
    if (this._remoteId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupRelayOption82 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeRelayAgentIdentifier = undefined;
      this._linkSelection = undefined;
      this._serverIdOverride = undefined;
      this._vendorSpecificHostName = undefined;
      this._vendorSpecificLocation = undefined;
      this._circuitId.internalValue = undefined;
      this._remoteId.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeRelayAgentIdentifier = value.excludeRelayAgentIdentifier;
      this._linkSelection = value.linkSelection;
      this._serverIdOverride = value.serverIdOverride;
      this._vendorSpecificHostName = value.vendorSpecificHostName;
      this._vendorSpecificLocation = value.vendorSpecificLocation;
      this._circuitId.internalValue = value.circuitId;
      this._remoteId.internalValue = value.remoteId;
    }
  }

  // exclude_relay_agent_identifier - computed: false, optional: true, required: false
  private _excludeRelayAgentIdentifier?: boolean | cdktf.IResolvable; 
  public get excludeRelayAgentIdentifier() {
    return this.getBooleanAttribute('exclude_relay_agent_identifier');
  }
  public set excludeRelayAgentIdentifier(value: boolean | cdktf.IResolvable) {
    this._excludeRelayAgentIdentifier = value;
  }
  public resetExcludeRelayAgentIdentifier() {
    this._excludeRelayAgentIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRelayAgentIdentifierInput() {
    return this._excludeRelayAgentIdentifier;
  }

  // link_selection - computed: false, optional: true, required: false
  private _linkSelection?: boolean | cdktf.IResolvable; 
  public get linkSelection() {
    return this.getBooleanAttribute('link_selection');
  }
  public set linkSelection(value: boolean | cdktf.IResolvable) {
    this._linkSelection = value;
  }
  public resetLinkSelection() {
    this._linkSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkSelectionInput() {
    return this._linkSelection;
  }

  // server_id_override - computed: false, optional: true, required: false
  private _serverIdOverride?: boolean | cdktf.IResolvable; 
  public get serverIdOverride() {
    return this.getBooleanAttribute('server_id_override');
  }
  public set serverIdOverride(value: boolean | cdktf.IResolvable) {
    this._serverIdOverride = value;
  }
  public resetServerIdOverride() {
    this._serverIdOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdOverrideInput() {
    return this._serverIdOverride;
  }

  // vendor_specific_host_name - computed: false, optional: true, required: false
  private _vendorSpecificHostName?: boolean | cdktf.IResolvable; 
  public get vendorSpecificHostName() {
    return this.getBooleanAttribute('vendor_specific_host_name');
  }
  public set vendorSpecificHostName(value: boolean | cdktf.IResolvable) {
    this._vendorSpecificHostName = value;
  }
  public resetVendorSpecificHostName() {
    this._vendorSpecificHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificHostNameInput() {
    return this._vendorSpecificHostName;
  }

  // vendor_specific_location - computed: false, optional: true, required: false
  private _vendorSpecificLocation?: boolean | cdktf.IResolvable; 
  public get vendorSpecificLocation() {
    return this.getBooleanAttribute('vendor_specific_location');
  }
  public set vendorSpecificLocation(value: boolean | cdktf.IResolvable) {
    this._vendorSpecificLocation = value;
  }
  public resetVendorSpecificLocation() {
    this._vendorSpecificLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificLocationInput() {
    return this._vendorSpecificLocation;
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId = new ForwardingoptionsDhcprelayGroupRelayOption82CircuitIdOutputReference(this, "circuit_id");
  public get circuitId() {
    return this._circuitId;
  }
  public putCircuitId(value: ForwardingoptionsDhcprelayGroupRelayOption82CircuitId) {
    this._circuitId.internalValue = value;
  }
  public resetCircuitId() {
    this._circuitId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId.internalValue;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId = new ForwardingoptionsDhcprelayGroupRelayOption82RemoteIdOutputReference(this, "remote_id");
  public get remoteId() {
    return this._remoteId;
  }
  public putRemoteId(value: ForwardingoptionsDhcprelayGroupRelayOption82RemoteId) {
    this._remoteId.internalValue = value;
  }
  public resetRemoteId() {
    this._remoteId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId.internalValue;
  }
}
export interface ForwardingoptionsDhcprelayGroupServerMatchAddress {
  /**
  * Action on address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action: string;
  /**
  * Server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#address ForwardingoptionsDhcprelayGroup#address}
  */
  readonly address: string;
}

export function forwardingoptionsDhcprelayGroupServerMatchAddressToTerraform(struct?: ForwardingoptionsDhcprelayGroupServerMatchAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function forwardingoptionsDhcprelayGroupServerMatchAddressToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupServerMatchAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupServerMatchAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsDhcprelayGroupServerMatchAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupServerMatchAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._address = value.address;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

export class ForwardingoptionsDhcprelayGroupServerMatchAddressList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsDhcprelayGroupServerMatchAddress[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsDhcprelayGroupServerMatchAddressOutputReference {
    return new ForwardingoptionsDhcprelayGroupServerMatchAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingoptionsDhcprelayGroupServerMatchDuid {
  /**
  * Action on match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#action ForwardingoptionsDhcprelayGroup#action}
  */
  readonly action: string;
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#compare ForwardingoptionsDhcprelayGroup#compare}
  */
  readonly compare: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value ForwardingoptionsDhcprelayGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#value_type ForwardingoptionsDhcprelayGroup#value_type}
  */
  readonly valueType: string;
}

export function forwardingoptionsDhcprelayGroupServerMatchDuidToTerraform(struct?: ForwardingoptionsDhcprelayGroupServerMatchDuid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    compare: cdktf.stringToTerraform(struct!.compare),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function forwardingoptionsDhcprelayGroupServerMatchDuidToHclTerraform(struct?: ForwardingoptionsDhcprelayGroupServerMatchDuid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsDhcprelayGroupServerMatchDuidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingoptionsDhcprelayGroupServerMatchDuid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsDhcprelayGroupServerMatchDuid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._compare = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._compare = value.compare;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // compare - computed: false, optional: false, required: true
  private _compare?: string; 
  public get compare() {
    return this.getStringAttribute('compare');
  }
  public set compare(value: string) {
    this._compare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareInput() {
    return this._compare;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class ForwardingoptionsDhcprelayGroupServerMatchDuidList extends cdktf.ComplexList {
  public internalValue? : ForwardingoptionsDhcprelayGroupServerMatchDuid[] | cdktf.IResolvable

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
  public get(index: number): ForwardingoptionsDhcprelayGroupServerMatchDuidOutputReference {
    return new ForwardingoptionsDhcprelayGroupServerMatchDuidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group junos_forwardingoptions_dhcprelay_group}
*/
export class ForwardingoptionsDhcprelayGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_forwardingoptions_dhcprelay_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingoptionsDhcprelayGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingoptionsDhcprelayGroup to import
  * @param importFromId The id of the existing ForwardingoptionsDhcprelayGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingoptionsDhcprelayGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_forwardingoptions_dhcprelay_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_group junos_forwardingoptions_dhcprelay_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingoptionsDhcprelayGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingoptionsDhcprelayGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_forwardingoptions_dhcprelay_group',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessProfile = config.accessProfile;
    this._activeServerGroup = config.activeServerGroup;
    this._activeServerGroupAllowServerChange = config.activeServerGroupAllowServerChange;
    this._authenticationPassword = config.authenticationPassword;
    this._clientResponseTtl = config.clientResponseTtl;
    this._description = config.description;
    this._dynamicProfile = config.dynamicProfile;
    this._dynamicProfileAggregateClients = config.dynamicProfileAggregateClients;
    this._dynamicProfileAggregateClientsAction = config.dynamicProfileAggregateClientsAction;
    this._dynamicProfileUsePrimary = config.dynamicProfileUsePrimary;
    this._forwardOnly = config.forwardOnly;
    this._forwardOnlyRoutingInstance = config.forwardOnlyRoutingInstance;
    this._livenessDetectionFailureAction = config.livenessDetectionFailureAction;
    this._maximumHopCount = config.maximumHopCount;
    this._minimumWaitTime = config.minimumWaitTime;
    this._name = config.name;
    this._relayAgentOption79 = config.relayAgentOption79;
    this._remoteIdMismatchDisconnect = config.remoteIdMismatchDisconnect;
    this._routeSuppressionAccess = config.routeSuppressionAccess;
    this._routeSuppressionAccessInternal = config.routeSuppressionAccessInternal;
    this._routeSuppressionDestination = config.routeSuppressionDestination;
    this._routingInstance = config.routingInstance;
    this._serverMatchDefaultAction = config.serverMatchDefaultAction;
    this._serviceProfile = config.serviceProfile;
    this._shortCycleProtectionLockoutMaxTime = config.shortCycleProtectionLockoutMaxTime;
    this._shortCycleProtectionLockoutMinTime = config.shortCycleProtectionLockoutMinTime;
    this._sourceIpChange = config.sourceIpChange;
    this._vendorSpecificInformationHostName = config.vendorSpecificInformationHostName;
    this._vendorSpecificInformationLocation = config.vendorSpecificInformationLocation;
    this._version = config.version;
    this._authenticationUsernameInclude.internalValue = config.authenticationUsernameInclude;
    this._interface.internalValue = config.interface;
    this._leaseTimeValidation.internalValue = config.leaseTimeValidation;
    this._livenessDetectionMethodBfd.internalValue = config.livenessDetectionMethodBfd;
    this._livenessDetectionMethodLayer2.internalValue = config.livenessDetectionMethodLayer2;
    this._overridesV4.internalValue = config.overridesV4;
    this._overridesV6.internalValue = config.overridesV6;
    this._relayAgentInterfaceId.internalValue = config.relayAgentInterfaceId;
    this._relayAgentRemoteId.internalValue = config.relayAgentRemoteId;
    this._relayOption.internalValue = config.relayOption;
    this._relayOption82.internalValue = config.relayOption82;
    this._serverMatchAddress.internalValue = config.serverMatchAddress;
    this._serverMatchDuid.internalValue = config.serverMatchDuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_profile - computed: false, optional: true, required: false
  private _accessProfile?: string; 
  public get accessProfile() {
    return this.getStringAttribute('access_profile');
  }
  public set accessProfile(value: string) {
    this._accessProfile = value;
  }
  public resetAccessProfile() {
    this._accessProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProfileInput() {
    return this._accessProfile;
  }

  // active_server_group - computed: false, optional: true, required: false
  private _activeServerGroup?: string; 
  public get activeServerGroup() {
    return this.getStringAttribute('active_server_group');
  }
  public set activeServerGroup(value: string) {
    this._activeServerGroup = value;
  }
  public resetActiveServerGroup() {
    this._activeServerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeServerGroupInput() {
    return this._activeServerGroup;
  }

  // active_server_group_allow_server_change - computed: false, optional: true, required: false
  private _activeServerGroupAllowServerChange?: boolean | cdktf.IResolvable; 
  public get activeServerGroupAllowServerChange() {
    return this.getBooleanAttribute('active_server_group_allow_server_change');
  }
  public set activeServerGroupAllowServerChange(value: boolean | cdktf.IResolvable) {
    this._activeServerGroupAllowServerChange = value;
  }
  public resetActiveServerGroupAllowServerChange() {
    this._activeServerGroupAllowServerChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeServerGroupAllowServerChangeInput() {
    return this._activeServerGroupAllowServerChange;
  }

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // client_response_ttl - computed: false, optional: true, required: false
  private _clientResponseTtl?: number; 
  public get clientResponseTtl() {
    return this.getNumberAttribute('client_response_ttl');
  }
  public set clientResponseTtl(value: number) {
    this._clientResponseTtl = value;
  }
  public resetClientResponseTtl() {
    this._clientResponseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResponseTtlInput() {
    return this._clientResponseTtl;
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

  // dynamic_profile - computed: false, optional: true, required: false
  private _dynamicProfile?: string; 
  public get dynamicProfile() {
    return this.getStringAttribute('dynamic_profile');
  }
  public set dynamicProfile(value: string) {
    this._dynamicProfile = value;
  }
  public resetDynamicProfile() {
    this._dynamicProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileInput() {
    return this._dynamicProfile;
  }

  // dynamic_profile_aggregate_clients - computed: false, optional: true, required: false
  private _dynamicProfileAggregateClients?: boolean | cdktf.IResolvable; 
  public get dynamicProfileAggregateClients() {
    return this.getBooleanAttribute('dynamic_profile_aggregate_clients');
  }
  public set dynamicProfileAggregateClients(value: boolean | cdktf.IResolvable) {
    this._dynamicProfileAggregateClients = value;
  }
  public resetDynamicProfileAggregateClients() {
    this._dynamicProfileAggregateClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileAggregateClientsInput() {
    return this._dynamicProfileAggregateClients;
  }

  // dynamic_profile_aggregate_clients_action - computed: false, optional: true, required: false
  private _dynamicProfileAggregateClientsAction?: string; 
  public get dynamicProfileAggregateClientsAction() {
    return this.getStringAttribute('dynamic_profile_aggregate_clients_action');
  }
  public set dynamicProfileAggregateClientsAction(value: string) {
    this._dynamicProfileAggregateClientsAction = value;
  }
  public resetDynamicProfileAggregateClientsAction() {
    this._dynamicProfileAggregateClientsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileAggregateClientsActionInput() {
    return this._dynamicProfileAggregateClientsAction;
  }

  // dynamic_profile_use_primary - computed: false, optional: true, required: false
  private _dynamicProfileUsePrimary?: string; 
  public get dynamicProfileUsePrimary() {
    return this.getStringAttribute('dynamic_profile_use_primary');
  }
  public set dynamicProfileUsePrimary(value: string) {
    this._dynamicProfileUsePrimary = value;
  }
  public resetDynamicProfileUsePrimary() {
    this._dynamicProfileUsePrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProfileUsePrimaryInput() {
    return this._dynamicProfileUsePrimary;
  }

  // forward_only - computed: false, optional: true, required: false
  private _forwardOnly?: boolean | cdktf.IResolvable; 
  public get forwardOnly() {
    return this.getBooleanAttribute('forward_only');
  }
  public set forwardOnly(value: boolean | cdktf.IResolvable) {
    this._forwardOnly = value;
  }
  public resetForwardOnly() {
    this._forwardOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardOnlyInput() {
    return this._forwardOnly;
  }

  // forward_only_routing_instance - computed: false, optional: true, required: false
  private _forwardOnlyRoutingInstance?: string; 
  public get forwardOnlyRoutingInstance() {
    return this.getStringAttribute('forward_only_routing_instance');
  }
  public set forwardOnlyRoutingInstance(value: string) {
    this._forwardOnlyRoutingInstance = value;
  }
  public resetForwardOnlyRoutingInstance() {
    this._forwardOnlyRoutingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardOnlyRoutingInstanceInput() {
    return this._forwardOnlyRoutingInstance;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // liveness_detection_failure_action - computed: false, optional: true, required: false
  private _livenessDetectionFailureAction?: string; 
  public get livenessDetectionFailureAction() {
    return this.getStringAttribute('liveness_detection_failure_action');
  }
  public set livenessDetectionFailureAction(value: string) {
    this._livenessDetectionFailureAction = value;
  }
  public resetLivenessDetectionFailureAction() {
    this._livenessDetectionFailureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessDetectionFailureActionInput() {
    return this._livenessDetectionFailureAction;
  }

  // maximum_hop_count - computed: false, optional: true, required: false
  private _maximumHopCount?: number; 
  public get maximumHopCount() {
    return this.getNumberAttribute('maximum_hop_count');
  }
  public set maximumHopCount(value: number) {
    this._maximumHopCount = value;
  }
  public resetMaximumHopCount() {
    this._maximumHopCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumHopCountInput() {
    return this._maximumHopCount;
  }

  // minimum_wait_time - computed: false, optional: true, required: false
  private _minimumWaitTime?: number; 
  public get minimumWaitTime() {
    return this.getNumberAttribute('minimum_wait_time');
  }
  public set minimumWaitTime(value: number) {
    this._minimumWaitTime = value;
  }
  public resetMinimumWaitTime() {
    this._minimumWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumWaitTimeInput() {
    return this._minimumWaitTime;
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

  // relay_agent_option_79 - computed: false, optional: true, required: false
  private _relayAgentOption79?: boolean | cdktf.IResolvable; 
  public get relayAgentOption79() {
    return this.getBooleanAttribute('relay_agent_option_79');
  }
  public set relayAgentOption79(value: boolean | cdktf.IResolvable) {
    this._relayAgentOption79 = value;
  }
  public resetRelayAgentOption79() {
    this._relayAgentOption79 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentOption79Input() {
    return this._relayAgentOption79;
  }

  // remote_id_mismatch_disconnect - computed: false, optional: true, required: false
  private _remoteIdMismatchDisconnect?: boolean | cdktf.IResolvable; 
  public get remoteIdMismatchDisconnect() {
    return this.getBooleanAttribute('remote_id_mismatch_disconnect');
  }
  public set remoteIdMismatchDisconnect(value: boolean | cdktf.IResolvable) {
    this._remoteIdMismatchDisconnect = value;
  }
  public resetRemoteIdMismatchDisconnect() {
    this._remoteIdMismatchDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdMismatchDisconnectInput() {
    return this._remoteIdMismatchDisconnect;
  }

  // route_suppression_access - computed: false, optional: true, required: false
  private _routeSuppressionAccess?: boolean | cdktf.IResolvable; 
  public get routeSuppressionAccess() {
    return this.getBooleanAttribute('route_suppression_access');
  }
  public set routeSuppressionAccess(value: boolean | cdktf.IResolvable) {
    this._routeSuppressionAccess = value;
  }
  public resetRouteSuppressionAccess() {
    this._routeSuppressionAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSuppressionAccessInput() {
    return this._routeSuppressionAccess;
  }

  // route_suppression_access_internal - computed: false, optional: true, required: false
  private _routeSuppressionAccessInternal?: boolean | cdktf.IResolvable; 
  public get routeSuppressionAccessInternal() {
    return this.getBooleanAttribute('route_suppression_access_internal');
  }
  public set routeSuppressionAccessInternal(value: boolean | cdktf.IResolvable) {
    this._routeSuppressionAccessInternal = value;
  }
  public resetRouteSuppressionAccessInternal() {
    this._routeSuppressionAccessInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSuppressionAccessInternalInput() {
    return this._routeSuppressionAccessInternal;
  }

  // route_suppression_destination - computed: false, optional: true, required: false
  private _routeSuppressionDestination?: boolean | cdktf.IResolvable; 
  public get routeSuppressionDestination() {
    return this.getBooleanAttribute('route_suppression_destination');
  }
  public set routeSuppressionDestination(value: boolean | cdktf.IResolvable) {
    this._routeSuppressionDestination = value;
  }
  public resetRouteSuppressionDestination() {
    this._routeSuppressionDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSuppressionDestinationInput() {
    return this._routeSuppressionDestination;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // server_match_default_action - computed: false, optional: true, required: false
  private _serverMatchDefaultAction?: string; 
  public get serverMatchDefaultAction() {
    return this.getStringAttribute('server_match_default_action');
  }
  public set serverMatchDefaultAction(value: string) {
    this._serverMatchDefaultAction = value;
  }
  public resetServerMatchDefaultAction() {
    this._serverMatchDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMatchDefaultActionInput() {
    return this._serverMatchDefaultAction;
  }

  // service_profile - computed: false, optional: true, required: false
  private _serviceProfile?: string; 
  public get serviceProfile() {
    return this.getStringAttribute('service_profile');
  }
  public set serviceProfile(value: string) {
    this._serviceProfile = value;
  }
  public resetServiceProfile() {
    this._serviceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProfileInput() {
    return this._serviceProfile;
  }

  // short_cycle_protection_lockout_max_time - computed: false, optional: true, required: false
  private _shortCycleProtectionLockoutMaxTime?: number; 
  public get shortCycleProtectionLockoutMaxTime() {
    return this.getNumberAttribute('short_cycle_protection_lockout_max_time');
  }
  public set shortCycleProtectionLockoutMaxTime(value: number) {
    this._shortCycleProtectionLockoutMaxTime = value;
  }
  public resetShortCycleProtectionLockoutMaxTime() {
    this._shortCycleProtectionLockoutMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortCycleProtectionLockoutMaxTimeInput() {
    return this._shortCycleProtectionLockoutMaxTime;
  }

  // short_cycle_protection_lockout_min_time - computed: false, optional: true, required: false
  private _shortCycleProtectionLockoutMinTime?: number; 
  public get shortCycleProtectionLockoutMinTime() {
    return this.getNumberAttribute('short_cycle_protection_lockout_min_time');
  }
  public set shortCycleProtectionLockoutMinTime(value: number) {
    this._shortCycleProtectionLockoutMinTime = value;
  }
  public resetShortCycleProtectionLockoutMinTime() {
    this._shortCycleProtectionLockoutMinTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortCycleProtectionLockoutMinTimeInput() {
    return this._shortCycleProtectionLockoutMinTime;
  }

  // source_ip_change - computed: false, optional: true, required: false
  private _sourceIpChange?: boolean | cdktf.IResolvable; 
  public get sourceIpChange() {
    return this.getBooleanAttribute('source_ip_change');
  }
  public set sourceIpChange(value: boolean | cdktf.IResolvable) {
    this._sourceIpChange = value;
  }
  public resetSourceIpChange() {
    this._sourceIpChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpChangeInput() {
    return this._sourceIpChange;
  }

  // vendor_specific_information_host_name - computed: false, optional: true, required: false
  private _vendorSpecificInformationHostName?: boolean | cdktf.IResolvable; 
  public get vendorSpecificInformationHostName() {
    return this.getBooleanAttribute('vendor_specific_information_host_name');
  }
  public set vendorSpecificInformationHostName(value: boolean | cdktf.IResolvable) {
    this._vendorSpecificInformationHostName = value;
  }
  public resetVendorSpecificInformationHostName() {
    this._vendorSpecificInformationHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificInformationHostNameInput() {
    return this._vendorSpecificInformationHostName;
  }

  // vendor_specific_information_location - computed: false, optional: true, required: false
  private _vendorSpecificInformationLocation?: boolean | cdktf.IResolvable; 
  public get vendorSpecificInformationLocation() {
    return this.getBooleanAttribute('vendor_specific_information_location');
  }
  public set vendorSpecificInformationLocation(value: boolean | cdktf.IResolvable) {
    this._vendorSpecificInformationLocation = value;
  }
  public resetVendorSpecificInformationLocation() {
    this._vendorSpecificInformationLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificInformationLocationInput() {
    return this._vendorSpecificInformationLocation;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // authentication_username_include - computed: false, optional: true, required: false
  private _authenticationUsernameInclude = new ForwardingoptionsDhcprelayGroupAuthenticationUsernameIncludeOutputReference(this, "authentication_username_include");
  public get authenticationUsernameInclude() {
    return this._authenticationUsernameInclude;
  }
  public putAuthenticationUsernameInclude(value: ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude) {
    this._authenticationUsernameInclude.internalValue = value;
  }
  public resetAuthenticationUsernameInclude() {
    this._authenticationUsernameInclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationUsernameIncludeInput() {
    return this._authenticationUsernameInclude.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ForwardingoptionsDhcprelayGroupInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ForwardingoptionsDhcprelayGroupInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // lease_time_validation - computed: false, optional: true, required: false
  private _leaseTimeValidation = new ForwardingoptionsDhcprelayGroupLeaseTimeValidationOutputReference(this, "lease_time_validation");
  public get leaseTimeValidation() {
    return this._leaseTimeValidation;
  }
  public putLeaseTimeValidation(value: ForwardingoptionsDhcprelayGroupLeaseTimeValidation) {
    this._leaseTimeValidation.internalValue = value;
  }
  public resetLeaseTimeValidation() {
    this._leaseTimeValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeValidationInput() {
    return this._leaseTimeValidation.internalValue;
  }

  // liveness_detection_method_bfd - computed: false, optional: true, required: false
  private _livenessDetectionMethodBfd = new ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfdOutputReference(this, "liveness_detection_method_bfd");
  public get livenessDetectionMethodBfd() {
    return this._livenessDetectionMethodBfd;
  }
  public putLivenessDetectionMethodBfd(value: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd) {
    this._livenessDetectionMethodBfd.internalValue = value;
  }
  public resetLivenessDetectionMethodBfd() {
    this._livenessDetectionMethodBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessDetectionMethodBfdInput() {
    return this._livenessDetectionMethodBfd.internalValue;
  }

  // liveness_detection_method_layer2 - computed: false, optional: true, required: false
  private _livenessDetectionMethodLayer2 = new ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2OutputReference(this, "liveness_detection_method_layer2");
  public get livenessDetectionMethodLayer2() {
    return this._livenessDetectionMethodLayer2;
  }
  public putLivenessDetectionMethodLayer2(value: ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2) {
    this._livenessDetectionMethodLayer2.internalValue = value;
  }
  public resetLivenessDetectionMethodLayer2() {
    this._livenessDetectionMethodLayer2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessDetectionMethodLayer2Input() {
    return this._livenessDetectionMethodLayer2.internalValue;
  }

  // overrides_v4 - computed: false, optional: true, required: false
  private _overridesV4 = new ForwardingoptionsDhcprelayGroupOverridesV4OutputReference(this, "overrides_v4");
  public get overridesV4() {
    return this._overridesV4;
  }
  public putOverridesV4(value: ForwardingoptionsDhcprelayGroupOverridesV4) {
    this._overridesV4.internalValue = value;
  }
  public resetOverridesV4() {
    this._overridesV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesV4Input() {
    return this._overridesV4.internalValue;
  }

  // overrides_v6 - computed: false, optional: true, required: false
  private _overridesV6 = new ForwardingoptionsDhcprelayGroupOverridesV6OutputReference(this, "overrides_v6");
  public get overridesV6() {
    return this._overridesV6;
  }
  public putOverridesV6(value: ForwardingoptionsDhcprelayGroupOverridesV6) {
    this._overridesV6.internalValue = value;
  }
  public resetOverridesV6() {
    this._overridesV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesV6Input() {
    return this._overridesV6.internalValue;
  }

  // relay_agent_interface_id - computed: false, optional: true, required: false
  private _relayAgentInterfaceId = new ForwardingoptionsDhcprelayGroupRelayAgentInterfaceIdOutputReference(this, "relay_agent_interface_id");
  public get relayAgentInterfaceId() {
    return this._relayAgentInterfaceId;
  }
  public putRelayAgentInterfaceId(value: ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId) {
    this._relayAgentInterfaceId.internalValue = value;
  }
  public resetRelayAgentInterfaceId() {
    this._relayAgentInterfaceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentInterfaceIdInput() {
    return this._relayAgentInterfaceId.internalValue;
  }

  // relay_agent_remote_id - computed: false, optional: true, required: false
  private _relayAgentRemoteId = new ForwardingoptionsDhcprelayGroupRelayAgentRemoteIdOutputReference(this, "relay_agent_remote_id");
  public get relayAgentRemoteId() {
    return this._relayAgentRemoteId;
  }
  public putRelayAgentRemoteId(value: ForwardingoptionsDhcprelayGroupRelayAgentRemoteId) {
    this._relayAgentRemoteId.internalValue = value;
  }
  public resetRelayAgentRemoteId() {
    this._relayAgentRemoteId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentRemoteIdInput() {
    return this._relayAgentRemoteId.internalValue;
  }

  // relay_option - computed: false, optional: true, required: false
  private _relayOption = new ForwardingoptionsDhcprelayGroupRelayOptionOutputReference(this, "relay_option");
  public get relayOption() {
    return this._relayOption;
  }
  public putRelayOption(value: ForwardingoptionsDhcprelayGroupRelayOption) {
    this._relayOption.internalValue = value;
  }
  public resetRelayOption() {
    this._relayOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayOptionInput() {
    return this._relayOption.internalValue;
  }

  // relay_option_82 - computed: false, optional: true, required: false
  private _relayOption82 = new ForwardingoptionsDhcprelayGroupRelayOption82OutputReference(this, "relay_option_82");
  public get relayOption82() {
    return this._relayOption82;
  }
  public putRelayOption82(value: ForwardingoptionsDhcprelayGroupRelayOption82) {
    this._relayOption82.internalValue = value;
  }
  public resetRelayOption82() {
    this._relayOption82.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayOption82Input() {
    return this._relayOption82.internalValue;
  }

  // server_match_address - computed: false, optional: true, required: false
  private _serverMatchAddress = new ForwardingoptionsDhcprelayGroupServerMatchAddressList(this, "server_match_address", true);
  public get serverMatchAddress() {
    return this._serverMatchAddress;
  }
  public putServerMatchAddress(value: ForwardingoptionsDhcprelayGroupServerMatchAddress[] | cdktf.IResolvable) {
    this._serverMatchAddress.internalValue = value;
  }
  public resetServerMatchAddress() {
    this._serverMatchAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMatchAddressInput() {
    return this._serverMatchAddress.internalValue;
  }

  // server_match_duid - computed: false, optional: true, required: false
  private _serverMatchDuid = new ForwardingoptionsDhcprelayGroupServerMatchDuidList(this, "server_match_duid", true);
  public get serverMatchDuid() {
    return this._serverMatchDuid;
  }
  public putServerMatchDuid(value: ForwardingoptionsDhcprelayGroupServerMatchDuid[] | cdktf.IResolvable) {
    this._serverMatchDuid.internalValue = value;
  }
  public resetServerMatchDuid() {
    this._serverMatchDuid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMatchDuidInput() {
    return this._serverMatchDuid.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_profile: cdktf.stringToTerraform(this._accessProfile),
      active_server_group: cdktf.stringToTerraform(this._activeServerGroup),
      active_server_group_allow_server_change: cdktf.booleanToTerraform(this._activeServerGroupAllowServerChange),
      authentication_password: cdktf.stringToTerraform(this._authenticationPassword),
      client_response_ttl: cdktf.numberToTerraform(this._clientResponseTtl),
      description: cdktf.stringToTerraform(this._description),
      dynamic_profile: cdktf.stringToTerraform(this._dynamicProfile),
      dynamic_profile_aggregate_clients: cdktf.booleanToTerraform(this._dynamicProfileAggregateClients),
      dynamic_profile_aggregate_clients_action: cdktf.stringToTerraform(this._dynamicProfileAggregateClientsAction),
      dynamic_profile_use_primary: cdktf.stringToTerraform(this._dynamicProfileUsePrimary),
      forward_only: cdktf.booleanToTerraform(this._forwardOnly),
      forward_only_routing_instance: cdktf.stringToTerraform(this._forwardOnlyRoutingInstance),
      liveness_detection_failure_action: cdktf.stringToTerraform(this._livenessDetectionFailureAction),
      maximum_hop_count: cdktf.numberToTerraform(this._maximumHopCount),
      minimum_wait_time: cdktf.numberToTerraform(this._minimumWaitTime),
      name: cdktf.stringToTerraform(this._name),
      relay_agent_option_79: cdktf.booleanToTerraform(this._relayAgentOption79),
      remote_id_mismatch_disconnect: cdktf.booleanToTerraform(this._remoteIdMismatchDisconnect),
      route_suppression_access: cdktf.booleanToTerraform(this._routeSuppressionAccess),
      route_suppression_access_internal: cdktf.booleanToTerraform(this._routeSuppressionAccessInternal),
      route_suppression_destination: cdktf.booleanToTerraform(this._routeSuppressionDestination),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      server_match_default_action: cdktf.stringToTerraform(this._serverMatchDefaultAction),
      service_profile: cdktf.stringToTerraform(this._serviceProfile),
      short_cycle_protection_lockout_max_time: cdktf.numberToTerraform(this._shortCycleProtectionLockoutMaxTime),
      short_cycle_protection_lockout_min_time: cdktf.numberToTerraform(this._shortCycleProtectionLockoutMinTime),
      source_ip_change: cdktf.booleanToTerraform(this._sourceIpChange),
      vendor_specific_information_host_name: cdktf.booleanToTerraform(this._vendorSpecificInformationHostName),
      vendor_specific_information_location: cdktf.booleanToTerraform(this._vendorSpecificInformationLocation),
      version: cdktf.stringToTerraform(this._version),
      authentication_username_include: forwardingoptionsDhcprelayGroupAuthenticationUsernameIncludeToTerraform(this._authenticationUsernameInclude.internalValue),
      interface: cdktf.listMapper(forwardingoptionsDhcprelayGroupInterfaceToTerraform, true)(this._interface.internalValue),
      lease_time_validation: forwardingoptionsDhcprelayGroupLeaseTimeValidationToTerraform(this._leaseTimeValidation.internalValue),
      liveness_detection_method_bfd: forwardingoptionsDhcprelayGroupLivenessDetectionMethodBfdToTerraform(this._livenessDetectionMethodBfd.internalValue),
      liveness_detection_method_layer2: forwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2ToTerraform(this._livenessDetectionMethodLayer2.internalValue),
      overrides_v4: forwardingoptionsDhcprelayGroupOverridesV4ToTerraform(this._overridesV4.internalValue),
      overrides_v6: forwardingoptionsDhcprelayGroupOverridesV6ToTerraform(this._overridesV6.internalValue),
      relay_agent_interface_id: forwardingoptionsDhcprelayGroupRelayAgentInterfaceIdToTerraform(this._relayAgentInterfaceId.internalValue),
      relay_agent_remote_id: forwardingoptionsDhcprelayGroupRelayAgentRemoteIdToTerraform(this._relayAgentRemoteId.internalValue),
      relay_option: forwardingoptionsDhcprelayGroupRelayOptionToTerraform(this._relayOption.internalValue),
      relay_option_82: forwardingoptionsDhcprelayGroupRelayOption82ToTerraform(this._relayOption82.internalValue),
      server_match_address: cdktf.listMapper(forwardingoptionsDhcprelayGroupServerMatchAddressToTerraform, true)(this._serverMatchAddress.internalValue),
      server_match_duid: cdktf.listMapper(forwardingoptionsDhcprelayGroupServerMatchDuidToTerraform, true)(this._serverMatchDuid.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_profile: {
        value: cdktf.stringToHclTerraform(this._accessProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_server_group: {
        value: cdktf.stringToHclTerraform(this._activeServerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_server_group_allow_server_change: {
        value: cdktf.booleanToHclTerraform(this._activeServerGroupAllowServerChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_password: {
        value: cdktf.stringToHclTerraform(this._authenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_response_ttl: {
        value: cdktf.numberToHclTerraform(this._clientResponseTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_profile: {
        value: cdktf.stringToHclTerraform(this._dynamicProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_profile_aggregate_clients: {
        value: cdktf.booleanToHclTerraform(this._dynamicProfileAggregateClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_profile_aggregate_clients_action: {
        value: cdktf.stringToHclTerraform(this._dynamicProfileAggregateClientsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_profile_use_primary: {
        value: cdktf.stringToHclTerraform(this._dynamicProfileUsePrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_only: {
        value: cdktf.booleanToHclTerraform(this._forwardOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_only_routing_instance: {
        value: cdktf.stringToHclTerraform(this._forwardOnlyRoutingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      liveness_detection_failure_action: {
        value: cdktf.stringToHclTerraform(this._livenessDetectionFailureAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_hop_count: {
        value: cdktf.numberToHclTerraform(this._maximumHopCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_wait_time: {
        value: cdktf.numberToHclTerraform(this._minimumWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relay_agent_option_79: {
        value: cdktf.booleanToHclTerraform(this._relayAgentOption79),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_id_mismatch_disconnect: {
        value: cdktf.booleanToHclTerraform(this._remoteIdMismatchDisconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_suppression_access: {
        value: cdktf.booleanToHclTerraform(this._routeSuppressionAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_suppression_access_internal: {
        value: cdktf.booleanToHclTerraform(this._routeSuppressionAccessInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_suppression_destination: {
        value: cdktf.booleanToHclTerraform(this._routeSuppressionDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_match_default_action: {
        value: cdktf.stringToHclTerraform(this._serverMatchDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_profile: {
        value: cdktf.stringToHclTerraform(this._serviceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_cycle_protection_lockout_max_time: {
        value: cdktf.numberToHclTerraform(this._shortCycleProtectionLockoutMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      short_cycle_protection_lockout_min_time: {
        value: cdktf.numberToHclTerraform(this._shortCycleProtectionLockoutMinTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip_change: {
        value: cdktf.booleanToHclTerraform(this._sourceIpChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vendor_specific_information_host_name: {
        value: cdktf.booleanToHclTerraform(this._vendorSpecificInformationHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vendor_specific_information_location: {
        value: cdktf.booleanToHclTerraform(this._vendorSpecificInformationLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_username_include: {
        value: forwardingoptionsDhcprelayGroupAuthenticationUsernameIncludeToHclTerraform(this._authenticationUsernameInclude.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupAuthenticationUsernameInclude",
      },
      interface: {
        value: cdktf.listMapperHcl(forwardingoptionsDhcprelayGroupInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingoptionsDhcprelayGroupInterfaceList",
      },
      lease_time_validation: {
        value: forwardingoptionsDhcprelayGroupLeaseTimeValidationToHclTerraform(this._leaseTimeValidation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupLeaseTimeValidation",
      },
      liveness_detection_method_bfd: {
        value: forwardingoptionsDhcprelayGroupLivenessDetectionMethodBfdToHclTerraform(this._livenessDetectionMethodBfd.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupLivenessDetectionMethodBfd",
      },
      liveness_detection_method_layer2: {
        value: forwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2ToHclTerraform(this._livenessDetectionMethodLayer2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupLivenessDetectionMethodLayer2",
      },
      overrides_v4: {
        value: forwardingoptionsDhcprelayGroupOverridesV4ToHclTerraform(this._overridesV4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupOverridesV4",
      },
      overrides_v6: {
        value: forwardingoptionsDhcprelayGroupOverridesV6ToHclTerraform(this._overridesV6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupOverridesV6",
      },
      relay_agent_interface_id: {
        value: forwardingoptionsDhcprelayGroupRelayAgentInterfaceIdToHclTerraform(this._relayAgentInterfaceId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupRelayAgentInterfaceId",
      },
      relay_agent_remote_id: {
        value: forwardingoptionsDhcprelayGroupRelayAgentRemoteIdToHclTerraform(this._relayAgentRemoteId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupRelayAgentRemoteId",
      },
      relay_option: {
        value: forwardingoptionsDhcprelayGroupRelayOptionToHclTerraform(this._relayOption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupRelayOption",
      },
      relay_option_82: {
        value: forwardingoptionsDhcprelayGroupRelayOption82ToHclTerraform(this._relayOption82.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsDhcprelayGroupRelayOption82",
      },
      server_match_address: {
        value: cdktf.listMapperHcl(forwardingoptionsDhcprelayGroupServerMatchAddressToHclTerraform, true)(this._serverMatchAddress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingoptionsDhcprelayGroupServerMatchAddressList",
      },
      server_match_duid: {
        value: cdktf.listMapperHcl(forwardingoptionsDhcprelayGroupServerMatchDuidToHclTerraform, true)(this._serverMatchDuid.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingoptionsDhcprelayGroupServerMatchDuidList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
