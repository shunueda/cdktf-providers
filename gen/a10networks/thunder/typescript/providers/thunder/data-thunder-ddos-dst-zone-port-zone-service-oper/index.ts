// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZonePortZoneServiceOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#id DataThunderDdosDstZonePortZoneServiceOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#port_num DataThunderDdosDstZonePortZoneServiceOper#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port; 'quic': QUIC Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#protocol DataThunderDdosDstZonePortZoneServiceOper#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#zone_name DataThunderDdosDstZonePortZoneServiceOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#ip_filtering_policy_oper DataThunderDdosDstZonePortZoneServiceOper#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOper;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#ips DataThunderDdosDstZonePortZoneServiceOper#ips}
  */
  readonly ips?: DataThunderDdosDstZonePortZoneServiceOperIps;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperOper;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#pattern_recognition DataThunderDdosDstZonePortZoneServiceOper#pattern_recognition}
  */
  readonly patternRecognition?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#pattern_recognition_pu_details DataThunderDdosDstZonePortZoneServiceOper#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#port_ind DataThunderDdosDstZonePortZoneServiceOper#port_ind}
  */
  readonly portInd?: DataThunderDdosDstZonePortZoneServiceOperPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#progression_tracking DataThunderDdosDstZonePortZoneServiceOper#progression_tracking}
  */
  readonly progressionTracking?: DataThunderDdosDstZonePortZoneServiceOperProgressionTracking;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#topk_destinations DataThunderDdosDstZonePortZoneServiceOper#topk_destinations}
  */
  readonly topkDestinations?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinations;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#topk_sources DataThunderDdosDstZonePortZoneServiceOper#topk_sources}
  */
  readonly topkSources?: DataThunderDdosDstZonePortZoneServiceOperTopkSources;
}
export interface DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#hits DataThunderDdosDstZonePortZoneServiceOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#seq DataThunderDdosDstZonePortZoneServiceOper#seq}
  */
  readonly seq?: number;
}

export function dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hits = undefined;
      this._seq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hits = value.hits;
      this._seq = value.seq;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOper {
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#rule_list DataThunderDdosDstZonePortZoneServiceOper#rule_list}
  */
  readonly ruleList?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleList.internalValue = value.ruleList;
    }
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOper {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#match_count DataThunderDdosDstZonePortZoneServiceOper#match_count}
  */
  readonly matchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sid DataThunderDdosDstZonePortZoneServiceOper#sid}
  */
  readonly sid?: number;
}

export function dataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_count: cdktf.numberToTerraform(struct!.matchCount),
    sid: cdktf.numberToTerraform(struct!.sid),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_count: {
      value: cdktf.numberToHclTerraform(struct!.matchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sid: {
      value: cdktf.numberToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCount = this._matchCount;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCount = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCount = value.matchCount;
      this._sid = value.sid;
    }
  }

  // match_count - computed: false, optional: true, required: false
  private _matchCount?: number; 
  public get matchCount() {
    return this.getNumberAttribute('match_count');
  }
  public set matchCount(value: number) {
    this._matchCount = value;
  }
  public resetMatchCount() {
    this._matchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCountInput() {
    return this._matchCount;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: number; 
  public get sid() {
    return this.getNumberAttribute('sid');
  }
  public set sid(value: number) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperIpsOper {
  /**
  * signature_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#signature_list DataThunderDdosDstZonePortZoneServiceOper#signature_list}
  */
  readonly signatureList?: DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperIpsOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpsOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperIpsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signature_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructToTerraform, true)(struct!.signatureList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperIpsOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpsOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperIpsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signature_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructToHclTerraform, true)(struct!.signatureList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperIpsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperIpsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signatureList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureList = this._signatureList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperIpsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signatureList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signatureList.internalValue = value.signatureList;
    }
  }

  // signature_list - computed: false, optional: true, required: false
  private _signatureList = new DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStructList(this, "signature_list", false);
  public get signatureList() {
    return this._signatureList;
  }
  public putSignatureList(value: DataThunderDdosDstZonePortZoneServiceOperIpsOperSignatureListStruct[] | cdktf.IResolvable) {
    this._signatureList.internalValue = value;
  }
  public resetSignatureList() {
    this._signatureList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureListInput() {
    return this._signatureList.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperIps {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperIpsOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperIpsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpsOutputReference | DataThunderDdosDstZonePortZoneServiceOperIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperIpsOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperIpsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperIpsOutputReference | DataThunderDdosDstZonePortZoneServiceOperIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperIpsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperIpsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperIpsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperIpsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_http_filter_rate DataThunderDdosDstZonePortZoneServiceOper#current_http_filter_rate}
  */
  readonly currentHttpFilterRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#http_filter_rate_limit DataThunderDdosDstZonePortZoneServiceOper#http_filter_rate_limit}
  */
  readonly httpFilterRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#http_filter_rate_name DataThunderDdosDstZonePortZoneServiceOper#http_filter_rate_name}
  */
  readonly httpFilterRateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_http_filter_rate_limit_exceed DataThunderDdosDstZonePortZoneServiceOper#is_http_filter_rate_limit_exceed}
  */
  readonly isHttpFilterRateLimitExceed?: number;
}

export function dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_http_filter_rate: cdktf.stringToTerraform(struct!.currentHttpFilterRate),
    http_filter_rate_limit: cdktf.stringToTerraform(struct!.httpFilterRateLimit),
    http_filter_rate_name: cdktf.stringToTerraform(struct!.httpFilterRateName),
    is_http_filter_rate_limit_exceed: cdktf.numberToTerraform(struct!.isHttpFilterRateLimitExceed),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_http_filter_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentHttpFilterRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_filter_rate_name: {
      value: cdktf.stringToHclTerraform(struct!.httpFilterRateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_http_filter_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isHttpFilterRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentHttpFilterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentHttpFilterRate = this._currentHttpFilterRate;
    }
    if (this._httpFilterRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateLimit = this._httpFilterRateLimit;
    }
    if (this._httpFilterRateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRateName = this._httpFilterRateName;
    }
    if (this._isHttpFilterRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHttpFilterRateLimitExceed = this._isHttpFilterRateLimitExceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentHttpFilterRate = undefined;
      this._httpFilterRateLimit = undefined;
      this._httpFilterRateName = undefined;
      this._isHttpFilterRateLimitExceed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentHttpFilterRate = value.currentHttpFilterRate;
      this._httpFilterRateLimit = value.httpFilterRateLimit;
      this._httpFilterRateName = value.httpFilterRateName;
      this._isHttpFilterRateLimitExceed = value.isHttpFilterRateLimitExceed;
    }
  }

  // current_http_filter_rate - computed: false, optional: true, required: false
  private _currentHttpFilterRate?: string; 
  public get currentHttpFilterRate() {
    return this.getStringAttribute('current_http_filter_rate');
  }
  public set currentHttpFilterRate(value: string) {
    this._currentHttpFilterRate = value;
  }
  public resetCurrentHttpFilterRate() {
    this._currentHttpFilterRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentHttpFilterRateInput() {
    return this._currentHttpFilterRate;
  }

  // http_filter_rate_limit - computed: false, optional: true, required: false
  private _httpFilterRateLimit?: string; 
  public get httpFilterRateLimit() {
    return this.getStringAttribute('http_filter_rate_limit');
  }
  public set httpFilterRateLimit(value: string) {
    this._httpFilterRateLimit = value;
  }
  public resetHttpFilterRateLimit() {
    this._httpFilterRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateLimitInput() {
    return this._httpFilterRateLimit;
  }

  // http_filter_rate_name - computed: false, optional: true, required: false
  private _httpFilterRateName?: string; 
  public get httpFilterRateName() {
    return this.getStringAttribute('http_filter_rate_name');
  }
  public set httpFilterRateName(value: string) {
    this._httpFilterRateName = value;
  }
  public resetHttpFilterRateName() {
    this._httpFilterRateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRateNameInput() {
    return this._httpFilterRateName;
  }

  // is_http_filter_rate_limit_exceed - computed: false, optional: true, required: false
  private _isHttpFilterRateLimitExceed?: number; 
  public get isHttpFilterRateLimitExceed() {
    return this.getNumberAttribute('is_http_filter_rate_limit_exceed');
  }
  public set isHttpFilterRateLimitExceed(value: number) {
    this._isHttpFilterRateLimitExceed = value;
  }
  public resetIsHttpFilterRateLimitExceed() {
    this._isHttpFilterRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpFilterRateLimitExceedInput() {
    return this._isHttpFilterRateLimitExceed;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_response_size_rate DataThunderDdosDstZonePortZoneServiceOper#current_response_size_rate}
  */
  readonly currentResponseSizeRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_response_size_rate_limit_exceed DataThunderDdosDstZonePortZoneServiceOper#is_response_size_rate_limit_exceed}
  */
  readonly isResponseSizeRateLimitExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#response_size_rate_limit DataThunderDdosDstZonePortZoneServiceOper#response_size_rate_limit}
  */
  readonly responseSizeRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#response_size_rate_name DataThunderDdosDstZonePortZoneServiceOper#response_size_rate_name}
  */
  readonly responseSizeRateName?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_response_size_rate: cdktf.stringToTerraform(struct!.currentResponseSizeRate),
    is_response_size_rate_limit_exceed: cdktf.numberToTerraform(struct!.isResponseSizeRateLimitExceed),
    response_size_rate_limit: cdktf.stringToTerraform(struct!.responseSizeRateLimit),
    response_size_rate_name: cdktf.stringToTerraform(struct!.responseSizeRateName),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_response_size_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentResponseSizeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_response_size_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isResponseSizeRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_size_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_size_rate_name: {
      value: cdktf.stringToHclTerraform(struct!.responseSizeRateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentResponseSizeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentResponseSizeRate = this._currentResponseSizeRate;
    }
    if (this._isResponseSizeRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponseSizeRateLimitExceed = this._isResponseSizeRateLimitExceed;
    }
    if (this._responseSizeRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRateLimit = this._responseSizeRateLimit;
    }
    if (this._responseSizeRateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRateName = this._responseSizeRateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentResponseSizeRate = undefined;
      this._isResponseSizeRateLimitExceed = undefined;
      this._responseSizeRateLimit = undefined;
      this._responseSizeRateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentResponseSizeRate = value.currentResponseSizeRate;
      this._isResponseSizeRateLimitExceed = value.isResponseSizeRateLimitExceed;
      this._responseSizeRateLimit = value.responseSizeRateLimit;
      this._responseSizeRateName = value.responseSizeRateName;
    }
  }

  // current_response_size_rate - computed: false, optional: true, required: false
  private _currentResponseSizeRate?: string; 
  public get currentResponseSizeRate() {
    return this.getStringAttribute('current_response_size_rate');
  }
  public set currentResponseSizeRate(value: string) {
    this._currentResponseSizeRate = value;
  }
  public resetCurrentResponseSizeRate() {
    this._currentResponseSizeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentResponseSizeRateInput() {
    return this._currentResponseSizeRate;
  }

  // is_response_size_rate_limit_exceed - computed: false, optional: true, required: false
  private _isResponseSizeRateLimitExceed?: number; 
  public get isResponseSizeRateLimitExceed() {
    return this.getNumberAttribute('is_response_size_rate_limit_exceed');
  }
  public set isResponseSizeRateLimitExceed(value: number) {
    this._isResponseSizeRateLimitExceed = value;
  }
  public resetIsResponseSizeRateLimitExceed() {
    this._isResponseSizeRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponseSizeRateLimitExceedInput() {
    return this._isResponseSizeRateLimitExceed;
  }

  // response_size_rate_limit - computed: false, optional: true, required: false
  private _responseSizeRateLimit?: string; 
  public get responseSizeRateLimit() {
    return this.getStringAttribute('response_size_rate_limit');
  }
  public set responseSizeRateLimit(value: string) {
    this._responseSizeRateLimit = value;
  }
  public resetResponseSizeRateLimit() {
    this._responseSizeRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRateLimitInput() {
    return this._responseSizeRateLimit;
  }

  // response_size_rate_name - computed: false, optional: true, required: false
  private _responseSizeRateName?: string; 
  public get responseSizeRateName() {
    return this.getStringAttribute('response_size_rate_name');
  }
  public set responseSizeRateName(value: string) {
    this._responseSizeRateName = value;
  }
  public resetResponseSizeRateName() {
    this._responseSizeRateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRateNameInput() {
    return this._responseSizeRateName;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#age DataThunderDdosDstZonePortZoneServiceOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat1_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat2_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat3_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat4_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat5_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat6_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat7_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat8_limit DataThunderDdosDstZonePortZoneServiceOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#bl_reasoning_rcode DataThunderDdosDstZonePortZoneServiceOper#bl_reasoning_rcode}
  */
  readonly blReasoningRcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#bl_reasoning_timestamp DataThunderDdosDstZonePortZoneServiceOper#bl_reasoning_timestamp}
  */
  readonly blReasoningTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#bw_state DataThunderDdosDstZonePortZoneServiceOper#bw_state}
  */
  readonly bwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#connection_limit DataThunderDdosDstZonePortZoneServiceOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#connection_rate_limit DataThunderDdosDstZonePortZoneServiceOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat1 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat2 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat3 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat4 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat5 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat6 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat7 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_app_stat8 DataThunderDdosDstZonePortZoneServiceOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_connection_rate DataThunderDdosDstZonePortZoneServiceOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_connections DataThunderDdosDstZonePortZoneServiceOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_frag_packet_rate DataThunderDdosDstZonePortZoneServiceOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_kbit_rate DataThunderDdosDstZonePortZoneServiceOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_packet_rate DataThunderDdosDstZonePortZoneServiceOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#debug_str DataThunderDdosDstZonePortZoneServiceOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#dst_address_str DataThunderDdosDstZonePortZoneServiceOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#dynamic_entry_count DataThunderDdosDstZonePortZoneServiceOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#dynamic_entry_limit DataThunderDdosDstZonePortZoneServiceOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#frag_packet_rate_limit DataThunderDdosDstZonePortZoneServiceOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat1_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat1_exceed}
  */
  readonly isAppStat1Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat2_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat2_exceed}
  */
  readonly isAppStat2Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat3_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat3_exceed}
  */
  readonly isAppStat3Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat4_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat4_exceed}
  */
  readonly isAppStat4Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat5_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat5_exceed}
  */
  readonly isAppStat5Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat6_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat6_exceed}
  */
  readonly isAppStat6Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat7_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat7_exceed}
  */
  readonly isAppStat7Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_app_stat8_exceed DataThunderDdosDstZonePortZoneServiceOper#is_app_stat8_exceed}
  */
  readonly isAppStat8Exceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_auth_passed DataThunderDdosDstZonePortZoneServiceOper#is_auth_passed}
  */
  readonly isAuthPassed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_connection_rate_exceed DataThunderDdosDstZonePortZoneServiceOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_connections_exceed DataThunderDdosDstZonePortZoneServiceOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_frag_packet_rate_exceed DataThunderDdosDstZonePortZoneServiceOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_kbit_rate_exceed DataThunderDdosDstZonePortZoneServiceOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#is_packet_rate_exceed DataThunderDdosDstZonePortZoneServiceOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#kbit_rate_limit DataThunderDdosDstZonePortZoneServiceOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#level DataThunderDdosDstZonePortZoneServiceOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#lockup_time DataThunderDdosDstZonePortZoneServiceOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#packet_rate_limit DataThunderDdosDstZonePortZoneServiceOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sflow_source_id DataThunderDdosDstZonePortZoneServiceOper#sflow_source_id}
  */
  readonly sflowSourceId?: number;
  /**
  * http_filter_rates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#http_filter_rates DataThunderDdosDstZonePortZoneServiceOper#http_filter_rates}
  */
  readonly httpFilterRates?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable;
  /**
  * response_size_rates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#response_size_rates DataThunderDdosDstZonePortZoneServiceOper#response_size_rates}
  */
  readonly responseSizeRates?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
    bl_reasoning_rcode: cdktf.stringToTerraform(struct!.blReasoningRcode),
    bl_reasoning_timestamp: cdktf.stringToTerraform(struct!.blReasoningTimestamp),
    bw_state: cdktf.stringToTerraform(struct!.bwState),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_app_stat1: cdktf.stringToTerraform(struct!.currentAppStat1),
    current_app_stat2: cdktf.stringToTerraform(struct!.currentAppStat2),
    current_app_stat3: cdktf.stringToTerraform(struct!.currentAppStat3),
    current_app_stat4: cdktf.stringToTerraform(struct!.currentAppStat4),
    current_app_stat5: cdktf.stringToTerraform(struct!.currentAppStat5),
    current_app_stat6: cdktf.stringToTerraform(struct!.currentAppStat6),
    current_app_stat7: cdktf.stringToTerraform(struct!.currentAppStat7),
    current_app_stat8: cdktf.stringToTerraform(struct!.currentAppStat8),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    debug_str: cdktf.stringToTerraform(struct!.debugStr),
    dst_address_str: cdktf.stringToTerraform(struct!.dstAddressStr),
    dynamic_entry_count: cdktf.stringToTerraform(struct!.dynamicEntryCount),
    dynamic_entry_limit: cdktf.stringToTerraform(struct!.dynamicEntryLimit),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    is_app_stat1_exceed: cdktf.numberToTerraform(struct!.isAppStat1Exceed),
    is_app_stat2_exceed: cdktf.numberToTerraform(struct!.isAppStat2Exceed),
    is_app_stat3_exceed: cdktf.numberToTerraform(struct!.isAppStat3Exceed),
    is_app_stat4_exceed: cdktf.numberToTerraform(struct!.isAppStat4Exceed),
    is_app_stat5_exceed: cdktf.numberToTerraform(struct!.isAppStat5Exceed),
    is_app_stat6_exceed: cdktf.numberToTerraform(struct!.isAppStat6Exceed),
    is_app_stat7_exceed: cdktf.numberToTerraform(struct!.isAppStat7Exceed),
    is_app_stat8_exceed: cdktf.numberToTerraform(struct!.isAppStat8Exceed),
    is_auth_passed: cdktf.stringToTerraform(struct!.isAuthPassed),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level: cdktf.numberToTerraform(struct!.level),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    sflow_source_id: cdktf.numberToTerraform(struct!.sflowSourceId),
    http_filter_rates: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesToTerraform, true)(struct!.httpFilterRates),
    response_size_rates: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesToTerraform, true)(struct!.responseSizeRates),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_stat1_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat1Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat2_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat2Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat3_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat3Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat4_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat4Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat5_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat5Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat6_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat7_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat7Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_stat8_limit: {
      value: cdktf.stringToHclTerraform(struct!.appStat8Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bl_reasoning_rcode: {
      value: cdktf.stringToHclTerraform(struct!.blReasoningRcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bl_reasoning_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.blReasoningTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bw_state: {
      value: cdktf.stringToHclTerraform(struct!.bwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat1: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat2: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat3: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat4: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat5: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat6: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat7: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_app_stat8: {
      value: cdktf.stringToHclTerraform(struct!.currentAppStat8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_str: {
      value: cdktf.stringToHclTerraform(struct!.debugStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_address_str: {
      value: cdktf.stringToHclTerraform(struct!.dstAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_count: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.dynamicEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_app_stat1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat3_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat3Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat4_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat4Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat5_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat5Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat6_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat6Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat7_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat7Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_app_stat8_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isAppStat8Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auth_passed: {
      value: cdktf.stringToHclTerraform(struct!.isAuthPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_time: {
      value: cdktf.numberToHclTerraform(struct!.lockupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.numberToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_filter_rates: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesToHclTerraform, true)(struct!.httpFilterRates),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesList",
    },
    response_size_rates: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesToHclTerraform, true)(struct!.responseSizeRates),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._appStat1Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat1Limit = this._appStat1Limit;
    }
    if (this._appStat2Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat2Limit = this._appStat2Limit;
    }
    if (this._appStat3Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat3Limit = this._appStat3Limit;
    }
    if (this._appStat4Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat4Limit = this._appStat4Limit;
    }
    if (this._appStat5Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat5Limit = this._appStat5Limit;
    }
    if (this._appStat6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat6Limit = this._appStat6Limit;
    }
    if (this._appStat7Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat7Limit = this._appStat7Limit;
    }
    if (this._appStat8Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat8Limit = this._appStat8Limit;
    }
    if (this._blReasoningRcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blReasoningRcode = this._blReasoningRcode;
    }
    if (this._blReasoningTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blReasoningTimestamp = this._blReasoningTimestamp;
    }
    if (this._bwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwState = this._bwState;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentAppStat1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat1 = this._currentAppStat1;
    }
    if (this._currentAppStat2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat2 = this._currentAppStat2;
    }
    if (this._currentAppStat3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat3 = this._currentAppStat3;
    }
    if (this._currentAppStat4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat4 = this._currentAppStat4;
    }
    if (this._currentAppStat5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat5 = this._currentAppStat5;
    }
    if (this._currentAppStat6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat6 = this._currentAppStat6;
    }
    if (this._currentAppStat7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat7 = this._currentAppStat7;
    }
    if (this._currentAppStat8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentAppStat8 = this._currentAppStat8;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._debugStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugStr = this._debugStr;
    }
    if (this._dstAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddressStr = this._dstAddressStr;
    }
    if (this._dynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryCount = this._dynamicEntryCount;
    }
    if (this._dynamicEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicEntryLimit = this._dynamicEntryLimit;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isAppStat1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat1Exceed = this._isAppStat1Exceed;
    }
    if (this._isAppStat2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat2Exceed = this._isAppStat2Exceed;
    }
    if (this._isAppStat3Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat3Exceed = this._isAppStat3Exceed;
    }
    if (this._isAppStat4Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat4Exceed = this._isAppStat4Exceed;
    }
    if (this._isAppStat5Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat5Exceed = this._isAppStat5Exceed;
    }
    if (this._isAppStat6Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat6Exceed = this._isAppStat6Exceed;
    }
    if (this._isAppStat7Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat7Exceed = this._isAppStat7Exceed;
    }
    if (this._isAppStat8Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAppStat8Exceed = this._isAppStat8Exceed;
    }
    if (this._isAuthPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthPassed = this._isAuthPassed;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._httpFilterRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFilterRates = this._httpFilterRates?.internalValue;
    }
    if (this._responseSizeRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSizeRates = this._responseSizeRates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
      this._blReasoningRcode = undefined;
      this._blReasoningTimestamp = undefined;
      this._bwState = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentAppStat1 = undefined;
      this._currentAppStat2 = undefined;
      this._currentAppStat3 = undefined;
      this._currentAppStat4 = undefined;
      this._currentAppStat5 = undefined;
      this._currentAppStat6 = undefined;
      this._currentAppStat7 = undefined;
      this._currentAppStat8 = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._debugStr = undefined;
      this._dstAddressStr = undefined;
      this._dynamicEntryCount = undefined;
      this._dynamicEntryLimit = undefined;
      this._fragPacketRateLimit = undefined;
      this._isAppStat1Exceed = undefined;
      this._isAppStat2Exceed = undefined;
      this._isAppStat3Exceed = undefined;
      this._isAppStat4Exceed = undefined;
      this._isAppStat5Exceed = undefined;
      this._isAppStat6Exceed = undefined;
      this._isAppStat7Exceed = undefined;
      this._isAppStat8Exceed = undefined;
      this._isAuthPassed = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._level = undefined;
      this._lockupTime = undefined;
      this._packetRateLimit = undefined;
      this._sflowSourceId = undefined;
      this._httpFilterRates.internalValue = undefined;
      this._responseSizeRates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
      this._blReasoningRcode = value.blReasoningRcode;
      this._blReasoningTimestamp = value.blReasoningTimestamp;
      this._bwState = value.bwState;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentAppStat1 = value.currentAppStat1;
      this._currentAppStat2 = value.currentAppStat2;
      this._currentAppStat3 = value.currentAppStat3;
      this._currentAppStat4 = value.currentAppStat4;
      this._currentAppStat5 = value.currentAppStat5;
      this._currentAppStat6 = value.currentAppStat6;
      this._currentAppStat7 = value.currentAppStat7;
      this._currentAppStat8 = value.currentAppStat8;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._debugStr = value.debugStr;
      this._dstAddressStr = value.dstAddressStr;
      this._dynamicEntryCount = value.dynamicEntryCount;
      this._dynamicEntryLimit = value.dynamicEntryLimit;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isAppStat1Exceed = value.isAppStat1Exceed;
      this._isAppStat2Exceed = value.isAppStat2Exceed;
      this._isAppStat3Exceed = value.isAppStat3Exceed;
      this._isAppStat4Exceed = value.isAppStat4Exceed;
      this._isAppStat5Exceed = value.isAppStat5Exceed;
      this._isAppStat6Exceed = value.isAppStat6Exceed;
      this._isAppStat7Exceed = value.isAppStat7Exceed;
      this._isAppStat8Exceed = value.isAppStat8Exceed;
      this._isAuthPassed = value.isAuthPassed;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._level = value.level;
      this._lockupTime = value.lockupTime;
      this._packetRateLimit = value.packetRateLimit;
      this._sflowSourceId = value.sflowSourceId;
      this._httpFilterRates.internalValue = value.httpFilterRates;
      this._responseSizeRates.internalValue = value.responseSizeRates;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // app_stat1_limit - computed: false, optional: true, required: false
  private _appStat1Limit?: string; 
  public get appStat1Limit() {
    return this.getStringAttribute('app_stat1_limit');
  }
  public set appStat1Limit(value: string) {
    this._appStat1Limit = value;
  }
  public resetAppStat1Limit() {
    this._appStat1Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat1LimitInput() {
    return this._appStat1Limit;
  }

  // app_stat2_limit - computed: false, optional: true, required: false
  private _appStat2Limit?: string; 
  public get appStat2Limit() {
    return this.getStringAttribute('app_stat2_limit');
  }
  public set appStat2Limit(value: string) {
    this._appStat2Limit = value;
  }
  public resetAppStat2Limit() {
    this._appStat2Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat2LimitInput() {
    return this._appStat2Limit;
  }

  // app_stat3_limit - computed: false, optional: true, required: false
  private _appStat3Limit?: string; 
  public get appStat3Limit() {
    return this.getStringAttribute('app_stat3_limit');
  }
  public set appStat3Limit(value: string) {
    this._appStat3Limit = value;
  }
  public resetAppStat3Limit() {
    this._appStat3Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat3LimitInput() {
    return this._appStat3Limit;
  }

  // app_stat4_limit - computed: false, optional: true, required: false
  private _appStat4Limit?: string; 
  public get appStat4Limit() {
    return this.getStringAttribute('app_stat4_limit');
  }
  public set appStat4Limit(value: string) {
    this._appStat4Limit = value;
  }
  public resetAppStat4Limit() {
    this._appStat4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat4LimitInput() {
    return this._appStat4Limit;
  }

  // app_stat5_limit - computed: false, optional: true, required: false
  private _appStat5Limit?: string; 
  public get appStat5Limit() {
    return this.getStringAttribute('app_stat5_limit');
  }
  public set appStat5Limit(value: string) {
    this._appStat5Limit = value;
  }
  public resetAppStat5Limit() {
    this._appStat5Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat5LimitInput() {
    return this._appStat5Limit;
  }

  // app_stat6_limit - computed: false, optional: true, required: false
  private _appStat6Limit?: string; 
  public get appStat6Limit() {
    return this.getStringAttribute('app_stat6_limit');
  }
  public set appStat6Limit(value: string) {
    this._appStat6Limit = value;
  }
  public resetAppStat6Limit() {
    this._appStat6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat6LimitInput() {
    return this._appStat6Limit;
  }

  // app_stat7_limit - computed: false, optional: true, required: false
  private _appStat7Limit?: string; 
  public get appStat7Limit() {
    return this.getStringAttribute('app_stat7_limit');
  }
  public set appStat7Limit(value: string) {
    this._appStat7Limit = value;
  }
  public resetAppStat7Limit() {
    this._appStat7Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat7LimitInput() {
    return this._appStat7Limit;
  }

  // app_stat8_limit - computed: false, optional: true, required: false
  private _appStat8Limit?: string; 
  public get appStat8Limit() {
    return this.getStringAttribute('app_stat8_limit');
  }
  public set appStat8Limit(value: string) {
    this._appStat8Limit = value;
  }
  public resetAppStat8Limit() {
    this._appStat8Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStat8LimitInput() {
    return this._appStat8Limit;
  }

  // bl_reasoning_rcode - computed: false, optional: true, required: false
  private _blReasoningRcode?: string; 
  public get blReasoningRcode() {
    return this.getStringAttribute('bl_reasoning_rcode');
  }
  public set blReasoningRcode(value: string) {
    this._blReasoningRcode = value;
  }
  public resetBlReasoningRcode() {
    this._blReasoningRcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blReasoningRcodeInput() {
    return this._blReasoningRcode;
  }

  // bl_reasoning_timestamp - computed: false, optional: true, required: false
  private _blReasoningTimestamp?: string; 
  public get blReasoningTimestamp() {
    return this.getStringAttribute('bl_reasoning_timestamp');
  }
  public set blReasoningTimestamp(value: string) {
    this._blReasoningTimestamp = value;
  }
  public resetBlReasoningTimestamp() {
    this._blReasoningTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blReasoningTimestampInput() {
    return this._blReasoningTimestamp;
  }

  // bw_state - computed: false, optional: true, required: false
  private _bwState?: string; 
  public get bwState() {
    return this.getStringAttribute('bw_state');
  }
  public set bwState(value: string) {
    this._bwState = value;
  }
  public resetBwState() {
    this._bwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwStateInput() {
    return this._bwState;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_app_stat1 - computed: false, optional: true, required: false
  private _currentAppStat1?: string; 
  public get currentAppStat1() {
    return this.getStringAttribute('current_app_stat1');
  }
  public set currentAppStat1(value: string) {
    this._currentAppStat1 = value;
  }
  public resetCurrentAppStat1() {
    this._currentAppStat1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat1Input() {
    return this._currentAppStat1;
  }

  // current_app_stat2 - computed: false, optional: true, required: false
  private _currentAppStat2?: string; 
  public get currentAppStat2() {
    return this.getStringAttribute('current_app_stat2');
  }
  public set currentAppStat2(value: string) {
    this._currentAppStat2 = value;
  }
  public resetCurrentAppStat2() {
    this._currentAppStat2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat2Input() {
    return this._currentAppStat2;
  }

  // current_app_stat3 - computed: false, optional: true, required: false
  private _currentAppStat3?: string; 
  public get currentAppStat3() {
    return this.getStringAttribute('current_app_stat3');
  }
  public set currentAppStat3(value: string) {
    this._currentAppStat3 = value;
  }
  public resetCurrentAppStat3() {
    this._currentAppStat3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat3Input() {
    return this._currentAppStat3;
  }

  // current_app_stat4 - computed: false, optional: true, required: false
  private _currentAppStat4?: string; 
  public get currentAppStat4() {
    return this.getStringAttribute('current_app_stat4');
  }
  public set currentAppStat4(value: string) {
    this._currentAppStat4 = value;
  }
  public resetCurrentAppStat4() {
    this._currentAppStat4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat4Input() {
    return this._currentAppStat4;
  }

  // current_app_stat5 - computed: false, optional: true, required: false
  private _currentAppStat5?: string; 
  public get currentAppStat5() {
    return this.getStringAttribute('current_app_stat5');
  }
  public set currentAppStat5(value: string) {
    this._currentAppStat5 = value;
  }
  public resetCurrentAppStat5() {
    this._currentAppStat5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat5Input() {
    return this._currentAppStat5;
  }

  // current_app_stat6 - computed: false, optional: true, required: false
  private _currentAppStat6?: string; 
  public get currentAppStat6() {
    return this.getStringAttribute('current_app_stat6');
  }
  public set currentAppStat6(value: string) {
    this._currentAppStat6 = value;
  }
  public resetCurrentAppStat6() {
    this._currentAppStat6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat6Input() {
    return this._currentAppStat6;
  }

  // current_app_stat7 - computed: false, optional: true, required: false
  private _currentAppStat7?: string; 
  public get currentAppStat7() {
    return this.getStringAttribute('current_app_stat7');
  }
  public set currentAppStat7(value: string) {
    this._currentAppStat7 = value;
  }
  public resetCurrentAppStat7() {
    this._currentAppStat7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat7Input() {
    return this._currentAppStat7;
  }

  // current_app_stat8 - computed: false, optional: true, required: false
  private _currentAppStat8?: string; 
  public get currentAppStat8() {
    return this.getStringAttribute('current_app_stat8');
  }
  public set currentAppStat8(value: string) {
    this._currentAppStat8 = value;
  }
  public resetCurrentAppStat8() {
    this._currentAppStat8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentAppStat8Input() {
    return this._currentAppStat8;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // debug_str - computed: false, optional: true, required: false
  private _debugStr?: string; 
  public get debugStr() {
    return this.getStringAttribute('debug_str');
  }
  public set debugStr(value: string) {
    this._debugStr = value;
  }
  public resetDebugStr() {
    this._debugStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugStrInput() {
    return this._debugStr;
  }

  // dst_address_str - computed: false, optional: true, required: false
  private _dstAddressStr?: string; 
  public get dstAddressStr() {
    return this.getStringAttribute('dst_address_str');
  }
  public set dstAddressStr(value: string) {
    this._dstAddressStr = value;
  }
  public resetDstAddressStr() {
    this._dstAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressStrInput() {
    return this._dstAddressStr;
  }

  // dynamic_entry_count - computed: false, optional: true, required: false
  private _dynamicEntryCount?: string; 
  public get dynamicEntryCount() {
    return this.getStringAttribute('dynamic_entry_count');
  }
  public set dynamicEntryCount(value: string) {
    this._dynamicEntryCount = value;
  }
  public resetDynamicEntryCount() {
    this._dynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryCountInput() {
    return this._dynamicEntryCount;
  }

  // dynamic_entry_limit - computed: false, optional: true, required: false
  private _dynamicEntryLimit?: string; 
  public get dynamicEntryLimit() {
    return this.getStringAttribute('dynamic_entry_limit');
  }
  public set dynamicEntryLimit(value: string) {
    this._dynamicEntryLimit = value;
  }
  public resetDynamicEntryLimit() {
    this._dynamicEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryLimitInput() {
    return this._dynamicEntryLimit;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_app_stat1_exceed - computed: false, optional: true, required: false
  private _isAppStat1Exceed?: number; 
  public get isAppStat1Exceed() {
    return this.getNumberAttribute('is_app_stat1_exceed');
  }
  public set isAppStat1Exceed(value: number) {
    this._isAppStat1Exceed = value;
  }
  public resetIsAppStat1Exceed() {
    this._isAppStat1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat1ExceedInput() {
    return this._isAppStat1Exceed;
  }

  // is_app_stat2_exceed - computed: false, optional: true, required: false
  private _isAppStat2Exceed?: number; 
  public get isAppStat2Exceed() {
    return this.getNumberAttribute('is_app_stat2_exceed');
  }
  public set isAppStat2Exceed(value: number) {
    this._isAppStat2Exceed = value;
  }
  public resetIsAppStat2Exceed() {
    this._isAppStat2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat2ExceedInput() {
    return this._isAppStat2Exceed;
  }

  // is_app_stat3_exceed - computed: false, optional: true, required: false
  private _isAppStat3Exceed?: number; 
  public get isAppStat3Exceed() {
    return this.getNumberAttribute('is_app_stat3_exceed');
  }
  public set isAppStat3Exceed(value: number) {
    this._isAppStat3Exceed = value;
  }
  public resetIsAppStat3Exceed() {
    this._isAppStat3Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat3ExceedInput() {
    return this._isAppStat3Exceed;
  }

  // is_app_stat4_exceed - computed: false, optional: true, required: false
  private _isAppStat4Exceed?: number; 
  public get isAppStat4Exceed() {
    return this.getNumberAttribute('is_app_stat4_exceed');
  }
  public set isAppStat4Exceed(value: number) {
    this._isAppStat4Exceed = value;
  }
  public resetIsAppStat4Exceed() {
    this._isAppStat4Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat4ExceedInput() {
    return this._isAppStat4Exceed;
  }

  // is_app_stat5_exceed - computed: false, optional: true, required: false
  private _isAppStat5Exceed?: number; 
  public get isAppStat5Exceed() {
    return this.getNumberAttribute('is_app_stat5_exceed');
  }
  public set isAppStat5Exceed(value: number) {
    this._isAppStat5Exceed = value;
  }
  public resetIsAppStat5Exceed() {
    this._isAppStat5Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat5ExceedInput() {
    return this._isAppStat5Exceed;
  }

  // is_app_stat6_exceed - computed: false, optional: true, required: false
  private _isAppStat6Exceed?: number; 
  public get isAppStat6Exceed() {
    return this.getNumberAttribute('is_app_stat6_exceed');
  }
  public set isAppStat6Exceed(value: number) {
    this._isAppStat6Exceed = value;
  }
  public resetIsAppStat6Exceed() {
    this._isAppStat6Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat6ExceedInput() {
    return this._isAppStat6Exceed;
  }

  // is_app_stat7_exceed - computed: false, optional: true, required: false
  private _isAppStat7Exceed?: number; 
  public get isAppStat7Exceed() {
    return this.getNumberAttribute('is_app_stat7_exceed');
  }
  public set isAppStat7Exceed(value: number) {
    this._isAppStat7Exceed = value;
  }
  public resetIsAppStat7Exceed() {
    this._isAppStat7Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat7ExceedInput() {
    return this._isAppStat7Exceed;
  }

  // is_app_stat8_exceed - computed: false, optional: true, required: false
  private _isAppStat8Exceed?: number; 
  public get isAppStat8Exceed() {
    return this.getNumberAttribute('is_app_stat8_exceed');
  }
  public set isAppStat8Exceed(value: number) {
    this._isAppStat8Exceed = value;
  }
  public resetIsAppStat8Exceed() {
    this._isAppStat8Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppStat8ExceedInput() {
    return this._isAppStat8Exceed;
  }

  // is_auth_passed - computed: false, optional: true, required: false
  private _isAuthPassed?: string; 
  public get isAuthPassed() {
    return this.getStringAttribute('is_auth_passed');
  }
  public set isAuthPassed(value: string) {
    this._isAuthPassed = value;
  }
  public resetIsAuthPassed() {
    this._isAuthPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthPassedInput() {
    return this._isAuthPassed;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // lockup_time - computed: false, optional: true, required: false
  private _lockupTime?: number; 
  public get lockupTime() {
    return this.getNumberAttribute('lockup_time');
  }
  public set lockupTime(value: number) {
    this._lockupTime = value;
  }
  public resetLockupTime() {
    this._lockupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeInput() {
    return this._lockupTime;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: number; 
  public get sflowSourceId() {
    return this.getNumberAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: number) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // http_filter_rates - computed: false, optional: true, required: false
  private _httpFilterRates = new DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRatesList(this, "http_filter_rates", false);
  public get httpFilterRates() {
    return this._httpFilterRates;
  }
  public putHttpFilterRates(value: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListHttpFilterRates[] | cdktf.IResolvable) {
    this._httpFilterRates.internalValue = value;
  }
  public resetHttpFilterRates() {
    this._httpFilterRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFilterRatesInput() {
    return this._httpFilterRates.internalValue;
  }

  // response_size_rates - computed: false, optional: true, required: false
  private _responseSizeRates = new DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRatesList(this, "response_size_rates", false);
  public get responseSizeRates() {
    return this._responseSizeRates;
  }
  public putResponseSizeRates(value: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListResponseSizeRates[] | cdktf.IResolvable) {
    this._responseSizeRates.internalValue = value;
  }
  public resetResponseSizeRates() {
    this._responseSizeRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSizeRatesInput() {
    return this._responseSizeRates.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#app_stat DataThunderDdosDstZonePortZoneServiceOper#app_stat}
  */
  readonly appStat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#authenticated DataThunderDdosDstZonePortZoneServiceOper#authenticated}
  */
  readonly authenticated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#black_listed DataThunderDdosDstZonePortZoneServiceOper#black_listed}
  */
  readonly blackListed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#class_list DataThunderDdosDstZonePortZoneServiceOper#class_list}
  */
  readonly classList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#domain_name DataThunderDdosDstZonePortZoneServiceOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#entry_displayed_count DataThunderDdosDstZonePortZoneServiceOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#exceeded DataThunderDdosDstZonePortZoneServiceOper#exceeded}
  */
  readonly exceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#hw_blacklisted DataThunderDdosDstZonePortZoneServiceOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_detail DataThunderDdosDstZonePortZoneServiceOper#indicator_detail}
  */
  readonly indicatorDetail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#ipv6 DataThunderDdosDstZonePortZoneServiceOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#l4_ext_rate DataThunderDdosDstZonePortZoneServiceOper#l4_ext_rate}
  */
  readonly l4ExtRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#level DataThunderDdosDstZonePortZoneServiceOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#overflow_policy DataThunderDdosDstZonePortZoneServiceOper#overflow_policy}
  */
  readonly overflowPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#reporting_status DataThunderDdosDstZonePortZoneServiceOper#reporting_status}
  */
  readonly reportingStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#service_displayed_count DataThunderDdosDstZonePortZoneServiceOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sources DataThunderDdosDstZonePortZoneServiceOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sources_all_entries DataThunderDdosDstZonePortZoneServiceOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#subnet_ip_addr DataThunderDdosDstZonePortZoneServiceOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#subnet_ipv6_addr DataThunderDdosDstZonePortZoneServiceOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#suffix_request_rate DataThunderDdosDstZonePortZoneServiceOper#suffix_request_rate}
  */
  readonly suffixRequestRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#white_listed DataThunderDdosDstZonePortZoneServiceOper#white_listed}
  */
  readonly whiteListed?: number;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#ddos_entry_list DataThunderDdosDstZonePortZoneServiceOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_stat: cdktf.numberToTerraform(struct!.appStat),
    authenticated: cdktf.numberToTerraform(struct!.authenticated),
    black_listed: cdktf.numberToTerraform(struct!.blackListed),
    class_list: cdktf.stringToTerraform(struct!.classList),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    exceeded: cdktf.numberToTerraform(struct!.exceeded),
    hw_blacklisted: cdktf.numberToTerraform(struct!.hwBlacklisted),
    indicator_detail: cdktf.numberToTerraform(struct!.indicatorDetail),
    indicators: cdktf.numberToTerraform(struct!.indicators),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    l4_ext_rate: cdktf.numberToTerraform(struct!.l4ExtRate),
    level: cdktf.numberToTerraform(struct!.level),
    overflow_policy: cdktf.numberToTerraform(struct!.overflowPolicy),
    reporting_status: cdktf.numberToTerraform(struct!.reportingStatus),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    suffix_request_rate: cdktf.numberToTerraform(struct!.suffixRequestRate),
    white_listed: cdktf.numberToTerraform(struct!.whiteListed),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_stat: {
      value: cdktf.numberToHclTerraform(struct!.appStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authenticated: {
      value: cdktf.numberToHclTerraform(struct!.authenticated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    black_listed: {
      value: cdktf.numberToHclTerraform(struct!.blackListed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.entryDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceeded: {
      value: cdktf.numberToHclTerraform(struct!.exceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.hwBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_detail: {
      value: cdktf.numberToHclTerraform(struct!.indicatorDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicators: {
      value: cdktf.numberToHclTerraform(struct!.indicators),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_ext_rate: {
      value: cdktf.numberToHclTerraform(struct!.l4ExtRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overflow_policy: {
      value: cdktf.numberToHclTerraform(struct!.overflowPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reporting_status: {
      value: cdktf.numberToHclTerraform(struct!.reportingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.serviceDisplayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.numberToHclTerraform(struct!.sources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources_all_entries: {
      value: cdktf.numberToHclTerraform(struct!.sourcesAllEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_request_rate: {
      value: cdktf.numberToHclTerraform(struct!.suffixRequestRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    white_listed: {
      value: cdktf.numberToHclTerraform(struct!.whiteListed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat = this._appStat;
    }
    if (this._authenticated !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticated = this._authenticated;
    }
    if (this._blackListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackListed = this._blackListed;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._exceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceeded = this._exceeded;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._indicatorDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorDetail = this._indicatorDetail;
    }
    if (this._indicators !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._l4ExtRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ExtRate = this._l4ExtRate;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._overflowPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowPolicy = this._overflowPolicy;
    }
    if (this._reportingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingStatus = this._reportingStatus;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._sourcesAllEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcesAllEntries = this._sourcesAllEntries;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._suffixRequestRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixRequestRate = this._suffixRequestRate;
    }
    if (this._whiteListed !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListed = this._whiteListed;
    }
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appStat = undefined;
      this._authenticated = undefined;
      this._blackListed = undefined;
      this._classList = undefined;
      this._domainName = undefined;
      this._entryDisplayedCount = undefined;
      this._exceeded = undefined;
      this._hwBlacklisted = undefined;
      this._indicatorDetail = undefined;
      this._indicators = undefined;
      this._ipv6 = undefined;
      this._l4ExtRate = undefined;
      this._level = undefined;
      this._overflowPolicy = undefined;
      this._reportingStatus = undefined;
      this._serviceDisplayedCount = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._suffixRequestRate = undefined;
      this._whiteListed = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appStat = value.appStat;
      this._authenticated = value.authenticated;
      this._blackListed = value.blackListed;
      this._classList = value.classList;
      this._domainName = value.domainName;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._exceeded = value.exceeded;
      this._hwBlacklisted = value.hwBlacklisted;
      this._indicatorDetail = value.indicatorDetail;
      this._indicators = value.indicators;
      this._ipv6 = value.ipv6;
      this._l4ExtRate = value.l4ExtRate;
      this._level = value.level;
      this._overflowPolicy = value.overflowPolicy;
      this._reportingStatus = value.reportingStatus;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._suffixRequestRate = value.suffixRequestRate;
      this._whiteListed = value.whiteListed;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // app_stat - computed: false, optional: true, required: false
  private _appStat?: number; 
  public get appStat() {
    return this.getNumberAttribute('app_stat');
  }
  public set appStat(value: number) {
    this._appStat = value;
  }
  public resetAppStat() {
    this._appStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStatInput() {
    return this._appStat;
  }

  // authenticated - computed: false, optional: true, required: false
  private _authenticated?: number; 
  public get authenticated() {
    return this.getNumberAttribute('authenticated');
  }
  public set authenticated(value: number) {
    this._authenticated = value;
  }
  public resetAuthenticated() {
    this._authenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedInput() {
    return this._authenticated;
  }

  // black_listed - computed: false, optional: true, required: false
  private _blackListed?: number; 
  public get blackListed() {
    return this.getNumberAttribute('black_listed');
  }
  public set blackListed(value: number) {
    this._blackListed = value;
  }
  public resetBlackListed() {
    this._blackListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListedInput() {
    return this._blackListed;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // entry_displayed_count - computed: false, optional: true, required: false
  private _entryDisplayedCount?: number; 
  public get entryDisplayedCount() {
    return this.getNumberAttribute('entry_displayed_count');
  }
  public set entryDisplayedCount(value: number) {
    this._entryDisplayedCount = value;
  }
  public resetEntryDisplayedCount() {
    this._entryDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDisplayedCountInput() {
    return this._entryDisplayedCount;
  }

  // exceeded - computed: false, optional: true, required: false
  private _exceeded?: number; 
  public get exceeded() {
    return this.getNumberAttribute('exceeded');
  }
  public set exceeded(value: number) {
    this._exceeded = value;
  }
  public resetExceeded() {
    this._exceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceededInput() {
    return this._exceeded;
  }

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: number; 
  public get hwBlacklisted() {
    return this.getNumberAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: number) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
  }

  // indicator_detail - computed: false, optional: true, required: false
  private _indicatorDetail?: number; 
  public get indicatorDetail() {
    return this.getNumberAttribute('indicator_detail');
  }
  public set indicatorDetail(value: number) {
    this._indicatorDetail = value;
  }
  public resetIndicatorDetail() {
    this._indicatorDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorDetailInput() {
    return this._indicatorDetail;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators?: number; 
  public get indicators() {
    return this.getNumberAttribute('indicators');
  }
  public set indicators(value: number) {
    this._indicators = value;
  }
  public resetIndicators() {
    this._indicators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // l4_ext_rate - computed: false, optional: true, required: false
  private _l4ExtRate?: number; 
  public get l4ExtRate() {
    return this.getNumberAttribute('l4_ext_rate');
  }
  public set l4ExtRate(value: number) {
    this._l4ExtRate = value;
  }
  public resetL4ExtRate() {
    this._l4ExtRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ExtRateInput() {
    return this._l4ExtRate;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // overflow_policy - computed: false, optional: true, required: false
  private _overflowPolicy?: number; 
  public get overflowPolicy() {
    return this.getNumberAttribute('overflow_policy');
  }
  public set overflowPolicy(value: number) {
    this._overflowPolicy = value;
  }
  public resetOverflowPolicy() {
    this._overflowPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowPolicyInput() {
    return this._overflowPolicy;
  }

  // reporting_status - computed: false, optional: true, required: false
  private _reportingStatus?: number; 
  public get reportingStatus() {
    return this.getNumberAttribute('reporting_status');
  }
  public set reportingStatus(value: number) {
    this._reportingStatus = value;
  }
  public resetReportingStatus() {
    this._reportingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingStatusInput() {
    return this._reportingStatus;
  }

  // service_displayed_count - computed: false, optional: true, required: false
  private _serviceDisplayedCount?: number; 
  public get serviceDisplayedCount() {
    return this.getNumberAttribute('service_displayed_count');
  }
  public set serviceDisplayedCount(value: number) {
    this._serviceDisplayedCount = value;
  }
  public resetServiceDisplayedCount() {
    this._serviceDisplayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDisplayedCountInput() {
    return this._serviceDisplayedCount;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: number; 
  public get sources() {
    return this.getNumberAttribute('sources');
  }
  public set sources(value: number) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // sources_all_entries - computed: false, optional: true, required: false
  private _sourcesAllEntries?: number; 
  public get sourcesAllEntries() {
    return this.getNumberAttribute('sources_all_entries');
  }
  public set sourcesAllEntries(value: number) {
    this._sourcesAllEntries = value;
  }
  public resetSourcesAllEntries() {
    this._sourcesAllEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesAllEntriesInput() {
    return this._sourcesAllEntries;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // suffix_request_rate - computed: false, optional: true, required: false
  private _suffixRequestRate?: number; 
  public get suffixRequestRate() {
    return this.getNumberAttribute('suffix_request_rate');
  }
  public set suffixRequestRate(value: number) {
    this._suffixRequestRate = value;
  }
  public resetSuffixRequestRate() {
    this._suffixRequestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixRequestRateInput() {
    return this._suffixRequestRate;
  }

  // white_listed - computed: false, optional: true, required: false
  private _whiteListed?: number; 
  public get whiteListed() {
    return this.getNumberAttribute('white_listed');
  }
  public set whiteListed(value: number) {
    this._whiteListed = value;
  }
  public resetWhiteListed() {
    this._whiteListed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedInput() {
    return this._whiteListed;
  }

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstZonePortZoneServiceOperOperDdosEntryListStruct[] | cdktf.IResolvable) {
    this._ddosEntryList.internalValue = value;
  }
  public resetDdosEntryList() {
    this._ddosEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryListInput() {
    return this._ddosEntryList.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_desc DataThunderDdosDstZonePortZoneServiceOper#filter_desc}
  */
  readonly filterDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_enabled DataThunderDdosDstZonePortZoneServiceOper#filter_enabled}
  */
  readonly filterEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_expr DataThunderDdosDstZonePortZoneServiceOper#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#hardware_filter DataThunderDdosDstZonePortZoneServiceOper#hardware_filter}
  */
  readonly hardwareFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#processing_unit DataThunderDdosDstZonePortZoneServiceOper#processing_unit}
  */
  readonly processingUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sample_ratio DataThunderDdosDstZonePortZoneServiceOper#sample_ratio}
  */
  readonly sampleRatio?: number;
}

export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_desc: cdktf.stringToTerraform(struct!.filterDesc),
    filter_enabled: cdktf.numberToTerraform(struct!.filterEnabled),
    filter_expr: cdktf.stringToTerraform(struct!.filterExpr),
    hardware_filter: cdktf.numberToTerraform(struct!.hardwareFilter),
    processing_unit: cdktf.stringToTerraform(struct!.processingUnit),
    sample_ratio: cdktf.numberToTerraform(struct!.sampleRatio),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_desc: {
      value: cdktf.stringToHclTerraform(struct!.filterDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_enabled: {
      value: cdktf.numberToHclTerraform(struct!.filterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_expr: {
      value: cdktf.stringToHclTerraform(struct!.filterExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_filter: {
      value: cdktf.numberToHclTerraform(struct!.hardwareFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_unit: {
      value: cdktf.stringToHclTerraform(struct!.processingUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_ratio: {
      value: cdktf.numberToHclTerraform(struct!.sampleRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDesc = this._filterDesc;
    }
    if (this._filterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnabled = this._filterEnabled;
    }
    if (this._filterExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpr = this._filterExpr;
    }
    if (this._hardwareFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareFilter = this._hardwareFilter;
    }
    if (this._processingUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingUnit = this._processingUnit;
    }
    if (this._sampleRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRatio = this._sampleRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterDesc = undefined;
      this._filterEnabled = undefined;
      this._filterExpr = undefined;
      this._hardwareFilter = undefined;
      this._processingUnit = undefined;
      this._sampleRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterDesc = value.filterDesc;
      this._filterEnabled = value.filterEnabled;
      this._filterExpr = value.filterExpr;
      this._hardwareFilter = value.hardwareFilter;
      this._processingUnit = value.processingUnit;
      this._sampleRatio = value.sampleRatio;
    }
  }

  // filter_desc - computed: false, optional: true, required: false
  private _filterDesc?: string; 
  public get filterDesc() {
    return this.getStringAttribute('filter_desc');
  }
  public set filterDesc(value: string) {
    this._filterDesc = value;
  }
  public resetFilterDesc() {
    this._filterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDescInput() {
    return this._filterDesc;
  }

  // filter_enabled - computed: false, optional: true, required: false
  private _filterEnabled?: number; 
  public get filterEnabled() {
    return this.getNumberAttribute('filter_enabled');
  }
  public set filterEnabled(value: number) {
    this._filterEnabled = value;
  }
  public resetFilterEnabled() {
    this._filterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnabledInput() {
    return this._filterEnabled;
  }

  // filter_expr - computed: false, optional: true, required: false
  private _filterExpr?: string; 
  public get filterExpr() {
    return this.getStringAttribute('filter_expr');
  }
  public set filterExpr(value: string) {
    this._filterExpr = value;
  }
  public resetFilterExpr() {
    this._filterExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExprInput() {
    return this._filterExpr;
  }

  // hardware_filter - computed: false, optional: true, required: false
  private _hardwareFilter?: number; 
  public get hardwareFilter() {
    return this.getNumberAttribute('hardware_filter');
  }
  public set hardwareFilter(value: number) {
    this._hardwareFilter = value;
  }
  public resetHardwareFilter() {
    this._hardwareFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareFilterInput() {
    return this._hardwareFilter;
  }

  // processing_unit - computed: false, optional: true, required: false
  private _processingUnit?: string; 
  public get processingUnit() {
    return this.getStringAttribute('processing_unit');
  }
  public set processingUnit(value: string) {
    this._processingUnit = value;
  }
  public resetProcessingUnit() {
    this._processingUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingUnitInput() {
    return this._processingUnit;
  }

  // sample_ratio - computed: false, optional: true, required: false
  private _sampleRatio?: number; 
  public get sampleRatio() {
    return this.getNumberAttribute('sample_ratio');
  }
  public set sampleRatio(value: number) {
    this._sampleRatio = value;
  }
  public resetSampleRatio() {
    this._sampleRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRatioInput() {
    return this._sampleRatio;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_count DataThunderDdosDstZonePortZoneServiceOper#filter_count}
  */
  readonly filterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_threshold DataThunderDdosDstZonePortZoneServiceOper#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#peace_pkt_count DataThunderDdosDstZonePortZoneServiceOper#peace_pkt_count}
  */
  readonly peacePktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#state DataThunderDdosDstZonePortZoneServiceOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#timestamp DataThunderDdosDstZonePortZoneServiceOper#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#war_pkt_count DataThunderDdosDstZonePortZoneServiceOper#war_pkt_count}
  */
  readonly warPktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#war_pkt_percentage DataThunderDdosDstZonePortZoneServiceOper#war_pkt_percentage}
  */
  readonly warPktPercentage?: number;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_list DataThunderDdosDstZonePortZoneServiceOper#filter_list}
  */
  readonly filterList?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_count: cdktf.numberToTerraform(struct!.filterCount),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    peace_pkt_count: cdktf.numberToTerraform(struct!.peacePktCount),
    state: cdktf.stringToTerraform(struct!.state),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    war_pkt_count: cdktf.numberToTerraform(struct!.warPktCount),
    war_pkt_percentage: cdktf.numberToTerraform(struct!.warPktPercentage),
    filter_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructToTerraform, true)(struct!.filterList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_count: {
      value: cdktf.numberToHclTerraform(struct!.filterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peace_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.peacePktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    war_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.warPktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    war_pkt_percentage: {
      value: cdktf.numberToHclTerraform(struct!.warPktPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructToHclTerraform, true)(struct!.filterList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCount = this._filterCount;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._peacePktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.peacePktCount = this._peacePktCount;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._warPktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warPktCount = this._warPktCount;
    }
    if (this._warPktPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warPktPercentage = this._warPktPercentage;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterCount = undefined;
      this._filterThreshold = undefined;
      this._peacePktCount = undefined;
      this._state = undefined;
      this._timestamp = undefined;
      this._warPktCount = undefined;
      this._warPktPercentage = undefined;
      this._filterList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterCount = value.filterCount;
      this._filterThreshold = value.filterThreshold;
      this._peacePktCount = value.peacePktCount;
      this._state = value.state;
      this._timestamp = value.timestamp;
      this._warPktCount = value.warPktCount;
      this._warPktPercentage = value.warPktPercentage;
      this._filterList.internalValue = value.filterList;
    }
  }

  // filter_count - computed: false, optional: true, required: false
  private _filterCount?: number; 
  public get filterCount() {
    return this.getNumberAttribute('filter_count');
  }
  public set filterCount(value: number) {
    this._filterCount = value;
  }
  public resetFilterCount() {
    this._filterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCountInput() {
    return this._filterCount;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // peace_pkt_count - computed: false, optional: true, required: false
  private _peacePktCount?: number; 
  public get peacePktCount() {
    return this.getNumberAttribute('peace_pkt_count');
  }
  public set peacePktCount(value: number) {
    this._peacePktCount = value;
  }
  public resetPeacePktCount() {
    this._peacePktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peacePktCountInput() {
    return this._peacePktCount;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // war_pkt_count - computed: false, optional: true, required: false
  private _warPktCount?: number; 
  public get warPktCount() {
    return this.getNumberAttribute('war_pkt_count');
  }
  public set warPktCount(value: number) {
    this._warPktCount = value;
  }
  public resetWarPktCount() {
    this._warPktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warPktCountInput() {
    return this._warPktCount;
  }

  // war_pkt_percentage - computed: false, optional: true, required: false
  private _warPktPercentage?: number; 
  public get warPktPercentage() {
    return this.getNumberAttribute('war_pkt_percentage');
  }
  public set warPktPercentage(value: number) {
    this._warPktPercentage = value;
  }
  public resetWarPktPercentage() {
    this._warPktPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warPktPercentageInput() {
    return this._warPktPercentage;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPatternRecognition {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPatternRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_desc DataThunderDdosDstZonePortZoneServiceOper#filter_desc}
  */
  readonly filterDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_enabled DataThunderDdosDstZonePortZoneServiceOper#filter_enabled}
  */
  readonly filterEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_expr DataThunderDdosDstZonePortZoneServiceOper#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#hardware_filter DataThunderDdosDstZonePortZoneServiceOper#hardware_filter}
  */
  readonly hardwareFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sample_ratio DataThunderDdosDstZonePortZoneServiceOper#sample_ratio}
  */
  readonly sampleRatio?: number;
}

export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_desc: cdktf.stringToTerraform(struct!.filterDesc),
    filter_enabled: cdktf.numberToTerraform(struct!.filterEnabled),
    filter_expr: cdktf.stringToTerraform(struct!.filterExpr),
    hardware_filter: cdktf.numberToTerraform(struct!.hardwareFilter),
    sample_ratio: cdktf.numberToTerraform(struct!.sampleRatio),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_desc: {
      value: cdktf.stringToHclTerraform(struct!.filterDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_enabled: {
      value: cdktf.numberToHclTerraform(struct!.filterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_expr: {
      value: cdktf.stringToHclTerraform(struct!.filterExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_filter: {
      value: cdktf.numberToHclTerraform(struct!.hardwareFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_ratio: {
      value: cdktf.numberToHclTerraform(struct!.sampleRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDesc = this._filterDesc;
    }
    if (this._filterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnabled = this._filterEnabled;
    }
    if (this._filterExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpr = this._filterExpr;
    }
    if (this._hardwareFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareFilter = this._hardwareFilter;
    }
    if (this._sampleRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRatio = this._sampleRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterDesc = undefined;
      this._filterEnabled = undefined;
      this._filterExpr = undefined;
      this._hardwareFilter = undefined;
      this._sampleRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterDesc = value.filterDesc;
      this._filterEnabled = value.filterEnabled;
      this._filterExpr = value.filterExpr;
      this._hardwareFilter = value.hardwareFilter;
      this._sampleRatio = value.sampleRatio;
    }
  }

  // filter_desc - computed: false, optional: true, required: false
  private _filterDesc?: string; 
  public get filterDesc() {
    return this.getStringAttribute('filter_desc');
  }
  public set filterDesc(value: string) {
    this._filterDesc = value;
  }
  public resetFilterDesc() {
    this._filterDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDescInput() {
    return this._filterDesc;
  }

  // filter_enabled - computed: false, optional: true, required: false
  private _filterEnabled?: number; 
  public get filterEnabled() {
    return this.getNumberAttribute('filter_enabled');
  }
  public set filterEnabled(value: number) {
    this._filterEnabled = value;
  }
  public resetFilterEnabled() {
    this._filterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnabledInput() {
    return this._filterEnabled;
  }

  // filter_expr - computed: false, optional: true, required: false
  private _filterExpr?: string; 
  public get filterExpr() {
    return this.getStringAttribute('filter_expr');
  }
  public set filterExpr(value: string) {
    this._filterExpr = value;
  }
  public resetFilterExpr() {
    this._filterExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExprInput() {
    return this._filterExpr;
  }

  // hardware_filter - computed: false, optional: true, required: false
  private _hardwareFilter?: number; 
  public get hardwareFilter() {
    return this.getNumberAttribute('hardware_filter');
  }
  public set hardwareFilter(value: number) {
    this._hardwareFilter = value;
  }
  public resetHardwareFilter() {
    this._hardwareFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareFilterInput() {
    return this._hardwareFilter;
  }

  // sample_ratio - computed: false, optional: true, required: false
  private _sampleRatio?: number; 
  public get sampleRatio() {
    return this.getNumberAttribute('sample_ratio');
  }
  public set sampleRatio(value: number) {
    this._sampleRatio = value;
  }
  public resetSampleRatio() {
    this._sampleRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRatioInput() {
    return this._sampleRatio;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_count DataThunderDdosDstZonePortZoneServiceOper#filter_count}
  */
  readonly filterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_threshold DataThunderDdosDstZonePortZoneServiceOper#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#peace_pkt_count DataThunderDdosDstZonePortZoneServiceOper#peace_pkt_count}
  */
  readonly peacePktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#processing_unit DataThunderDdosDstZonePortZoneServiceOper#processing_unit}
  */
  readonly processingUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#state DataThunderDdosDstZonePortZoneServiceOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#timestamp DataThunderDdosDstZonePortZoneServiceOper#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#war_pkt_count DataThunderDdosDstZonePortZoneServiceOper#war_pkt_count}
  */
  readonly warPktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#war_pkt_percentage DataThunderDdosDstZonePortZoneServiceOper#war_pkt_percentage}
  */
  readonly warPktPercentage?: number;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#filter_list DataThunderDdosDstZonePortZoneServiceOper#filter_list}
  */
  readonly filterList?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_count: cdktf.numberToTerraform(struct!.filterCount),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    peace_pkt_count: cdktf.numberToTerraform(struct!.peacePktCount),
    processing_unit: cdktf.stringToTerraform(struct!.processingUnit),
    state: cdktf.stringToTerraform(struct!.state),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    war_pkt_count: cdktf.numberToTerraform(struct!.warPktCount),
    war_pkt_percentage: cdktf.numberToTerraform(struct!.warPktPercentage),
    filter_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToTerraform, true)(struct!.filterList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_count: {
      value: cdktf.numberToHclTerraform(struct!.filterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peace_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.peacePktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processing_unit: {
      value: cdktf.stringToHclTerraform(struct!.processingUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    war_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.warPktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    war_pkt_percentage: {
      value: cdktf.numberToHclTerraform(struct!.warPktPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToHclTerraform, true)(struct!.filterList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCount = this._filterCount;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._peacePktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.peacePktCount = this._peacePktCount;
    }
    if (this._processingUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingUnit = this._processingUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._warPktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warPktCount = this._warPktCount;
    }
    if (this._warPktPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warPktPercentage = this._warPktPercentage;
    }
    if (this._filterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterCount = undefined;
      this._filterThreshold = undefined;
      this._peacePktCount = undefined;
      this._processingUnit = undefined;
      this._state = undefined;
      this._timestamp = undefined;
      this._warPktCount = undefined;
      this._warPktPercentage = undefined;
      this._filterList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterCount = value.filterCount;
      this._filterThreshold = value.filterThreshold;
      this._peacePktCount = value.peacePktCount;
      this._processingUnit = value.processingUnit;
      this._state = value.state;
      this._timestamp = value.timestamp;
      this._warPktCount = value.warPktCount;
      this._warPktPercentage = value.warPktPercentage;
      this._filterList.internalValue = value.filterList;
    }
  }

  // filter_count - computed: false, optional: true, required: false
  private _filterCount?: number; 
  public get filterCount() {
    return this.getNumberAttribute('filter_count');
  }
  public set filterCount(value: number) {
    this._filterCount = value;
  }
  public resetFilterCount() {
    this._filterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCountInput() {
    return this._filterCount;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // peace_pkt_count - computed: false, optional: true, required: false
  private _peacePktCount?: number; 
  public get peacePktCount() {
    return this.getNumberAttribute('peace_pkt_count');
  }
  public set peacePktCount(value: number) {
    this._peacePktCount = value;
  }
  public resetPeacePktCount() {
    this._peacePktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peacePktCountInput() {
    return this._peacePktCount;
  }

  // processing_unit - computed: false, optional: true, required: false
  private _processingUnit?: string; 
  public get processingUnit() {
    return this.getStringAttribute('processing_unit');
  }
  public set processingUnit(value: string) {
    this._processingUnit = value;
  }
  public resetProcessingUnit() {
    this._processingUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingUnitInput() {
    return this._processingUnit;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // war_pkt_count - computed: false, optional: true, required: false
  private _warPktCount?: number; 
  public get warPktCount() {
    return this.getNumberAttribute('war_pkt_count');
  }
  public set warPktCount(value: number) {
    this._warPktCount = value;
  }
  public resetWarPktCount() {
    this._warPktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warPktCountInput() {
    return this._warPktCount;
  }

  // war_pkt_percentage - computed: false, optional: true, required: false
  private _warPktPercentage?: number; 
  public get warPktPercentage() {
    return this.getNumberAttribute('war_pkt_percentage');
  }
  public set warPktPercentage(value: number) {
    this._warPktPercentage = value;
  }
  public resetWarPktPercentage() {
    this._warPktPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warPktPercentageInput() {
    return this._warPktPercentage;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOper {
  /**
  * all_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#all_filters DataThunderDdosDstZonePortZoneServiceOper#all_filters}
  */
  readonly allFilters?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_filters: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersToTerraform, true)(struct!.allFilters),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_filters: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersToHclTerraform, true)(struct!.allFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allFilters = this._allFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allFilters.internalValue = value.allFilters;
    }
  }

  // all_filters - computed: false, optional: true, required: false
  private _allFilters = new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFiltersList(this, "all_filters", false);
  public get allFilters() {
    return this._allFilters;
  }
  public putAllFilters(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperAllFilters[] | cdktf.IResolvable) {
    this._allFilters.internalValue = value;
  }
  public resetAllFilters() {
    this._allFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allFiltersInput() {
    return this._allFilters.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetails {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOutputReference | DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#level DataThunderDdosDstZonePortZoneServiceOper#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#source_threshold DataThunderDdosDstZonePortZoneServiceOper#source_threshold}
  */
  readonly sourceThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#zone_threshold DataThunderDdosDstZonePortZoneServiceOper#zone_threshold}
  */
  readonly zoneThreshold?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.numberToTerraform(struct!.level),
    source_threshold: cdktf.stringToTerraform(struct!.sourceThreshold),
    zone_threshold: cdktf.stringToTerraform(struct!.zoneThreshold),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_threshold: {
      value: cdktf.stringToHclTerraform(struct!.sourceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold: {
      value: cdktf.stringToHclTerraform(struct!.zoneThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._sourceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceThreshold = this._sourceThreshold;
    }
    if (this._zoneThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThreshold = this._zoneThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._sourceThreshold = undefined;
      this._zoneThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._sourceThreshold = value.sourceThreshold;
      this._zoneThreshold = value.zoneThreshold;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // source_threshold - computed: false, optional: true, required: false
  private _sourceThreshold?: string; 
  public get sourceThreshold() {
    return this.getStringAttribute('source_threshold');
  }
  public set sourceThreshold(value: string) {
    this._sourceThreshold = value;
  }
  public resetSourceThreshold() {
    this._sourceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceThresholdInput() {
    return this._sourceThreshold;
  }

  // zone_threshold - computed: false, optional: true, required: false
  private _zoneThreshold?: string; 
  public get zoneThreshold() {
    return this.getStringAttribute('zone_threshold');
  }
  public set zoneThreshold(value: string) {
    this._zoneThreshold = value;
  }
  public resetZoneThreshold() {
    this._zoneThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdInput() {
    return this._zoneThreshold;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_index DataThunderDdosDstZonePortZoneServiceOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_name DataThunderDdosDstZonePortZoneServiceOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#rate DataThunderDdosDstZonePortZoneServiceOper#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#score DataThunderDdosDstZonePortZoneServiceOper#score}
  */
  readonly score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_maximum DataThunderDdosDstZonePortZoneServiceOper#src_maximum}
  */
  readonly srcMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#zone_adaptive_threshold DataThunderDdosDstZonePortZoneServiceOper#zone_adaptive_threshold}
  */
  readonly zoneAdaptiveThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#zone_average DataThunderDdosDstZonePortZoneServiceOper#zone_average}
  */
  readonly zoneAverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#zone_maximum DataThunderDdosDstZonePortZoneServiceOper#zone_maximum}
  */
  readonly zoneMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#zone_minimum DataThunderDdosDstZonePortZoneServiceOper#zone_minimum}
  */
  readonly zoneMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#zone_non_zero_minimum DataThunderDdosDstZonePortZoneServiceOper#zone_non_zero_minimum}
  */
  readonly zoneNonZeroMinimum?: string;
  /**
  * indicator_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_cfg DataThunderDdosDstZonePortZoneServiceOper#indicator_cfg}
  */
  readonly indicatorCfg?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    score: cdktf.stringToTerraform(struct!.score),
    src_maximum: cdktf.stringToTerraform(struct!.srcMaximum),
    zone_adaptive_threshold: cdktf.stringToTerraform(struct!.zoneAdaptiveThreshold),
    zone_average: cdktf.stringToTerraform(struct!.zoneAverage),
    zone_maximum: cdktf.stringToTerraform(struct!.zoneMaximum),
    zone_minimum: cdktf.stringToTerraform(struct!.zoneMinimum),
    zone_non_zero_minimum: cdktf.stringToTerraform(struct!.zoneNonZeroMinimum),
    indicator_cfg: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgToTerraform, true)(struct!.indicatorCfg),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_maximum: {
      value: cdktf.stringToHclTerraform(struct!.srcMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_adaptive_threshold: {
      value: cdktf.stringToHclTerraform(struct!.zoneAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_average: {
      value: cdktf.stringToHclTerraform(struct!.zoneAverage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_maximum: {
      value: cdktf.stringToHclTerraform(struct!.zoneMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_minimum: {
      value: cdktf.stringToHclTerraform(struct!.zoneMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_non_zero_minimum: {
      value: cdktf.stringToHclTerraform(struct!.zoneNonZeroMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_cfg: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgToHclTerraform, true)(struct!.indicatorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._srcMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMaximum = this._srcMaximum;
    }
    if (this._zoneAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAdaptiveThreshold = this._zoneAdaptiveThreshold;
    }
    if (this._zoneAverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAverage = this._zoneAverage;
    }
    if (this._zoneMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMaximum = this._zoneMaximum;
    }
    if (this._zoneMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMinimum = this._zoneMinimum;
    }
    if (this._zoneNonZeroMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneNonZeroMinimum = this._zoneNonZeroMinimum;
    }
    if (this._indicatorCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorCfg = this._indicatorCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._rate = undefined;
      this._score = undefined;
      this._srcMaximum = undefined;
      this._zoneAdaptiveThreshold = undefined;
      this._zoneAverage = undefined;
      this._zoneMaximum = undefined;
      this._zoneMinimum = undefined;
      this._zoneNonZeroMinimum = undefined;
      this._indicatorCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._rate = value.rate;
      this._score = value.score;
      this._srcMaximum = value.srcMaximum;
      this._zoneAdaptiveThreshold = value.zoneAdaptiveThreshold;
      this._zoneAverage = value.zoneAverage;
      this._zoneMaximum = value.zoneMaximum;
      this._zoneMinimum = value.zoneMinimum;
      this._zoneNonZeroMinimum = value.zoneNonZeroMinimum;
      this._indicatorCfg.internalValue = value.indicatorCfg;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // score - computed: false, optional: true, required: false
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // src_maximum - computed: false, optional: true, required: false
  private _srcMaximum?: string; 
  public get srcMaximum() {
    return this.getStringAttribute('src_maximum');
  }
  public set srcMaximum(value: string) {
    this._srcMaximum = value;
  }
  public resetSrcMaximum() {
    this._srcMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMaximumInput() {
    return this._srcMaximum;
  }

  // zone_adaptive_threshold - computed: false, optional: true, required: false
  private _zoneAdaptiveThreshold?: string; 
  public get zoneAdaptiveThreshold() {
    return this.getStringAttribute('zone_adaptive_threshold');
  }
  public set zoneAdaptiveThreshold(value: string) {
    this._zoneAdaptiveThreshold = value;
  }
  public resetZoneAdaptiveThreshold() {
    this._zoneAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAdaptiveThresholdInput() {
    return this._zoneAdaptiveThreshold;
  }

  // zone_average - computed: false, optional: true, required: false
  private _zoneAverage?: string; 
  public get zoneAverage() {
    return this.getStringAttribute('zone_average');
  }
  public set zoneAverage(value: string) {
    this._zoneAverage = value;
  }
  public resetZoneAverage() {
    this._zoneAverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAverageInput() {
    return this._zoneAverage;
  }

  // zone_maximum - computed: false, optional: true, required: false
  private _zoneMaximum?: string; 
  public get zoneMaximum() {
    return this.getStringAttribute('zone_maximum');
  }
  public set zoneMaximum(value: string) {
    this._zoneMaximum = value;
  }
  public resetZoneMaximum() {
    this._zoneMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMaximumInput() {
    return this._zoneMaximum;
  }

  // zone_minimum - computed: false, optional: true, required: false
  private _zoneMinimum?: string; 
  public get zoneMinimum() {
    return this.getStringAttribute('zone_minimum');
  }
  public set zoneMinimum(value: string) {
    this._zoneMinimum = value;
  }
  public resetZoneMinimum() {
    this._zoneMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMinimumInput() {
    return this._zoneMinimum;
  }

  // zone_non_zero_minimum - computed: false, optional: true, required: false
  private _zoneNonZeroMinimum?: string; 
  public get zoneNonZeroMinimum() {
    return this.getStringAttribute('zone_non_zero_minimum');
  }
  public set zoneNonZeroMinimum(value: string) {
    this._zoneNonZeroMinimum = value;
  }
  public resetZoneNonZeroMinimum() {
    this._zoneNonZeroMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNonZeroMinimumInput() {
    return this._zoneNonZeroMinimum;
  }

  // indicator_cfg - computed: false, optional: true, required: false
  private _indicatorCfg = new DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfgList(this, "indicator_cfg", false);
  public get indicatorCfg() {
    return this._indicatorCfg;
  }
  public putIndicatorCfg(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsIndicatorCfg[] | cdktf.IResolvable) {
    this._indicatorCfg.internalValue = value;
  }
  public resetIndicatorCfg() {
    this._indicatorCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorCfgInput() {
    return this._indicatorCfg.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_index DataThunderDdosDstZonePortZoneServiceOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_name DataThunderDdosDstZonePortZoneServiceOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#rate DataThunderDdosDstZonePortZoneServiceOper#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#score DataThunderDdosDstZonePortZoneServiceOper#score}
  */
  readonly score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_average DataThunderDdosDstZonePortZoneServiceOper#src_average}
  */
  readonly srcAverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_maximum DataThunderDdosDstZonePortZoneServiceOper#src_maximum}
  */
  readonly srcMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_minimum DataThunderDdosDstZonePortZoneServiceOper#src_minimum}
  */
  readonly srcMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_non_zero_minimum DataThunderDdosDstZonePortZoneServiceOper#src_non_zero_minimum}
  */
  readonly srcNonZeroMinimum?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    score: cdktf.stringToTerraform(struct!.score),
    src_average: cdktf.stringToTerraform(struct!.srcAverage),
    src_maximum: cdktf.stringToTerraform(struct!.srcMaximum),
    src_minimum: cdktf.stringToTerraform(struct!.srcMinimum),
    src_non_zero_minimum: cdktf.stringToTerraform(struct!.srcNonZeroMinimum),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_average: {
      value: cdktf.stringToHclTerraform(struct!.srcAverage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_maximum: {
      value: cdktf.stringToHclTerraform(struct!.srcMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_minimum: {
      value: cdktf.stringToHclTerraform(struct!.srcMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_non_zero_minimum: {
      value: cdktf.stringToHclTerraform(struct!.srcNonZeroMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._srcAverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAverage = this._srcAverage;
    }
    if (this._srcMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMaximum = this._srcMaximum;
    }
    if (this._srcMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMinimum = this._srcMinimum;
    }
    if (this._srcNonZeroMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNonZeroMinimum = this._srcNonZeroMinimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._rate = undefined;
      this._score = undefined;
      this._srcAverage = undefined;
      this._srcMaximum = undefined;
      this._srcMinimum = undefined;
      this._srcNonZeroMinimum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._rate = value.rate;
      this._score = value.score;
      this._srcAverage = value.srcAverage;
      this._srcMaximum = value.srcMaximum;
      this._srcMinimum = value.srcMinimum;
      this._srcNonZeroMinimum = value.srcNonZeroMinimum;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // score - computed: false, optional: true, required: false
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // src_average - computed: false, optional: true, required: false
  private _srcAverage?: string; 
  public get srcAverage() {
    return this.getStringAttribute('src_average');
  }
  public set srcAverage(value: string) {
    this._srcAverage = value;
  }
  public resetSrcAverage() {
    this._srcAverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAverageInput() {
    return this._srcAverage;
  }

  // src_maximum - computed: false, optional: true, required: false
  private _srcMaximum?: string; 
  public get srcMaximum() {
    return this.getStringAttribute('src_maximum');
  }
  public set srcMaximum(value: string) {
    this._srcMaximum = value;
  }
  public resetSrcMaximum() {
    this._srcMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMaximumInput() {
    return this._srcMaximum;
  }

  // src_minimum - computed: false, optional: true, required: false
  private _srcMinimum?: string; 
  public get srcMinimum() {
    return this.getStringAttribute('src_minimum');
  }
  public set srcMinimum(value: string) {
    this._srcMinimum = value;
  }
  public resetSrcMinimum() {
    this._srcMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMinimumInput() {
    return this._srcMinimum;
  }

  // src_non_zero_minimum - computed: false, optional: true, required: false
  private _srcNonZeroMinimum?: string; 
  public get srcNonZeroMinimum() {
    return this.getStringAttribute('src_non_zero_minimum');
  }
  public set srcNonZeroMinimum(value: string) {
    this._srcNonZeroMinimum = value;
  }
  public resetSrcNonZeroMinimum() {
    this._srcNonZeroMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNonZeroMinimumInput() {
    return this._srcNonZeroMinimum;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#active_time DataThunderDdosDstZonePortZoneServiceOper#active_time}
  */
  readonly activeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_level DataThunderDdosDstZonePortZoneServiceOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#detection_data_source DataThunderDdosDstZonePortZoneServiceOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#escalation_timestamp DataThunderDdosDstZonePortZoneServiceOper#escalation_timestamp}
  */
  readonly escalationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#initial_learning DataThunderDdosDstZonePortZoneServiceOper#initial_learning}
  */
  readonly initialLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_address_str DataThunderDdosDstZonePortZoneServiceOper#src_address_str}
  */
  readonly srcAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_level DataThunderDdosDstZonePortZoneServiceOper#src_level}
  */
  readonly srcLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#total_score DataThunderDdosDstZonePortZoneServiceOper#total_score}
  */
  readonly totalScore?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time: cdktf.numberToTerraform(struct!.activeTime),
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    escalation_timestamp: cdktf.stringToTerraform(struct!.escalationTimestamp),
    initial_learning: cdktf.stringToTerraform(struct!.initialLearning),
    src_address_str: cdktf.stringToTerraform(struct!.srcAddressStr),
    src_level: cdktf.stringToTerraform(struct!.srcLevel),
    total_score: cdktf.stringToTerraform(struct!.totalScore),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_time: {
      value: cdktf.numberToHclTerraform(struct!.activeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_level: {
      value: cdktf.stringToHclTerraform(struct!.currentLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_data_source: {
      value: cdktf.stringToHclTerraform(struct!.detectionDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalation_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.escalationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_learning: {
      value: cdktf.stringToHclTerraform(struct!.initialLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_address_str: {
      value: cdktf.stringToHclTerraform(struct!.srcAddressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_level: {
      value: cdktf.stringToHclTerraform(struct!.srcLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_score: {
      value: cdktf.stringToHclTerraform(struct!.totalScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTime = this._activeTime;
    }
    if (this._currentLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentLevel = this._currentLevel;
    }
    if (this._detectionDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionDataSource = this._detectionDataSource;
    }
    if (this._escalationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationTimestamp = this._escalationTimestamp;
    }
    if (this._initialLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLearning = this._initialLearning;
    }
    if (this._srcAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddressStr = this._srcAddressStr;
    }
    if (this._srcLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLevel = this._srcLevel;
    }
    if (this._totalScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalScore = this._totalScore;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTime = undefined;
      this._currentLevel = undefined;
      this._detectionDataSource = undefined;
      this._escalationTimestamp = undefined;
      this._initialLearning = undefined;
      this._srcAddressStr = undefined;
      this._srcLevel = undefined;
      this._totalScore = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTime = value.activeTime;
      this._currentLevel = value.currentLevel;
      this._detectionDataSource = value.detectionDataSource;
      this._escalationTimestamp = value.escalationTimestamp;
      this._initialLearning = value.initialLearning;
      this._srcAddressStr = value.srcAddressStr;
      this._srcLevel = value.srcLevel;
      this._totalScore = value.totalScore;
      this._indicators.internalValue = value.indicators;
    }
  }

  // active_time - computed: false, optional: true, required: false
  private _activeTime?: number; 
  public get activeTime() {
    return this.getNumberAttribute('active_time');
  }
  public set activeTime(value: number) {
    this._activeTime = value;
  }
  public resetActiveTime() {
    this._activeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeInput() {
    return this._activeTime;
  }

  // current_level - computed: false, optional: true, required: false
  private _currentLevel?: string; 
  public get currentLevel() {
    return this.getStringAttribute('current_level');
  }
  public set currentLevel(value: string) {
    this._currentLevel = value;
  }
  public resetCurrentLevel() {
    this._currentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentLevelInput() {
    return this._currentLevel;
  }

  // detection_data_source - computed: false, optional: true, required: false
  private _detectionDataSource?: string; 
  public get detectionDataSource() {
    return this.getStringAttribute('detection_data_source');
  }
  public set detectionDataSource(value: string) {
    this._detectionDataSource = value;
  }
  public resetDetectionDataSource() {
    this._detectionDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionDataSourceInput() {
    return this._detectionDataSource;
  }

  // escalation_timestamp - computed: false, optional: true, required: false
  private _escalationTimestamp?: string; 
  public get escalationTimestamp() {
    return this.getStringAttribute('escalation_timestamp');
  }
  public set escalationTimestamp(value: string) {
    this._escalationTimestamp = value;
  }
  public resetEscalationTimestamp() {
    this._escalationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationTimestampInput() {
    return this._escalationTimestamp;
  }

  // initial_learning - computed: false, optional: true, required: false
  private _initialLearning?: string; 
  public get initialLearning() {
    return this.getStringAttribute('initial_learning');
  }
  public set initialLearning(value: string) {
    this._initialLearning = value;
  }
  public resetInitialLearning() {
    this._initialLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLearningInput() {
    return this._initialLearning;
  }

  // src_address_str - computed: false, optional: true, required: false
  private _srcAddressStr?: string; 
  public get srcAddressStr() {
    return this.getStringAttribute('src_address_str');
  }
  public set srcAddressStr(value: string) {
    this._srcAddressStr = value;
  }
  public resetSrcAddressStr() {
    this._srcAddressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressStrInput() {
    return this._srcAddressStr;
  }

  // src_level - computed: false, optional: true, required: false
  private _srcLevel?: string; 
  public get srcLevel() {
    return this.getStringAttribute('src_level');
  }
  public set srcLevel(value: string) {
    this._srcLevel = value;
  }
  public resetSrcLevel() {
    this._srcLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLevelInput() {
    return this._srcLevel;
  }

  // total_score - computed: false, optional: true, required: false
  private _totalScore?: string; 
  public get totalScore() {
    return this.getStringAttribute('total_score');
  }
  public set totalScore(value: string) {
    this._totalScore = value;
  }
  public resetTotalScore() {
    this._totalScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalScoreInput() {
    return this._totalScore;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPortIndOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#active_time DataThunderDdosDstZonePortZoneServiceOper#active_time}
  */
  readonly activeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#current_level DataThunderDdosDstZonePortZoneServiceOper#current_level}
  */
  readonly currentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#details DataThunderDdosDstZonePortZoneServiceOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#detection_data_source DataThunderDdosDstZonePortZoneServiceOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#escalation_timestamp DataThunderDdosDstZonePortZoneServiceOper#escalation_timestamp}
  */
  readonly escalationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#initial_learning DataThunderDdosDstZonePortZoneServiceOper#initial_learning}
  */
  readonly initialLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#ipv6 DataThunderDdosDstZonePortZoneServiceOper#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sources DataThunderDdosDstZonePortZoneServiceOper#sources}
  */
  readonly sources?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sources_all_entries DataThunderDdosDstZonePortZoneServiceOper#sources_all_entries}
  */
  readonly sourcesAllEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#subnet_ip_addr DataThunderDdosDstZonePortZoneServiceOper#subnet_ip_addr}
  */
  readonly subnetIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#subnet_ipv6_addr DataThunderDdosDstZonePortZoneServiceOper#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#total_score DataThunderDdosDstZonePortZoneServiceOper#total_score}
  */
  readonly totalScore?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators[] | cdktf.IResolvable;
  /**
  * src_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#src_entry_list DataThunderDdosDstZonePortZoneServiceOper#src_entry_list}
  */
  readonly srcEntryList?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperPortIndOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time: cdktf.numberToTerraform(struct!.activeTime),
    current_level: cdktf.stringToTerraform(struct!.currentLevel),
    details: cdktf.numberToTerraform(struct!.details),
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    escalation_timestamp: cdktf.stringToTerraform(struct!.escalationTimestamp),
    initial_learning: cdktf.stringToTerraform(struct!.initialLearning),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    sources: cdktf.numberToTerraform(struct!.sources),
    sources_all_entries: cdktf.numberToTerraform(struct!.sourcesAllEntries),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    total_score: cdktf.stringToTerraform(struct!.totalScore),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsToTerraform, true)(struct!.indicators),
    src_entry_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructToTerraform, true)(struct!.srcEntryList),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPortIndOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperPortIndOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_time: {
      value: cdktf.numberToHclTerraform(struct!.activeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_level: {
      value: cdktf.stringToHclTerraform(struct!.currentLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cdktf.numberToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_data_source: {
      value: cdktf.stringToHclTerraform(struct!.detectionDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escalation_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.escalationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_learning: {
      value: cdktf.stringToHclTerraform(struct!.initialLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.numberToHclTerraform(struct!.sources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources_all_entries: {
      value: cdktf.numberToHclTerraform(struct!.sourcesAllEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_score: {
      value: cdktf.stringToHclTerraform(struct!.totalScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsList",
    },
    src_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructToHclTerraform, true)(struct!.srcEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPortIndOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTime = this._activeTime;
    }
    if (this._currentLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentLevel = this._currentLevel;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._detectionDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionDataSource = this._detectionDataSource;
    }
    if (this._escalationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationTimestamp = this._escalationTimestamp;
    }
    if (this._initialLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLearning = this._initialLearning;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._sourcesAllEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcesAllEntries = this._sourcesAllEntries;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._totalScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalScore = this._totalScore;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    if (this._srcEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryList = this._srcEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTime = undefined;
      this._currentLevel = undefined;
      this._details = undefined;
      this._detectionDataSource = undefined;
      this._escalationTimestamp = undefined;
      this._initialLearning = undefined;
      this._ipv6 = undefined;
      this._sources = undefined;
      this._sourcesAllEntries = undefined;
      this._subnetIpAddr = undefined;
      this._subnetIpv6Addr = undefined;
      this._totalScore = undefined;
      this._indicators.internalValue = undefined;
      this._srcEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTime = value.activeTime;
      this._currentLevel = value.currentLevel;
      this._details = value.details;
      this._detectionDataSource = value.detectionDataSource;
      this._escalationTimestamp = value.escalationTimestamp;
      this._initialLearning = value.initialLearning;
      this._ipv6 = value.ipv6;
      this._sources = value.sources;
      this._sourcesAllEntries = value.sourcesAllEntries;
      this._subnetIpAddr = value.subnetIpAddr;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._totalScore = value.totalScore;
      this._indicators.internalValue = value.indicators;
      this._srcEntryList.internalValue = value.srcEntryList;
    }
  }

  // active_time - computed: false, optional: true, required: false
  private _activeTime?: number; 
  public get activeTime() {
    return this.getNumberAttribute('active_time');
  }
  public set activeTime(value: number) {
    this._activeTime = value;
  }
  public resetActiveTime() {
    this._activeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeInput() {
    return this._activeTime;
  }

  // current_level - computed: false, optional: true, required: false
  private _currentLevel?: string; 
  public get currentLevel() {
    return this.getStringAttribute('current_level');
  }
  public set currentLevel(value: string) {
    this._currentLevel = value;
  }
  public resetCurrentLevel() {
    this._currentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentLevelInput() {
    return this._currentLevel;
  }

  // details - computed: false, optional: true, required: false
  private _details?: number; 
  public get details() {
    return this.getNumberAttribute('details');
  }
  public set details(value: number) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // detection_data_source - computed: false, optional: true, required: false
  private _detectionDataSource?: string; 
  public get detectionDataSource() {
    return this.getStringAttribute('detection_data_source');
  }
  public set detectionDataSource(value: string) {
    this._detectionDataSource = value;
  }
  public resetDetectionDataSource() {
    this._detectionDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionDataSourceInput() {
    return this._detectionDataSource;
  }

  // escalation_timestamp - computed: false, optional: true, required: false
  private _escalationTimestamp?: string; 
  public get escalationTimestamp() {
    return this.getStringAttribute('escalation_timestamp');
  }
  public set escalationTimestamp(value: string) {
    this._escalationTimestamp = value;
  }
  public resetEscalationTimestamp() {
    this._escalationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationTimestampInput() {
    return this._escalationTimestamp;
  }

  // initial_learning - computed: false, optional: true, required: false
  private _initialLearning?: string; 
  public get initialLearning() {
    return this.getStringAttribute('initial_learning');
  }
  public set initialLearning(value: string) {
    this._initialLearning = value;
  }
  public resetInitialLearning() {
    this._initialLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLearningInput() {
    return this._initialLearning;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: number; 
  public get sources() {
    return this.getNumberAttribute('sources');
  }
  public set sources(value: number) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // sources_all_entries - computed: false, optional: true, required: false
  private _sourcesAllEntries?: number; 
  public get sourcesAllEntries() {
    return this.getNumberAttribute('sources_all_entries');
  }
  public set sourcesAllEntries(value: number) {
    this._sourcesAllEntries = value;
  }
  public resetSourcesAllEntries() {
    this._sourcesAllEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesAllEntriesInput() {
    return this._sourcesAllEntries;
  }

  // subnet_ip_addr - computed: false, optional: true, required: false
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  public resetSubnetIpAddr() {
    this._subnetIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
  }

  // subnet_ipv6_addr - computed: false, optional: true, required: false
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  public resetSubnetIpv6Addr() {
    this._subnetIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
  }

  // total_score - computed: false, optional: true, required: false
  private _totalScore?: string; 
  public get totalScore() {
    return this.getStringAttribute('total_score');
  }
  public set totalScore(value: string) {
    this._totalScore = value;
  }
  public resetTotalScore() {
    this._totalScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalScoreInput() {
    return this._totalScore;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }

  // src_entry_list - computed: false, optional: true, required: false
  private _srcEntryList = new DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStructList(this, "src_entry_list", false);
  public get srcEntryList() {
    return this._srcEntryList;
  }
  public putSrcEntryList(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOperSrcEntryListStruct[] | cdktf.IResolvable) {
    this._srcEntryList.internalValue = value;
  }
  public resetSrcEntryList() {
    this._srcEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryListInput() {
    return this._srcEntryList.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperPortInd {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperPortIndOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperPortIndToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOutputReference | DataThunderDdosDstZonePortZoneServiceOperPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperPortIndOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperPortIndToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperPortIndOutputReference | DataThunderDdosDstZonePortZoneServiceOperPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperPortIndOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPortIndOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperPortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperPortIndOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperPortIndOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#average DataThunderDdosDstZonePortZoneServiceOper#average}
  */
  readonly average?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_index DataThunderDdosDstZonePortZoneServiceOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_name DataThunderDdosDstZonePortZoneServiceOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#maximum DataThunderDdosDstZonePortZoneServiceOper#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#minimum DataThunderDdosDstZonePortZoneServiceOper#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#num_sample DataThunderDdosDstZonePortZoneServiceOper#num_sample}
  */
  readonly numSample?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#standard_deviation DataThunderDdosDstZonePortZoneServiceOper#standard_deviation}
  */
  readonly standardDeviation?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.stringToTerraform(struct!.average),
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    num_sample: cdktf.numberToTerraform(struct!.numSample),
    standard_deviation: cdktf.stringToTerraform(struct!.standardDeviation),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.stringToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_sample: {
      value: cdktf.numberToHclTerraform(struct!.numSample),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_deviation: {
      value: cdktf.stringToHclTerraform(struct!.standardDeviation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._numSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSample = this._numSample;
    }
    if (this._standardDeviation !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardDeviation = this._standardDeviation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._numSample = undefined;
      this._standardDeviation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._numSample = value.numSample;
      this._standardDeviation = value.standardDeviation;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: string; 
  public get average() {
    return this.getStringAttribute('average');
  }
  public set average(value: string) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // num_sample - computed: false, optional: true, required: false
  private _numSample?: number; 
  public get numSample() {
    return this.getNumberAttribute('num_sample');
  }
  public set numSample(value: number) {
    this._numSample = value;
  }
  public resetNumSample() {
    this._numSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSampleInput() {
    return this._numSample;
  }

  // standard_deviation - computed: false, optional: true, required: false
  private _standardDeviation?: string; 
  public get standardDeviation() {
    return this.getStringAttribute('standard_deviation');
  }
  public set standardDeviation(value: string) {
    this._standardDeviation = value;
  }
  public resetStandardDeviation() {
    this._standardDeviation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardDeviationInput() {
    return this._standardDeviation;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#learning_brief DataThunderDdosDstZonePortZoneServiceOper#learning_brief}
  */
  readonly learningBrief?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#learning_details DataThunderDdosDstZonePortZoneServiceOper#learning_details}
  */
  readonly learningDetails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#recommended_template DataThunderDdosDstZonePortZoneServiceOper#recommended_template}
  */
  readonly recommendedTemplate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#template_debug_table DataThunderDdosDstZonePortZoneServiceOper#template_debug_table}
  */
  readonly templateDebugTable?: number;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    learning_brief: cdktf.numberToTerraform(struct!.learningBrief),
    learning_details: cdktf.numberToTerraform(struct!.learningDetails),
    recommended_template: cdktf.numberToTerraform(struct!.recommendedTemplate),
    template_debug_table: cdktf.numberToTerraform(struct!.templateDebugTable),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    learning_brief: {
      value: cdktf.numberToHclTerraform(struct!.learningBrief),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learning_details: {
      value: cdktf.numberToHclTerraform(struct!.learningDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recommended_template: {
      value: cdktf.numberToHclTerraform(struct!.recommendedTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_debug_table: {
      value: cdktf.numberToHclTerraform(struct!.templateDebugTable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._learningBrief !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningBrief = this._learningBrief;
    }
    if (this._learningDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningDetails = this._learningDetails;
    }
    if (this._recommendedTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendedTemplate = this._recommendedTemplate;
    }
    if (this._templateDebugTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDebugTable = this._templateDebugTable;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._learningBrief = undefined;
      this._learningDetails = undefined;
      this._recommendedTemplate = undefined;
      this._templateDebugTable = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._learningBrief = value.learningBrief;
      this._learningDetails = value.learningDetails;
      this._recommendedTemplate = value.recommendedTemplate;
      this._templateDebugTable = value.templateDebugTable;
      this._indicators.internalValue = value.indicators;
    }
  }

  // learning_brief - computed: false, optional: true, required: false
  private _learningBrief?: number; 
  public get learningBrief() {
    return this.getNumberAttribute('learning_brief');
  }
  public set learningBrief(value: number) {
    this._learningBrief = value;
  }
  public resetLearningBrief() {
    this._learningBrief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningBriefInput() {
    return this._learningBrief;
  }

  // learning_details - computed: false, optional: true, required: false
  private _learningDetails?: number; 
  public get learningDetails() {
    return this.getNumberAttribute('learning_details');
  }
  public set learningDetails(value: number) {
    this._learningDetails = value;
  }
  public resetLearningDetails() {
    this._learningDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDetailsInput() {
    return this._learningDetails;
  }

  // recommended_template - computed: false, optional: true, required: false
  private _recommendedTemplate?: number; 
  public get recommendedTemplate() {
    return this.getNumberAttribute('recommended_template');
  }
  public set recommendedTemplate(value: number) {
    this._recommendedTemplate = value;
  }
  public resetRecommendedTemplate() {
    this._recommendedTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedTemplateInput() {
    return this._recommendedTemplate;
  }

  // template_debug_table - computed: false, optional: true, required: false
  private _templateDebugTable?: number; 
  public get templateDebugTable() {
    return this.getNumberAttribute('template_debug_table');
  }
  public set templateDebugTable(value: number) {
    this._templateDebugTable = value;
  }
  public resetTemplateDebugTable() {
    this._templateDebugTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDebugTableInput() {
    return this._templateDebugTable;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperProgressionTracking {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOutputReference | DataThunderDdosDstZonePortZoneServiceOperProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOutputReference | DataThunderDdosDstZonePortZoneServiceOperProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperProgressionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_index DataThunderDdosDstZonePortZoneServiceOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_name DataThunderDdosDstZonePortZoneServiceOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#max_peak DataThunderDdosDstZonePortZoneServiceOper#max_peak}
  */
  readonly maxPeak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#psd_wdw_cnt DataThunderDdosDstZonePortZoneServiceOper#psd_wdw_cnt}
  */
  readonly psdWdwCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#rate DataThunderDdosDstZonePortZoneServiceOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    max_peak: cdktf.stringToTerraform(struct!.maxPeak),
    psd_wdw_cnt: cdktf.numberToTerraform(struct!.psdWdwCnt),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_peak: {
      value: cdktf.stringToHclTerraform(struct!.maxPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psd_wdw_cnt: {
      value: cdktf.numberToHclTerraform(struct!.psdWdwCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._maxPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPeak = this._maxPeak;
    }
    if (this._psdWdwCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.psdWdwCnt = this._psdWdwCnt;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._maxPeak = undefined;
      this._psdWdwCnt = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._maxPeak = value.maxPeak;
      this._psdWdwCnt = value.psdWdwCnt;
      this._rate = value.rate;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // max_peak - computed: false, optional: true, required: false
  private _maxPeak?: string; 
  public get maxPeak() {
    return this.getStringAttribute('max_peak');
  }
  public set maxPeak(value: string) {
    this._maxPeak = value;
  }
  public resetMaxPeak() {
    this._maxPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPeakInput() {
    return this._maxPeak;
  }

  // psd_wdw_cnt - computed: false, optional: true, required: false
  private _psdWdwCnt?: number; 
  public get psdWdwCnt() {
    return this.getNumberAttribute('psd_wdw_cnt');
  }
  public set psdWdwCnt(value: number) {
    this._psdWdwCnt = value;
  }
  public resetPsdWdwCnt() {
    this._psdWdwCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psdWdwCntInput() {
    return this._psdWdwCnt;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#address_str DataThunderDdosDstZonePortZoneServiceOper#address_str}
  */
  readonly addressStr?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_str: cdktf.stringToTerraform(struct!.addressStr),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_str: {
      value: cdktf.stringToHclTerraform(struct!.addressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressStr = this._addressStr;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressStr = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressStr = value.addressStr;
      this._indicators.internalValue = value.indicators;
    }
  }

  // address_str - computed: false, optional: true, required: false
  private _addressStr?: string; 
  public get addressStr() {
    return this.getStringAttribute('address_str');
  }
  public set addressStr(value: string) {
    this._addressStr = value;
  }
  public resetAddressStr() {
    this._addressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressStrInput() {
    return this._addressStr;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#address DataThunderDdosDstZonePortZoneServiceOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#rate DataThunderDdosDstZonePortZoneServiceOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._rate = value.rate;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_index DataThunderDdosDstZonePortZoneServiceOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_name DataThunderDdosDstZonePortZoneServiceOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#destinations DataThunderDdosDstZonePortZoneServiceOper#destinations}
  */
  readonly destinations?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    destinations: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._destinations.internalValue = value.destinations;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#details DataThunderDdosDstZonePortZoneServiceOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#finished DataThunderDdosDstZonePortZoneServiceOper#finished}
  */
  readonly finished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#next_indicator DataThunderDdosDstZonePortZoneServiceOper#next_indicator}
  */
  readonly nextIndicator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#top_k_key DataThunderDdosDstZonePortZoneServiceOper#top_k_key}
  */
  readonly topKKey?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#entry_list DataThunderDdosDstZonePortZoneServiceOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.numberToTerraform(struct!.details),
    finished: cdktf.numberToTerraform(struct!.finished),
    next_indicator: cdktf.numberToTerraform(struct!.nextIndicator),
    top_k_key: cdktf.stringToTerraform(struct!.topKKey),
    entry_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructToTerraform, true)(struct!.entryList),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.numberToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished: {
      value: cdktf.numberToHclTerraform(struct!.finished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_indicator: {
      value: cdktf.numberToHclTerraform(struct!.nextIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k_key: {
      value: cdktf.stringToHclTerraform(struct!.topKKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructList",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._finished !== undefined) {
      hasAnyValues = true;
      internalValueResult.finished = this._finished;
    }
    if (this._nextIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextIndicator = this._nextIndicator;
    }
    if (this._topKKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKKey = this._topKKey;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._details = undefined;
      this._finished = undefined;
      this._nextIndicator = undefined;
      this._topKKey = undefined;
      this._entryList.internalValue = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._details = value.details;
      this._finished = value.finished;
      this._nextIndicator = value.nextIndicator;
      this._topKKey = value.topKKey;
      this._entryList.internalValue = value.entryList;
      this._indicators.internalValue = value.indicators;
    }
  }

  // details - computed: false, optional: true, required: false
  private _details?: number; 
  public get details() {
    return this.getNumberAttribute('details');
  }
  public set details(value: number) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // finished - computed: false, optional: true, required: false
  private _finished?: number; 
  public get finished() {
    return this.getNumberAttribute('finished');
  }
  public set finished(value: number) {
    this._finished = value;
  }
  public resetFinished() {
    this._finished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedInput() {
    return this._finished;
  }

  // next_indicator - computed: false, optional: true, required: false
  private _nextIndicator?: number; 
  public get nextIndicator() {
    return this.getNumberAttribute('next_indicator');
  }
  public set nextIndicator(value: number) {
    this._nextIndicator = value;
  }
  public resetNextIndicator() {
    this._nextIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIndicatorInput() {
    return this._nextIndicator;
  }

  // top_k_key - computed: false, optional: true, required: false
  private _topKKey?: string; 
  public get topKKey() {
    return this.getStringAttribute('top_k_key');
  }
  public set topKKey(value: string) {
    this._topKKey = value;
  }
  public resetTopKKey() {
    this._topKKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKKeyInput() {
    return this._topKKey;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkDestinations {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_index DataThunderDdosDstZonePortZoneServiceOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_name DataThunderDdosDstZonePortZoneServiceOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#max_peak DataThunderDdosDstZonePortZoneServiceOper#max_peak}
  */
  readonly maxPeak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#psd_wdw_cnt DataThunderDdosDstZonePortZoneServiceOper#psd_wdw_cnt}
  */
  readonly psdWdwCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#rate DataThunderDdosDstZonePortZoneServiceOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    max_peak: cdktf.stringToTerraform(struct!.maxPeak),
    psd_wdw_cnt: cdktf.numberToTerraform(struct!.psdWdwCnt),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_peak: {
      value: cdktf.stringToHclTerraform(struct!.maxPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psd_wdw_cnt: {
      value: cdktf.numberToHclTerraform(struct!.psdWdwCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._maxPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPeak = this._maxPeak;
    }
    if (this._psdWdwCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.psdWdwCnt = this._psdWdwCnt;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._maxPeak = undefined;
      this._psdWdwCnt = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._maxPeak = value.maxPeak;
      this._psdWdwCnt = value.psdWdwCnt;
      this._rate = value.rate;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // max_peak - computed: false, optional: true, required: false
  private _maxPeak?: string; 
  public get maxPeak() {
    return this.getStringAttribute('max_peak');
  }
  public set maxPeak(value: string) {
    this._maxPeak = value;
  }
  public resetMaxPeak() {
    this._maxPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPeakInput() {
    return this._maxPeak;
  }

  // psd_wdw_cnt - computed: false, optional: true, required: false
  private _psdWdwCnt?: number; 
  public get psdWdwCnt() {
    return this.getNumberAttribute('psd_wdw_cnt');
  }
  public set psdWdwCnt(value: number) {
    this._psdWdwCnt = value;
  }
  public resetPsdWdwCnt() {
    this._psdWdwCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psdWdwCntInput() {
    return this._psdWdwCnt;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#address_str DataThunderDdosDstZonePortZoneServiceOper#address_str}
  */
  readonly addressStr?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_str: cdktf.stringToTerraform(struct!.addressStr),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_str: {
      value: cdktf.stringToHclTerraform(struct!.addressStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressStr = this._addressStr;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressStr = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressStr = value.addressStr;
      this._indicators.internalValue = value.indicators;
    }
  }

  // address_str - computed: false, optional: true, required: false
  private _addressStr?: string; 
  public get addressStr() {
    return this.getStringAttribute('address_str');
  }
  public set addressStr(value: string) {
    this._addressStr = value;
  }
  public resetAddressStr() {
    this._addressStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressStrInput() {
    return this._addressStr;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#address DataThunderDdosDstZonePortZoneServiceOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#rate DataThunderDdosDstZonePortZoneServiceOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._rate = value.rate;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_index DataThunderDdosDstZonePortZoneServiceOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicator_name DataThunderDdosDstZonePortZoneServiceOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#sources DataThunderDdosDstZonePortZoneServiceOper#sources}
  */
  readonly sources?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    sources: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesToTerraform, true)(struct!.sources),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._sources.internalValue = value.sources;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsOutputReference {
    return new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#details DataThunderDdosDstZonePortZoneServiceOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#finished DataThunderDdosDstZonePortZoneServiceOper#finished}
  */
  readonly finished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#next_indicator DataThunderDdosDstZonePortZoneServiceOper#next_indicator}
  */
  readonly nextIndicator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#top_k_key DataThunderDdosDstZonePortZoneServiceOper#top_k_key}
  */
  readonly topKKey?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#entry_list DataThunderDdosDstZonePortZoneServiceOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#indicators DataThunderDdosDstZonePortZoneServiceOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.numberToTerraform(struct!.details),
    finished: cdktf.numberToTerraform(struct!.finished),
    next_indicator: cdktf.numberToTerraform(struct!.nextIndicator),
    top_k_key: cdktf.stringToTerraform(struct!.topKKey),
    entry_list: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructToTerraform, true)(struct!.entryList),
    indicators: cdktf.listMapper(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.numberToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    finished: {
      value: cdktf.numberToHclTerraform(struct!.finished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_indicator: {
      value: cdktf.numberToHclTerraform(struct!.nextIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_k_key: {
      value: cdktf.stringToHclTerraform(struct!.topKKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructList",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._finished !== undefined) {
      hasAnyValues = true;
      internalValueResult.finished = this._finished;
    }
    if (this._nextIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextIndicator = this._nextIndicator;
    }
    if (this._topKKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKKey = this._topKKey;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._details = undefined;
      this._finished = undefined;
      this._nextIndicator = undefined;
      this._topKKey = undefined;
      this._entryList.internalValue = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._details = value.details;
      this._finished = value.finished;
      this._nextIndicator = value.nextIndicator;
      this._topKKey = value.topKKey;
      this._entryList.internalValue = value.entryList;
      this._indicators.internalValue = value.indicators;
    }
  }

  // details - computed: false, optional: true, required: false
  private _details?: number; 
  public get details() {
    return this.getNumberAttribute('details');
  }
  public set details(value: number) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // finished - computed: false, optional: true, required: false
  private _finished?: number; 
  public get finished() {
    return this.getNumberAttribute('finished');
  }
  public set finished(value: number) {
    this._finished = value;
  }
  public resetFinished() {
    this._finished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishedInput() {
    return this._finished;
  }

  // next_indicator - computed: false, optional: true, required: false
  private _nextIndicator?: number; 
  public get nextIndicator() {
    return this.getNumberAttribute('next_indicator');
  }
  public set nextIndicator(value: number) {
    this._nextIndicator = value;
  }
  public resetNextIndicator() {
    this._nextIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIndicatorInput() {
    return this._nextIndicator;
  }

  // top_k_key - computed: false, optional: true, required: false
  private _topKKey?: string; 
  public get topKKey() {
    return this.getStringAttribute('top_k_key');
  }
  public set topKKey(value: string) {
    this._topKKey = value;
  }
  public resetTopKKey() {
    this._topKKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKKeyInput() {
    return this._topKKey;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}
export interface DataThunderDdosDstZonePortZoneServiceOperTopkSources {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#oper DataThunderDdosDstZonePortZoneServiceOper#oper}
  */
  readonly oper?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOper;
}

export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesToTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstZonePortZoneServiceOperTopkSourcesToHclTerraform(struct?: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOutputReference | DataThunderDdosDstZonePortZoneServiceOperTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortZoneServiceOperTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortZoneServiceOperTopkSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper thunder_ddos_dst_zone_port_zone_service_oper}
*/
export class DataThunderDdosDstZonePortZoneServiceOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZonePortZoneServiceOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZonePortZoneServiceOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZonePortZoneServiceOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZonePortZoneServiceOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_port_zone_service_oper thunder_ddos_dst_zone_port_zone_service_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZonePortZoneServiceOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZonePortZoneServiceOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_oper',
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
    this._protocol = config.protocol;
    this._zoneName = config.zoneName;
    this._ipFilteringPolicyOper.internalValue = config.ipFilteringPolicyOper;
    this._ips.internalValue = config.ips;
    this._oper.internalValue = config.oper;
    this._patternRecognition.internalValue = config.patternRecognition;
    this._patternRecognitionPuDetails.internalValue = config.patternRecognitionPuDetails;
    this._portInd.internalValue = config.portInd;
    this._progressionTracking.internalValue = config.progressionTracking;
    this._topkDestinations.internalValue = config.topkDestinations;
    this._topkSources.internalValue = config.topkSources;
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

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new DataThunderDdosDstZonePortZoneServiceOperIpsOutputReference(this, "ips");
  public get ips() {
    return this._ips;
  }
  public putIps(value: DataThunderDdosDstZonePortZoneServiceOperIps) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZonePortZoneServiceOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZonePortZoneServiceOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DataThunderDdosDstZonePortZoneServiceOperPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DataThunderDdosDstZonePortZoneServiceOperPortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DataThunderDdosDstZonePortZoneServiceOperProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DataThunderDdosDstZonePortZoneServiceOperTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DataThunderDdosDstZonePortZoneServiceOperTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DataThunderDdosDstZonePortZoneServiceOperTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_num: cdktf.numberToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      ip_filtering_policy_oper: dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperToTerraform(this._ipFilteringPolicyOper.internalValue),
      ips: dataThunderDdosDstZonePortZoneServiceOperIpsToTerraform(this._ips.internalValue),
      oper: dataThunderDdosDstZonePortZoneServiceOperOperToTerraform(this._oper.internalValue),
      pattern_recognition: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionToTerraform(this._patternRecognition.internalValue),
      pattern_recognition_pu_details: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsToTerraform(this._patternRecognitionPuDetails.internalValue),
      port_ind: dataThunderDdosDstZonePortZoneServiceOperPortIndToTerraform(this._portInd.internalValue),
      progression_tracking: dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingToTerraform(this._progressionTracking.internalValue),
      topk_destinations: dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsToTerraform(this._topkDestinations.internalValue),
      topk_sources: dataThunderDdosDstZonePortZoneServiceOperTopkSourcesToTerraform(this._topkSources.internalValue),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      ip_filtering_policy_oper: {
        value: dataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperToHclTerraform(this._ipFilteringPolicyOper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperIpFilteringPolicyOperList",
      },
      ips: {
        value: dataThunderDdosDstZonePortZoneServiceOperIpsToHclTerraform(this._ips.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperIpsList",
      },
      oper: {
        value: dataThunderDdosDstZonePortZoneServiceOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperOperList",
      },
      pattern_recognition: {
        value: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionToHclTerraform(this._patternRecognition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionList",
      },
      pattern_recognition_pu_details: {
        value: dataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsToHclTerraform(this._patternRecognitionPuDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPatternRecognitionPuDetailsList",
      },
      port_ind: {
        value: dataThunderDdosDstZonePortZoneServiceOperPortIndToHclTerraform(this._portInd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperPortIndList",
      },
      progression_tracking: {
        value: dataThunderDdosDstZonePortZoneServiceOperProgressionTrackingToHclTerraform(this._progressionTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperProgressionTrackingList",
      },
      topk_destinations: {
        value: dataThunderDdosDstZonePortZoneServiceOperTopkDestinationsToHclTerraform(this._topkDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkDestinationsList",
      },
      topk_sources: {
        value: dataThunderDdosDstZonePortZoneServiceOperTopkSourcesToHclTerraform(this._topkSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortZoneServiceOperTopkSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
