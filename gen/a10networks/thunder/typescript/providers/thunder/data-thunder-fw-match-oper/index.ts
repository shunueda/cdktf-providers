// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwMatchOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#id DataThunderFwMatchOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#oper DataThunderFwMatchOper#oper}
  */
  readonly oper?: DataThunderFwMatchOperOper;
}
export interface DataThunderFwMatchOperOperRuleIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#matching_rule DataThunderFwMatchOper#matching_rule}
  */
  readonly matchingRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#matching_rule_type DataThunderFwMatchOper#matching_rule_type}
  */
  readonly matchingRuleType?: number;
}

export function dataThunderFwMatchOperOperRuleIdsToTerraform(struct?: DataThunderFwMatchOperOperRuleIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_rule: cdktf.stringToTerraform(struct!.matchingRule),
    matching_rule_type: cdktf.numberToTerraform(struct!.matchingRuleType),
  }
}


export function dataThunderFwMatchOperOperRuleIdsToHclTerraform(struct?: DataThunderFwMatchOperOperRuleIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matching_rule: {
      value: cdktf.stringToHclTerraform(struct!.matchingRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_rule_type: {
      value: cdktf.numberToHclTerraform(struct!.matchingRuleType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwMatchOperOperRuleIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwMatchOperOperRuleIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRule = this._matchingRule;
    }
    if (this._matchingRuleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRuleType = this._matchingRuleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwMatchOperOperRuleIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingRule = undefined;
      this._matchingRuleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingRule = value.matchingRule;
      this._matchingRuleType = value.matchingRuleType;
    }
  }

  // matching_rule - computed: false, optional: true, required: false
  private _matchingRule?: string; 
  public get matchingRule() {
    return this.getStringAttribute('matching_rule');
  }
  public set matchingRule(value: string) {
    this._matchingRule = value;
  }
  public resetMatchingRule() {
    this._matchingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleInput() {
    return this._matchingRule;
  }

  // matching_rule_type - computed: false, optional: true, required: false
  private _matchingRuleType?: number; 
  public get matchingRuleType() {
    return this.getNumberAttribute('matching_rule_type');
  }
  public set matchingRuleType(value: number) {
    this._matchingRuleType = value;
  }
  public resetMatchingRuleType() {
    this._matchingRuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRuleTypeInput() {
    return this._matchingRuleType;
  }
}

export class DataThunderFwMatchOperOperRuleIdsList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwMatchOperOperRuleIds[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwMatchOperOperRuleIdsOutputReference {
    return new DataThunderFwMatchOperOperRuleIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwMatchOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#active_access_control_rule_set DataThunderFwMatchOper#active_access_control_rule_set}
  */
  readonly activeAccessControlRuleSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#active_traffic_control_rule_set DataThunderFwMatchOper#active_traffic_control_rule_set}
  */
  readonly activeTrafficControlRuleSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#dst_ipv4_addr DataThunderFwMatchOper#dst_ipv4_addr}
  */
  readonly dstIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#dst_ipv6_addr DataThunderFwMatchOper#dst_ipv6_addr}
  */
  readonly dstIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#dst_port DataThunderFwMatchOper#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#error_msg DataThunderFwMatchOper#error_msg}
  */
  readonly errorMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#icmp DataThunderFwMatchOper#icmp}
  */
  readonly icmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#icmp_type DataThunderFwMatchOper#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#icmpv6 DataThunderFwMatchOper#icmpv6}
  */
  readonly icmpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#matching_rules_fetched DataThunderFwMatchOper#matching_rules_fetched}
  */
  readonly matchingRulesFetched?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#matching_rules_total DataThunderFwMatchOper#matching_rules_total}
  */
  readonly matchingRulesTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#show_all DataThunderFwMatchOper#show_all}
  */
  readonly showAll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#src_ipv4_addr DataThunderFwMatchOper#src_ipv4_addr}
  */
  readonly srcIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#src_ipv6_addr DataThunderFwMatchOper#src_ipv6_addr}
  */
  readonly srcIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#src_port DataThunderFwMatchOper#src_port}
  */
  readonly srcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#tcp DataThunderFwMatchOper#tcp}
  */
  readonly tcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#udp DataThunderFwMatchOper#udp}
  */
  readonly udp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#vlan DataThunderFwMatchOper#vlan}
  */
  readonly vlan?: number;
  /**
  * rule_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#rule_ids DataThunderFwMatchOper#rule_ids}
  */
  readonly ruleIds?: DataThunderFwMatchOperOperRuleIds[] | cdktf.IResolvable;
}

export function dataThunderFwMatchOperOperToTerraform(struct?: DataThunderFwMatchOperOperOutputReference | DataThunderFwMatchOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_access_control_rule_set: cdktf.stringToTerraform(struct!.activeAccessControlRuleSet),
    active_traffic_control_rule_set: cdktf.stringToTerraform(struct!.activeTrafficControlRuleSet),
    dst_ipv4_addr: cdktf.stringToTerraform(struct!.dstIpv4Addr),
    dst_ipv6_addr: cdktf.stringToTerraform(struct!.dstIpv6Addr),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    error_msg: cdktf.stringToTerraform(struct!.errorMsg),
    icmp: cdktf.numberToTerraform(struct!.icmp),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    icmpv6: cdktf.numberToTerraform(struct!.icmpv6),
    matching_rules_fetched: cdktf.numberToTerraform(struct!.matchingRulesFetched),
    matching_rules_total: cdktf.numberToTerraform(struct!.matchingRulesTotal),
    show_all: cdktf.numberToTerraform(struct!.showAll),
    src_ipv4_addr: cdktf.stringToTerraform(struct!.srcIpv4Addr),
    src_ipv6_addr: cdktf.stringToTerraform(struct!.srcIpv6Addr),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    tcp: cdktf.numberToTerraform(struct!.tcp),
    udp: cdktf.numberToTerraform(struct!.udp),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    rule_ids: cdktf.listMapper(dataThunderFwMatchOperOperRuleIdsToTerraform, true)(struct!.ruleIds),
  }
}


export function dataThunderFwMatchOperOperToHclTerraform(struct?: DataThunderFwMatchOperOperOutputReference | DataThunderFwMatchOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_access_control_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.activeAccessControlRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_traffic_control_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.activeTrafficControlRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_msg: {
      value: cdktf.stringToHclTerraform(struct!.errorMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matching_rules_fetched: {
      value: cdktf.numberToHclTerraform(struct!.matchingRulesFetched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matching_rules_total: {
      value: cdktf.numberToHclTerraform(struct!.matchingRulesTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show_all: {
      value: cdktf.numberToHclTerraform(struct!.showAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp: {
      value: cdktf.numberToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp: {
      value: cdktf.numberToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_ids: {
      value: cdktf.listMapperHcl(dataThunderFwMatchOperOperRuleIdsToHclTerraform, true)(struct!.ruleIds),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwMatchOperOperRuleIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwMatchOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwMatchOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeAccessControlRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeAccessControlRuleSet = this._activeAccessControlRuleSet;
    }
    if (this._activeTrafficControlRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTrafficControlRuleSet = this._activeTrafficControlRuleSet;
    }
    if (this._dstIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv4Addr = this._dstIpv4Addr;
    }
    if (this._dstIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv6Addr = this._dstIpv6Addr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._errorMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMsg = this._errorMsg;
    }
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._icmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6 = this._icmpv6;
    }
    if (this._matchingRulesFetched !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRulesFetched = this._matchingRulesFetched;
    }
    if (this._matchingRulesTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingRulesTotal = this._matchingRulesTotal;
    }
    if (this._showAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAll = this._showAll;
    }
    if (this._srcIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv4Addr = this._srcIpv4Addr;
    }
    if (this._srcIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6Addr = this._srcIpv6Addr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._ruleIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIds = this._ruleIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwMatchOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeAccessControlRuleSet = undefined;
      this._activeTrafficControlRuleSet = undefined;
      this._dstIpv4Addr = undefined;
      this._dstIpv6Addr = undefined;
      this._dstPort = undefined;
      this._errorMsg = undefined;
      this._icmp = undefined;
      this._icmpType = undefined;
      this._icmpv6 = undefined;
      this._matchingRulesFetched = undefined;
      this._matchingRulesTotal = undefined;
      this._showAll = undefined;
      this._srcIpv4Addr = undefined;
      this._srcIpv6Addr = undefined;
      this._srcPort = undefined;
      this._tcp = undefined;
      this._udp = undefined;
      this._vlan = undefined;
      this._ruleIds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeAccessControlRuleSet = value.activeAccessControlRuleSet;
      this._activeTrafficControlRuleSet = value.activeTrafficControlRuleSet;
      this._dstIpv4Addr = value.dstIpv4Addr;
      this._dstIpv6Addr = value.dstIpv6Addr;
      this._dstPort = value.dstPort;
      this._errorMsg = value.errorMsg;
      this._icmp = value.icmp;
      this._icmpType = value.icmpType;
      this._icmpv6 = value.icmpv6;
      this._matchingRulesFetched = value.matchingRulesFetched;
      this._matchingRulesTotal = value.matchingRulesTotal;
      this._showAll = value.showAll;
      this._srcIpv4Addr = value.srcIpv4Addr;
      this._srcIpv6Addr = value.srcIpv6Addr;
      this._srcPort = value.srcPort;
      this._tcp = value.tcp;
      this._udp = value.udp;
      this._vlan = value.vlan;
      this._ruleIds.internalValue = value.ruleIds;
    }
  }

  // active_access_control_rule_set - computed: false, optional: true, required: false
  private _activeAccessControlRuleSet?: string; 
  public get activeAccessControlRuleSet() {
    return this.getStringAttribute('active_access_control_rule_set');
  }
  public set activeAccessControlRuleSet(value: string) {
    this._activeAccessControlRuleSet = value;
  }
  public resetActiveAccessControlRuleSet() {
    this._activeAccessControlRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAccessControlRuleSetInput() {
    return this._activeAccessControlRuleSet;
  }

  // active_traffic_control_rule_set - computed: false, optional: true, required: false
  private _activeTrafficControlRuleSet?: string; 
  public get activeTrafficControlRuleSet() {
    return this.getStringAttribute('active_traffic_control_rule_set');
  }
  public set activeTrafficControlRuleSet(value: string) {
    this._activeTrafficControlRuleSet = value;
  }
  public resetActiveTrafficControlRuleSet() {
    this._activeTrafficControlRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTrafficControlRuleSetInput() {
    return this._activeTrafficControlRuleSet;
  }

  // dst_ipv4_addr - computed: false, optional: true, required: false
  private _dstIpv4Addr?: string; 
  public get dstIpv4Addr() {
    return this.getStringAttribute('dst_ipv4_addr');
  }
  public set dstIpv4Addr(value: string) {
    this._dstIpv4Addr = value;
  }
  public resetDstIpv4Addr() {
    this._dstIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv4AddrInput() {
    return this._dstIpv4Addr;
  }

  // dst_ipv6_addr - computed: false, optional: true, required: false
  private _dstIpv6Addr?: string; 
  public get dstIpv6Addr() {
    return this.getStringAttribute('dst_ipv6_addr');
  }
  public set dstIpv6Addr(value: string) {
    this._dstIpv6Addr = value;
  }
  public resetDstIpv6Addr() {
    this._dstIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6AddrInput() {
    return this._dstIpv6Addr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // error_msg - computed: false, optional: true, required: false
  private _errorMsg?: string; 
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }
  public set errorMsg(value: string) {
    this._errorMsg = value;
  }
  public resetErrorMsg() {
    this._errorMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMsgInput() {
    return this._errorMsg;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // icmpv6 - computed: false, optional: true, required: false
  private _icmpv6?: number; 
  public get icmpv6() {
    return this.getNumberAttribute('icmpv6');
  }
  public set icmpv6(value: number) {
    this._icmpv6 = value;
  }
  public resetIcmpv6() {
    this._icmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6Input() {
    return this._icmpv6;
  }

  // matching_rules_fetched - computed: false, optional: true, required: false
  private _matchingRulesFetched?: number; 
  public get matchingRulesFetched() {
    return this.getNumberAttribute('matching_rules_fetched');
  }
  public set matchingRulesFetched(value: number) {
    this._matchingRulesFetched = value;
  }
  public resetMatchingRulesFetched() {
    this._matchingRulesFetched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRulesFetchedInput() {
    return this._matchingRulesFetched;
  }

  // matching_rules_total - computed: false, optional: true, required: false
  private _matchingRulesTotal?: number; 
  public get matchingRulesTotal() {
    return this.getNumberAttribute('matching_rules_total');
  }
  public set matchingRulesTotal(value: number) {
    this._matchingRulesTotal = value;
  }
  public resetMatchingRulesTotal() {
    this._matchingRulesTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingRulesTotalInput() {
    return this._matchingRulesTotal;
  }

  // show_all - computed: false, optional: true, required: false
  private _showAll?: number; 
  public get showAll() {
    return this.getNumberAttribute('show_all');
  }
  public set showAll(value: number) {
    this._showAll = value;
  }
  public resetShowAll() {
    this._showAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAllInput() {
    return this._showAll;
  }

  // src_ipv4_addr - computed: false, optional: true, required: false
  private _srcIpv4Addr?: string; 
  public get srcIpv4Addr() {
    return this.getStringAttribute('src_ipv4_addr');
  }
  public set srcIpv4Addr(value: string) {
    this._srcIpv4Addr = value;
  }
  public resetSrcIpv4Addr() {
    this._srcIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4AddrInput() {
    return this._srcIpv4Addr;
  }

  // src_ipv6_addr - computed: false, optional: true, required: false
  private _srcIpv6Addr?: string; 
  public get srcIpv6Addr() {
    return this.getStringAttribute('src_ipv6_addr');
  }
  public set srcIpv6Addr(value: string) {
    this._srcIpv6Addr = value;
  }
  public resetSrcIpv6Addr() {
    this._srcIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6AddrInput() {
    return this._srcIpv6Addr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // rule_ids - computed: false, optional: true, required: false
  private _ruleIds = new DataThunderFwMatchOperOperRuleIdsList(this, "rule_ids", false);
  public get ruleIds() {
    return this._ruleIds;
  }
  public putRuleIds(value: DataThunderFwMatchOperOperRuleIds[] | cdktf.IResolvable) {
    this._ruleIds.internalValue = value;
  }
  public resetRuleIds() {
    this._ruleIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper thunder_fw_match_oper}
*/
export class DataThunderFwMatchOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_match_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwMatchOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwMatchOper to import
  * @param importFromId The id of the existing DataThunderFwMatchOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwMatchOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_match_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_match_oper thunder_fw_match_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwMatchOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwMatchOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_match_oper',
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
  private _oper = new DataThunderFwMatchOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwMatchOperOper) {
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
      oper: dataThunderFwMatchOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderFwMatchOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwMatchOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
