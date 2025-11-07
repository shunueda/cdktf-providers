// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstEntryPortOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#dst_entry_name DataThunderDdosDstEntryPortOper#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#id DataThunderDdosDstEntryPortOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#port_num DataThunderDdosDstEntryPortOper#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#protocol DataThunderDdosDstEntryPortOper#protocol}
  */
  readonly protocol: string;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#ip_filtering_policy_oper DataThunderDdosDstEntryPortOper#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOper;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#oper DataThunderDdosDstEntryPortOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortOperOper;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#pattern_recognition DataThunderDdosDstEntryPortOper#pattern_recognition}
  */
  readonly patternRecognition?: DataThunderDdosDstEntryPortOperPatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#pattern_recognition_pu_details DataThunderDdosDstEntryPortOper#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#port_ind DataThunderDdosDstEntryPortOper#port_ind}
  */
  readonly portInd?: DataThunderDdosDstEntryPortOperPortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#progression_tracking DataThunderDdosDstEntryPortOper#progression_tracking}
  */
  readonly progressionTracking?: DataThunderDdosDstEntryPortOperProgressionTracking;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#topk_sources DataThunderDdosDstEntryPortOper#topk_sources}
  */
  readonly topkSources?: DataThunderDdosDstEntryPortOperTopkSources;
}
export interface DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#hits DataThunderDdosDstEntryPortOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#seq DataThunderDdosDstEntryPortOper#seq}
  */
  readonly seq?: number;
}

export function dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructToTerraform(struct?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructToHclTerraform(struct?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructOutputReference {
    return new DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOper {
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#rule_list DataThunderDdosDstEntryPortOper#rule_list}
  */
  readonly ruleList?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperToTerraform(struct?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperOutputReference | DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_list: cdktf.listMapper(dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperOutputReference | DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOper | undefined) {
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
  private _ruleList = new DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperRuleListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstEntryPortOperIpFilteringPolicyOper {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#oper DataThunderDdosDstEntryPortOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOper;
}

export function dataThunderDdosDstEntryPortOperIpFilteringPolicyOperToTerraform(struct?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOutputReference | DataThunderDdosDstEntryPortOperIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstEntryPortOperIpFilteringPolicyOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOutputReference | DataThunderDdosDstEntryPortOperIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperIpFilteringPolicyOper | undefined) {
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
  private _oper = new DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOper) {
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
export interface DataThunderDdosDstEntryPortOperOperDdosEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#age_str DataThunderDdosDstEntryPortOper#age_str}
  */
  readonly ageStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat1_limit DataThunderDdosDstEntryPortOper#app_stat1_limit}
  */
  readonly appStat1Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat2_limit DataThunderDdosDstEntryPortOper#app_stat2_limit}
  */
  readonly appStat2Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat3_limit DataThunderDdosDstEntryPortOper#app_stat3_limit}
  */
  readonly appStat3Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat4_limit DataThunderDdosDstEntryPortOper#app_stat4_limit}
  */
  readonly appStat4Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat5_limit DataThunderDdosDstEntryPortOper#app_stat5_limit}
  */
  readonly appStat5Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat6_limit DataThunderDdosDstEntryPortOper#app_stat6_limit}
  */
  readonly appStat6Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat7_limit DataThunderDdosDstEntryPortOper#app_stat7_limit}
  */
  readonly appStat7Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat8_limit DataThunderDdosDstEntryPortOper#app_stat8_limit}
  */
  readonly appStat8Limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#connection_limit DataThunderDdosDstEntryPortOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#connection_rate_limit DataThunderDdosDstEntryPortOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat1 DataThunderDdosDstEntryPortOper#current_app_stat1}
  */
  readonly currentAppStat1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat2 DataThunderDdosDstEntryPortOper#current_app_stat2}
  */
  readonly currentAppStat2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat3 DataThunderDdosDstEntryPortOper#current_app_stat3}
  */
  readonly currentAppStat3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat4 DataThunderDdosDstEntryPortOper#current_app_stat4}
  */
  readonly currentAppStat4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat5 DataThunderDdosDstEntryPortOper#current_app_stat5}
  */
  readonly currentAppStat5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat6 DataThunderDdosDstEntryPortOper#current_app_stat6}
  */
  readonly currentAppStat6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat7 DataThunderDdosDstEntryPortOper#current_app_stat7}
  */
  readonly currentAppStat7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_app_stat8 DataThunderDdosDstEntryPortOper#current_app_stat8}
  */
  readonly currentAppStat8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_connection_rate DataThunderDdosDstEntryPortOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_connections DataThunderDdosDstEntryPortOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_frag_packet_rate DataThunderDdosDstEntryPortOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_kbit_rate DataThunderDdosDstEntryPortOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#current_packet_rate DataThunderDdosDstEntryPortOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#debug_str DataThunderDdosDstEntryPortOper#debug_str}
  */
  readonly debugStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#dst_address_str DataThunderDdosDstEntryPortOper#dst_address_str}
  */
  readonly dstAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#dynamic_entry_count DataThunderDdosDstEntryPortOper#dynamic_entry_count}
  */
  readonly dynamicEntryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#dynamic_entry_limit DataThunderDdosDstEntryPortOper#dynamic_entry_limit}
  */
  readonly dynamicEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#frag_packet_rate_limit DataThunderDdosDstEntryPortOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#kbit_rate_limit DataThunderDdosDstEntryPortOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#level_str DataThunderDdosDstEntryPortOper#level_str}
  */
  readonly levelStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#lockup_time_str DataThunderDdosDstEntryPortOper#lockup_time_str}
  */
  readonly lockupTimeStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#packet_rate_limit DataThunderDdosDstEntryPortOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#port_str DataThunderDdosDstEntryPortOper#port_str}
  */
  readonly portStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#sflow_source_id DataThunderDdosDstEntryPortOper#sflow_source_id}
  */
  readonly sflowSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#src_address_str DataThunderDdosDstEntryPortOper#src_address_str}
  */
  readonly srcAddressStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#state_str DataThunderDdosDstEntryPortOper#state_str}
  */
  readonly stateStr?: string;
}

export function dataThunderDdosDstEntryPortOperOperDdosEntryListStructToTerraform(struct?: DataThunderDdosDstEntryPortOperOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age_str: cdktf.stringToTerraform(struct!.ageStr),
    app_stat1_limit: cdktf.stringToTerraform(struct!.appStat1Limit),
    app_stat2_limit: cdktf.stringToTerraform(struct!.appStat2Limit),
    app_stat3_limit: cdktf.stringToTerraform(struct!.appStat3Limit),
    app_stat4_limit: cdktf.stringToTerraform(struct!.appStat4Limit),
    app_stat5_limit: cdktf.stringToTerraform(struct!.appStat5Limit),
    app_stat6_limit: cdktf.stringToTerraform(struct!.appStat6Limit),
    app_stat7_limit: cdktf.stringToTerraform(struct!.appStat7Limit),
    app_stat8_limit: cdktf.stringToTerraform(struct!.appStat8Limit),
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
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    level_str: cdktf.stringToTerraform(struct!.levelStr),
    lockup_time_str: cdktf.stringToTerraform(struct!.lockupTimeStr),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    port_str: cdktf.stringToTerraform(struct!.portStr),
    sflow_source_id: cdktf.stringToTerraform(struct!.sflowSourceId),
    src_address_str: cdktf.stringToTerraform(struct!.srcAddressStr),
    state_str: cdktf.stringToTerraform(struct!.stateStr),
  }
}


export function dataThunderDdosDstEntryPortOperOperDdosEntryListStructToHclTerraform(struct?: DataThunderDdosDstEntryPortOperOperDdosEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age_str: {
      value: cdktf.stringToHclTerraform(struct!.ageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_str: {
      value: cdktf.stringToHclTerraform(struct!.levelStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockup_time_str: {
      value: cdktf.stringToHclTerraform(struct!.lockupTimeStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_str: {
      value: cdktf.stringToHclTerraform(struct!.portStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.sflowSourceId),
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
    state_str: {
      value: cdktf.stringToHclTerraform(struct!.stateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperOperDdosEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperOperDdosEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageStr = this._ageStr;
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
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._levelStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelStr = this._levelStr;
    }
    if (this._lockupTimeStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTimeStr = this._lockupTimeStr;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._portStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStr = this._portStr;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._srcAddressStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddressStr = this._srcAddressStr;
    }
    if (this._stateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateStr = this._stateStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperOperDdosEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ageStr = undefined;
      this._appStat1Limit = undefined;
      this._appStat2Limit = undefined;
      this._appStat3Limit = undefined;
      this._appStat4Limit = undefined;
      this._appStat5Limit = undefined;
      this._appStat6Limit = undefined;
      this._appStat7Limit = undefined;
      this._appStat8Limit = undefined;
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
      this._kbitRateLimit = undefined;
      this._levelStr = undefined;
      this._lockupTimeStr = undefined;
      this._packetRateLimit = undefined;
      this._portStr = undefined;
      this._sflowSourceId = undefined;
      this._srcAddressStr = undefined;
      this._stateStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ageStr = value.ageStr;
      this._appStat1Limit = value.appStat1Limit;
      this._appStat2Limit = value.appStat2Limit;
      this._appStat3Limit = value.appStat3Limit;
      this._appStat4Limit = value.appStat4Limit;
      this._appStat5Limit = value.appStat5Limit;
      this._appStat6Limit = value.appStat6Limit;
      this._appStat7Limit = value.appStat7Limit;
      this._appStat8Limit = value.appStat8Limit;
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
      this._kbitRateLimit = value.kbitRateLimit;
      this._levelStr = value.levelStr;
      this._lockupTimeStr = value.lockupTimeStr;
      this._packetRateLimit = value.packetRateLimit;
      this._portStr = value.portStr;
      this._sflowSourceId = value.sflowSourceId;
      this._srcAddressStr = value.srcAddressStr;
      this._stateStr = value.stateStr;
    }
  }

  // age_str - computed: false, optional: true, required: false
  private _ageStr?: string; 
  public get ageStr() {
    return this.getStringAttribute('age_str');
  }
  public set ageStr(value: string) {
    this._ageStr = value;
  }
  public resetAgeStr() {
    this._ageStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageStrInput() {
    return this._ageStr;
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

  // level_str - computed: false, optional: true, required: false
  private _levelStr?: string; 
  public get levelStr() {
    return this.getStringAttribute('level_str');
  }
  public set levelStr(value: string) {
    this._levelStr = value;
  }
  public resetLevelStr() {
    this._levelStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelStrInput() {
    return this._levelStr;
  }

  // lockup_time_str - computed: false, optional: true, required: false
  private _lockupTimeStr?: string; 
  public get lockupTimeStr() {
    return this.getStringAttribute('lockup_time_str');
  }
  public set lockupTimeStr(value: string) {
    this._lockupTimeStr = value;
  }
  public resetLockupTimeStr() {
    this._lockupTimeStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeStrInput() {
    return this._lockupTimeStr;
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

  // port_str - computed: false, optional: true, required: false
  private _portStr?: string; 
  public get portStr() {
    return this.getStringAttribute('port_str');
  }
  public set portStr(value: string) {
    this._portStr = value;
  }
  public resetPortStr() {
    this._portStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStrInput() {
    return this._portStr;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: string; 
  public get sflowSourceId() {
    return this.getStringAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: string) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
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

  // state_str - computed: false, optional: true, required: false
  private _stateStr?: string; 
  public get stateStr() {
    return this.getStringAttribute('state_str');
  }
  public set stateStr(value: string) {
    this._stateStr = value;
  }
  public resetStateStr() {
    this._stateStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateStrInput() {
    return this._stateStr;
  }
}

export class DataThunderDdosDstEntryPortOperOperDdosEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperOperDdosEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperOperDdosEntryListStructOutputReference {
    return new DataThunderDdosDstEntryPortOperOperDdosEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#all_ip_protos DataThunderDdosDstEntryPortOper#all_ip_protos}
  */
  readonly allIpProtos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#all_ports DataThunderDdosDstEntryPortOper#all_ports}
  */
  readonly allPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#all_src_ports DataThunderDdosDstEntryPortOper#all_src_ports}
  */
  readonly allSrcPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#app_stat DataThunderDdosDstEntryPortOper#app_stat}
  */
  readonly appStat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#domain_name DataThunderDdosDstEntryPortOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#entry_displayed_count DataThunderDdosDstEntryPortOper#entry_displayed_count}
  */
  readonly entryDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#hw_blacklisted DataThunderDdosDstEntryPortOper#hw_blacklisted}
  */
  readonly hwBlacklisted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#l4_ext_rate DataThunderDdosDstEntryPortOper#l4_ext_rate}
  */
  readonly l4ExtRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#port_protocol DataThunderDdosDstEntryPortOper#port_protocol}
  */
  readonly portProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#reource_limit_alloc DataThunderDdosDstEntryPortOper#reource_limit_alloc}
  */
  readonly reourceLimitAlloc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#reporting_status DataThunderDdosDstEntryPortOper#reporting_status}
  */
  readonly reportingStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#resource_limit_config DataThunderDdosDstEntryPortOper#resource_limit_config}
  */
  readonly resourceLimitConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#resource_limit_remain DataThunderDdosDstEntryPortOper#resource_limit_remain}
  */
  readonly resourceLimitRemain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#resource_usage DataThunderDdosDstEntryPortOper#resource_usage}
  */
  readonly resourceUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#service_displayed_count DataThunderDdosDstEntryPortOper#service_displayed_count}
  */
  readonly serviceDisplayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#sflow_source_id DataThunderDdosDstEntryPortOper#sflow_source_id}
  */
  readonly sflowSourceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#suffix_request_rate DataThunderDdosDstEntryPortOper#suffix_request_rate}
  */
  readonly suffixRequestRate?: number;
  /**
  * ddos_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#ddos_entry_list DataThunderDdosDstEntryPortOper#ddos_entry_list}
  */
  readonly ddosEntryList?: DataThunderDdosDstEntryPortOperOperDdosEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperOperToTerraform(struct?: DataThunderDdosDstEntryPortOperOperOutputReference | DataThunderDdosDstEntryPortOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_ip_protos: cdktf.numberToTerraform(struct!.allIpProtos),
    all_ports: cdktf.numberToTerraform(struct!.allPorts),
    all_src_ports: cdktf.numberToTerraform(struct!.allSrcPorts),
    app_stat: cdktf.numberToTerraform(struct!.appStat),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    entry_displayed_count: cdktf.numberToTerraform(struct!.entryDisplayedCount),
    hw_blacklisted: cdktf.stringToTerraform(struct!.hwBlacklisted),
    l4_ext_rate: cdktf.numberToTerraform(struct!.l4ExtRate),
    port_protocol: cdktf.stringToTerraform(struct!.portProtocol),
    reource_limit_alloc: cdktf.stringToTerraform(struct!.reourceLimitAlloc),
    reporting_status: cdktf.numberToTerraform(struct!.reportingStatus),
    resource_limit_config: cdktf.stringToTerraform(struct!.resourceLimitConfig),
    resource_limit_remain: cdktf.stringToTerraform(struct!.resourceLimitRemain),
    resource_usage: cdktf.numberToTerraform(struct!.resourceUsage),
    service_displayed_count: cdktf.numberToTerraform(struct!.serviceDisplayedCount),
    sflow_source_id: cdktf.numberToTerraform(struct!.sflowSourceId),
    suffix_request_rate: cdktf.numberToTerraform(struct!.suffixRequestRate),
    ddos_entry_list: cdktf.listMapper(dataThunderDdosDstEntryPortOperOperDdosEntryListStructToTerraform, true)(struct!.ddosEntryList),
  }
}


export function dataThunderDdosDstEntryPortOperOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperOperOutputReference | DataThunderDdosDstEntryPortOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_ip_protos: {
      value: cdktf.numberToHclTerraform(struct!.allIpProtos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_ports: {
      value: cdktf.numberToHclTerraform(struct!.allPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_src_ports: {
      value: cdktf.numberToHclTerraform(struct!.allSrcPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_stat: {
      value: cdktf.numberToHclTerraform(struct!.appStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    hw_blacklisted: {
      value: cdktf.stringToHclTerraform(struct!.hwBlacklisted),
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
    port_protocol: {
      value: cdktf.stringToHclTerraform(struct!.portProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reource_limit_alloc: {
      value: cdktf.stringToHclTerraform(struct!.reourceLimitAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reporting_status: {
      value: cdktf.numberToHclTerraform(struct!.reportingStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_limit_config: {
      value: cdktf.stringToHclTerraform(struct!.resourceLimitConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_limit_remain: {
      value: cdktf.stringToHclTerraform(struct!.resourceLimitRemain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_usage: {
      value: cdktf.numberToHclTerraform(struct!.resourceUsage),
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
    sflow_source_id: {
      value: cdktf.numberToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suffix_request_rate: {
      value: cdktf.numberToHclTerraform(struct!.suffixRequestRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperOperDdosEntryListStructToHclTerraform, true)(struct!.ddosEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperOperDdosEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allIpProtos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allIpProtos = this._allIpProtos;
    }
    if (this._allPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPorts = this._allPorts;
    }
    if (this._allSrcPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSrcPorts = this._allSrcPorts;
    }
    if (this._appStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStat = this._appStat;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._entryDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDisplayedCount = this._entryDisplayedCount;
    }
    if (this._hwBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlacklisted = this._hwBlacklisted;
    }
    if (this._l4ExtRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4ExtRate = this._l4ExtRate;
    }
    if (this._portProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.portProtocol = this._portProtocol;
    }
    if (this._reourceLimitAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.reourceLimitAlloc = this._reourceLimitAlloc;
    }
    if (this._reportingStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingStatus = this._reportingStatus;
    }
    if (this._resourceLimitConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimitConfig = this._resourceLimitConfig;
    }
    if (this._resourceLimitRemain !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimitRemain = this._resourceLimitRemain;
    }
    if (this._resourceUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUsage = this._resourceUsage;
    }
    if (this._serviceDisplayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDisplayedCount = this._serviceDisplayedCount;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._suffixRequestRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixRequestRate = this._suffixRequestRate;
    }
    if (this._ddosEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryList = this._ddosEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allIpProtos = undefined;
      this._allPorts = undefined;
      this._allSrcPorts = undefined;
      this._appStat = undefined;
      this._domainName = undefined;
      this._entryDisplayedCount = undefined;
      this._hwBlacklisted = undefined;
      this._l4ExtRate = undefined;
      this._portProtocol = undefined;
      this._reourceLimitAlloc = undefined;
      this._reportingStatus = undefined;
      this._resourceLimitConfig = undefined;
      this._resourceLimitRemain = undefined;
      this._resourceUsage = undefined;
      this._serviceDisplayedCount = undefined;
      this._sflowSourceId = undefined;
      this._suffixRequestRate = undefined;
      this._ddosEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allIpProtos = value.allIpProtos;
      this._allPorts = value.allPorts;
      this._allSrcPorts = value.allSrcPorts;
      this._appStat = value.appStat;
      this._domainName = value.domainName;
      this._entryDisplayedCount = value.entryDisplayedCount;
      this._hwBlacklisted = value.hwBlacklisted;
      this._l4ExtRate = value.l4ExtRate;
      this._portProtocol = value.portProtocol;
      this._reourceLimitAlloc = value.reourceLimitAlloc;
      this._reportingStatus = value.reportingStatus;
      this._resourceLimitConfig = value.resourceLimitConfig;
      this._resourceLimitRemain = value.resourceLimitRemain;
      this._resourceUsage = value.resourceUsage;
      this._serviceDisplayedCount = value.serviceDisplayedCount;
      this._sflowSourceId = value.sflowSourceId;
      this._suffixRequestRate = value.suffixRequestRate;
      this._ddosEntryList.internalValue = value.ddosEntryList;
    }
  }

  // all_ip_protos - computed: false, optional: true, required: false
  private _allIpProtos?: number; 
  public get allIpProtos() {
    return this.getNumberAttribute('all_ip_protos');
  }
  public set allIpProtos(value: number) {
    this._allIpProtos = value;
  }
  public resetAllIpProtos() {
    this._allIpProtos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allIpProtosInput() {
    return this._allIpProtos;
  }

  // all_ports - computed: false, optional: true, required: false
  private _allPorts?: number; 
  public get allPorts() {
    return this.getNumberAttribute('all_ports');
  }
  public set allPorts(value: number) {
    this._allPorts = value;
  }
  public resetAllPorts() {
    this._allPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPortsInput() {
    return this._allPorts;
  }

  // all_src_ports - computed: false, optional: true, required: false
  private _allSrcPorts?: number; 
  public get allSrcPorts() {
    return this.getNumberAttribute('all_src_ports');
  }
  public set allSrcPorts(value: number) {
    this._allSrcPorts = value;
  }
  public resetAllSrcPorts() {
    this._allSrcPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSrcPortsInput() {
    return this._allSrcPorts;
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

  // hw_blacklisted - computed: false, optional: true, required: false
  private _hwBlacklisted?: string; 
  public get hwBlacklisted() {
    return this.getStringAttribute('hw_blacklisted');
  }
  public set hwBlacklisted(value: string) {
    this._hwBlacklisted = value;
  }
  public resetHwBlacklisted() {
    this._hwBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistedInput() {
    return this._hwBlacklisted;
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

  // port_protocol - computed: false, optional: true, required: false
  private _portProtocol?: string; 
  public get portProtocol() {
    return this.getStringAttribute('port_protocol');
  }
  public set portProtocol(value: string) {
    this._portProtocol = value;
  }
  public resetPortProtocol() {
    this._portProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portProtocolInput() {
    return this._portProtocol;
  }

  // reource_limit_alloc - computed: false, optional: true, required: false
  private _reourceLimitAlloc?: string; 
  public get reourceLimitAlloc() {
    return this.getStringAttribute('reource_limit_alloc');
  }
  public set reourceLimitAlloc(value: string) {
    this._reourceLimitAlloc = value;
  }
  public resetReourceLimitAlloc() {
    this._reourceLimitAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reourceLimitAllocInput() {
    return this._reourceLimitAlloc;
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

  // resource_limit_config - computed: false, optional: true, required: false
  private _resourceLimitConfig?: string; 
  public get resourceLimitConfig() {
    return this.getStringAttribute('resource_limit_config');
  }
  public set resourceLimitConfig(value: string) {
    this._resourceLimitConfig = value;
  }
  public resetResourceLimitConfig() {
    this._resourceLimitConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitConfigInput() {
    return this._resourceLimitConfig;
  }

  // resource_limit_remain - computed: false, optional: true, required: false
  private _resourceLimitRemain?: string; 
  public get resourceLimitRemain() {
    return this.getStringAttribute('resource_limit_remain');
  }
  public set resourceLimitRemain(value: string) {
    this._resourceLimitRemain = value;
  }
  public resetResourceLimitRemain() {
    this._resourceLimitRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitRemainInput() {
    return this._resourceLimitRemain;
  }

  // resource_usage - computed: false, optional: true, required: false
  private _resourceUsage?: number; 
  public get resourceUsage() {
    return this.getNumberAttribute('resource_usage');
  }
  public set resourceUsage(value: number) {
    this._resourceUsage = value;
  }
  public resetResourceUsage() {
    this._resourceUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageInput() {
    return this._resourceUsage;
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

  // ddos_entry_list - computed: false, optional: true, required: false
  private _ddosEntryList = new DataThunderDdosDstEntryPortOperOperDdosEntryListStructList(this, "ddos_entry_list", false);
  public get ddosEntryList() {
    return this._ddosEntryList;
  }
  public putDdosEntryList(value: DataThunderDdosDstEntryPortOperOperDdosEntryListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_desc DataThunderDdosDstEntryPortOper#filter_desc}
  */
  readonly filterDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_enabled DataThunderDdosDstEntryPortOper#filter_enabled}
  */
  readonly filterEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_expr DataThunderDdosDstEntryPortOper#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#hardware_filter DataThunderDdosDstEntryPortOper#hardware_filter}
  */
  readonly hardwareFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#processing_unit DataThunderDdosDstEntryPortOper#processing_unit}
  */
  readonly processingUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#sample_ratio DataThunderDdosDstEntryPortOper#sample_ratio}
  */
  readonly sampleRatio?: number;
}

export function dataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructToTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable): any {
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


export function dataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructOutputReference {
    return new DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperPatternRecognitionOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_count DataThunderDdosDstEntryPortOper#filter_count}
  */
  readonly filterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_threshold DataThunderDdosDstEntryPortOper#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#peace_pkt_count DataThunderDdosDstEntryPortOper#peace_pkt_count}
  */
  readonly peacePktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#state DataThunderDdosDstEntryPortOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#timestamp DataThunderDdosDstEntryPortOper#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#war_pkt_count DataThunderDdosDstEntryPortOper#war_pkt_count}
  */
  readonly warPktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#war_pkt_percentage DataThunderDdosDstEntryPortOper#war_pkt_percentage}
  */
  readonly warPktPercentage?: number;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_list DataThunderDdosDstEntryPortOper#filter_list}
  */
  readonly filterList?: DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperPatternRecognitionOperToTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionOperOutputReference | DataThunderDdosDstEntryPortOperPatternRecognitionOper): any {
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
    filter_list: cdktf.listMapper(dataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructToTerraform, true)(struct!.filterList),
  }
}


export function dataThunderDdosDstEntryPortOperPatternRecognitionOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionOperOutputReference | DataThunderDdosDstEntryPortOperPatternRecognitionOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructToHclTerraform, true)(struct!.filterList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPatternRecognitionOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperPatternRecognitionOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperPatternRecognitionOper | undefined) {
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
  private _filterList = new DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataThunderDdosDstEntryPortOperPatternRecognitionOperFilterListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstEntryPortOperPatternRecognition {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#oper DataThunderDdosDstEntryPortOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortOperPatternRecognitionOper;
}

export function dataThunderDdosDstEntryPortOperPatternRecognitionToTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionOutputReference | DataThunderDdosDstEntryPortOperPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstEntryPortOperPatternRecognitionOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstEntryPortOperPatternRecognitionToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionOutputReference | DataThunderDdosDstEntryPortOperPatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstEntryPortOperPatternRecognitionOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperPatternRecognitionOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPatternRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperPatternRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperPatternRecognition | undefined) {
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
  private _oper = new DataThunderDdosDstEntryPortOperPatternRecognitionOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortOperPatternRecognitionOper) {
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
export interface DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_desc DataThunderDdosDstEntryPortOper#filter_desc}
  */
  readonly filterDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_enabled DataThunderDdosDstEntryPortOper#filter_enabled}
  */
  readonly filterEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_expr DataThunderDdosDstEntryPortOper#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#hardware_filter DataThunderDdosDstEntryPortOper#hardware_filter}
  */
  readonly hardwareFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#sample_ratio DataThunderDdosDstEntryPortOper#sample_ratio}
  */
  readonly sampleRatio?: number;
}

export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable): any {
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


export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructOutputReference {
    return new DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_count DataThunderDdosDstEntryPortOper#filter_count}
  */
  readonly filterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_threshold DataThunderDdosDstEntryPortOper#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#peace_pkt_count DataThunderDdosDstEntryPortOper#peace_pkt_count}
  */
  readonly peacePktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#processing_unit DataThunderDdosDstEntryPortOper#processing_unit}
  */
  readonly processingUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#state DataThunderDdosDstEntryPortOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#timestamp DataThunderDdosDstEntryPortOper#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#war_pkt_count DataThunderDdosDstEntryPortOper#war_pkt_count}
  */
  readonly warPktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#war_pkt_percentage DataThunderDdosDstEntryPortOper#war_pkt_percentage}
  */
  readonly warPktPercentage?: number;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#filter_list DataThunderDdosDstEntryPortOper#filter_list}
  */
  readonly filterList?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersToTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable): any {
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
    filter_list: cdktf.listMapper(dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToTerraform, true)(struct!.filterList),
  }
}


export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructToHclTerraform, true)(struct!.filterList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters | cdktf.IResolvable | undefined) {
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
  private _filterList = new DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersFilterListStruct[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersOutputReference {
    return new DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOper {
  /**
  * all_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#all_filters DataThunderDdosDstEntryPortOper#all_filters}
  */
  readonly allFilters?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperToTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperOutputReference | DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_filters: cdktf.listMapper(dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersToTerraform, true)(struct!.allFilters),
  }
}


export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperOutputReference | DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_filters: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersToHclTerraform, true)(struct!.allFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allFilters = this._allFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOper | undefined) {
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
  private _allFilters = new DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFiltersList(this, "all_filters", false);
  public get allFilters() {
    return this._allFilters;
  }
  public putAllFilters(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperAllFilters[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstEntryPortOperPatternRecognitionPuDetails {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#oper DataThunderDdosDstEntryPortOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOper;
}

export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsToTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOutputReference | DataThunderDdosDstEntryPortOperPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOutputReference | DataThunderDdosDstEntryPortOperPatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperPatternRecognitionPuDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetails | undefined) {
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
  private _oper = new DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOper) {
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
export interface DataThunderDdosDstEntryPortOperPortIndOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#entry_average DataThunderDdosDstEntryPortOper#entry_average}
  */
  readonly entryAverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#entry_maximum DataThunderDdosDstEntryPortOper#entry_maximum}
  */
  readonly entryMaximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#entry_minimum DataThunderDdosDstEntryPortOper#entry_minimum}
  */
  readonly entryMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#entry_non_zero_minimum DataThunderDdosDstEntryPortOper#entry_non_zero_minimum}
  */
  readonly entryNonZeroMinimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_index DataThunderDdosDstEntryPortOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_name DataThunderDdosDstEntryPortOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#rate DataThunderDdosDstEntryPortOper#rate}
  */
  readonly rate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#src_maximum DataThunderDdosDstEntryPortOper#src_maximum}
  */
  readonly srcMaximum?: string;
}

export function dataThunderDdosDstEntryPortOperPortIndOperIndicatorsToTerraform(struct?: DataThunderDdosDstEntryPortOperPortIndOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_average: cdktf.stringToTerraform(struct!.entryAverage),
    entry_maximum: cdktf.stringToTerraform(struct!.entryMaximum),
    entry_minimum: cdktf.stringToTerraform(struct!.entryMinimum),
    entry_non_zero_minimum: cdktf.stringToTerraform(struct!.entryNonZeroMinimum),
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    rate: cdktf.stringToTerraform(struct!.rate),
    src_maximum: cdktf.stringToTerraform(struct!.srcMaximum),
  }
}


export function dataThunderDdosDstEntryPortOperPortIndOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPortIndOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_average: {
      value: cdktf.stringToHclTerraform(struct!.entryAverage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_maximum: {
      value: cdktf.stringToHclTerraform(struct!.entryMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_minimum: {
      value: cdktf.stringToHclTerraform(struct!.entryMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_non_zero_minimum: {
      value: cdktf.stringToHclTerraform(struct!.entryNonZeroMinimum),
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
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPortIndOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperPortIndOperIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryAverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAverage = this._entryAverage;
    }
    if (this._entryMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryMaximum = this._entryMaximum;
    }
    if (this._entryMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryMinimum = this._entryMinimum;
    }
    if (this._entryNonZeroMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryNonZeroMinimum = this._entryNonZeroMinimum;
    }
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
    if (this._srcMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMaximum = this._srcMaximum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperPortIndOperIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryAverage = undefined;
      this._entryMaximum = undefined;
      this._entryMinimum = undefined;
      this._entryNonZeroMinimum = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._rate = undefined;
      this._srcMaximum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryAverage = value.entryAverage;
      this._entryMaximum = value.entryMaximum;
      this._entryMinimum = value.entryMinimum;
      this._entryNonZeroMinimum = value.entryNonZeroMinimum;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._rate = value.rate;
      this._srcMaximum = value.srcMaximum;
    }
  }

  // entry_average - computed: false, optional: true, required: false
  private _entryAverage?: string; 
  public get entryAverage() {
    return this.getStringAttribute('entry_average');
  }
  public set entryAverage(value: string) {
    this._entryAverage = value;
  }
  public resetEntryAverage() {
    this._entryAverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAverageInput() {
    return this._entryAverage;
  }

  // entry_maximum - computed: false, optional: true, required: false
  private _entryMaximum?: string; 
  public get entryMaximum() {
    return this.getStringAttribute('entry_maximum');
  }
  public set entryMaximum(value: string) {
    this._entryMaximum = value;
  }
  public resetEntryMaximum() {
    this._entryMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryMaximumInput() {
    return this._entryMaximum;
  }

  // entry_minimum - computed: false, optional: true, required: false
  private _entryMinimum?: string; 
  public get entryMinimum() {
    return this.getStringAttribute('entry_minimum');
  }
  public set entryMinimum(value: string) {
    this._entryMinimum = value;
  }
  public resetEntryMinimum() {
    this._entryMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryMinimumInput() {
    return this._entryMinimum;
  }

  // entry_non_zero_minimum - computed: false, optional: true, required: false
  private _entryNonZeroMinimum?: string; 
  public get entryNonZeroMinimum() {
    return this.getStringAttribute('entry_non_zero_minimum');
  }
  public set entryNonZeroMinimum(value: string) {
    this._entryNonZeroMinimum = value;
  }
  public resetEntryNonZeroMinimum() {
    this._entryNonZeroMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNonZeroMinimumInput() {
    return this._entryNonZeroMinimum;
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
}

export class DataThunderDdosDstEntryPortOperPortIndOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperPortIndOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperPortIndOperIndicatorsOutputReference {
    return new DataThunderDdosDstEntryPortOperPortIndOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperPortIndOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#detection_data_source DataThunderDdosDstEntryPortOper#detection_data_source}
  */
  readonly detectionDataSource?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicators DataThunderDdosDstEntryPortOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryPortOperPortIndOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperPortIndOperToTerraform(struct?: DataThunderDdosDstEntryPortOperPortIndOperOutputReference | DataThunderDdosDstEntryPortOperPortIndOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_data_source: cdktf.stringToTerraform(struct!.detectionDataSource),
    indicators: cdktf.listMapper(dataThunderDdosDstEntryPortOperPortIndOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryPortOperPortIndOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPortIndOperOutputReference | DataThunderDdosDstEntryPortOperPortIndOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_data_source: {
      value: cdktf.stringToHclTerraform(struct!.detectionDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperPortIndOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperPortIndOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPortIndOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperPortIndOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionDataSource = this._detectionDataSource;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperPortIndOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionDataSource = undefined;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionDataSource = value.detectionDataSource;
      this._indicators.internalValue = value.indicators;
    }
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

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstEntryPortOperPortIndOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryPortOperPortIndOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstEntryPortOperPortInd {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#oper DataThunderDdosDstEntryPortOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortOperPortIndOper;
}

export function dataThunderDdosDstEntryPortOperPortIndToTerraform(struct?: DataThunderDdosDstEntryPortOperPortIndOutputReference | DataThunderDdosDstEntryPortOperPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstEntryPortOperPortIndOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstEntryPortOperPortIndToHclTerraform(struct?: DataThunderDdosDstEntryPortOperPortIndOutputReference | DataThunderDdosDstEntryPortOperPortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstEntryPortOperPortIndOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperPortIndOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperPortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperPortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperPortInd | undefined) {
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
  private _oper = new DataThunderDdosDstEntryPortOperPortIndOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortOperPortIndOper) {
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
export interface DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#average DataThunderDdosDstEntryPortOper#average}
  */
  readonly average?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_index DataThunderDdosDstEntryPortOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_name DataThunderDdosDstEntryPortOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#maximum DataThunderDdosDstEntryPortOper#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#minimum DataThunderDdosDstEntryPortOper#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#num_sample DataThunderDdosDstEntryPortOper#num_sample}
  */
  readonly numSample?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#standard_deviation DataThunderDdosDstEntryPortOper#standard_deviation}
  */
  readonly standardDeviation?: string;
}

export function dataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsToTerraform(struct?: DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators | cdktf.IResolvable): any {
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


export function dataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsOutputReference {
    return new DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperProgressionTrackingOper {
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicators DataThunderDdosDstEntryPortOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperProgressionTrackingOperToTerraform(struct?: DataThunderDdosDstEntryPortOperProgressionTrackingOperOutputReference | DataThunderDdosDstEntryPortOperProgressionTrackingOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicators: cdktf.listMapper(dataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryPortOperProgressionTrackingOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperProgressionTrackingOperOutputReference | DataThunderDdosDstEntryPortOperProgressionTrackingOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperProgressionTrackingOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperProgressionTrackingOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperProgressionTrackingOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indicators.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indicators.internalValue = value.indicators;
    }
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryPortOperProgressionTrackingOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstEntryPortOperProgressionTracking {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#oper DataThunderDdosDstEntryPortOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortOperProgressionTrackingOper;
}

export function dataThunderDdosDstEntryPortOperProgressionTrackingToTerraform(struct?: DataThunderDdosDstEntryPortOperProgressionTrackingOutputReference | DataThunderDdosDstEntryPortOperProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstEntryPortOperProgressionTrackingOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstEntryPortOperProgressionTrackingToHclTerraform(struct?: DataThunderDdosDstEntryPortOperProgressionTrackingOutputReference | DataThunderDdosDstEntryPortOperProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstEntryPortOperProgressionTrackingOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperProgressionTrackingOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperProgressionTracking | undefined) {
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
  private _oper = new DataThunderDdosDstEntryPortOperProgressionTrackingOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortOperProgressionTrackingOper) {
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
export interface DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_index DataThunderDdosDstEntryPortOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_name DataThunderDdosDstEntryPortOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#max_peak DataThunderDdosDstEntryPortOper#max_peak}
  */
  readonly maxPeak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#psd_wdw_cnt DataThunderDdosDstEntryPortOper#psd_wdw_cnt}
  */
  readonly psdWdwCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#rate DataThunderDdosDstEntryPortOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable): any {
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


export function dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#address_str DataThunderDdosDstEntryPortOper#address_str}
  */
  readonly addressStr?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicators DataThunderDdosDstEntryPortOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructToTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_str: cdktf.stringToTerraform(struct!.addressStr),
    indicators: cdktf.listMapper(dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct | cdktf.IResolvable | undefined) {
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
  private _indicators = new DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListIndicators[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructOutputReference {
    return new DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#address DataThunderDdosDstEntryPortOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#rate DataThunderDdosDstEntryPortOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesToTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesToHclTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable): any {
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

export class DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesOutputReference {
    return new DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_index DataThunderDdosDstEntryPortOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicator_name DataThunderDdosDstEntryPortOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#sources DataThunderDdosDstEntryPortOper#sources}
  */
  readonly sources?: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsToTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    sources: cdktf.listMapper(dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesToTerraform, true)(struct!.sources),
  }
}


export function dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsToHclTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators | cdktf.IResolvable | undefined) {
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
  private _sources = new DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsSources[] | cdktf.IResolvable) {
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

export class DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsOutputReference {
    return new DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstEntryPortOperTopkSourcesOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#details DataThunderDdosDstEntryPortOper#details}
  */
  readonly details?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#finished DataThunderDdosDstEntryPortOper#finished}
  */
  readonly finished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#next_indicator DataThunderDdosDstEntryPortOper#next_indicator}
  */
  readonly nextIndicator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#top_k_key DataThunderDdosDstEntryPortOper#top_k_key}
  */
  readonly topKKey?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#entry_list DataThunderDdosDstEntryPortOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#indicators DataThunderDdosDstEntryPortOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstEntryPortOperTopkSourcesOperToTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperOutputReference | DataThunderDdosDstEntryPortOperTopkSourcesOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.numberToTerraform(struct!.details),
    finished: cdktf.numberToTerraform(struct!.finished),
    next_indicator: cdktf.numberToTerraform(struct!.nextIndicator),
    top_k_key: cdktf.stringToTerraform(struct!.topKKey),
    entry_list: cdktf.listMapper(dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructToTerraform, true)(struct!.entryList),
    indicators: cdktf.listMapper(dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstEntryPortOperTopkSourcesOperToHclTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOperOutputReference | DataThunderDdosDstEntryPortOperTopkSourcesOper): any {
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
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructList",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperTopkSourcesOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperTopkSourcesOper | undefined {
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

  public set internalValue(value: DataThunderDdosDstEntryPortOperTopkSourcesOper | undefined) {
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
  private _entryList = new DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstEntryPortOperTopkSourcesOperEntryListStruct[] | cdktf.IResolvable) {
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
  private _indicators = new DataThunderDdosDstEntryPortOperTopkSourcesOperIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstEntryPortOperTopkSourcesOperIndicators[] | cdktf.IResolvable) {
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
export interface DataThunderDdosDstEntryPortOperTopkSources {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#oper DataThunderDdosDstEntryPortOper#oper}
  */
  readonly oper?: DataThunderDdosDstEntryPortOperTopkSourcesOper;
}

export function dataThunderDdosDstEntryPortOperTopkSourcesToTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOutputReference | DataThunderDdosDstEntryPortOperTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDstEntryPortOperTopkSourcesOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDstEntryPortOperTopkSourcesToHclTerraform(struct?: DataThunderDdosDstEntryPortOperTopkSourcesOutputReference | DataThunderDdosDstEntryPortOperTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDstEntryPortOperTopkSourcesOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstEntryPortOperTopkSourcesOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryPortOperTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryPortOperTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryPortOperTopkSources | undefined) {
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
  private _oper = new DataThunderDdosDstEntryPortOperTopkSourcesOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortOperTopkSourcesOper) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper thunder_ddos_dst_entry_port_oper}
*/
export class DataThunderDdosDstEntryPortOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_port_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstEntryPortOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstEntryPortOper to import
  * @param importFromId The id of the existing DataThunderDdosDstEntryPortOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstEntryPortOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_port_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_port_oper thunder_ddos_dst_entry_port_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstEntryPortOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstEntryPortOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_port_oper',
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
    this._dstEntryName = config.dstEntryName;
    this._id = config.id;
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._ipFilteringPolicyOper.internalValue = config.ipFilteringPolicyOper;
    this._oper.internalValue = config.oper;
    this._patternRecognition.internalValue = config.patternRecognition;
    this._patternRecognitionPuDetails.internalValue = config.patternRecognitionPuDetails;
    this._portInd.internalValue = config.portInd;
    this._progressionTracking.internalValue = config.progressionTracking;
    this._topkSources.internalValue = config.topkSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DataThunderDdosDstEntryPortOperIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DataThunderDdosDstEntryPortOperIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstEntryPortOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstEntryPortOperOper) {
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
  private _patternRecognition = new DataThunderDdosDstEntryPortOperPatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DataThunderDdosDstEntryPortOperPatternRecognition) {
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
  private _patternRecognitionPuDetails = new DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DataThunderDdosDstEntryPortOperPatternRecognitionPuDetails) {
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
  private _portInd = new DataThunderDdosDstEntryPortOperPortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DataThunderDdosDstEntryPortOperPortInd) {
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
  private _progressionTracking = new DataThunderDdosDstEntryPortOperProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DataThunderDdosDstEntryPortOperProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DataThunderDdosDstEntryPortOperTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DataThunderDdosDstEntryPortOperTopkSources) {
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
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      id: cdktf.stringToTerraform(this._id),
      port_num: cdktf.numberToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      ip_filtering_policy_oper: dataThunderDdosDstEntryPortOperIpFilteringPolicyOperToTerraform(this._ipFilteringPolicyOper.internalValue),
      oper: dataThunderDdosDstEntryPortOperOperToTerraform(this._oper.internalValue),
      pattern_recognition: dataThunderDdosDstEntryPortOperPatternRecognitionToTerraform(this._patternRecognition.internalValue),
      pattern_recognition_pu_details: dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsToTerraform(this._patternRecognitionPuDetails.internalValue),
      port_ind: dataThunderDdosDstEntryPortOperPortIndToTerraform(this._portInd.internalValue),
      progression_tracking: dataThunderDdosDstEntryPortOperProgressionTrackingToTerraform(this._progressionTracking.internalValue),
      topk_sources: dataThunderDdosDstEntryPortOperTopkSourcesToTerraform(this._topkSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      ip_filtering_policy_oper: {
        value: dataThunderDdosDstEntryPortOperIpFilteringPolicyOperToHclTerraform(this._ipFilteringPolicyOper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortOperIpFilteringPolicyOperList",
      },
      oper: {
        value: dataThunderDdosDstEntryPortOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortOperOperList",
      },
      pattern_recognition: {
        value: dataThunderDdosDstEntryPortOperPatternRecognitionToHclTerraform(this._patternRecognition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortOperPatternRecognitionList",
      },
      pattern_recognition_pu_details: {
        value: dataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsToHclTerraform(this._patternRecognitionPuDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortOperPatternRecognitionPuDetailsList",
      },
      port_ind: {
        value: dataThunderDdosDstEntryPortOperPortIndToHclTerraform(this._portInd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortOperPortIndList",
      },
      progression_tracking: {
        value: dataThunderDdosDstEntryPortOperProgressionTrackingToHclTerraform(this._progressionTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortOperProgressionTrackingList",
      },
      topk_sources: {
        value: dataThunderDdosDstEntryPortOperTopkSourcesToHclTerraform(this._topkSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryPortOperTopkSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
