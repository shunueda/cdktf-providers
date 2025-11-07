// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneProfilePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#id DdosZoneProfilePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#port_num DdosZoneProfilePort#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': dns-tcp; 'dns-udp': dns-udp; 'sip-tcp': sip-tcp; 'sip-udp': sip-udp; 'http': http; 'tcp': tcp; 'udp': udp; 'ssl-l4': ssl-l4; 'quic': quic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#port_protocol DdosZoneProfilePort#port_protocol}
  */
  readonly portProtocol: string;
  /**
  * ProfileName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#profile_name DdosZoneProfilePort#profile_name}
  */
  readonly profileName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#user_tag DdosZoneProfilePort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#uuid DdosZoneProfilePort#uuid}
  */
  readonly uuid?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#indicator_list DdosZoneProfilePort#indicator_list}
  */
  readonly indicatorList?: DdosZoneProfilePortIndicatorListStruct[] | cdktf.IResolvable;
}
export interface DdosZoneProfilePortIndicatorListSrcThresholdCfg {
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#src_threshold_large_num DdosZoneProfilePort#src_threshold_large_num}
  */
  readonly srcThresholdLargeNum?: number;
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#src_threshold_num DdosZoneProfilePort#src_threshold_num}
  */
  readonly srcThresholdNum?: number;
  /**
  * Indicator per-src threshold (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#src_threshold_str DdosZoneProfilePort#src_threshold_str}
  */
  readonly srcThresholdStr?: string;
}

export function ddosZoneProfilePortIndicatorListSrcThresholdCfgToTerraform(struct?: DdosZoneProfilePortIndicatorListSrcThresholdCfgOutputReference | DdosZoneProfilePortIndicatorListSrcThresholdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_threshold_large_num: cdktf.numberToTerraform(struct!.srcThresholdLargeNum),
    src_threshold_num: cdktf.numberToTerraform(struct!.srcThresholdNum),
    src_threshold_str: cdktf.stringToTerraform(struct!.srcThresholdStr),
  }
}


export function ddosZoneProfilePortIndicatorListSrcThresholdCfgToHclTerraform(struct?: DdosZoneProfilePortIndicatorListSrcThresholdCfgOutputReference | DdosZoneProfilePortIndicatorListSrcThresholdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.srcThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.srcThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.srcThresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneProfilePortIndicatorListSrcThresholdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneProfilePortIndicatorListSrcThresholdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdLargeNum = this._srcThresholdLargeNum;
    }
    if (this._srcThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdNum = this._srcThresholdNum;
    }
    if (this._srcThresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdStr = this._srcThresholdStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneProfilePortIndicatorListSrcThresholdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcThresholdLargeNum = undefined;
      this._srcThresholdNum = undefined;
      this._srcThresholdStr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcThresholdLargeNum = value.srcThresholdLargeNum;
      this._srcThresholdNum = value.srcThresholdNum;
      this._srcThresholdStr = value.srcThresholdStr;
    }
  }

  // src_threshold_large_num - computed: false, optional: true, required: false
  private _srcThresholdLargeNum?: number; 
  public get srcThresholdLargeNum() {
    return this.getNumberAttribute('src_threshold_large_num');
  }
  public set srcThresholdLargeNum(value: number) {
    this._srcThresholdLargeNum = value;
  }
  public resetSrcThresholdLargeNum() {
    this._srcThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdLargeNumInput() {
    return this._srcThresholdLargeNum;
  }

  // src_threshold_num - computed: false, optional: true, required: false
  private _srcThresholdNum?: number; 
  public get srcThresholdNum() {
    return this.getNumberAttribute('src_threshold_num');
  }
  public set srcThresholdNum(value: number) {
    this._srcThresholdNum = value;
  }
  public resetSrcThresholdNum() {
    this._srcThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdNumInput() {
    return this._srcThresholdNum;
  }

  // src_threshold_str - computed: false, optional: true, required: false
  private _srcThresholdStr?: string; 
  public get srcThresholdStr() {
    return this.getStringAttribute('src_threshold_str');
  }
  public set srcThresholdStr(value: string) {
    this._srcThresholdStr = value;
  }
  public resetSrcThresholdStr() {
    this._srcThresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdStrInput() {
    return this._srcThresholdStr;
  }
}
export interface DdosZoneProfilePortIndicatorListZoneThresholdCfg {
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#zone_threshold_large_num DdosZoneProfilePort#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#zone_threshold_num DdosZoneProfilePort#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
  /**
  * Threshold for the entire zone (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#zone_threshold_str DdosZoneProfilePort#zone_threshold_str}
  */
  readonly zoneThresholdStr?: string;
}

export function ddosZoneProfilePortIndicatorListZoneThresholdCfgToTerraform(struct?: DdosZoneProfilePortIndicatorListZoneThresholdCfgOutputReference | DdosZoneProfilePortIndicatorListZoneThresholdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
    zone_threshold_str: cdktf.stringToTerraform(struct!.zoneThresholdStr),
  }
}


export function ddosZoneProfilePortIndicatorListZoneThresholdCfgToHclTerraform(struct?: DdosZoneProfilePortIndicatorListZoneThresholdCfgOutputReference | DdosZoneProfilePortIndicatorListZoneThresholdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.zoneThresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneProfilePortIndicatorListZoneThresholdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneProfilePortIndicatorListZoneThresholdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    if (this._zoneThresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdStr = this._zoneThresholdStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneProfilePortIndicatorListZoneThresholdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
      this._zoneThresholdStr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
      this._zoneThresholdStr = value.zoneThresholdStr;
    }
  }

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }

  // zone_threshold_str - computed: false, optional: true, required: false
  private _zoneThresholdStr?: string; 
  public get zoneThresholdStr() {
    return this.getStringAttribute('zone_threshold_str');
  }
  public set zoneThresholdStr(value: string) {
    this._zoneThresholdStr = value;
  }
  public resetZoneThresholdStr() {
    this._zoneThresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdStrInput() {
    return this._zoneThresholdStr;
  }
}
export interface DdosZoneProfilePortIndicatorListStruct {
  /**
  * 'pkt-rate': pkt-rate; 'pkt-drop-rate': pkt-drop-rate; 'bit-rate': bit-rate; 'pkt-drop-ratio': pkt-drop-ratio; 'bytes-to-bytes-from-ratio': bytes-to-bytes-from-ratio; 'concurrent-conns': concurrent-conns; 'conn-miss-rate': conn-miss-rate; 'syn-rate': syn-rate; 'fin-rate': fin-rate; 'rst-rate': rst-rate; 'small-window-ack-rate': small-window-ack-rate; 'empty-ack-rate': empty-ack-rate; 'small-payload-rate': small-payload-rate; 'syn-fin-ratio': syn-fin-ratio; 'cpu-utilization': cpu-utilization; 'interface-utilization': interface-utilization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#indicator_name DdosZoneProfilePort#indicator_name}
  */
  readonly indicatorName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#user_tag DdosZoneProfilePort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#uuid DdosZoneProfilePort#uuid}
  */
  readonly uuid?: string;
  /**
  * src_threshold_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#src_threshold_cfg DdosZoneProfilePort#src_threshold_cfg}
  */
  readonly srcThresholdCfg?: DdosZoneProfilePortIndicatorListSrcThresholdCfg;
  /**
  * zone_threshold_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#zone_threshold_cfg DdosZoneProfilePort#zone_threshold_cfg}
  */
  readonly zoneThresholdCfg?: DdosZoneProfilePortIndicatorListZoneThresholdCfg;
}

export function ddosZoneProfilePortIndicatorListStructToTerraform(struct?: DdosZoneProfilePortIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    src_threshold_cfg: ddosZoneProfilePortIndicatorListSrcThresholdCfgToTerraform(struct!.srcThresholdCfg),
    zone_threshold_cfg: ddosZoneProfilePortIndicatorListZoneThresholdCfgToTerraform(struct!.zoneThresholdCfg),
  }
}


export function ddosZoneProfilePortIndicatorListStructToHclTerraform(struct?: DdosZoneProfilePortIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
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
    src_threshold_cfg: {
      value: ddosZoneProfilePortIndicatorListSrcThresholdCfgToHclTerraform(struct!.srcThresholdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneProfilePortIndicatorListSrcThresholdCfgList",
    },
    zone_threshold_cfg: {
      value: ddosZoneProfilePortIndicatorListZoneThresholdCfgToHclTerraform(struct!.zoneThresholdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneProfilePortIndicatorListZoneThresholdCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneProfilePortIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneProfilePortIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._srcThresholdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdCfg = this._srcThresholdCfg?.internalValue;
    }
    if (this._zoneThresholdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdCfg = this._zoneThresholdCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneProfilePortIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._srcThresholdCfg.internalValue = undefined;
      this._zoneThresholdCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorName = value.indicatorName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._srcThresholdCfg.internalValue = value.srcThresholdCfg;
      this._zoneThresholdCfg.internalValue = value.zoneThresholdCfg;
    }
  }

  // indicator_name - computed: false, optional: false, required: true
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
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

  // src_threshold_cfg - computed: false, optional: true, required: false
  private _srcThresholdCfg = new DdosZoneProfilePortIndicatorListSrcThresholdCfgOutputReference(this, "src_threshold_cfg");
  public get srcThresholdCfg() {
    return this._srcThresholdCfg;
  }
  public putSrcThresholdCfg(value: DdosZoneProfilePortIndicatorListSrcThresholdCfg) {
    this._srcThresholdCfg.internalValue = value;
  }
  public resetSrcThresholdCfg() {
    this._srcThresholdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdCfgInput() {
    return this._srcThresholdCfg.internalValue;
  }

  // zone_threshold_cfg - computed: false, optional: true, required: false
  private _zoneThresholdCfg = new DdosZoneProfilePortIndicatorListZoneThresholdCfgOutputReference(this, "zone_threshold_cfg");
  public get zoneThresholdCfg() {
    return this._zoneThresholdCfg;
  }
  public putZoneThresholdCfg(value: DdosZoneProfilePortIndicatorListZoneThresholdCfg) {
    this._zoneThresholdCfg.internalValue = value;
  }
  public resetZoneThresholdCfg() {
    this._zoneThresholdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdCfgInput() {
    return this._zoneThresholdCfg.internalValue;
  }
}

export class DdosZoneProfilePortIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneProfilePortIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneProfilePortIndicatorListStructOutputReference {
    return new DdosZoneProfilePortIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port thunder_ddos_zone_profile_port}
*/
export class DdosZoneProfilePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_profile_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneProfilePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneProfilePort to import
  * @param importFromId The id of the existing DdosZoneProfilePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneProfilePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_profile_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_profile_port thunder_ddos_zone_profile_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneProfilePortConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneProfilePortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_profile_port',
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
    this._portNum = config.portNum;
    this._portProtocol = config.portProtocol;
    this._profileName = config.profileName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._indicatorList.internalValue = config.indicatorList;
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

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_protocol - computed: false, optional: false, required: true
  private _portProtocol?: string; 
  public get portProtocol() {
    return this.getStringAttribute('port_protocol');
  }
  public set portProtocol(value: string) {
    this._portProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portProtocolInput() {
    return this._portProtocol;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
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

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosZoneProfilePortIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosZoneProfilePortIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_num: cdktf.numberToTerraform(this._portNum),
      port_protocol: cdktf.stringToTerraform(this._portProtocol),
      profile_name: cdktf.stringToTerraform(this._profileName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      indicator_list: cdktf.listMapper(ddosZoneProfilePortIndicatorListStructToTerraform, true)(this._indicatorList.internalValue),
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
      port_num: {
        value: cdktf.numberToHclTerraform(this._portNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_protocol: {
        value: cdktf.stringToHclTerraform(this._portProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
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
      indicator_list: {
        value: cdktf.listMapperHcl(ddosZoneProfilePortIndicatorListStructToHclTerraform, true)(this._indicatorList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneProfilePortIndicatorListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
