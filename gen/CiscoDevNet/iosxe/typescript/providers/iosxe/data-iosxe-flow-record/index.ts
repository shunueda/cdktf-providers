// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/flow_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeFlowRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/flow_record#device DataIosxeFlowRecord#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/flow_record#name DataIosxeFlowRecord#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/flow_record iosxe_flow_record}
*/
export class DataIosxeFlowRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_flow_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeFlowRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeFlowRecord to import
  * @param importFromId The id of the existing DataIosxeFlowRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/flow_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeFlowRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_flow_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.4/docs/data-sources/flow_record iosxe_flow_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeFlowRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeFlowRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_flow_record',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.4',
        providerVersionConstraint: '0.14.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collect_connection_initiator - computed: true, optional: false, required: false
  public get collectConnectionInitiator() {
    return this.getBooleanAttribute('collect_connection_initiator');
  }

  // collect_connection_new_connections - computed: true, optional: false, required: false
  public get collectConnectionNewConnections() {
    return this.getBooleanAttribute('collect_connection_new_connections');
  }

  // collect_connection_server_counter_bytes_network_long - computed: true, optional: false, required: false
  public get collectConnectionServerCounterBytesNetworkLong() {
    return this.getBooleanAttribute('collect_connection_server_counter_bytes_network_long');
  }

  // collect_connection_server_counter_packets_long - computed: true, optional: false, required: false
  public get collectConnectionServerCounterPacketsLong() {
    return this.getBooleanAttribute('collect_connection_server_counter_packets_long');
  }

  // collect_counter_bytes_long - computed: true, optional: false, required: false
  public get collectCounterBytesLong() {
    return this.getBooleanAttribute('collect_counter_bytes_long');
  }

  // collect_counter_packets_long - computed: true, optional: false, required: false
  public get collectCounterPacketsLong() {
    return this.getBooleanAttribute('collect_counter_packets_long');
  }

  // collect_datalink_mac_source_address_input - computed: true, optional: false, required: false
  public get collectDatalinkMacSourceAddressInput() {
    return this.getBooleanAttribute('collect_datalink_mac_source_address_input');
  }

  // collect_flow_direction - computed: true, optional: false, required: false
  public get collectFlowDirection() {
    return this.getBooleanAttribute('collect_flow_direction');
  }

  // collect_interface_input - computed: true, optional: false, required: false
  public get collectInterfaceInput() {
    return this.getBooleanAttribute('collect_interface_input');
  }

  // collect_interface_output - computed: true, optional: false, required: false
  public get collectInterfaceOutput() {
    return this.getBooleanAttribute('collect_interface_output');
  }

  // collect_timestamp_absolute_first - computed: true, optional: false, required: false
  public get collectTimestampAbsoluteFirst() {
    return this.getBooleanAttribute('collect_timestamp_absolute_first');
  }

  // collect_timestamp_absolute_last - computed: true, optional: false, required: false
  public get collectTimestampAbsoluteLast() {
    return this.getBooleanAttribute('collect_timestamp_absolute_last');
  }

  // collect_transport_tcp_flags - computed: true, optional: false, required: false
  public get collectTransportTcpFlags() {
    return this.getBooleanAttribute('collect_transport_tcp_flags');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // match_application_name - computed: true, optional: false, required: false
  public get matchApplicationName() {
    return this.getBooleanAttribute('match_application_name');
  }

  // match_connection_client_ipv4_address - computed: true, optional: false, required: false
  public get matchConnectionClientIpv4Address() {
    return this.getBooleanAttribute('match_connection_client_ipv4_address');
  }

  // match_connection_client_ipv6_address - computed: true, optional: false, required: false
  public get matchConnectionClientIpv6Address() {
    return this.getBooleanAttribute('match_connection_client_ipv6_address');
  }

  // match_connection_server_ipv4_address - computed: true, optional: false, required: false
  public get matchConnectionServerIpv4Address() {
    return this.getBooleanAttribute('match_connection_server_ipv4_address');
  }

  // match_connection_server_ipv6_address - computed: true, optional: false, required: false
  public get matchConnectionServerIpv6Address() {
    return this.getBooleanAttribute('match_connection_server_ipv6_address');
  }

  // match_connection_server_transport_port - computed: true, optional: false, required: false
  public get matchConnectionServerTransportPort() {
    return this.getBooleanAttribute('match_connection_server_transport_port');
  }

  // match_datalink_destination_vlan_id - computed: true, optional: false, required: false
  public get matchDatalinkDestinationVlanId() {
    return this.getBooleanAttribute('match_datalink_destination_vlan_id');
  }

  // match_datalink_mac_destination_address_input - computed: true, optional: false, required: false
  public get matchDatalinkMacDestinationAddressInput() {
    return this.getBooleanAttribute('match_datalink_mac_destination_address_input');
  }

  // match_datalink_mac_source_address_input - computed: true, optional: false, required: false
  public get matchDatalinkMacSourceAddressInput() {
    return this.getBooleanAttribute('match_datalink_mac_source_address_input');
  }

  // match_datalink_source_vlan_id - computed: true, optional: false, required: false
  public get matchDatalinkSourceVlanId() {
    return this.getBooleanAttribute('match_datalink_source_vlan_id');
  }

  // match_datalink_vlan - computed: true, optional: false, required: false
  public get matchDatalinkVlan() {
    return this.getStringAttribute('match_datalink_vlan');
  }

  // match_flow_direction - computed: true, optional: false, required: false
  public get matchFlowDirection() {
    return this.getBooleanAttribute('match_flow_direction');
  }

  // match_flow_observation_point - computed: true, optional: false, required: false
  public get matchFlowObservationPoint() {
    return this.getBooleanAttribute('match_flow_observation_point');
  }

  // match_interface_input - computed: true, optional: false, required: false
  public get matchInterfaceInput() {
    return this.getBooleanAttribute('match_interface_input');
  }

  // match_ipv4_destination_address - computed: true, optional: false, required: false
  public get matchIpv4DestinationAddress() {
    return this.getBooleanAttribute('match_ipv4_destination_address');
  }

  // match_ipv4_protocol - computed: true, optional: false, required: false
  public get matchIpv4Protocol() {
    return this.getBooleanAttribute('match_ipv4_protocol');
  }

  // match_ipv4_source_address - computed: true, optional: false, required: false
  public get matchIpv4SourceAddress() {
    return this.getBooleanAttribute('match_ipv4_source_address');
  }

  // match_ipv4_tos - computed: true, optional: false, required: false
  public get matchIpv4Tos() {
    return this.getBooleanAttribute('match_ipv4_tos');
  }

  // match_ipv4_ttl - computed: true, optional: false, required: false
  public get matchIpv4Ttl() {
    return this.getBooleanAttribute('match_ipv4_ttl');
  }

  // match_ipv4_version - computed: true, optional: false, required: false
  public get matchIpv4Version() {
    return this.getBooleanAttribute('match_ipv4_version');
  }

  // match_ipv6_destination_address - computed: true, optional: false, required: false
  public get matchIpv6DestinationAddress() {
    return this.getBooleanAttribute('match_ipv6_destination_address');
  }

  // match_ipv6_protocol - computed: true, optional: false, required: false
  public get matchIpv6Protocol() {
    return this.getBooleanAttribute('match_ipv6_protocol');
  }

  // match_ipv6_source_address - computed: true, optional: false, required: false
  public get matchIpv6SourceAddress() {
    return this.getBooleanAttribute('match_ipv6_source_address');
  }

  // match_ipv6_version - computed: true, optional: false, required: false
  public get matchIpv6Version() {
    return this.getBooleanAttribute('match_ipv6_version');
  }

  // match_routing_vrf_input - computed: true, optional: false, required: false
  public get matchRoutingVrfInput() {
    return this.getBooleanAttribute('match_routing_vrf_input');
  }

  // match_transport_destination_port - computed: true, optional: false, required: false
  public get matchTransportDestinationPort() {
    return this.getBooleanAttribute('match_transport_destination_port');
  }

  // match_transport_source_port - computed: true, optional: false, required: false
  public get matchTransportSourcePort() {
    return this.getBooleanAttribute('match_transport_source_port');
  }

  // match_vxlan_vnid - computed: true, optional: false, required: false
  public get matchVxlanVnid() {
    return this.getBooleanAttribute('match_vxlan_vnid');
  }

  // match_vxlan_vtep_input - computed: true, optional: false, required: false
  public get matchVxlanVtepInput() {
    return this.getBooleanAttribute('match_vxlan_vtep_input');
  }

  // match_vxlan_vtep_output - computed: true, optional: false, required: false
  public get matchVxlanVtepOutput() {
    return this.getBooleanAttribute('match_vxlan_vtep_output');
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
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
