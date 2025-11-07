// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneDetectionServiceDiscoveryAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery#configuration DdosDstZoneDetectionServiceDiscoveryA#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery#id DdosDstZoneDetectionServiceDiscoveryA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * packet rate threshold for discovery (default 10 packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery#pkt_rate_threshold DdosDstZoneDetectionServiceDiscoveryA#pkt_rate_threshold}
  */
  readonly pktRateThreshold?: number;
  /**
  * 'enable': Enable service discovery; 'disable': Disable service discovery;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery#toggle DdosDstZoneDetectionServiceDiscoveryA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery#uuid DdosDstZoneDetectionServiceDiscoveryA#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery#zone_name DdosDstZoneDetectionServiceDiscoveryA#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery thunder_ddos_dst_zone_detection_service_discovery}
*/
export class DdosDstZoneDetectionServiceDiscoveryA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection_service_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneDetectionServiceDiscoveryA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneDetectionServiceDiscoveryA to import
  * @param importFromId The id of the existing DdosDstZoneDetectionServiceDiscoveryA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneDetectionServiceDiscoveryA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection_service_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_service_discovery thunder_ddos_dst_zone_detection_service_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneDetectionServiceDiscoveryAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneDetectionServiceDiscoveryAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection_service_discovery',
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
    this._configuration = config.configuration;
    this._id = config.id;
    this._pktRateThreshold = config.pktRateThreshold;
    this._toggle = config.toggle;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // pkt_rate_threshold - computed: false, optional: true, required: false
  private _pktRateThreshold?: number; 
  public get pktRateThreshold() {
    return this.getNumberAttribute('pkt_rate_threshold');
  }
  public set pktRateThreshold(value: number) {
    this._pktRateThreshold = value;
  }
  public resetPktRateThreshold() {
    this._pktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateThresholdInput() {
    return this._pktRateThreshold;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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
      configuration: cdktf.stringToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      pkt_rate_threshold: cdktf.numberToTerraform(this._pktRateThreshold),
      toggle: cdktf.stringToTerraform(this._toggle),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkt_rate_threshold: {
        value: cdktf.numberToHclTerraform(this._pktRateThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      toggle: {
        value: cdktf.stringToHclTerraform(this._toggle),
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
