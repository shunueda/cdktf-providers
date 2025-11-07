// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderInterfaceCommonOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#id DataThunderInterfaceCommonOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#oper DataThunderInterfaceCommonOper#oper}
  */
  readonly oper?: DataThunderInterfaceCommonOperOper;
}
export interface DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#curr DataThunderInterfaceCommonOper#curr}
  */
  readonly curr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#hi_alarm DataThunderInterfaceCommonOper#hi_alarm}
  */
  readonly hiAlarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#hi_warn DataThunderInterfaceCommonOper#hi_warn}
  */
  readonly hiWarn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#lane DataThunderInterfaceCommonOper#lane}
  */
  readonly lane?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#lo_alarm DataThunderInterfaceCommonOper#lo_alarm}
  */
  readonly loAlarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#lo_warn DataThunderInterfaceCommonOper#lo_warn}
  */
  readonly loWarn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#transceiver_type DataThunderInterfaceCommonOper#transceiver_type}
  */
  readonly transceiverType?: string;
}

export function dataThunderInterfaceCommonOperOperInterfacesTransceiversInfoToTerraform(struct?: DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr: cdktf.stringToTerraform(struct!.curr),
    hi_alarm: cdktf.stringToTerraform(struct!.hiAlarm),
    hi_warn: cdktf.stringToTerraform(struct!.hiWarn),
    lane: cdktf.numberToTerraform(struct!.lane),
    lo_alarm: cdktf.stringToTerraform(struct!.loAlarm),
    lo_warn: cdktf.stringToTerraform(struct!.loWarn),
    transceiver_type: cdktf.stringToTerraform(struct!.transceiverType),
  }
}


export function dataThunderInterfaceCommonOperOperInterfacesTransceiversInfoToHclTerraform(struct?: DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr: {
      value: cdktf.stringToHclTerraform(struct!.curr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hi_alarm: {
      value: cdktf.stringToHclTerraform(struct!.hiAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hi_warn: {
      value: cdktf.stringToHclTerraform(struct!.hiWarn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lane: {
      value: cdktf.numberToHclTerraform(struct!.lane),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lo_alarm: {
      value: cdktf.stringToHclTerraform(struct!.loAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lo_warn: {
      value: cdktf.stringToHclTerraform(struct!.loWarn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transceiver_type: {
      value: cdktf.stringToHclTerraform(struct!.transceiverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceCommonOperOperInterfacesTransceiversInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curr !== undefined) {
      hasAnyValues = true;
      internalValueResult.curr = this._curr;
    }
    if (this._hiAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiAlarm = this._hiAlarm;
    }
    if (this._hiWarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiWarn = this._hiWarn;
    }
    if (this._lane !== undefined) {
      hasAnyValues = true;
      internalValueResult.lane = this._lane;
    }
    if (this._loAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.loAlarm = this._loAlarm;
    }
    if (this._loWarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.loWarn = this._loWarn;
    }
    if (this._transceiverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transceiverType = this._transceiverType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curr = undefined;
      this._hiAlarm = undefined;
      this._hiWarn = undefined;
      this._lane = undefined;
      this._loAlarm = undefined;
      this._loWarn = undefined;
      this._transceiverType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curr = value.curr;
      this._hiAlarm = value.hiAlarm;
      this._hiWarn = value.hiWarn;
      this._lane = value.lane;
      this._loAlarm = value.loAlarm;
      this._loWarn = value.loWarn;
      this._transceiverType = value.transceiverType;
    }
  }

  // curr - computed: false, optional: true, required: false
  private _curr?: string; 
  public get curr() {
    return this.getStringAttribute('curr');
  }
  public set curr(value: string) {
    this._curr = value;
  }
  public resetCurr() {
    this._curr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currInput() {
    return this._curr;
  }

  // hi_alarm - computed: false, optional: true, required: false
  private _hiAlarm?: string; 
  public get hiAlarm() {
    return this.getStringAttribute('hi_alarm');
  }
  public set hiAlarm(value: string) {
    this._hiAlarm = value;
  }
  public resetHiAlarm() {
    this._hiAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiAlarmInput() {
    return this._hiAlarm;
  }

  // hi_warn - computed: false, optional: true, required: false
  private _hiWarn?: string; 
  public get hiWarn() {
    return this.getStringAttribute('hi_warn');
  }
  public set hiWarn(value: string) {
    this._hiWarn = value;
  }
  public resetHiWarn() {
    this._hiWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiWarnInput() {
    return this._hiWarn;
  }

  // lane - computed: false, optional: true, required: false
  private _lane?: number; 
  public get lane() {
    return this.getNumberAttribute('lane');
  }
  public set lane(value: number) {
    this._lane = value;
  }
  public resetLane() {
    this._lane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get laneInput() {
    return this._lane;
  }

  // lo_alarm - computed: false, optional: true, required: false
  private _loAlarm?: string; 
  public get loAlarm() {
    return this.getStringAttribute('lo_alarm');
  }
  public set loAlarm(value: string) {
    this._loAlarm = value;
  }
  public resetLoAlarm() {
    this._loAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loAlarmInput() {
    return this._loAlarm;
  }

  // lo_warn - computed: false, optional: true, required: false
  private _loWarn?: string; 
  public get loWarn() {
    return this.getStringAttribute('lo_warn');
  }
  public set loWarn(value: string) {
    this._loWarn = value;
  }
  public resetLoWarn() {
    this._loWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loWarnInput() {
    return this._loWarn;
  }

  // transceiver_type - computed: false, optional: true, required: false
  private _transceiverType?: string; 
  public get transceiverType() {
    return this.getStringAttribute('transceiver_type');
  }
  public set transceiverType(value: string) {
    this._transceiverType = value;
  }
  public resetTransceiverType() {
    this._transceiverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transceiverTypeInput() {
    return this._transceiverType;
  }
}

export class DataThunderInterfaceCommonOperOperInterfacesTransceiversInfoList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceCommonOperOperInterfacesTransceiversInfoOutputReference {
    return new DataThunderInterfaceCommonOperOperInterfacesTransceiversInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceCommonOperOperInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#input_utilization DataThunderInterfaceCommonOper#input_utilization}
  */
  readonly inputUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#is_part_default_vlan DataThunderInterfaceCommonOper#is_part_default_vlan}
  */
  readonly isPartDefaultVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#output_utilization DataThunderInterfaceCommonOper#output_utilization}
  */
  readonly outputUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#port_num DataThunderInterfaceCommonOper#port_num}
  */
  readonly portNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#port_type DataThunderInterfaceCommonOper#port_type}
  */
  readonly portType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#rate_byte_rcvd DataThunderInterfaceCommonOper#rate_byte_rcvd}
  */
  readonly rateByteRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#rate_byte_sent DataThunderInterfaceCommonOper#rate_byte_sent}
  */
  readonly rateByteSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#rate_pkt_rcvd DataThunderInterfaceCommonOper#rate_pkt_rcvd}
  */
  readonly ratePktRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#rate_pkt_sent DataThunderInterfaceCommonOper#rate_pkt_sent}
  */
  readonly ratePktSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#span_tree DataThunderInterfaceCommonOper#span_tree}
  */
  readonly spanTree?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#total_lane DataThunderInterfaceCommonOper#total_lane}
  */
  readonly totalLane?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#type_vendor_part DataThunderInterfaceCommonOper#type_vendor_part}
  */
  readonly typeVendorPart?: string;
  /**
  * transceivers_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#transceivers_info DataThunderInterfaceCommonOper#transceivers_info}
  */
  readonly transceiversInfo?: DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo[] | cdktf.IResolvable;
}

export function dataThunderInterfaceCommonOperOperInterfacesToTerraform(struct?: DataThunderInterfaceCommonOperOperInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_utilization: cdktf.numberToTerraform(struct!.inputUtilization),
    is_part_default_vlan: cdktf.stringToTerraform(struct!.isPartDefaultVlan),
    output_utilization: cdktf.numberToTerraform(struct!.outputUtilization),
    port_num: cdktf.stringToTerraform(struct!.portNum),
    port_type: cdktf.stringToTerraform(struct!.portType),
    rate_byte_rcvd: cdktf.numberToTerraform(struct!.rateByteRcvd),
    rate_byte_sent: cdktf.numberToTerraform(struct!.rateByteSent),
    rate_pkt_rcvd: cdktf.numberToTerraform(struct!.ratePktRcvd),
    rate_pkt_sent: cdktf.numberToTerraform(struct!.ratePktSent),
    span_tree: cdktf.stringToTerraform(struct!.spanTree),
    total_lane: cdktf.numberToTerraform(struct!.totalLane),
    type_vendor_part: cdktf.stringToTerraform(struct!.typeVendorPart),
    transceivers_info: cdktf.listMapper(dataThunderInterfaceCommonOperOperInterfacesTransceiversInfoToTerraform, true)(struct!.transceiversInfo),
  }
}


export function dataThunderInterfaceCommonOperOperInterfacesToHclTerraform(struct?: DataThunderInterfaceCommonOperOperInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_utilization: {
      value: cdktf.numberToHclTerraform(struct!.inputUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_part_default_vlan: {
      value: cdktf.stringToHclTerraform(struct!.isPartDefaultVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_utilization: {
      value: cdktf.numberToHclTerraform(struct!.outputUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num: {
      value: cdktf.stringToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_type: {
      value: cdktf.stringToHclTerraform(struct!.portType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.rateByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.rateByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ratePktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.ratePktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    span_tree: {
      value: cdktf.stringToHclTerraform(struct!.spanTree),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_lane: {
      value: cdktf.numberToHclTerraform(struct!.totalLane),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_vendor_part: {
      value: cdktf.stringToHclTerraform(struct!.typeVendorPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transceivers_info: {
      value: cdktf.listMapperHcl(dataThunderInterfaceCommonOperOperInterfacesTransceiversInfoToHclTerraform, true)(struct!.transceiversInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceCommonOperOperInterfacesTransceiversInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceCommonOperOperInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderInterfaceCommonOperOperInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputUtilization = this._inputUtilization;
    }
    if (this._isPartDefaultVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPartDefaultVlan = this._isPartDefaultVlan;
    }
    if (this._outputUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputUtilization = this._outputUtilization;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._portType !== undefined) {
      hasAnyValues = true;
      internalValueResult.portType = this._portType;
    }
    if (this._rateByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteRcvd = this._rateByteRcvd;
    }
    if (this._rateByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateByteSent = this._rateByteSent;
    }
    if (this._ratePktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktRcvd = this._ratePktRcvd;
    }
    if (this._ratePktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratePktSent = this._ratePktSent;
    }
    if (this._spanTree !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanTree = this._spanTree;
    }
    if (this._totalLane !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLane = this._totalLane;
    }
    if (this._typeVendorPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVendorPart = this._typeVendorPart;
    }
    if (this._transceiversInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transceiversInfo = this._transceiversInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceCommonOperOperInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputUtilization = undefined;
      this._isPartDefaultVlan = undefined;
      this._outputUtilization = undefined;
      this._portNum = undefined;
      this._portType = undefined;
      this._rateByteRcvd = undefined;
      this._rateByteSent = undefined;
      this._ratePktRcvd = undefined;
      this._ratePktSent = undefined;
      this._spanTree = undefined;
      this._totalLane = undefined;
      this._typeVendorPart = undefined;
      this._transceiversInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputUtilization = value.inputUtilization;
      this._isPartDefaultVlan = value.isPartDefaultVlan;
      this._outputUtilization = value.outputUtilization;
      this._portNum = value.portNum;
      this._portType = value.portType;
      this._rateByteRcvd = value.rateByteRcvd;
      this._rateByteSent = value.rateByteSent;
      this._ratePktRcvd = value.ratePktRcvd;
      this._ratePktSent = value.ratePktSent;
      this._spanTree = value.spanTree;
      this._totalLane = value.totalLane;
      this._typeVendorPart = value.typeVendorPart;
      this._transceiversInfo.internalValue = value.transceiversInfo;
    }
  }

  // input_utilization - computed: false, optional: true, required: false
  private _inputUtilization?: number; 
  public get inputUtilization() {
    return this.getNumberAttribute('input_utilization');
  }
  public set inputUtilization(value: number) {
    this._inputUtilization = value;
  }
  public resetInputUtilization() {
    this._inputUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputUtilizationInput() {
    return this._inputUtilization;
  }

  // is_part_default_vlan - computed: false, optional: true, required: false
  private _isPartDefaultVlan?: string; 
  public get isPartDefaultVlan() {
    return this.getStringAttribute('is_part_default_vlan');
  }
  public set isPartDefaultVlan(value: string) {
    this._isPartDefaultVlan = value;
  }
  public resetIsPartDefaultVlan() {
    this._isPartDefaultVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPartDefaultVlanInput() {
    return this._isPartDefaultVlan;
  }

  // output_utilization - computed: false, optional: true, required: false
  private _outputUtilization?: number; 
  public get outputUtilization() {
    return this.getNumberAttribute('output_utilization');
  }
  public set outputUtilization(value: number) {
    this._outputUtilization = value;
  }
  public resetOutputUtilization() {
    this._outputUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputUtilizationInput() {
    return this._outputUtilization;
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: string; 
  public get portNum() {
    return this.getStringAttribute('port_num');
  }
  public set portNum(value: string) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_type - computed: false, optional: true, required: false
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  public resetPortType() {
    this._portType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // rate_byte_rcvd - computed: false, optional: true, required: false
  private _rateByteRcvd?: number; 
  public get rateByteRcvd() {
    return this.getNumberAttribute('rate_byte_rcvd');
  }
  public set rateByteRcvd(value: number) {
    this._rateByteRcvd = value;
  }
  public resetRateByteRcvd() {
    this._rateByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteRcvdInput() {
    return this._rateByteRcvd;
  }

  // rate_byte_sent - computed: false, optional: true, required: false
  private _rateByteSent?: number; 
  public get rateByteSent() {
    return this.getNumberAttribute('rate_byte_sent');
  }
  public set rateByteSent(value: number) {
    this._rateByteSent = value;
  }
  public resetRateByteSent() {
    this._rateByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByteSentInput() {
    return this._rateByteSent;
  }

  // rate_pkt_rcvd - computed: false, optional: true, required: false
  private _ratePktRcvd?: number; 
  public get ratePktRcvd() {
    return this.getNumberAttribute('rate_pkt_rcvd');
  }
  public set ratePktRcvd(value: number) {
    this._ratePktRcvd = value;
  }
  public resetRatePktRcvd() {
    this._ratePktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktRcvdInput() {
    return this._ratePktRcvd;
  }

  // rate_pkt_sent - computed: false, optional: true, required: false
  private _ratePktSent?: number; 
  public get ratePktSent() {
    return this.getNumberAttribute('rate_pkt_sent');
  }
  public set ratePktSent(value: number) {
    this._ratePktSent = value;
  }
  public resetRatePktSent() {
    this._ratePktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePktSentInput() {
    return this._ratePktSent;
  }

  // span_tree - computed: false, optional: true, required: false
  private _spanTree?: string; 
  public get spanTree() {
    return this.getStringAttribute('span_tree');
  }
  public set spanTree(value: string) {
    this._spanTree = value;
  }
  public resetSpanTree() {
    this._spanTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanTreeInput() {
    return this._spanTree;
  }

  // total_lane - computed: false, optional: true, required: false
  private _totalLane?: number; 
  public get totalLane() {
    return this.getNumberAttribute('total_lane');
  }
  public set totalLane(value: number) {
    this._totalLane = value;
  }
  public resetTotalLane() {
    this._totalLane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLaneInput() {
    return this._totalLane;
  }

  // type_vendor_part - computed: false, optional: true, required: false
  private _typeVendorPart?: string; 
  public get typeVendorPart() {
    return this.getStringAttribute('type_vendor_part');
  }
  public set typeVendorPart(value: string) {
    this._typeVendorPart = value;
  }
  public resetTypeVendorPart() {
    this._typeVendorPart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVendorPartInput() {
    return this._typeVendorPart;
  }

  // transceivers_info - computed: false, optional: true, required: false
  private _transceiversInfo = new DataThunderInterfaceCommonOperOperInterfacesTransceiversInfoList(this, "transceivers_info", false);
  public get transceiversInfo() {
    return this._transceiversInfo;
  }
  public putTransceiversInfo(value: DataThunderInterfaceCommonOperOperInterfacesTransceiversInfo[] | cdktf.IResolvable) {
    this._transceiversInfo.internalValue = value;
  }
  public resetTransceiversInfo() {
    this._transceiversInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transceiversInfoInput() {
    return this._transceiversInfo.internalValue;
  }
}

export class DataThunderInterfaceCommonOperOperInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataThunderInterfaceCommonOperOperInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataThunderInterfaceCommonOperOperInterfacesOutputReference {
    return new DataThunderInterfaceCommonOperOperInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderInterfaceCommonOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#interval DataThunderInterfaceCommonOper#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#time DataThunderInterfaceCommonOper#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#tot_num_phy_intf DataThunderInterfaceCommonOper#tot_num_phy_intf}
  */
  readonly totNumPhyIntf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#vnp_id DataThunderInterfaceCommonOper#vnp_id}
  */
  readonly vnpId?: number;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#interfaces DataThunderInterfaceCommonOper#interfaces}
  */
  readonly interfaces?: DataThunderInterfaceCommonOperOperInterfaces[] | cdktf.IResolvable;
}

export function dataThunderInterfaceCommonOperOperToTerraform(struct?: DataThunderInterfaceCommonOperOperOutputReference | DataThunderInterfaceCommonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    time: cdktf.stringToTerraform(struct!.time),
    tot_num_phy_intf: cdktf.numberToTerraform(struct!.totNumPhyIntf),
    vnp_id: cdktf.numberToTerraform(struct!.vnpId),
    interfaces: cdktf.listMapper(dataThunderInterfaceCommonOperOperInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function dataThunderInterfaceCommonOperOperToHclTerraform(struct?: DataThunderInterfaceCommonOperOperOutputReference | DataThunderInterfaceCommonOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tot_num_phy_intf: {
      value: cdktf.numberToHclTerraform(struct!.totNumPhyIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vnp_id: {
      value: cdktf.numberToHclTerraform(struct!.vnpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataThunderInterfaceCommonOperOperInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderInterfaceCommonOperOperInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderInterfaceCommonOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderInterfaceCommonOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._totNumPhyIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.totNumPhyIntf = this._totNumPhyIntf;
    }
    if (this._vnpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnpId = this._vnpId;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderInterfaceCommonOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._time = undefined;
      this._totNumPhyIntf = undefined;
      this._vnpId = undefined;
      this._interfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._time = value.time;
      this._totNumPhyIntf = value.totNumPhyIntf;
      this._vnpId = value.vnpId;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // tot_num_phy_intf - computed: false, optional: true, required: false
  private _totNumPhyIntf?: number; 
  public get totNumPhyIntf() {
    return this.getNumberAttribute('tot_num_phy_intf');
  }
  public set totNumPhyIntf(value: number) {
    this._totNumPhyIntf = value;
  }
  public resetTotNumPhyIntf() {
    this._totNumPhyIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totNumPhyIntfInput() {
    return this._totNumPhyIntf;
  }

  // vnp_id - computed: false, optional: true, required: false
  private _vnpId?: number; 
  public get vnpId() {
    return this.getNumberAttribute('vnp_id');
  }
  public set vnpId(value: number) {
    this._vnpId = value;
  }
  public resetVnpId() {
    this._vnpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnpIdInput() {
    return this._vnpId;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataThunderInterfaceCommonOperOperInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataThunderInterfaceCommonOperOperInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper thunder_interface_common_oper}
*/
export class DataThunderInterfaceCommonOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_common_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderInterfaceCommonOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderInterfaceCommonOper to import
  * @param importFromId The id of the existing DataThunderInterfaceCommonOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderInterfaceCommonOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_common_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/interface_common_oper thunder_interface_common_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderInterfaceCommonOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderInterfaceCommonOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_common_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderInterfaceCommonOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderInterfaceCommonOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderInterfaceCommonOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderInterfaceCommonOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderInterfaceCommonOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
