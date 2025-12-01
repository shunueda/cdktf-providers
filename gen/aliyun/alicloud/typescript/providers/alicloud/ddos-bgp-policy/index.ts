// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosBgpPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#id DdosBgpPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#policy_name DdosBgpPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#type DdosBgpPolicy#type}
  */
  readonly type: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#content DdosBgpPolicy#content}
  */
  readonly content?: DdosBgpPolicyContent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#timeouts DdosBgpPolicy#timeouts}
  */
  readonly timeouts?: DdosBgpPolicyTimeouts;
}
export interface DdosBgpPolicyContentFingerPrintRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#dst_port_end DdosBgpPolicy#dst_port_end}
  */
  readonly dstPortEnd: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#dst_port_start DdosBgpPolicy#dst_port_start}
  */
  readonly dstPortStart: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#finger_print_rule_id DdosBgpPolicy#finger_print_rule_id}
  */
  readonly fingerPrintRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#match_action DdosBgpPolicy#match_action}
  */
  readonly matchAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#max_pkt_len DdosBgpPolicy#max_pkt_len}
  */
  readonly maxPktLen: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#min_pkt_len DdosBgpPolicy#min_pkt_len}
  */
  readonly minPktLen: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#offset DdosBgpPolicy#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#payload_bytes DdosBgpPolicy#payload_bytes}
  */
  readonly payloadBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#protocol DdosBgpPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#rate_value DdosBgpPolicy#rate_value}
  */
  readonly rateValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#seq_no DdosBgpPolicy#seq_no}
  */
  readonly seqNo: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#src_port_end DdosBgpPolicy#src_port_end}
  */
  readonly srcPortEnd: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#src_port_start DdosBgpPolicy#src_port_start}
  */
  readonly srcPortStart: number;
}

export function ddosBgpPolicyContentFingerPrintRuleListStructToTerraform(struct?: DdosBgpPolicyContentFingerPrintRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_port_end: cdktf.numberToTerraform(struct!.dstPortEnd),
    dst_port_start: cdktf.numberToTerraform(struct!.dstPortStart),
    finger_print_rule_id: cdktf.stringToTerraform(struct!.fingerPrintRuleId),
    match_action: cdktf.stringToTerraform(struct!.matchAction),
    max_pkt_len: cdktf.numberToTerraform(struct!.maxPktLen),
    min_pkt_len: cdktf.numberToTerraform(struct!.minPktLen),
    offset: cdktf.numberToTerraform(struct!.offset),
    payload_bytes: cdktf.stringToTerraform(struct!.payloadBytes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rate_value: cdktf.numberToTerraform(struct!.rateValue),
    seq_no: cdktf.numberToTerraform(struct!.seqNo),
    src_port_end: cdktf.numberToTerraform(struct!.srcPortEnd),
    src_port_start: cdktf.numberToTerraform(struct!.srcPortStart),
  }
}


export function ddosBgpPolicyContentFingerPrintRuleListStructToHclTerraform(struct?: DdosBgpPolicyContentFingerPrintRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dstPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_start: {
      value: cdktf.numberToHclTerraform(struct!.dstPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finger_print_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.fingerPrintRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_action: {
      value: cdktf.stringToHclTerraform(struct!.matchAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pkt_len: {
      value: cdktf.numberToHclTerraform(struct!.maxPktLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_pkt_len: {
      value: cdktf.numberToHclTerraform(struct!.minPktLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_bytes: {
      value: cdktf.stringToHclTerraform(struct!.payloadBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_value: {
      value: cdktf.numberToHclTerraform(struct!.rateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_no: {
      value: cdktf.numberToHclTerraform(struct!.seqNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyContentFingerPrintRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosBgpPolicyContentFingerPrintRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortEnd = this._dstPortEnd;
    }
    if (this._dstPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortStart = this._dstPortStart;
    }
    if (this._fingerPrintRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerPrintRuleId = this._fingerPrintRuleId;
    }
    if (this._matchAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAction = this._matchAction;
    }
    if (this._maxPktLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPktLen = this._maxPktLen;
    }
    if (this._minPktLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPktLen = this._minPktLen;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._payloadBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadBytes = this._payloadBytes;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateValue = this._rateValue;
    }
    if (this._seqNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNo = this._seqNo;
    }
    if (this._srcPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortEnd = this._srcPortEnd;
    }
    if (this._srcPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortStart = this._srcPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyContentFingerPrintRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstPortEnd = undefined;
      this._dstPortStart = undefined;
      this._fingerPrintRuleId = undefined;
      this._matchAction = undefined;
      this._maxPktLen = undefined;
      this._minPktLen = undefined;
      this._offset = undefined;
      this._payloadBytes = undefined;
      this._protocol = undefined;
      this._rateValue = undefined;
      this._seqNo = undefined;
      this._srcPortEnd = undefined;
      this._srcPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstPortEnd = value.dstPortEnd;
      this._dstPortStart = value.dstPortStart;
      this._fingerPrintRuleId = value.fingerPrintRuleId;
      this._matchAction = value.matchAction;
      this._maxPktLen = value.maxPktLen;
      this._minPktLen = value.minPktLen;
      this._offset = value.offset;
      this._payloadBytes = value.payloadBytes;
      this._protocol = value.protocol;
      this._rateValue = value.rateValue;
      this._seqNo = value.seqNo;
      this._srcPortEnd = value.srcPortEnd;
      this._srcPortStart = value.srcPortStart;
    }
  }

  // dst_port_end - computed: false, optional: false, required: true
  private _dstPortEnd?: number; 
  public get dstPortEnd() {
    return this.getNumberAttribute('dst_port_end');
  }
  public set dstPortEnd(value: number) {
    this._dstPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortEndInput() {
    return this._dstPortEnd;
  }

  // dst_port_start - computed: false, optional: false, required: true
  private _dstPortStart?: number; 
  public get dstPortStart() {
    return this.getNumberAttribute('dst_port_start');
  }
  public set dstPortStart(value: number) {
    this._dstPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortStartInput() {
    return this._dstPortStart;
  }

  // finger_print_rule_id - computed: false, optional: true, required: false
  private _fingerPrintRuleId?: string; 
  public get fingerPrintRuleId() {
    return this.getStringAttribute('finger_print_rule_id');
  }
  public set fingerPrintRuleId(value: string) {
    this._fingerPrintRuleId = value;
  }
  public resetFingerPrintRuleId() {
    this._fingerPrintRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerPrintRuleIdInput() {
    return this._fingerPrintRuleId;
  }

  // match_action - computed: false, optional: false, required: true
  private _matchAction?: string; 
  public get matchAction() {
    return this.getStringAttribute('match_action');
  }
  public set matchAction(value: string) {
    this._matchAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchActionInput() {
    return this._matchAction;
  }

  // max_pkt_len - computed: false, optional: false, required: true
  private _maxPktLen?: number; 
  public get maxPktLen() {
    return this.getNumberAttribute('max_pkt_len');
  }
  public set maxPktLen(value: number) {
    this._maxPktLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPktLenInput() {
    return this._maxPktLen;
  }

  // min_pkt_len - computed: false, optional: false, required: true
  private _minPktLen?: number; 
  public get minPktLen() {
    return this.getNumberAttribute('min_pkt_len');
  }
  public set minPktLen(value: number) {
    this._minPktLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minPktLenInput() {
    return this._minPktLen;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // payload_bytes - computed: false, optional: true, required: false
  private _payloadBytes?: string; 
  public get payloadBytes() {
    return this.getStringAttribute('payload_bytes');
  }
  public set payloadBytes(value: string) {
    this._payloadBytes = value;
  }
  public resetPayloadBytes() {
    this._payloadBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadBytesInput() {
    return this._payloadBytes;
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

  // rate_value - computed: false, optional: true, required: false
  private _rateValue?: number; 
  public get rateValue() {
    return this.getNumberAttribute('rate_value');
  }
  public set rateValue(value: number) {
    this._rateValue = value;
  }
  public resetRateValue() {
    this._rateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateValueInput() {
    return this._rateValue;
  }

  // seq_no - computed: false, optional: false, required: true
  private _seqNo?: number; 
  public get seqNo() {
    return this.getNumberAttribute('seq_no');
  }
  public set seqNo(value: number) {
    this._seqNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNoInput() {
    return this._seqNo;
  }

  // src_port_end - computed: false, optional: false, required: true
  private _srcPortEnd?: number; 
  public get srcPortEnd() {
    return this.getNumberAttribute('src_port_end');
  }
  public set srcPortEnd(value: number) {
    this._srcPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortEndInput() {
    return this._srcPortEnd;
  }

  // src_port_start - computed: false, optional: false, required: true
  private _srcPortStart?: number; 
  public get srcPortStart() {
    return this.getNumberAttribute('src_port_start');
  }
  public set srcPortStart(value: number) {
    this._srcPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortStartInput() {
    return this._srcPortStart;
  }
}

export class DdosBgpPolicyContentFingerPrintRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DdosBgpPolicyContentFingerPrintRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosBgpPolicyContentFingerPrintRuleListStructOutputReference {
    return new DdosBgpPolicyContentFingerPrintRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosBgpPolicyContentLayer4RuleListConditionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#arg DdosBgpPolicy#arg}
  */
  readonly arg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#depth DdosBgpPolicy#depth}
  */
  readonly depth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#position DdosBgpPolicy#position}
  */
  readonly position: number;
}

export function ddosBgpPolicyContentLayer4RuleListConditionListStructToTerraform(struct?: DdosBgpPolicyContentLayer4RuleListConditionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg: cdktf.stringToTerraform(struct!.arg),
    depth: cdktf.numberToTerraform(struct!.depth),
    position: cdktf.numberToTerraform(struct!.position),
  }
}


export function ddosBgpPolicyContentLayer4RuleListConditionListStructToHclTerraform(struct?: DdosBgpPolicyContentLayer4RuleListConditionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg: {
      value: cdktf.stringToHclTerraform(struct!.arg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyContentLayer4RuleListConditionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosBgpPolicyContentLayer4RuleListConditionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arg !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg = this._arg;
    }
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyContentLayer4RuleListConditionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arg = undefined;
      this._depth = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arg = value.arg;
      this._depth = value.depth;
      this._position = value.position;
    }
  }

  // arg - computed: false, optional: false, required: true
  private _arg?: string; 
  public get arg() {
    return this.getStringAttribute('arg');
  }
  public set arg(value: string) {
    this._arg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg;
  }

  // depth - computed: false, optional: false, required: true
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class DdosBgpPolicyContentLayer4RuleListConditionListStructList extends cdktf.ComplexList {
  public internalValue? : DdosBgpPolicyContentLayer4RuleListConditionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosBgpPolicyContentLayer4RuleListConditionListStructOutputReference {
    return new DdosBgpPolicyContentLayer4RuleListConditionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosBgpPolicyContentLayer4RuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#action DdosBgpPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#limited DdosBgpPolicy#limited}
  */
  readonly limited: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#match DdosBgpPolicy#match}
  */
  readonly match: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#method DdosBgpPolicy#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#name DdosBgpPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#priority DdosBgpPolicy#priority}
  */
  readonly priority: number;
  /**
  * condition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#condition_list DdosBgpPolicy#condition_list}
  */
  readonly conditionList: DdosBgpPolicyContentLayer4RuleListConditionListStruct[] | cdktf.IResolvable;
}

export function ddosBgpPolicyContentLayer4RuleListStructToTerraform(struct?: DdosBgpPolicyContentLayer4RuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    limited: cdktf.numberToTerraform(struct!.limited),
    match: cdktf.stringToTerraform(struct!.match),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    condition_list: cdktf.listMapper(ddosBgpPolicyContentLayer4RuleListConditionListStructToTerraform, true)(struct!.conditionList),
  }
}


export function ddosBgpPolicyContentLayer4RuleListStructToHclTerraform(struct?: DdosBgpPolicyContentLayer4RuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limited: {
      value: cdktf.numberToHclTerraform(struct!.limited),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition_list: {
      value: cdktf.listMapperHcl(ddosBgpPolicyContentLayer4RuleListConditionListStructToHclTerraform, true)(struct!.conditionList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosBgpPolicyContentLayer4RuleListConditionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyContentLayer4RuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosBgpPolicyContentLayer4RuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._limited !== undefined) {
      hasAnyValues = true;
      internalValueResult.limited = this._limited;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._conditionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionList = this._conditionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyContentLayer4RuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._limited = undefined;
      this._match = undefined;
      this._method = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._conditionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._limited = value.limited;
      this._match = value.match;
      this._method = value.method;
      this._name = value.name;
      this._priority = value.priority;
      this._conditionList.internalValue = value.conditionList;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // limited - computed: false, optional: false, required: true
  private _limited?: number; 
  public get limited() {
    return this.getNumberAttribute('limited');
  }
  public set limited(value: number) {
    this._limited = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitedInput() {
    return this._limited;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // condition_list - computed: false, optional: false, required: true
  private _conditionList = new DdosBgpPolicyContentLayer4RuleListConditionListStructList(this, "condition_list", false);
  public get conditionList() {
    return this._conditionList;
  }
  public putConditionList(value: DdosBgpPolicyContentLayer4RuleListConditionListStruct[] | cdktf.IResolvable) {
    this._conditionList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionListInput() {
    return this._conditionList.internalValue;
  }
}

export class DdosBgpPolicyContentLayer4RuleListStructList extends cdktf.ComplexList {
  public internalValue? : DdosBgpPolicyContentLayer4RuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosBgpPolicyContentLayer4RuleListStructOutputReference {
    return new DdosBgpPolicyContentLayer4RuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosBgpPolicyContentPortRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#dst_port_end DdosBgpPolicy#dst_port_end}
  */
  readonly dstPortEnd: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#dst_port_start DdosBgpPolicy#dst_port_start}
  */
  readonly dstPortStart: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#match_action DdosBgpPolicy#match_action}
  */
  readonly matchAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#port_rule_id DdosBgpPolicy#port_rule_id}
  */
  readonly portRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#protocol DdosBgpPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#seq_no DdosBgpPolicy#seq_no}
  */
  readonly seqNo: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#src_port_end DdosBgpPolicy#src_port_end}
  */
  readonly srcPortEnd: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#src_port_start DdosBgpPolicy#src_port_start}
  */
  readonly srcPortStart: number;
}

export function ddosBgpPolicyContentPortRuleListStructToTerraform(struct?: DdosBgpPolicyContentPortRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_port_end: cdktf.numberToTerraform(struct!.dstPortEnd),
    dst_port_start: cdktf.numberToTerraform(struct!.dstPortStart),
    match_action: cdktf.stringToTerraform(struct!.matchAction),
    port_rule_id: cdktf.stringToTerraform(struct!.portRuleId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    seq_no: cdktf.numberToTerraform(struct!.seqNo),
    src_port_end: cdktf.numberToTerraform(struct!.srcPortEnd),
    src_port_start: cdktf.numberToTerraform(struct!.srcPortStart),
  }
}


export function ddosBgpPolicyContentPortRuleListStructToHclTerraform(struct?: DdosBgpPolicyContentPortRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dstPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_start: {
      value: cdktf.numberToHclTerraform(struct!.dstPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_action: {
      value: cdktf.stringToHclTerraform(struct!.matchAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.portRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_no: {
      value: cdktf.numberToHclTerraform(struct!.seqNo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_start: {
      value: cdktf.numberToHclTerraform(struct!.srcPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyContentPortRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosBgpPolicyContentPortRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortEnd = this._dstPortEnd;
    }
    if (this._dstPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortStart = this._dstPortStart;
    }
    if (this._matchAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAction = this._matchAction;
    }
    if (this._portRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRuleId = this._portRuleId;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._seqNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNo = this._seqNo;
    }
    if (this._srcPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortEnd = this._srcPortEnd;
    }
    if (this._srcPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortStart = this._srcPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyContentPortRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstPortEnd = undefined;
      this._dstPortStart = undefined;
      this._matchAction = undefined;
      this._portRuleId = undefined;
      this._protocol = undefined;
      this._seqNo = undefined;
      this._srcPortEnd = undefined;
      this._srcPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstPortEnd = value.dstPortEnd;
      this._dstPortStart = value.dstPortStart;
      this._matchAction = value.matchAction;
      this._portRuleId = value.portRuleId;
      this._protocol = value.protocol;
      this._seqNo = value.seqNo;
      this._srcPortEnd = value.srcPortEnd;
      this._srcPortStart = value.srcPortStart;
    }
  }

  // dst_port_end - computed: false, optional: false, required: true
  private _dstPortEnd?: number; 
  public get dstPortEnd() {
    return this.getNumberAttribute('dst_port_end');
  }
  public set dstPortEnd(value: number) {
    this._dstPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortEndInput() {
    return this._dstPortEnd;
  }

  // dst_port_start - computed: false, optional: false, required: true
  private _dstPortStart?: number; 
  public get dstPortStart() {
    return this.getNumberAttribute('dst_port_start');
  }
  public set dstPortStart(value: number) {
    this._dstPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortStartInput() {
    return this._dstPortStart;
  }

  // match_action - computed: false, optional: false, required: true
  private _matchAction?: string; 
  public get matchAction() {
    return this.getStringAttribute('match_action');
  }
  public set matchAction(value: string) {
    this._matchAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchActionInput() {
    return this._matchAction;
  }

  // port_rule_id - computed: false, optional: true, required: false
  private _portRuleId?: string; 
  public get portRuleId() {
    return this.getStringAttribute('port_rule_id');
  }
  public set portRuleId(value: string) {
    this._portRuleId = value;
  }
  public resetPortRuleId() {
    this._portRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRuleIdInput() {
    return this._portRuleId;
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

  // seq_no - computed: false, optional: false, required: true
  private _seqNo?: number; 
  public get seqNo() {
    return this.getNumberAttribute('seq_no');
  }
  public set seqNo(value: number) {
    this._seqNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNoInput() {
    return this._seqNo;
  }

  // src_port_end - computed: false, optional: false, required: true
  private _srcPortEnd?: number; 
  public get srcPortEnd() {
    return this.getNumberAttribute('src_port_end');
  }
  public set srcPortEnd(value: number) {
    this._srcPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortEndInput() {
    return this._srcPortEnd;
  }

  // src_port_start - computed: false, optional: false, required: true
  private _srcPortStart?: number; 
  public get srcPortStart() {
    return this.getNumberAttribute('src_port_start');
  }
  public set srcPortStart(value: number) {
    this._srcPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortStartInput() {
    return this._srcPortStart;
  }
}

export class DdosBgpPolicyContentPortRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DdosBgpPolicyContentPortRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosBgpPolicyContentPortRuleListStructOutputReference {
    return new DdosBgpPolicyContentPortRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosBgpPolicyContentSourceBlockListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#block_expire_seconds DdosBgpPolicy#block_expire_seconds}
  */
  readonly blockExpireSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#every_seconds DdosBgpPolicy#every_seconds}
  */
  readonly everySeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#exceed_limit_times DdosBgpPolicy#exceed_limit_times}
  */
  readonly exceedLimitTimes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#type DdosBgpPolicy#type}
  */
  readonly type: number;
}

export function ddosBgpPolicyContentSourceBlockListStructToTerraform(struct?: DdosBgpPolicyContentSourceBlockListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_expire_seconds: cdktf.numberToTerraform(struct!.blockExpireSeconds),
    every_seconds: cdktf.numberToTerraform(struct!.everySeconds),
    exceed_limit_times: cdktf.numberToTerraform(struct!.exceedLimitTimes),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function ddosBgpPolicyContentSourceBlockListStructToHclTerraform(struct?: DdosBgpPolicyContentSourceBlockListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_expire_seconds: {
      value: cdktf.numberToHclTerraform(struct!.blockExpireSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    every_seconds: {
      value: cdktf.numberToHclTerraform(struct!.everySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_limit_times: {
      value: cdktf.numberToHclTerraform(struct!.exceedLimitTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyContentSourceBlockListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosBgpPolicyContentSourceBlockListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockExpireSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpireSeconds = this._blockExpireSeconds;
    }
    if (this._everySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.everySeconds = this._everySeconds;
    }
    if (this._exceedLimitTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLimitTimes = this._exceedLimitTimes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyContentSourceBlockListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockExpireSeconds = undefined;
      this._everySeconds = undefined;
      this._exceedLimitTimes = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockExpireSeconds = value.blockExpireSeconds;
      this._everySeconds = value.everySeconds;
      this._exceedLimitTimes = value.exceedLimitTimes;
      this._type = value.type;
    }
  }

  // block_expire_seconds - computed: false, optional: false, required: true
  private _blockExpireSeconds?: number; 
  public get blockExpireSeconds() {
    return this.getNumberAttribute('block_expire_seconds');
  }
  public set blockExpireSeconds(value: number) {
    this._blockExpireSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpireSecondsInput() {
    return this._blockExpireSeconds;
  }

  // every_seconds - computed: false, optional: false, required: true
  private _everySeconds?: number; 
  public get everySeconds() {
    return this.getNumberAttribute('every_seconds');
  }
  public set everySeconds(value: number) {
    this._everySeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get everySecondsInput() {
    return this._everySeconds;
  }

  // exceed_limit_times - computed: false, optional: false, required: true
  private _exceedLimitTimes?: number; 
  public get exceedLimitTimes() {
    return this.getNumberAttribute('exceed_limit_times');
  }
  public set exceedLimitTimes(value: number) {
    this._exceedLimitTimes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLimitTimesInput() {
    return this._exceedLimitTimes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DdosBgpPolicyContentSourceBlockListStructList extends cdktf.ComplexList {
  public internalValue? : DdosBgpPolicyContentSourceBlockListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosBgpPolicyContentSourceBlockListStructOutputReference {
    return new DdosBgpPolicyContentSourceBlockListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosBgpPolicyContentSourceLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#bps DdosBgpPolicy#bps}
  */
  readonly bps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#pps DdosBgpPolicy#pps}
  */
  readonly pps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#syn_bps DdosBgpPolicy#syn_bps}
  */
  readonly synBps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#syn_pps DdosBgpPolicy#syn_pps}
  */
  readonly synPps?: number;
}

export function ddosBgpPolicyContentSourceLimitToTerraform(struct?: DdosBgpPolicyContentSourceLimitOutputReference | DdosBgpPolicyContentSourceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bps: cdktf.numberToTerraform(struct!.bps),
    pps: cdktf.numberToTerraform(struct!.pps),
    syn_bps: cdktf.numberToTerraform(struct!.synBps),
    syn_pps: cdktf.numberToTerraform(struct!.synPps),
  }
}


export function ddosBgpPolicyContentSourceLimitToHclTerraform(struct?: DdosBgpPolicyContentSourceLimitOutputReference | DdosBgpPolicyContentSourceLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bps: {
      value: cdktf.numberToHclTerraform(struct!.bps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pps: {
      value: cdktf.numberToHclTerraform(struct!.pps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_bps: {
      value: cdktf.numberToHclTerraform(struct!.synBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_pps: {
      value: cdktf.numberToHclTerraform(struct!.synPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyContentSourceLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosBgpPolicyContentSourceLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bps = this._bps;
    }
    if (this._pps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pps = this._pps;
    }
    if (this._synBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.synBps = this._synBps;
    }
    if (this._synPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.synPps = this._synPps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyContentSourceLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bps = undefined;
      this._pps = undefined;
      this._synBps = undefined;
      this._synPps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bps = value.bps;
      this._pps = value.pps;
      this._synBps = value.synBps;
      this._synPps = value.synPps;
    }
  }

  // bps - computed: false, optional: true, required: false
  private _bps?: number; 
  public get bps() {
    return this.getNumberAttribute('bps');
  }
  public set bps(value: number) {
    this._bps = value;
  }
  public resetBps() {
    this._bps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpsInput() {
    return this._bps;
  }

  // pps - computed: false, optional: true, required: false
  private _pps?: number; 
  public get pps() {
    return this.getNumberAttribute('pps');
  }
  public set pps(value: number) {
    this._pps = value;
  }
  public resetPps() {
    this._pps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppsInput() {
    return this._pps;
  }

  // syn_bps - computed: false, optional: true, required: false
  private _synBps?: number; 
  public get synBps() {
    return this.getNumberAttribute('syn_bps');
  }
  public set synBps(value: number) {
    this._synBps = value;
  }
  public resetSynBps() {
    this._synBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synBpsInput() {
    return this._synBps;
  }

  // syn_pps - computed: false, optional: true, required: false
  private _synPps?: number; 
  public get synPps() {
    return this.getNumberAttribute('syn_pps');
  }
  public set synPps(value: number) {
    this._synPps = value;
  }
  public resetSynPps() {
    this._synPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synPpsInput() {
    return this._synPps;
  }
}
export interface DdosBgpPolicyContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#black_ip_list_expire_at DdosBgpPolicy#black_ip_list_expire_at}
  */
  readonly blackIpListExpireAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#enable_defense DdosBgpPolicy#enable_defense}
  */
  readonly enableDefense?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#enable_drop_icmp DdosBgpPolicy#enable_drop_icmp}
  */
  readonly enableDropIcmp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#enable_intelligence DdosBgpPolicy#enable_intelligence}
  */
  readonly enableIntelligence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#intelligence_level DdosBgpPolicy#intelligence_level}
  */
  readonly intelligenceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#reflect_block_udp_port_list DdosBgpPolicy#reflect_block_udp_port_list}
  */
  readonly reflectBlockUdpPortList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#region_block_country_list DdosBgpPolicy#region_block_country_list}
  */
  readonly regionBlockCountryList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#region_block_province_list DdosBgpPolicy#region_block_province_list}
  */
  readonly regionBlockProvinceList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#whiten_gfbr_nets DdosBgpPolicy#whiten_gfbr_nets}
  */
  readonly whitenGfbrNets?: boolean | cdktf.IResolvable;
  /**
  * finger_print_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#finger_print_rule_list DdosBgpPolicy#finger_print_rule_list}
  */
  readonly fingerPrintRuleList?: DdosBgpPolicyContentFingerPrintRuleListStruct[] | cdktf.IResolvable;
  /**
  * layer4_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#layer4_rule_list DdosBgpPolicy#layer4_rule_list}
  */
  readonly layer4RuleList?: DdosBgpPolicyContentLayer4RuleListStruct[] | cdktf.IResolvable;
  /**
  * port_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#port_rule_list DdosBgpPolicy#port_rule_list}
  */
  readonly portRuleList?: DdosBgpPolicyContentPortRuleListStruct[] | cdktf.IResolvable;
  /**
  * source_block_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#source_block_list DdosBgpPolicy#source_block_list}
  */
  readonly sourceBlockList?: DdosBgpPolicyContentSourceBlockListStruct[] | cdktf.IResolvable;
  /**
  * source_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#source_limit DdosBgpPolicy#source_limit}
  */
  readonly sourceLimit?: DdosBgpPolicyContentSourceLimit;
}

export function ddosBgpPolicyContentToTerraform(struct?: DdosBgpPolicyContentOutputReference | DdosBgpPolicyContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_ip_list_expire_at: cdktf.numberToTerraform(struct!.blackIpListExpireAt),
    enable_defense: cdktf.booleanToTerraform(struct!.enableDefense),
    enable_drop_icmp: cdktf.booleanToTerraform(struct!.enableDropIcmp),
    enable_intelligence: cdktf.booleanToTerraform(struct!.enableIntelligence),
    intelligence_level: cdktf.stringToTerraform(struct!.intelligenceLevel),
    reflect_block_udp_port_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.reflectBlockUdpPortList),
    region_block_country_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.regionBlockCountryList),
    region_block_province_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.regionBlockProvinceList),
    whiten_gfbr_nets: cdktf.booleanToTerraform(struct!.whitenGfbrNets),
    finger_print_rule_list: cdktf.listMapper(ddosBgpPolicyContentFingerPrintRuleListStructToTerraform, true)(struct!.fingerPrintRuleList),
    layer4_rule_list: cdktf.listMapper(ddosBgpPolicyContentLayer4RuleListStructToTerraform, true)(struct!.layer4RuleList),
    port_rule_list: cdktf.listMapper(ddosBgpPolicyContentPortRuleListStructToTerraform, true)(struct!.portRuleList),
    source_block_list: cdktf.listMapper(ddosBgpPolicyContentSourceBlockListStructToTerraform, true)(struct!.sourceBlockList),
    source_limit: ddosBgpPolicyContentSourceLimitToTerraform(struct!.sourceLimit),
  }
}


export function ddosBgpPolicyContentToHclTerraform(struct?: DdosBgpPolicyContentOutputReference | DdosBgpPolicyContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_ip_list_expire_at: {
      value: cdktf.numberToHclTerraform(struct!.blackIpListExpireAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_defense: {
      value: cdktf.booleanToHclTerraform(struct!.enableDefense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_drop_icmp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDropIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_intelligence: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntelligence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intelligence_level: {
      value: cdktf.stringToHclTerraform(struct!.intelligenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reflect_block_udp_port_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.reflectBlockUdpPortList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    region_block_country_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.regionBlockCountryList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    region_block_province_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.regionBlockProvinceList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    whiten_gfbr_nets: {
      value: cdktf.booleanToHclTerraform(struct!.whitenGfbrNets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    finger_print_rule_list: {
      value: cdktf.listMapperHcl(ddosBgpPolicyContentFingerPrintRuleListStructToHclTerraform, true)(struct!.fingerPrintRuleList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosBgpPolicyContentFingerPrintRuleListStructList",
    },
    layer4_rule_list: {
      value: cdktf.listMapperHcl(ddosBgpPolicyContentLayer4RuleListStructToHclTerraform, true)(struct!.layer4RuleList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosBgpPolicyContentLayer4RuleListStructList",
    },
    port_rule_list: {
      value: cdktf.listMapperHcl(ddosBgpPolicyContentPortRuleListStructToHclTerraform, true)(struct!.portRuleList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosBgpPolicyContentPortRuleListStructList",
    },
    source_block_list: {
      value: cdktf.listMapperHcl(ddosBgpPolicyContentSourceBlockListStructToHclTerraform, true)(struct!.sourceBlockList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosBgpPolicyContentSourceBlockListStructList",
    },
    source_limit: {
      value: ddosBgpPolicyContentSourceLimitToHclTerraform(struct!.sourceLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosBgpPolicyContentSourceLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosBgpPolicyContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackIpListExpireAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackIpListExpireAt = this._blackIpListExpireAt;
    }
    if (this._enableDefense !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDefense = this._enableDefense;
    }
    if (this._enableDropIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDropIcmp = this._enableDropIcmp;
    }
    if (this._enableIntelligence !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntelligence = this._enableIntelligence;
    }
    if (this._intelligenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelligenceLevel = this._intelligenceLevel;
    }
    if (this._reflectBlockUdpPortList !== undefined) {
      hasAnyValues = true;
      internalValueResult.reflectBlockUdpPortList = this._reflectBlockUdpPortList;
    }
    if (this._regionBlockCountryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionBlockCountryList = this._regionBlockCountryList;
    }
    if (this._regionBlockProvinceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionBlockProvinceList = this._regionBlockProvinceList;
    }
    if (this._whitenGfbrNets !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitenGfbrNets = this._whitenGfbrNets;
    }
    if (this._fingerPrintRuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerPrintRuleList = this._fingerPrintRuleList?.internalValue;
    }
    if (this._layer4RuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4RuleList = this._layer4RuleList?.internalValue;
    }
    if (this._portRuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRuleList = this._portRuleList?.internalValue;
    }
    if (this._sourceBlockList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBlockList = this._sourceBlockList?.internalValue;
    }
    if (this._sourceLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLimit = this._sourceLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blackIpListExpireAt = undefined;
      this._enableDefense = undefined;
      this._enableDropIcmp = undefined;
      this._enableIntelligence = undefined;
      this._intelligenceLevel = undefined;
      this._reflectBlockUdpPortList = undefined;
      this._regionBlockCountryList = undefined;
      this._regionBlockProvinceList = undefined;
      this._whitenGfbrNets = undefined;
      this._fingerPrintRuleList.internalValue = undefined;
      this._layer4RuleList.internalValue = undefined;
      this._portRuleList.internalValue = undefined;
      this._sourceBlockList.internalValue = undefined;
      this._sourceLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blackIpListExpireAt = value.blackIpListExpireAt;
      this._enableDefense = value.enableDefense;
      this._enableDropIcmp = value.enableDropIcmp;
      this._enableIntelligence = value.enableIntelligence;
      this._intelligenceLevel = value.intelligenceLevel;
      this._reflectBlockUdpPortList = value.reflectBlockUdpPortList;
      this._regionBlockCountryList = value.regionBlockCountryList;
      this._regionBlockProvinceList = value.regionBlockProvinceList;
      this._whitenGfbrNets = value.whitenGfbrNets;
      this._fingerPrintRuleList.internalValue = value.fingerPrintRuleList;
      this._layer4RuleList.internalValue = value.layer4RuleList;
      this._portRuleList.internalValue = value.portRuleList;
      this._sourceBlockList.internalValue = value.sourceBlockList;
      this._sourceLimit.internalValue = value.sourceLimit;
    }
  }

  // black_ip_list_expire_at - computed: false, optional: true, required: false
  private _blackIpListExpireAt?: number; 
  public get blackIpListExpireAt() {
    return this.getNumberAttribute('black_ip_list_expire_at');
  }
  public set blackIpListExpireAt(value: number) {
    this._blackIpListExpireAt = value;
  }
  public resetBlackIpListExpireAt() {
    this._blackIpListExpireAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackIpListExpireAtInput() {
    return this._blackIpListExpireAt;
  }

  // enable_defense - computed: false, optional: true, required: false
  private _enableDefense?: boolean | cdktf.IResolvable; 
  public get enableDefense() {
    return this.getBooleanAttribute('enable_defense');
  }
  public set enableDefense(value: boolean | cdktf.IResolvable) {
    this._enableDefense = value;
  }
  public resetEnableDefense() {
    this._enableDefense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefenseInput() {
    return this._enableDefense;
  }

  // enable_drop_icmp - computed: false, optional: true, required: false
  private _enableDropIcmp?: boolean | cdktf.IResolvable; 
  public get enableDropIcmp() {
    return this.getBooleanAttribute('enable_drop_icmp');
  }
  public set enableDropIcmp(value: boolean | cdktf.IResolvable) {
    this._enableDropIcmp = value;
  }
  public resetEnableDropIcmp() {
    this._enableDropIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDropIcmpInput() {
    return this._enableDropIcmp;
  }

  // enable_intelligence - computed: true, optional: true, required: false
  private _enableIntelligence?: boolean | cdktf.IResolvable; 
  public get enableIntelligence() {
    return this.getBooleanAttribute('enable_intelligence');
  }
  public set enableIntelligence(value: boolean | cdktf.IResolvable) {
    this._enableIntelligence = value;
  }
  public resetEnableIntelligence() {
    this._enableIntelligence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntelligenceInput() {
    return this._enableIntelligence;
  }

  // intelligence_level - computed: true, optional: true, required: false
  private _intelligenceLevel?: string; 
  public get intelligenceLevel() {
    return this.getStringAttribute('intelligence_level');
  }
  public set intelligenceLevel(value: string) {
    this._intelligenceLevel = value;
  }
  public resetIntelligenceLevel() {
    this._intelligenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceLevelInput() {
    return this._intelligenceLevel;
  }

  // reflect_block_udp_port_list - computed: false, optional: true, required: false
  private _reflectBlockUdpPortList?: number[]; 
  public get reflectBlockUdpPortList() {
    return this.getNumberListAttribute('reflect_block_udp_port_list');
  }
  public set reflectBlockUdpPortList(value: number[]) {
    this._reflectBlockUdpPortList = value;
  }
  public resetReflectBlockUdpPortList() {
    this._reflectBlockUdpPortList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectBlockUdpPortListInput() {
    return this._reflectBlockUdpPortList;
  }

  // region_block_country_list - computed: false, optional: true, required: false
  private _regionBlockCountryList?: number[]; 
  public get regionBlockCountryList() {
    return this.getNumberListAttribute('region_block_country_list');
  }
  public set regionBlockCountryList(value: number[]) {
    this._regionBlockCountryList = value;
  }
  public resetRegionBlockCountryList() {
    this._regionBlockCountryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionBlockCountryListInput() {
    return this._regionBlockCountryList;
  }

  // region_block_province_list - computed: false, optional: true, required: false
  private _regionBlockProvinceList?: number[]; 
  public get regionBlockProvinceList() {
    return this.getNumberListAttribute('region_block_province_list');
  }
  public set regionBlockProvinceList(value: number[]) {
    this._regionBlockProvinceList = value;
  }
  public resetRegionBlockProvinceList() {
    this._regionBlockProvinceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionBlockProvinceListInput() {
    return this._regionBlockProvinceList;
  }

  // whiten_gfbr_nets - computed: false, optional: true, required: false
  private _whitenGfbrNets?: boolean | cdktf.IResolvable; 
  public get whitenGfbrNets() {
    return this.getBooleanAttribute('whiten_gfbr_nets');
  }
  public set whitenGfbrNets(value: boolean | cdktf.IResolvable) {
    this._whitenGfbrNets = value;
  }
  public resetWhitenGfbrNets() {
    this._whitenGfbrNets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitenGfbrNetsInput() {
    return this._whitenGfbrNets;
  }

  // finger_print_rule_list - computed: false, optional: true, required: false
  private _fingerPrintRuleList = new DdosBgpPolicyContentFingerPrintRuleListStructList(this, "finger_print_rule_list", false);
  public get fingerPrintRuleList() {
    return this._fingerPrintRuleList;
  }
  public putFingerPrintRuleList(value: DdosBgpPolicyContentFingerPrintRuleListStruct[] | cdktf.IResolvable) {
    this._fingerPrintRuleList.internalValue = value;
  }
  public resetFingerPrintRuleList() {
    this._fingerPrintRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerPrintRuleListInput() {
    return this._fingerPrintRuleList.internalValue;
  }

  // layer4_rule_list - computed: false, optional: true, required: false
  private _layer4RuleList = new DdosBgpPolicyContentLayer4RuleListStructList(this, "layer4_rule_list", false);
  public get layer4RuleList() {
    return this._layer4RuleList;
  }
  public putLayer4RuleList(value: DdosBgpPolicyContentLayer4RuleListStruct[] | cdktf.IResolvable) {
    this._layer4RuleList.internalValue = value;
  }
  public resetLayer4RuleList() {
    this._layer4RuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4RuleListInput() {
    return this._layer4RuleList.internalValue;
  }

  // port_rule_list - computed: false, optional: true, required: false
  private _portRuleList = new DdosBgpPolicyContentPortRuleListStructList(this, "port_rule_list", false);
  public get portRuleList() {
    return this._portRuleList;
  }
  public putPortRuleList(value: DdosBgpPolicyContentPortRuleListStruct[] | cdktf.IResolvable) {
    this._portRuleList.internalValue = value;
  }
  public resetPortRuleList() {
    this._portRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRuleListInput() {
    return this._portRuleList.internalValue;
  }

  // source_block_list - computed: false, optional: true, required: false
  private _sourceBlockList = new DdosBgpPolicyContentSourceBlockListStructList(this, "source_block_list", false);
  public get sourceBlockList() {
    return this._sourceBlockList;
  }
  public putSourceBlockList(value: DdosBgpPolicyContentSourceBlockListStruct[] | cdktf.IResolvable) {
    this._sourceBlockList.internalValue = value;
  }
  public resetSourceBlockList() {
    this._sourceBlockList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBlockListInput() {
    return this._sourceBlockList.internalValue;
  }

  // source_limit - computed: false, optional: true, required: false
  private _sourceLimit = new DdosBgpPolicyContentSourceLimitOutputReference(this, "source_limit");
  public get sourceLimit() {
    return this._sourceLimit;
  }
  public putSourceLimit(value: DdosBgpPolicyContentSourceLimit) {
    this._sourceLimit.internalValue = value;
  }
  public resetSourceLimit() {
    this._sourceLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLimitInput() {
    return this._sourceLimit.internalValue;
  }
}
export interface DdosBgpPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#create DdosBgpPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#delete DdosBgpPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#update DdosBgpPolicy#update}
  */
  readonly update?: string;
}

export function ddosBgpPolicyTimeoutsToTerraform(struct?: DdosBgpPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ddosBgpPolicyTimeoutsToHclTerraform(struct?: DdosBgpPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosBgpPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DdosBgpPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosBgpPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy alicloud_ddos_bgp_policy}
*/
export class DdosBgpPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ddos_bgp_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosBgpPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosBgpPolicy to import
  * @param importFromId The id of the existing DdosBgpPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosBgpPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ddos_bgp_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ddos_bgp_policy alicloud_ddos_bgp_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosBgpPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DdosBgpPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ddos_bgp_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._policyName = config.policyName;
    this._type = config.type;
    this._content.internalValue = config.content;
    this._timeouts.internalValue = config.timeouts;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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

  // content - computed: false, optional: true, required: false
  private _content = new DdosBgpPolicyContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: DdosBgpPolicyContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DdosBgpPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DdosBgpPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_name: cdktf.stringToTerraform(this._policyName),
      type: cdktf.stringToTerraform(this._type),
      content: ddosBgpPolicyContentToTerraform(this._content.internalValue),
      timeouts: ddosBgpPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
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
      content: {
        value: ddosBgpPolicyContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosBgpPolicyContentList",
      },
      timeouts: {
        value: ddosBgpPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DdosBgpPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
