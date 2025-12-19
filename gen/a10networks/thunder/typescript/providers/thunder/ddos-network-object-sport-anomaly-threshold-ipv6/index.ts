// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectSportAnomalyThresholdIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#bit_rate DdosNetworkObjectSportAnomalyThresholdIpv6#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#bit_rate_percentage DdosNetworkObjectSportAnomalyThresholdIpv6#bit_rate_percentage}
  */
  readonly bitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#bit_rate_percentage_str DdosNetworkObjectSportAnomalyThresholdIpv6#bit_rate_percentage_str}
  */
  readonly bitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#bit_rate_str DdosNetworkObjectSportAnomalyThresholdIpv6#bit_rate_str}
  */
  readonly bitRateStr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#id DdosNetworkObjectSportAnomalyThresholdIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Override threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_addr DdosNetworkObjectSportAnomalyThresholdIpv6#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_bit_rate DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_bit_rate}
  */
  readonly ipSportBitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_bit_rate_percentage DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_bit_rate_percentage}
  */
  readonly ipSportBitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_bit_rate_percentage_str DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_bit_rate_percentage_str}
  */
  readonly ipSportBitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_bit_rate_str DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_bit_rate_str}
  */
  readonly ipSportBitRateStr: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_packet_rate DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_packet_rate}
  */
  readonly ipSportPacketRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_packet_rate_percentage DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_packet_rate_percentage}
  */
  readonly ipSportPacketRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_packet_rate_percentage_str DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_packet_rate_percentage_str}
  */
  readonly ipSportPacketRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#ip_sport_packet_rate_str DdosNetworkObjectSportAnomalyThresholdIpv6#ip_sport_packet_rate_str}
  */
  readonly ipSportPacketRateStr: string;
  /**
  * ObjectName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#object_name DdosNetworkObjectSportAnomalyThresholdIpv6#object_name}
  */
  readonly objectName: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#packet_rate DdosNetworkObjectSportAnomalyThresholdIpv6#packet_rate}
  */
  readonly packetRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#packet_rate_percentage DdosNetworkObjectSportAnomalyThresholdIpv6#packet_rate_percentage}
  */
  readonly packetRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#packet_rate_percentage_str DdosNetworkObjectSportAnomalyThresholdIpv6#packet_rate_percentage_str}
  */
  readonly packetRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#packet_rate_str DdosNetworkObjectSportAnomalyThresholdIpv6#packet_rate_str}
  */
  readonly packetRateStr: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#protocol DdosNetworkObjectSportAnomalyThresholdIpv6#protocol}
  */
  readonly protocol: string;
  /**
  * Source port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#sport_num DdosNetworkObjectSportAnomalyThresholdIpv6#sport_num}
  */
  readonly sportNum: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#uuid DdosNetworkObjectSportAnomalyThresholdIpv6#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6 thunder_ddos_network_object_sport_anomaly_threshold_ipv6}
*/
export class DdosNetworkObjectSportAnomalyThresholdIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_sport_anomaly_threshold_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObjectSportAnomalyThresholdIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObjectSportAnomalyThresholdIpv6 to import
  * @param importFromId The id of the existing DdosNetworkObjectSportAnomalyThresholdIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObjectSportAnomalyThresholdIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_sport_anomaly_threshold_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sport_anomaly_threshold_ipv6 thunder_ddos_network_object_sport_anomaly_threshold_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectSportAnomalyThresholdIpv6Config
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectSportAnomalyThresholdIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_sport_anomaly_threshold_ipv6',
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
    this._ipAddr = config.ipAddr;
    this._ipSportBitRate = config.ipSportBitRate;
    this._ipSportBitRatePercentage = config.ipSportBitRatePercentage;
    this._ipSportBitRatePercentageStr = config.ipSportBitRatePercentageStr;
    this._ipSportBitRateStr = config.ipSportBitRateStr;
    this._ipSportPacketRate = config.ipSportPacketRate;
    this._ipSportPacketRatePercentage = config.ipSportPacketRatePercentage;
    this._ipSportPacketRatePercentageStr = config.ipSportPacketRatePercentageStr;
    this._ipSportPacketRateStr = config.ipSportPacketRateStr;
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

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // ip_sport_bit_rate - computed: false, optional: true, required: false
  private _ipSportBitRate?: number; 
  public get ipSportBitRate() {
    return this.getNumberAttribute('ip_sport_bit_rate');
  }
  public set ipSportBitRate(value: number) {
    this._ipSportBitRate = value;
  }
  public resetIpSportBitRate() {
    this._ipSportBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRateInput() {
    return this._ipSportBitRate;
  }

  // ip_sport_bit_rate_percentage - computed: false, optional: true, required: false
  private _ipSportBitRatePercentage?: number; 
  public get ipSportBitRatePercentage() {
    return this.getNumberAttribute('ip_sport_bit_rate_percentage');
  }
  public set ipSportBitRatePercentage(value: number) {
    this._ipSportBitRatePercentage = value;
  }
  public resetIpSportBitRatePercentage() {
    this._ipSportBitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRatePercentageInput() {
    return this._ipSportBitRatePercentage;
  }

  // ip_sport_bit_rate_percentage_str - computed: false, optional: false, required: true
  private _ipSportBitRatePercentageStr?: string; 
  public get ipSportBitRatePercentageStr() {
    return this.getStringAttribute('ip_sport_bit_rate_percentage_str');
  }
  public set ipSportBitRatePercentageStr(value: string) {
    this._ipSportBitRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRatePercentageStrInput() {
    return this._ipSportBitRatePercentageStr;
  }

  // ip_sport_bit_rate_str - computed: false, optional: false, required: true
  private _ipSportBitRateStr?: string; 
  public get ipSportBitRateStr() {
    return this.getStringAttribute('ip_sport_bit_rate_str');
  }
  public set ipSportBitRateStr(value: string) {
    this._ipSportBitRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRateStrInput() {
    return this._ipSportBitRateStr;
  }

  // ip_sport_packet_rate - computed: false, optional: true, required: false
  private _ipSportPacketRate?: number; 
  public get ipSportPacketRate() {
    return this.getNumberAttribute('ip_sport_packet_rate');
  }
  public set ipSportPacketRate(value: number) {
    this._ipSportPacketRate = value;
  }
  public resetIpSportPacketRate() {
    this._ipSportPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRateInput() {
    return this._ipSportPacketRate;
  }

  // ip_sport_packet_rate_percentage - computed: false, optional: true, required: false
  private _ipSportPacketRatePercentage?: number; 
  public get ipSportPacketRatePercentage() {
    return this.getNumberAttribute('ip_sport_packet_rate_percentage');
  }
  public set ipSportPacketRatePercentage(value: number) {
    this._ipSportPacketRatePercentage = value;
  }
  public resetIpSportPacketRatePercentage() {
    this._ipSportPacketRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRatePercentageInput() {
    return this._ipSportPacketRatePercentage;
  }

  // ip_sport_packet_rate_percentage_str - computed: false, optional: false, required: true
  private _ipSportPacketRatePercentageStr?: string; 
  public get ipSportPacketRatePercentageStr() {
    return this.getStringAttribute('ip_sport_packet_rate_percentage_str');
  }
  public set ipSportPacketRatePercentageStr(value: string) {
    this._ipSportPacketRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRatePercentageStrInput() {
    return this._ipSportPacketRatePercentageStr;
  }

  // ip_sport_packet_rate_str - computed: false, optional: false, required: true
  private _ipSportPacketRateStr?: string; 
  public get ipSportPacketRateStr() {
    return this.getStringAttribute('ip_sport_packet_rate_str');
  }
  public set ipSportPacketRateStr(value: string) {
    this._ipSportPacketRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRateStrInput() {
    return this._ipSportPacketRateStr;
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
      ip_addr: cdktf.stringToTerraform(this._ipAddr),
      ip_sport_bit_rate: cdktf.numberToTerraform(this._ipSportBitRate),
      ip_sport_bit_rate_percentage: cdktf.numberToTerraform(this._ipSportBitRatePercentage),
      ip_sport_bit_rate_percentage_str: cdktf.stringToTerraform(this._ipSportBitRatePercentageStr),
      ip_sport_bit_rate_str: cdktf.stringToTerraform(this._ipSportBitRateStr),
      ip_sport_packet_rate: cdktf.numberToTerraform(this._ipSportPacketRate),
      ip_sport_packet_rate_percentage: cdktf.numberToTerraform(this._ipSportPacketRatePercentage),
      ip_sport_packet_rate_percentage_str: cdktf.stringToTerraform(this._ipSportPacketRatePercentageStr),
      ip_sport_packet_rate_str: cdktf.stringToTerraform(this._ipSportPacketRateStr),
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
      ip_addr: {
        value: cdktf.stringToHclTerraform(this._ipAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_sport_bit_rate: {
        value: cdktf.numberToHclTerraform(this._ipSportBitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_sport_bit_rate_percentage: {
        value: cdktf.numberToHclTerraform(this._ipSportBitRatePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_sport_bit_rate_percentage_str: {
        value: cdktf.stringToHclTerraform(this._ipSportBitRatePercentageStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_sport_bit_rate_str: {
        value: cdktf.stringToHclTerraform(this._ipSportBitRateStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_sport_packet_rate: {
        value: cdktf.numberToHclTerraform(this._ipSportPacketRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_sport_packet_rate_percentage: {
        value: cdktf.numberToHclTerraform(this._ipSportPacketRatePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_sport_packet_rate_percentage_str: {
        value: cdktf.stringToHclTerraform(this._ipSportPacketRatePercentageStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_sport_packet_rate_str: {
        value: cdktf.stringToHclTerraform(this._ipSportPacketRateStr),
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
