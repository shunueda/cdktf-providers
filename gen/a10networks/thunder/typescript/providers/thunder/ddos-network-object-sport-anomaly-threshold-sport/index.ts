// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectSportAnomalyThresholdSportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#bit_rate DdosNetworkObjectSportAnomalyThresholdSport#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#bit_rate_percentage DdosNetworkObjectSportAnomalyThresholdSport#bit_rate_percentage}
  */
  readonly bitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#bit_rate_percentage_str DdosNetworkObjectSportAnomalyThresholdSport#bit_rate_percentage_str}
  */
  readonly bitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#bit_rate_str DdosNetworkObjectSportAnomalyThresholdSport#bit_rate_str}
  */
  readonly bitRateStr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#id DdosNetworkObjectSportAnomalyThresholdSport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ObjectName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#object_name DdosNetworkObjectSportAnomalyThresholdSport#object_name}
  */
  readonly objectName: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#packet_rate DdosNetworkObjectSportAnomalyThresholdSport#packet_rate}
  */
  readonly packetRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#packet_rate_percentage DdosNetworkObjectSportAnomalyThresholdSport#packet_rate_percentage}
  */
  readonly packetRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#packet_rate_percentage_str DdosNetworkObjectSportAnomalyThresholdSport#packet_rate_percentage_str}
  */
  readonly packetRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#packet_rate_str DdosNetworkObjectSportAnomalyThresholdSport#packet_rate_str}
  */
  readonly packetRateStr: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#protocol DdosNetworkObjectSportAnomalyThresholdSport#protocol}
  */
  readonly protocol: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#sport_num DdosNetworkObjectSportAnomalyThresholdSport#sport_num}
  */
  readonly sportNum: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#uuid DdosNetworkObjectSportAnomalyThresholdSport#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport thunder_ddos_network_object_sport_anomaly_threshold_sport}
*/
export class DdosNetworkObjectSportAnomalyThresholdSport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_sport_anomaly_threshold_sport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObjectSportAnomalyThresholdSport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObjectSportAnomalyThresholdSport to import
  * @param importFromId The id of the existing DdosNetworkObjectSportAnomalyThresholdSport that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObjectSportAnomalyThresholdSport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_sport_anomaly_threshold_sport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_sport thunder_ddos_network_object_sport_anomaly_threshold_sport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectSportAnomalyThresholdSportConfig
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectSportAnomalyThresholdSportConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_sport_anomaly_threshold_sport',
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
    this._bitRate = config.bitRate;
    this._bitRatePercentage = config.bitRatePercentage;
    this._bitRatePercentageStr = config.bitRatePercentageStr;
    this._bitRateStr = config.bitRateStr;
    this._id = config.id;
    this._objectName = config.objectName;
    this._packetRate = config.packetRate;
    this._packetRatePercentage = config.packetRatePercentage;
    this._packetRatePercentageStr = config.packetRatePercentageStr;
    this._packetRateStr = config.packetRateStr;
    this._protocol = config.protocol;
    this._sportNum = config.sportNum;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // bit_rate_percentage - computed: false, optional: true, required: false
  private _bitRatePercentage?: number; 
  public get bitRatePercentage() {
    return this.getNumberAttribute('bit_rate_percentage');
  }
  public set bitRatePercentage(value: number) {
    this._bitRatePercentage = value;
  }
  public resetBitRatePercentage() {
    this._bitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageInput() {
    return this._bitRatePercentage;
  }

  // bit_rate_percentage_str - computed: false, optional: false, required: true
  private _bitRatePercentageStr?: string; 
  public get bitRatePercentageStr() {
    return this.getStringAttribute('bit_rate_percentage_str');
  }
  public set bitRatePercentageStr(value: string) {
    this._bitRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageStrInput() {
    return this._bitRatePercentageStr;
  }

  // bit_rate_str - computed: false, optional: false, required: true
  private _bitRateStr?: string; 
  public get bitRateStr() {
    return this.getStringAttribute('bit_rate_str');
  }
  public set bitRateStr(value: string) {
    this._bitRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateStrInput() {
    return this._bitRateStr;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }

  // packet_rate_percentage - computed: false, optional: true, required: false
  private _packetRatePercentage?: number; 
  public get packetRatePercentage() {
    return this.getNumberAttribute('packet_rate_percentage');
  }
  public set packetRatePercentage(value: number) {
    this._packetRatePercentage = value;
  }
  public resetPacketRatePercentage() {
    this._packetRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageInput() {
    return this._packetRatePercentage;
  }

  // packet_rate_percentage_str - computed: false, optional: false, required: true
  private _packetRatePercentageStr?: string; 
  public get packetRatePercentageStr() {
    return this.getStringAttribute('packet_rate_percentage_str');
  }
  public set packetRatePercentageStr(value: string) {
    this._packetRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageStrInput() {
    return this._packetRatePercentageStr;
  }

  // packet_rate_str - computed: false, optional: false, required: true
  private _packetRateStr?: string; 
  public get packetRateStr() {
    return this.getStringAttribute('packet_rate_str');
  }
  public set packetRateStr(value: string) {
    this._packetRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateStrInput() {
    return this._packetRateStr;
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

  // sport_num - computed: false, optional: false, required: true
  private _sportNum?: number; 
  public get sportNum() {
    return this.getNumberAttribute('sport_num');
  }
  public set sportNum(value: number) {
    this._sportNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sportNumInput() {
    return this._sportNum;
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
      bit_rate: cdktf.numberToTerraform(this._bitRate),
      bit_rate_percentage: cdktf.numberToTerraform(this._bitRatePercentage),
      bit_rate_percentage_str: cdktf.stringToTerraform(this._bitRatePercentageStr),
      bit_rate_str: cdktf.stringToTerraform(this._bitRateStr),
      id: cdktf.stringToTerraform(this._id),
      object_name: cdktf.stringToTerraform(this._objectName),
      packet_rate: cdktf.numberToTerraform(this._packetRate),
      packet_rate_percentage: cdktf.numberToTerraform(this._packetRatePercentage),
      packet_rate_percentage_str: cdktf.stringToTerraform(this._packetRatePercentageStr),
      packet_rate_str: cdktf.stringToTerraform(this._packetRateStr),
      protocol: cdktf.stringToTerraform(this._protocol),
      sport_num: cdktf.numberToTerraform(this._sportNum),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bit_rate: {
        value: cdktf.numberToHclTerraform(this._bitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bit_rate_percentage: {
        value: cdktf.numberToHclTerraform(this._bitRatePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bit_rate_percentage_str: {
        value: cdktf.stringToHclTerraform(this._bitRatePercentageStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bit_rate_str: {
        value: cdktf.stringToHclTerraform(this._bitRateStr),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_rate: {
        value: cdktf.numberToHclTerraform(this._packetRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_rate_percentage: {
        value: cdktf.numberToHclTerraform(this._packetRatePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_rate_percentage_str: {
        value: cdktf.stringToHclTerraform(this._packetRatePercentageStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_rate_str: {
        value: cdktf.stringToHclTerraform(this._packetRateStr),
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
      sport_num: {
        value: cdktf.numberToHclTerraform(this._sportNum),
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
