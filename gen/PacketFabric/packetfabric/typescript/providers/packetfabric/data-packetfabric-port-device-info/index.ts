// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_device_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricPortDeviceInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_device_info#id DataPacketfabricPortDeviceInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The port circuit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_device_info#port_circuit_id DataPacketfabricPortDeviceInfo#port_circuit_id}
  */
  readonly portCircuitId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_device_info packetfabric_port_device_info}
*/
export class DataPacketfabricPortDeviceInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_port_device_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricPortDeviceInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricPortDeviceInfo to import
  * @param importFromId The id of the existing DataPacketfabricPortDeviceInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_device_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricPortDeviceInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_port_device_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_device_info packetfabric_port_device_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricPortDeviceInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricPortDeviceInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_port_device_info',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3',
        providerVersionConstraint: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._portCircuitId = config.portCircuitId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjacent_router - computed: true, optional: false, required: false
  public get adjacentRouter() {
    return this.getStringAttribute('adjacent_router');
  }

  // admin_status - computed: true, optional: false, required: false
  public get adminStatus() {
    return this.getStringAttribute('admin_status');
  }

  // auto_negotiation - computed: true, optional: false, required: false
  public get autoNegotiation() {
    return this.getBooleanAttribute('auto_negotiation');
  }

  // device_can_lag - computed: true, optional: false, required: false
  public get deviceCanLag() {
    return this.getBooleanAttribute('device_can_lag');
  }

  // device_make - computed: true, optional: false, required: false
  public get deviceMake() {
    return this.getStringAttribute('device_make');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
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

  // iface_name - computed: true, optional: false, required: false
  public get ifaceName() {
    return this.getStringAttribute('iface_name');
  }

  // lag_speed - computed: true, optional: false, required: false
  public get lagSpeed() {
    return this.getNumberAttribute('lag_speed');
  }

  // oper_status - computed: true, optional: false, required: false
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }

  // optics_diagnostics_lane_bias_current - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneBiasCurrent() {
    return this.getNumberAttribute('optics_diagnostics_lane_bias_current');
  }

  // optics_diagnostics_lane_index - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneIndex() {
    return this.getStringAttribute('optics_diagnostics_lane_index');
  }

  // optics_diagnostics_lane_rx_power - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneRxPower() {
    return this.getNumberAttribute('optics_diagnostics_lane_rx_power');
  }

  // optics_diagnostics_lane_rx_power_dbm - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneRxPowerDbm() {
    return this.getNumberAttribute('optics_diagnostics_lane_rx_power_dbm');
  }

  // optics_diagnostics_lane_rx_status - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneRxStatus() {
    return this.getStringAttribute('optics_diagnostics_lane_rx_status');
  }

  // optics_diagnostics_lane_tx_power - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneTxPower() {
    return this.getNumberAttribute('optics_diagnostics_lane_tx_power');
  }

  // optics_diagnostics_lane_tx_power_dbm - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneTxPowerDbm() {
    return this.getNumberAttribute('optics_diagnostics_lane_tx_power_dbm');
  }

  // optics_diagnostics_lane_tx_status - computed: true, optional: false, required: false
  public get opticsDiagnosticsLaneTxStatus() {
    return this.getStringAttribute('optics_diagnostics_lane_tx_status');
  }

  // polltime - computed: true, optional: false, required: false
  public get polltime() {
    return this.getNumberAttribute('polltime');
  }

  // port_circuit_id - computed: false, optional: false, required: true
  private _portCircuitId?: string; 
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }
  public set portCircuitId(value: string) {
    this._portCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portCircuitIdInput() {
    return this._portCircuitId;
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // time_flapped - computed: true, optional: false, required: false
  public get timeFlapped() {
    return this.getStringAttribute('time_flapped');
  }

  // traffic_rx_bps - computed: true, optional: false, required: false
  public get trafficRxBps() {
    return this.getNumberAttribute('traffic_rx_bps');
  }

  // traffic_rx_bytes - computed: true, optional: false, required: false
  public get trafficRxBytes() {
    return this.getNumberAttribute('traffic_rx_bytes');
  }

  // traffic_rx_ipv6_bytes - computed: true, optional: false, required: false
  public get trafficRxIpv6Bytes() {
    return this.getNumberAttribute('traffic_rx_ipv6_bytes');
  }

  // traffic_rx_ipv6_packets - computed: true, optional: false, required: false
  public get trafficRxIpv6Packets() {
    return this.getNumberAttribute('traffic_rx_ipv6_packets');
  }

  // traffic_rx_packets - computed: true, optional: false, required: false
  public get trafficRxPackets() {
    return this.getNumberAttribute('traffic_rx_packets');
  }

  // traffic_rx_pps - computed: true, optional: false, required: false
  public get trafficRxPps() {
    return this.getNumberAttribute('traffic_rx_pps');
  }

  // traffic_tx_bps - computed: true, optional: false, required: false
  public get trafficTxBps() {
    return this.getNumberAttribute('traffic_tx_bps');
  }

  // traffic_tx_bytes - computed: true, optional: false, required: false
  public get trafficTxBytes() {
    return this.getNumberAttribute('traffic_tx_bytes');
  }

  // traffic_tx_ipv6_bytes - computed: true, optional: false, required: false
  public get trafficTxIpv6Bytes() {
    return this.getNumberAttribute('traffic_tx_ipv6_bytes');
  }

  // traffic_tx_ipv6_packets - computed: true, optional: false, required: false
  public get trafficTxIpv6Packets() {
    return this.getNumberAttribute('traffic_tx_ipv6_packets');
  }

  // traffic_tx_packets - computed: true, optional: false, required: false
  public get trafficTxPackets() {
    return this.getNumberAttribute('traffic_tx_packets');
  }

  // traffic_tx_pps - computed: true, optional: false, required: false
  public get trafficTxPps() {
    return this.getNumberAttribute('traffic_tx_pps');
  }

  // wiring_media - computed: true, optional: false, required: false
  public get wiringMedia() {
    return this.getStringAttribute('wiring_media');
  }

  // wiring_module - computed: true, optional: false, required: false
  public get wiringModule() {
    return this.getStringAttribute('wiring_module');
  }

  // wiring_panel - computed: true, optional: false, required: false
  public get wiringPanel() {
    return this.getStringAttribute('wiring_panel');
  }

  // wiring_position - computed: true, optional: false, required: false
  public get wiringPosition() {
    return this.getStringAttribute('wiring_position');
  }

  // wiring_reach - computed: true, optional: false, required: false
  public get wiringReach() {
    return this.getStringAttribute('wiring_reach');
  }

  // wiring_type - computed: true, optional: false, required: false
  public get wiringType() {
    return this.getStringAttribute('wiring_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_circuit_id: cdktf.stringToTerraform(this._portCircuitId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_circuit_id: {
        value: cdktf.stringToHclTerraform(this._portCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
