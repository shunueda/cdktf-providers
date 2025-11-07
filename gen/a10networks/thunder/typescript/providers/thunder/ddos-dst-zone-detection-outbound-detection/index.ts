// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneDetectionOutboundDetectionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#configuration DdosDstZoneDetectionOutboundDetectionA#configuration}
  */
  readonly configuration: string;
  /**
  * 'asn': Autonomous Systems number; 'country': Country;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#discovery_method DdosDstZoneDetectionOutboundDetectionA#discovery_method}
  */
  readonly discoveryMethod?: string;
  /**
  * Maximum number of top locations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#discovery_record DdosDstZoneDetectionOutboundDetectionA#discovery_record}
  */
  readonly discoveryRecord?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#id DdosDstZoneDetectionOutboundDetectionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable outbound detection; 'disable': Disable outbound detection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#toggle DdosDstZoneDetectionOutboundDetectionA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#uuid DdosDstZoneDetectionOutboundDetectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#zone_name DdosDstZoneDetectionOutboundDetectionA#zone_name}
  */
  readonly zoneName: string;
  /**
  * enable_top_k block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#enable_top_k DdosDstZoneDetectionOutboundDetectionA#enable_top_k}
  */
  readonly enableTopK?: DdosDstZoneDetectionOutboundDetectionEnableTopKA[] | cdktf.IResolvable;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#indicator_list DdosDstZoneDetectionOutboundDetectionA#indicator_list}
  */
  readonly indicatorList?: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA[] | cdktf.IResolvable;
  /**
  * topk_source_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#topk_source_subnet DdosDstZoneDetectionOutboundDetectionA#topk_source_subnet}
  */
  readonly topkSourceSubnet?: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA;
}
export interface DdosDstZoneDetectionOutboundDetectionEnableTopKA {
  /**
  * Subnet mask. The value should be less than or equal to the minimum zone subnet mask + 8 (IPv6 Subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#topk_netmask DdosDstZoneDetectionOutboundDetectionA#topk_netmask}
  */
  readonly topkNetmask?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#topk_num_records DdosDstZoneDetectionOutboundDetectionA#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * 'source-subnet': Topk source subnet;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#topk_type DdosDstZoneDetectionOutboundDetectionA#topk_type}
  */
  readonly topkType?: string;
}

export function ddosDstZoneDetectionOutboundDetectionEnableTopKAToTerraform(struct?: DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topk_netmask: cdktf.numberToTerraform(struct!.topkNetmask),
    topk_num_records: cdktf.numberToTerraform(struct!.topkNumRecords),
    topk_type: cdktf.stringToTerraform(struct!.topkType),
  }
}


export function ddosDstZoneDetectionOutboundDetectionEnableTopKAToHclTerraform(struct?: DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topk_netmask: {
      value: cdktf.numberToHclTerraform(struct!.topkNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_type: {
      value: cdktf.stringToHclTerraform(struct!.topkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionOutboundDetectionEnableTopKAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topkNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNetmask = this._topkNetmask;
    }
    if (this._topkNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkNumRecords = this._topkNumRecords;
    }
    if (this._topkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkType = this._topkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionOutboundDetectionEnableTopKA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topkNetmask = undefined;
      this._topkNumRecords = undefined;
      this._topkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topkNetmask = value.topkNetmask;
      this._topkNumRecords = value.topkNumRecords;
      this._topkType = value.topkType;
    }
  }

  // topk_netmask - computed: false, optional: true, required: false
  private _topkNetmask?: number; 
  public get topkNetmask() {
    return this.getNumberAttribute('topk_netmask');
  }
  public set topkNetmask(value: number) {
    this._topkNetmask = value;
  }
  public resetTopkNetmask() {
    this._topkNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNetmaskInput() {
    return this._topkNetmask;
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
  }

  // topk_type - computed: false, optional: true, required: false
  private _topkType?: string; 
  public get topkType() {
    return this.getStringAttribute('topk_type');
  }
  public set topkType(value: string) {
    this._topkType = value;
  }
  public resetTopkType() {
    this._topkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkTypeInput() {
    return this._topkType;
  }
}

export class DdosDstZoneDetectionOutboundDetectionEnableTopKAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneDetectionOutboundDetectionEnableTopKA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DdosDstZoneDetectionOutboundDetectionEnableTopKAOutputReference {
    return new DdosDstZoneDetectionOutboundDetectionEnableTopKAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneDetectionOutboundDetectionIndicatorListStructA {
  /**
  * Expected minimal data size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#data_packet_size DdosDstZoneDetectionOutboundDetectionA#data_packet_size}
  */
  readonly dataPacketSize?: number;
  /**
  * Expected minimal window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#tcp_window_size DdosDstZoneDetectionOutboundDetectionA#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Threshold for each geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#threshold_large_num DdosDstZoneDetectionOutboundDetectionA#threshold_large_num}
  */
  readonly thresholdLargeNum?: number;
  /**
  * Threshold for each geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#threshold_num DdosDstZoneDetectionOutboundDetectionA#threshold_num}
  */
  readonly thresholdNum?: number;
  /**
  * Threshold for each geo-location (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#threshold_str DdosDstZoneDetectionOutboundDetectionA#threshold_str}
  */
  readonly thresholdStr?: string;
  /**
  * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits; 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio': ratio of incoming packet rate divided by the rate of outgoing packets; 'syn-rate': rate on incoming SYN packets; 'fin-rate': rate on incoming FIN packets; 'rst-rate': rate of incoming RST packets; 'small-window-ack-rate': rate of small window advertisement; 'empty-ack-rate': rate of incoming packets which have no payload; 'small-payload-rate': rate of short payload packet; 'syn-fin-ratio': ratio of incoming SYN packet rate divided by the rate of incoming FIN packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#type DdosDstZoneDetectionOutboundDetectionA#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#user_tag DdosDstZoneDetectionOutboundDetectionA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#uuid DdosDstZoneDetectionOutboundDetectionA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToTerraform(struct?: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_packet_size: cdktf.numberToTerraform(struct!.dataPacketSize),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    threshold_large_num: cdktf.numberToTerraform(struct!.thresholdLargeNum),
    threshold_num: cdktf.numberToTerraform(struct!.thresholdNum),
    threshold_str: cdktf.stringToTerraform(struct!.thresholdStr),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToHclTerraform(struct?: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_packet_size: {
      value: cdktf.numberToHclTerraform(struct!.dataPacketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.thresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.thresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.thresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionOutboundDetectionIndicatorListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPacketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPacketSize = this._dataPacketSize;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._thresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdLargeNum = this._thresholdLargeNum;
    }
    if (this._thresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNum = this._thresholdNum;
    }
    if (this._thresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdStr = this._thresholdStr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPacketSize = undefined;
      this._tcpWindowSize = undefined;
      this._thresholdLargeNum = undefined;
      this._thresholdNum = undefined;
      this._thresholdStr = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPacketSize = value.dataPacketSize;
      this._tcpWindowSize = value.tcpWindowSize;
      this._thresholdLargeNum = value.thresholdLargeNum;
      this._thresholdNum = value.thresholdNum;
      this._thresholdStr = value.thresholdStr;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

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
}

export class DdosDstZoneDetectionOutboundDetectionIndicatorListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDstZoneDetectionOutboundDetectionIndicatorListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DdosDstZoneDetectionOutboundDetectionIndicatorListStructAOutputReference {
    return new DdosDstZoneDetectionOutboundDetectionIndicatorListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#uuid DdosDstZoneDetectionOutboundDetectionA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToTerraform(struct?: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference | DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToHclTerraform(struct?: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference | DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection thunder_ddos_dst_zone_detection_outbound_detection}
*/
export class DdosDstZoneDetectionOutboundDetectionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection_outbound_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneDetectionOutboundDetectionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneDetectionOutboundDetectionA to import
  * @param importFromId The id of the existing DdosDstZoneDetectionOutboundDetectionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneDetectionOutboundDetectionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection_outbound_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_detection_outbound_detection thunder_ddos_dst_zone_detection_outbound_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneDetectionOutboundDetectionAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneDetectionOutboundDetectionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection_outbound_detection',
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
    this._discoveryMethod = config.discoveryMethod;
    this._discoveryRecord = config.discoveryRecord;
    this._id = config.id;
    this._toggle = config.toggle;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._enableTopK.internalValue = config.enableTopK;
    this._indicatorList.internalValue = config.indicatorList;
    this._topkSourceSubnet.internalValue = config.topkSourceSubnet;
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

  // discovery_method - computed: false, optional: true, required: false
  private _discoveryMethod?: string; 
  public get discoveryMethod() {
    return this.getStringAttribute('discovery_method');
  }
  public set discoveryMethod(value: string) {
    this._discoveryMethod = value;
  }
  public resetDiscoveryMethod() {
    this._discoveryMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMethodInput() {
    return this._discoveryMethod;
  }

  // discovery_record - computed: false, optional: true, required: false
  private _discoveryRecord?: number; 
  public get discoveryRecord() {
    return this.getNumberAttribute('discovery_record');
  }
  public set discoveryRecord(value: number) {
    this._discoveryRecord = value;
  }
  public resetDiscoveryRecord() {
    this._discoveryRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryRecordInput() {
    return this._discoveryRecord;
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

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK = new DdosDstZoneDetectionOutboundDetectionEnableTopKAList(this, "enable_top_k", false);
  public get enableTopK() {
    return this._enableTopK;
  }
  public putEnableTopK(value: DdosDstZoneDetectionOutboundDetectionEnableTopKA[] | cdktf.IResolvable) {
    this._enableTopK.internalValue = value;
  }
  public resetEnableTopK() {
    this._enableTopK.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK.internalValue;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZoneDetectionOutboundDetectionIndicatorListStructAList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZoneDetectionOutboundDetectionIndicatorListStructA[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }

  // topk_source_subnet - computed: false, optional: true, required: false
  private _topkSourceSubnet = new DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAOutputReference(this, "topk_source_subnet");
  public get topkSourceSubnet() {
    return this._topkSourceSubnet;
  }
  public putTopkSourceSubnet(value: DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetA) {
    this._topkSourceSubnet.internalValue = value;
  }
  public resetTopkSourceSubnet() {
    this._topkSourceSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourceSubnetInput() {
    return this._topkSourceSubnet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: cdktf.stringToTerraform(this._configuration),
      discovery_method: cdktf.stringToTerraform(this._discoveryMethod),
      discovery_record: cdktf.numberToTerraform(this._discoveryRecord),
      id: cdktf.stringToTerraform(this._id),
      toggle: cdktf.stringToTerraform(this._toggle),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      enable_top_k: cdktf.listMapper(ddosDstZoneDetectionOutboundDetectionEnableTopKAToTerraform, true)(this._enableTopK.internalValue),
      indicator_list: cdktf.listMapper(ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToTerraform, true)(this._indicatorList.internalValue),
      topk_source_subnet: ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToTerraform(this._topkSourceSubnet.internalValue),
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
      discovery_method: {
        value: cdktf.stringToHclTerraform(this._discoveryMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_record: {
        value: cdktf.numberToHclTerraform(this._discoveryRecord),
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
      enable_top_k: {
        value: cdktf.listMapperHcl(ddosDstZoneDetectionOutboundDetectionEnableTopKAToHclTerraform, true)(this._enableTopK.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionOutboundDetectionEnableTopKAList",
      },
      indicator_list: {
        value: cdktf.listMapperHcl(ddosDstZoneDetectionOutboundDetectionIndicatorListStructAToHclTerraform, true)(this._indicatorList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionOutboundDetectionIndicatorListStructAList",
      },
      topk_source_subnet: {
        value: ddosDstZoneDetectionOutboundDetectionTopkSourceSubnetAToHclTerraform(this._topkSourceSubnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionOutboundDetectionTopkSourceSubnetAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
