// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortRangePatternRecognitionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#algorithm DdosDstZonePortRangePatternRecognitionA#algorithm}
  */
  readonly algorithm: string;
  /**
  * Set offset of the payload, default 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#app_payload_offset DdosDstZonePortRangePatternRecognitionA#app_payload_offset}
  */
  readonly appPayloadOffset?: number;
  /**
  * 'all': Capture all packets; 'dropped': Capture dropped packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#capture_traffic DdosDstZonePortRangePatternRecognitionA#capture_traffic}
  */
  readonly captureTraffic?: string;
  /**
  * Extracted filter inactive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#filter_inactive_threshold DdosDstZonePortRangePatternRecognitionA#filter_inactive_threshold}
  */
  readonly filterInactiveThreshold?: number;
  /**
  * Extracted filter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#filter_threshold DdosDstZonePortRangePatternRecognitionA#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#id DdosDstZonePortRangePatternRecognitionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#mode DdosDstZonePortRangePatternRecognitionA#mode}
  */
  readonly mode?: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#port_range_end DdosDstZonePortRangePatternRecognitionA#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#port_range_start DdosDstZonePortRangePatternRecognitionA#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#protocol DdosDstZonePortRangePatternRecognitionA#protocol}
  */
  readonly protocol: string;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#sensitivity DdosDstZonePortRangePatternRecognitionA#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * 'zone-escalation': Zone escalation trigger pattern recognition; 'packet-rate-exceeds': Packet rate limit exceeds trigger pattern recognition (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#triggered_by DdosDstZonePortRangePatternRecognitionA#triggered_by}
  */
  readonly triggeredBy?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#uuid DdosDstZonePortRangePatternRecognitionA#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#zone_name DdosDstZonePortRangePatternRecognitionA#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition thunder_ddos_dst_zone_port_range_pattern_recognition}
*/
export class DdosDstZonePortRangePatternRecognitionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_range_pattern_recognition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortRangePatternRecognitionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortRangePatternRecognitionA to import
  * @param importFromId The id of the existing DdosDstZonePortRangePatternRecognitionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortRangePatternRecognitionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_range_pattern_recognition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_range_pattern_recognition thunder_ddos_dst_zone_port_range_pattern_recognition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortRangePatternRecognitionAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortRangePatternRecognitionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_range_pattern_recognition',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._appPayloadOffset = config.appPayloadOffset;
    this._captureTraffic = config.captureTraffic;
    this._filterInactiveThreshold = config.filterInactiveThreshold;
    this._filterThreshold = config.filterThreshold;
    this._id = config.id;
    this._mode = config.mode;
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._protocol = config.protocol;
    this._sensitivity = config.sensitivity;
    this._triggeredBy = config.triggeredBy;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // app_payload_offset - computed: false, optional: true, required: false
  private _appPayloadOffset?: number; 
  public get appPayloadOffset() {
    return this.getNumberAttribute('app_payload_offset');
  }
  public set appPayloadOffset(value: number) {
    this._appPayloadOffset = value;
  }
  public resetAppPayloadOffset() {
    this._appPayloadOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPayloadOffsetInput() {
    return this._appPayloadOffset;
  }

  // capture_traffic - computed: false, optional: true, required: false
  private _captureTraffic?: string; 
  public get captureTraffic() {
    return this.getStringAttribute('capture_traffic');
  }
  public set captureTraffic(value: string) {
    this._captureTraffic = value;
  }
  public resetCaptureTraffic() {
    this._captureTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureTrafficInput() {
    return this._captureTraffic;
  }

  // filter_inactive_threshold - computed: false, optional: true, required: false
  private _filterInactiveThreshold?: number; 
  public get filterInactiveThreshold() {
    return this.getNumberAttribute('filter_inactive_threshold');
  }
  public set filterInactiveThreshold(value: number) {
    this._filterInactiveThreshold = value;
  }
  public resetFilterInactiveThreshold() {
    this._filterInactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInactiveThresholdInput() {
    return this._filterInactiveThreshold;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: string; 
  public get portRangeStart() {
    return this.getStringAttribute('port_range_start');
  }
  public set portRangeStart(value: string) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // triggered_by - computed: false, optional: true, required: false
  private _triggeredBy?: string; 
  public get triggeredBy() {
    return this.getStringAttribute('triggered_by');
  }
  public set triggeredBy(value: string) {
    this._triggeredBy = value;
  }
  public resetTriggeredBy() {
    this._triggeredBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredByInput() {
    return this._triggeredBy;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      app_payload_offset: cdktf.numberToTerraform(this._appPayloadOffset),
      capture_traffic: cdktf.stringToTerraform(this._captureTraffic),
      filter_inactive_threshold: cdktf.numberToTerraform(this._filterInactiveThreshold),
      filter_threshold: cdktf.numberToTerraform(this._filterThreshold),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      triggered_by: cdktf.stringToTerraform(this._triggeredBy),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_payload_offset: {
        value: cdktf.numberToHclTerraform(this._appPayloadOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capture_traffic: {
        value: cdktf.stringToHclTerraform(this._captureTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_inactive_threshold: {
        value: cdktf.numberToHclTerraform(this._filterInactiveThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_threshold: {
        value: cdktf.numberToHclTerraform(this._filterThreshold),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_end: {
        value: cdktf.stringToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_start: {
        value: cdktf.stringToHclTerraform(this._portRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity: {
        value: cdktf.stringToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggered_by: {
        value: cdktf.stringToHclTerraform(this._triggeredBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
