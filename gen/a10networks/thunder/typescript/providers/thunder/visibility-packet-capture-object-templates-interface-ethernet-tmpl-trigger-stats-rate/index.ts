// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Collisions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#collisions VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#collisions}
  */
  readonly collisions?: number;
  /**
  * Enable automatic packet-capture for CRC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#crc VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#crc}
  */
  readonly crc?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Giants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#giants VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#giants}
  */
  readonly giants?: number;
  /**
  * Enable automatic packet-capture for Output Giants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#giants_output VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#giants_output}
  */
  readonly giantsOutput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Input errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#input_errors VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#input_errors}
  */
  readonly inputErrors?: number;
  /**
  * Interface_ethernet_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#interface_ethernet_tmpl_name VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#interface_ethernet_tmpl_name}
  */
  readonly interfaceEthernetTmplName: string;
  /**
  * Enable automatic packet-capture for Output errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#output_errors VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#output_errors}
  */
  readonly outputErrors?: number;
  /**
  * Enable automatic packet-capture for Runts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#runts VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#runts}
  */
  readonly runts?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesInterfaceEthernetTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_interface_ethernet_tmpl_trigger_stats_rate',
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
    this._collisions = config.collisions;
    this._crc = config.crc;
    this._duration = config.duration;
    this._giants = config.giants;
    this._giantsOutput = config.giantsOutput;
    this._id = config.id;
    this._inputErrors = config.inputErrors;
    this._interfaceEthernetTmplName = config.interfaceEthernetTmplName;
    this._outputErrors = config.outputErrors;
    this._runts = config.runts;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collisions - computed: false, optional: true, required: false
  private _collisions?: number; 
  public get collisions() {
    return this.getNumberAttribute('collisions');
  }
  public set collisions(value: number) {
    this._collisions = value;
  }
  public resetCollisions() {
    this._collisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collisionsInput() {
    return this._collisions;
  }

  // crc - computed: false, optional: true, required: false
  private _crc?: number; 
  public get crc() {
    return this.getNumberAttribute('crc');
  }
  public set crc(value: number) {
    this._crc = value;
  }
  public resetCrc() {
    this._crc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crcInput() {
    return this._crc;
  }

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

  // giants - computed: false, optional: true, required: false
  private _giants?: number; 
  public get giants() {
    return this.getNumberAttribute('giants');
  }
  public set giants(value: number) {
    this._giants = value;
  }
  public resetGiants() {
    this._giants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giantsInput() {
    return this._giants;
  }

  // giants_output - computed: false, optional: true, required: false
  private _giantsOutput?: number; 
  public get giantsOutput() {
    return this.getNumberAttribute('giants_output');
  }
  public set giantsOutput(value: number) {
    this._giantsOutput = value;
  }
  public resetGiantsOutput() {
    this._giantsOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giantsOutputInput() {
    return this._giantsOutput;
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

  // input_errors - computed: false, optional: true, required: false
  private _inputErrors?: number; 
  public get inputErrors() {
    return this.getNumberAttribute('input_errors');
  }
  public set inputErrors(value: number) {
    this._inputErrors = value;
  }
  public resetInputErrors() {
    this._inputErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputErrorsInput() {
    return this._inputErrors;
  }

  // interface_ethernet_tmpl_name - computed: false, optional: false, required: true
  private _interfaceEthernetTmplName?: string; 
  public get interfaceEthernetTmplName() {
    return this.getStringAttribute('interface_ethernet_tmpl_name');
  }
  public set interfaceEthernetTmplName(value: string) {
    this._interfaceEthernetTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceEthernetTmplNameInput() {
    return this._interfaceEthernetTmplName;
  }

  // output_errors - computed: false, optional: true, required: false
  private _outputErrors?: number; 
  public get outputErrors() {
    return this.getNumberAttribute('output_errors');
  }
  public set outputErrors(value: number) {
    this._outputErrors = value;
  }
  public resetOutputErrors() {
    this._outputErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputErrorsInput() {
    return this._outputErrors;
  }

  // runts - computed: false, optional: true, required: false
  private _runts?: number; 
  public get runts() {
    return this.getNumberAttribute('runts');
  }
  public set runts(value: number) {
    this._runts = value;
  }
  public resetRunts() {
    this._runts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtsInput() {
    return this._runts;
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
      collisions: cdktf.numberToTerraform(this._collisions),
      crc: cdktf.numberToTerraform(this._crc),
      duration: cdktf.numberToTerraform(this._duration),
      giants: cdktf.numberToTerraform(this._giants),
      giants_output: cdktf.numberToTerraform(this._giantsOutput),
      id: cdktf.stringToTerraform(this._id),
      input_errors: cdktf.numberToTerraform(this._inputErrors),
      interface_ethernet_tmpl_name: cdktf.stringToTerraform(this._interfaceEthernetTmplName),
      output_errors: cdktf.numberToTerraform(this._outputErrors),
      runts: cdktf.numberToTerraform(this._runts),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collisions: {
        value: cdktf.numberToHclTerraform(this._collisions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crc: {
        value: cdktf.numberToHclTerraform(this._crc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      giants: {
        value: cdktf.numberToHclTerraform(this._giants),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      giants_output: {
        value: cdktf.numberToHclTerraform(this._giantsOutput),
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
      input_errors: {
        value: cdktf.numberToHclTerraform(this._inputErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_ethernet_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._interfaceEthernetTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_errors: {
        value: cdktf.numberToHclTerraform(this._outputErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runts: {
        value: cdktf.numberToHclTerraform(this._runts),
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
