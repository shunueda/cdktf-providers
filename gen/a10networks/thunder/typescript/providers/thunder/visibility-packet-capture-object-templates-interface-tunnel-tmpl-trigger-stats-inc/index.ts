// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for received error packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc#num_rx_err_pkts VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA#num_rx_err_pkts}
  */
  readonly numRxErrPkts?: number;
  /**
  * Enable automatic packet-capture for sent error packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc#num_tx_err_pkts VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA#num_tx_err_pkts}
  */
  readonly numTxErrPkts?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_inc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._name = config.name;
    this._numRxErrPkts = config.numRxErrPkts;
    this._numTxErrPkts = config.numTxErrPkts;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_rx_err_pkts: cdktf.numberToTerraform(this._numRxErrPkts),
      num_tx_err_pkts: cdktf.numberToTerraform(this._numTxErrPkts),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
