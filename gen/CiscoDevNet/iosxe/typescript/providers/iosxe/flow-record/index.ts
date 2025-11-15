// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The direction of the flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_connection_initiator FlowRecord#collect_connection_initiator}
  */
  readonly collectConnectionInitiator?: boolean | cdktf.IResolvable;
  /**
  * The number of connection initiations observed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_connection_new_connections FlowRecord#collect_connection_new_connections}
  */
  readonly collectConnectionNewConnections?: boolean | cdktf.IResolvable;
  /**
  * Total number of bytes transmitted by the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_connection_server_counter_bytes_network_long FlowRecord#collect_connection_server_counter_bytes_network_long}
  */
  readonly collectConnectionServerCounterBytesNetworkLong?: boolean | cdktf.IResolvable;
  /**
  * 64 bits counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_connection_server_counter_packets_long FlowRecord#collect_connection_server_counter_packets_long}
  */
  readonly collectConnectionServerCounterPacketsLong?: boolean | cdktf.IResolvable;
  /**
  * Total number of bytes (64 bit counter)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_counter_bytes_long FlowRecord#collect_counter_bytes_long}
  */
  readonly collectCounterBytesLong?: boolean | cdktf.IResolvable;
  /**
  * Total number of packets (64 bit counter)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_counter_packets_long FlowRecord#collect_counter_packets_long}
  */
  readonly collectCounterPacketsLong?: boolean | cdktf.IResolvable;
  /**
  * Source MAC address from packet at input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_datalink_mac_source_address_input FlowRecord#collect_datalink_mac_source_address_input}
  */
  readonly collectDatalinkMacSourceAddressInput?: boolean | cdktf.IResolvable;
  /**
  * Direction the flow was monitored in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_flow_direction FlowRecord#collect_flow_direction}
  */
  readonly collectFlowDirection?: boolean | cdktf.IResolvable;
  /**
  * The output interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_interface_output FlowRecord#collect_interface_output}
  */
  readonly collectInterfaceOutput?: boolean | cdktf.IResolvable;
  /**
  * Absolute time the first packet was seen (milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_timestamp_absolute_first FlowRecord#collect_timestamp_absolute_first}
  */
  readonly collectTimestampAbsoluteFirst?: boolean | cdktf.IResolvable;
  /**
  * Absolute time the most recent packet was seen (milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_timestamp_absolute_last FlowRecord#collect_timestamp_absolute_last}
  */
  readonly collectTimestampAbsoluteLast?: boolean | cdktf.IResolvable;
  /**
  * TCP flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#collect_transport_tcp_flags FlowRecord#collect_transport_tcp_flags}
  */
  readonly collectTransportTcpFlags?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#delete_mode FlowRecord#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Provide a description for this Flow Record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#description FlowRecord#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#device FlowRecord#device}
  */
  readonly device?: string;
  /**
  * Application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_application_name FlowRecord#match_application_name}
  */
  readonly matchApplicationName?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address of the flow initiator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_connection_client_ipv4_address FlowRecord#match_connection_client_ipv4_address}
  */
  readonly matchConnectionClientIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * IPv6 address of the flow initiator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_connection_client_ipv6_address FlowRecord#match_connection_client_ipv6_address}
  */
  readonly matchConnectionClientIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * IPv4 address of the flow responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_connection_server_ipv4_address FlowRecord#match_connection_server_ipv4_address}
  */
  readonly matchConnectionServerIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * IPv6 address of the flow responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_connection_server_ipv6_address FlowRecord#match_connection_server_ipv6_address}
  */
  readonly matchConnectionServerIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Transport port of the flow responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_connection_server_transport_port FlowRecord#match_connection_server_transport_port}
  */
  readonly matchConnectionServerTransportPort?: boolean | cdktf.IResolvable;
  /**
  * Match destination VLAN ID, available on router platforms (C8K, CSR1K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_datalink_destination_vlan_id FlowRecord#match_datalink_destination_vlan_id}
  */
  readonly matchDatalinkDestinationVlanId?: boolean | cdktf.IResolvable;
  /**
  * Destination MAC address from packet at input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_datalink_mac_destination_address_input FlowRecord#match_datalink_mac_destination_address_input}
  */
  readonly matchDatalinkMacDestinationAddressInput?: boolean | cdktf.IResolvable;
  /**
  * Source MAC address from packet at input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_datalink_mac_source_address_input FlowRecord#match_datalink_mac_source_address_input}
  */
  readonly matchDatalinkMacSourceAddressInput?: boolean | cdktf.IResolvable;
  /**
  * Match source VLAN ID, available on router platforms (C8K, CSR1K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_datalink_source_vlan_id FlowRecord#match_datalink_source_vlan_id}
  */
  readonly matchDatalinkSourceVlanId?: boolean | cdktf.IResolvable;
  /**
  * Match VLAN input/output, available on switch platforms (C9K)
  *   - Choices: `input`, `output`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_datalink_vlan FlowRecord#match_datalink_vlan}
  */
  readonly matchDatalinkVlan?: string;
  /**
  * Direction the flow was monitored in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_flow_direction FlowRecord#match_flow_direction}
  */
  readonly matchFlowDirection?: boolean | cdktf.IResolvable;
  /**
  * Observation point ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_flow_observation_point FlowRecord#match_flow_observation_point}
  */
  readonly matchFlowObservationPoint?: boolean | cdktf.IResolvable;
  /**
  * The input interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_interface_input FlowRecord#match_interface_input}
  */
  readonly matchInterfaceInput?: boolean | cdktf.IResolvable;
  /**
  * IPv4 destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv4_destination_address FlowRecord#match_ipv4_destination_address}
  */
  readonly matchIpv4DestinationAddress?: boolean | cdktf.IResolvable;
  /**
  * IPv4 protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv4_protocol FlowRecord#match_ipv4_protocol}
  */
  readonly matchIpv4Protocol?: boolean | cdktf.IResolvable;
  /**
  * IPv4 source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv4_source_address FlowRecord#match_ipv4_source_address}
  */
  readonly matchIpv4SourceAddress?: boolean | cdktf.IResolvable;
  /**
  * IPv4 type of service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv4_tos FlowRecord#match_ipv4_tos}
  */
  readonly matchIpv4Tos?: boolean | cdktf.IResolvable;
  /**
  * IPv4 TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv4_ttl FlowRecord#match_ipv4_ttl}
  */
  readonly matchIpv4Ttl?: boolean | cdktf.IResolvable;
  /**
  * IP version from IPv4 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv4_version FlowRecord#match_ipv4_version}
  */
  readonly matchIpv4Version?: boolean | cdktf.IResolvable;
  /**
  * IPv6 destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv6_destination_address FlowRecord#match_ipv6_destination_address}
  */
  readonly matchIpv6DestinationAddress?: boolean | cdktf.IResolvable;
  /**
  * IPv6 payload protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv6_protocol FlowRecord#match_ipv6_protocol}
  */
  readonly matchIpv6Protocol?: boolean | cdktf.IResolvable;
  /**
  * IPv6 source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv6_source_address FlowRecord#match_ipv6_source_address}
  */
  readonly matchIpv6SourceAddress?: boolean | cdktf.IResolvable;
  /**
  * IP version from IPv6 header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_ipv6_version FlowRecord#match_ipv6_version}
  */
  readonly matchIpv6Version?: boolean | cdktf.IResolvable;
  /**
  * Transport destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_transport_destination_port FlowRecord#match_transport_destination_port}
  */
  readonly matchTransportDestinationPort?: boolean | cdktf.IResolvable;
  /**
  * Transport source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#match_transport_source_port FlowRecord#match_transport_source_port}
  */
  readonly matchTransportSourcePort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#name FlowRecord#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record iosxe_flow_record}
*/
export class FlowRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_flow_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowRecord to import
  * @param importFromId The id of the existing FlowRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_flow_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/flow_record iosxe_flow_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowRecordConfig
  */
  public constructor(scope: Construct, id: string, config: FlowRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_flow_record',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectConnectionInitiator = config.collectConnectionInitiator;
    this._collectConnectionNewConnections = config.collectConnectionNewConnections;
    this._collectConnectionServerCounterBytesNetworkLong = config.collectConnectionServerCounterBytesNetworkLong;
    this._collectConnectionServerCounterPacketsLong = config.collectConnectionServerCounterPacketsLong;
    this._collectCounterBytesLong = config.collectCounterBytesLong;
    this._collectCounterPacketsLong = config.collectCounterPacketsLong;
    this._collectDatalinkMacSourceAddressInput = config.collectDatalinkMacSourceAddressInput;
    this._collectFlowDirection = config.collectFlowDirection;
    this._collectInterfaceOutput = config.collectInterfaceOutput;
    this._collectTimestampAbsoluteFirst = config.collectTimestampAbsoluteFirst;
    this._collectTimestampAbsoluteLast = config.collectTimestampAbsoluteLast;
    this._collectTransportTcpFlags = config.collectTransportTcpFlags;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._matchApplicationName = config.matchApplicationName;
    this._matchConnectionClientIpv4Address = config.matchConnectionClientIpv4Address;
    this._matchConnectionClientIpv6Address = config.matchConnectionClientIpv6Address;
    this._matchConnectionServerIpv4Address = config.matchConnectionServerIpv4Address;
    this._matchConnectionServerIpv6Address = config.matchConnectionServerIpv6Address;
    this._matchConnectionServerTransportPort = config.matchConnectionServerTransportPort;
    this._matchDatalinkDestinationVlanId = config.matchDatalinkDestinationVlanId;
    this._matchDatalinkMacDestinationAddressInput = config.matchDatalinkMacDestinationAddressInput;
    this._matchDatalinkMacSourceAddressInput = config.matchDatalinkMacSourceAddressInput;
    this._matchDatalinkSourceVlanId = config.matchDatalinkSourceVlanId;
    this._matchDatalinkVlan = config.matchDatalinkVlan;
    this._matchFlowDirection = config.matchFlowDirection;
    this._matchFlowObservationPoint = config.matchFlowObservationPoint;
    this._matchInterfaceInput = config.matchInterfaceInput;
    this._matchIpv4DestinationAddress = config.matchIpv4DestinationAddress;
    this._matchIpv4Protocol = config.matchIpv4Protocol;
    this._matchIpv4SourceAddress = config.matchIpv4SourceAddress;
    this._matchIpv4Tos = config.matchIpv4Tos;
    this._matchIpv4Ttl = config.matchIpv4Ttl;
    this._matchIpv4Version = config.matchIpv4Version;
    this._matchIpv6DestinationAddress = config.matchIpv6DestinationAddress;
    this._matchIpv6Protocol = config.matchIpv6Protocol;
    this._matchIpv6SourceAddress = config.matchIpv6SourceAddress;
    this._matchIpv6Version = config.matchIpv6Version;
    this._matchTransportDestinationPort = config.matchTransportDestinationPort;
    this._matchTransportSourcePort = config.matchTransportSourcePort;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collect_connection_initiator - computed: false, optional: true, required: false
  private _collectConnectionInitiator?: boolean | cdktf.IResolvable; 
  public get collectConnectionInitiator() {
    return this.getBooleanAttribute('collect_connection_initiator');
  }
  public set collectConnectionInitiator(value: boolean | cdktf.IResolvable) {
    this._collectConnectionInitiator = value;
  }
  public resetCollectConnectionInitiator() {
    this._collectConnectionInitiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectConnectionInitiatorInput() {
    return this._collectConnectionInitiator;
  }

  // collect_connection_new_connections - computed: false, optional: true, required: false
  private _collectConnectionNewConnections?: boolean | cdktf.IResolvable; 
  public get collectConnectionNewConnections() {
    return this.getBooleanAttribute('collect_connection_new_connections');
  }
  public set collectConnectionNewConnections(value: boolean | cdktf.IResolvable) {
    this._collectConnectionNewConnections = value;
  }
  public resetCollectConnectionNewConnections() {
    this._collectConnectionNewConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectConnectionNewConnectionsInput() {
    return this._collectConnectionNewConnections;
  }

  // collect_connection_server_counter_bytes_network_long - computed: false, optional: true, required: false
  private _collectConnectionServerCounterBytesNetworkLong?: boolean | cdktf.IResolvable; 
  public get collectConnectionServerCounterBytesNetworkLong() {
    return this.getBooleanAttribute('collect_connection_server_counter_bytes_network_long');
  }
  public set collectConnectionServerCounterBytesNetworkLong(value: boolean | cdktf.IResolvable) {
    this._collectConnectionServerCounterBytesNetworkLong = value;
  }
  public resetCollectConnectionServerCounterBytesNetworkLong() {
    this._collectConnectionServerCounterBytesNetworkLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectConnectionServerCounterBytesNetworkLongInput() {
    return this._collectConnectionServerCounterBytesNetworkLong;
  }

  // collect_connection_server_counter_packets_long - computed: false, optional: true, required: false
  private _collectConnectionServerCounterPacketsLong?: boolean | cdktf.IResolvable; 
  public get collectConnectionServerCounterPacketsLong() {
    return this.getBooleanAttribute('collect_connection_server_counter_packets_long');
  }
  public set collectConnectionServerCounterPacketsLong(value: boolean | cdktf.IResolvable) {
    this._collectConnectionServerCounterPacketsLong = value;
  }
  public resetCollectConnectionServerCounterPacketsLong() {
    this._collectConnectionServerCounterPacketsLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectConnectionServerCounterPacketsLongInput() {
    return this._collectConnectionServerCounterPacketsLong;
  }

  // collect_counter_bytes_long - computed: false, optional: true, required: false
  private _collectCounterBytesLong?: boolean | cdktf.IResolvable; 
  public get collectCounterBytesLong() {
    return this.getBooleanAttribute('collect_counter_bytes_long');
  }
  public set collectCounterBytesLong(value: boolean | cdktf.IResolvable) {
    this._collectCounterBytesLong = value;
  }
  public resetCollectCounterBytesLong() {
    this._collectCounterBytesLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCounterBytesLongInput() {
    return this._collectCounterBytesLong;
  }

  // collect_counter_packets_long - computed: false, optional: true, required: false
  private _collectCounterPacketsLong?: boolean | cdktf.IResolvable; 
  public get collectCounterPacketsLong() {
    return this.getBooleanAttribute('collect_counter_packets_long');
  }
  public set collectCounterPacketsLong(value: boolean | cdktf.IResolvable) {
    this._collectCounterPacketsLong = value;
  }
  public resetCollectCounterPacketsLong() {
    this._collectCounterPacketsLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectCounterPacketsLongInput() {
    return this._collectCounterPacketsLong;
  }

  // collect_datalink_mac_source_address_input - computed: false, optional: true, required: false
  private _collectDatalinkMacSourceAddressInput?: boolean | cdktf.IResolvable; 
  public get collectDatalinkMacSourceAddressInput() {
    return this.getBooleanAttribute('collect_datalink_mac_source_address_input');
  }
  public set collectDatalinkMacSourceAddressInput(value: boolean | cdktf.IResolvable) {
    this._collectDatalinkMacSourceAddressInput = value;
  }
  public resetCollectDatalinkMacSourceAddressInput() {
    this._collectDatalinkMacSourceAddressInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectDatalinkMacSourceAddressInputInput() {
    return this._collectDatalinkMacSourceAddressInput;
  }

  // collect_flow_direction - computed: false, optional: true, required: false
  private _collectFlowDirection?: boolean | cdktf.IResolvable; 
  public get collectFlowDirection() {
    return this.getBooleanAttribute('collect_flow_direction');
  }
  public set collectFlowDirection(value: boolean | cdktf.IResolvable) {
    this._collectFlowDirection = value;
  }
  public resetCollectFlowDirection() {
    this._collectFlowDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectFlowDirectionInput() {
    return this._collectFlowDirection;
  }

  // collect_interface_output - computed: false, optional: true, required: false
  private _collectInterfaceOutput?: boolean | cdktf.IResolvable; 
  public get collectInterfaceOutput() {
    return this.getBooleanAttribute('collect_interface_output');
  }
  public set collectInterfaceOutput(value: boolean | cdktf.IResolvable) {
    this._collectInterfaceOutput = value;
  }
  public resetCollectInterfaceOutput() {
    this._collectInterfaceOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectInterfaceOutputInput() {
    return this._collectInterfaceOutput;
  }

  // collect_timestamp_absolute_first - computed: false, optional: true, required: false
  private _collectTimestampAbsoluteFirst?: boolean | cdktf.IResolvable; 
  public get collectTimestampAbsoluteFirst() {
    return this.getBooleanAttribute('collect_timestamp_absolute_first');
  }
  public set collectTimestampAbsoluteFirst(value: boolean | cdktf.IResolvable) {
    this._collectTimestampAbsoluteFirst = value;
  }
  public resetCollectTimestampAbsoluteFirst() {
    this._collectTimestampAbsoluteFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectTimestampAbsoluteFirstInput() {
    return this._collectTimestampAbsoluteFirst;
  }

  // collect_timestamp_absolute_last - computed: false, optional: true, required: false
  private _collectTimestampAbsoluteLast?: boolean | cdktf.IResolvable; 
  public get collectTimestampAbsoluteLast() {
    return this.getBooleanAttribute('collect_timestamp_absolute_last');
  }
  public set collectTimestampAbsoluteLast(value: boolean | cdktf.IResolvable) {
    this._collectTimestampAbsoluteLast = value;
  }
  public resetCollectTimestampAbsoluteLast() {
    this._collectTimestampAbsoluteLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectTimestampAbsoluteLastInput() {
    return this._collectTimestampAbsoluteLast;
  }

  // collect_transport_tcp_flags - computed: false, optional: true, required: false
  private _collectTransportTcpFlags?: boolean | cdktf.IResolvable; 
  public get collectTransportTcpFlags() {
    return this.getBooleanAttribute('collect_transport_tcp_flags');
  }
  public set collectTransportTcpFlags(value: boolean | cdktf.IResolvable) {
    this._collectTransportTcpFlags = value;
  }
  public resetCollectTransportTcpFlags() {
    this._collectTransportTcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectTransportTcpFlagsInput() {
    return this._collectTransportTcpFlags;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_application_name - computed: false, optional: true, required: false
  private _matchApplicationName?: boolean | cdktf.IResolvable; 
  public get matchApplicationName() {
    return this.getBooleanAttribute('match_application_name');
  }
  public set matchApplicationName(value: boolean | cdktf.IResolvable) {
    this._matchApplicationName = value;
  }
  public resetMatchApplicationName() {
    this._matchApplicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchApplicationNameInput() {
    return this._matchApplicationName;
  }

  // match_connection_client_ipv4_address - computed: false, optional: true, required: false
  private _matchConnectionClientIpv4Address?: boolean | cdktf.IResolvable; 
  public get matchConnectionClientIpv4Address() {
    return this.getBooleanAttribute('match_connection_client_ipv4_address');
  }
  public set matchConnectionClientIpv4Address(value: boolean | cdktf.IResolvable) {
    this._matchConnectionClientIpv4Address = value;
  }
  public resetMatchConnectionClientIpv4Address() {
    this._matchConnectionClientIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConnectionClientIpv4AddressInput() {
    return this._matchConnectionClientIpv4Address;
  }

  // match_connection_client_ipv6_address - computed: false, optional: true, required: false
  private _matchConnectionClientIpv6Address?: boolean | cdktf.IResolvable; 
  public get matchConnectionClientIpv6Address() {
    return this.getBooleanAttribute('match_connection_client_ipv6_address');
  }
  public set matchConnectionClientIpv6Address(value: boolean | cdktf.IResolvable) {
    this._matchConnectionClientIpv6Address = value;
  }
  public resetMatchConnectionClientIpv6Address() {
    this._matchConnectionClientIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConnectionClientIpv6AddressInput() {
    return this._matchConnectionClientIpv6Address;
  }

  // match_connection_server_ipv4_address - computed: false, optional: true, required: false
  private _matchConnectionServerIpv4Address?: boolean | cdktf.IResolvable; 
  public get matchConnectionServerIpv4Address() {
    return this.getBooleanAttribute('match_connection_server_ipv4_address');
  }
  public set matchConnectionServerIpv4Address(value: boolean | cdktf.IResolvable) {
    this._matchConnectionServerIpv4Address = value;
  }
  public resetMatchConnectionServerIpv4Address() {
    this._matchConnectionServerIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConnectionServerIpv4AddressInput() {
    return this._matchConnectionServerIpv4Address;
  }

  // match_connection_server_ipv6_address - computed: false, optional: true, required: false
  private _matchConnectionServerIpv6Address?: boolean | cdktf.IResolvable; 
  public get matchConnectionServerIpv6Address() {
    return this.getBooleanAttribute('match_connection_server_ipv6_address');
  }
  public set matchConnectionServerIpv6Address(value: boolean | cdktf.IResolvable) {
    this._matchConnectionServerIpv6Address = value;
  }
  public resetMatchConnectionServerIpv6Address() {
    this._matchConnectionServerIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConnectionServerIpv6AddressInput() {
    return this._matchConnectionServerIpv6Address;
  }

  // match_connection_server_transport_port - computed: false, optional: true, required: false
  private _matchConnectionServerTransportPort?: boolean | cdktf.IResolvable; 
  public get matchConnectionServerTransportPort() {
    return this.getBooleanAttribute('match_connection_server_transport_port');
  }
  public set matchConnectionServerTransportPort(value: boolean | cdktf.IResolvable) {
    this._matchConnectionServerTransportPort = value;
  }
  public resetMatchConnectionServerTransportPort() {
    this._matchConnectionServerTransportPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConnectionServerTransportPortInput() {
    return this._matchConnectionServerTransportPort;
  }

  // match_datalink_destination_vlan_id - computed: false, optional: true, required: false
  private _matchDatalinkDestinationVlanId?: boolean | cdktf.IResolvable; 
  public get matchDatalinkDestinationVlanId() {
    return this.getBooleanAttribute('match_datalink_destination_vlan_id');
  }
  public set matchDatalinkDestinationVlanId(value: boolean | cdktf.IResolvable) {
    this._matchDatalinkDestinationVlanId = value;
  }
  public resetMatchDatalinkDestinationVlanId() {
    this._matchDatalinkDestinationVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDatalinkDestinationVlanIdInput() {
    return this._matchDatalinkDestinationVlanId;
  }

  // match_datalink_mac_destination_address_input - computed: false, optional: true, required: false
  private _matchDatalinkMacDestinationAddressInput?: boolean | cdktf.IResolvable; 
  public get matchDatalinkMacDestinationAddressInput() {
    return this.getBooleanAttribute('match_datalink_mac_destination_address_input');
  }
  public set matchDatalinkMacDestinationAddressInput(value: boolean | cdktf.IResolvable) {
    this._matchDatalinkMacDestinationAddressInput = value;
  }
  public resetMatchDatalinkMacDestinationAddressInput() {
    this._matchDatalinkMacDestinationAddressInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDatalinkMacDestinationAddressInputInput() {
    return this._matchDatalinkMacDestinationAddressInput;
  }

  // match_datalink_mac_source_address_input - computed: false, optional: true, required: false
  private _matchDatalinkMacSourceAddressInput?: boolean | cdktf.IResolvable; 
  public get matchDatalinkMacSourceAddressInput() {
    return this.getBooleanAttribute('match_datalink_mac_source_address_input');
  }
  public set matchDatalinkMacSourceAddressInput(value: boolean | cdktf.IResolvable) {
    this._matchDatalinkMacSourceAddressInput = value;
  }
  public resetMatchDatalinkMacSourceAddressInput() {
    this._matchDatalinkMacSourceAddressInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDatalinkMacSourceAddressInputInput() {
    return this._matchDatalinkMacSourceAddressInput;
  }

  // match_datalink_source_vlan_id - computed: false, optional: true, required: false
  private _matchDatalinkSourceVlanId?: boolean | cdktf.IResolvable; 
  public get matchDatalinkSourceVlanId() {
    return this.getBooleanAttribute('match_datalink_source_vlan_id');
  }
  public set matchDatalinkSourceVlanId(value: boolean | cdktf.IResolvable) {
    this._matchDatalinkSourceVlanId = value;
  }
  public resetMatchDatalinkSourceVlanId() {
    this._matchDatalinkSourceVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDatalinkSourceVlanIdInput() {
    return this._matchDatalinkSourceVlanId;
  }

  // match_datalink_vlan - computed: false, optional: true, required: false
  private _matchDatalinkVlan?: string; 
  public get matchDatalinkVlan() {
    return this.getStringAttribute('match_datalink_vlan');
  }
  public set matchDatalinkVlan(value: string) {
    this._matchDatalinkVlan = value;
  }
  public resetMatchDatalinkVlan() {
    this._matchDatalinkVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDatalinkVlanInput() {
    return this._matchDatalinkVlan;
  }

  // match_flow_direction - computed: false, optional: true, required: false
  private _matchFlowDirection?: boolean | cdktf.IResolvable; 
  public get matchFlowDirection() {
    return this.getBooleanAttribute('match_flow_direction');
  }
  public set matchFlowDirection(value: boolean | cdktf.IResolvable) {
    this._matchFlowDirection = value;
  }
  public resetMatchFlowDirection() {
    this._matchFlowDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFlowDirectionInput() {
    return this._matchFlowDirection;
  }

  // match_flow_observation_point - computed: false, optional: true, required: false
  private _matchFlowObservationPoint?: boolean | cdktf.IResolvable; 
  public get matchFlowObservationPoint() {
    return this.getBooleanAttribute('match_flow_observation_point');
  }
  public set matchFlowObservationPoint(value: boolean | cdktf.IResolvable) {
    this._matchFlowObservationPoint = value;
  }
  public resetMatchFlowObservationPoint() {
    this._matchFlowObservationPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFlowObservationPointInput() {
    return this._matchFlowObservationPoint;
  }

  // match_interface_input - computed: false, optional: true, required: false
  private _matchInterfaceInput?: boolean | cdktf.IResolvable; 
  public get matchInterfaceInput() {
    return this.getBooleanAttribute('match_interface_input');
  }
  public set matchInterfaceInput(value: boolean | cdktf.IResolvable) {
    this._matchInterfaceInput = value;
  }
  public resetMatchInterfaceInput() {
    this._matchInterfaceInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInterfaceInputInput() {
    return this._matchInterfaceInput;
  }

  // match_ipv4_destination_address - computed: false, optional: true, required: false
  private _matchIpv4DestinationAddress?: boolean | cdktf.IResolvable; 
  public get matchIpv4DestinationAddress() {
    return this.getBooleanAttribute('match_ipv4_destination_address');
  }
  public set matchIpv4DestinationAddress(value: boolean | cdktf.IResolvable) {
    this._matchIpv4DestinationAddress = value;
  }
  public resetMatchIpv4DestinationAddress() {
    this._matchIpv4DestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv4DestinationAddressInput() {
    return this._matchIpv4DestinationAddress;
  }

  // match_ipv4_protocol - computed: false, optional: true, required: false
  private _matchIpv4Protocol?: boolean | cdktf.IResolvable; 
  public get matchIpv4Protocol() {
    return this.getBooleanAttribute('match_ipv4_protocol');
  }
  public set matchIpv4Protocol(value: boolean | cdktf.IResolvable) {
    this._matchIpv4Protocol = value;
  }
  public resetMatchIpv4Protocol() {
    this._matchIpv4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv4ProtocolInput() {
    return this._matchIpv4Protocol;
  }

  // match_ipv4_source_address - computed: false, optional: true, required: false
  private _matchIpv4SourceAddress?: boolean | cdktf.IResolvable; 
  public get matchIpv4SourceAddress() {
    return this.getBooleanAttribute('match_ipv4_source_address');
  }
  public set matchIpv4SourceAddress(value: boolean | cdktf.IResolvable) {
    this._matchIpv4SourceAddress = value;
  }
  public resetMatchIpv4SourceAddress() {
    this._matchIpv4SourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv4SourceAddressInput() {
    return this._matchIpv4SourceAddress;
  }

  // match_ipv4_tos - computed: false, optional: true, required: false
  private _matchIpv4Tos?: boolean | cdktf.IResolvable; 
  public get matchIpv4Tos() {
    return this.getBooleanAttribute('match_ipv4_tos');
  }
  public set matchIpv4Tos(value: boolean | cdktf.IResolvable) {
    this._matchIpv4Tos = value;
  }
  public resetMatchIpv4Tos() {
    this._matchIpv4Tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv4TosInput() {
    return this._matchIpv4Tos;
  }

  // match_ipv4_ttl - computed: false, optional: true, required: false
  private _matchIpv4Ttl?: boolean | cdktf.IResolvable; 
  public get matchIpv4Ttl() {
    return this.getBooleanAttribute('match_ipv4_ttl');
  }
  public set matchIpv4Ttl(value: boolean | cdktf.IResolvable) {
    this._matchIpv4Ttl = value;
  }
  public resetMatchIpv4Ttl() {
    this._matchIpv4Ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv4TtlInput() {
    return this._matchIpv4Ttl;
  }

  // match_ipv4_version - computed: false, optional: true, required: false
  private _matchIpv4Version?: boolean | cdktf.IResolvable; 
  public get matchIpv4Version() {
    return this.getBooleanAttribute('match_ipv4_version');
  }
  public set matchIpv4Version(value: boolean | cdktf.IResolvable) {
    this._matchIpv4Version = value;
  }
  public resetMatchIpv4Version() {
    this._matchIpv4Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv4VersionInput() {
    return this._matchIpv4Version;
  }

  // match_ipv6_destination_address - computed: false, optional: true, required: false
  private _matchIpv6DestinationAddress?: boolean | cdktf.IResolvable; 
  public get matchIpv6DestinationAddress() {
    return this.getBooleanAttribute('match_ipv6_destination_address');
  }
  public set matchIpv6DestinationAddress(value: boolean | cdktf.IResolvable) {
    this._matchIpv6DestinationAddress = value;
  }
  public resetMatchIpv6DestinationAddress() {
    this._matchIpv6DestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6DestinationAddressInput() {
    return this._matchIpv6DestinationAddress;
  }

  // match_ipv6_protocol - computed: false, optional: true, required: false
  private _matchIpv6Protocol?: boolean | cdktf.IResolvable; 
  public get matchIpv6Protocol() {
    return this.getBooleanAttribute('match_ipv6_protocol');
  }
  public set matchIpv6Protocol(value: boolean | cdktf.IResolvable) {
    this._matchIpv6Protocol = value;
  }
  public resetMatchIpv6Protocol() {
    this._matchIpv6Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6ProtocolInput() {
    return this._matchIpv6Protocol;
  }

  // match_ipv6_source_address - computed: false, optional: true, required: false
  private _matchIpv6SourceAddress?: boolean | cdktf.IResolvable; 
  public get matchIpv6SourceAddress() {
    return this.getBooleanAttribute('match_ipv6_source_address');
  }
  public set matchIpv6SourceAddress(value: boolean | cdktf.IResolvable) {
    this._matchIpv6SourceAddress = value;
  }
  public resetMatchIpv6SourceAddress() {
    this._matchIpv6SourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6SourceAddressInput() {
    return this._matchIpv6SourceAddress;
  }

  // match_ipv6_version - computed: false, optional: true, required: false
  private _matchIpv6Version?: boolean | cdktf.IResolvable; 
  public get matchIpv6Version() {
    return this.getBooleanAttribute('match_ipv6_version');
  }
  public set matchIpv6Version(value: boolean | cdktf.IResolvable) {
    this._matchIpv6Version = value;
  }
  public resetMatchIpv6Version() {
    this._matchIpv6Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6VersionInput() {
    return this._matchIpv6Version;
  }

  // match_transport_destination_port - computed: false, optional: true, required: false
  private _matchTransportDestinationPort?: boolean | cdktf.IResolvable; 
  public get matchTransportDestinationPort() {
    return this.getBooleanAttribute('match_transport_destination_port');
  }
  public set matchTransportDestinationPort(value: boolean | cdktf.IResolvable) {
    this._matchTransportDestinationPort = value;
  }
  public resetMatchTransportDestinationPort() {
    this._matchTransportDestinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTransportDestinationPortInput() {
    return this._matchTransportDestinationPort;
  }

  // match_transport_source_port - computed: false, optional: true, required: false
  private _matchTransportSourcePort?: boolean | cdktf.IResolvable; 
  public get matchTransportSourcePort() {
    return this.getBooleanAttribute('match_transport_source_port');
  }
  public set matchTransportSourcePort(value: boolean | cdktf.IResolvable) {
    this._matchTransportSourcePort = value;
  }
  public resetMatchTransportSourcePort() {
    this._matchTransportSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTransportSourcePortInput() {
    return this._matchTransportSourcePort;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collect_connection_initiator: cdktf.booleanToTerraform(this._collectConnectionInitiator),
      collect_connection_new_connections: cdktf.booleanToTerraform(this._collectConnectionNewConnections),
      collect_connection_server_counter_bytes_network_long: cdktf.booleanToTerraform(this._collectConnectionServerCounterBytesNetworkLong),
      collect_connection_server_counter_packets_long: cdktf.booleanToTerraform(this._collectConnectionServerCounterPacketsLong),
      collect_counter_bytes_long: cdktf.booleanToTerraform(this._collectCounterBytesLong),
      collect_counter_packets_long: cdktf.booleanToTerraform(this._collectCounterPacketsLong),
      collect_datalink_mac_source_address_input: cdktf.booleanToTerraform(this._collectDatalinkMacSourceAddressInput),
      collect_flow_direction: cdktf.booleanToTerraform(this._collectFlowDirection),
      collect_interface_output: cdktf.booleanToTerraform(this._collectInterfaceOutput),
      collect_timestamp_absolute_first: cdktf.booleanToTerraform(this._collectTimestampAbsoluteFirst),
      collect_timestamp_absolute_last: cdktf.booleanToTerraform(this._collectTimestampAbsoluteLast),
      collect_transport_tcp_flags: cdktf.booleanToTerraform(this._collectTransportTcpFlags),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      match_application_name: cdktf.booleanToTerraform(this._matchApplicationName),
      match_connection_client_ipv4_address: cdktf.booleanToTerraform(this._matchConnectionClientIpv4Address),
      match_connection_client_ipv6_address: cdktf.booleanToTerraform(this._matchConnectionClientIpv6Address),
      match_connection_server_ipv4_address: cdktf.booleanToTerraform(this._matchConnectionServerIpv4Address),
      match_connection_server_ipv6_address: cdktf.booleanToTerraform(this._matchConnectionServerIpv6Address),
      match_connection_server_transport_port: cdktf.booleanToTerraform(this._matchConnectionServerTransportPort),
      match_datalink_destination_vlan_id: cdktf.booleanToTerraform(this._matchDatalinkDestinationVlanId),
      match_datalink_mac_destination_address_input: cdktf.booleanToTerraform(this._matchDatalinkMacDestinationAddressInput),
      match_datalink_mac_source_address_input: cdktf.booleanToTerraform(this._matchDatalinkMacSourceAddressInput),
      match_datalink_source_vlan_id: cdktf.booleanToTerraform(this._matchDatalinkSourceVlanId),
      match_datalink_vlan: cdktf.stringToTerraform(this._matchDatalinkVlan),
      match_flow_direction: cdktf.booleanToTerraform(this._matchFlowDirection),
      match_flow_observation_point: cdktf.booleanToTerraform(this._matchFlowObservationPoint),
      match_interface_input: cdktf.booleanToTerraform(this._matchInterfaceInput),
      match_ipv4_destination_address: cdktf.booleanToTerraform(this._matchIpv4DestinationAddress),
      match_ipv4_protocol: cdktf.booleanToTerraform(this._matchIpv4Protocol),
      match_ipv4_source_address: cdktf.booleanToTerraform(this._matchIpv4SourceAddress),
      match_ipv4_tos: cdktf.booleanToTerraform(this._matchIpv4Tos),
      match_ipv4_ttl: cdktf.booleanToTerraform(this._matchIpv4Ttl),
      match_ipv4_version: cdktf.booleanToTerraform(this._matchIpv4Version),
      match_ipv6_destination_address: cdktf.booleanToTerraform(this._matchIpv6DestinationAddress),
      match_ipv6_protocol: cdktf.booleanToTerraform(this._matchIpv6Protocol),
      match_ipv6_source_address: cdktf.booleanToTerraform(this._matchIpv6SourceAddress),
      match_ipv6_version: cdktf.booleanToTerraform(this._matchIpv6Version),
      match_transport_destination_port: cdktf.booleanToTerraform(this._matchTransportDestinationPort),
      match_transport_source_port: cdktf.booleanToTerraform(this._matchTransportSourcePort),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collect_connection_initiator: {
        value: cdktf.booleanToHclTerraform(this._collectConnectionInitiator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_connection_new_connections: {
        value: cdktf.booleanToHclTerraform(this._collectConnectionNewConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_connection_server_counter_bytes_network_long: {
        value: cdktf.booleanToHclTerraform(this._collectConnectionServerCounterBytesNetworkLong),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_connection_server_counter_packets_long: {
        value: cdktf.booleanToHclTerraform(this._collectConnectionServerCounterPacketsLong),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_counter_bytes_long: {
        value: cdktf.booleanToHclTerraform(this._collectCounterBytesLong),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_counter_packets_long: {
        value: cdktf.booleanToHclTerraform(this._collectCounterPacketsLong),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_datalink_mac_source_address_input: {
        value: cdktf.booleanToHclTerraform(this._collectDatalinkMacSourceAddressInput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_flow_direction: {
        value: cdktf.booleanToHclTerraform(this._collectFlowDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_interface_output: {
        value: cdktf.booleanToHclTerraform(this._collectInterfaceOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_timestamp_absolute_first: {
        value: cdktf.booleanToHclTerraform(this._collectTimestampAbsoluteFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_timestamp_absolute_last: {
        value: cdktf.booleanToHclTerraform(this._collectTimestampAbsoluteLast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_transport_tcp_flags: {
        value: cdktf.booleanToHclTerraform(this._collectTransportTcpFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_application_name: {
        value: cdktf.booleanToHclTerraform(this._matchApplicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_connection_client_ipv4_address: {
        value: cdktf.booleanToHclTerraform(this._matchConnectionClientIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_connection_client_ipv6_address: {
        value: cdktf.booleanToHclTerraform(this._matchConnectionClientIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_connection_server_ipv4_address: {
        value: cdktf.booleanToHclTerraform(this._matchConnectionServerIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_connection_server_ipv6_address: {
        value: cdktf.booleanToHclTerraform(this._matchConnectionServerIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_connection_server_transport_port: {
        value: cdktf.booleanToHclTerraform(this._matchConnectionServerTransportPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_datalink_destination_vlan_id: {
        value: cdktf.booleanToHclTerraform(this._matchDatalinkDestinationVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_datalink_mac_destination_address_input: {
        value: cdktf.booleanToHclTerraform(this._matchDatalinkMacDestinationAddressInput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_datalink_mac_source_address_input: {
        value: cdktf.booleanToHclTerraform(this._matchDatalinkMacSourceAddressInput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_datalink_source_vlan_id: {
        value: cdktf.booleanToHclTerraform(this._matchDatalinkSourceVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_datalink_vlan: {
        value: cdktf.stringToHclTerraform(this._matchDatalinkVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_flow_direction: {
        value: cdktf.booleanToHclTerraform(this._matchFlowDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_flow_observation_point: {
        value: cdktf.booleanToHclTerraform(this._matchFlowObservationPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_interface_input: {
        value: cdktf.booleanToHclTerraform(this._matchInterfaceInput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv4_destination_address: {
        value: cdktf.booleanToHclTerraform(this._matchIpv4DestinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv4_protocol: {
        value: cdktf.booleanToHclTerraform(this._matchIpv4Protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv4_source_address: {
        value: cdktf.booleanToHclTerraform(this._matchIpv4SourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv4_tos: {
        value: cdktf.booleanToHclTerraform(this._matchIpv4Tos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv4_ttl: {
        value: cdktf.booleanToHclTerraform(this._matchIpv4Ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv4_version: {
        value: cdktf.booleanToHclTerraform(this._matchIpv4Version),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv6_destination_address: {
        value: cdktf.booleanToHclTerraform(this._matchIpv6DestinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv6_protocol: {
        value: cdktf.booleanToHclTerraform(this._matchIpv6Protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv6_source_address: {
        value: cdktf.booleanToHclTerraform(this._matchIpv6SourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_ipv6_version: {
        value: cdktf.booleanToHclTerraform(this._matchIpv6Version),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_transport_destination_port: {
        value: cdktf.booleanToHclTerraform(this._matchTransportDestinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_transport_source_port: {
        value: cdktf.booleanToHclTerraform(this._matchTransportSourcePort),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
