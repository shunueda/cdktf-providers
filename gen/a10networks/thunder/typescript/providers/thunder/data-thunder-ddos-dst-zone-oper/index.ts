// generated from terraform resource schema

import { DataThunderDdosDstZoneOperDetection, 
dataThunderDdosDstZoneOperDetectionToTerraform, 
dataThunderDdosDstZoneOperDetectionToHclTerraform, 
DataThunderDdosDstZoneOperDetectionOutputReference, 
DataThunderDdosDstZoneOperIpProto, 
dataThunderDdosDstZoneOperIpProtoToTerraform, 
dataThunderDdosDstZoneOperIpProtoToHclTerraform, 
DataThunderDdosDstZoneOperIpProtoOutputReference, 
DataThunderDdosDstZoneOperOper, 
dataThunderDdosDstZoneOperOperToTerraform, 
dataThunderDdosDstZoneOperOperToHclTerraform, 
DataThunderDdosDstZoneOperOperOutputReference, 
DataThunderDdosDstZoneOperOutboundPolicy, 
dataThunderDdosDstZoneOperOutboundPolicyToTerraform, 
dataThunderDdosDstZoneOperOutboundPolicyToHclTerraform, 
DataThunderDdosDstZoneOperOutboundPolicyOutputReference, 
DataThunderDdosDstZoneOperPacketAnomalyDetection, 
dataThunderDdosDstZoneOperPacketAnomalyDetectionToTerraform, 
dataThunderDdosDstZoneOperPacketAnomalyDetectionToHclTerraform, 
DataThunderDdosDstZoneOperPacketAnomalyDetectionOutputReference, 
DataThunderDdosDstZoneOperPort, 
dataThunderDdosDstZoneOperPortToTerraform, 
dataThunderDdosDstZoneOperPortToHclTerraform, 
DataThunderDdosDstZoneOperPortOutputReference, 
DataThunderDdosDstZoneOperPortRangeListStruct, 
dataThunderDdosDstZoneOperPortRangeListStructToTerraform, 
dataThunderDdosDstZoneOperPortRangeListStructToHclTerraform, 
DataThunderDdosDstZoneOperPortRangeListStructList, 
DataThunderDdosDstZoneOperSrcPort, 
dataThunderDdosDstZoneOperSrcPortToTerraform, 
dataThunderDdosDstZoneOperSrcPortToHclTerraform, 
DataThunderDdosDstZoneOperSrcPortOutputReference, 
DataThunderDdosDstZoneOperSrcPortRangeListStruct, 
dataThunderDdosDstZoneOperSrcPortRangeListStructToTerraform, 
dataThunderDdosDstZoneOperSrcPortRangeListStructToHclTerraform, 
DataThunderDdosDstZoneOperSrcPortRangeListStructList, 
DataThunderDdosDstZoneOperTopkDestinations, 
dataThunderDdosDstZoneOperTopkDestinationsToTerraform, 
dataThunderDdosDstZoneOperTopkDestinationsToHclTerraform, 
DataThunderDdosDstZoneOperTopkDestinationsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataThunderDdosDstZoneOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#id DataThunderDdosDstZoneOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#zone_name DataThunderDdosDstZoneOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#detection DataThunderDdosDstZoneOper#detection}
  */
  readonly detection?: DataThunderDdosDstZoneOperDetection;
  /**
  * ip_proto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#ip_proto DataThunderDdosDstZoneOper#ip_proto}
  */
  readonly ipProto?: DataThunderDdosDstZoneOperIpProto;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#oper DataThunderDdosDstZoneOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOperOper;
  /**
  * outbound_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#outbound_policy DataThunderDdosDstZoneOper#outbound_policy}
  */
  readonly outboundPolicy?: DataThunderDdosDstZoneOperOutboundPolicy;
  /**
  * packet_anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#packet_anomaly_detection DataThunderDdosDstZoneOper#packet_anomaly_detection}
  */
  readonly packetAnomalyDetection?: DataThunderDdosDstZoneOperPacketAnomalyDetection;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port DataThunderDdosDstZoneOper#port}
  */
  readonly port?: DataThunderDdosDstZoneOperPort;
  /**
  * port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#port_range_list DataThunderDdosDstZoneOper#port_range_list}
  */
  readonly portRangeList?: DataThunderDdosDstZoneOperPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * src_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#src_port DataThunderDdosDstZoneOper#src_port}
  */
  readonly srcPort?: DataThunderDdosDstZoneOperSrcPort;
  /**
  * src_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#src_port_range_list DataThunderDdosDstZoneOper#src_port_range_list}
  */
  readonly srcPortRangeList?: DataThunderDdosDstZoneOperSrcPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#topk_destinations DataThunderDdosDstZoneOper#topk_destinations}
  */
  readonly topkDestinations?: DataThunderDdosDstZoneOperTopkDestinations;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper thunder_ddos_dst_zone_oper}
*/
export class DataThunderDdosDstZoneOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_oper thunder_ddos_dst_zone_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_oper',
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
    this._id = config.id;
    this._zoneName = config.zoneName;
    this._detection.internalValue = config.detection;
    this._ipProto.internalValue = config.ipProto;
    this._oper.internalValue = config.oper;
    this._outboundPolicy.internalValue = config.outboundPolicy;
    this._packetAnomalyDetection.internalValue = config.packetAnomalyDetection;
    this._port.internalValue = config.port;
    this._portRangeList.internalValue = config.portRangeList;
    this._srcPort.internalValue = config.srcPort;
    this._srcPortRangeList.internalValue = config.srcPortRangeList;
    this._topkDestinations.internalValue = config.topkDestinations;
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

  // detection - computed: false, optional: true, required: false
  private _detection = new DataThunderDdosDstZoneOperDetectionOutputReference(this, "detection");
  public get detection() {
    return this._detection;
  }
  public putDetection(value: DataThunderDdosDstZoneOperDetection) {
    this._detection.internalValue = value;
  }
  public resetDetection() {
    this._detection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection.internalValue;
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto = new DataThunderDdosDstZoneOperIpProtoOutputReference(this, "ip_proto");
  public get ipProto() {
    return this._ipProto;
  }
  public putIpProto(value: DataThunderDdosDstZoneOperIpProto) {
    this._ipProto.internalValue = value;
  }
  public resetIpProto() {
    this._ipProto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // outbound_policy - computed: false, optional: true, required: false
  private _outboundPolicy = new DataThunderDdosDstZoneOperOutboundPolicyOutputReference(this, "outbound_policy");
  public get outboundPolicy() {
    return this._outboundPolicy;
  }
  public putOutboundPolicy(value: DataThunderDdosDstZoneOperOutboundPolicy) {
    this._outboundPolicy.internalValue = value;
  }
  public resetOutboundPolicy() {
    this._outboundPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPolicyInput() {
    return this._outboundPolicy.internalValue;
  }

  // packet_anomaly_detection - computed: false, optional: true, required: false
  private _packetAnomalyDetection = new DataThunderDdosDstZoneOperPacketAnomalyDetectionOutputReference(this, "packet_anomaly_detection");
  public get packetAnomalyDetection() {
    return this._packetAnomalyDetection;
  }
  public putPacketAnomalyDetection(value: DataThunderDdosDstZoneOperPacketAnomalyDetection) {
    this._packetAnomalyDetection.internalValue = value;
  }
  public resetPacketAnomalyDetection() {
    this._packetAnomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetAnomalyDetectionInput() {
    return this._packetAnomalyDetection.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataThunderDdosDstZoneOperPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataThunderDdosDstZoneOperPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // port_range_list - computed: false, optional: true, required: false
  private _portRangeList = new DataThunderDdosDstZoneOperPortRangeListStructList(this, "port_range_list", false);
  public get portRangeList() {
    return this._portRangeList;
  }
  public putPortRangeList(value: DataThunderDdosDstZoneOperPortRangeListStruct[] | cdktf.IResolvable) {
    this._portRangeList.internalValue = value;
  }
  public resetPortRangeList() {
    this._portRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeListInput() {
    return this._portRangeList.internalValue;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort = new DataThunderDdosDstZoneOperSrcPortOutputReference(this, "src_port");
  public get srcPort() {
    return this._srcPort;
  }
  public putSrcPort(value: DataThunderDdosDstZoneOperSrcPort) {
    this._srcPort.internalValue = value;
  }
  public resetSrcPort() {
    this._srcPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort.internalValue;
  }

  // src_port_range_list - computed: false, optional: true, required: false
  private _srcPortRangeList = new DataThunderDdosDstZoneOperSrcPortRangeListStructList(this, "src_port_range_list", false);
  public get srcPortRangeList() {
    return this._srcPortRangeList;
  }
  public putSrcPortRangeList(value: DataThunderDdosDstZoneOperSrcPortRangeListStruct[] | cdktf.IResolvable) {
    this._srcPortRangeList.internalValue = value;
  }
  public resetSrcPortRangeList() {
    this._srcPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeListInput() {
    return this._srcPortRangeList.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DataThunderDdosDstZoneOperTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DataThunderDdosDstZoneOperTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      detection: dataThunderDdosDstZoneOperDetectionToTerraform(this._detection.internalValue),
      ip_proto: dataThunderDdosDstZoneOperIpProtoToTerraform(this._ipProto.internalValue),
      oper: dataThunderDdosDstZoneOperOperToTerraform(this._oper.internalValue),
      outbound_policy: dataThunderDdosDstZoneOperOutboundPolicyToTerraform(this._outboundPolicy.internalValue),
      packet_anomaly_detection: dataThunderDdosDstZoneOperPacketAnomalyDetectionToTerraform(this._packetAnomalyDetection.internalValue),
      port: dataThunderDdosDstZoneOperPortToTerraform(this._port.internalValue),
      port_range_list: cdktf.listMapper(dataThunderDdosDstZoneOperPortRangeListStructToTerraform, true)(this._portRangeList.internalValue),
      src_port: dataThunderDdosDstZoneOperSrcPortToTerraform(this._srcPort.internalValue),
      src_port_range_list: cdktf.listMapper(dataThunderDdosDstZoneOperSrcPortRangeListStructToTerraform, true)(this._srcPortRangeList.internalValue),
      topk_destinations: dataThunderDdosDstZoneOperTopkDestinationsToTerraform(this._topkDestinations.internalValue),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detection: {
        value: dataThunderDdosDstZoneOperDetectionToHclTerraform(this._detection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperDetectionList",
      },
      ip_proto: {
        value: dataThunderDdosDstZoneOperIpProtoToHclTerraform(this._ipProto.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperIpProtoList",
      },
      oper: {
        value: dataThunderDdosDstZoneOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperOperList",
      },
      outbound_policy: {
        value: dataThunderDdosDstZoneOperOutboundPolicyToHclTerraform(this._outboundPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperOutboundPolicyList",
      },
      packet_anomaly_detection: {
        value: dataThunderDdosDstZoneOperPacketAnomalyDetectionToHclTerraform(this._packetAnomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperPacketAnomalyDetectionList",
      },
      port: {
        value: dataThunderDdosDstZoneOperPortToHclTerraform(this._port.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperPortList",
      },
      port_range_list: {
        value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperPortRangeListStructToHclTerraform, true)(this._portRangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperPortRangeListStructList",
      },
      src_port: {
        value: dataThunderDdosDstZoneOperSrcPortToHclTerraform(this._srcPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperSrcPortList",
      },
      src_port_range_list: {
        value: cdktf.listMapperHcl(dataThunderDdosDstZoneOperSrcPortRangeListStructToHclTerraform, true)(this._srcPortRangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperSrcPortRangeListStructList",
      },
      topk_destinations: {
        value: dataThunderDdosDstZoneOperTopkDestinationsToHclTerraform(this._topkDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOperTopkDestinationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
