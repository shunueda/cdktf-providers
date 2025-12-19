// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface_tunnel_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#interface_tunnel_tmpl_name VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA#interface_tunnel_tmpl_name}
  */
  readonly interfaceTunnelTmplName: string;
  /**
  * Enable automatic packet-capture for received error packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#num_rx_err_pkts VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA#num_rx_err_pkts}
  */
  readonly numRxErrPkts?: number;
  /**
  * Enable automatic packet-capture for sent error packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#num_tx_err_pkts VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA#num_tx_err_pkts}
  */
  readonly numTxErrPkts?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_rate',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._duration = config.duration;
    this._id = config.id;
    this._interfaceTunnelTmplName = config.interfaceTunnelTmplName;
    this._numRxErrPkts = config.numRxErrPkts;
    this._numTxErrPkts = config.numTxErrPkts;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // interface_tunnel_tmpl_name - computed: false, optional: false, required: true
  private _interfaceTunnelTmplName?: string; 
  public get interfaceTunnelTmplName() {
    return this.getStringAttribute('interface_tunnel_tmpl_name');
  }
  public set interfaceTunnelTmplName(value: string) {
    this._interfaceTunnelTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTunnelTmplNameInput() {
    return this._interfaceTunnelTmplName;
  }

  // num_rx_err_pkts - computed: false, optional: true, required: false
  private _numRxErrPkts?: number; 
  public get numRxErrPkts() {
    return this.getNumberAttribute('num_rx_err_pkts');
  }
  public set numRxErrPkts(value: number) {
    this._numRxErrPkts = value;
  }
  public resetNumRxErrPkts() {
    this._numRxErrPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRxErrPktsInput() {
    return this._numRxErrPkts;
  }

  // num_tx_err_pkts - computed: false, optional: true, required: false
  private _numTxErrPkts?: number; 
  public get numTxErrPkts() {
    return this.getNumberAttribute('num_tx_err_pkts');
  }
  public set numTxErrPkts(value: number) {
    this._numTxErrPkts = value;
  }
  public resetNumTxErrPkts() {
    this._numTxErrPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTxErrPktsInput() {
    return this._numTxErrPkts;
  }

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      interface_tunnel_tmpl_name: cdktf.stringToTerraform(this._interfaceTunnelTmplName),
      num_rx_err_pkts: cdktf.numberToTerraform(this._numRxErrPkts),
      num_tx_err_pkts: cdktf.numberToTerraform(this._numTxErrPkts),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_tunnel_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._interfaceTunnelTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_rx_err_pkts: {
        value: cdktf.numberToHclTerraform(this._numRxErrPkts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_tx_err_pkts: {
        value: cdktf.numberToHclTerraform(this._numTxErrPkts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
