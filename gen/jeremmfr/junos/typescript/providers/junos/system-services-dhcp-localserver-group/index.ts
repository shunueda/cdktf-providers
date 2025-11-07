// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemServicesDhcpLocalserverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access profile to use for AAA services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#access_profile SystemServicesDhcpLocalserverGroup#access_profile}
  */
  readonly accessProfile?: string;
  /**
  * DHCP authentication, username password to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#authentication_password SystemServicesDhcpLocalserverGroup#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * Dynamic profile to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile SystemServicesDhcpLocalserverGroup#dynamic_profile}
  */
  readonly dynamicProfile?: string;
  /**
  * Aggregate client profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile_aggregate_clients SystemServicesDhcpLocalserverGroup#dynamic_profile_aggregate_clients}
  */
  readonly dynamicProfileAggregateClients?: boolean | cdktf.IResolvable;
  /**
  * Merge or replace the client dynamic profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile_aggregate_clients_action SystemServicesDhcpLocalserverGroup#dynamic_profile_aggregate_clients_action}
  */
  readonly dynamicProfileAggregateClientsAction?: string;
  /**
  * Dynamic profile to use on the primary interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile_use_primary SystemServicesDhcpLocalserverGroup#dynamic_profile_use_primary}
  */
  readonly dynamicProfileUsePrimary?: string;
  /**
  * Liveness detection failure action options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#liveness_detection_failure_action SystemServicesDhcpLocalserverGroup#liveness_detection_failure_action}
  */
  readonly livenessDetectionFailureAction?: string;
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#name SystemServicesDhcpLocalserverGroup#name}
  */
  readonly name: string;
  /**
  * Reauthenticate on each renew, rebind, DISCOVER or SOLICIT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#reauthenticate_lease_renewal SystemServicesDhcpLocalserverGroup#reauthenticate_lease_renewal}
  */
  readonly reauthenticateLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Reauthenticate on remote-id mismatch for renew, rebind and re-negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#reauthenticate_remote_id_mismatch SystemServicesDhcpLocalserverGroup#reauthenticate_remote_id_mismatch}
  */
  readonly reauthenticateRemoteIdMismatch?: boolean | cdktf.IResolvable;
  /**
  * Disconnect session on remote-id mismatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#remote_id_mismatch_disconnect SystemServicesDhcpLocalserverGroup#remote_id_mismatch_disconnect}
  */
  readonly remoteIdMismatchDisconnect?: boolean | cdktf.IResolvable;
  /**
  * Suppress access route addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#route_suppression_access SystemServicesDhcpLocalserverGroup#route_suppression_access}
  */
  readonly routeSuppressionAccess?: boolean | cdktf.IResolvable;
  /**
  * Suppress access-internal route addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#route_suppression_access_internal SystemServicesDhcpLocalserverGroup#route_suppression_access_internal}
  */
  readonly routeSuppressionAccessInternal?: boolean | cdktf.IResolvable;
  /**
  * Suppress destination route addition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#route_suppression_destination SystemServicesDhcpLocalserverGroup#route_suppression_destination}
  */
  readonly routeSuppressionDestination?: boolean | cdktf.IResolvable;
  /**
  * Routing instance if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#routing_instance SystemServicesDhcpLocalserverGroup#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Dynamic profile to use for default service activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#service_profile SystemServicesDhcpLocalserverGroup#service_profile}
  */
  readonly serviceProfile?: string;
  /**
  * Short cycle lockout max time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#short_cycle_protection_lockout_max_time SystemServicesDhcpLocalserverGroup#short_cycle_protection_lockout_max_time}
  */
  readonly shortCycleProtectionLockoutMaxTime?: number;
  /**
  * hort cycle lockout min time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#short_cycle_protection_lockout_min_time SystemServicesDhcpLocalserverGroup#short_cycle_protection_lockout_min_time}
  */
  readonly shortCycleProtectionLockoutMinTime?: number;
  /**
  * Version for DHCP or DHCPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#version SystemServicesDhcpLocalserverGroup#version}
  */
  readonly version?: string;
  /**
  * authentication_username_include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#authentication_username_include SystemServicesDhcpLocalserverGroup#authentication_username_include}
  */
  readonly authenticationUsernameInclude?: SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#interface SystemServicesDhcpLocalserverGroup#interface}
  */
  readonly interface?: SystemServicesDhcpLocalserverGroupInterface[] | cdktf.IResolvable;
  /**
  * lease_time_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#lease_time_validation SystemServicesDhcpLocalserverGroup#lease_time_validation}
  */
  readonly leaseTimeValidation?: SystemServicesDhcpLocalserverGroupLeaseTimeValidation;
  /**
  * liveness_detection_method_bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#liveness_detection_method_bfd SystemServicesDhcpLocalserverGroup#liveness_detection_method_bfd}
  */
  readonly livenessDetectionMethodBfd?: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd;
  /**
  * liveness_detection_method_layer2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#liveness_detection_method_layer2 SystemServicesDhcpLocalserverGroup#liveness_detection_method_layer2}
  */
  readonly livenessDetectionMethodLayer2?: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2;
  /**
  * overrides_v4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#overrides_v4 SystemServicesDhcpLocalserverGroup#overrides_v4}
  */
  readonly overridesV4?: SystemServicesDhcpLocalserverGroupOverridesV4;
  /**
  * overrides_v6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#overrides_v6 SystemServicesDhcpLocalserverGroup#overrides_v6}
  */
  readonly overridesV6?: SystemServicesDhcpLocalserverGroupOverridesV6;
  /**
  * reconfigure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#reconfigure SystemServicesDhcpLocalserverGroup#reconfigure}
  */
  readonly reconfigure?: SystemServicesDhcpLocalserverGroupReconfigure;
}
export interface SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude {
  /**
  * Include circuit type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#circuit_type SystemServicesDhcpLocalserverGroup#circuit_type}
  */
  readonly circuitType?: boolean | cdktf.IResolvable;
  /**
  * Include client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#client_id SystemServicesDhcpLocalserverGroup#client_id}
  */
  readonly clientId?: boolean | cdktf.IResolvable;
  /**
  * Exclude all the headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#client_id_exclude_headers SystemServicesDhcpLocalserverGroup#client_id_exclude_headers}
  */
  readonly clientIdExcludeHeaders?: boolean | cdktf.IResolvable;
  /**
  * Use automatic ascii hex username encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#client_id_use_automatic_ascii_hex_encoding SystemServicesDhcpLocalserverGroup#client_id_use_automatic_ascii_hex_encoding}
  */
  readonly clientIdUseAutomaticAsciiHexEncoding?: boolean | cdktf.IResolvable;
  /**
  * Change delimiter/separator character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delimiter SystemServicesDhcpLocalserverGroup#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Add domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#domain_name SystemServicesDhcpLocalserverGroup#domain_name}
  */
  readonly domainName?: string;
  /**
  * Include interface description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#interface_description SystemServicesDhcpLocalserverGroup#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Include interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#interface_name SystemServicesDhcpLocalserverGroup#interface_name}
  */
  readonly interfaceName?: boolean | cdktf.IResolvable;
  /**
  * Include MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#mac_address SystemServicesDhcpLocalserverGroup#mac_address}
  */
  readonly macAddress?: boolean | cdktf.IResolvable;
  /**
  * Include option 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option_60 SystemServicesDhcpLocalserverGroup#option_60}
  */
  readonly option60?: boolean | cdktf.IResolvable;
  /**
  * Include option 82.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option_82 SystemServicesDhcpLocalserverGroup#option_82}
  */
  readonly option82?: boolean | cdktf.IResolvable;
  /**
  * Include option 82 circuit-id (sub option 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option_82_circuit_id SystemServicesDhcpLocalserverGroup#option_82_circuit_id}
  */
  readonly option82CircuitId?: boolean | cdktf.IResolvable;
  /**
  * Include option 82 remote-id (sub option 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option_82_remote_id SystemServicesDhcpLocalserverGroup#option_82_remote_id}
  */
  readonly option82RemoteId?: boolean | cdktf.IResolvable;
  /**
  * Include the relay agent interface ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#relay_agent_interface_id SystemServicesDhcpLocalserverGroup#relay_agent_interface_id}
  */
  readonly relayAgentInterfaceId?: boolean | cdktf.IResolvable;
  /**
  * Include the relay agent remote ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#relay_agent_remote_id SystemServicesDhcpLocalserverGroup#relay_agent_remote_id}
  */
  readonly relayAgentRemoteId?: boolean | cdktf.IResolvable;
  /**
  * Include the relay agent subscriber ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#relay_agent_subscriber_id SystemServicesDhcpLocalserverGroup#relay_agent_subscriber_id}
  */
  readonly relayAgentSubscriberId?: boolean | cdktf.IResolvable;
  /**
  * Include routing instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#routing_instance_name SystemServicesDhcpLocalserverGroup#routing_instance_name}
  */
  readonly routingInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Add user defined prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#user_prefix SystemServicesDhcpLocalserverGroup#user_prefix}
  */
  readonly userPrefix?: string;
  /**
  * Include the vlan tag(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#vlan_tags SystemServicesDhcpLocalserverGroup#vlan_tags}
  */
  readonly vlanTags?: boolean | cdktf.IResolvable;
}

export function systemServicesDhcpLocalserverGroupAuthenticationUsernameIncludeToTerraform(struct?: SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude | cdktf.IResolvable): any {
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


export function systemServicesDhcpLocalserverGroupAuthenticationUsernameIncludeToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude | cdktf.IResolvable): any {
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

export class SystemServicesDhcpLocalserverGroupAuthenticationUsernameIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude | cdktf.IResolvable | undefined) {
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
export interface SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn {
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#compare SystemServicesDhcpLocalserverGroup#compare}
  */
  readonly compare: string;
  /**
  * Option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option SystemServicesDhcpLocalserverGroup#option}
  */
  readonly option: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value SystemServicesDhcpLocalserverGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value_type SystemServicesDhcpLocalserverGroup#value_type}
  */
  readonly valueType: string;
}

export function systemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnToTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare: cdktf.stringToTerraform(struct!.compare),
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function systemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
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

export class SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compare = undefined;
      this._option = undefined;
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
      this._compare = value.compare;
      this._option = value.option;
      this._value = value.value;
      this._valueType = value.valueType;
    }
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

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

export class SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnList extends cdktf.ComplexList {
  public internalValue? : SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn[] | cdktf.IResolvable

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
  public get(index: number): SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnOutputReference {
    return new SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemServicesDhcpLocalserverGroupInterfaceOverridesV4 {
  /**
  * Allow packets without end-of-option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#allow_no_end_option SystemServicesDhcpLocalserverGroup#allow_no_end_option}
  */
  readonly allowNoEndOption?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#asymmetric_lease_time SystemServicesDhcpLocalserverGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Allow processing of bootp requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#bootp_support SystemServicesDhcpLocalserverGroup#bootp_support}
  */
  readonly bootpSupport?: boolean | cdktf.IResolvable;
  /**
  * Use incoming interface or option 60 and option 82 match criteria for DISCOVER PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#client_discover_match SystemServicesDhcpLocalserverGroup#client_discover_match}
  */
  readonly clientDiscoverMatch?: string;
  /**
  * Time delay between discover and offer (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_offer_delay_time SystemServicesDhcpLocalserverGroup#delay_offer_delay_time}
  */
  readonly delayOfferDelayTime?: number;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delete_binding_on_renegotiation SystemServicesDhcpLocalserverGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dual_stack SystemServicesDhcpLocalserverGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Include option-82 in FORCERENEW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#include_option_82_forcerenew SystemServicesDhcpLocalserverGroup#include_option_82_forcerenew}
  */
  readonly includeOption82Forcerenew?: boolean | cdktf.IResolvable;
  /**
  * Include option-82 in NAK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#include_option_82_nak SystemServicesDhcpLocalserverGroup#include_option_82_nak}
  */
  readonly includeOption82Nak?: boolean | cdktf.IResolvable;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#interface_client_limit SystemServicesDhcpLocalserverGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * Process INFORM PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform SystemServicesDhcpLocalserverGroup#process_inform}
  */
  readonly processInform?: boolean | cdktf.IResolvable;
  /**
  * Pool name for family inet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform_pool SystemServicesDhcpLocalserverGroup#process_inform_pool}
  */
  readonly processInformPool?: string;
  /**
  * DHCPv4 attributes to use as defined under access protocol-attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#protocol_attributes SystemServicesDhcpLocalserverGroup#protocol_attributes}
  */
  readonly protocolAttributes?: string;
  /**
  * delay_offer_based_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_offer_based_on SystemServicesDhcpLocalserverGroup#delay_offer_based_on}
  */
  readonly delayOfferBasedOn?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn[] | cdktf.IResolvable;
}

export function systemServicesDhcpLocalserverGroupInterfaceOverridesV4ToTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_end_option: cdktf.booleanToTerraform(struct!.allowNoEndOption),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    bootp_support: cdktf.booleanToTerraform(struct!.bootpSupport),
    client_discover_match: cdktf.stringToTerraform(struct!.clientDiscoverMatch),
    delay_offer_delay_time: cdktf.numberToTerraform(struct!.delayOfferDelayTime),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    include_option_82_forcerenew: cdktf.booleanToTerraform(struct!.includeOption82Forcerenew),
    include_option_82_nak: cdktf.booleanToTerraform(struct!.includeOption82Nak),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    process_inform: cdktf.booleanToTerraform(struct!.processInform),
    process_inform_pool: cdktf.stringToTerraform(struct!.processInformPool),
    protocol_attributes: cdktf.stringToTerraform(struct!.protocolAttributes),
    delay_offer_based_on: cdktf.listMapper(systemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnToTerraform, true)(struct!.delayOfferBasedOn),
  }
}


export function systemServicesDhcpLocalserverGroupInterfaceOverridesV4ToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4 | cdktf.IResolvable): any {
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
    delay_offer_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.delayOfferDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    include_option_82_forcerenew: {
      value: cdktf.booleanToHclTerraform(struct!.includeOption82Forcerenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_option_82_nak: {
      value: cdktf.booleanToHclTerraform(struct!.includeOption82Nak),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_client_limit: {
      value: cdktf.numberToHclTerraform(struct!.interfaceClientLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_inform: {
      value: cdktf.booleanToHclTerraform(struct!.processInform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_inform_pool: {
      value: cdktf.stringToHclTerraform(struct!.processInformPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_attributes: {
      value: cdktf.stringToHclTerraform(struct!.protocolAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_offer_based_on: {
      value: cdktf.listMapperHcl(systemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnToHclTerraform, true)(struct!.delayOfferBasedOn),
      isBlock: true,
      type: "set",
      storageClassType: "SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesDhcpLocalserverGroupInterfaceOverridesV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupInterfaceOverridesV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoEndOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoEndOption = this._allowNoEndOption;
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
    if (this._delayOfferDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayOfferDelayTime = this._delayOfferDelayTime;
    }
    if (this._deleteBindingOnRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBindingOnRenegotiation = this._deleteBindingOnRenegotiation;
    }
    if (this._dualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStack = this._dualStack;
    }
    if (this._includeOption82Forcerenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOption82Forcerenew = this._includeOption82Forcerenew;
    }
    if (this._includeOption82Nak !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOption82Nak = this._includeOption82Nak;
    }
    if (this._interfaceClientLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceClientLimit = this._interfaceClientLimit;
    }
    if (this._processInform !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInform = this._processInform;
    }
    if (this._processInformPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInformPool = this._processInformPool;
    }
    if (this._protocolAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolAttributes = this._protocolAttributes;
    }
    if (this._delayOfferBasedOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayOfferBasedOn = this._delayOfferBasedOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoEndOption = undefined;
      this._asymmetricLeaseTime = undefined;
      this._bootpSupport = undefined;
      this._clientDiscoverMatch = undefined;
      this._delayOfferDelayTime = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._dualStack = undefined;
      this._includeOption82Forcerenew = undefined;
      this._includeOption82Nak = undefined;
      this._interfaceClientLimit = undefined;
      this._processInform = undefined;
      this._processInformPool = undefined;
      this._protocolAttributes = undefined;
      this._delayOfferBasedOn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoEndOption = value.allowNoEndOption;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._bootpSupport = value.bootpSupport;
      this._clientDiscoverMatch = value.clientDiscoverMatch;
      this._delayOfferDelayTime = value.delayOfferDelayTime;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._dualStack = value.dualStack;
      this._includeOption82Forcerenew = value.includeOption82Forcerenew;
      this._includeOption82Nak = value.includeOption82Nak;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._processInform = value.processInform;
      this._processInformPool = value.processInformPool;
      this._protocolAttributes = value.protocolAttributes;
      this._delayOfferBasedOn.internalValue = value.delayOfferBasedOn;
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

  // delay_offer_delay_time - computed: false, optional: true, required: false
  private _delayOfferDelayTime?: number; 
  public get delayOfferDelayTime() {
    return this.getNumberAttribute('delay_offer_delay_time');
  }
  public set delayOfferDelayTime(value: number) {
    this._delayOfferDelayTime = value;
  }
  public resetDelayOfferDelayTime() {
    this._delayOfferDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayOfferDelayTimeInput() {
    return this._delayOfferDelayTime;
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

  // include_option_82_forcerenew - computed: false, optional: true, required: false
  private _includeOption82Forcerenew?: boolean | cdktf.IResolvable; 
  public get includeOption82Forcerenew() {
    return this.getBooleanAttribute('include_option_82_forcerenew');
  }
  public set includeOption82Forcerenew(value: boolean | cdktf.IResolvable) {
    this._includeOption82Forcerenew = value;
  }
  public resetIncludeOption82Forcerenew() {
    this._includeOption82Forcerenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOption82ForcerenewInput() {
    return this._includeOption82Forcerenew;
  }

  // include_option_82_nak - computed: false, optional: true, required: false
  private _includeOption82Nak?: boolean | cdktf.IResolvable; 
  public get includeOption82Nak() {
    return this.getBooleanAttribute('include_option_82_nak');
  }
  public set includeOption82Nak(value: boolean | cdktf.IResolvable) {
    this._includeOption82Nak = value;
  }
  public resetIncludeOption82Nak() {
    this._includeOption82Nak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOption82NakInput() {
    return this._includeOption82Nak;
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

  // process_inform - computed: false, optional: true, required: false
  private _processInform?: boolean | cdktf.IResolvable; 
  public get processInform() {
    return this.getBooleanAttribute('process_inform');
  }
  public set processInform(value: boolean | cdktf.IResolvable) {
    this._processInform = value;
  }
  public resetProcessInform() {
    this._processInform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformInput() {
    return this._processInform;
  }

  // process_inform_pool - computed: false, optional: true, required: false
  private _processInformPool?: string; 
  public get processInformPool() {
    return this.getStringAttribute('process_inform_pool');
  }
  public set processInformPool(value: string) {
    this._processInformPool = value;
  }
  public resetProcessInformPool() {
    this._processInformPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformPoolInput() {
    return this._processInformPool;
  }

  // protocol_attributes - computed: false, optional: true, required: false
  private _protocolAttributes?: string; 
  public get protocolAttributes() {
    return this.getStringAttribute('protocol_attributes');
  }
  public set protocolAttributes(value: string) {
    this._protocolAttributes = value;
  }
  public resetProtocolAttributes() {
    this._protocolAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolAttributesInput() {
    return this._protocolAttributes;
  }

  // delay_offer_based_on - computed: false, optional: true, required: false
  private _delayOfferBasedOn = new SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOnList(this, "delay_offer_based_on", true);
  public get delayOfferBasedOn() {
    return this._delayOfferBasedOn;
  }
  public putDelayOfferBasedOn(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4DelayOfferBasedOn[] | cdktf.IResolvable) {
    this._delayOfferBasedOn.internalValue = value;
  }
  public resetDelayOfferBasedOn() {
    this._delayOfferBasedOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayOfferBasedOnInput() {
    return this._delayOfferBasedOn.internalValue;
  }
}
export interface SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn {
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#compare SystemServicesDhcpLocalserverGroup#compare}
  */
  readonly compare: string;
  /**
  * Option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option SystemServicesDhcpLocalserverGroup#option}
  */
  readonly option: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value SystemServicesDhcpLocalserverGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value_type SystemServicesDhcpLocalserverGroup#value_type}
  */
  readonly valueType: string;
}

export function systemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnToTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare: cdktf.stringToTerraform(struct!.compare),
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function systemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
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

export class SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compare = undefined;
      this._option = undefined;
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
      this._compare = value.compare;
      this._option = value.option;
      this._value = value.value;
      this._valueType = value.valueType;
    }
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

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

export class SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnList extends cdktf.ComplexList {
  public internalValue? : SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn[] | cdktf.IResolvable

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
  public get(index: number): SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnOutputReference {
    return new SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemServicesDhcpLocalserverGroupInterfaceOverridesV6 {
  /**
  * Add option-23, DNS recursive name server in Advertise and Reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#always_add_option_dns_server SystemServicesDhcpLocalserverGroup#always_add_option_dns_server}
  */
  readonly alwaysAddOptionDnsServer?: boolean | cdktf.IResolvable;
  /**
  * Always process option even after address allocation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#always_process_option_request_option SystemServicesDhcpLocalserverGroup#always_process_option_request_option}
  */
  readonly alwaysProcessOptionRequestOption?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#asymmetric_lease_time SystemServicesDhcpLocalserverGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Use a reduced prefix lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#asymmetric_prefix_lease_time SystemServicesDhcpLocalserverGroup#asymmetric_prefix_lease_time}
  */
  readonly asymmetricPrefixLeaseTime?: number;
  /**
  * Use incoming interface match criteria for SOLICIT PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#client_negotiation_match_incoming_interface SystemServicesDhcpLocalserverGroup#client_negotiation_match_incoming_interface}
  */
  readonly clientNegotiationMatchIncomingInterface?: boolean | cdktf.IResolvable;
  /**
  * Time delay between solicit and advertise (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_advertise_delay_time SystemServicesDhcpLocalserverGroup#delay_advertise_delay_time}
  */
  readonly delayAdvertiseDelayTime?: number;
  /**
  * Delegated pool name for inet6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delegated_pool SystemServicesDhcpLocalserverGroup#delegated_pool}
  */
  readonly delegatedPool?: string;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delete_binding_on_renegotiation SystemServicesDhcpLocalserverGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dual_stack SystemServicesDhcpLocalserverGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#interface_client_limit SystemServicesDhcpLocalserverGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * If the client requests multiple addresses place the options in each address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#multi_address_embedded_option_response SystemServicesDhcpLocalserverGroup#multi_address_embedded_option_response}
  */
  readonly multiAddressEmbeddedOptionResponse?: boolean | cdktf.IResolvable;
  /**
  * Process INFORM PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform SystemServicesDhcpLocalserverGroup#process_inform}
  */
  readonly processInform?: boolean | cdktf.IResolvable;
  /**
  * Pool name for family inet6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform_pool SystemServicesDhcpLocalserverGroup#process_inform_pool}
  */
  readonly processInformPool?: string;
  /**
  * DHCPv6 attributes to use as defined under access protocol-attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#protocol_attributes SystemServicesDhcpLocalserverGroup#protocol_attributes}
  */
  readonly protocolAttributes?: string;
  /**
  * Enable rapid commit processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#rapid_commit SystemServicesDhcpLocalserverGroup#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * A top level status code option rather than encapsulated in IA for NoAddrsAvail in Advertise PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#top_level_status_code SystemServicesDhcpLocalserverGroup#top_level_status_code}
  */
  readonly topLevelStatusCode?: boolean | cdktf.IResolvable;
  /**
  * delay_advertise_based_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_advertise_based_on SystemServicesDhcpLocalserverGroup#delay_advertise_based_on}
  */
  readonly delayAdvertiseBasedOn?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn[] | cdktf.IResolvable;
}

export function systemServicesDhcpLocalserverGroupInterfaceOverridesV6ToTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_add_option_dns_server: cdktf.booleanToTerraform(struct!.alwaysAddOptionDnsServer),
    always_process_option_request_option: cdktf.booleanToTerraform(struct!.alwaysProcessOptionRequestOption),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    asymmetric_prefix_lease_time: cdktf.numberToTerraform(struct!.asymmetricPrefixLeaseTime),
    client_negotiation_match_incoming_interface: cdktf.booleanToTerraform(struct!.clientNegotiationMatchIncomingInterface),
    delay_advertise_delay_time: cdktf.numberToTerraform(struct!.delayAdvertiseDelayTime),
    delegated_pool: cdktf.stringToTerraform(struct!.delegatedPool),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    multi_address_embedded_option_response: cdktf.booleanToTerraform(struct!.multiAddressEmbeddedOptionResponse),
    process_inform: cdktf.booleanToTerraform(struct!.processInform),
    process_inform_pool: cdktf.stringToTerraform(struct!.processInformPool),
    protocol_attributes: cdktf.stringToTerraform(struct!.protocolAttributes),
    rapid_commit: cdktf.booleanToTerraform(struct!.rapidCommit),
    top_level_status_code: cdktf.booleanToTerraform(struct!.topLevelStatusCode),
    delay_advertise_based_on: cdktf.listMapper(systemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnToTerraform, true)(struct!.delayAdvertiseBasedOn),
  }
}


export function systemServicesDhcpLocalserverGroupInterfaceOverridesV6ToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_add_option_dns_server: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysAddOptionDnsServer),
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
    delay_advertise_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.delayAdvertiseDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delegated_pool: {
      value: cdktf.stringToHclTerraform(struct!.delegatedPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    multi_address_embedded_option_response: {
      value: cdktf.booleanToHclTerraform(struct!.multiAddressEmbeddedOptionResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_inform: {
      value: cdktf.booleanToHclTerraform(struct!.processInform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_inform_pool: {
      value: cdktf.stringToHclTerraform(struct!.processInformPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_attributes: {
      value: cdktf.stringToHclTerraform(struct!.protocolAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rapid_commit: {
      value: cdktf.booleanToHclTerraform(struct!.rapidCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    top_level_status_code: {
      value: cdktf.booleanToHclTerraform(struct!.topLevelStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delay_advertise_based_on: {
      value: cdktf.listMapperHcl(systemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnToHclTerraform, true)(struct!.delayAdvertiseBasedOn),
      isBlock: true,
      type: "set",
      storageClassType: "SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesDhcpLocalserverGroupInterfaceOverridesV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupInterfaceOverridesV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysAddOptionDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysAddOptionDnsServer = this._alwaysAddOptionDnsServer;
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
    if (this._delayAdvertiseDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAdvertiseDelayTime = this._delayAdvertiseDelayTime;
    }
    if (this._delegatedPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedPool = this._delegatedPool;
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
    if (this._multiAddressEmbeddedOptionResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAddressEmbeddedOptionResponse = this._multiAddressEmbeddedOptionResponse;
    }
    if (this._processInform !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInform = this._processInform;
    }
    if (this._processInformPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInformPool = this._processInformPool;
    }
    if (this._protocolAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolAttributes = this._protocolAttributes;
    }
    if (this._rapidCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapidCommit = this._rapidCommit;
    }
    if (this._topLevelStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.topLevelStatusCode = this._topLevelStatusCode;
    }
    if (this._delayAdvertiseBasedOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAdvertiseBasedOn = this._delayAdvertiseBasedOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysAddOptionDnsServer = undefined;
      this._alwaysProcessOptionRequestOption = undefined;
      this._asymmetricLeaseTime = undefined;
      this._asymmetricPrefixLeaseTime = undefined;
      this._clientNegotiationMatchIncomingInterface = undefined;
      this._delayAdvertiseDelayTime = undefined;
      this._delegatedPool = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._dualStack = undefined;
      this._interfaceClientLimit = undefined;
      this._multiAddressEmbeddedOptionResponse = undefined;
      this._processInform = undefined;
      this._processInformPool = undefined;
      this._protocolAttributes = undefined;
      this._rapidCommit = undefined;
      this._topLevelStatusCode = undefined;
      this._delayAdvertiseBasedOn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysAddOptionDnsServer = value.alwaysAddOptionDnsServer;
      this._alwaysProcessOptionRequestOption = value.alwaysProcessOptionRequestOption;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._asymmetricPrefixLeaseTime = value.asymmetricPrefixLeaseTime;
      this._clientNegotiationMatchIncomingInterface = value.clientNegotiationMatchIncomingInterface;
      this._delayAdvertiseDelayTime = value.delayAdvertiseDelayTime;
      this._delegatedPool = value.delegatedPool;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._dualStack = value.dualStack;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._multiAddressEmbeddedOptionResponse = value.multiAddressEmbeddedOptionResponse;
      this._processInform = value.processInform;
      this._processInformPool = value.processInformPool;
      this._protocolAttributes = value.protocolAttributes;
      this._rapidCommit = value.rapidCommit;
      this._topLevelStatusCode = value.topLevelStatusCode;
      this._delayAdvertiseBasedOn.internalValue = value.delayAdvertiseBasedOn;
    }
  }

  // always_add_option_dns_server - computed: false, optional: true, required: false
  private _alwaysAddOptionDnsServer?: boolean | cdktf.IResolvable; 
  public get alwaysAddOptionDnsServer() {
    return this.getBooleanAttribute('always_add_option_dns_server');
  }
  public set alwaysAddOptionDnsServer(value: boolean | cdktf.IResolvable) {
    this._alwaysAddOptionDnsServer = value;
  }
  public resetAlwaysAddOptionDnsServer() {
    this._alwaysAddOptionDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysAddOptionDnsServerInput() {
    return this._alwaysAddOptionDnsServer;
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

  // delay_advertise_delay_time - computed: false, optional: true, required: false
  private _delayAdvertiseDelayTime?: number; 
  public get delayAdvertiseDelayTime() {
    return this.getNumberAttribute('delay_advertise_delay_time');
  }
  public set delayAdvertiseDelayTime(value: number) {
    this._delayAdvertiseDelayTime = value;
  }
  public resetDelayAdvertiseDelayTime() {
    this._delayAdvertiseDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAdvertiseDelayTimeInput() {
    return this._delayAdvertiseDelayTime;
  }

  // delegated_pool - computed: false, optional: true, required: false
  private _delegatedPool?: string; 
  public get delegatedPool() {
    return this.getStringAttribute('delegated_pool');
  }
  public set delegatedPool(value: string) {
    this._delegatedPool = value;
  }
  public resetDelegatedPool() {
    this._delegatedPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPoolInput() {
    return this._delegatedPool;
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

  // multi_address_embedded_option_response - computed: false, optional: true, required: false
  private _multiAddressEmbeddedOptionResponse?: boolean | cdktf.IResolvable; 
  public get multiAddressEmbeddedOptionResponse() {
    return this.getBooleanAttribute('multi_address_embedded_option_response');
  }
  public set multiAddressEmbeddedOptionResponse(value: boolean | cdktf.IResolvable) {
    this._multiAddressEmbeddedOptionResponse = value;
  }
  public resetMultiAddressEmbeddedOptionResponse() {
    this._multiAddressEmbeddedOptionResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAddressEmbeddedOptionResponseInput() {
    return this._multiAddressEmbeddedOptionResponse;
  }

  // process_inform - computed: false, optional: true, required: false
  private _processInform?: boolean | cdktf.IResolvable; 
  public get processInform() {
    return this.getBooleanAttribute('process_inform');
  }
  public set processInform(value: boolean | cdktf.IResolvable) {
    this._processInform = value;
  }
  public resetProcessInform() {
    this._processInform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformInput() {
    return this._processInform;
  }

  // process_inform_pool - computed: false, optional: true, required: false
  private _processInformPool?: string; 
  public get processInformPool() {
    return this.getStringAttribute('process_inform_pool');
  }
  public set processInformPool(value: string) {
    this._processInformPool = value;
  }
  public resetProcessInformPool() {
    this._processInformPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformPoolInput() {
    return this._processInformPool;
  }

  // protocol_attributes - computed: false, optional: true, required: false
  private _protocolAttributes?: string; 
  public get protocolAttributes() {
    return this.getStringAttribute('protocol_attributes');
  }
  public set protocolAttributes(value: string) {
    this._protocolAttributes = value;
  }
  public resetProtocolAttributes() {
    this._protocolAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolAttributesInput() {
    return this._protocolAttributes;
  }

  // rapid_commit - computed: false, optional: true, required: false
  private _rapidCommit?: boolean | cdktf.IResolvable; 
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }
  public set rapidCommit(value: boolean | cdktf.IResolvable) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
  }

  // top_level_status_code - computed: false, optional: true, required: false
  private _topLevelStatusCode?: boolean | cdktf.IResolvable; 
  public get topLevelStatusCode() {
    return this.getBooleanAttribute('top_level_status_code');
  }
  public set topLevelStatusCode(value: boolean | cdktf.IResolvable) {
    this._topLevelStatusCode = value;
  }
  public resetTopLevelStatusCode() {
    this._topLevelStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topLevelStatusCodeInput() {
    return this._topLevelStatusCode;
  }

  // delay_advertise_based_on - computed: false, optional: true, required: false
  private _delayAdvertiseBasedOn = new SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOnList(this, "delay_advertise_based_on", true);
  public get delayAdvertiseBasedOn() {
    return this._delayAdvertiseBasedOn;
  }
  public putDelayAdvertiseBasedOn(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6DelayAdvertiseBasedOn[] | cdktf.IResolvable) {
    this._delayAdvertiseBasedOn.internalValue = value;
  }
  public resetDelayAdvertiseBasedOn() {
    this._delayAdvertiseBasedOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAdvertiseBasedOnInput() {
    return this._delayAdvertiseBasedOn.internalValue;
  }
}
export interface SystemServicesDhcpLocalserverGroupInterface {
  /**
  * Access profile to use for AAA services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#access_profile SystemServicesDhcpLocalserverGroup#access_profile}
  */
  readonly accessProfile?: string;
  /**
  * Dynamic profile to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile SystemServicesDhcpLocalserverGroup#dynamic_profile}
  */
  readonly dynamicProfile?: string;
  /**
  * Aggregate client profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile_aggregate_clients SystemServicesDhcpLocalserverGroup#dynamic_profile_aggregate_clients}
  */
  readonly dynamicProfileAggregateClients?: boolean | cdktf.IResolvable;
  /**
  * Merge or replace the client dynamic profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile_aggregate_clients_action SystemServicesDhcpLocalserverGroup#dynamic_profile_aggregate_clients_action}
  */
  readonly dynamicProfileAggregateClientsAction?: string;
  /**
  * Dynamic profile to use on the primary interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dynamic_profile_use_primary SystemServicesDhcpLocalserverGroup#dynamic_profile_use_primary}
  */
  readonly dynamicProfileUsePrimary?: string;
  /**
  * Exclude this interface range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#exclude SystemServicesDhcpLocalserverGroup#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#name SystemServicesDhcpLocalserverGroup#name}
  */
  readonly name: string;
  /**
  * Dynamic profile to use for default service activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#service_profile SystemServicesDhcpLocalserverGroup#service_profile}
  */
  readonly serviceProfile?: string;
  /**
  * Short cycle lockout max time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#short_cycle_protection_lockout_max_time SystemServicesDhcpLocalserverGroup#short_cycle_protection_lockout_max_time}
  */
  readonly shortCycleProtectionLockoutMaxTime?: number;
  /**
  * Short cycle lockout min time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#short_cycle_protection_lockout_min_time SystemServicesDhcpLocalserverGroup#short_cycle_protection_lockout_min_time}
  */
  readonly shortCycleProtectionLockoutMinTime?: number;
  /**
  * Enable tracing for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#trace SystemServicesDhcpLocalserverGroup#trace}
  */
  readonly trace?: boolean | cdktf.IResolvable;
  /**
  * Interface up to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#upto SystemServicesDhcpLocalserverGroup#upto}
  */
  readonly upto?: string;
  /**
  * overrides_v4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#overrides_v4 SystemServicesDhcpLocalserverGroup#overrides_v4}
  */
  readonly overridesV4?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4;
  /**
  * overrides_v6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#overrides_v6 SystemServicesDhcpLocalserverGroup#overrides_v6}
  */
  readonly overridesV6?: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6;
}

export function systemServicesDhcpLocalserverGroupInterfaceToTerraform(struct?: SystemServicesDhcpLocalserverGroupInterface | cdktf.IResolvable): any {
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
    overrides_v4: systemServicesDhcpLocalserverGroupInterfaceOverridesV4ToTerraform(struct!.overridesV4),
    overrides_v6: systemServicesDhcpLocalserverGroupInterfaceOverridesV6ToTerraform(struct!.overridesV6),
  }
}


export function systemServicesDhcpLocalserverGroupInterfaceToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupInterface | cdktf.IResolvable): any {
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
      value: systemServicesDhcpLocalserverGroupInterfaceOverridesV4ToHclTerraform(struct!.overridesV4),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemServicesDhcpLocalserverGroupInterfaceOverridesV4",
    },
    overrides_v6: {
      value: systemServicesDhcpLocalserverGroupInterfaceOverridesV6ToHclTerraform(struct!.overridesV6),
      isBlock: true,
      type: "struct",
      storageClassType: "SystemServicesDhcpLocalserverGroupInterfaceOverridesV6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesDhcpLocalserverGroupInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemServicesDhcpLocalserverGroupInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupInterface | cdktf.IResolvable | undefined) {
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
  private _overridesV4 = new SystemServicesDhcpLocalserverGroupInterfaceOverridesV4OutputReference(this, "overrides_v4");
  public get overridesV4() {
    return this._overridesV4;
  }
  public putOverridesV4(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV4) {
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
  private _overridesV6 = new SystemServicesDhcpLocalserverGroupInterfaceOverridesV6OutputReference(this, "overrides_v6");
  public get overridesV6() {
    return this._overridesV6;
  }
  public putOverridesV6(value: SystemServicesDhcpLocalserverGroupInterfaceOverridesV6) {
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

export class SystemServicesDhcpLocalserverGroupInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemServicesDhcpLocalserverGroupInterface[] | cdktf.IResolvable

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
  public get(index: number): SystemServicesDhcpLocalserverGroupInterfaceOutputReference {
    return new SystemServicesDhcpLocalserverGroupInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemServicesDhcpLocalserverGroupLeaseTimeValidation {
  /**
  * Threshold for lease time violation seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#lease_time_threshold SystemServicesDhcpLocalserverGroup#lease_time_threshold}
  */
  readonly leaseTimeThreshold?: number;
  /**
  *  Lease time validation violation action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#violation_action SystemServicesDhcpLocalserverGroup#violation_action}
  */
  readonly violationAction?: string;
}

export function systemServicesDhcpLocalserverGroupLeaseTimeValidationToTerraform(struct?: SystemServicesDhcpLocalserverGroupLeaseTimeValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lease_time_threshold: cdktf.numberToTerraform(struct!.leaseTimeThreshold),
    violation_action: cdktf.stringToTerraform(struct!.violationAction),
  }
}


export function systemServicesDhcpLocalserverGroupLeaseTimeValidationToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupLeaseTimeValidation | cdktf.IResolvable): any {
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
    violation_action: {
      value: cdktf.stringToHclTerraform(struct!.violationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesDhcpLocalserverGroupLeaseTimeValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupLeaseTimeValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaseTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeThreshold = this._leaseTimeThreshold;
    }
    if (this._violationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationAction = this._violationAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesDhcpLocalserverGroupLeaseTimeValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leaseTimeThreshold = undefined;
      this._violationAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leaseTimeThreshold = value.leaseTimeThreshold;
      this._violationAction = value.violationAction;
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

  // violation_action - computed: false, optional: true, required: false
  private _violationAction?: string; 
  public get violationAction() {
    return this.getStringAttribute('violation_action');
  }
  public set violationAction(value: string) {
    this._violationAction = value;
  }
  public resetViolationAction() {
    this._violationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationActionInput() {
    return this._violationAction;
  }
}
export interface SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd {
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#detection_time_threshold SystemServicesDhcpLocalserverGroup#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Time to hold the session-UP notification to the client (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#holddown_interval SystemServicesDhcpLocalserverGroup#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Minimum transmit and receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#minimum_interval SystemServicesDhcpLocalserverGroup#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#minimum_receive_interval SystemServicesDhcpLocalserverGroup#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#multiplier SystemServicesDhcpLocalserverGroup#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Disable adaptation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#no_adaptation SystemServicesDhcpLocalserverGroup#no_adaptation}
  */
  readonly noAdaptation?: boolean | cdktf.IResolvable;
  /**
  * BFD single-hop or multihop session-mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#session_mode SystemServicesDhcpLocalserverGroup#session_mode}
  */
  readonly sessionMode?: string;
  /**
  * Minimum transmit interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#transmit_interval_minimum SystemServicesDhcpLocalserverGroup#transmit_interval_minimum}
  */
  readonly transmitIntervalMinimum?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#transmit_interval_threshold SystemServicesDhcpLocalserverGroup#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#version SystemServicesDhcpLocalserverGroup#version}
  */
  readonly version?: string;
}

export function systemServicesDhcpLocalserverGroupLivenessDetectionMethodBfdToTerraform(struct?: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd | cdktf.IResolvable): any {
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


export function systemServicesDhcpLocalserverGroupLivenessDetectionMethodBfdToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd | cdktf.IResolvable): any {
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

export class SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd | cdktf.IResolvable | undefined) {
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
export interface SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2 {
  /**
  * Retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#max_consecutive_retries SystemServicesDhcpLocalserverGroup#max_consecutive_retries}
  */
  readonly maxConsecutiveRetries?: number;
  /**
  * Transmit interval for address resolution (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#transmit_interval SystemServicesDhcpLocalserverGroup#transmit_interval}
  */
  readonly transmitInterval?: number;
}

export function systemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2ToTerraform(struct?: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_consecutive_retries: cdktf.numberToTerraform(struct!.maxConsecutiveRetries),
    transmit_interval: cdktf.numberToTerraform(struct!.transmitInterval),
  }
}


export function systemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2ToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable): any {
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

export class SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2 | cdktf.IResolvable | undefined) {
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
export interface SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn {
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#compare SystemServicesDhcpLocalserverGroup#compare}
  */
  readonly compare: string;
  /**
  * Option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option SystemServicesDhcpLocalserverGroup#option}
  */
  readonly option: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value SystemServicesDhcpLocalserverGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value_type SystemServicesDhcpLocalserverGroup#value_type}
  */
  readonly valueType: string;
}

export function systemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnToTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare: cdktf.stringToTerraform(struct!.compare),
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function systemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
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

export class SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compare = undefined;
      this._option = undefined;
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
      this._compare = value.compare;
      this._option = value.option;
      this._value = value.value;
      this._valueType = value.valueType;
    }
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

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

export class SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnList extends cdktf.ComplexList {
  public internalValue? : SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn[] | cdktf.IResolvable

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
  public get(index: number): SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnOutputReference {
    return new SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemServicesDhcpLocalserverGroupOverridesV4 {
  /**
  * Allow packets without end-of-option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#allow_no_end_option SystemServicesDhcpLocalserverGroup#allow_no_end_option}
  */
  readonly allowNoEndOption?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#asymmetric_lease_time SystemServicesDhcpLocalserverGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Allow processing of bootp requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#bootp_support SystemServicesDhcpLocalserverGroup#bootp_support}
  */
  readonly bootpSupport?: boolean | cdktf.IResolvable;
  /**
  * Use incoming interface or option 60 and option 82 match criteria for DISCOVER PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#client_discover_match SystemServicesDhcpLocalserverGroup#client_discover_match}
  */
  readonly clientDiscoverMatch?: string;
  /**
  * Time delay between discover and offer (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_offer_delay_time SystemServicesDhcpLocalserverGroup#delay_offer_delay_time}
  */
  readonly delayOfferDelayTime?: number;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delete_binding_on_renegotiation SystemServicesDhcpLocalserverGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dual_stack SystemServicesDhcpLocalserverGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Include option-82 in FORCERENEW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#include_option_82_forcerenew SystemServicesDhcpLocalserverGroup#include_option_82_forcerenew}
  */
  readonly includeOption82Forcerenew?: boolean | cdktf.IResolvable;
  /**
  * Include option-82 in NAK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#include_option_82_nak SystemServicesDhcpLocalserverGroup#include_option_82_nak}
  */
  readonly includeOption82Nak?: boolean | cdktf.IResolvable;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#interface_client_limit SystemServicesDhcpLocalserverGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * Process INFORM PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform SystemServicesDhcpLocalserverGroup#process_inform}
  */
  readonly processInform?: boolean | cdktf.IResolvable;
  /**
  * Pool name for family inet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform_pool SystemServicesDhcpLocalserverGroup#process_inform_pool}
  */
  readonly processInformPool?: string;
  /**
  * DHCPv4 attributes to use as defined under access protocol-attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#protocol_attributes SystemServicesDhcpLocalserverGroup#protocol_attributes}
  */
  readonly protocolAttributes?: string;
  /**
  * delay_offer_based_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_offer_based_on SystemServicesDhcpLocalserverGroup#delay_offer_based_on}
  */
  readonly delayOfferBasedOn?: SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn[] | cdktf.IResolvable;
}

export function systemServicesDhcpLocalserverGroupOverridesV4ToTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_end_option: cdktf.booleanToTerraform(struct!.allowNoEndOption),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    bootp_support: cdktf.booleanToTerraform(struct!.bootpSupport),
    client_discover_match: cdktf.stringToTerraform(struct!.clientDiscoverMatch),
    delay_offer_delay_time: cdktf.numberToTerraform(struct!.delayOfferDelayTime),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    include_option_82_forcerenew: cdktf.booleanToTerraform(struct!.includeOption82Forcerenew),
    include_option_82_nak: cdktf.booleanToTerraform(struct!.includeOption82Nak),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    process_inform: cdktf.booleanToTerraform(struct!.processInform),
    process_inform_pool: cdktf.stringToTerraform(struct!.processInformPool),
    protocol_attributes: cdktf.stringToTerraform(struct!.protocolAttributes),
    delay_offer_based_on: cdktf.listMapper(systemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnToTerraform, true)(struct!.delayOfferBasedOn),
  }
}


export function systemServicesDhcpLocalserverGroupOverridesV4ToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV4 | cdktf.IResolvable): any {
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
    delay_offer_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.delayOfferDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    include_option_82_forcerenew: {
      value: cdktf.booleanToHclTerraform(struct!.includeOption82Forcerenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_option_82_nak: {
      value: cdktf.booleanToHclTerraform(struct!.includeOption82Nak),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_client_limit: {
      value: cdktf.numberToHclTerraform(struct!.interfaceClientLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_inform: {
      value: cdktf.booleanToHclTerraform(struct!.processInform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_inform_pool: {
      value: cdktf.stringToHclTerraform(struct!.processInformPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_attributes: {
      value: cdktf.stringToHclTerraform(struct!.protocolAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_offer_based_on: {
      value: cdktf.listMapperHcl(systemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnToHclTerraform, true)(struct!.delayOfferBasedOn),
      isBlock: true,
      type: "set",
      storageClassType: "SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesDhcpLocalserverGroupOverridesV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupOverridesV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoEndOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoEndOption = this._allowNoEndOption;
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
    if (this._delayOfferDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayOfferDelayTime = this._delayOfferDelayTime;
    }
    if (this._deleteBindingOnRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBindingOnRenegotiation = this._deleteBindingOnRenegotiation;
    }
    if (this._dualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStack = this._dualStack;
    }
    if (this._includeOption82Forcerenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOption82Forcerenew = this._includeOption82Forcerenew;
    }
    if (this._includeOption82Nak !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOption82Nak = this._includeOption82Nak;
    }
    if (this._interfaceClientLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceClientLimit = this._interfaceClientLimit;
    }
    if (this._processInform !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInform = this._processInform;
    }
    if (this._processInformPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInformPool = this._processInformPool;
    }
    if (this._protocolAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolAttributes = this._protocolAttributes;
    }
    if (this._delayOfferBasedOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayOfferBasedOn = this._delayOfferBasedOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesDhcpLocalserverGroupOverridesV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoEndOption = undefined;
      this._asymmetricLeaseTime = undefined;
      this._bootpSupport = undefined;
      this._clientDiscoverMatch = undefined;
      this._delayOfferDelayTime = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._dualStack = undefined;
      this._includeOption82Forcerenew = undefined;
      this._includeOption82Nak = undefined;
      this._interfaceClientLimit = undefined;
      this._processInform = undefined;
      this._processInformPool = undefined;
      this._protocolAttributes = undefined;
      this._delayOfferBasedOn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoEndOption = value.allowNoEndOption;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._bootpSupport = value.bootpSupport;
      this._clientDiscoverMatch = value.clientDiscoverMatch;
      this._delayOfferDelayTime = value.delayOfferDelayTime;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._dualStack = value.dualStack;
      this._includeOption82Forcerenew = value.includeOption82Forcerenew;
      this._includeOption82Nak = value.includeOption82Nak;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._processInform = value.processInform;
      this._processInformPool = value.processInformPool;
      this._protocolAttributes = value.protocolAttributes;
      this._delayOfferBasedOn.internalValue = value.delayOfferBasedOn;
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

  // delay_offer_delay_time - computed: false, optional: true, required: false
  private _delayOfferDelayTime?: number; 
  public get delayOfferDelayTime() {
    return this.getNumberAttribute('delay_offer_delay_time');
  }
  public set delayOfferDelayTime(value: number) {
    this._delayOfferDelayTime = value;
  }
  public resetDelayOfferDelayTime() {
    this._delayOfferDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayOfferDelayTimeInput() {
    return this._delayOfferDelayTime;
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

  // include_option_82_forcerenew - computed: false, optional: true, required: false
  private _includeOption82Forcerenew?: boolean | cdktf.IResolvable; 
  public get includeOption82Forcerenew() {
    return this.getBooleanAttribute('include_option_82_forcerenew');
  }
  public set includeOption82Forcerenew(value: boolean | cdktf.IResolvable) {
    this._includeOption82Forcerenew = value;
  }
  public resetIncludeOption82Forcerenew() {
    this._includeOption82Forcerenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOption82ForcerenewInput() {
    return this._includeOption82Forcerenew;
  }

  // include_option_82_nak - computed: false, optional: true, required: false
  private _includeOption82Nak?: boolean | cdktf.IResolvable; 
  public get includeOption82Nak() {
    return this.getBooleanAttribute('include_option_82_nak');
  }
  public set includeOption82Nak(value: boolean | cdktf.IResolvable) {
    this._includeOption82Nak = value;
  }
  public resetIncludeOption82Nak() {
    this._includeOption82Nak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOption82NakInput() {
    return this._includeOption82Nak;
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

  // process_inform - computed: false, optional: true, required: false
  private _processInform?: boolean | cdktf.IResolvable; 
  public get processInform() {
    return this.getBooleanAttribute('process_inform');
  }
  public set processInform(value: boolean | cdktf.IResolvable) {
    this._processInform = value;
  }
  public resetProcessInform() {
    this._processInform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformInput() {
    return this._processInform;
  }

  // process_inform_pool - computed: false, optional: true, required: false
  private _processInformPool?: string; 
  public get processInformPool() {
    return this.getStringAttribute('process_inform_pool');
  }
  public set processInformPool(value: string) {
    this._processInformPool = value;
  }
  public resetProcessInformPool() {
    this._processInformPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformPoolInput() {
    return this._processInformPool;
  }

  // protocol_attributes - computed: false, optional: true, required: false
  private _protocolAttributes?: string; 
  public get protocolAttributes() {
    return this.getStringAttribute('protocol_attributes');
  }
  public set protocolAttributes(value: string) {
    this._protocolAttributes = value;
  }
  public resetProtocolAttributes() {
    this._protocolAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolAttributesInput() {
    return this._protocolAttributes;
  }

  // delay_offer_based_on - computed: false, optional: true, required: false
  private _delayOfferBasedOn = new SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOnList(this, "delay_offer_based_on", true);
  public get delayOfferBasedOn() {
    return this._delayOfferBasedOn;
  }
  public putDelayOfferBasedOn(value: SystemServicesDhcpLocalserverGroupOverridesV4DelayOfferBasedOn[] | cdktf.IResolvable) {
    this._delayOfferBasedOn.internalValue = value;
  }
  public resetDelayOfferBasedOn() {
    this._delayOfferBasedOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayOfferBasedOnInput() {
    return this._delayOfferBasedOn.internalValue;
  }
}
export interface SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn {
  /**
  * How to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#compare SystemServicesDhcpLocalserverGroup#compare}
  */
  readonly compare: string;
  /**
  * Option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#option SystemServicesDhcpLocalserverGroup#option}
  */
  readonly option: string;
  /**
  * String to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value SystemServicesDhcpLocalserverGroup#value}
  */
  readonly value: string;
  /**
  * Type of string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#value_type SystemServicesDhcpLocalserverGroup#value_type}
  */
  readonly valueType: string;
}

export function systemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnToTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare: cdktf.stringToTerraform(struct!.compare),
    option: cdktf.stringToTerraform(struct!.option),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function systemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
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

export class SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
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

  public set internalValue(value: SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compare = undefined;
      this._option = undefined;
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
      this._compare = value.compare;
      this._option = value.option;
      this._value = value.value;
      this._valueType = value.valueType;
    }
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

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

export class SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnList extends cdktf.ComplexList {
  public internalValue? : SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn[] | cdktf.IResolvable

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
  public get(index: number): SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnOutputReference {
    return new SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemServicesDhcpLocalserverGroupOverridesV6 {
  /**
  * Add option-23, DNS recursive name server in Advertise and Reply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#always_add_option_dns_server SystemServicesDhcpLocalserverGroup#always_add_option_dns_server}
  */
  readonly alwaysAddOptionDnsServer?: boolean | cdktf.IResolvable;
  /**
  * Always process option even after address allocation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#always_process_option_request_option SystemServicesDhcpLocalserverGroup#always_process_option_request_option}
  */
  readonly alwaysProcessOptionRequestOption?: boolean | cdktf.IResolvable;
  /**
  * Use a reduced lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#asymmetric_lease_time SystemServicesDhcpLocalserverGroup#asymmetric_lease_time}
  */
  readonly asymmetricLeaseTime?: number;
  /**
  * Use a reduced prefix lease time for the client. In seconds (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#asymmetric_prefix_lease_time SystemServicesDhcpLocalserverGroup#asymmetric_prefix_lease_time}
  */
  readonly asymmetricPrefixLeaseTime?: number;
  /**
  * Use incoming interface match criteria for SOLICIT PDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#client_negotiation_match_incoming_interface SystemServicesDhcpLocalserverGroup#client_negotiation_match_incoming_interface}
  */
  readonly clientNegotiationMatchIncomingInterface?: boolean | cdktf.IResolvable;
  /**
  * Time delay between solicit and advertise (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_advertise_delay_time SystemServicesDhcpLocalserverGroup#delay_advertise_delay_time}
  */
  readonly delayAdvertiseDelayTime?: number;
  /**
  * Delegated pool name for inet6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delegated_pool SystemServicesDhcpLocalserverGroup#delegated_pool}
  */
  readonly delegatedPool?: string;
  /**
  * Delete binding on renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delete_binding_on_renegotiation SystemServicesDhcpLocalserverGroup#delete_binding_on_renegotiation}
  */
  readonly deleteBindingOnRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * Dual stack group to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#dual_stack SystemServicesDhcpLocalserverGroup#dual_stack}
  */
  readonly dualStack?: string;
  /**
  * Limit the number of clients allowed on an interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#interface_client_limit SystemServicesDhcpLocalserverGroup#interface_client_limit}
  */
  readonly interfaceClientLimit?: number;
  /**
  * If the client requests multiple addresses place the options in each address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#multi_address_embedded_option_response SystemServicesDhcpLocalserverGroup#multi_address_embedded_option_response}
  */
  readonly multiAddressEmbeddedOptionResponse?: boolean | cdktf.IResolvable;
  /**
  * Process INFORM PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform SystemServicesDhcpLocalserverGroup#process_inform}
  */
  readonly processInform?: boolean | cdktf.IResolvable;
  /**
  * Pool name for family inet6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#process_inform_pool SystemServicesDhcpLocalserverGroup#process_inform_pool}
  */
  readonly processInformPool?: string;
  /**
  * DHCPv6 attributes to use as defined under access protocol-attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#protocol_attributes SystemServicesDhcpLocalserverGroup#protocol_attributes}
  */
  readonly protocolAttributes?: string;
  /**
  * Enable rapid commit processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#rapid_commit SystemServicesDhcpLocalserverGroup#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * A top level status code option rather than encapsulated in IA for NoAddrsAvail in Advertise PDUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#top_level_status_code SystemServicesDhcpLocalserverGroup#top_level_status_code}
  */
  readonly topLevelStatusCode?: boolean | cdktf.IResolvable;
  /**
  * delay_advertise_based_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#delay_advertise_based_on SystemServicesDhcpLocalserverGroup#delay_advertise_based_on}
  */
  readonly delayAdvertiseBasedOn?: SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn[] | cdktf.IResolvable;
}

export function systemServicesDhcpLocalserverGroupOverridesV6ToTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_add_option_dns_server: cdktf.booleanToTerraform(struct!.alwaysAddOptionDnsServer),
    always_process_option_request_option: cdktf.booleanToTerraform(struct!.alwaysProcessOptionRequestOption),
    asymmetric_lease_time: cdktf.numberToTerraform(struct!.asymmetricLeaseTime),
    asymmetric_prefix_lease_time: cdktf.numberToTerraform(struct!.asymmetricPrefixLeaseTime),
    client_negotiation_match_incoming_interface: cdktf.booleanToTerraform(struct!.clientNegotiationMatchIncomingInterface),
    delay_advertise_delay_time: cdktf.numberToTerraform(struct!.delayAdvertiseDelayTime),
    delegated_pool: cdktf.stringToTerraform(struct!.delegatedPool),
    delete_binding_on_renegotiation: cdktf.booleanToTerraform(struct!.deleteBindingOnRenegotiation),
    dual_stack: cdktf.stringToTerraform(struct!.dualStack),
    interface_client_limit: cdktf.numberToTerraform(struct!.interfaceClientLimit),
    multi_address_embedded_option_response: cdktf.booleanToTerraform(struct!.multiAddressEmbeddedOptionResponse),
    process_inform: cdktf.booleanToTerraform(struct!.processInform),
    process_inform_pool: cdktf.stringToTerraform(struct!.processInformPool),
    protocol_attributes: cdktf.stringToTerraform(struct!.protocolAttributes),
    rapid_commit: cdktf.booleanToTerraform(struct!.rapidCommit),
    top_level_status_code: cdktf.booleanToTerraform(struct!.topLevelStatusCode),
    delay_advertise_based_on: cdktf.listMapper(systemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnToTerraform, true)(struct!.delayAdvertiseBasedOn),
  }
}


export function systemServicesDhcpLocalserverGroupOverridesV6ToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupOverridesV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_add_option_dns_server: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysAddOptionDnsServer),
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
    delay_advertise_delay_time: {
      value: cdktf.numberToHclTerraform(struct!.delayAdvertiseDelayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delegated_pool: {
      value: cdktf.stringToHclTerraform(struct!.delegatedPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    multi_address_embedded_option_response: {
      value: cdktf.booleanToHclTerraform(struct!.multiAddressEmbeddedOptionResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_inform: {
      value: cdktf.booleanToHclTerraform(struct!.processInform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_inform_pool: {
      value: cdktf.stringToHclTerraform(struct!.processInformPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_attributes: {
      value: cdktf.stringToHclTerraform(struct!.protocolAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rapid_commit: {
      value: cdktf.booleanToHclTerraform(struct!.rapidCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    top_level_status_code: {
      value: cdktf.booleanToHclTerraform(struct!.topLevelStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delay_advertise_based_on: {
      value: cdktf.listMapperHcl(systemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnToHclTerraform, true)(struct!.delayAdvertiseBasedOn),
      isBlock: true,
      type: "set",
      storageClassType: "SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesDhcpLocalserverGroupOverridesV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupOverridesV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysAddOptionDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysAddOptionDnsServer = this._alwaysAddOptionDnsServer;
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
    if (this._delayAdvertiseDelayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAdvertiseDelayTime = this._delayAdvertiseDelayTime;
    }
    if (this._delegatedPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedPool = this._delegatedPool;
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
    if (this._multiAddressEmbeddedOptionResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAddressEmbeddedOptionResponse = this._multiAddressEmbeddedOptionResponse;
    }
    if (this._processInform !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInform = this._processInform;
    }
    if (this._processInformPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInformPool = this._processInformPool;
    }
    if (this._protocolAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolAttributes = this._protocolAttributes;
    }
    if (this._rapidCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapidCommit = this._rapidCommit;
    }
    if (this._topLevelStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.topLevelStatusCode = this._topLevelStatusCode;
    }
    if (this._delayAdvertiseBasedOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAdvertiseBasedOn = this._delayAdvertiseBasedOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesDhcpLocalserverGroupOverridesV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysAddOptionDnsServer = undefined;
      this._alwaysProcessOptionRequestOption = undefined;
      this._asymmetricLeaseTime = undefined;
      this._asymmetricPrefixLeaseTime = undefined;
      this._clientNegotiationMatchIncomingInterface = undefined;
      this._delayAdvertiseDelayTime = undefined;
      this._delegatedPool = undefined;
      this._deleteBindingOnRenegotiation = undefined;
      this._dualStack = undefined;
      this._interfaceClientLimit = undefined;
      this._multiAddressEmbeddedOptionResponse = undefined;
      this._processInform = undefined;
      this._processInformPool = undefined;
      this._protocolAttributes = undefined;
      this._rapidCommit = undefined;
      this._topLevelStatusCode = undefined;
      this._delayAdvertiseBasedOn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysAddOptionDnsServer = value.alwaysAddOptionDnsServer;
      this._alwaysProcessOptionRequestOption = value.alwaysProcessOptionRequestOption;
      this._asymmetricLeaseTime = value.asymmetricLeaseTime;
      this._asymmetricPrefixLeaseTime = value.asymmetricPrefixLeaseTime;
      this._clientNegotiationMatchIncomingInterface = value.clientNegotiationMatchIncomingInterface;
      this._delayAdvertiseDelayTime = value.delayAdvertiseDelayTime;
      this._delegatedPool = value.delegatedPool;
      this._deleteBindingOnRenegotiation = value.deleteBindingOnRenegotiation;
      this._dualStack = value.dualStack;
      this._interfaceClientLimit = value.interfaceClientLimit;
      this._multiAddressEmbeddedOptionResponse = value.multiAddressEmbeddedOptionResponse;
      this._processInform = value.processInform;
      this._processInformPool = value.processInformPool;
      this._protocolAttributes = value.protocolAttributes;
      this._rapidCommit = value.rapidCommit;
      this._topLevelStatusCode = value.topLevelStatusCode;
      this._delayAdvertiseBasedOn.internalValue = value.delayAdvertiseBasedOn;
    }
  }

  // always_add_option_dns_server - computed: false, optional: true, required: false
  private _alwaysAddOptionDnsServer?: boolean | cdktf.IResolvable; 
  public get alwaysAddOptionDnsServer() {
    return this.getBooleanAttribute('always_add_option_dns_server');
  }
  public set alwaysAddOptionDnsServer(value: boolean | cdktf.IResolvable) {
    this._alwaysAddOptionDnsServer = value;
  }
  public resetAlwaysAddOptionDnsServer() {
    this._alwaysAddOptionDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysAddOptionDnsServerInput() {
    return this._alwaysAddOptionDnsServer;
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

  // delay_advertise_delay_time - computed: false, optional: true, required: false
  private _delayAdvertiseDelayTime?: number; 
  public get delayAdvertiseDelayTime() {
    return this.getNumberAttribute('delay_advertise_delay_time');
  }
  public set delayAdvertiseDelayTime(value: number) {
    this._delayAdvertiseDelayTime = value;
  }
  public resetDelayAdvertiseDelayTime() {
    this._delayAdvertiseDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAdvertiseDelayTimeInput() {
    return this._delayAdvertiseDelayTime;
  }

  // delegated_pool - computed: false, optional: true, required: false
  private _delegatedPool?: string; 
  public get delegatedPool() {
    return this.getStringAttribute('delegated_pool');
  }
  public set delegatedPool(value: string) {
    this._delegatedPool = value;
  }
  public resetDelegatedPool() {
    this._delegatedPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPoolInput() {
    return this._delegatedPool;
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

  // multi_address_embedded_option_response - computed: false, optional: true, required: false
  private _multiAddressEmbeddedOptionResponse?: boolean | cdktf.IResolvable; 
  public get multiAddressEmbeddedOptionResponse() {
    return this.getBooleanAttribute('multi_address_embedded_option_response');
  }
  public set multiAddressEmbeddedOptionResponse(value: boolean | cdktf.IResolvable) {
    this._multiAddressEmbeddedOptionResponse = value;
  }
  public resetMultiAddressEmbeddedOptionResponse() {
    this._multiAddressEmbeddedOptionResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAddressEmbeddedOptionResponseInput() {
    return this._multiAddressEmbeddedOptionResponse;
  }

  // process_inform - computed: false, optional: true, required: false
  private _processInform?: boolean | cdktf.IResolvable; 
  public get processInform() {
    return this.getBooleanAttribute('process_inform');
  }
  public set processInform(value: boolean | cdktf.IResolvable) {
    this._processInform = value;
  }
  public resetProcessInform() {
    this._processInform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformInput() {
    return this._processInform;
  }

  // process_inform_pool - computed: false, optional: true, required: false
  private _processInformPool?: string; 
  public get processInformPool() {
    return this.getStringAttribute('process_inform_pool');
  }
  public set processInformPool(value: string) {
    this._processInformPool = value;
  }
  public resetProcessInformPool() {
    this._processInformPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInformPoolInput() {
    return this._processInformPool;
  }

  // protocol_attributes - computed: false, optional: true, required: false
  private _protocolAttributes?: string; 
  public get protocolAttributes() {
    return this.getStringAttribute('protocol_attributes');
  }
  public set protocolAttributes(value: string) {
    this._protocolAttributes = value;
  }
  public resetProtocolAttributes() {
    this._protocolAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolAttributesInput() {
    return this._protocolAttributes;
  }

  // rapid_commit - computed: false, optional: true, required: false
  private _rapidCommit?: boolean | cdktf.IResolvable; 
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }
  public set rapidCommit(value: boolean | cdktf.IResolvable) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
  }

  // top_level_status_code - computed: false, optional: true, required: false
  private _topLevelStatusCode?: boolean | cdktf.IResolvable; 
  public get topLevelStatusCode() {
    return this.getBooleanAttribute('top_level_status_code');
  }
  public set topLevelStatusCode(value: boolean | cdktf.IResolvable) {
    this._topLevelStatusCode = value;
  }
  public resetTopLevelStatusCode() {
    this._topLevelStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topLevelStatusCodeInput() {
    return this._topLevelStatusCode;
  }

  // delay_advertise_based_on - computed: false, optional: true, required: false
  private _delayAdvertiseBasedOn = new SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOnList(this, "delay_advertise_based_on", true);
  public get delayAdvertiseBasedOn() {
    return this._delayAdvertiseBasedOn;
  }
  public putDelayAdvertiseBasedOn(value: SystemServicesDhcpLocalserverGroupOverridesV6DelayAdvertiseBasedOn[] | cdktf.IResolvable) {
    this._delayAdvertiseBasedOn.internalValue = value;
  }
  public resetDelayAdvertiseBasedOn() {
    this._delayAdvertiseBasedOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAdvertiseBasedOnInput() {
    return this._delayAdvertiseBasedOn.internalValue;
  }
}
export interface SystemServicesDhcpLocalserverGroupReconfigure {
  /**
  * Number of reconfigure attempts before aborting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#attempts SystemServicesDhcpLocalserverGroup#attempts}
  */
  readonly attempts?: number;
  /**
  * Delete client on reconfiguration abort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#clear_on_abort SystemServicesDhcpLocalserverGroup#clear_on_abort}
  */
  readonly clearOnAbort?: boolean | cdktf.IResolvable;
  /**
  * Request prefix exclude option in reconfigure message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#support_option_pd_exclude SystemServicesDhcpLocalserverGroup#support_option_pd_exclude}
  */
  readonly supportOptionPdExclude?: boolean | cdktf.IResolvable;
  /**
  * Initial timeout value for retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#timeout SystemServicesDhcpLocalserverGroup#timeout}
  */
  readonly timeout?: number;
  /**
  * Reconfigure token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#token SystemServicesDhcpLocalserverGroup#token}
  */
  readonly token?: string;
  /**
  * Trigger DHCP reconfigure by radius initiated disconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#trigger_radius_disconnect SystemServicesDhcpLocalserverGroup#trigger_radius_disconnect}
  */
  readonly triggerRadiusDisconnect?: boolean | cdktf.IResolvable;
}

export function systemServicesDhcpLocalserverGroupReconfigureToTerraform(struct?: SystemServicesDhcpLocalserverGroupReconfigure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    clear_on_abort: cdktf.booleanToTerraform(struct!.clearOnAbort),
    support_option_pd_exclude: cdktf.booleanToTerraform(struct!.supportOptionPdExclude),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    token: cdktf.stringToTerraform(struct!.token),
    trigger_radius_disconnect: cdktf.booleanToTerraform(struct!.triggerRadiusDisconnect),
  }
}


export function systemServicesDhcpLocalserverGroupReconfigureToHclTerraform(struct?: SystemServicesDhcpLocalserverGroupReconfigure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_on_abort: {
      value: cdktf.booleanToHclTerraform(struct!.clearOnAbort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    support_option_pd_exclude: {
      value: cdktf.booleanToHclTerraform(struct!.supportOptionPdExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_radius_disconnect: {
      value: cdktf.booleanToHclTerraform(struct!.triggerRadiusDisconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemServicesDhcpLocalserverGroupReconfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemServicesDhcpLocalserverGroupReconfigure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._clearOnAbort !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearOnAbort = this._clearOnAbort;
    }
    if (this._supportOptionPdExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportOptionPdExclude = this._supportOptionPdExclude;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._triggerRadiusDisconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerRadiusDisconnect = this._triggerRadiusDisconnect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemServicesDhcpLocalserverGroupReconfigure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._clearOnAbort = undefined;
      this._supportOptionPdExclude = undefined;
      this._timeout = undefined;
      this._token = undefined;
      this._triggerRadiusDisconnect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._clearOnAbort = value.clearOnAbort;
      this._supportOptionPdExclude = value.supportOptionPdExclude;
      this._timeout = value.timeout;
      this._token = value.token;
      this._triggerRadiusDisconnect = value.triggerRadiusDisconnect;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // clear_on_abort - computed: false, optional: true, required: false
  private _clearOnAbort?: boolean | cdktf.IResolvable; 
  public get clearOnAbort() {
    return this.getBooleanAttribute('clear_on_abort');
  }
  public set clearOnAbort(value: boolean | cdktf.IResolvable) {
    this._clearOnAbort = value;
  }
  public resetClearOnAbort() {
    this._clearOnAbort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearOnAbortInput() {
    return this._clearOnAbort;
  }

  // support_option_pd_exclude - computed: false, optional: true, required: false
  private _supportOptionPdExclude?: boolean | cdktf.IResolvable; 
  public get supportOptionPdExclude() {
    return this.getBooleanAttribute('support_option_pd_exclude');
  }
  public set supportOptionPdExclude(value: boolean | cdktf.IResolvable) {
    this._supportOptionPdExclude = value;
  }
  public resetSupportOptionPdExclude() {
    this._supportOptionPdExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportOptionPdExcludeInput() {
    return this._supportOptionPdExclude;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // trigger_radius_disconnect - computed: false, optional: true, required: false
  private _triggerRadiusDisconnect?: boolean | cdktf.IResolvable; 
  public get triggerRadiusDisconnect() {
    return this.getBooleanAttribute('trigger_radius_disconnect');
  }
  public set triggerRadiusDisconnect(value: boolean | cdktf.IResolvable) {
    this._triggerRadiusDisconnect = value;
  }
  public resetTriggerRadiusDisconnect() {
    this._triggerRadiusDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerRadiusDisconnectInput() {
    return this._triggerRadiusDisconnect;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group junos_system_services_dhcp_localserver_group}
*/
export class SystemServicesDhcpLocalserverGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_services_dhcp_localserver_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemServicesDhcpLocalserverGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemServicesDhcpLocalserverGroup to import
  * @param importFromId The id of the existing SystemServicesDhcpLocalserverGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemServicesDhcpLocalserverGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_services_dhcp_localserver_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_services_dhcp_localserver_group junos_system_services_dhcp_localserver_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemServicesDhcpLocalserverGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SystemServicesDhcpLocalserverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_services_dhcp_localserver_group',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
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
    this._authenticationPassword = config.authenticationPassword;
    this._dynamicProfile = config.dynamicProfile;
    this._dynamicProfileAggregateClients = config.dynamicProfileAggregateClients;
    this._dynamicProfileAggregateClientsAction = config.dynamicProfileAggregateClientsAction;
    this._dynamicProfileUsePrimary = config.dynamicProfileUsePrimary;
    this._livenessDetectionFailureAction = config.livenessDetectionFailureAction;
    this._name = config.name;
    this._reauthenticateLeaseRenewal = config.reauthenticateLeaseRenewal;
    this._reauthenticateRemoteIdMismatch = config.reauthenticateRemoteIdMismatch;
    this._remoteIdMismatchDisconnect = config.remoteIdMismatchDisconnect;
    this._routeSuppressionAccess = config.routeSuppressionAccess;
    this._routeSuppressionAccessInternal = config.routeSuppressionAccessInternal;
    this._routeSuppressionDestination = config.routeSuppressionDestination;
    this._routingInstance = config.routingInstance;
    this._serviceProfile = config.serviceProfile;
    this._shortCycleProtectionLockoutMaxTime = config.shortCycleProtectionLockoutMaxTime;
    this._shortCycleProtectionLockoutMinTime = config.shortCycleProtectionLockoutMinTime;
    this._version = config.version;
    this._authenticationUsernameInclude.internalValue = config.authenticationUsernameInclude;
    this._interface.internalValue = config.interface;
    this._leaseTimeValidation.internalValue = config.leaseTimeValidation;
    this._livenessDetectionMethodBfd.internalValue = config.livenessDetectionMethodBfd;
    this._livenessDetectionMethodLayer2.internalValue = config.livenessDetectionMethodLayer2;
    this._overridesV4.internalValue = config.overridesV4;
    this._overridesV6.internalValue = config.overridesV6;
    this._reconfigure.internalValue = config.reconfigure;
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

  // reauthenticate_lease_renewal - computed: false, optional: true, required: false
  private _reauthenticateLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get reauthenticateLeaseRenewal() {
    return this.getBooleanAttribute('reauthenticate_lease_renewal');
  }
  public set reauthenticateLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._reauthenticateLeaseRenewal = value;
  }
  public resetReauthenticateLeaseRenewal() {
    this._reauthenticateLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthenticateLeaseRenewalInput() {
    return this._reauthenticateLeaseRenewal;
  }

  // reauthenticate_remote_id_mismatch - computed: false, optional: true, required: false
  private _reauthenticateRemoteIdMismatch?: boolean | cdktf.IResolvable; 
  public get reauthenticateRemoteIdMismatch() {
    return this.getBooleanAttribute('reauthenticate_remote_id_mismatch');
  }
  public set reauthenticateRemoteIdMismatch(value: boolean | cdktf.IResolvable) {
    this._reauthenticateRemoteIdMismatch = value;
  }
  public resetReauthenticateRemoteIdMismatch() {
    this._reauthenticateRemoteIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthenticateRemoteIdMismatchInput() {
    return this._reauthenticateRemoteIdMismatch;
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
  private _authenticationUsernameInclude = new SystemServicesDhcpLocalserverGroupAuthenticationUsernameIncludeOutputReference(this, "authentication_username_include");
  public get authenticationUsernameInclude() {
    return this._authenticationUsernameInclude;
  }
  public putAuthenticationUsernameInclude(value: SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude) {
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
  private _interface = new SystemServicesDhcpLocalserverGroupInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SystemServicesDhcpLocalserverGroupInterface[] | cdktf.IResolvable) {
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
  private _leaseTimeValidation = new SystemServicesDhcpLocalserverGroupLeaseTimeValidationOutputReference(this, "lease_time_validation");
  public get leaseTimeValidation() {
    return this._leaseTimeValidation;
  }
  public putLeaseTimeValidation(value: SystemServicesDhcpLocalserverGroupLeaseTimeValidation) {
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
  private _livenessDetectionMethodBfd = new SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfdOutputReference(this, "liveness_detection_method_bfd");
  public get livenessDetectionMethodBfd() {
    return this._livenessDetectionMethodBfd;
  }
  public putLivenessDetectionMethodBfd(value: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd) {
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
  private _livenessDetectionMethodLayer2 = new SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2OutputReference(this, "liveness_detection_method_layer2");
  public get livenessDetectionMethodLayer2() {
    return this._livenessDetectionMethodLayer2;
  }
  public putLivenessDetectionMethodLayer2(value: SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2) {
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
  private _overridesV4 = new SystemServicesDhcpLocalserverGroupOverridesV4OutputReference(this, "overrides_v4");
  public get overridesV4() {
    return this._overridesV4;
  }
  public putOverridesV4(value: SystemServicesDhcpLocalserverGroupOverridesV4) {
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
  private _overridesV6 = new SystemServicesDhcpLocalserverGroupOverridesV6OutputReference(this, "overrides_v6");
  public get overridesV6() {
    return this._overridesV6;
  }
  public putOverridesV6(value: SystemServicesDhcpLocalserverGroupOverridesV6) {
    this._overridesV6.internalValue = value;
  }
  public resetOverridesV6() {
    this._overridesV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesV6Input() {
    return this._overridesV6.internalValue;
  }

  // reconfigure - computed: false, optional: true, required: false
  private _reconfigure = new SystemServicesDhcpLocalserverGroupReconfigureOutputReference(this, "reconfigure");
  public get reconfigure() {
    return this._reconfigure;
  }
  public putReconfigure(value: SystemServicesDhcpLocalserverGroupReconfigure) {
    this._reconfigure.internalValue = value;
  }
  public resetReconfigure() {
    this._reconfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconfigureInput() {
    return this._reconfigure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_profile: cdktf.stringToTerraform(this._accessProfile),
      authentication_password: cdktf.stringToTerraform(this._authenticationPassword),
      dynamic_profile: cdktf.stringToTerraform(this._dynamicProfile),
      dynamic_profile_aggregate_clients: cdktf.booleanToTerraform(this._dynamicProfileAggregateClients),
      dynamic_profile_aggregate_clients_action: cdktf.stringToTerraform(this._dynamicProfileAggregateClientsAction),
      dynamic_profile_use_primary: cdktf.stringToTerraform(this._dynamicProfileUsePrimary),
      liveness_detection_failure_action: cdktf.stringToTerraform(this._livenessDetectionFailureAction),
      name: cdktf.stringToTerraform(this._name),
      reauthenticate_lease_renewal: cdktf.booleanToTerraform(this._reauthenticateLeaseRenewal),
      reauthenticate_remote_id_mismatch: cdktf.booleanToTerraform(this._reauthenticateRemoteIdMismatch),
      remote_id_mismatch_disconnect: cdktf.booleanToTerraform(this._remoteIdMismatchDisconnect),
      route_suppression_access: cdktf.booleanToTerraform(this._routeSuppressionAccess),
      route_suppression_access_internal: cdktf.booleanToTerraform(this._routeSuppressionAccessInternal),
      route_suppression_destination: cdktf.booleanToTerraform(this._routeSuppressionDestination),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      service_profile: cdktf.stringToTerraform(this._serviceProfile),
      short_cycle_protection_lockout_max_time: cdktf.numberToTerraform(this._shortCycleProtectionLockoutMaxTime),
      short_cycle_protection_lockout_min_time: cdktf.numberToTerraform(this._shortCycleProtectionLockoutMinTime),
      version: cdktf.stringToTerraform(this._version),
      authentication_username_include: systemServicesDhcpLocalserverGroupAuthenticationUsernameIncludeToTerraform(this._authenticationUsernameInclude.internalValue),
      interface: cdktf.listMapper(systemServicesDhcpLocalserverGroupInterfaceToTerraform, true)(this._interface.internalValue),
      lease_time_validation: systemServicesDhcpLocalserverGroupLeaseTimeValidationToTerraform(this._leaseTimeValidation.internalValue),
      liveness_detection_method_bfd: systemServicesDhcpLocalserverGroupLivenessDetectionMethodBfdToTerraform(this._livenessDetectionMethodBfd.internalValue),
      liveness_detection_method_layer2: systemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2ToTerraform(this._livenessDetectionMethodLayer2.internalValue),
      overrides_v4: systemServicesDhcpLocalserverGroupOverridesV4ToTerraform(this._overridesV4.internalValue),
      overrides_v6: systemServicesDhcpLocalserverGroupOverridesV6ToTerraform(this._overridesV6.internalValue),
      reconfigure: systemServicesDhcpLocalserverGroupReconfigureToTerraform(this._reconfigure.internalValue),
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
      authentication_password: {
        value: cdktf.stringToHclTerraform(this._authenticationPassword),
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
      liveness_detection_failure_action: {
        value: cdktf.stringToHclTerraform(this._livenessDetectionFailureAction),
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
      reauthenticate_lease_renewal: {
        value: cdktf.booleanToHclTerraform(this._reauthenticateLeaseRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reauthenticate_remote_id_mismatch: {
        value: cdktf.booleanToHclTerraform(this._reauthenticateRemoteIdMismatch),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_username_include: {
        value: systemServicesDhcpLocalserverGroupAuthenticationUsernameIncludeToHclTerraform(this._authenticationUsernameInclude.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServicesDhcpLocalserverGroupAuthenticationUsernameInclude",
      },
      interface: {
        value: cdktf.listMapperHcl(systemServicesDhcpLocalserverGroupInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemServicesDhcpLocalserverGroupInterfaceList",
      },
      lease_time_validation: {
        value: systemServicesDhcpLocalserverGroupLeaseTimeValidationToHclTerraform(this._leaseTimeValidation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServicesDhcpLocalserverGroupLeaseTimeValidation",
      },
      liveness_detection_method_bfd: {
        value: systemServicesDhcpLocalserverGroupLivenessDetectionMethodBfdToHclTerraform(this._livenessDetectionMethodBfd.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServicesDhcpLocalserverGroupLivenessDetectionMethodBfd",
      },
      liveness_detection_method_layer2: {
        value: systemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2ToHclTerraform(this._livenessDetectionMethodLayer2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServicesDhcpLocalserverGroupLivenessDetectionMethodLayer2",
      },
      overrides_v4: {
        value: systemServicesDhcpLocalserverGroupOverridesV4ToHclTerraform(this._overridesV4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServicesDhcpLocalserverGroupOverridesV4",
      },
      overrides_v6: {
        value: systemServicesDhcpLocalserverGroupOverridesV6ToHclTerraform(this._overridesV6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServicesDhcpLocalserverGroupOverridesV6",
      },
      reconfigure: {
        value: systemServicesDhcpLocalserverGroupReconfigureToHclTerraform(this._reconfigure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemServicesDhcpLocalserverGroupReconfigure",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
