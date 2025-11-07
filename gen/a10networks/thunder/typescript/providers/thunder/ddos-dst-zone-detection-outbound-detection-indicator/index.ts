// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneDetectionOutboundDetectionIndicatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Expected minimal data size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#data_packet_size DdosDstZoneDetectionOutboundDetectionIndicator#data_packet_size}
  */
  readonly dataPacketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#id DdosDstZoneDetectionOutboundDetectionIndicator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Expected minimal window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#tcp_window_size DdosDstZoneDetectionOutboundDetectionIndicator#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Threshold for each geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#threshold_large_num DdosDstZoneDetectionOutboundDetectionIndicator#threshold_large_num}
  */
  readonly thresholdLargeNum?: number;
  /**
  * Threshold for each geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#threshold_num DdosDstZoneDetectionOutboundDetectionIndicator#threshold_num}
  */
  readonly thresholdNum?: number;
  /**
  * Threshold for each geo-location (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#threshold_str DdosDstZoneDetectionOutboundDetectionIndicator#threshold_str}
  */
  readonly thresholdStr?: string;
  /**
  * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits; 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio': ratio of incoming packet rate divided by the rate of outgoing packets; 'syn-rate': rate on incoming SYN packets; 'fin-rate': rate on incoming FIN packets; 'rst-rate': rate of incoming RST packets; 'small-window-ack-rate': rate of small window advertisement; 'empty-ack-rate': rate of incoming packets which have no payload; 'small-payload-rate': rate of short payload packet; 'syn-fin-ratio': ratio of incoming SYN packet rate divided by the rate of incoming FIN packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#type DdosDstZoneDetectionOutboundDetectionIndicator#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#user_tag DdosDstZoneDetectionOutboundDetectionIndicator#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#uuid DdosDstZoneDetectionOutboundDetectionIndicator#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#zone_name DdosDstZoneDetectionOutboundDetectionIndicator#zone_name}
  */
  readonly zoneName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator thunder_ddos_dst_zone_detection_outbound_detection_indicator}
*/
export class DdosDstZoneDetectionOutboundDetectionIndicator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection_outbound_detection_indicator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneDetectionOutboundDetectionIndicator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneDetectionOutboundDetectionIndicator to import
  * @param importFromId The id of the existing DdosDstZoneDetectionOutboundDetectionIndicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneDetectionOutboundDetectionIndicator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection_outbound_detection_indicator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection_indicator thunder_ddos_dst_zone_detection_outbound_detection_indicator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneDetectionOutboundDetectionIndicatorConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneDetectionOutboundDetectionIndicatorConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection_outbound_detection_indicator',
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
    this._dataPacketSize = config.dataPacketSize;
    this._id = config.id;
    this._tcpWindowSize = config.tcpWindowSize;
    this._thresholdLargeNum = config.thresholdLargeNum;
    this._thresholdNum = config.thresholdNum;
    this._thresholdStr = config.thresholdStr;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_packet_size - computed: false, optional: true, required: false
  private _dataPacketSize?: number; 
  public get dataPacketSize() {
    return this.getNumberAttribute('data_packet_size');
  }
  public set dataPacketSize(value: number) {
    this._dataPacketSize = value;
  }
  public resetDataPacketSize() {
    this._dataPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPacketSizeInput() {
    return this._dataPacketSize;
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

  // tcp_window_size - computed: false, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // threshold_large_num - computed: false, optional: true, required: false
  private _thresholdLargeNum?: number; 
  public get thresholdLargeNum() {
    return this.getNumberAttribute('threshold_large_num');
  }
  public set thresholdLargeNum(value: number) {
    this._thresholdLargeNum = value;
  }
  public resetThresholdLargeNum() {
    this._thresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdLargeNumInput() {
    return this._thresholdLargeNum;
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

  // threshold_str - computed: false, optional: true, required: false
  private _thresholdStr?: string; 
  public get thresholdStr() {
    return this.getStringAttribute('threshold_str');
  }
  public set thresholdStr(value: string) {
    this._thresholdStr = value;
  }
  public resetThresholdStr() {
    this._thresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdStrInput() {
    return this._thresholdStr;
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
      data_packet_size: cdktf.numberToTerraform(this._dataPacketSize),
      id: cdktf.stringToTerraform(this._id),
      tcp_window_size: cdktf.numberToTerraform(this._tcpWindowSize),
      threshold_large_num: cdktf.numberToTerraform(this._thresholdLargeNum),
      threshold_num: cdktf.numberToTerraform(this._thresholdNum),
      threshold_str: cdktf.stringToTerraform(this._thresholdStr),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_packet_size: {
        value: cdktf.numberToHclTerraform(this._dataPacketSize),
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
      tcp_window_size: {
        value: cdktf.numberToHclTerraform(this._tcpWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_large_num: {
        value: cdktf.numberToHclTerraform(this._thresholdLargeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_num: {
        value: cdktf.numberToHclTerraform(this._thresholdNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_str: {
        value: cdktf.stringToHclTerraform(this._thresholdStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
