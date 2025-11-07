// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortZoneServiceOtherPatternRecognitionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#algorithm DdosDstZonePortZoneServiceOtherPatternRecognitionA#algorithm}
  */
  readonly algorithm: string;
  /**
  * 'all': Capture all packets; 'dropped': Capture dropped packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#capture_traffic DdosDstZonePortZoneServiceOtherPatternRecognitionA#capture_traffic}
  */
  readonly captureTraffic?: string;
  /**
  * Extracted filter inactive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#filter_inactive_threshold DdosDstZonePortZoneServiceOtherPatternRecognitionA#filter_inactive_threshold}
  */
  readonly filterInactiveThreshold?: number;
  /**
  * Extracted filter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#filter_threshold DdosDstZonePortZoneServiceOtherPatternRecognitionA#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#id DdosDstZonePortZoneServiceOtherPatternRecognitionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#mode DdosDstZonePortZoneServiceOtherPatternRecognitionA#mode}
  */
  readonly mode?: string;
  /**
  * PortOther
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#port_other DdosDstZonePortZoneServiceOtherPatternRecognitionA#port_other}
  */
  readonly portOther: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#protocol DdosDstZonePortZoneServiceOtherPatternRecognitionA#protocol}
  */
  readonly protocol: string;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#sensitivity DdosDstZonePortZoneServiceOtherPatternRecognitionA#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * 'zone-escalation': Zone escalation trigger pattern recognition; 'packet-rate-exceeds': Packet rate limit exceeds trigger pattern recognition (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#triggered_by DdosDstZonePortZoneServiceOtherPatternRecognitionA#triggered_by}
  */
  readonly triggeredBy?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#uuid DdosDstZonePortZoneServiceOtherPatternRecognitionA#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#zone_name DdosDstZonePortZoneServiceOtherPatternRecognitionA#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition}
*/
export class DdosDstZonePortZoneServiceOtherPatternRecognitionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortZoneServiceOtherPatternRecognitionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortZoneServiceOtherPatternRecognitionA to import
  * @param importFromId The id of the existing DdosDstZonePortZoneServiceOtherPatternRecognitionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortZoneServiceOtherPatternRecognitionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_pattern_recognition thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortZoneServiceOtherPatternRecognitionAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortZoneServiceOtherPatternRecognitionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_other_pattern_recognition',
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
    this._captureTraffic = config.captureTraffic;
    this._filterInactiveThreshold = config.filterInactiveThreshold;
    this._filterThreshold = config.filterThreshold;
    this._id = config.id;
    this._mode = config.mode;
    this._portOther = config.portOther;
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

  // port_other - computed: false, optional: false, required: true
  private _portOther?: string; 
  public get portOther() {
    return this.getStringAttribute('port_other');
  }
  public set portOther(value: string) {
    this._portOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portOtherInput() {
    return this._portOther;
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
      capture_traffic: cdktf.stringToTerraform(this._captureTraffic),
      filter_inactive_threshold: cdktf.numberToTerraform(this._filterInactiveThreshold),
      filter_threshold: cdktf.numberToTerraform(this._filterThreshold),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      port_other: cdktf.stringToTerraform(this._portOther),
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
      port_other: {
        value: cdktf.stringToHclTerraform(this._portOther),
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
