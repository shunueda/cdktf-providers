// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneDetectionPacketAnomalyDetectionIndicatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator#id DdosDstZoneDetectionPacketAnomalyDetectionIndicator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Threshold for each indicator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator#threshold_num DdosDstZoneDetectionPacketAnomalyDetectionIndicator#threshold_num}
  */
  readonly thresholdNum?: number;
  /**
  * 'port-zero-pkt-rate': Port Zero Packet Rate (default 100 packet per second);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator#type DdosDstZoneDetectionPacketAnomalyDetectionIndicator#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator#user_tag DdosDstZoneDetectionPacketAnomalyDetectionIndicator#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator#uuid DdosDstZoneDetectionPacketAnomalyDetectionIndicator#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator#zone_name DdosDstZoneDetectionPacketAnomalyDetectionIndicator#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator thunder_ddos_dst_zone_detection_packet_anomaly_detection_indicator}
*/
export class DdosDstZoneDetectionPacketAnomalyDetectionIndicator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection_packet_anomaly_detection_indicator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneDetectionPacketAnomalyDetectionIndicator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneDetectionPacketAnomalyDetectionIndicator to import
  * @param importFromId The id of the existing DdosDstZoneDetectionPacketAnomalyDetectionIndicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneDetectionPacketAnomalyDetectionIndicator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection_packet_anomaly_detection_indicator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_packet_anomaly_detection_indicator thunder_ddos_dst_zone_detection_packet_anomaly_detection_indicator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneDetectionPacketAnomalyDetectionIndicatorConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneDetectionPacketAnomalyDetectionIndicatorConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection_packet_anomaly_detection_indicator',
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
    this._id = config.id;
    this._thresholdNum = config.thresholdNum;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
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

  // threshold_num - computed: false, optional: true, required: false
  private _thresholdNum?: number; 
  public get thresholdNum() {
    return this.getNumberAttribute('threshold_num');
  }
  public set thresholdNum(value: number) {
    this._thresholdNum = value;
  }
  public resetThresholdNum() {
    this._thresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNumInput() {
    return this._thresholdNum;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
      id: cdktf.stringToTerraform(this._id),
      threshold_num: cdktf.numberToTerraform(this._thresholdNum),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
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
      threshold_num: {
        value: cdktf.numberToHclTerraform(this._thresholdNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
